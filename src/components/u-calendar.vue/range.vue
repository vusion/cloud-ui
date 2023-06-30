<template>
    <div :class="$style.root" :border="border">
        <DateRange
            v-if="picker === 'date'"
            :value="value"
            :disabledDate="disabledDate"
            @pick="emitInput"
            v-bind="$attrs"
            v-on="$listeners" />
        <MonthRange
            v-if="picker === 'month'"
            :value="value"
            :disabledDate="disabledDate"
            @pick="emitInput"
            v-bind="$attrs"
            v-on="$listeners" />
        <QuarterRange
            v-if="picker === 'quarter'"
            :value="value"
            :disabledDate="disabledDate"
            @pick="emitInput"
            v-bind="$attrs"
            v-on="$listeners" />
    </div>
</template>

<script>
import DateRange from './panel/date-range'
import MonthRange from './panel/month-range'
import QuarterRange from './panel/quarter-range'

export default {
    name: 'u-calendar-range',
    components: {
        DateRange,
        MonthRange,
        QuarterRange,
    },
    props: {
        picker: { type: String, default: 'date' },
        startDate: { type: [String, Number, Date] },
        endDate: { type: [String, Number, Date] },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        minDate: [String, Date, Number],
        maxDate: [String, Date, Number],
        // yearDiff: { type: [String, Number], default: 20 },
        // yearAdd: { type: [String, Number], default: 4 },
        // yearPageSize: { type: Number, default: 12 },
        border: { type: Boolean, default: true },
    },
    computed: {
        value() {
            return [this.startDate, this.endDate]
        },
        disabledDate() {
            const minDate = this.minDate && new Date(this.minDate);
            const maxDate = this.maxDate && new Date(this.maxDate);
            const disabled = this.disabled;
            return function(date) {
                if (disabled || (minDate && date < minDate) || (maxDate && date > maxDate)) {
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
    padding: var(--calendar-padding);
    user-select: none;
    background: var(--calendar-background);
    box-sizing: border-box;
}
.root[border] {
    border: 1px solid var(--calendar-border-color);
    border-radius: var(--calendar-border-radius);
}
</style>
