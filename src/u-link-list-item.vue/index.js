import { Emitter } from 'proto-ui.vusion';

export default {
    name: 'u-link-list-item',
    parentName: 'u-link-list',
    mixins: [Emitter],
    inheritAttrs: false,
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
