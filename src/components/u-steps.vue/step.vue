<template>
<div v-show="selected" vusion-slot-name="default">
    <slot></slot>
</div>
</template>

<script>
import { UTab } from '../u-tabs.vue';

export default {
    name: 'u-step',
    parentName: 'u-steps',
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
