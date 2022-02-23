<template>
<a :class="$style.root"
    :selected="parentVM.router ? active : isSelected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
    :href="currentHref" :target="target" @click="parentVM.router ? onClick($event) : select($event)" v-on="listeners"
    v-ellipsis-title
    vusion-slot-name="text">
    <i-ico v-if="icon" :name="icon" :class="$style.singleicon" notext></i-ico>
    <slot>{{ text }}</slot>
</a>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';

export default {
    name: 'u-dropdown-item',
    extends: MSinglexItem,
    props: {
    },
    parentName: 'u-dropdown',
};
</script>

<style module>
.root {
    display: block;
    position: relative;
    z-index: 1;
    cursor: var(--cursor-pointer);
    height: var(--navbar-height);
    line-height: var(--navbar-height);
    border: none;
    padding: 0 10px;
    font-size: var(--navbar-item-font-size);
    color: var(--navbar-color);
}
</style>
