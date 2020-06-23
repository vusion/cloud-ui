<template>
<div :class="$style.root" :disabled="disabled">
    <div :class="$style.head">
        <div :class="$style.year">
            <span :class="$style.textYear">{{ showYear }}{{ $t('year') }}</span>
            <m-popper trigger="click" :opened.sync="yearvisible" append-to="reference">
                <div :class="$style.yearList" @click.stop>
                    <u-list-view :class="$style.yearListInner" ref="yearList" :value="showYear" @select="yearSelect($event.value)">
                        <u-list-view-item :class="$style.yearitem" v-for="(year, index) in yearCol" :key="index" :value="year.value" :disabled="year.disabled">{{ year.value }}{{ $t('year') }}</u-list-view-item>
                    </u-list-view>
                </div>
            </m-popper>
        </div>
        <div :class="$style.month">
            <span :class="$style.textMonth">{{ monthTextList[showMonth - 1] }}{{ $t('month') }}</span>
            <m-popper trigger="click" placement="bottom-end" :opened.sync="monthvisible" append-to="reference">
                <ul :class="$style.monthList">
                    <li :class="$style.listitem" v-for="(month, mindex) in monthCol" :role="month.value === showMonth" :disabled="month.disabled" @click.stop="monthSelect(month, mindex)">{{ monthTextList[month.value - 1] }}</li>
                </ul>
            </m-popper>
        </div>
    </div>
    <div :class="$style.content">
        <div :class="$style.week"><span :class="$style.dayitem" role="week">{{ $t('Sunday') }}</span><span :class="$style.dayitem">{{ $t('Monday') }}</span><span :class="$style.dayitem">{{ $t('Tuesday') }}</span><span :class="$style.dayitem">{{ $t('Wednesday') }}</span><span :class="$style.dayitem">{{ $t('Thursday') }}</span><span :class="$style.dayitem">{{ $t('Friday') }}</span><span :class="$style.dayitem" role="week">{{ $t('Saturday') }}</span></div>
        <div :class="$style.day"><span v-for="day in days_" :class="$style.item" :sel="selectedDate.toDateString() === day.toDateString() ? 'sel' : ''" :disabled="!!isOutOfRange(day)" :role="showDate.getMonth() !== day.getMonth() ? 'muted': ''" @click.stop="select(day)">{{ day | format('dd') }}</span></div>
        <slot></slot>
    </div>
</div>
</template>

<script>
const MS_OF_DAY = 24 * 3600 * 1000;
import i18n from './i18n';
import { format, transformDate } from '../../utils/date';

const DateRangeError = function (minDate, maxDate) {
    this.name = 'DateRangeError';
    this.message
        = 'Wrong Date Range where `minDate` is '
            + minDate
            + ' and `maxDate` is '
            + maxDate
            + '!';
};
DateRangeError.prototype = Object.create(RangeError.prototype);
DateRangeError.prototype.constructor = DateRangeError;

export default {
    name: 'u-calendar',
    i18n,
    filters: { format },
    props: {
        date: {
            type: [String, Number, Date],
            default() {
                return new Date();
            },
        },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        minDate: [String, Date, Number],
        maxDate: [String, Date, Number],
        yearDiff: { type: [String, Number], default: 3 },
        yearAdd: { type: [String, Number], default: 1 },
    },
    data() {
        return {
            days_: [],
            showDate: this.date,
            updateFlag: false,
            monthCol: this.getMonthCol(),
            yearCol: this.getYearCol(),
            yearvisible: false,
            monthvisible: false,
            selectedDate: new Date(this.transformDate(this.date)),
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
        showYear: {
            get() {
                const date = this.transformDate(this.showDate);
                return date.getFullYear();
            },
            set(value) {
                const date = this.showDate;
                const oldMonth = date.getMonth();
                date.setFullYear(value);
                if (date.getMonth() !== oldMonth)
                    date.setDate(0);
                this.updateFlag = true;
                this.showDate = new Date(date);
            },
        },
        showMonth: {
            get() {
                const date = this.transformDate(this.showDate);
                const month = date.getMonth() + 1;
                return month;
            },
            set(value) {
                const date = this.showDate;
                date.setMonth(value - 1);
                this.updateFlag = true;
                this.showDate = new Date(date);
            },
        }, // yearCol() {
        //     const date = this.transformDate(this.showDate);
        //     const currentYear = date.getFullYear();
        //     const yearcol = [];
        //     const yearmin = currentYear - this.yearDiff;
        //     const yearmax = parseInt(currentYear) + parseInt(this.yearAdd);
        //     for (let i = yearmin; i <= yearmax; i++)
        //         yearcol.push(i);
        //     return yearcol;
        // },
    },
    watch: {
        date(newValue) {
            this.updateShowDate(newValue);
            this.selectedDate = new Date(this.transformDate(newValue));
        },
        yearvisible(yearvisible) {
            if (yearvisible) {
                this.$nextTick(() => {
                    this.$refs.yearList.ensureFocusedInView(true);
                });
            }
        },
        showDate(newValue) {
            // 如果超出日期范围，则设置为范围边界的日期
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange) {
                this.showDate = isOutOfRange; // 防止第二次刷新同月
                this.update();
                return;
            }
            if (this.updateFlag) {
                this.updateFlag = false;
                this.update();
            }
            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期
             */ this.$emit('change', { sender: this, date: newValue });
        }, // 最小值 最大值 发生变化 需要监听
        minDate(newValue, oldValue) {
            this.monthCol = this.getMonthCol();
            this.yearCol = this.getYearCol();
        },
        maxDate(newValue, oldValue) {
            this.monthCol = this.getMonthCol();
            this.yearCol = this.getYearCol();
        }, // 年份发生变化需要监听 在设置最小值和最大值的情况 会影响月份的选择
        showYear(newValue) {
            this.monthCol = this.getMonthCol(newValue + '');
        }, // 月份发生变化需要监听 会影响日的选择
    },
    created() {
        this.update();
    },
    methods: {
        updateShowDate(newValue) {
            const newDate = this.transformDate(newValue);
            if (newDate - 0 !== this.showDate - 0) {
                this.showDate = newDate;
                this.updateFlag = true;
            }
        },
        yearSelect(value) {
            this.showYear = value;
            this.yearvisible = false;
        },
        monthSelect(month) {
            if (!month.disabled) {
                this.showMonth = month.value;
                this.monthvisible = false;
            }
        },
        getYearCol() {
            const date = this.transformDate(this.date);
            let minDate = null;
            let maxDate = null;
            if (this.minDate)
                minDate = this.transformDate(this.minDate).getFullYear();
            if (this.maxDate)
                maxDate = this.transformDate(this.maxDate).getFullYear();
            const currentYear = date.getFullYear();
            const yearcol = [];
            const yearmin = currentYear - this.yearDiff;
            const yearmax = currentYear + parseInt(this.yearAdd);
            for (let i = yearmin; i <= yearmax; i++) {
                const obj = { value: i };
                if (minDate && i < minDate)
                    obj.disabled = true;
                else if (maxDate && i > maxDate)
                    obj.disabled = true;
                else
                    obj.disabled = false;
                yearcol.push(obj);
            }
            return yearcol;
        },
        getMonthCol(value) {
            const date = this.transformDate(value || this.date);
            let minDate = null;
            let maxDate = null;
            if (this.minDate) {
                minDate = this.transformDate(this.minDate);
                const minYear = minDate.getFullYear();
                const minMonth = minDate.getMonth();
                const minFormat = minYear + '/' + (minMonth + 1);
                minDate = new Date(minFormat).getTime();
            }
            if (this.maxDate) {
                maxDate = this.transformDate(this.maxDate);
                const maxYear = maxDate.getFullYear();
                const maxMonth = maxDate.getMonth();
                const maxFormat = maxYear + '/' + (maxMonth + 1);
                maxDate = new Date(maxFormat).getTime();
            }
            const currentYear = date.getFullYear();
            const monthcol = []; // const mindate = currentYear - this.yearDiff;
            // const maxdate = parseInt(currentYear) + parseInt(this.yearAdd);
            for (let i = 1; i <= 12; i++) {
                const obj = { value: i };
                const dateFormat = currentYear + '/' + i;
                const dateTime = new Date(dateFormat).getTime();
                if (minDate && dateTime < minDate)
                    obj.disabled = true;
                else if (maxDate && dateTime > maxDate)
                    obj.disabled = true;
                else
                    obj.disabled = false;
                monthcol.push(obj);
            }
            return monthcol;
        },
        /**
         * @method update() 日期改变后更新日历
         * @private
         * @return {void}
         */ update() {
            this.days_ = [];
            this.showDate = this.transformDate(this.showDate);
            const date = this.showDate;
            const month = date.getMonth();
            const mfirst = new Date(date);
            mfirst.setDate(1);
            mfirst.setHours(0, 0, 0, 0);
            const mfirstTime = +mfirst;
            const nfirst = new Date(mfirst);
            nfirst.setMonth(month + 1);
            nfirst.setDate(1);
            const nfirstTime = +nfirst;
            const lastTime
                = nfirstTime + (((7 - nfirst.getDay()) % 7) - 1) * MS_OF_DAY;
            let num = -mfirst.getDay();
            let tmpTime;
            let tmp;
            do {
                tmpTime = mfirstTime + num++ * MS_OF_DAY;
                tmp = new Date(tmpTime);
                this.days_.push(tmp);
            } while (tmpTime < lastTime);
        },
        /**
         * @method addYear(year) 调整年份
         * @public
         * @param  {number=0} year 加/减的年份
         * @return {void}
         */ addYear(year) {
            if (this.readonly || this.disabled || !year)
return;
            if (isNaN(year))
throw new TypeError(year + ' is not a number!');
            const date = this.showDate;
            const oldMonth = date.getMonth();
            date.setFullYear(date.getFullYear() + year);
            if (date.getMonth() !== oldMonth)
date.setDate(0);
            this.updateFlag = true;
            this.showDate = new Date(date);
        },
        /**
         * @method addMonth(month) 调整月份
         * @public
         * @param  {number=0} month 加/减的月份
         * @return {void}
         */ addMonth(month) {
            if (this.readonly || this.disabled || !month)
return;
            if (isNaN(month))
throw new TypeError(month + ' is not a number!');
            const date = this.showDate;
            const correctMonth = date.getMonth() + month;
            date.setMonth(correctMonth); // 如果跳月，则置为上一个月
            if ((date.getMonth() - correctMonth) % 12)
date.setDate(0);
            this.updateFlag = true;
            this.showDate = new Date(date);
        },
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */ select(date) {
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;
            const _month = date.getMonth() + 1;
            if (this.showMonth !== _month)
this.updateFlag = true;
            this.showDate = new Date(date);
            this.selectedDate = new Date(this.transformDate(date));
            /**
             * @event select 选择某一个日期时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 当前选择的日期
             */ this.$emit('select', { sender: this, date });
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期范围
         * @public
         * @param {Date} date 待测的日期
         * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
         */ isOutOfRange(date) {
            let minDate = this.transformDate(this.minDate);
            let maxDate = this.transformDate(this.maxDate); // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
            minDate = minDate && minDate.setHours(0, 0, 0, 0);
            maxDate = maxDate && maxDate.setHours(0, 0, 0, 0); // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
            return (
                (minDate && date < minDate && minDate)
                || (maxDate && date > maxDate && maxDate)
            );
        },
        transformDate,
    },
};
</script>

<style module>
.root {
    width: 238px;
    padding: 4px;
    /* text-align: center; */
    background: var(--field-background);
    color: #555;
    border: 1px solid var(--border-color-base);
    border-radius: var(--border-radius-base);
    box-sizing: content-box;
    user-select: none;
}
.item, .dayitem {
    width: 32px;
    height: 30px;
    line-height: 30px;
    margin: 1px;
    cursor: var(--cursor-pointer);
    display: inline-block;
    text-align: center;
    border-radius: 50%;
}
.dayitem[role="week"] {
    color: #f99;
}
.item:hover {
    background: var(--background-color-lighter);
    color: #444;
    border-color: var(--brand-primary);
}

.item[sel="sel"] {
    background: var(--brand-primary);
    color: var(--field-background);
}

.item[role="muted"] {
    color: var(--color-light);
}

.item[disabled] {
    background: 0 0;
    color: var(--color-light);
    cursor: var(--cursor-not-allowed);
}

.head {
    line-height: 32px;
    *zoom: 1;
}
.head::before {
    display: table;
    content: "";
    line-height: 0;
}
.head::after {
    display: table;
    content: "";
    line-height: 0;
    clear: both;
}
.prev {
    float: left;
}

.next {
    float: right;
}
.icon {
    width: 1em;
}

.body {
    clear: both;
}
.week .item {
    background: 0 0;
    cursor: default;
    font-weight: 700;
}
.root[disabled] .item {
    background: var(--field-background);
    color: var(--color-light);
    cursor: var(--cursor-not-allowed);
}
.root[disabled] .item[sel="sel"] {
    background: #eee;
    color: var(--color-light);
}
.day {
    white-space: normal;
}
.year {
    width: 82px;
    text-align: left;
    padding: 7px 10px 0;
    position: relative;
    display: inline-block;
    border: 1px solid var(--field-background);
    cursor: var(--cursor-pointer);
    box-sizing: border-box;
}

.yearList {
    z-index: 10;
}
.yearListInner {
    height: 160px;
    overflow-y: scroll;
}
.textYear {
    position: relative;
}
.textYear::after {
    position: absolute;
    icon-font: url('../i-icon.vue/icons/keyboard-arrow-down.svg');
    color: #a5a5a6;
    font-size: 18px;
    right: -20px;
    top: 0;
    line-height: 16px;
}
.monthList {
    z-index: 10;
    width: 138px;
    padding: 10px 6px;
    box-sizing: border-box;
    list-style: none;
    overflow: hidden;
    background: white;
    border: 1px solid #ccc;
}
.listitem {
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    cursor: var(--cursor-pointer);
}
.listitem[role] {
    background-color: var(--brand-primary);
    color: var(--field-background);
    border-radius: 50%;
}
.listitem[role]:hover {
    background-color: var(--brand-primary);
}
.listitem[disabled], .listitem[disabled]:hover {
    cursor: var(--cursor-not-allowed);
    background-color: var(--field-background);
    color: var(--color-light);
}
.listitem:hover {
    background: var(--background-color-lighter);
}
.month {
    float: right;
    width: 60px;
    text-align: left;
    padding: 7px 24px 0 10px;
    padding-right: 0;
    display: inline-block;
    position: relative;
    border: 1px solid var(--field-background);
    cursor: var(--cursor-pointer);
    box-sizing: border-box;
}
.textMonth {
    position: relative;
}
.textMonth::after {
    position: absolute;
    icon-font: url('../i-icon.vue/icons/keyboard-arrow-down.svg');
    color: #a5a5a6;
    font-size: 18px;
    right: -20px;
    top: 0;
    line-height: 16px;
}
.yearitem[disabled] {
    color: var(--color-light);
}
</style>
