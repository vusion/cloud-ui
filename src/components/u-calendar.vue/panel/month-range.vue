<template>
  <div
    v-show="visible"
    :class="$style.dateRangePicker">
    <div :class="$style.body">
      <div :class="[$style.content, $style.left]">
        <div :class="$style.header">
          <div :class="$style.hiconWrap">
            <i-ico :class="$style.hicon" name="left-arrow" notext @click="leftPrevYear"></i-ico>
          </div>
          <div>{{ leftLabel }}</div>
          <div :class="$style.holder"></div>
        </div>
        <month-table
          selection-mode="range"
          :date="leftDate"
          :default-value="defaultValue"
          :min-date="minDate"
          :max-date="maxDate"
          :range-state="rangeState"
          :disabled-date="disabledDate"
          @changerange="handleChangeRange"
          @pick="handleRangePick">
        </month-table>
      </div>
      <div :class="[$style.content, $style.right]">
        <div :class="$style.header">
          <div :class="$style.holder"></div>
          <div>{{ rightLabel }}</div>
          <i-ico :class="$style.hicon" name="right-arrow" notext @click="rightPrevYear"></i-ico>
        </div>
        <month-table
          selection-mode="range"
          :date="rightDate"
          :default-value="defaultValue"
          :min-date="minDate"
          :max-date="maxDate"
          :range-state="rangeState"
          :disabled-date="disabledDate"
          @changerange="handleChangeRange"
          @pick="handleRangePick">
        </month-table>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import {
  isDate,
  modifyWithTimeString,
  prevYear,
  nextYear,
  nextMonth
} from '../date-util';
import i18n from '../i18n';
import MonthTable from '../basic/month-table';

const calcDefaultValue = (defaultValue) => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), nextMonth(new Date(defaultValue))];
  } else {
    return [new Date(), nextMonth(new Date())];
  }
};
export default {
  i18n,

  computed: {
    btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },

    leftLabel() {
      return this.leftDate.getFullYear();
    },

    rightLabel() {
      return this.rightDate.getFullYear();
    },

    leftYear() {
      return this.leftDate.getFullYear();
    },

    rightYear() {
      return this.rightDate.getFullYear() === this.leftDate.getFullYear() ? this.leftDate.getFullYear() + 1 : this.rightDate.getFullYear();
    },

    enableYearArrow() {
      return this.unlinkPanels && this.rightYear > this.leftYear + 1;
    }
  },

  data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: nextYear(new Date()),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      shortcuts: '',
      visible: true,
      disabledDate: '',
      format: '',
      arrowControl: false,
      unlinkPanels: false
    };
  },

  watch: {
    value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
        if (this.minDate) {
          this.leftDate = this.minDate;
          if (this.unlinkPanels && this.maxDate) {
            const minDateYear = this.minDate.getFullYear();
            const maxDateYear = this.maxDate.getFullYear();
            this.rightDate = minDateYear === maxDateYear
              ? nextYear(this.maxDate)
              : this.maxDate;
          } else {
            this.rightDate = nextYear(this.leftDate);
          }
        } else {
          this.leftDate = calcDefaultValue(this.defaultValue)[0];
          this.rightDate = nextYear(this.leftDate);
        }
      }
    },

    defaultValue(val) {
      if (!Array.isArray(this.value)) {
        const [left, right] = calcDefaultValue(val);
        this.leftDate = left;
        this.rightDate = val && val[1] && left.getFullYear() !== right.getFullYear() && this.unlinkPanels
          ? right
          : nextYear(this.leftDate);
      }
    }
  },

  methods: {
    handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = calcDefaultValue(this.defaultValue)[0];
      this.rightDate = nextYear(this.leftDate);
      this.$emit('pick', null);
    },

    handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },

    handleRangePick(val, close = true) {
      const defaultTime = this.defaultTime || [];
      const minDate = modifyWithTimeString(val.minDate, defaultTime[0]);
      const maxDate = modifyWithTimeString(val.maxDate, defaultTime[1]);
      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(() => {
        this.maxDate = maxDate;
        this.minDate = minDate;
      }, 10);
      if (!close) return;
      this.handleConfirm();
    },

    handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },

    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear() {
      this.leftDate = prevYear(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = prevYear(this.rightDate);
      }
    },

    rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = nextYear(this.leftDate);
      }
      this.rightDate = nextYear(this.rightDate);
    },

    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear() {
      this.leftDate = nextYear(this.leftDate);
    },

    rightPrevYear() {
      this.rightDate = prevYear(this.rightDate);
    },

    handleConfirm(visible = false) {
      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      }
    },

    isValidValue(value) {
      return Array.isArray(value) &&
        value && value[0] && value[1] &&
        isDate(value[0]) && isDate(value[1]) &&
        value[0].getTime() <= value[1].getTime() && (
        typeof this.disabledDate === 'function'
          ? !this.disabledDate(value[0]) && !this.disabledDate(value[1])
          : true
      );
    },

    resetView() {
      // NOTE: this is a hack to reset {min, max}Date on picker open.
      // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
      //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
      this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
    }
  },

  components: { MonthTable }
};
</script>

<style module>
.dateRangePicker {
  /* width: 536px; */
}

.dateRangePicker table {
  table-layout: fixed;
  width: 100%;
}

.body {
  min-width: 513px;
  display: flex;
}

.content {
  margin: 0;
}

.header {
  position: relative;
  text-align: center;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.header div {
  font-size: 16px;
  font-weight: 500;
  /* margin-right: 50px; */
}

.header .holder {
  width: 12px;
}

.hicon {
  font-size: 12px;
  cursor: pointer;
  color: var(--calendar-icon-color);
}
.hicon + .hicon {
  margin-left: 25px;
}
.hicon:hover {
  color: var(--calendar-icon-color-hover);
}
.hicon[disabled],
.hicon[disabled]:hover {
  color: var(--calendar-icon-color-disabled);
  cursor: var(--cursor-not-allowed);
}

.content {
  float: left;
  width: 50%;
  box-sizing: border-box;
  margin: 0;
  padding: 16px;
}

.content .left {
  border-right: 1px solid var(--el-datepicker-inner-border-color);
}

/* .content .header div {
  margin-left: 50px;
  margin-right: 50px;
} */

.editors-wrap {
  box-sizing: border-box;
  display: table-cell;
}

.editors-wrap .right {
  text-align: right;
}

.time-header {
  position: relative;
  border-bottom: 1px solid var(--el-datepicker-inner-border-color);
  font-size: 12px;
  padding: 8px 5px 5px 5px;
  display: table;
  width: 100%;
  box-sizing: border-box;
}

.time-header>.el-icon-arrow-right {
  font-size: 20px;
  vertical-align: middle;
  display: table-cell;
  color: var(--el-datepicker-icon-color);
}

.time-picker-wrap {
  position: relative;
  display: table-cell;
  padding: 0 5px;
}

.time-picker-wrap .el-picker-panel {
  position: absolute;
  top: 13px;
  right: 0;
  z-index: 1;
  background: var(--el-color-white);
}
</style>
