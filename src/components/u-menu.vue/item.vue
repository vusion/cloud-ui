<template>
<a :class="$style.root"
    :selected="parentVM.router ? active : isSelected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
    :href="currentHref" :target="target" @click="parentVM.router ? onClick($event) : select($event)" v-on="listeners"
    v-ellipsis-title :has-sub="!!$slots.sub">
    <slot></slot>
    <div :class="$style.sub">
        <slot name="sub"></slot>
    </div>
</a>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';

export default {
    name: 'u-menu-item',
    parentName: 'u-menu',
    groupName: 'u-menu-group',
    extends: MSinglexItem,
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
    },
    watch: {
        active(active) {
            this.watchActive(active);
        },
    },
    mounted() {
        this.watchActive(this.active);
    },
    methods: {
        watchActive(active) {
            // active && this.groupVM && this.groupVM.toggle(true);
        },
    },
};
</script>

<style module src="./item.css"></style>
