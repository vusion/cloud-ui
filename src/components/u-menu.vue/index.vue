<template>
<nav :class="$style.root" :readonly="readonly" :disabled="disabled" @click="onClick">
    <slot></slot>
</nav>
</template>

<script>
import MSinglex from '../m-singlex.vue';

export default {
    name: 'u-menu',
    groupName: 'u-menu-group',
    childName: 'u-menu-item',
    extends: MSinglex,
    props: { router: { type: Boolean, default: true } },
    data() {
        return { parentVM: undefined };
    },
    methods: {
        onClick(e) {
            if (this.$parent && this.$parent.$options.isPopper)
                this.$parent.close();
            this.$emit('click', e, this);
        },
    },
};
</script>

<style module src="./index.css"></style>
