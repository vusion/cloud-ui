import MField from '../m-field.vue';

export const UComboSlider = {
    name: 'u-combo-slider',
    mixins: [MField],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1, validator: (step) => step >= 0 },
        precision: { type: Number, default: 1, validator: (precision) => precision > 0 },
        range: { type: Array, default() { return []; } },
        formatter: { type: [String, Object] },
        syncOn: { type: String, default: 'input' },
        hideButtons: { type: Boolean, default: true },
        unit: String,
        tip: String,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        reverse: { type: Boolean, default: false },
        vertical: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
            isMousedown: false,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
        currentValue(currentValue, oldValue) {
            this.$emit('change', {
                value: currentValue,
                oldValue,
            }, this);
        },
    },
    computed: {
        remarks() {
            const middle = (this.min + this.max) / 2 >> 0;
            const remarks = [
                {
                    percent: 0,
                    label: this.min,
                }, {
                    percent: 50,
                    label: middle,
                }, {
                    percent: 100,
                    label: this.max,
                },
            ];
            return this.reverse ? remarks.reverse() : remarks;
        },
        numberMin() {
            return Math.max(this.min, this.range[0] === undefined ? -Infinity : this.range[0]);
        },
        numberMax() {
            return Math.min(this.max, this.range[1] === undefined ? Infinity : this.range[1]);
        },
    },
    created() {
        document.body.addEventListener('mouseup', this.onMouseup, false);
    },
    destroyed() {
        document.body.removeEventListener('mouseup', this.onMouseup, false);
    },
    methods: {
        onValidate($event) {
            if (this.syncOn === 'blur')
                return;
            const value = $event.value;

            // 最小值的情况不同步，不然会显得很怪异
            if (!$event.valid && value === this.min)
                return;
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
        },
        onInput(value, type) {
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            if (type) {
                // 区分onInput事件的来源 满足特定需求
                this.$emit('number-input', value);
            }
        },
        onSlide($event) {
            this.$emit('slide', $event, this);
        },
        onMousedown(e) {
            this.isMousedown = true;
        },
        onMouseup(e) {
            if (this.isMousedown) {
                this.$emit('slide-end', this.currentValue);
                this.isMousedown = false;
            }
        },
    },
};

export default UComboSlider;
