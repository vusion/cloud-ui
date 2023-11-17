<template>
  <table @click="handleTableClick" @mousemove="handleMouseMove" :class="$style.quarterTable">
    <tbody>
    <tr>
      <td :class="getCellStyle(cell)" v-for="(cell, key) in row" :key="key">
        <div>
          <a :class="$style.cell">{{ $tt('quarter') }}{{ $tt(`Q${cell.text}`) }}</a>
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
    getDayCountOfQuarter,
    getQuarterTimestamp,
    nextDate,
    coerceTruthyValueToArray,
} from '../util';
import i18n from '../i18n';
import i18nMixin from '../../../mixins/i18n';

const datesInQuarter = (year, quarter) => {
    const numOfDays = getDayCountOfQuarter(year, quarter);
    const firstDay = new Date(year, (quarter - 1) * 3, 1);
    return range(numOfDays).map((n) => nextDate(firstDay, n));
};

const isInQuarter = (date, quarter) => {
    const month = date.getMonth();
    const monthQuarter = Math.floor(month / 3) + 1;
    return monthQuarter === quarter;
};

export default {
    // i18n,
    mixins: [i18nMixin('u-calendar')],
    props: {
        disabledDate: {},
        value: {},
        selectionMode: {
            default: 'quarter',
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
            tableRow: [],
            lastRow: null,
            lastColumn: null,
        };
    },

    computed: {
        row() {
            // TODO: refactory rows / getCellClasses
            const row = this.tableRow;
            const disabledDate = this.disabledDate;
            const selectedDate = [];
            const now = getQuarterTimestamp(new Date());

            for (let i = 0; i < 4; i++) {
                let cell = row[i];
                if (!cell) {
                    cell = { row: 0, column: i, type: 'normal', inRange: false, start: false, end: false };
                }

                cell.type = 'normal';

                const time = new Date(this.date.getFullYear(), i * 3).getTime();
                cell.inRange = time >= getQuarterTimestamp(this.minDate) && time <= getQuarterTimestamp(this.maxDate);
                cell.start = this.minDate && time === getQuarterTimestamp(this.minDate);
                cell.end = this.maxDate && time === getQuarterTimestamp(this.maxDate);
                const isToday = time === now;

                if (isToday) {
                    cell.type = 'today';
                }
                cell.text = i + 1;
                const cellDate = new Date(time);
                cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
                cell.selected = selectedDate.find((date) => date.getTime() === cellDate.getTime());

                this.$set(row, i, cell);
            }
            return row;
        },
    },

    watch: {
        'rangeState.endDate'(newVal) {
            this.markRange(this.minDate, newVal);
        },

        minDate(newVal, oldVal) {
            if (getQuarterTimestamp(newVal) !== getQuarterTimestamp(oldVal)) {
                this.markRange(this.minDate, this.maxDate);
            }
        },

        maxDate(newVal, oldVal) {
            if (getQuarterTimestamp(newVal) !== getQuarterTimestamp(oldVal)) {
                this.markRange(this.minDate, this.maxDate);
            }
        },
    },

    methods: {
        cellMatchesDate(cell, date) {
            const value = new Date(date);
            return this.date.getFullYear() === value.getFullYear() && isInQuarter(value, Number(cell.text));
        },
        getCellStyle(cell) {
            const style = {};
            const year = this.date.getFullYear();
            const today = new Date();
            const quarter = cell.text;
            const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];
            style.disabled = typeof this.disabledDate === 'function' ? datesInQuarter(year, quarter).every(this.disabledDate) : false;
            style.current = coerceTruthyValueToArray(this.value).findIndex((date) => date.getFullYear() === year && isInQuarter(date, quarter)) >= 0;
            style.today = today.getFullYear() === year && isInQuarter(today, quarter);
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
        getQuarterOfCell(quarter) {
            const year = this.date.getFullYear();
            return new Date(year, (quarter - 1) * 3, 1);
        },
        markRange(minDate, maxDate) {
            minDate = getQuarterTimestamp(minDate);
            maxDate = getQuarterTimestamp(maxDate) || minDate;
            [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
            const row = this.row;
            for (let index = 0, l = row.length; index < l; index++) {
                const cell = row[index];
                const time = new Date(this.date.getFullYear(), index * 3).getTime();

                cell.inRange = minDate && time >= minDate && time <= maxDate;
                cell.start = minDate && time === minDate;
                cell.end = maxDate && time === maxDate;
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

            const column = target.cellIndex;
            // can not select disabled date
            if (this.row[column].disabled)
                return;

            // only update rangeState when mouse moves to a new cell
            // this avoids frequent Date object creation and improves performance
            if (column !== this.lastColumn) {
                this.lastColumn = column;
                this.$emit('changerange', {
                    minDate: this.minDate,
                    maxDate: this.maxDate,
                    rangeState: {
                        selecting: true,
                        endDate: this.getQuarterOfCell(column + 1),
                    },
                });
            }
        },
        handleTableClick(event) {
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
            // can not select disabled date
            if (this.row[column].disabled)
                return;

            const quarter = column + 1;
            const newDate = this.getQuarterOfCell(quarter);
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
            } else {
                this.$emit('pick', quarter);
            }
        },
    },
};
</script>

<style module>
.quarterTable {
  margin: -1px;
  border-collapse: collapse;
  width: 100%;
}

.quarterTable td {
  text-align: center;
  padding: 0;
}

.quarterTable td div {
  height: 24px;
  margin: 12px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.quarterTable td:first-child div {
  justify-content: flex-start;
}

.quarterTable td:last-child div {
  justify-content: flex-end;
}

/* .quarterTable td.today .cell {
	 color: var(--color-primary);
	 font-weight: bold;
} */
/* .quarterTable td.today.start-date .cell,
.quarterTable td.today.end-date .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
} */

.quarterTable td .cell {
  width: 68px;
  height: 24px;
  display: block;
  line-height: 24px;
  color: var(--calendar-item-color);
  margin: 0;
  border-radius: var(--calendar-item-border-radius);
  cursor: inherit;
}

.quarterTable td .cell:hover {
  color: var(--calendar-item-color-hover);
  background-color: var(--calendar-item-background-hover);
}

.quarterTable td.in-range div {
  background-color: var(--calendar-item-background-inrange);
}

/* .quarterTable td.in-range div:hover .cell {
  background-color: var(--calendar-item-background-hover);
} */

.quarterTable td.disabled div {
  background-color: var(--calendar-item-background-disabled);
  cursor: not-allowed;
  color: var(--calendar-item-color-disabled);
}

/* .quarterTable td.disabled .cell:hover {
  color: var(--color-text-placeholder);
} */

.quarterTable td.start-date div,
.quarterTable td.end-date div {
  color: var(--calendar-item-color-selected);
}

.quarterTable td.start-date:not(.disabled) .cell,
.quarterTable td.end-date:not(.disabled) .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
}

.quarterTable td.start-date:not(.end-date) .cell {
  border-top-left-radius: var(--calendar-item-border-radius);
  border-bottom-left-radius: var(--calendar-item-border-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.quarterTable td.end-date:not(.start-date) .cell {
  border-top-right-radius: var(--calendar-item-border-radius);
  border-bottom-right-radius: var(--calendar-item-border-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.quarterTable td.start-date:not(.disabled) div {
  background: linear-gradient(
    90deg,
    transparent,
    transparent 50%,
    var(--calendar-item-background-inrange) 50%,
    var(--calendar-item-background-inrange) 100%
  );
}

.quarterTable td.end-date:not(.disabled) div {
  background: linear-gradient(
    270deg,
    transparent,
    transparent 50%,
    var(--calendar-item-background-inrange) 50%,
    var(--calendar-item-background-inrange) 100%
  );
}

.quarterTable td.start-date.end-date div {
  /* 第一次点击的时候不需要设置 */
  background: unset;
}

.quarterTable td.current:not(.disabled) .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
}
</style>
