<template>
  <table @click="handleTableClick" @mousemove="handleMouseMove" :class="$style.quarterTable">
    <tbody>
    <tr>
      <td :class="getCellStyle(cell)" v-for="(cell, key) in row" :key="key">
        <div>
          <a :class="$style.cell">{{ $t(`Q${cell.text}`) }}</a>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { isDate, range, getDayCountOfMonth, getDayCountOfQuarter, nextDate } from '../date-util';
import { coerceTruthyValueToArray, hasClass } from '../util';
import i18n from '../i18n';

const datesInMonth = (year, month) => {
  const numOfDays = getDayCountOfMonth(year, month);
  const firstDay = new Date(year, month, 1);
  return range(numOfDays).map(n => nextDate(firstDay, n));
};

const datesInQuarter = (year, quarter) => {
  const numOfDays = getDayCountOfQuarter(year, quarter);
  const firstDay = new Date(year, (quarter - 1) * 3, 1);
  return range(numOfDays).map(n => nextDate(firstDay, n));
};

const isInQuarter = (date, quarter) => {
  const month = date.getMonth();
  const monthQuarter = Math.floor(month / 3) + 1;
  return monthQuarter === quarter;
}

const clearDate = (date) => {
  return new Date(date.getFullYear(), date.getMonth());
};

const getTimestamp = function(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearDate(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return clearDate(time).getTime();
  } else {
    return NaN;
  }
};

// remove the first element that satisfies `pred` from arr
// return a new array if modification occurs
// return the original array otherwise
const removeFromArray = function(arr, pred) {
  const idx = typeof pred === 'function' ? arr.findIndex(pred) : arr.indexOf(pred);
  return idx >= 0 ? [...arr.slice(0, idx), ...arr.slice(idx + 1)] : arr;
};
export default {
  i18n,
  props: {
    disabledDate: {},
    value: {},
    selectionMode: {
      default: 'quarter'
    },
    minDate: {},

    maxDate: {},
    defaultValue: {
      validator(val) {
        // null or valid Date Object
        return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate));
      }
    },
    date: {},
    rangeState: {
      default() {
        return {
          endDate: null,
          selecting: false
        };
      }
    }
  },

  watch: {
    'rangeState.endDate'(newVal) {
      this.markRange(this.minDate, newVal);
    },

    minDate(newVal, oldVal) {
      if (getTimestamp(newVal) !== getTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    },

    maxDate(newVal, oldVal) {
      if (getTimestamp(newVal) !== getTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    }
  },

  data() {
    return {
      tableRow: [],
      lastRow: null,
      lastColumn: null
    };
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
      style.disabled = typeof this.disabledDate === 'function'
        ? datesInQuarter(year, quarter).every(this.disabledDate)
        : false;
      style.current = coerceTruthyValueToArray(this.value).findIndex(date => date.getFullYear() === year && isInQuarter(date, quarter)) >= 0;
      style.today = today.getFullYear() === year && isInQuarter(today, quarter);
      style.default = defaultValue.some(date => this.cellMatchesDate(cell, date));

      if (cell.inRange) {
        style['in-range'] = true;

        if (cell.start) {
          style['start-date'] = true;
        }

        if (cell.end) {
          style['end-date'] = true;
        }
      }
      const moduledStyle = {}
      Object.keys(style).forEach(className => {
        moduledStyle[this.$style[className]] = style[className]
      })
      return moduledStyle;
    },
    getMonthOfCell(month) {
      const year = this.date.getFullYear();
      return new Date(year, month, 1);
    },
    getQuarterOfCell(quarter) {
      const year = this.date.getFullYear();
      return new Date(year, (quarter - 1) * 3, 1);
    },
    markRange(minDate, maxDate) {
      minDate = getTimestamp(minDate);
      maxDate = getTimestamp(maxDate) || minDate;
      [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
      const row = this.row;
      for (let index = 0, l = row.length; index < l; index++) {
        // TODO: 有个问题，选中范围以后，再往后切几年，回来以后会导致范围错误
        const cell = row[index];
        const time = new Date(this.date.getFullYear(), index * 3).getTime();

        cell.inRange = minDate && time >= minDate && time <= maxDate;
        cell.start = minDate && time === minDate;
        cell.end = maxDate && time === maxDate;
      }
    },
    handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      let target = event.target;
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      const column = target.cellIndex;
      // can not select disabled date
      if (this.row[column].disabled) return;

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (column !== this.lastColumn) {
        this.lastColumn = column;
        this.$emit('changerange', {
          minDate: this.minDate,
          maxDate: this.maxDate,
          rangeState: {
            selecting: true,
            endDate: this.getQuarterOfCell(column + 1)
          }
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
      if (target.tagName !== 'TD') return;
      if (hasClass(target, 'disabled')) return;
      const column = target.cellIndex;
      const quarter = column + 1;
      const newDate = this.getQuarterOfCell(quarter);
      if (this.selectionMode === 'range') {
        if (!this.rangeState.selecting) {
          this.$emit('pick', {minDate: newDate, maxDate: null});
          this.rangeState.selecting = true;
        } else {
          if (newDate >= this.minDate) {
            this.$emit('pick', {minDate: this.minDate, maxDate: newDate});
          } else {
            this.$emit('pick', {minDate: newDate, maxDate: this.minDate});
          }
          this.rangeState.selecting = false;
        }
      } else {
        this.$emit('pick', quarter);
      }
    }
  },

  computed: {
    row() {
      // TODO: refactory rows / getCellClasses
      const row = this.tableRow;
      const disabledDate = this.disabledDate;
      const selectedDate = [];
      const now = getTimestamp(new Date());

      for (let i = 0; i < 4; i++) {
        let cell = row[i];
        if (!cell) {
          cell = { row: 0, column: i, type: 'normal', inRange: false, start: false, end: false };
        }

        cell.type = 'normal';

        const time = new Date(this.date.getFullYear(), i).getTime();
        cell.inRange = time >= getTimestamp(this.minDate) && time <= getTimestamp(this.maxDate);
        cell.start = this.minDate && time === getTimestamp(this.minDate);
        cell.end = this.maxDate && time === getTimestamp(this.maxDate);
        const isToday = time === now;

        if (isToday) {
          cell.type = 'today';
        }
        cell.text = i + 1;
        let cellDate = new Date(time);
        cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
        cell.selected = selectedDate.find(date => date.getTime() === cellDate.getTime());

        this.$set(row, i, cell);
      }
      return row;
    }
  }
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
  cursor: pointer;
}

.quarterTable td div {
  height: 24px;
  margin: 12px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
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
.quarterTable td.today.start-date .cell,
.quarterTable td.today.end-date .cell {
  background-color: var(--brand-primary);
  color: var(--field-background);
}

.quarterTable td.disabled .cell {
  background-color: var(--calendar-item-color-disabled);
  cursor: not-allowed;
  color: var(--calendar-item-background-disabled);
}

/* .quarterTable td.disabled .cell:hover {
  color: var(--color-text-placeholder);
} */

.quarterTable td .cell {
  width: 68px;
  height: 24px;
  display: block;
  line-height: 24px;
  color: var(--calendar-item-color);
  margin: 0;
  border-radius: var(--calendar-item-border-radius);
}

.quarterTable td .cell:hover {
  color: var(--calendar-item-color-hover);
  background-color: var(--calendar-item-background-hover);
}

.quarterTable td.in-range div {
  background-color: var(--calendar-inrange-background-color);
}

/* .quarterTable td.in-range div:hover .cell {
  background-color: var(--calendar-item-background-hover);
} */

.quarterTable td.start-date div,
.quarterTable td.end-date div {
  color: var(--color-white);
}

.quarterTable td.start-date .cell,
.quarterTable td.end-date .cell {
  background-color: var(--brand-primary);
  color: var(--field-background);
}

.quarterTable td.start-date div {
  background: linear-gradient(
    90deg,
    transparent,
    transparent 50%,
    var(--calendar-inrange-background-color) 50%,
    var(--calendar-inrange-background-color) 100%
  );
}

.quarterTable td.end-date div {
  background: linear-gradient(
    270deg,
    transparent,
    transparent 50%,
    var(--calendar-inrange-background-color) 50%,
    var(--calendar-inrange-background-color) 100%
  );
}

.quarterTable td.start-date.end-date div {
  /* 第一次点击的时候不需要设置 */
  background: unset;
}

.quarterTable td.current:not(.disabled) .cell {
  background-color: var(--brand-primary);
  color: var(--field-background);
}
</style>
