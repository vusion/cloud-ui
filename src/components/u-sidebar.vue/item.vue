<template>
    <a :class="$style.root"
        :selected="parentVM.router ? active : isSelected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
        :href="currentHref" :target="target" @click="parentVM.router ? onClick($event) : select($event)" v-on="listeners"
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
import { isElementInView } from '../../utils/dom';

export default {
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    groupName: 'u-sidebar-group',
    extends: MSinglexItem,
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
            if (!active)
                return;
            let groupVM = this.groupVM;
            while (groupVM) {
                groupVM.toggle
                    && groupVM.toggle(true, this.parentVM.particular);
                groupVM = groupVM.parentVM;
            }
            if (!isElementInView(this.$el, this.parentVM.$el, 'vertical'))
                this.$nextTick(() => this.$el.scrollIntoView(false));
        },
        onClick(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled || this.groupVM.disabled)
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
                if (cancel)
                    return;
                this.parentVM.select(this);
            }
        },
    },
};
</script>

<style module>
.root {
    display: block;
    cursor: var(--cursor-pointer);
    height: var(--sidebar-item-height);
    line-height: var(--sidebar-item-height);
    padding-left: var(--sidebar-item-padding-left);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--sidebar-item-color);
    background: var(--sidebar-item-background);
    transition: all var(--transition-duration-base);
    border-bottom: var(--sidebar-item-border-bottom-width) solid var(--sidebar-item-border-bottom-color);

}

.root:hover {
    background: var(--sidebar-item-background-hover);
    color: var(--sidebar-item-color-hover);
}

.root[readonly] {
    cursor: default;
}

.root[selected] {
    background: var(--sidebar-item-background-selected);
    color: var(--sidebar-item-color-selected);
    border-right: var(--sidebar-item-border-right-width) solid var(--sidebar-item-border-right-color);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--sidebar-item-background-disabled);
    color: var(--sidebar-item-color-disabled);
}

.root[selected][disabled] {
    background: var(--sidebar-item-background-selected-disabled);
}
.root [class^="i-ico_lcp-iconv"] {
    margin-left: -24px;
    margin-right: 8px;
}

.root .singleicon {
    font-size: var(--sidebar-item-icon-font-size);
    color: var(--sidebar-item-icon-color);
}

.root:hover .singleicon {
    color: var(--sidebar-item-icon-color-hover);
}
.root[selected] .singleicon {
    color: var(--sidebar-item-icon-color-selected);
}
</style>
