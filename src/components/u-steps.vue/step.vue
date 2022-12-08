<template>
<div v-show="selected" vusion-slot-name="default">
    <slot></slot>
    <s-empty v-if="!$slots.default && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
</div>
</template>

<script>
import { UTab } from '../u-tabs.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-step',
    parentName: 'u-steps',
    components: { SEmpty },
    extends: UTab,
    props: {
        value: { type: Number, default: 0 },
        desc: { type: String, default: null },
    },
    computed: {
        index() {
            return this.parentVM && this.parentVM.itemVMs.indexOf(this);
        },
    },
};
</script>
