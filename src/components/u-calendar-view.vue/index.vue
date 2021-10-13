<template>
<div :class="$style.root">
    <u-linear-layout :class="$style.head" justify="space-between">
        <u-linear-layout v-if="showBasic" gap="small">
            <u-button @click="onPrevMonth" size="mini" :disabled="prevDisabled" :class="$style.prev"></u-button>
            <u-button v-if="showToday" @click="onToday" size="mini">{{ $t('Today') }}</u-button>
            <u-button @click="onNextMonth" size="mini" :disabled="nextDisabled" :class="$style.next"></u-button>
        </u-linear-layout>
        <u-linear-layout v-if="showAdvance" gap="small">
            <u-select
                size="mini"
                :value="year"
                :data-source="years"
                @input="onSelectYear"
            ></u-select>
            <u-select
                size="mini"
                :value="month"
                :data-source="months"
                :class="$style.month"
                @input="onSelectMonth"
            ></u-select>
        </u-linear-layout>
        <span v-else :class="$style.title">{{ title }}</span>
    </u-linear-layout>
    <div :class="$style.body">
        <date-table
            :selected-date.sync="selectedDate"
            :year.sync="year"
            :month.sync="month"
            :current="date"
            :min-day="minDay"
            :max-day="maxDay"
            :first-day-of-week="realFirstDayOfWeek"
            :show-week-days="showWeekDays"
            :show-weeks="showWeeks"
            :data="tableData"
            :start-key="startKey"
            :end-key="endKey"
            @select="$emit('select', $event, this)"
            @change="$emit('change', $event, this)"
        >
            <template v-slot="scope">
                <slot :item="scope.item"></slot>
            </template>
        </date-table>
    </div>
</div>
</template>

<script>
import dayjs from 'dayjs';
import i18n from './i18n';
import DateTable from './date-table.vue';
import './initDayjs';
import { getDay } from './utils';

export default {
    name: 'u-calendar-view',
    i18n,
    components: {
        DateTable,
    },
    props: {
        value: {
            type: [String, Number, Date],
            default() {
                return new Date();
            },
        },
        minDate: [String, Date, Number],
        maxDate: [String, Date, Number],
        data: Array,
        dataSource: [Function, Array],
        startKey: {
            type: String,
            default: 'startTime',
        },
        endKey: {
            type: String,
            default: 'endTime',
        },
        showWeekDays: { type: Boolean, default: true },
        showWeeks: { type: Boolean, default: false },
        showBasic: { type: Boolean, default: true },
        showAdvance: { type: Boolean, default: true },
        firstDayOfWeek: { type: Number, default: 1 },
    },
    data() {
        const date = dayjs();
        const fullMonths = [];
        const monthTexts = [
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
        ];
        for (let m = 0; m <= 11; m++) {
            fullMonths.push({
                text: `${monthTexts[m]} ${this.$t('month')}`,
                value: m,
            });
        }
        return {
            tempData: [],
            date,
            selectedDate: date.clone(),
            year: date.year(),
            month: date.month(), // 月份从 0 开始
            years: [],
            minDay: null,
            minYear: null,
            minMonth: null,
            maxDay: null,
            maxYear: null,
            maxMonth: null,
            monthTexts,
            fullMonths,
            showToday: true,
        };
    },
    computed: {
        months() {
            const { minDay, maxDay, minYear, maxYear, minMonths, maxMonths, year, fullMonths } = this;
            if (!minDay || !maxDay)
                return fullMonths;
            else if (minYear === maxYear || year === minYear)
                return minMonths;
            else if (year === maxYear)
                return maxMonths;
            else
                return fullMonths;
        },
        realFirstDayOfWeek() {
            const { firstDayOfWeek, showWeeks } = this;
            if (showWeeks || typeof firstDayOfWeek !== 'number' || firstDayOfWeek < 1 || firstDayOfWeek > 7)
                return 1;
            else
                return Math.floor(firstDayOfWeek);
        },
        prevDisabled() {
            const { year, month, minYear, minMonth } = this;
            return year < minYear || (year === minYear && month <= minMonth);
        },
        nextDisabled() {
            const { year, month, maxYear, maxMonth } = this;
            return year > maxYear || (year === maxYear && month >= maxMonth);
        },
        title() {
            const { monthTexts, month, year } = this;
            return `${year} ${this.$t('year')} ${monthTexts[month]} ${this.$t('month')}`;
        },
        tableData() {
            return this.data || this.tempData;
        },
    },
    watch: {
        minDate: {
            handler(value) {
                const minDay = getDay(value, dayjs().subtract(10, 'year').month(0).day(0));
                this.minDay = minDay;
                this.minYear = minDay.year();
                this.minMonth = minDay.month();
                this.getConfigs();
            },
            immediate: true,
        },
        maxDate: {
            handler(value) {
                const maxDay = getDay(value, dayjs().add(9, 'year').month(0).day(0));
                this.maxDay = maxDay;
                this.maxYear = maxDay.year();
                this.maxMonth = maxDay.month();
                this.getConfigs();
            },
            immediate: true,
        },
        async dataSource(dataSource) {
            let tempData = [];
            if (dataSource instanceof Promise) {
                tempData = await dataSource();
            } else if (typeof dataSource === 'function') {
                tempData = dataSource();
            } else if (Array.isArray(dataSource)) {
                tempData = dataSource;
            }

            if (!Array.isArray(tempData)) {
                console.error(`[cloud-ui] Please confirm that the final result is an array in 'data-source' prop.`);
                tempData = [];
            }
            this.tempData = tempData;
        },
    },
    methods: {
        getConfigs() {
            const { minDay, maxDay, date, minYear, minMonth } = this;
            if (!minDay || !maxDay)
                return;

            if (minDay.isSameOrBefore(maxDay)) {
                // 当前日期不在配置日期范围内，重新赋值成最小日期
                if (maxDay.isBefore(date) || minDay.isAfter(date)) {
                    this.selectedDate = minDay.clone();
                    this.year = minYear;
                    this.month = minMonth;
                    this.showToday = false;
                }

                this.getYears();
                this.getMonths();
            } else {
                throw new Error('minDate must before maxDate!');
            }
        },
        /**
         * 计算可选年份
         */
        getYears() {
            const { minYear, maxYear } = this;
            const years = [];
            for (let y = minYear; y <= maxYear; y++) {
                years.push({
                    text: `${y} ${this.$t('year')}`,
                    value: y,
                });
            }
            this.years = years;
        },
        /**
         * 计算可选月份
         */
        getMonths() {
            const { minYear, minMonth, maxYear, maxMonth, monthTexts } = this;
            const minMonths = [];
            const maxMonths = [];
            if (minYear === maxYear) {
                for (let m = minMonth; m <= maxMonth; m++) {
                    minMonths.push({
                        text: `${monthTexts[m]} ${this.$t('month')}`,
                        value: m,
                    });
                }
            } else {
                for (let m = minMonth; m <= 11; m++) {
                    minMonths.push({
                        text: `${monthTexts[m]} ${this.$t('month')}`,
                        value: m,
                    });
                }
                for (let m = 0; m <= maxMonth; m++) {
                    maxMonths.push({
                        text: `${monthTexts[m]} ${this.$t('month')}`,
                        value: m,
                    });
                }
            }
            this.minMonths = minMonths;
            this.maxMonths = maxMonths;
        },
        /**
         * Basic
         */
        onPrevMonth() {
            const newSelectedDate = this.selectedDate.subtract(1, 'month');
            this.selectedDate = newSelectedDate;
            this.year = newSelectedDate.year();
            this.month = newSelectedDate.month();
        },
        onNextMonth() {
            const newSelectedDate = this.selectedDate.add(1, 'month');
            this.selectedDate = newSelectedDate;
            this.year = newSelectedDate.year();
            this.month = newSelectedDate.month();
        },
        onToday() {
            if (this.selectedDate.isSame(this.date))
                return;
            const newSelectedDate = this.date.clone();
            this.selectedDate = newSelectedDate;
            this.year = newSelectedDate.year();
            this.month = newSelectedDate.month();
        },
        /**
         * Advance
         */
        onSelectYear(value) {
            const { minMonth, maxMonth, selectedDate, minDay, maxDay } = this;
            let newSelectedDate = selectedDate.clone().year(value);
            if (newSelectedDate.isBefore(minDay)) {
                this.month = minMonth;
                newSelectedDate = minDay.clone();
            } else if (newSelectedDate.isAfter(maxDay)) {
                this.month = maxMonth;
                newSelectedDate = maxDay.clone();
            }
            this.selectedDate = newSelectedDate;
            this.year = value;
        },
        onSelectMonth(value) {
            const { selectedDate, minDay, maxDay } = this;
            let newSelectedDate = selectedDate.clone().month(value);
            if (newSelectedDate.isBefore(minDay)) {
                newSelectedDate = minDay.clone();
            } else if (newSelectedDate.isAfter(maxDay)) {
                newSelectedDate = maxDay.clone();
            }
            this.selectedDate = newSelectedDate;
            this.month = value;
        },
    },
};
</script>

<style module>
.root {
    padding: 4px;
    background: var(--field-background);
    color: #555;
}

.prev::before {
    icon-font: url('../i-icon.vue/assets/angle-left.svg');
}
.next::before {
    icon-font: url('../i-icon.vue/assets/angle-right.svg');
}

.month[size$="mini"] {
    width: 65px;
}

.title {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-large);
}

.body {
    padding: 12px 0;
}
</style>
