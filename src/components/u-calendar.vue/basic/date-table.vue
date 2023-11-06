<template>
  <table
    cellspacing="0"
    cellpadding="0"
    @click="handleClick"
    @mousemove="handleMouseMove"
    :class="{ [$style.dateTable]: true, [$style.isWeekMode]: selectionMode === 'week' }">
    <tbody>
    <tr :class="$style.week">
      <th
        v-for="(week, index) in WEEKS"
        :class="{ [$style.weekend]: index === 0 || index === 6 }"
        :key="index">
        {{ $tt(week) }}
      </th>
    </tr>
    <tr
      v-for="(row, key) in rows"
      :class="{ [$style.row]: true, [$style.current]: isWeekActive(row[1]) }"
      :key="key">
      <td
        v-for="(cell, key) in row"
        :class="getCellClasses(cell)"
        :key="key">
        <div>
          <span>
            {{ cell.text | formatDay }}
          </span>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {
    getFirstDayOfMonth,
    getDayCountOfMonth,
    getWeekNumber,
    getStartDateOfMonth,
    prevDate,
    nextDate,
    isDate,
    getDateTimestamp,
    coerceTruthyValueToArray,
} from '../util';
import i18n from '../i18n';
import dayjs from '../../../utils/dayjs';
import i18nMixin from '../../../mixins/i18n';

const WEEKS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// remove the first element that satisfies `pred` from arr
// return a new array if modification occurs
// return the original array otherwise
const removeFromArray = function (arr, pred) {
    const idx = typeof pred === 'function' ? arr.findIndex(pred) : arr.indexOf(pred);
    return idx >= 0 ? [...arr.slice(0, idx), ...arr.slice(idx + 1)] : arr;
};

export default {
    // i18n,
    mixins: [i18nMixin('u-calendar')],

    filters: {
        formatDay(value) {
            return value < 10 ? `0${value}` : value;
        },
    },
    props: {
        firstDayOfWeek: {
            default: 7,
            type: Number,
            validator: (val) => val >= 1 && val <= 7,
        },

        value: {},

        defaultValue: {
            validator(val) {
                // either: null, valid Date object, Array of valid Date objects
                return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate));
            },
        },

        date: {},

        selectionMode: {
            default: 'day',
        },

        disabledDate: {},

        cellClassName: {},

        minDate: {},

        maxDate: {},

        rangeState: {
            default() {
                return {
                    endDate: null,
                    selecting: false,
                };
            },
        },
    },

    data() {
        return {
            tableRows: [[], [], [], [], [], []],
            lastRow: null,
            lastColumn: null,
        };
    },

    computed: {
        offsetDay() {
            const week = this.firstDayOfWeek;
            // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
            return week > 3 ? 7 - week : -week;
        },

        WEEKS() {
            const week = this.firstDayOfWeek;
            return WEEKS.concat(WEEKS).slice(week, week + 7);
        },

        year() {
            return this.date.getFullYear();
        },

        month() {
            return this.date.getMonth();
        },

        startDate() {
            return getStartDateOfMonth(this.year, this.month);
        },

        rows() {
            // TODO: refactory rows / getCellClasses
            const date = new Date(this.year, this.month, 1);
            let day = getFirstDayOfMonth(date); // day of first day
            const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
            const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

            day = (day === 0 ? 7 : day);

            const offset = this.offsetDay;
            const rows = this.tableRows;
            let count = 1;

            const startDate = this.startDate;
            const disabledDate = this.disabledDate;
            const cellClassName = this.cellClassName;
            const selectedDate = this.selectionMode === 'dates' ? coerceTruthyValueToArray(this.value) : [];
            const now = getDateTimestamp(new Date());

            for (let i = 0; i < 6; i++) {
                const row = rows[i];

                for (let j = 0; j < 7; j++) {
                    let cell = row[j];
                    if (!cell) {
                        cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
                    }

                    cell.type = 'normal';

                    const index = i * 7 + j;
                    const time = nextDate(startDate, index - offset).getTime();
                    cell.inRange = time >= getDateTimestamp(this.minDate) && time <= getDateTimestamp(this.maxDate);

                    cell.start = this.minDate && time === getDateTimestamp(this.minDate);
                    cell.end = this.maxDate && time === getDateTimestamp(this.maxDate);
                    const isToday = time === now;

                    if (isToday) {
                        cell.type = 'today';
                    }

                    if (i >= 0 && i <= 1) {
                        const numberOfDaysFromPreviousMonth = day + offset < 0 ? 7 + day + offset : day + offset;

                        if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
                            cell.text = count++;
                        } else {
                            cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7;
                            cell.type = 'prev-month';
                        }
                    } else {
                        if (count <= dateCountOfMonth) {
                            cell.text = count++;
                        } else {
                            cell.text = count++ - dateCountOfMonth;
                            cell.type = 'next-month';
                        }
                    }

                    const cellDate = new Date(time);
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
                    cell.selected = selectedDate.find((date) => date.getTime() === cellDate.getTime());
                    cell.customClass = typeof cellClassName === 'function' && cellClassName(cellDate);
                    this.$set(row, j, cell);
                }

                if (this.selectionMode === 'week') {
                    const start = 0;
                    const end = 6;
                    const isWeekActive = this.isWeekActive(row[start + 1]);

                    row[start].inRange = isWeekActive;
                    row[start].start = isWeekActive;
                    row[end].inRange = isWeekActive;
                    row[end].end = isWeekActive;
                }
            }

            return rows;
        },
    },

    watch: {
        'rangeState.endDate'(newVal) {
            this.markRange(this.minDate, newVal);
        },

        minDate(newVal, oldVal) {
            if (getDateTimestamp(newVal) !== getDateTimestamp(oldVal)) {
                this.markRange(this.minDate, this.maxDate);
            }
        },

        maxDate(newVal, oldVal) {
            if (getDateTimestamp(newVal) !== getDateTimestamp(oldVal)) {
                this.markRange(this.minDate, this.maxDate);
            }
        },
    },

    methods: {
        cellMatchesDate(cell, date) {
            const value = new Date(date);
            return this.year === value.getFullYear()
                && this.month === value.getMonth()
                && Number(cell.text) === value.getDate();
        },

        getCellClasses(cell) {
            const selectionMode = this.selectionMode;
            const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

            const classes = [];
            if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
                classes.push('available');
                if (cell.type === 'today') {
                    classes.push('today');
                }
            } else {
                classes.push(cell.type);
            }

            if (cell.type === 'normal' && defaultValue.some((date) => this.cellMatchesDate(cell, date))) {
                classes.push('default');
            }

            if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && this.cellMatchesDate(cell, this.value)) {
                classes.push('current');
            }

            if (cell.inRange && ((cell.type === 'normal' || cell.type === 'today') || this.selectionMode === 'week')) {
                classes.push('inRange');

                if (cell.start) {
                    classes.push('startDate');
                }

                if (cell.end) {
                    classes.push('endDate');
                }
            }

            if (cell.disabled) {
                classes.push('disabled');
            }

            if (cell.selected) {
                classes.push('selected');
            }

            if (cell.customClass) {
                classes.push(cell.customClass);
            }

            return classes.map((item) => this.$style[item]);
        },

        getDateOfCell(row, column) {
            const offsetFromStart = row * 7 + column - this.offsetDay;
            return nextDate(this.startDate, offsetFromStart);
        },

        isWeekActive(cell) {
            if (this.selectionMode !== 'week')
                return false;
            const newDate = new Date(this.year, this.month, 1);
            const year = newDate.getFullYear();
            const month = newDate.getMonth();

            if (cell.type === 'prev-month') {
                newDate.setMonth(month === 0 ? 11 : month - 1);
                newDate.setFullYear(month === 0 ? year - 1 : year);
            }

            if (cell.type === 'next-month') {
                newDate.setMonth(month === 11 ? 0 : month + 1);
                newDate.setFullYear(month === 11 ? year + 1 : year);
            }

            newDate.setDate(parseInt(cell.text, 10));

            if (isDate(this.value)) {
                const dayOffset = (this.value.getDay() - this.firstDayOfWeek + 7) % 7 - 1;
                const weekDate = prevDate(this.value, dayOffset);
                return weekDate.getTime() === newDate.getTime();
            }
            return false;
        },

        markRange(minDate, maxDate) {
            minDate = getDateTimestamp(minDate);
            maxDate = getDateTimestamp(maxDate) || minDate;
            [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
            // 如果是周选择，标注整周
            if (this.selectionMode === 'week-range') {
                minDate = getDateTimestamp(dayjs(minDate).startOf('isoWeek').toDate());
                maxDate = getDateTimestamp(dayjs(maxDate).endOf('isoWeek').toDate());
            }

            const startDate = this.startDate;
            const rows = this.rows;
            for (let i = 0, k = rows.length; i < k; i++) {
                const row = rows[i];
                for (let j = 0, l = row.length; j < l; j++) {
                    const cell = row[j];
                    const index = i * 7 + j;
                    const time = nextDate(startDate, index - this.offsetDay).getTime();

                    cell.inRange = minDate && time >= minDate && time <= maxDate;
                    cell.start = minDate && time === minDate;
                    cell.end = maxDate && time === maxDate;
                }
            }
        },

        handleMouseMove(event) {
            if (!this.rangeState.selecting)
                return;

            let target = event.target;
            if (target.tagName === 'SPAN') {
                target = target.parentNode.parentNode;
            }
            if (target.tagName === 'DIV') {
                target = target.parentNode;
            }
            if (target.tagName !== 'TD')
                return;

            const row = target.parentNode.rowIndex - 1;
            const column = target.cellIndex;

            // can not select disabled date
            if (this.rows[row][column].disabled)
                return;

            // only update rangeState when mouse moves to a new cell
            // this avoids frequent Date object creation and improves performance
            if (row !== this.lastRow || column !== this.lastColumn) {
                this.lastRow = row;
                this.lastColumn = column;
                this.$emit('changerange', {
                    minDate: this.minDate,
                    maxDate: this.maxDate,
                    rangeState: {
                        selecting: true,
                        endDate: this.getDateOfCell(row, column),
                    },
                });
            }
        },

        handleClick(event) {
            let target = event.target;
            if (target.tagName === 'SPAN') {
                target = target.parentNode.parentNode;
            }
            if (target.tagName === 'DIV') {
                target = target.parentNode;
            }

            if (target.tagName !== 'TD')
                return;

            const row = target.parentNode.rowIndex - 1;
            const column = this.selectionMode === 'week' ? 1 : target.cellIndex;
            const cell = this.rows[row][column];

            if (cell.disabled || cell.type === 'week')
                return;

            const newDate = this.getDateOfCell(row, column);

            if (this.selectionMode === 'range') {
                if (!this.rangeState.selecting) {
                    this.$emit('pick', { minDate: newDate, maxDate: null });
                    this.rangeState.selecting = true;
                } else {
                    if (newDate >= this.minDate) {
                        this.$emit('pick', { minDate: this.minDate, maxDate: newDate });
                    } else {
                        this.$emit('pick', { minDate: newDate, maxDate: this.minDate });
                    }
                    this.rangeState.selecting = false;
                }
            } else if (this.selectionMode === 'week-range') {
                if (!this.rangeState.selecting) {
                    const startDate = dayjs(newDate).startOf('isoWeek').toDate();
                    this.$emit('pick', { minDate: startDate, maxDate: null });
                    this.rangeState.selecting = true;
                } else {
                    if (newDate >= this.minDate) {
                        const endDate = dayjs(newDate).endOf('isoWeek').toDate();
                        this.$emit('pick', { minDate: this.minDate, maxDate: endDate });
                    } else {
                        const startDate = dayjs(newDate).startOf('isoWeek').toDate();
                        this.$emit('pick', { minDate: startDate, maxDate: this.minDate });
                    }
                    this.rangeState.selecting = false;
                }
            } else if (this.selectionMode === 'day') {
                this.$emit('pick', newDate);
            } else if (this.selectionMode === 'week') {
                const weekNumber = getWeekNumber(newDate);
                const value = newDate.getFullYear() + 'w' + weekNumber;
                this.$emit('pick', {
                    year: newDate.getFullYear(),
                    week: weekNumber,
                    value,
                    date: newDate,
                });
            } else if (this.selectionMode === 'dates') {
                const value = this.value || [];
                const newValue = cell.selected ? removeFromArray(value, (date) => date.getTime() === newDate.getTime()) : [...value, newDate];
                this.$emit('pick', newValue);
            }
        },
    },
};
</script>

<style module>
.dateTable {
  font-size: 14px;
  user-select: none;
}

/* .dateTable.isWeekMode .row:hover div {
  background-color: var(--calendar-item-background-inrange);
}

.dateTable.isWeekMode .row:hover td.available:hover {
  color: var(--calendar-item-color-hover);
}

.dateTable.isWeekMode .row:hover td:first-child div {
  margin-left: 5px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.dateTable.isWeekMode .row:hover td:last-child div {
  margin-right: 5px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.dateTable.isWeekMode .row.current div {
  background-color: var(--calendar-item-background-inrange);
} */

.dateTable .week {
  color: var(--calendar-item-color);
}
.dateTable .week .weekend {
  color: var(--calendar-item-week-color)
}

.dateTable td {
  width: 24px;
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  position: relative;
  color: var(--calendar-item-color)
}

.dateTable td div {
  height: 24px;
  margin: 3px 0;
  box-sizing: border-box;
  cursor: var(--cursor-pointer);
}

.dateTable td span {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: var(--calendar-item-border-radius);
  border: 1px solid var(--calendar-item-border-color);
}

.dateTable td.next-month,
.dateTable td.prev-month {
  color: var(--calendar-item-color-muted);
}

.dateTable td.today {
  position: relative;
}

.dateTable td.today span {
  color: var(--calendar-item-color-today);
}

.dateTable td.today.startDate span,
.dateTable td.today.endDate span {
  color: var(--color-white);
  background-color: var(--calendar-item-background-selected);
}

.dateTable td.available:hover {
  color: var(--calendar-item-color-hover);
}
.dateTable td.available:not(.inRange):hover span {
  background-color: var(--calendar-item-background-hover);
  border-color: var(--calendar-item-border-color-hover);
}

.dateTable td.inRange div {
  background-color: var(--calendar-item-background-inrange);
}

.dateTable td.endDate:not(.disabled)  div {
  background: linear-gradient(
    270deg,
    transparent,
    transparent 50%,
    var(--calendar-item-background-inrange) 50%,
    var(--calendar-item-background-inrange) 100%
  );
}
.dateTable td.startDate:not(.disabled)  div {
  background: linear-gradient(
    90deg,
    transparent,
    transparent 50%,
    var(--calendar-item-background-inrange) 50%,
    var(--calendar-item-background-inrange) 100%
  );
}
.dateTable td.startDate.endDate div {
  /* 第一次点击的时候不需要设置 */
  background: unset;
}

.dateTable td.current:not(.disabled) span {
  color: var(--calendar-item-color-selected);
  border-color: var(--calendar-item-border-color-selected);
  background-color: var(--calendar-item-background-selected);
}

.dateTable td.startDate:not(.disabled)  span,
.dateTable td.endDate:not(.disabled)  span {
  color: var(--calendar-item-color-selected);
  border-color: var(--calendar-item-border-color-selected);
  background-color: var(--calendar-item-background-selected);
}

.dateTable td.endDate:not(.startDate) span {
  border-top-right-radius: var(--calendar-item-border-radius);
  border-bottom-right-radius: var(--calendar-item-border-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dateTable td.startDate:not(.endDate) span {
  border-top-left-radius: var(--calendar-item-border-radius);
  border-bottom-left-radius: var(--calendar-item-border-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.dateTable td.disabled div {
  background-color: var(--calendar-item-background-disabled);
  opacity: 1;
  cursor: not-allowed;
  color: var(--calendar-item-color-disabled);
}

/* 不支持多选模式，先屏蔽
.dateTable td.selected div {
  margin-left: 5px;
  margin-right: 5px;
  background-color: var(--datepicker-inrange-background-color);
  border-radius: var(--calendar-item-border-radius);
}

.dateTable td.selected div:hover {
  background-color: var(--datepicker-inrange-hover-background-color);
}

.dateTable td.selected span {
  background-color: var(--datepicker-active-color);
  color: var(--color-white);
  border-radius: var(--calendar-item-border-radius);
} */

.dateTable td.week {
  font-size: 80%;
}

.dateTable th {
  padding: 6px 0;
  font-weight: 400;
}
</style>
