<template>
<div :class="$style.root" :disabled="disabled">
    <div :class="$style.title" vusion-slot-name="title" no-for-edit vusion-click-enabled can-nodeinfo>
        <slot name="title"></slot>
        <s-empty v-if="(!$slots.title && ($scopedSlots && !($scopedSlots.title && $scopedSlots.title()))) && $env.VUE_APP_DESIGNER"></s-empty>
    </div>
    <m-popper :class="$style.popper" :trigger="trigger" :placement="placement" :disabled="disabled" append-to="reference"
        :opened="opened" @update:opened="$emit('update:opened', $event)">
        <slot></slot>
    </m-popper>
</div>
</template>

<script>
import { MSinglex } from '../m-singlex.vue';
import UDropdwonItem from './item.vue';
import SEmpty from '../s-empty.vue';


export default {
    name: 'u-dropdown',
    childName: 'u-dropdown-item',
    extends: MSinglex,
    props: {
        router: { type: Boolean, default: true },
        animation: { type: String, default: '1' },
        title: String,
        trigger: { type: String, default: 'click' },
        placement: {
            type: String,
            default: 'bottom-start',
            validator: (value) =>
                /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        opened: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
        }
    },
    components: {
        UDropdwonItem,
        SEmpty,
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
    methods: {
        logout() {
            /* eslint-disable new-cap */
            this.$confirm('确定退出登录吗？', '提示')
                .then(() => this.$auth.logout())
                .then(() => {
                    this.eraseCookie();
                    location.reload();
                });
        },
        eraseCookie() {
            const cookies = document.cookie.split(';');
            cookies.forEach((cookie) => {
                const eqPos = cookie.indexOf('=');
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                const d = new Date();
                d.setTime(d.getTime() - (1 * 24 * 60 * 60 * 1000));
                document.cookie = `${name}=; expires=${d.toGMTString()}; path=/`;
            });
        },
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
    border: none;
    padding: 0 20px;
    font-size: var(--navbar-item-font-size);
    color: #666;
}

.root:not(:last-child) {
    margin-right: var(--navbar-item-space);
}

.title {
    position: relative;
}

.title::after {
    position: absolute;
    icon-font: url('../i-icon.vue/icons/keyboard-arrow-down.svg');
    height: auto;
    line-height: var(--navbar-height);
    color: var(--navbar-color);
    font-size: 20px;
    right: -18px;
    top: 0;
}

.popper {
    background: #fff;
    font-size: var(--navbar-dropdown-popper-font-size);
    min-width: 100%;
    line-height: var(--navbar-dropdown-popper-line-height);
    /* padding-top: 3px; */
    /* padding: var(--navbar-dropdown-popper-padding); */
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--navbar-dropdown-color-disabled);
}
</style>
