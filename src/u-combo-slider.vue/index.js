import ComboSlider from 'proto-ui.vusion/src/u-combo-slider.vue';

export default {
    name: 'u-combo-slider',
    mixins: [ComboSlider],
    props: {
        unit: String,
        tip: String,
        hideButtons: { type: Boolean, default: true },
    },
    data() {
        return {
            currentValue: this.value,
            isMousedown: false,
        };
    },
    created() {
        document.body.addEventListener('mouseup', this.onMouseup, false);
    },
    methods: {
        onMousedown(e) {
            this.isMousedown = true;
        },
        onMouseup(e) {
            if (this.isMousedown) {
                this.$emit('slide-end', this.currentValue);
                this.isMousedown = false;
            }
        },
        onInput(value, type) {
            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
            if (type) {
                // 区分onInput事件的来源 满足特定需求
                this.$emit('number-input', value);
            }
        },
    },
    destroyed() {
        document.body.removeEventListener('mouseup', this.onMouseup, false);
    },
};
