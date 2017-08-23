import Popper from 'popper.js';

export default {
    name: 'u-popper',
    props: {
        placement: {
            type: String,
            default: 'bottom',
        },
        reference: Object,
        popper: Object,
        value: {
            type: Boolean,
            default: false,
        },
        offset: {
            type: Number,
            default: 0,
        },
        options: {
            type: Object,
            default() {
                return {
                    modifiers: {
                        // boundariesElement: 'body', 不设置此属性能够自动识别出现位置
                    },
                };
            },
        },
    },
    data() {
        return {
            visible: this.value,
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(value) {
                this.visible = value;
                this.$emit('input', value);
            },
        },
        visible(value) {
            if (value)
                this.updatePopper();
            else
                this.destroyPopper();

            this.$emit('input', value);
        },
    },
    methods: {
        createPopper() {
            if (!/^(top|bottom|left|right)(-start|-end)?$/.test(this.placement))
                return false;

            const options = this.options;
            const popper = this.popper || this.$refs.popper;
            const reference = this.reference || this.$refs.reference;

            if (!popper || !reference)
                return false;

            if (this.popperInstance && this.popperInstance.hasOwnProperty('destroy'))
                this.popperInstance.destroy();

            options.placement = this.placement;
            options.modifiers.offset = this.offset;

            this.popperInstance = new Popper(reference, popper, options);
        },
        updatePopper() {
            this.popperInstance ? this.popperInstance.update() : this.createPopper();
        },
        destroyPopper() {
            if (this.visible)
                return false;
            this.popperInstance.destroy();
            this.popperInstance = null;
        },
    },
};
