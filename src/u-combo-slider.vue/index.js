import Field from 'proto-ui.vusion/src/u-field.vue';

export default {
    name: 'u-combo-slider',
    mixins: [Field],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 0 },
        unit: String,
        tip: String,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
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
            });
        },
    },
    methods: {
        onInput(value) {
            if (isNaN(value))
                value = this.currentValue;

            value = +value;
            if (value < this.min)
                value = this.min;
            if (value > this.max)
                value = this.max;

            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
        },
        onInputBlur(value) {
            this.$refs.input.currentValue = this.currentValue;
        },
    },
};
