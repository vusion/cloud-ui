<template>
    <a
        :class="$style.root"
        :selected="parentVM.router ? active : isSelected"
        :readonly="parentVM.readonly"
        :disabled="disabled || parentVM.disabled || (groupVM && groupVM.disabled)"
        :href="currentHref"
        :target="target"
        @click="parentVM.router ? onClick($event) : onSelect($event)"
        v-on="listeners"
        v-ellipsis-title
        vusion-slot-name="default"
        vusion-slot-name-edit="text"
        @click.stop>
        <i-ico
            v-if="icon"
            :name="icon"
            :class="$style.singleicon"
            notext
        ></i-ico>
        <slot>{{ text }}</slot>
        <s-empty v-if="!text && (!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
    </a>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';
import ULink from '../u-link.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-dropdown-item',
    components: { SEmpty },
    extends: MSinglexItem,
    groupName: 'u-dropdown-group',
    parentName: 'u-dropdown',
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
            if (this.parentVM.close) {
                this.parentVM.close();
            }
        },
    },
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
