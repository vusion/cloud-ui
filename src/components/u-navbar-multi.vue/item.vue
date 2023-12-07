<template>
    <a :class="isInNavbar ? $style.root : $style.dropdownRoot"
        :selected="parentVM.router ? active : isSelected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
        :href="currentHref" :target="target" @click="parentVM.router ? onClick($event) : onSelect($event)" v-on="listeners"
        v-ellipsis-title
        vusion-slot-name-edit="text"
        vusion-slot-name="default">
        <i-ico v-if="icon" :name="icon" :class="$style.singleicon" notext></i-ico>
        <slot>{{ text }}</slot>
        <s-empty
            v-if="(!$slots.default)
            && !text
            && $env.VUE_APP_DESIGNER">
        </s-empty>
    </a>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';
import ULink from '../u-link.vue';

export default {
    name: 'u-navbar-item-multi',
    parentName: 'u-navbar-multi',
    groupName: 'u-navbar-group-multi',
    extends: MSinglexItem,
    computed: {
        isInNavbar() {
            return !this.groupVM;
        },
    },
    methods: {
        onClick(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled || (this.groupVM && this.groupVM.disabled))
                return e.preventDefault();
            ULink.methods.onClick.call(this, e);
            if (this.parentVM.router) {
                let cancel = false;
                this.$emit('before-select', {
                    value: this.value,
                    item: this.item,
                    itemVM: this,
                    preventDefault: () => (cancel = true),
                }, this);
                if (cancel) {
                    this.close();
                    return;
                }
                this.parentVM.select(this, true);
            }
            this.close();
        },
        onSelect(e) {
            this.select(e);
            this.close();
        },
        close() {
            if (this.groupVM && this.groupVM.close) {
                this.groupVM.close();
            }
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    user-select: none;
    cursor: var(--cursor-pointer);
    text-align: center;
    font-size: var(--navbar-item-font-size);
    padding: var(--navbar-item-padding);
    height: var(--navbar-height);
    line-height: var(--navbar-height);
    background: var(--navbar-item-background);
    color: var(--navbar-item-color);
    transition: var(--transition-duration-base);
}

.root:not(:last-child) {
    margin-right: var(--navbar-item-space);
}

.root:hover {
    background: var(--navbar-item-background-hover);
    color: var(--navbar-item-color-hover);
}

.root[readonly] {
    cursor: default;
}

.root[selected] {
    background: var(--navbar-item-background-selected);
    color: var(--navbar-item-color-selected);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--navbar-item-color-disabled);
}
.root [class^="i-ico_lcp-iconv"] {
    margin-left: -8px;
    margin-right: 8px;
}

.dropdownRoot {
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
.dropdownRoot:hover {
    color: var(--brand-primary);
}

.dropdownRoot[readonly] {
    cursor: default;
    background: none;
}

.dropdownRoot[selected] {
    color: var(--brand-primary);
}

.dropdownRoot[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    background: none;
    color: var(--font-disabled-color);
}

.dropdownRoot[selected][disabled] {
    background: var(--background-color-disabled);
}
.dropdownRoot .singleicon {
    margin-right: 4px;
}
</style>
