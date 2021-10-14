<template>
    <table
        cellspacing="0"
        cellpadding="0"
        :class="$style.root"
    >
        <thead>
            <th :class="$style.th" :style="fstThStyle">{{ firstTitle }}</th>
            <th
                v-for="item in ths"
                :key="item.key"
                :class="{ [$style.th]: true, [$style.weekend]: item.weekend }"
                :style="thStyle"
            >
                <div>{{ item.date }}</div>
                <div>{{ item.day }}</div>
            </th>
        </thead>
        <tbody>
            <tr
                v-for="(row, i) in rows"
                :key="i"
                :class="$style.tr"
            >
                <td :class="$style.td">{{ row.fieldValue }}</td>
                <td
                    v-for="cell in row.cells"
                    :key="cell.__key__"
                    :class="$style.td"
                >
                    <div :class="$style.column">
                        <slot :item="cell"></slot>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import dayjs from 'dayjs';
import get from 'lodash/get';
import i18n from './i18n';
import { getDay, DefaultFormatType } from './utils';

export default {
    name: 'date-table',
    i18n,
    props: {
        current: Object,
        minDay: Object,
        maxDay: Object,
        data: Array,
        startKey: String,
        endKey: String,
        year: [String, Number],
        month: [String, Number],
        width: [String, Number],
        firstTitle: String,
        firstWidth: [String, Number],
    },
    data() {
        return {
            weekDayTexts: [
                this.$t('Monday'),
                this.$t('Tuesday'),
                this.$t('Wednesday'),
                this.$t('Thursday'),
                this.$t('Friday'),
                this.$t('Saturday'),
                this.$t('Sunday'),
            ],
        };
    },
    computed: {
        currentKey() {
            return this.current.format(DefaultFormatType);
        },
        fstThStyle() {
            return { width: this.getValidWidth(this.firstWidth) };
        },
        thStyle() {
            return { width: this.getValidWidth(this.width) };
        },
        ths() {
            const { year, month, weekDayTexts, minDay, maxDay } = this;
            const firstDateOfMonth = dayjs().year(year).month(month).date(1);
            const firstDateOfNextMonth = firstDateOfMonth.add(1, 'month');
            const lastDateOfMonth = firstDateOfNextMonth.subtract(1, 'day');
            const ths = [];
            for (let i = 0; i < lastDateOfMonth.date(); i++) {
                const currentMonthDate = firstDateOfMonth.add(i, 'day');
                if (currentMonthDate.isBefore(maxDay) && currentMonthDate.isAfter(minDay)) {
                    // dayjs#date 日期，#day 星期几 0(星期天)到6(星期六)
                    const day = currentMonthDate.day();
                    const dayText = weekDayTexts[day === 0 ? 6 : day - 1];
                    ths.push({
                        date: currentMonthDate.date(),
                        day: dayText,
                        weekend: day === 0 || day === 6,
                        key: currentMonthDate.format(DefaultFormatType),
                    });
                }
            }
            return ths;
        },
        rows() {
            const rows = this.data.map((item) => ({
                ...item,
                cells: this.getCells(item.children),
            }));
            return rows;
        },
    },
    methods: {
        getValidWidth(width) {
            return width === 'string' && (width.includes('%') || width.includes('px') || width.includes('rem')) ? width : `${width}px`;
        },
        getCells(children) {
            const { ths, startKey, endKey } = this;
            return ths.map((thItem) => {
                const currentDate = dayjs(thItem.key, DefaultFormatType);
                if (!children || !children.length)
                    return { __key__: thItem.key };
                const validData = children.filter((item) => {
                    const startTime = get(item, startKey, null);
                    const endTime = get(item, endKey, null);
                    const startDate = getDay(startTime, null);
                    const endDate = getDay(endTime, null);
                    if (!startDate)
                        return false;
                    if (endDate) {
                        return currentDate.isSameOrBefore(endDate) && currentDate.isSameOrAfter(startDate);
                    }
                    return currentDate.format(DefaultFormatType) === startDate.format(DefaultFormatType);
                });
                if (!validData.length)
                    return { __key__: thItem.key };
                return { ...validData[0], list: validData, __key__: thItem.key };
            });
        },
    },
};
</script>

<style module>
.root {
    table-layout: fixed;
    width: 100%;
    min-width: 900px;
}

.th {
    padding: 12px 0;
    border-top: 1px solid var(--border-color-base);
    border-right: 1px solid var(--border-color-base);
    border-bottom: 1px solid var(--border-color-base);
    font-weight: var(--font-weight-normal);
    background-color: var(--table-head-background);
}
.th:first-child {
    border-left: 1px solid var(--border-color-base);
}
.weekend {
    color: var(--brand-error);
}

.tr .td:first-child {
    border-left: 1px solid var(--border-color-base);
    font-weight: var(--font-weight-bold);
}
.td {
    font-weight: var(--font-weight-normal);
    border-bottom: 1px solid var(--border-color-base);
    border-right: 1px solid var(--border-color-base);
    transition: background .3s;
    cursor: pointer;
    text-align: center;
}
.column {
    position: static;
    width: auto;
    overflow-y: auto;
    color: var(--color-base);
    text-align: left;
}
</style>
