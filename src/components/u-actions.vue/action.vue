<template>
<span><slot></slot></span>
</template>

<script>
import { MEmitter } from '../m-emitter.vue';

export default {
    name: 'u-action',
    parentName: 'u-actions',
    mixins: [MEmitter],
    inheritAttrs: false,
    props: { hidden: { type: Boolean, default: false } },
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
</script>
