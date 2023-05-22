<template>
    <div :class="$style.root" :disabled="disabled" :border="border">
        <DatePannel />
    </div>
</template>

<script>
import DatePannel from './panel/date'

export default {
    name: 'u-calendar-range',
    components: {
        DatePannel
    },
    props: {
        date: {
            type: [String, Number, Date],
            default() {
                return new Date();
            },
        },
        /* week, month, year, quarter */
        picker: { type: String, default: 'date' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        minDate: [String, Date, Number],
        maxDate: [String, Date, Number],
        yearDiff: { type: [String, Number], default: 20 },
        yearAdd: { type: [String, Number], default: 4 },
        yearPageSize: { type: Number, default: 12 },
        border: { type: Boolean, default: true },
    },
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
