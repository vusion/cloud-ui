<template>
    <div :class="$style.root">
        <DatePannel />
        <DateRange @pick="emitInput" v-bind="$attrs" v-on="$listeners" />
        <MonthRange />
    </div>
</template>

<script>
import DatePannel from './panel/date'
import DateRange from './panel/date-range'
import MonthRange from './panel/month-range'

export default {
    name: 'u-calendar-range',
    components: {
        DatePannel,
        DateRange,
        MonthRange
    },
    props: {
        // value: {
        //     type: [String, Number, Date],
        //     default() {
        //         return new Date();
        //     },
        // },
        // /* week, month, year, quarter */
        // picker: { type: String, default: 'date' },
        // readonly: { type: Boolean, default: false },
        // disabled: { type: Boolean, default: false },
        // minDate: [String, Date, Number],
        // maxDate: [String, Date, Number],
        // yearDiff: { type: [String, Number], default: 20 },
        // yearAdd: { type: [String, Number], default: 4 },
        // yearPageSize: { type: Number, default: 12 },
        // border: { type: Boolean, default: true },
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
    width: var(--calendar-width);
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
