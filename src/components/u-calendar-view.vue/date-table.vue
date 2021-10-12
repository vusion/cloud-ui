<template>
    <table
        cellspacing="0"
        cellpadding="0"
        :class="$style.root"
    >
        <thead v-if="showWeekDays">
            <th v-if="showWeeks" :class="{ [$style.th]: true, [$style.week]: true }">{{ $t('Week') }}</th>
            <th
                v-for="item in realWeekDayTexts"
                :key="item"
                :class="$style.th"
            >{{ item }}</th>
        </thead>
        <tbody>
            <tr
                v-for="(row, i) in rows"
                :key="i"
                :class="$style.tr"
            >
                <td
                    v-if="showWeeks && row && row.length"
                    :class="{ [$style.td]: true, [$style.weekTd]: true }"
                >
                    <slot name="week">{{ row[0].week }}</slot>
                </td>
                <td
                    v-for="cell in row"
                    :key="cell.key"
                    :type="cell.type"
                    :disabled="cell.disabled"
                    :selected="cell.key === selectedDateKey"
                    :current="cell.key === currentKey"
                    :class="$style.td"
                    @click="onSelectDate(cell)"
                >
                    <div
                        :class="$style.date"
                        vusion-slot-name="default"
                        :vusion-next="true"
                        allowChild
                    >
                        <slot name="head">{{ cell.date }}</slot>
                        <div :class="$style.main">
                            <slot :item="cell"></slot>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import dayjs from 'dayjs';
import i18n from './i18n';
import { getDay, DefaultFormatType } from './utils';

export default {
    name: 'date-table',
    i18n,
    props: {
        selectedDate: Object,
        current: Object,
        minDay: Object,
        maxDay: Object,
        showWeekDays: { type: Boolean, default: true },
        showWeeks: { type: Boolean, default: false },
        firstDayOfWeek: { type: Number, default: 1 },
        data: Array,
        startKey: String,
        endKey: String,
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
        realWeekDayTexts() {
            const { firstDayOfWeek, weekDayTexts } = this;
            if (firstDayOfWeek === 1)
                return weekDayTexts.slice();
            else
                return weekDayTexts.slice(firstDayOfWeek - 1).concat(weekDayTexts.slice(0, firstDayOfWeek - 1));
        },
        selectedDateKey() {
            return this.selectedDate.format(DefaultFormatType);
        },
        currentKey() {
            return this.current.format(DefaultFormatType);
        },
        rows() {
            const datesLength = 42;
            const { firstDayOfWeek, selectedDate } = this;
            // #date 日期，#day 星期几，参考 day.js API
            const firstDateOfMonth = selectedDate.clone().date(1);
            const firstDayOfMonth = firstDateOfMonth.day();
            const prevMonthDateLength = firstDayOfMonth >= firstDayOfWeek ? firstDayOfMonth - firstDayOfWeek : firstDayOfMonth + 7 - firstDayOfWeek;
            const dates = [];
            // 日历第一行可能存在前一个月数据
            for (let i = prevMonthDateLength; i >= 1; i--) {
                const prevMonthDate = firstDateOfMonth.subtract(i, 'day');
                dates.push(this.getCommonAttrs(prevMonthDate, { type: 'prev' }));
            }
            // 补齐当月数据
            const firstDateOfNextMonth = firstDateOfMonth.add(1, 'month');
            const lastDateOfMonth = firstDateOfNextMonth.subtract(1, 'day');
            for (let i = 0; i < lastDateOfMonth.date(); i++) {
                const currentMonthDate = firstDateOfMonth.add(i, 'day');
                dates.push(this.getCommonAttrs(currentMonthDate, { type: 'current' }));
            }
            // 补齐下个月数据
            const nextMonthDatesLength = datesLength - dates.length;
            for (let i = 0; i < nextMonthDatesLength; i++) {
                const nextMonthDate = firstDateOfNextMonth.add(i, 'day');
                dates.push(this.getCommonAttrs(nextMonthDate, { type: 'next' }));
            }
            const rows = [];
            for (let i = 0; i < datesLength / 7; i++) {
                const start = i * 7;
                rows.push(dates.slice(start, start + 7));
            }
            return rows;
        },
    },
    methods: {
        onSelectDate(cell) {
            const { type, key, disabled } = cell;
            if (disabled)
                return;

            this.$emit('select', cell);
            if (key !== this.selectedDateKey) {
                this.$emit('change', cell);
            }
            const selectedDate = dayjs(key, DefaultFormatType);
            if (type !== 'current') {
                this.$emit('update:month', selectedDate.month());
                this.$emit('update:year', selectedDate.year());
            }
            this.$emit('update:selectedDate', selectedDate);
        },
        getCommonAttrs(date, extra) {
            return {
                date: date.date(),
                week: date.week(),
                key: date.format(DefaultFormatType),
                disabled: date.isBefore(this.minDay) || date.isAfter(this.maxDay),
                data: this.getData(date),
                ...extra,
            };
        },
        getData(date) {
            const { data, startKey, endKey } = this;
            if (!data || !data.length)
                return {};
            const validData = data.filter((item) => {
                const startTime = item[startKey];
                const endTime = item[endKey];
                const startDate = getDay(startTime, null);
                const endDate = getDay(endTime, null);
                if (endDate) {
                    return date.isSameOrBefore(endDate) && date.isSameOrAfter(startDate);
                }
                return date.format(DefaultFormatType) === startDate.format(DefaultFormatType);
            });
            if (!validData.length)
                return {};
            if (validData.length === 1)
                return validData[0];
            return validData;
        },
    },
};
</script>

<style module>
.root {
    table-layout: fixed;
    width: 100%;
}

.th {
    padding: 12px 0;
    font-weight: var(--font-weight-normal);
}
.week {
    width: 36px;
    text-align: center;
}

.tr:first-child .td {
    border-top: 1px solid var(--border-color-base);
}
.tr .td:first-child {
    border-left: 1px solid var(--border-color-base);
}
.tr .td[type='prev'],
.tr .td[type='next'] {
    color: var(--color-lighter);
}
/* current */
.tr .td[current] {
    color: var(--brand-primary);
    border-bottom: 2px solid var(--brand-primary);
}
/* selected */
.tr .td[selected], tr .td[selected]:hover {
    color: var(--brand-primary);
    background: var(--calendar-date-background);
}
/* disabled */
.tr .td[disabled], tr .td[disabled]:hover {
    color: var(--calendar-date-disabled);
    cursor: not-allowed;
    background: var(--calendar-date-background-disabled);
}
.td {
    font-weight: var(--font-weight-normal);
    border-bottom: 1px solid var(--border-color-base);
    border-right: 1px solid var(--border-color-base);
    transition: background .3s;
    cursor: pointer;
}
.td:hover {
    background: var(--background-color-lighter);
}
.weekTd {
    text-align: center;
}

.date {
    padding: var(--calendar-date-padding);
    height: var(--calendar-date-height);
    min-width: 24px;
    text-align: var(--calendar-date-text-align);
}
.main {
    position: static;
    width: auto;
    overflow-y: auto;
    color: var(--color-base);
    text-align: left;
}
</style>
