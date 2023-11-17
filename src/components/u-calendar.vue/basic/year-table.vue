<template>
  <table @click="handleTableClick" @mousemove="handleMouseMove" :class="$style.yearTable">
    <tbody>
    <tr v-for="(row, key) in rows" :key="key">
      <td :class="getCellStyle(cell)" v-for="(cell, key) in row" :key="key">
        <div>
          <a :class="$style.cell">{{ cell.text }}</a>
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
    getDayCountOfYear,
    getYearTimestamp,
    nextDate,
    coerceTruthyValueToArray,
} from '../util';
import i18n from '../i18n';
import i18nMixin from '../../../mixins/i18n';

const datesInYear = (year) => {
    const numOfDays = getDayCountOfYear(year);
    const firstDay = new Date(year, 0, 1);
    return range(numOfDays).map((n) => nextDate(firstDay, n));
};

export default {
    // i18n,
    mixins: [i18nMixin('u-calendar')],
    props: {
        disabledDate: {},
        value: {},
        selectionMode: {
            default: 'year',
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
            const now = getYearTimestamp(new Date());
            // 年代，2010/2020 这种
            const decade = Math.floor(this.date.getFullYear() / 10) * 10;

            for (let i = 0; i < 4; i++) {
                const row = rows[i];
                for (let j = 0; j < 3; j++) {
                    let cell = row[j];
                    if (!cell) {
                        cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
                    }

                    cell.type = 'normal';

                    const index = i * 3 + j;
                    const date = new Date(decade - 1 + index, 0);
                    const time = date.getTime();
                    cell.inRange = time >= getYearTimestamp(this.minDate) && time <= getYearTimestamp(this.maxDate);
                    cell.start = this.minDate && time === getYearTimestamp(this.minDate);
                    cell.end = this.maxDate && time === getYearTimestamp(this.maxDate);
                    const isToday = time === now;

                    if (isToday) {
                        cell.type = 'today';
                    }
                    if (i === 0 && j === 0) {
                        cell.type = 'prev-decade';
                    } else if (i === 3 && j === 2) {
                        cell.type = 'next-decade';
                    }
                    cell.text = date.getFullYear();
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
            if (getYearTimestamp(newVal) !== getYearTimestamp(oldVal)) {
                this.markRange(this.minDate, this.maxDate);
            }
        },

        maxDate(newVal, oldVal) {
            if (getYearTimestamp(newVal) !== getYearTimestamp(oldVal)) {
                this.markRange(this.minDate, this.maxDate);
            }
        },
    },

    methods: {
        cellMatchesDate(cell, date) {
            const value = new Date(date);
            return this.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getFullYear();
        },
        getCellStyle(cell) {
            const style = {};
            const year = this.date.getFullYear();
            const today = new Date();
            const cellYear = cell.text;
            const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];
            style.disabled = typeof this.disabledDate === 'function' ? datesInYear(cellYear).every(this.disabledDate) : false;
            style.current = coerceTruthyValueToArray(this.value).findIndex((date) => date.getFullYear() === year && date.getFullYear() === cellYear) >= 0;
            // style.today = today.getFullYear() === year && today.getFullYear() === cellYear;
            style.default = defaultValue.some((date) => this.cellMatchesDate(cell, date));

            if (cell.type === 'prev-decade' || cell.type === 'next-decade') {
                style[cell.type] = true;
            } else if (cell.inRange) {
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
        getYearOfCell(year) {
            return new Date(Number(year), 0, 1);
        },
        markRange(minDate, maxDate) {
            minDate = getYearTimestamp(minDate);
            maxDate = getYearTimestamp(maxDate) || minDate;
            [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
            const rows = this.rows;
            for (let i = 0, k = rows.length; i < k; i++) {
                const row = rows[i];
                for (let j = 0, l = row.length; j < l; j++) {
                    const cell = row[j];
                    const time = this.getYearOfCell(cell.text).getTime();

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
                        endDate: this.getYearOfCell(this.rows[row][column].text),
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
            const row = target.parentNode.rowIndex;
            // can not select disabled date
            if (this.rows[row][column].disabled)
                return;

            const newDate = this.getYearOfCell(this.rows[row][column].text);
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
                this.$emit('pick', this.rows[row][column].text);
            }
        },
    },
};
</script>

<style module>
.yearTable {
  margin: -1px;
  border-collapse: collapse;
  width: 100%;
}

.yearTable td {
  text-align: center;
  padding: 0;
}

.yearTable td div {
  height: 24px;
  margin: 12px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.yearTable td:first-child div {
  justify-content: flex-start;
}

.yearTable td:last-child div {
  justify-content: flex-end;
}

/* .yearTable td.today .cell {
	 color: var(--color-primary);
	 font-weight: bold;
} */
/* .yearTable td.today.start-date .cell,
.yearTable td.today.end-date .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
} */

.yearTable td .cell {
  width: 68px;
  height: 24px;
  display: block;
  line-height: 24px;
  color: var(--calendar-item-color);
  margin: 0;
  border-radius: var(--calendar-item-border-radius);
  cursor: inherit;
}

.yearTable td .cell:hover {
  color: var(--calendar-item-color-hover);
  background-color: var(--calendar-item-background-hover);
}

.yearTable td.in-range div {
  background-color: var(--calendar-item-background-inrange);
}

/* .yearTable td.in-range div:hover .cell {
  background-color: var(--calendar-item-background-hover);
} */

.yearTable td.disabled div {
  background-color: var(--calendar-item-background-disabled);
  cursor: not-allowed;
  color: var(--calendar-item-color-disabled);
}

/* .yearTable td.disabled .cell:hover {
  color: var(--color-text-placeholder);
} */

.yearTable td.start-date div,
.yearTable td.end-date div {
  color: var(--calendar-item-color-selected);
}

.yearTable td.start-date:not(.disabled) .cell,
.yearTable td.end-date:not(.disabled) .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
}

.yearTable td.start-date:not(.end-date) .cell {
  border-top-left-radius: var(--calendar-item-border-radius);
  border-bottom-left-radius: var(--calendar-item-border-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.yearTable td.end-date:not(.start-date) .cell {
  border-top-right-radius: var(--calendar-item-border-radius);
  border-bottom-right-radius: var(--calendar-item-border-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.yearTable td.next-decade .cell,
.yearTable td.prev-decade .cell {
  color: var(--calendar-item-color-muted);
}

.yearTable td.start-date:not(.disabled) div {
  background: linear-gradient(
    90deg,
    transparent,
    transparent 50%,
    var(--calendar-item-background-inrange) 50%,
    var(--calendar-item-background-inrange) 100%
  );
}

.yearTable td.end-date:not(.disabled) div {
  background: linear-gradient(
    270deg,
    transparent,
    transparent 50%,
    var(--calendar-item-background-inrange) 50%,
    var(--calendar-item-background-inrange) 100%
  );
}

.yearTable td.start-date.end-date div {
  /* 第一次点击的时候不需要设置 */
  background: unset;
}

.yearTable td.current:not(.disabled) .cell {
  background-color: var(--calendar-item-background-selected);
  border-color: var(--calendar-item-border-color-selected);
  color: var(--calendar-item-color-selected);
}
</style>
