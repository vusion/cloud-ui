import Movable from '../u-modal.vue';
import { getDimension } from '../util/style.js';

export default {
    name: 'u-slider',
    props: {
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        grid: {
            type: Object,
            default() {
                return {
                    x: 0,
                    y: 0,
                };
            },
        },
        min: {
            type: [String, Number],
            default: 0,
        },
        max: {
            type: [String, Number],
            default: 100,
        },
        step: {
            type: [String, Number],
            default: 0,
        },
    },
    mixins: [Movable],
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(newValue) {
            this.currentValue = newValue;
        },
        currentValue(newValue) {
            this.$emit('update:value', newValue);
        },
    },
    computed: {
        percent: {
            get() {
                return (this.currentValue - this.min) / (this.max - this.min) * 100;
            },
            set(percent) {
                let value = +this.min + percent / (this.max - this.min) * 100;
                if (this.step)
                    value = Math.round(value / this.step) * this.step;
                const isOutOfRange = this.isOutOfRange(value);
                if (isOutOfRange)
                    this.currentValue = isOutOfRange;
                this.currentValue = value;
            },
        },
    },
    methods: {
        onDragStart($event) {
            this.grid.x = this.step / (this.max - this.min) * $event.range.width;
        },
        onDrag($event) {
            this.percent = $event.left / $event.range.width * 100;
        },
        onMouseDown($event) {
            if (this.readonly || this.disabled)
                return;

            const e = $event;
            const $handle = this.$refs.handle;
            const $parent = $handle.$el.offsetParent;
            const dimension = getDimension($parent, 'center');

            this.percent = (e.clientX - dimension.left) / dimension.width * 100;
        },
        isOutOfRange(value) {
            const min = +this.min;
            const max = +this.max;

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
            return (value < min && min) || (value > max && max);
        },
    },
};
