<template>
    <a
        :class="[$style.root, parentVM.currentCollapse && !isInSidebar ? $style.popRoot : $style.normalRoot]"
        :selected="parentVM.router ? active : isSelected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
        :href="currentHref" :target="target" @click="parentVM.router ? onClick($event) : select($event)" v-on="listeners"
        v-ellipsis-title
        vusion-slot-name-edit="text"
        vusion-slot-name="default"
        :mini="miniMode"
        :noIcon="!icon"
        ref="root"
        >
        <i-ico v-if="icon" :name="icon" :class="$style.singleicon" notext></i-ico>
        <span v-show="!hiddenText">
            <slot>{{ text }}</slot>
        </span>
        <s-empty
            v-if="(!$slots.default)
            && !text
            && !hiddenText
            && $env.VUE_APP_DESIGNER">
        </s-empty>
        <m-popper
            v-if="isInSidebar && parentVM.currentCollapse && !parentVM.isDragging"
            :class="$style.popper"
            :reference="$refs.root"
            trigger="hover"
            placement="right-start"
            :disabled="disabled"
            append-to="body"
        >
            <div>
                <slot>{{ text }}</slot>
            </div>
        </m-popper>
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
    computed: {
        isInSidebar() {
            return !(this.groupVM && this.groupVM.$options.name === this.$options.groupName);
        },
        miniMode() {
            return this.isInSidebar && this.parentVM.currentCollapse;
        },
        hiddenText() {
            return this.isInSidebar && this.parentVM.currentCollapse && this.parentVM.isTransitionEnd && !!this.icon;
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--sidebar-item-color);
    background: var(--sidebar-item-background);
    transition: all var(--transition-duration-base);
    border-bottom: var(--sidebar-item-border-bottom-width) solid var(--sidebar-item-border-bottom-color);

}

.normalRoot {
    height: var(--sidebar-item-height);
    line-height: var(--sidebar-item-height);
    padding-left: var(--sidebar-item-padding-left);
    background: var(--sidebar-item-background);
    border-bottom: var(--sidebar-item-border-bottom-width) solid var(--sidebar-item-border-bottom-color);
}

.normalRoot[mini][noIcon] {
    padding-left: calc(var(--sidebar-item-padding-left) - 12px);
}

.popRoot{
    display: block;
    position: relative;
    z-index: 1;
    line-height: 32px;
    padding: 0 12px;
    font-size: 14px;
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

.root[mini][selected] {
    border-right: unset;
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--sidebar-item-background-disabled);
    color: var(--sidebar-item-color-disabled);
}

.root[selected][disabled] {
    background: var(--sidebar-item-background-selected-disabled);
}
.normalRoot .singleicon {
    margin-left: -24px;
}

.normalRoot[mini] .singleicon {
    margin-left: -12px;
}

.root .singleicon {
    display: inline-block;
    margin-right: 8px;
    font-size: var(--sidebar-item-icon-font-size);
    color: var(--sidebar-item-icon-color);
}

.root:hover .singleicon {
    color: var(--sidebar-item-icon-color-hover);
}
.root[selected] .singleicon {
    color: var(--sidebar-item-icon-color-selected);
}

.popper {
    /* margin-left: var(--sidebar-group-popper-margin-left); */
    /* width: var(--sidebar-width); */
    background: var(--sidebar-background);
    min-width: 120px;
    line-height: var(--navbar-dropdown-popper-line-height);
    font-size: var(--navbar-dropdown-popper-font-size);
    padding: 8px 0px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 8px;
}

</style>
