<template>
<div :class="$style.root">
    <u-linear-layout justify="space-between">
        <u-linear-layout v-if="showBasic" gap="small">
            <u-button @click="onPrevMonth" size="mini" :disabled="prevDisabled">{{ $tt('PrevMonth') }}</u-button>
            <u-button v-if="showToday" @click="onToday" size="mini">{{ $tt('Today') }}</u-button>
            <u-button @click="onNextMonth" size="mini" :disabled="nextDisabled">{{ $tt('NextMonth') }}</u-button>
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
            :selected-dates="selectedDates"
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
            :get-common-attrs="getCommonAttrs"
            @update:selectedDates="updateSelectedDates($event.dates,$event.cell,true)"
            @select="$emit('select', $event, this)"
            :multiple="multiple"
        >
            <template #default="scope">
                <slot :item="scope.item" :__nodeKey="`${scope.item.rowIndex}-${scope.item.cellIndex}`"></slot>
                <s-empty v-if="$env.VUE_APP_DESIGNER
                    && $scopedSlots
                    &&!($scopedSlots.default && $scopedSlots.default({
                        ...scope,
                        __nodeKey: `${scope.item.rowIndex}-${scope.item.cellIndex}`
                    }))
                    && !!$attrs['vusion-node-path']"></s-empty>
            </template>
        </date-table>
    </div>
</div>
</template>

<script>
import dayjs from 'dayjs';
import DateTable from './date-table.vue';
import './initDayjs';
import { DefaultFormatType, getDay } from './utils';
import SEmpty from '../../components/s-empty.vue';
import MEmitter from '../m-emitter.vue';
import get from 'lodash/get';
import i18nMixin from '../../mixins/i18n';

export default {
    name: 'u-calendar-view',
    components: {
        DateTable,
        SEmpty,
    },
    mixins: [MEmitter, i18nMixin('u-calendar-view')],
    props: {
        value: {
            type: [Date, String, Number, Array],
            default() {
                return dayjs().format(DefaultFormatType); // 避免控制台报Error
            },
        },
        minDate: [Date, String, Number],
        maxDate: [Date, String, Number],
        data: [Array, Object],
        dataSource: [Function, Array, Object],
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
        multiple: { type: Boolean, default: false },
    },
    data() {
        const date = dayjs().hour(0).minute(0).second(0).millisecond(0);

        let value = this.value;
        if (Array.isArray(this.value) && this.value.length > 0) {
            value = [...this.value];
        } else if (Array.isArray(this.value)) {
            value = [];
        } else if (this.value === '' || this.value === null) {
            value = [];
        } else {
            value = [this.value];
        }
        const selectedDates = value.length > 0 ? Array.from(new Set(value.map((v) => getDay(v).format(DefaultFormatType)))).sort().map((v) => dayjs(v, DefaultFormatType).startOf('day')) : [];
        const selectedDatesSnapshot = value.join(',');
        const selectedDate = selectedDates[0] || dayjs();

        const fullMonths = [];
        const monthTexts = [
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
        ];
        for (let m = 0; m <= 11; m++) {
            fullMonths.push({
                text: `${monthTexts[m]} ${this.$tt('month')}`,
                value: m,
            });
        }
        return {
            dataFromDataSource: [],
            date,
            selectedDates, // 这个数组必须始终保证有序（从小到大），唯一（unique），其值表示每一天的开始。
            selectedDatesSnapshot,
            year: selectedDate.year(),
            month: selectedDate.month(), // 月份从 0 开始
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
        selectedDate() {
            return this.selectedDates[0];
        },
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
            return `${year} ${this.$tt('year')} ${monthTexts[month]} ${this.$tt('month')}`;
        },
        tableData() {
            const { data, dataFromDataSource } = this;
            return data ? this.handleData(data) : dataFromDataSource;
        },
    },
    watch: {
        minDate: {
            handler(value) {
                const minDay = getDay(value, dayjs().subtract(10, 'year').month(0).date(1))
                    .hour(0)
                    .minute(0)
                    .second(0)
                    .millisecond(0);
                this.minDay = minDay;
                this.minYear = minDay.year();
                this.minMonth = minDay.month();
                this.getConfigs();
            },
            immediate: true,
        },
        maxDate: {
            handler(value) {
                const maxDay = getDay(value, dayjs().add(9, 'year').month(11).date(31))
                    .hour(23)
                    .minute(59)
                    .second(59)
                    .millisecond(999);
                this.maxDay = maxDay;
                this.maxYear = maxDay.year();
                this.maxMonth = maxDay.month();
                this.getConfigs();
            },
            immediate: true,
        },
        dataSource: {
            async handler(dataSource) {
                let dataFromDataSource = await this.handleDataSource(dataSource);

                if (!Array.isArray(dataFromDataSource)) {
                    console.error(`[cloud-ui] Please confirm that the final result is an array in 'data-source' prop.`);
                    dataFromDataSource = [];
                }
                this.dataFromDataSource = dataFromDataSource;
            },
            immediate: true,
        },
        value(newValue) {
            // Bug-2786226575169792: 选中值反选失败
            let value = [];
            if (Array.isArray(newValue)) {
                if (newValue.length > 0) {
                    value = [...newValue];
                }
            } else if (newValue !== null && newValue !== '') {
                value = [newValue];
            }
            value = value.sort();
            const snapshot = value.join(',');
            if (this.selectedDatesSnapshot === snapshot) {
                return;
            }
            this.selectedDates = value.length > 0 ? Array.from(new Set(value.sort())).map((v) => getDay(v).hour(0).minute(0).second(0).millisecond(0)) : [];
            this.selectedDatesSnapshot = snapshot;
            this.getConfigs();
        },
        year() {
            this.$emit('change-year', (this.getCurrentFirstDay()).format(DefaultFormatType), this);
        },
        month() {
            this.$emit('change-month', (this.getCurrentFirstDay()).format(DefaultFormatType), this);
        },
    },
    methods: {
        updateSelectedDates(dates, cell, skipEqualCheck = false) {
            if (!skipEqualCheck) {
                let idx = 0;
                while (this.selectedDates[idx] && dates[idx]) {
                    if (!this.selectedDates[idx].isSame(dates[idx])) {
                        break;
                    }
                    ++idx;
                }
                if (this.selectedDates.length === dates.length && dates.length === idx) {
                    return;
                }
            }
            this.selectedDates = dates;
            const selectedDateStrs = dates.map((d) => d.format(DefaultFormatType));
            this.selectedDatesSnapshot = selectedDateStrs.join(',');
            if (this.multiple) {
                this.$emit('change', dates.map((date) => this.getCommonAttrs(date, { __type__: 'current' })), this);
                this.$emit('input:value', selectedDateStrs);
                this.$emit('update:value', selectedDateStrs);
            } else {
                this.$emit('change', cell, this);
                this.$emit('input:value', selectedDateStrs[0]);
                this.$emit('update:value', selectedDateStrs[0]);
            }
        },
        getConfigs() {
            const { minDay, maxDay, date, selectedDate, minYear, minMonth, maxYear, maxMonth } = this;
            if (!minDay || !maxDay) {
                return;
            }

            if (minDay.isSameOrBefore(maxDay)) {
                if (this.multiple) {
                    const maxDayStartOfDay = maxDay.startOf('day');
                    const uniqueDateSet = new Set(
                        this.selectedDates.map((d, idx) => {
                            if (minDay.isSameOrAfter(d)) {
                                if (idx === 0) {
                                    this.year = minYear;
                                    this.month = minMonth;
                                }
                                return minDay;
                            }
                            if (maxDayStartOfDay.isSameOrBefore(d)) {
                                if (idx === 0) {
                                    this.year = maxYear;
                                    this.month = maxMonth;
                                }
                                return maxDayStartOfDay;
                            }
                            return d;
                        }),
                    );
                    this.selectedDates = Array.from(uniqueDateSet).map((v) => v.clone());
                    // fix：改变值的时候，年、月下拉框不会变化
                    if (this.selectedDates[0]) {
                        this.year = this.selectedDates[0].year();
                        this.month = this.selectedDates[0].month();
                    }
                } else {
                    // 当前日期不在配置日期范围内，重新赋值成最小日期
                    if (maxDay.isBefore(selectedDate) || minDay.isAfter(selectedDate)) {
                        this.year = minYear;
                        this.month = minMonth;
                        this.selectedDates = [minDay.clone().startOf('day')];
                    } else if (selectedDate) {
                        // fix：改变值的时候，年、月下拉框不会变化
                        this.year = selectedDate.year();
                        this.month = selectedDate.month();
                    }
                }
                this.showToday = !maxDay.isBefore(date) && !minDay.isAfter(date);

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
                    text: `${y} ${this.$tt('year')}`,
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
                        text: `${monthTexts[m]} ${this.$tt('month')}`,
                        value: m,
                    });
                }
            } else {
                for (let m = minMonth; m <= 11; m++) {
                    minMonths.push({
                        text: `${monthTexts[m]} ${this.$tt('month')}`,
                        value: m,
                    });
                }
                for (let m = 0; m <= maxMonth; m++) {
                    maxMonths.push({
                        text: `${monthTexts[m]} ${this.$tt('month')}`,
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
            if (!this.selectedDate) {
                let currentFirstDay = this.getCurrentFirstDay();
                currentFirstDay = currentFirstDay.subtract(1, 'month');
                this.year = currentFirstDay.year();
                this.month = currentFirstDay.month();
                return;
            }
            const oldValue = this.selectedDate.format(DefaultFormatType);
            const newSelectedDate = this.selectedDate.subtract(1, 'month');
            const dates = this.getRangeSelectedDates(this.selectedDates.map((v) => v.subtract(1, 'month')), newSelectedDate.startOf('month'), newSelectedDate.endOf('month').startOf('day'));
            this.year = dates[0].year();
            this.month = dates[0].month();
            const date = dates[0];
            const cell = this.getCommonAttrs(date, {
                __type__: 'prev',
                value: newSelectedDate.format(DefaultFormatType),
                oldValue,
                monthOfStart: date.startOf('month'),
                monthOfEnd: date.endOf('month'),
            });
            this.updateSelectedDates(dates, cell, true);
            this.$emit('select', cell, this);
        },
        onNextMonth() {
            if (!this.selectedDate) {
                let currentFirstDay = this.getCurrentFirstDay();
                currentFirstDay = currentFirstDay.add(1, 'month');
                this.year = currentFirstDay.year();
                this.month = currentFirstDay.month();
                return;
            }
            const oldValue = this.selectedDate.format(DefaultFormatType);
            const newSelectedDate = this.selectedDate.add(1, 'month');
            const dates = this.getRangeSelectedDates(this.selectedDates.map((v) => v.add(1, 'month')), newSelectedDate.startOf('month'), newSelectedDate.endOf('month').startOf('day'));
            this.year = dates[0].year();
            this.month = dates[0].month();
            const date = dates[0];
            const cell = this.getCommonAttrs(date, {
                __type__: 'next',
                value: newSelectedDate.format(DefaultFormatType),
                oldValue,
                monthOfStart: date.startOf('month'),
                monthOfEnd: date.endOf('month'),
            });
            this.updateSelectedDates(dates, cell, true);
            this.$emit('select', cell, this);
        },
        onToday() {
            let selectedDate = this.selectedDate;
            if (!selectedDate) {
                selectedDate = this.getCurrentFirstDay();
            }
            if (selectedDate.isSame(this.date))
                return;
            const oldValue = selectedDate && selectedDate.format(DefaultFormatType);
            const __type__ = this.date.isBefore(selectedDate) ? 'prev' : 'next';
            const newSelectedDate = this.date.clone();
            const dates = [newSelectedDate];
            this.year = newSelectedDate.year();
            this.month = newSelectedDate.month();
            const date = dates[0];
            const cell = this.getCommonAttrs(date, {
                __type__,
                value: newSelectedDate.format(DefaultFormatType),
                oldValue,
                monthOfStart: date.startOf('month'),
                monthOfEnd: date.endOf('month'),
            });
            this.updateSelectedDates(dates, cell, true);
            this.$emit('select', cell, this);
        },
        /**
         * Advance
         */
        onSelectYear(value) {
            if (this.year === value) {
                return;
            }
            // fix：2770426704748544，日期多选，清空value值时展示NaN
            let selectedDate = this.selectedDate;
            if (!selectedDate) {
                selectedDate = this.getCurrentFirstDay({ year: this.year });
            }

            const oldValue = selectedDate.format(DefaultFormatType);
            const { minMonth, maxMonth, minDay, maxDay } = this;

            let newSelectedDate = selectedDate.clone().year(value);
            const __type__ = newSelectedDate.isBefore(this.selectedDate) ? 'prev' : 'next';
            if (newSelectedDate.isBefore(minDay)) {
                this.month = minMonth;
                newSelectedDate = minDay.clone();
            } else if (newSelectedDate.isAfter(maxDay)) {
                this.month = maxMonth;
                newSelectedDate = maxDay.clone().startOf('day');
            }
            this.year = value;
            if (!this.selectedDate) {
                return;
            }
            const dates = this.getRangeSelectedDates(this.selectedDates.map((v) => v.year(value)), newSelectedDate.startOf('month'), newSelectedDate.endOf('month').startOf('day'));
            const date = dates[0];
            if (!date)
                return;
            const cell = this.getCommonAttrs(date, {
                __type__,
                value: newSelectedDate.format(DefaultFormatType),
                oldValue,
                monthOfStart: date.startOf('month'),
                monthOfEnd: date.endOf('month'),
            });
            this.updateSelectedDates(dates, cell, true);
            this.$emit('select', cell, this);
        },
        onSelectMonth(value) {
            if (this.month === value) {
                return;
            }

            let selectedDate = this.selectedDate;
            if (!selectedDate) {
                selectedDate = this.getCurrentFirstDay({ month: this.year });
            }

            const oldValue = selectedDate.format(DefaultFormatType);
            const { minDay, maxDay } = this;
            let newSelectedDate = selectedDate.clone().month(value);
            const __type__ = newSelectedDate.isBefore(this.selectedDate) ? 'prev' : 'next';
            if (newSelectedDate.isBefore(minDay)) {
                newSelectedDate = minDay.clone();
            } else if (newSelectedDate.isAfter(maxDay)) {
                newSelectedDate = maxDay.clone().startOf('day');
            }

            this.month = value;
            if (!this.selectedDate) {
                return;
            }
            const dates = this.getRangeSelectedDates(this.selectedDates.map((v) => v.month(value)), newSelectedDate.startOf('month'), newSelectedDate.endOf('month').startOf('day'));
            const date = dates[0];
            if (!date)
                return;
            const cell = this.getCommonAttrs(date, {
                __type__,
                value: newSelectedDate.format(DefaultFormatType),
                oldValue,
                monthOfStart: date.startOf('month'),
                monthOfEnd: date.endOf('month'),
            });
            this.updateSelectedDates(dates, cell, true);
            this.$emit('select', cell, this);
        },
        /**
         * DataSource
         */
        async handleDataSource(dataSource) {
            if (!dataSource) {
                return [];
            }
            if (dataSource instanceof Promise || typeof dataSource === 'function') {
                if (this.$emitPrevent('before-load', undefined, this))
                    return;
                const result = await dataSource(this.page);
                this.$emit('load', undefined, this);
                return this.handleData(result);
            }
            return this.handleData(dataSource);
        },
        handleData(data) {
            if (Array.isArray(data)) {
                return data;
            } else if (Object.prototype.toString.call(data) === '[object Object]' && Array.isArray(data.list)) {
                return data.list;
            } else if (Object.prototype.toString.call(data) === '[object Object]' && data.content) {
                return data.content;
            }
            return [];
        },
        getRangeSelectedDates(sortedDates, _start, _end) {
            let start = _start;
            let end = _end;
            if (this.minDay.isAfter(_start)) {
                start = this.minDay;
            }
            const maxDayStartOfDay = this.maxDay.startOf('day');
            if (maxDayStartOfDay.isBefore(_end)) {
                end = maxDayStartOfDay;
            }
            if (this.multiple) {
                let changed = false;
                const uniqueDateSet = new Set(
                    sortedDates.map((d) => {
                        if (start.isSameOrAfter(d)) {
                            changed = true;
                            return start;
                        } else if (end.isSameOrBefore(d)) {
                            changed = true;
                            return end;
                        }
                        return d;
                    }),
                );
                return changed ? Array.from(uniqueDateSet).map((v) => v.clone().startOf('day')) : sortedDates;
            } else {
                // 当前日期不在配置日期范围内，重新赋值成最小日期
                if (end.isBefore(sortedDates[0]) || start.isAfter(sortedDates[0])) {
                    return [start.startOf('day')];
                }
            }
            return sortedDates;
        },
        async load() {
            this.dataFromDataSource = await this.handleDataSource(this.dataSource);
        },
        async reload() {
            this.dataFromDataSource = await this.handleDataSource(this.dataSource);
        },
        getCommonAttrs(date, extra) {
            return {
                Date: date,
                date: date.date(),
                week: date.week(),
                timestamp: date.valueOf(),
                disabled: date.isBefore(this.minDay) || date.isAfter(this.maxDay),
                __key__: date.format(DefaultFormatType),
                ...extra,
                ...this.getData(date),
            };
        },
        getData(date) {
            const { tableData, startKey, endKey } = this;
            if (!tableData || !tableData.length)
                return {};
            const validData = tableData.filter((item) => {
                const startTime = get(item, startKey, null);
                const endTime = get(item, endKey, null);
                const startDate = getDay(startTime, null);
                const endDate = getDay(endTime, null);
                if (!startDate)
                    return false;
                if (endDate) {
                    return date.isSameOrBefore(endDate) && date.isSameOrAfter(startDate);
                }
                return date.format(DefaultFormatType) === startDate.format(DefaultFormatType);
            });
            if (!validData.length)
                return {};
            return { ...validData[0], list: validData };
        },
        getCurrentFirstDay(data = {}) {
            return dayjs().year(data.year || this.year).month(data.month || this.month).date(1);
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

.root .month[size$="mini"] {
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
