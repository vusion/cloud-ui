<template>
<u-linear-layout direction="vertical" :class="$style.root">
    <u-linear-layout gap="small">
        <u-select
            size="mini"
            v-model="year"
            :data-source="years"
        ></u-select>
        <u-select
            size="mini"
            v-model="month"
            :data-source="months"
            :class="$style.month"
        ></u-select>
    </u-linear-layout>
    <div :class="$style.body">
        <date-table
            :year="year"
            :month="month"
            :current="date"
            :min-day="minDay"
            :max-day="maxDay"
            :data="tableData"
            :parent-data="parentData"
            :start-key="startKey"
            :end-key="endKey"
            :width="width"
            :first-field="firstField"
            :first-title="firstTitle"
            :first-width="firstWidth"
            @select="$emit('select', $event, this)"
            @change="$emit('change', $event, this)"
        >
            <template v-slot="scope">
                <slot :item="scope.item"></slot>
            </template>
        </date-table>
    </div>
    <u-pagination
        v-if="total > 0"
        :total="total"
        :page="page.number"
        :page-size="page.size"
        @select="load"
    ></u-pagination>
</u-linear-layout>
</template>

<script>
import dayjs from 'dayjs';
import get from 'lodash/get';
import i18n from './i18n';
import DateTable from './date-table.vue';
import './initDayjs';
import { getDay } from './utils';

export default {
    name: 'u-calendar-table',
    i18n,
    components: {
        DateTable,
    },
    props: {
        minDate: [String, Date, Number],
        maxDate: [String, Date, Number],
        data: Array,
        dataSourceParent: [Function, Array, Object],
        dataSourceChild: [Function, Array, Object],
        parentKey: String,
        childKey: String,
        startKey: {
            type: String,
            default: 'startTime',
        },
        endKey: {
            type: String,
            default: 'endTime',
        },
        width: {
            type: [String, Number],
            default: 48,
        },
        firstField: String,
        firstTitle: String,
        firstWidth: {
            type: [String, Number],
            default: 60,
        },
        pageSize: [String, Number],
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
            parentData: [],
            date,
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
            page: {
                number: 1,
                size: this.pageSize,
            },
            total: 0,
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
        tableData() {
            return this.data || this.tempData;
        },
    },
    watch: {
        minDate: {
            handler(value) {
                const minDay = getDay(value, dayjs().subtract(5, 'year')
                    .month(0)
                    .date(1)
                    .hour(0)
                    .minute(0)
                    .second(0)
                    .millisecond(0));
                this.minDay = minDay;
                this.minYear = minDay.year();
                this.minMonth = minDay.month();
                this.getConfigs();
            },
            immediate: true,
        },
        maxDate: {
            handler(value) {
                const maxDay = getDay(value, dayjs().add(4, 'year')
                    .month(11)
                    .date(31)
                    .hour(23)
                    .minute(59)
                    .second(59)
                    .millisecond(999));
                this.maxDay = maxDay;
                this.maxYear = maxDay.year();
                this.maxMonth = maxDay.month();
                this.getConfigs();
            },
            immediate: true,
        },
        dataSourceParent: {
            async handler() {
                await this.load();
            },
            immediate: true,
        },
        dataSourceChild: {
            async handler() {
                await this.load();
            },
            immediate: true,
        },
    },
    methods: {
        async load() {
            const { dataSourceParent, dataSourceChild, parentKey, childKey } = this;
            if (this.$env.VUE_APP_DESIGNER) {
                this.tempData = [{ fieldValue: this.firstField, children: [{}] }];
                return;
            }
            if (!dataSourceParent || !dataSourceChild) {
                return;
            }
            const parentData = await this.handleDataSource(dataSourceParent, true);
            const childData = await this.handleDataSource(dataSourceChild);

            if (!Array.isArray(parentData) || !Array.isArray(childData)) {
                console.error(`[cloud-ui] Please confirm that the final result is an array in 'data-source' prop.`);
                this.tempData = [];
                return;
            }
            this.tempData = parentData.map((parentItem) => {
                const fieldValue = get(parentItem, parentKey);
                const children = childData.filter((childItem) => get(childItem, childKey) === fieldValue);
                return {
                    fieldValue,
                    children: children.map((child) => ({ ...child, ...parentItem })),
                };
            });
        },
        async handleDataSource(dataSource, isParent) {
            if (!dataSource) {
                return [];
            }
            if (dataSource instanceof Promise || typeof dataSource === 'function') {
                const result = await dataSource(this.page);
                return this.getData(result, isParent);
            }
            return this.getData(dataSource, isParent);
        },
        isDataSource(data) {
            return Object.prototype.toString.call(data) === '[object Object]' && data.content;
        },
        getData(dataSource, isParent) {
            if (Array.isArray(dataSource)) {
                return dataSource;
            } else if (this.isDataSource(dataSource)) {
                if (isParent)
                    this.total = dataSource.totalPages;
                return dataSource.content;
            }
            return [];
        },
        getConfigs() {
            const { minDay, maxDay, date, minYear, minMonth } = this;
            if (!minDay || !maxDay)
                return;

            if (minDay.isSameOrBefore(maxDay)) {
                // 当前日期不在配置日期范围内，重新赋值成最小日期
                if (maxDay.isBefore(date) || minDay.isAfter(date)) {
                    this.year = minYear;
                    this.month = minMonth;
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
    },
};
</script>

<style module>
.root {
    background: var(--field-background);
}

.root .month[size$="mini"] {
    width: 65px;
}

.body {
    padding: 12px 0;
    overflow: auto;
}
</style>
