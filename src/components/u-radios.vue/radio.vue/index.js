import { MChild } from '../../m-parent.vue';
import MField from '../../m-field.vue';

export const URadio = {
    name: 'u-radio',
    parentName: 'u-radios',
    mixins: [MChild, MField],
    props: {
        value: { type: Boolean, default: false },
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // inherit: parentVM: undefined,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        },
        selected() {
            return this.parentVM ? this.parentVM.selectedVM === this : this.value;
        },
        currentDisabled() {
            return this.disabled || this.parentVM && this.parentVM.disabled;
        },
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            this.$emit('blur', e, this);
        },
        select() {
            if (this.readonly || this.disabled)
                return;
            if (this.parentVM && (this.parentVM.readonly || this.parentVM.disabled))
                return;

            let cancel = false;
            this.$emit('before-select', {
                label: this.label,
                itemVM: this,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.parentVM && this.parentVM.select(this);
        },
    },
};

export default URadio;
