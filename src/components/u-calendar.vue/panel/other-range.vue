<template>
  <div
    v-show="visible"
    :class="$style.dateRangePicker">
    <div :class="$style.body">
      <div :class="[$style.content, $style.left]">
        <div :class="$style.header">
          <div :class="$style.hiconWrap">
            <i-ico :class="$style.hicon" name="d-left-arrow" notext @click="leftPrevYear"></i-ico>
          </div>
          <div>{{ leftLabel }}</div>
          <div :class="$style.holder"></div>
        </div>
        <component
          :is="currentTable"
          selection-mode="range"
          :date="leftDate"
          :default-value="defaultValue"
          :min-date="minDate"
          :max-date="maxDate"
          :range-state="rangeState"
          :disabled-date="disabledDate"
          @changerange="handleChangeRange"
          @pick="handleRangePick">
        </component>
      </div>
      <div :class="[$style.content, $style.right]">
        <div :class="$style.header">
          <div :class="$style.holder"></div>
          <div>{{ rightLabel }}</div>
          <i-ico :class="$style.hicon" name="d-right-arrow" notext @click="rightNextYear"></i-ico>
        </div>
        <component
          :is="currentTable"
          selection-mode="range"
          :date="rightDate"
          :default-value="defaultValue"
          :min-date="minDate"
          :max-date="maxDate"
          :range-state="rangeState"
          :disabled-date="disabledDate"
          @changerange="handleChangeRange"
          @pick="handleRangePick">
        </component>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import {
    isDate,
    prevYear,
    nextYear,
    nextMonth,
    nextQuarter,
} from '../util';
import i18n from '../i18n';
import MonthTable from '../basic/month-table';
import QuarterTable from '../basic/quarter-table';
import YearTable from '../basic/year-table';
import i18nMixin from '../../../mixins/i18n';

const pickerMap = {
    month: {
        component: MonthTable,
        next: nextMonth,
    },
    quarter: {
        component: QuarterTable,
        next: nextQuarter,
    },
    year: {
        component: YearTable,
        next: nextYear,
    },
};

export default {
    // i18n,
    mixins: [i18nMixin('u-calendar')],
    props: {
        picker: { type: String, default: 'month' },
        visible: { type: Boolean, default: true },

        value: { type: Array, default: () => [] },

        defaultValue: {
            default: null,
            validator(val) {
                // either: null, valid Date object, Array of valid Date objects
                return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate));
            },
        },

        disabledDate: '',
    },
    data() {
        return {
            popperClass: '',
            minDate: '',
            maxDate: '',
            leftDate: new Date(),
            rightDate: this.nextYear(new Date()),
            rangeState: {
                endDate: null,
                selecting: false,
                row: null,
                column: null,
            },
            shortcuts: '',
            format: '',
            arrowControl: false,
            unlinkPanels: false,
        };
    },
    computed: {
        currentTable() {
            return pickerMap[this.picker] && pickerMap[this.picker].component || MonthTable;
        },

        btnDisabled() {
            return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
        },

        leftLabel() {
            if (this.picker !== 'year') {
                return this.leftDate.getFullYear();
            } else {
                const decade = Math.floor(this.leftDate.getFullYear() / 10) * 10;
                return `${decade}-${decade + 9}`;
            }
        },

        rightLabel() {
            if (this.picker !== 'year') {
                return this.rightDate.getFullYear();
            } else {
                const decade = Math.floor(this.rightDate.getFullYear() / 10) * 10;
                return `${decade}-${decade + 9}`;
            }
        },

        leftYear() {
            return this.leftDate.getFullYear();
        },

        rightYear() {
            return this.rightDate.getFullYear() === this.leftDate.getFullYear() ? this.leftDate.getFullYear() + 1 : this.rightDate.getFullYear();
        },

        enableYearArrow() {
            return this.unlinkPanels && this.rightYear > this.leftYear + 1;
        },
    },
    watch: {
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
                            const maxDateYear = this.maxDate.getFullYear();
                            this.rightDate = minDateYear === maxDateYear ? this.nextYear(this.maxDate) : this.maxDate;
                        } else {
                            this.rightDate = this.nextYear(this.leftDate);
                        }
                    } else {
                        this.leftDate = this.calcDefaultValue(this.defaultValue)[0];
                        this.rightDate = this.nextYear(this.leftDate);
                    }
                }
            },
            immediate: true,
        },

        defaultValue(val) {
            if (!Array.isArray(this.value)) {
                const [left, right] = this.calcDefaultValue(val);
                this.leftDate = left;
                this.rightDate = val && val[1] && left.getFullYear() !== right.getFullYear() && this.unlinkPanels ? right : this.nextYear(this.leftDate);
            }
        },
    },

    methods: {
        nextYear(date) {
            return nextYear(date, this.picker === 'year' ? 10 : 1);
        },

        prevYear(date) {
            return prevYear(date, this.picker === 'year' ? 10 : 1);
        },

        calcDefaultValue(defaultValue) {
            const next = pickerMap[this.picker] && pickerMap[this.picker].next || nextMonth;
            if (Array.isArray(defaultValue)) {
                return [new Date(defaultValue[0]), new Date(defaultValue[1])];
            } else if (defaultValue) {
                return [new Date(defaultValue), next(new Date(defaultValue))];
            } else {
                return [new Date(), next(new Date())];
            }
        },

        handleClear() {
            this.minDate = null;
            this.maxDate = null;
            this.leftDate = this.calcDefaultValue(this.defaultValue)[0];
            this.rightDate = this.nextYear(this.leftDate);
            this.$emit('select', { sender: this, startDate: null, endDate: null });
        },

        handleChangeRange(val) {
            this.minDate = val.minDate;
            this.maxDate = val.maxDate;
            this.rangeState = val.rangeState;
        },

        handleRangePick(val, close = true) {
            const minDate = val.minDate;
            const maxDate = val.maxDate;
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
            if (!close)
                return;
            this.handleConfirm();
        },

        handleShortcutClick(shortcut) {
            if (shortcut.onClick) {
                shortcut.onClick(this);
            }
        },

        // leftPrev*, rightNext* need to take care of `unlinkPanels`
        leftPrevYear() {
            this.leftDate = this.prevYear(this.leftDate);
            if (!this.unlinkPanels) {
                this.rightDate = this.prevYear(this.rightDate);
            }
        },

        rightNextYear() {
            if (!this.unlinkPanels) {
                this.leftDate = this.nextYear(this.leftDate);
            }
            this.rightDate = this.nextYear(this.rightDate);
        },

        // leftNext*, rightPrev* are called when `unlinkPanels` is true
        leftNextYear() {
            this.leftDate = this.nextYear(this.leftDate);
        },

        rightPrevYear() {
            this.rightDate = this.prevYear(this.rightDate);
        },

        handleConfirm(visible = false) {
            if (this.isValidValue([this.minDate, this.maxDate])) {
                this.$emit('select', { sender: this, startDate: this.minDate, endDate: this.maxDate });
            }
        },

        isValidValue(value) {
            return Array.isArray(value)
                && value && value[0] && value[1]
                && isDate(value[0]) && isDate(value[1])
                && value[0].getTime() <= value[1].getTime() && (
                    typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true
                );
        },

        resetView() {
            // NOTE: this is a hack to reset {min, max}Date on picker open.
            // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
            //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
            this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
            this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
        },
    },
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
  justify-content: space-between;
  margin: 3px 12px;
}

.header div {
  font-weight: 500;
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
  padding: var(--calendar-padding);
}

.content.left {
  border-right: 1px solid var(--calendar-range-inner-border-color);
}
</style>
