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
          :selection-mode="selectionMode"
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
          :selection-mode="selectionMode"
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
import { isDate, prevYear, nextYear, prevMonth, nextMonth, nextDate } from '../util';
import i18n from '../i18n';
import DateTable from '../basic/date-table';
import dayjs from '../../../utils/dayjs';
import i18nMixin from '../../../mixins/i18n';

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
    // i18n,
    mixins: [i18nMixin('u-calendar')],
    components: { DateTable },
    props: {
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
        picker: { type: String, default: 'date' },
    },

    data() {
        return {
            minDate: '',
            maxDate: '',
            leftDate: new Date(),
            rightDate: nextMonth(new Date()),
            rangeState: {
                endDate: null,
                selecting: false,
                row: null,
                column: null,
            },
            cellClassName: '',
            firstDayOfWeek: 7,
            format: '',
            unlinkPanels: false,
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
        };
    },
    computed: {
        selectionMode() {
            return this.picker === 'date' ? 'range' : 'week-range';
        },
        leftLabel() {
            return this.leftDate.getFullYear() + ' ' + this.$tt('year') + ' '
                + this.monthTextList[this.leftDate.getMonth()] + ' ' + this.$tt('month');
        },

        rightLabel() {
            return this.rightDate.getFullYear() + ' ' + this.$tt('year') + ' '
                + this.monthTextList[this.rightDate.getMonth()] + ' ' + this.$tt('month');
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
                    // 这里如果是周，传入的时间可能在一周的中间，需要转换成周的开始和结束
                    if (this.picker === 'week') {
                        if (isDate(this.minDate)) {
                            this.minDate = dayjs(this.minDate).startOf('isoWeek').toDate();
                        }
                        if (isDate(this.maxDate)) {
                            this.maxDate = dayjs(this.maxDate).endOf('isoWeek').toDate();
                        }
                    }
                    if (this.minDate) {
                        this.leftDate = this.minDate;
                        if (this.unlinkPanels && this.maxDate) {
                            const minDateYear = this.minDate.getFullYear();
                            const minDateMonth = this.minDate.getMonth();
                            const maxDateYear = this.maxDate.getFullYear();
                            const maxDateMonth = this.maxDate.getMonth();
                            this.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? nextMonth(this.maxDate) : this.maxDate;
                        } else {
                            this.rightDate = nextMonth(this.leftDate);
                        }
                    } else {
                        this.leftDate = calcDefaultValue(this.defaultValue)[0];
                        this.rightDate = nextMonth(this.leftDate);
                    }
                }
            },
            immediate: true,
        },

        defaultValue(val) {
            if (!Array.isArray(this.value)) {
                const [left, right] = calcDefaultValue(val);
                this.leftDate = left;
                this.rightDate = val && val[1] && this.unlinkPanels ? right : nextMonth(this.leftDate);
            }
        },
    },

    methods: {
        handleClear() {
            this.minDate = null;
            this.maxDate = null;
            this.leftDate = calcDefaultValue(this.defaultValue)[0];
            this.rightDate = nextMonth(this.leftDate);
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
            if (this.minDate && this.maxDate == null)
                this.rangeState.selecting = false;
            this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
            this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
        },
    },
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
  margin-top: 3px;
  margin-bottom: 12px;
}

.header div {
  font-weight: 500;
}

.header .holder {
  width: 49px;
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
</style>
