<template>
<div :class="$style.root" v-show="selected" vusion-slot-name="default" :vusion-disabled-selected="true">
    <slot></slot>
    <s-empty v-if="!$slots.default && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
</div>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-tab',
    parentName: 'u-tabs',
    components: { SEmpty },
    extends: MSinglexItem,
    props: {
        title: String,
        /* @TODO: Remove this option */
        hidden: {
            type: Boolean,
            default: false,
        },
        closable: { type: Boolean, default: false },
        showTabItem: { type: Boolean, default: true },
    },
    computed: {
        selected() {
            // console.log('tab', this.parentVM, this.active);
            return this.parentVM && (this.parentVM.router ? this.active : this.parentVM.selectedVM === this);
        },
    },
    updated() {
        // IDE里组件放入title插槽后没有重新渲染，这里强制渲染
        if (this.$env.VUE_APP_DESIGNER) {
            if (this.parentVM) {
                // this.parentVM.$forceUpdate();
            }
        }
    },
    methods: {
        designerControl() {
            this.parentVM.select(this);
        },
    },
};
</script>

<style module>
.root {
    height: 100%;
}
</style>
