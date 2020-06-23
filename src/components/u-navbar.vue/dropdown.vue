<template>
<div :class="$style.root" :disabled="disabled">
    <div :class="$style.title"><slot name="title">{{ title }}</slot></div>
    <m-popper :class="$style.popper" :opened.sync="opened" :trigger="trigger" :placement="placement" :disabled="disabled" append-to="reference">
        <slot></slot>
    </m-popper>
</div>
</template>

<script>
export default {
    name: 'u-navbar-dropdown',
    parentName: 'u-navbar',
    props: {
        title: String,
        trigger: { type: String, default: 'hover' },
        placement: {
            type: String,
            default: 'bottom-start',
            validator: (value) =>
                /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        opened: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    z-index: 1;
    cursor: var(--cursor-pointer);
    height: var(--navbar-height);
    line-height: var(--navbar-height);
    border: none;
    padding: var(--navbar-dropdown-padding);
    font-size: var(--navbar-item-font-size);
    color: white;
}

.root:not(:last-child) {
    margin-right: var(--navbar-item-space);
}

.root::after {
    position: absolute;
    icon-font: url('../i-icon.vue/icons/keyboard-arrow-down.svg');
    height: auto;
    line-height: var(--navbar-height);
    color: white;
    font-size: 20px;
    right: 6px;
    top: 0;
}

.popper {
    background: white;
    font-size: var(--navbar-dropdown-popper-font-size);
    width: 100%;
    line-height: var(--navbar-dropdown-popper-line-height);
    padding-top: 3px;
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--navbar-dropdown-color-disabled);
}
</style>
