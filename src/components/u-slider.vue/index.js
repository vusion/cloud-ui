import MField from '../m-field.vue';

export const USlider = {
    name: 'u-slider',
    mixins: [MField],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1 },
        precision: { type: Number, default: 1, validator: (precision) => precision > 0 },
        // @TODO: 以后再考虑复杂的范围情况
        range: { type: Array, default() { return []; } },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
            currentRange: this.normalizeRange(this.range),
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

            this.$emit('change', { value, oldValue }, this);
        },
        range(range) {
            this.currentRange = this.normalizeRange(range);
        },
        min(value) {
            this.handleEl.style.left = this.percent + '%';
        },
        max(value) {
            this.handleEl.style.left = this.percent + '%';
        },
    },
    computed: {
        percent: {
            get() {
                return (this.currentValue - this.min) / (this.max - this.min) * 100;
            },
            set(percent) {
                const value = this.fix(+this.min + (this.max - this.min) * percent / 100);

                this.currentValue = value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            },
        },
        rangeStartPercent() {
            const start = Math.max(this.currentRange[0], this.min);
            return (start - this.min) / (this.max - this.min) * 100;
        },
        rangeEndPercent() {
            const end = Math.min(this.currentRange[1], this.max);
            return (this.max - end) / (this.max - this.min) * 100;
        },
    },
    mounted() {
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.percent + '%';
    },
    methods: {
        normalizeRange(range) {
            range = Array.from(range);
            if (range[0] === undefined)
                range[0] = -Infinity;
            if (range[1] === undefined)
                range[1] = Infinity;
            return range;
        },
        fix(value) {
            // 刻度约束
            this.step && (value = Math.round(value / this.step) * this.step);
            // 范围约束
            value = Math.min(Math.max(this.currentRange[0], value), this.currentRange[1]);
            // 最大最小约束
            value = Math.min(Math.max(this.min, value), this.max);
            // 保留小数位数
            value = +value.toFixed(this.precision < 1 ? -Math.log10(this.precision) : 0);
            return value;
        },
        onDragStart($event) {
            this.grid.x = this.step / (this.max - this.min) * $event.range.width;

            const oldValue = this.currentValue;
            this.percent = $event.left / $event.range.width * 100;
            const percent = this.percent;
            this.handleEl.style.left = percent + '%';
            this.$emit('slide', {
                oldValue,
                value: this.currentValue,
                percent,
            }, this);
        },
        onDrag($event) {
            const oldValue = this.currentValue;
            this.percent = $event.left / $event.range.width * 100;
            const percent = this.percent;
            this.handleEl.style.left = percent + '%';
            this.$emit('slide', {
                oldValue,
                value: this.currentValue,
                percent,
            }, this);
        },
    },
};

export default USlider;
