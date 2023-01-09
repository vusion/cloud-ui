<template>
    <a
        :class="$style.root"
        :selected="parentVM.router ? active : isSelected"
        :readonly="parentVM.readonly"
        :disabled="disabled || parentVM.disabled"
        :href="currentHref"
        :target="target"
        @click="parentVM.router ? onClick($event) : select($event)"
        v-on="listeners"
        v-ellipsis-title
        vusion-slot-name="default">
        <i-ico
            v-if="icon"
            :name="icon"
            :class="$style.singleicon"
            notext
        ></i-ico>
        <slot>{{ text }}</slot>
        <s-empty v-if="!text && (!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
    </a>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-dropdown-item',
    components: { SEmpty },
    extends: MSinglexItem,
    parentName: 'u-dropdown',
};
</script>

<style module>
.root {
    display: block;
    position: relative;
    z-index: 1;
    cursor: var(--cursor-pointer);
    line-height: 32px;
    padding: 0 12px;
    font-size: 14px;
    color: var(--color-base);
    text-align: left;
}
.root:hover {
    color: var(--brand-primary);
}

.root[readonly] {
    cursor: default;
    background: none;
}

.root[selected] {
    color: var(--brand-primary);
}

.root[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    background: none;
    color: var(--font-disabled-color);
}

.root[selected][disabled] {
    background: var(--background-color-disabled);
}
.root .singleicon {
    margin-right: 4px;
}
</style>
