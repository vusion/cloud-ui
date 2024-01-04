<template>
    <table
        cellspacing="0"
        cellpadding="0"
        :class="$style.root"
    >
        <thead v-if="showWeekDays">
            <th v-if="showWeeks" :class="{ [$style.th]: true, [$style.week]: true }">{{ $tt('Week') }}</th>
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
                    v-for="(cell, j) in row"
                    :key="cell.__key__"
                    :type="cell.__type__"
                    :disabled="cell.disabled || (multiple && isModKeyPressed && cell.__type__ !=='current') "
                    :selected="isSelected(cell)"
                    :current="cell.__key__ === currentKey"
                    :class="$style.td"
                    @click="onSelectDate($event, cell)"
                >
                    <div :class="$style.date">
                        {{ cell.date }}
                        <div :class="$style.column" vusion-slot-name="default">
                            <slot :item="{
                                rowIndex: i,
                                cellIndex: j,
                                ...cell,
                            }"></slot>
                        </div>
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
import i18nMixin from '../../mixins/i18n';

export default {
    name: 'date-table',
    // i18n,
    mixins: [i18nMixin('u-calendar-view')],
    props: {
        selectedDates: Array,
        current: Object,
        minDay: Object,
        maxDay: Object,
        showWeekDays: { type: Boolean, default: true },
        showWeeks: { type: Boolean, default: false },
        firstDayOfWeek: { type: Number, default: 1 },
        data: Array,
        startKey: String,
        endKey: String,
        getCommonAttrs: Function,
        multiple: { type: Boolean, default: false },
        year: Number,
        month: Number,
    },
    data() {
        return {
            weekDayTexts: [
                this.$tt('Monday'),
                this.$tt('Tuesday'),
                this.$tt('Wednesday'),
                this.$tt('Thursday'),
                this.$tt('Friday'),
                this.$tt('Saturday'),
                this.$tt('Sunday'),
            ],
            selectedDateKey: this.selectedDates.length > 0 ? this.selectedDates[0].format(DefaultFormatType) : undefined,
            releaseKeyListeners: null,
            isModKeyPressed: false,
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
        selectedDateKeyMap() {
            return this.selectedDates.reduce((acc, date) => ({
                ...acc,
                [date.format(DefaultFormatType)]: true,
            }), {});
        },
        currentKey() {
            return this.current.format(DefaultFormatType);
        },
        rows() {
            const datesLength = 42;
            const { firstDayOfWeek, selectedDates } = this;
            // #date 日期，#day 星期几，参考 day.js API
            // fix：2770426704748544，日期多选，清空value值时展示NaN
            let currentDate = selectedDates[0];
            if (!currentDate) {
                currentDate = dayjs().year(this.year).month(this.month).date(1);
            }
            const firstDateOfMonth = currentDate.clone().date(1).startOf('day');
            const firstDayOfMonth = firstDateOfMonth.day();
            const prevMonthDateLength = firstDayOfMonth >= firstDayOfWeek ? firstDayOfMonth - firstDayOfWeek : firstDayOfMonth + 7 - firstDayOfWeek;
            const dates = [];
            // 日历第一行可能存在前一个月数据
            for (let i = prevMonthDateLength; i >= 1; i--) {
                const prevMonthDate = firstDateOfMonth.subtract(i, 'day');
                dates.push(this.getCommonAttrs(prevMonthDate, { __type__: 'prev' }));
            }
            // 补齐当月数据
            const firstDateOfNextMonth = firstDateOfMonth.add(1, 'month');
            const lastDateOfMonth = firstDateOfNextMonth.subtract(1, 'day');
            for (let i = 0; i < lastDateOfMonth.date(); i++) {
                const currentMonthDate = firstDateOfMonth.add(i, 'day');
                dates.push(this.getCommonAttrs(currentMonthDate, { __type__: 'current' }));
            }
            // 补齐下个月数据
            const nextMonthDatesLength = datesLength - dates.length;
            for (let i = 0; i < nextMonthDatesLength; i++) {
                const nextMonthDate = firstDateOfNextMonth.add(i, 'day');
                dates.push(this.getCommonAttrs(nextMonthDate, { __type__: 'next' }));
            }
            const rows = [];
            for (let i = 0; i < datesLength / 7; i++) {
                const start = i * 7;
                rows.push(dates.slice(start, start + 7));
            }
            return rows;
        },
    },

    mounted() {
        const onKeyDownHandler = (e) => {
            if (this.hasModKey(e)) {
                this.isModKeyPressed = true;
            }
        };
        const onKeyUpHandler = (e) => {
            if (this.hasModKey(e)) {
                this.isModKeyPressed = false;
            }
        };
        window.addEventListener('keydown', onKeyDownHandler);
        window.addEventListener('keyup', onKeyUpHandler);
        this.releaseKeyListeners = () => {
            window.removeEventListener('keydown', onKeyDownHandler);
            window.removeEventListener('keyup', onKeyUpHandler);
        };
    },
    destroyed() {
        if (this.releaseKeyListeners) {
            this.releaseKeyListeners();
        }
    },
    methods: {
        onSelectDate(event, cell) {
            const { __type__, __key__, disabled } = cell;
            if (disabled || (this.multiple && this.hasModKey(event) && __type__ !== 'current')) {
                return;
            }

            const selectedDate = dayjs(__key__, DefaultFormatType);
            if (!this.multiple || !this.hasModKey(event)) {
                if (selectedDate.isSame(this.selectedDates[0])) {
                    return;
                }
                if (__type__ !== 'current') {
                    this.$emit('update:month', selectedDate.month());
                    this.$emit('update:year', selectedDate.year());
                }
                this.$emit('update:selectedDates', { dates: [selectedDate], cell });
            } else {
                let newSelectedDates = this.selectedDates;
                const idx = this.selectedDates.findIndex((d) => d.isSame(selectedDate));
                if (~idx && this.selectedDates.length === 1) {
                    return;
                }
                if (~idx) {
                    newSelectedDates = newSelectedDates.slice(0, idx).concat(newSelectedDates.slice(idx + 1));
                } else {
                    newSelectedDates = newSelectedDates.concat(selectedDate).sort((lhs, rhs) => {
                        if (lhs.isSame(rhs)) {
                            return 0;
                        }
                        return lhs.isBefore(rhs) ? -1 : 1;
                    });
                }
                this.$emit('update:selectedDates', { dates: newSelectedDates, cell });
            }

            this.$emit('select', { ...cell, value: __key__, oldValue: this.selectedDateKey, monthOfStart: cell.Date.startOf('month'), monthOfEnd: cell.Date.endOf('month') });
            this.selectedDateKey = __key__;
        },
        isSelected(cell) {
            // 判断是否是当前的 cell，并且保存下来
            if (this.selectedDateKeyMap[cell.__key__] === true) {
                // this.currentCell = cell;
                return true;
            }
            return false;
        },
        hasModKey(event) {
            if (event.type === 'keyup') {
                return event.keyCode === 91 || event.keyCode === 17;
            }
            return event.metaKey || event.ctrlKey;
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
.column {
    position: static;
    width: auto;
    overflow-y: auto;
    color: var(--color-base);
    text-align: left;
}
</style>
