<template>
<div :class="$style.root" v-if="selected">
    <slot></slot>
</div>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';

export default {
    name: 'u-tab',
    parentName: 'u-tabs',
    extends: MSinglexItem,
    props: {
        title: String,
        /* @TODO: Remove this option */ hidden: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        },
    },
};
</script>

<style module>
.root {
    height: 100%;
}
</style>
