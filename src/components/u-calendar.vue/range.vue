<template>
    <div :class="$style.root" :border="border">
        <DateRange
            v-if="picker === 'date'"
            :value="value"
            :disabledDate="disabledDate"
            @pick="emitInput"
            v-bind="$attrs"
            v-on="$listeners" />
        <OtherRange
            v-else
            :picker="picker"
            :value="value"
            :disabledDate="disabledDate"
            @pick="emitInput"
            v-bind="$attrs"
            v-on="$listeners" />
    </div>
</template>

<script>
import DateRange from './panel/date-range'
import OtherRange from './panel/other-range'
import { getDateTimestamp, getMonthTimestamp, getQuarterTimestamp, getYearTimestamp } from './util'

export default {
    name: 'u-calendar-range',
    components: {
        DateRange, OtherRange
    },
    props: {
        picker: { type: String, default: 'date' },
        startDate: { type: [String, Number, Date] },
        endDate: { type: [String, Number, Date] },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        minDate: [String, Date, Number],
        maxDate: [String, Date, Number],
        border: { type: Boolean, default: true },
    },
    computed: {
        value() {
            return [this.startDate, this.endDate]
        },
        disabledDate() {
            const timestampFnMap = {
                date: getDateTimestamp,
                month: getMonthTimestamp,
                quarter: getQuarterTimestamp,
                year: getYearTimestamp,
            }
            const timestampFn = timestampFnMap[this.picker] || (() => false);
            return (date) => {
                const time = new Date(date).getTime();
                if (this.disabled ||
                    (this.minDate && time < timestampFn(this.minDate)) ||
                    (this.maxDate && date > timestampFn(this.maxDate))) {
                    return true;
                }
                return false;
            };
        },
    },
    methods: {
        emitInput(val) {
            this.$emit('input', val);
        },
    }
}
</script>

<style module>
.root {
    width: var(--calendar-range-width);
    user-select: none;
    background: var(--calendar-background);
    box-sizing: border-box;
}
.root[border] {
    border: 1px solid var(--calendar-border-color);
    border-radius: var(--calendar-border-radius);
}
</style>
