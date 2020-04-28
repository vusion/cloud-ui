import { MChild } from '../m-parent.vue';
import MField from '../m-field.vue';

export const UCheckbox = {
    name: 'u-checkbox',
    parentName: 'u-checkboxes',
    mixins: [MChild, MField],
    props: {
        value: { type: Boolean, default: false },
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        autoFocus: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
            currentValue: this.value,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            ['focus', 'blur', 'update:value'].forEach((prop) => {
                delete listeners[prop];
            });
            return listeners;
        },
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
        currentValue(value, oldValue) {
            this.$emit('change', { value, oldValue });
        },
    },
    mounted() {
        if (this.autoFocus) {
            this.$el.focus();
        }
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        check() {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.currentValue;
            const value = !this.currentValue;

            if (this.parentVM && !this.parentVM.canCheck({
                value,
                oldValue,
                label: this.label,
                itemVM: this,
            }))
                return;

            let cancel = false;
            this.$emit('before-check', {
                value,
                oldValue,
                label: this.label,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentValue = value;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('check', { value, oldValue });

            this.parentVM && this.parentVM.onCheck({
                value,
                oldValue,
                label: this.label,
                itemVM: this,
            });
        },
    },
};

export default UCheckbox;
