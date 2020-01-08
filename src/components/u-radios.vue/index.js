import { MParent } from '../m-parent.vue';
import MField from '../m-field.vue';

export const URadios = {
    name: 'u-radios',
    childName: 'u-radio',
    mixins: [MParent, MField],
    props: {
        value: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // inherit: itemVMs: [],
            selectedVM: undefined,
        };
    },
    watch: {
        value(value, oldValue) {
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            this.$emit('change', {
                value: selectedVM ? selectedVM.label : undefined,
                oldValue: oldVM ? oldVM.label : undefined,
                item: selectedVM ? selectedVM.item : undefined,
                itemVM: selectedVM,
            }, this);
        },
        itemVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        },
    },
    mounted() {
        this.watchValue(this.value);
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.label === value)
                return;
            if (value === undefined)
                this.selectedVM = undefined;
            else
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.label === value);
        },
        select(itemVM) {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.label,
                oldValue,
                itemVM,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            if (this.cancelable && this.selectedVM === itemVM)
                this.selectedVM = undefined;
            else
                this.selectedVM = itemVM;

            const value = this.selectedVM && this.selectedVM.label;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                value,
                oldValue,
                itemVM: this.selectedVM,
            }, this);
        },
    },
};

export { URadio } from './radio.vue';

export default URadios;
