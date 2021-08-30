<template>
<div :class="$style.root" @submit.prevent :layout="layout">
    <slot></slot>
</div>
</template>

<script>
import MParent from '../m-parent.vue';
import MGroupParent from '../m-group.vue/parent.vue';
import UValidator from '../u-validator.vue';
import cloneDeep from 'lodash/cloneDeep';

export default {
    name: 'u-form',
    mixins: [MParent, MGroupParent, UValidator],
    props: {
        model: Object,
        rules: Object,
        layout: { type: String, default: 'block' },
        size: { type: String, default: 'normal' },
        labelSize: { type: String, default: 'normal' },
        collapsible: { type: Boolean, default: false },
    },
    data() {
        return {
            itemVMs: [],
            comparedModel: null,
        };
    },
    computed: {
        extraSlots() {
            return this.validatorVMs.some((itemVM) => itemVM.$slots.extra);
        },
    },
    watch: {
        model: {
            handler(val) {
                if (this.comparedModel) {
                    // @TODO: 考虑到 @change 事件是基于子组件的 @change 事件的，所以 @modify 命名分开
                    this.$emit('modify', { modified: this.deepCompare(val, this.comparedModel) }, this);
                }
            },
            deep: true,
        },
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
    },
    methods: {
        validate(trigger = 'submit', untouched = false) {
            if (typeof trigger === 'boolean') {
                untouched = trigger;
                trigger = 'submit';
            } // @compat
            return Promise.all([].concat(this.validatorVMs, this.itemVMs)
                .map((validatorVM) => validatorVM.validate('submit', untouched)),
            ).then((results) => this.get$event(trigger));
        },
        validateItem(name, trigger = 'submit', silent = false) {
            const itemVM = this.itemVMs.find((itemVM) => itemVM.name === name);
            if (itemVM)
                return itemVM.validate(trigger, silent);
        },
        record() {
            this.comparedModel = cloneDeep(this.model);
        },
        deepCompare(o = {}, compare) {
            if (!compare)
                return false;
            if (typeof o === 'object' && o !== null) {
                if (Array.isArray(o))
                    return (
                        o.length !== compare.length
                        || o.some((m, i) => this.deepCompare(m, compare[i]))
                    );
                else
                    return Object.keys(o).some((key) =>
                        this.deepCompare(o[key], compare[key]),
                    );
            } else
                return o !== compare;
        },
    },
};
</script>

<style module>
.root {}

.root[layout="inline"] .item {
    display: inline-block;
}

.root[layout="inline"] .item:not(:last-child) {
    margin-right: var(--space-base);
    margin-bottom: var(--space-base);
}

.root[layout="block"] .item:not(:last-child) {
    margin-bottom: var(--space-base);
}

.root[layout="inline"]::after {
    display: block;
    content: '.';
    clear: both;
    height: 0;
    visibility: hidden;
}

.root[gap="large"][layout="block"] .item:not(:last-child) {
    margin-bottom: var(--space-large);
}

.root[gap="large"][layout="inline"] .item:not(:last-child) {
    margin-right: var(--space-large);
}

.root[gap="small"][layout="block"] .item:not(:last-child) {
    margin-bottom: var(--space-small);
}

.root[gap="small"][layout="inline"] .item:not(:last-child) {
    margin-right: var(--space-small);
}

.root[gap="small"][layout="inline"] .item > .item_label { padding-right: 10px; }
</style>
