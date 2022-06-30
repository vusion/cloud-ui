<template>
    <div :class="$style.root" :disabled="disabled" :type="type">
        <div
            :class="$style.title"
            vusion-slot-name="title"
            vusion-slot-name-edit="title"
            no-for-edit
            vusion-click-enabled
            can-nodeinfo
        >
            <slot name="title"></slot>
            <s-empty
                v-if="
                    !$slots.title &&
                    $scopedSlots &&
                    !($scopedSlots.title && $scopedSlots.title()) &&
                    $env.VUE_APP_DESIGNER
                "
            ></s-empty>
            <i :class="$style.icon"></i>
        </div>
        <m-popper
            :class="$style.popper"
            :trigger="trigger"
            :placement="placement"
            :disabled="disabled"
            append-to="reference"
            :opened="opened"
            @update:opened="$emit('update:opened', $event)"
        >
            <slot></slot>
        </m-popper>
    </div>
</template>

<script>
import { MSinglex } from '../m-singlex.vue';
import UDropdownItem from './item.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-dropdown',
    childName: 'u-dropdown-item',
    components: {
        UDropdownItem,
        SEmpty,
    },
    extends: MSinglex,
    props: {
        type: { type: String, default: 'text' },
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
                d.setTime(d.getTime() - 1 * 24 * 60 * 60 * 1000);
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
    font-size: 14px;
    cursor: var(--cursor-pointer);
    transition: var(--transition-duration-base);
}
.root[disabled] {
    cursor: var(--cursor-not-allowed);
}
.root:not(:last-child) {
    margin-right: var(--navbar-item-space);
}

/* text */
.root[type="text"] {
    padding-right: 24px;
    color: var(--dropdown-color-text);
}
.root[type="text"]:not([disabled]):hover {
    color: var(--dropdown-color-text-hover);
}
.root[type="text"]:not([disabled]):active {
    color: var(--dropdown-color-text-active);
}
.root[type="text"][disabled] {
    color: var(--dropdown-color-text-disabled);
}

.root[type="primary"],
.root[type="primary_secondary"],
.root[type="normal"] {
    line-height: 30px;
    padding: 0 39px 0 15px;
    border-radius: 4px;
}
.root[type="primary"] .icon,
.root[type="primary_secondary"] .icon,
.root[type="normal"] .icon {
    right: 13px;
}
/* primary */
.root[type="primary"] {
    border: var(--button-border-width) solid var(--button-border-color-primary);
    background: var(--button-background-primary);
    color: var(--button-color-primary);
}
.root[type="primary"]:hover {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-hover);
    background: var(--button-background-primary-hover);
    color: var(--button-color-primary-hover);
}
.root[type="primary"]:active {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-hover);
    background: var(--button-background-primary-hover);
    color: var(--button-color-primary-hover);
    box-shadow: var(--button-box-shadow-active-primary);
}

/* primary_secondary */
.root[type="primary_secondary"] {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-secondary);
    background: var(--button-background-primary-secondary);
    color: var(--button-color-primary-secondary);
}
.root[type="primary_secondary"]:hover {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-secondary-hover);
    background: var(--button-background-primary-secondary-hover);
    color: var(--button-color-primary-secondary-hover);
}
.root[type="primary_secondary"]:active {
    border: var(--button-border-width) solid
        var(--button-border-color-primary-secondary-hover);
    background: var(--button-background-primary-secondary-active);
    color: var(--button-color-primary-secondary-active);
    box-shadow: var(--button-box-shadow-active-primary-secondary);
}

/* normal */
.root[type="normal"] {
    border: var(--button-border-width) solid var(--button-border-color);
    background: var(--button-background);
    color: var(--button-color);
}
.root[type="normal"]:hover {
    border: var(--button-border-width) solid var(--button-border-color-hover);
    background: var(--button-background-hover);
    color: var(--button-color-hover);
}
.root[type="normal"]:active {
    border: var(--button-border-width) solid var(--button-border-color-active);
    background: var(--button-background-active);
    color: var(--button-color-active);
    box-shadow: var(--button-box-shadow-active);
}

.root[type="primary"][disabled],
.root[type="primary_secondary"][disabled],
.root[type="normal"][disabled] {
    border: var(--button-border-width) solid var(--button-border-color-disabled);
    background: var(--button-background-disabled);
    color: var(--button-color-disabled);
    box-shadow: none;
}

.title {
}

.icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 18px;
}

.icon::before {
    icon-font: url("../i-icon.vue/icons/keyboard-arrow-down.svg");
}

.popper {
    width: 120px;
    min-width: 100%;
    line-height: var(--navbar-dropdown-popper-line-height);
    font-size: var(--navbar-dropdown-popper-font-size);
    padding: 8px 0px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background: #fff;
}
</style>
