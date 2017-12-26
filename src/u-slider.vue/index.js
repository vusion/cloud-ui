import Field from 'proto-ui.vusion/src/u-field.vue';

export default {
    name: 'u-slider',
    mixins: [Field],
    props: {
        value: { type: Number, default: 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 0 },
    },
    data() {
        return {
            currentValue: this.value,
            grid: { x: 0, y: 0 },
            handleEl: undefined,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
            this.handleEl.style.left = this.percent + '%';
        },
        currentValue(value, oldValue) {
            value = +value;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('change', {
                value,
                oldValue,
            });
        },
    },
    computed: {
        percent: {
            get() {
                return (this.currentValue - this.min) / (this.max - this.min) * 100;
            },
            set(percent) {
                let value = +this.min + (this.max - this.min) * percent / 100;
                if (this.step)
                    value = Math.round(value / this.step) * this.step;
                const isOutOfRange = this.isOutOfRange(value);
                if (isOutOfRange)
                    this.currentValue = isOutOfRange;
                this.currentValue = value.toFixed(4);
            },
        },
    },
    mounted() {
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.percent + '%';
    },
    methods: {
        onDragStart($event) {
            this.grid.x = this.step / (this.max - this.min) * $event.range.width;
            this.percent = $event.left / $event.range.width * 100;
        },
        onDrag($event) {
            this.percent = $event.left / $event.range.width * 100;
        },
        isOutOfRange(value) {
            const min = +this.min;
            const max = +this.max;

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
            return (value < min && min) || (value > max && max);
        },
    },
};
