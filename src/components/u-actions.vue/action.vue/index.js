import { MEmitter } from 'proto-ui.vusion';

export const UAction = {
    name: 'u-action',
    parentName: 'u-actions',
    mixins: [MEmitter],
    inheritAttrs: false,
    props: {
        hidden: { type: Boolean, default: false },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    watch: {
        hidden(value) {
            this.parentVM.watchValue();
        },
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};

export default UAction;
