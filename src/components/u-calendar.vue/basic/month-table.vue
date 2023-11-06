<template>
  <table @click="handleMonthTableClick" @mousemove="handleMouseMove" :class="$style.monthTable">
    <tbody>
    <tr v-for="(row, key) in rows" :key="key">
      <td :class="getCellStyle(cell)" v-for="(cell, key) in row" :key="key">
        <div>
          <a :class="$style.cell">{{ monthTextList[cell.text] }}</a>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {
    isDate,
    range,
    getDayCountOfMonth,
    getMonthTimestamp,
    nextDate,
    coerceTruthyValueToArray,
} from '../util';
import i18n from '../i18n';
import i18nMixin from '../../../mixins/i18n';

const datesInMonth = (year, month) => {
    const numOfDays = getDayCountOfMonth(year, month);
    const firstDay = new Date(year, month, 1);
    return range(numOfDays).map((n) => nextDate(firstDay, n));
};

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
    props: {
        disabledDate: {},
        value: {},
        selectionMode: {
            default: 'month',
        },
        minDate: {},

        maxDate: {},
        defaultValue: {
            validator(val) {
                // null or valid Date Object
                return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate));
            },
        },
        date: {},
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
            monthTextList: [
                this.$tt('January'),
                this.$tt('February'),
                this.$tt('March'),
                this.$tt('April'),
                this.$tt('May'),
                this.$tt('June'),
                this.$tt('July'),
                this.$tt('August'),
                this.$tt('September'),
                this.$tt('October'),
                this.$tt('November'),
                this.$tt('December'),
            ],
            tableRows: [[], [], [], []],
            lastRow: null,
            lastColumn: null,
        };
    },

    computed: {
        rows() {
            // TODO: refactory rows / getCellClasses
            const rows = this.tableRows;
            const disabledDate = this.disabledDate;
            const selectedDate = [];
            const now = getMonthTimestamp(new Date());

            for (let i = 0; i < 4; i++) {
                const row = rows[i];
                for (let j = 0; j < 3; j++) {
                    let cell = row[j];
                    if (!cell) {
                        cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
                    }

                    cell.type = 'normal';

                    const index = i * 3 + j;
                    const time = new Date(this.date.getFullYear(), index).getTime();
                    cell.inRange = time >= getMonthTimestamp(this.minDate) && time <= getMonthTimestamp(this.maxDate);
                    cell.start = this.minDate && time === getMonthTimestamp(this.minDate);
                    cell.end = this.maxDate && time === getMonthTimestamp(this.maxDate);
                    const isToday = time === now;

                    if (isToday) {
                        cell.type = 'today';
                    }
                    cell.text = index;
                    const cellDate = new Date(time);
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
                    cell.selected = selectedDate.find((date) => date.getTime() === cellDate.getTime());

                    this.$set(row, j, cell);
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
            if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
                this.markRange(this.minDate, this.maxDate);
            }
        },

        maxDate(newVal, oldVal) {
            if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
                this.markRange(this.minDate, this.maxDate);
            }
        },
    },

    methods: {
        cellMatchesDate(cell, date) {
            const value = new Date(date);
            return this.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getMonth();
        },
        getCellStyle(cell) {
            const style = {};
            const year = this.date.getFullYear();
            const today = new Date();
            const month = cell.text;
            const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];
            style.disabled = typeof this.disabledDate === 'function' ? datesInMonth(year, month).every(this.disabledDate) : false;
            style.current = coerceTruthyValueToArray(this.value).findIndex((date) => date.getFullYear() === year && date.getMonth() === month) >= 0;
            style.today = today.getFullYear() === year && today.getMonth() === month;
            style.default = defaultValue.some((date) => this.cellMatchesDate(cell, date));

            if (cell.inRange) {
                style['in-range'] = true;

                if (cell.start) {
                    style['start-date'] = true;
                }

                if (cell.end) {
                    style['end-date'] = true;
                }
            }
            const moduledStyle = {};
            Object.keys(style).forEach((className) => {
                if (this.$style[className]) {
                    moduledStyle[this.$style[className]] = style[className];
                }
            });
            return moduledStyle;
        },
        getMonthOfCell(month) {
            const year = this.date.getFullYear();
            return new Date(year, month, 1);
        },
        markRange(minDate, maxDate) {
            minDate = getMonthTimestamp(minDate);
            maxDate = getMonthTimestamp(maxDate) || minDate;
            [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
            const rows = this.rows;
            for (let i = 0, k = rows.length; i < k; i++) {
                const row = rows[i];
                for (let j = 0, l = row.length; j < l; j++) {
                    const cell = row[j];
                    const index = i * 3 + j;
                    const time = new Date(this.date.getFullYear(), index).getTime();

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
            if (target.tagName === 'A') {
                target = target.parentNode.parentNode;
            }
            if (target.tagName === 'DIV') {
                target = target.parentNode;
            }
            if (target.tagName !== 'TD')
                return;

            const row = target.parentNode.rowIndex;
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
                        endDate: this.getMonthOfCell(row * 3 + column),
                    },
                });
            }
        },
        handleMonthTableClick(event) {
            let target = event.target;
            if (target.tagName === 'A') {
                target = target.parentNode.parentNode;
            }
            if (target.tagName === 'DIV') {
                target = target.parentNode;
            }
            if (target.tagName !== 'TD')
                return;

            const column = target.cellIndex;
            const row = target.parentNode.rowIndex;
            // can not select disabled date
            if (this.rows[row][column].disabled)
                return;

            const month = row * 3 + column;
            const newDate = this.getMonthOfCell(month);
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
            } else if (this.selectionMode === 'months') {
                const value = this.value || [];
                const year = this.date.getFullYear();
                const newValue = value.findIndex((date) => date.getFullYear() === year && date.getMonth() === month) >= 0 ? removeFromArray(value, (date) => date.getTime() === newDate.getTime()) : [...value, newDate];
                this.$emit('pick', newValue);
            } else {
                this.$emit('pick', month);
            }
        },
    },
};
</script>

<style module>
.monthTable {
  margin: -1px;
  border-collapse: collapse;
  width: 100%;
}

.monthTable td {
  text-align: center;
  padding: 0;
}

.monthTable td div {
  height: 24px;
  margin: 12px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.monthTable td:first-child div {
  justify-content: flex-start;
}

.monthTable td:last-child div {
  justify-content: flex-end;
}

/* .monthTable td.today .cell {
	 color: var(--color-primary);
	 font-weight: bold;
} */
/* .monthTable td.today.start-date .cell,
.monthTable td.today.end-date .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
} */

.monthTable td .cell {
  width: 68px;
  height: 24px;
  display: block;
  line-height: 24px;
  color: var(--calendar-item-color);
  margin: 0;
  border-radius: var(--calendar-item-border-radius);
  cursor: inherit;
}

.monthTable td .cell:hover {
  color: var(--calendar-item-color-hover);
  background-color: var(--calendar-item-background-hover);
}

.monthTable td.in-range div {
  background-color: var(--calendar-item-background-inrange);
}

/* .monthTable td.in-range div:hover .cell {
  background-color: var(--calendar-item-background-hover);
} */

.monthTable td.disabled div {
  background-color: var(--calendar-item-background-disabled);
  cursor: not-allowed;
  color: var(--calendar-item-color-disabled);
}

/* .monthTable td.disabled .cell:hover {
  color: var(--color-text-placeholder);
} */

.monthTable td.start-date div,
.monthTable td.end-date div {
  color: var(--calendar-item-color-selected);
}

.monthTable td.start-date:not(.disabled) .cell,
.monthTable td.end-date:not(.disabled) .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
}

.monthTable td.start-date:not(.end-date) .cell {
  border-top-left-radius: var(--calendar-item-border-radius);
  border-bottom-left-radius: var(--calendar-item-border-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.monthTable td.end-date:not(.start-date) .cell {
  border-top-right-radius: var(--calendar-item-border-radius);
  border-bottom-right-radius: var(--calendar-item-border-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.monthTable td.start-date:not(.disabled) div {
  background: linear-gradient(
    90deg,
    transparent,
    transparent 50%,
    var(--calendar-item-background-inrange) 50%,
    var(--calendar-item-background-inrange) 100%
  );
}

.monthTable td.end-date:not(.disabled) div {
  background: linear-gradient(
    270deg,
    transparent,
    transparent 50%,
    var(--calendar-item-background-inrange) 50%,
    var(--calendar-item-background-inrange) 100%
  );
}

.monthTable td.start-date.end-date div {
  /* 第一次点击的时候不需要设置 */
  background: unset;
}

.monthTable td.current:not(.disabled) .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
}
</style>
