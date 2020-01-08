import MEmitter from '../m-emitter.vue';

export const MField = {
    name: 'm-field',
    isField: true,
    mixins: [MEmitter],
    data() {
        return {
            validatorVM: undefined,
            formItemVM: undefined, // @compat
        };
    },
    created() {
        this.dispatch(($parent) => $parent.$options.name && $parent.$options.name.startsWith('u-form-item')
            || $parent.$options.isField || $parent.$options.isValidator, 'add-field-vm', this);

        const validatorVM = this.validatorVM || this.formItemVM; // @compat
        this.$on('update', (value) => validatorVM && validatorVM.$emit('update', value));
        this.$on('input', (value) => validatorVM && validatorVM.$emit('input', value));
        this.$on('change', ($event) => validatorVM && validatorVM.$emit('change', $event));
        this.$on('focus', () => validatorVM && validatorVM.$emit('focus'));
        this.$on('blur', () => validatorVM && validatorVM.$emit('blur'));
    },
    destroyed() {
        const validatorVM = this.validatorVM || this.formItemVM; // @compat
        validatorVM && validatorVM.$emit('remove-field-vm', this);
    },
};

export default MField;
