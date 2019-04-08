import { Emitter } from 'proto-ui.vusion';

export default {
    name: 'u-link-list-item',
    parentName: 'u-link-list',
    mixins: [Emitter],
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
