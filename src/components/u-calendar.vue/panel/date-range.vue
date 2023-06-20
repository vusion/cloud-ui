<template>
  <div
    v-show="visible"
    :class="$style.dateRangePicker">
    <div :class="$style.body">
      <div :class="[$style.content, $style.left]">
        <div :class="$style.header">
          <div>
            <i-ico :class="$style.hicon" name="d-left-arrow" notext @click="leftPrevYear"></i-ico>
            <i-ico :class="$style.hicon" name="left-arrow" notext @click="leftPrevMonth"></i-ico>
          </div>
          <div>{{ leftLabel }}</div>
          <div :class="$style.holder"></div>
        </div>
        <date-table
          selection-mode="range"
          :date="leftDate"
          :default-value="defaultValue"
          :min-date="minDate"
          :max-date="maxDate"
          :range-state="rangeState"
          :disabled-date="disabledDate"
          :cell-class-name="cellClassName"
          @changerange="handleChangeRange"
          :first-day-of-week="firstDayOfWeek"
          @pick="handleRangePick">
        </date-table>
      </div>
      <div :class="[$style.content, $style.right]">
        <div :class="$style.header">
          <div :class="$style.holder"></div>
          <div>{{ rightLabel }}</div>
          <div>
            <i-ico :class="$style.hicon" name="right-arrow" notext @click="rightNextMonth"></i-ico>
            <i-ico :class="$style.hicon" name="d-right-arrow" notext @click="rightNextYear"></i-ico>
          </div>
        </div>
        <date-table
          selection-mode="range"
          :date="rightDate"
          :default-value="defaultValue"
          :min-date="minDate"
          :max-date="maxDate"
          :range-state="rangeState"
          :disabled-date="disabledDate"
          :cell-class-name="cellClassName"
          @changerange="handleChangeRange"
          :first-day-of-week="firstDayOfWeek"
          @pick="handleRangePick">
        </date-table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  formatDate,
  parseDate,
  isDate,
  modifyDate,
  modifyTime,
  modifyWithTimeString,
  prevYear,
  nextYear,
  prevMonth,
  nextMonth,
  nextDate,
  extractDateFormat,
  extractTimeFormat
} from '../date-util';
import i18n from '../i18n';
import DateTable from '../basic/date-table';

const calcDefaultValue = (defaultValue) => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), nextDate(new Date(defaultValue), 1)];
  } else {
    return [new Date(), nextDate(new Date(), 1)];
  }
};

export default {
  i18n,
  props: {
    visible: { type: Boolean, default: true },

    value: { type: Array, default: () => [] },

    defaultValue: {
      default: null,
      validator(val) {
        // either: null, valid Date object, Array of valid Date objects
        return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate));
      }
    },

    disabledDate: '',
  },

  data() {
    return {
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: nextMonth(new Date()),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      cellClassName: '',
      firstDayOfWeek: 7,
      minTimePickerVisible: false,
      maxTimePickerVisible: false,
      format: '',
      arrowControl: false,
      unlinkPanels: false,
      dateUserInput: {
        min: null,
        max: null
      },
      timeUserInput: {
        min: null,
        max: null
      },
      monthTextList: [
        this.$t('January'),
        this.$t('February'),
        this.$t('March'),
        this.$t('April'),
        this.$t('May'),
        this.$t('June'),
        this.$t('July'),
        this.$t('August'),
        this.$t('September'),
        this.$t('October'),
        this.$t('November'),
        this.$t('December'),
      ],
    };
  },
  computed: {
    btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },

    leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.monthTextList[this.leftDate.getMonth()];
    },

    rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.monthTextList[this.rightDate.getMonth()];
    },

    leftYear() {
      return this.leftDate.getFullYear();
    },

    leftMonth() {
      return this.leftDate.getMonth();
    },

    leftMonthDate() {
      return this.leftDate.getDate();
    },

    rightYear() {
      return this.rightDate.getFullYear();
    },

    rightMonth() {
      return this.rightDate.getMonth();
    },

    rightMonthDate() {
      return this.rightDate.getDate();
    },

    minVisibleDate() {
      if (this.dateUserInput.min !== null) return this.dateUserInput.min;
      if (this.minDate) return formatDate(this.minDate, this.dateFormat);
      return '';
    },

    maxVisibleDate() {
      if (this.dateUserInput.max !== null) return this.dateUserInput.max;
      if (this.maxDate || this.minDate) return formatDate(this.maxDate || this.minDate, this.dateFormat);
      return '';
    },

    minVisibleTime() {
      if (this.timeUserInput.min !== null) return this.timeUserInput.min;
      if (this.minDate) return formatDate(this.minDate, this.timeFormat);
      return '';
    },

    maxVisibleTime() {
      if (this.timeUserInput.max !== null) return this.timeUserInput.max;
      if (this.maxDate || this.minDate) return formatDate(this.maxDate || this.minDate, this.timeFormat);
      return '';
    },

    timeFormat() {
      if (this.format) {
        return extractTimeFormat(this.format);
      } else {
        return 'HH:mm:ss';
      }
    },

    dateFormat() {
      if (this.format) {
        return extractDateFormat(this.format);
      } else {
        return 'yyyy-MM-dd';
      }
    },

    enableMonthArrow() {
      const nextMonth = (this.leftMonth + 1) % 12;
      const yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
      return this.unlinkPanels && new Date(this.leftYear + yearOffset, nextMonth) < new Date(this.rightYear, this.rightMonth);
    },

    enableYearArrow() {
      return this.unlinkPanels && this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth + 1) >= 12;
    }
  },

  watch: {
    minDate(val) {
      this.dateUserInput.min = null;
      this.timeUserInput.min = null;
      this.$nextTick(() => {
        if (this.$refs.maxTimePicker && this.maxDate && this.maxDate < this.minDate) {
          const format = 'HH:mm:ss';
          this.$refs.maxTimePicker.selectableRange = [
            [
              parseDate(formatDate(this.minDate, format), format),
              parseDate('23:59:59', format)
            ]
          ];
        }
      });
      if (val && this.$refs.minTimePicker) {
        this.$refs.minTimePicker.date = val;
        this.$refs.minTimePicker.value = val;
      }
    },

    maxDate(val) {
      this.dateUserInput.max = null;
      this.timeUserInput.max = null;
      if (val && this.$refs.maxTimePicker) {
        this.$refs.maxTimePicker.date = val;
        this.$refs.maxTimePicker.value = val;
      }
    },

    minTimePickerVisible(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.minTimePicker.date = this.minDate;
          this.$refs.minTimePicker.value = this.minDate;
          this.$refs.minTimePicker.adjustSpinners();
        });
      }
    },

    maxTimePickerVisible(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.maxTimePicker.date = this.maxDate;
          this.$refs.maxTimePicker.value = this.maxDate;
          this.$refs.maxTimePicker.adjustSpinners();
        });
      }
    },

    value: {
      handler(newVal) {
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
              const minDateMonth = this.minDate.getMonth();
              const maxDateYear = this.maxDate.getFullYear();
              const maxDateMonth = this.maxDate.getMonth();
              this.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth
                ? nextMonth(this.maxDate)
                : this.maxDate;
            } else {
              this.rightDate = nextMonth(this.leftDate);
            }
          } else {
            this.leftDate = calcDefaultValue(this.defaultValue)[0];
            this.rightDate = nextMonth(this.leftDate);
          }
        }
      },
      immediate: true
    },

    defaultValue(val) {
      if (!Array.isArray(this.value)) {
        const [left, right] = calcDefaultValue(val);
        this.leftDate = left;
        this.rightDate = val && val[1] && this.unlinkPanels
          ? right
          : nextMonth(this.leftDate);
      }
    }
  },

  methods: {
    handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = calcDefaultValue(this.defaultValue)[0];
      this.rightDate = nextMonth(this.leftDate);
      this.$emit('pick', null);
    },

    handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },

    handleDateInput(value, type) {
      this.dateUserInput[type] = value;
      if (value.length !== this.dateFormat.length) return;
      const parsedValue = parseDate(value, this.dateFormat);

      if (parsedValue) {
        if (typeof this.disabledDate === 'function' &&
          this.disabledDate(new Date(parsedValue))) {
          return;
        }
        if (type === 'min') {
          this.minDate = modifyDate(this.minDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          this.leftDate = new Date(parsedValue);
          if (!this.unlinkPanels) {
            this.rightDate = nextMonth(this.leftDate);
          }
        } else {
          this.maxDate = modifyDate(this.maxDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          this.rightDate = new Date(parsedValue);
          if (!this.unlinkPanels) {
            this.leftDate = prevMonth(parsedValue);
          }
        }
      }
    },

    handleDateChange(value, type) {
      const parsedValue = parseDate(value, this.dateFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = modifyDate(this.minDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
        } else {
          this.maxDate = modifyDate(this.maxDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
        }
      }
    },

    handleTimeInput(value, type) {
      this.timeUserInput[type] = value;
      if (value.length !== this.timeFormat.length) return;
      const parsedValue = parseDate(value, this.timeFormat);

      if (parsedValue) {
        if (type === 'min') {
          this.minDate = modifyTime(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          this.$nextTick(_ => this.$refs.minTimePicker.adjustSpinners());
        } else {
          this.maxDate = modifyTime(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          this.$nextTick(_ => this.$refs.maxTimePicker.adjustSpinners());
        }
      }
    },

    handleTimeChange(value, type) {
      const parsedValue = parseDate(value, this.timeFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = modifyTime(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
          this.$refs.minTimePicker.value = this.minDate;
          this.minTimePickerVisible = false;
        } else {
          this.maxDate = modifyTime(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
          this.$refs.maxTimePicker.value = this.minDate;
          this.maxTimePickerVisible = false;
        }
      }
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

    handleMinTimePick(value, visible, first) {
      this.minDate = this.minDate || new Date();
      if (value) {
        this.minDate = modifyTime(this.minDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.minTimePickerVisible = visible;
      }

      if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
        this.maxDate = new Date(this.minDate);
      }
    },

    handleMinTimeClose() {
      this.minTimePickerVisible = false;
    },

    handleMaxTimePick(value, visible, first) {
      if (this.maxDate && value) {
        this.maxDate = modifyTime(this.maxDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.maxTimePickerVisible = visible;
      }

      if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
        this.minDate = new Date(this.maxDate);
      }
    },

    handleMaxTimeClose() {
      this.maxTimePickerVisible = false;
    },

    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear() {
      this.leftDate = prevYear(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = nextMonth(this.leftDate);
      }
    },

    leftPrevMonth() {
      this.leftDate = prevMonth(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = nextMonth(this.leftDate);
      }
    },

    rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = nextYear(this.leftDate);
        this.rightDate = nextMonth(this.leftDate);
      } else {
        this.rightDate = nextYear(this.rightDate);
      }
    },

    rightNextMonth() {
      if (!this.unlinkPanels) {
        this.leftDate = nextMonth(this.leftDate);
        this.rightDate = nextMonth(this.leftDate);
      } else {
        this.rightDate = nextMonth(this.rightDate);
      }
    },

    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear() {
      this.leftDate = nextYear(this.leftDate);
    },

    leftNextMonth() {
      this.leftDate = nextMonth(this.leftDate);
    },

    rightPrevYear() {
      this.rightDate = prevYear(this.rightDate);
    },

    rightPrevMonth() {
      this.rightDate = prevMonth(this.rightDate);
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
      if (this.minDate && this.maxDate == null) this.rangeState.selecting = false;
      this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
    }
  },

  components: { DateTable }
};
</script>

<style module>
.dateRangePicker {
  /* width: 646px; */
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
  width: 49px;
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
