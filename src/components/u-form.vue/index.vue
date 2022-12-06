<template>
<div :class="$style.root" @submit.prevent :layout="layoutValue" :repeat="repeat" :label-layout="labelLayout">
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
        repeat: { type: [String, Number], default: null },
        labelLayout: String,
        labelEllipsis: { type: Boolean, default: false },
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
        layoutValue() {
            if (this.repeat > 0) {
                return 'inline';
            } else {
                return this.layout;
            }
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

.root[layout="inline"] {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}

.root[layout="inline"] .item {
    display: inline-block;
}

.root[layout="inline"] .item:not(:last-child) {
    padding-right: var(--space-base);
}
.root[layout="inline"] .item {
    margin-bottom: var(--space-base);
}
.root[layout="inline"]::after {
    display: block;
    content: '.';
    clear: both;
    height: 0;
    visibility: hidden;
}
.root[layout="inline"] .item[layout="center"],
.root[layout="inline"] .item[layout="end"] {
    display: inline-flex;
}

.root[layout="block"] .item:not(:last-child) {
    margin-bottom: var(--form-item-margin-bottom);
}
/* @deprecated 换成了label-layout*/
.root[layout="vertical"] .item {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.root[layout="vertical"] .item:not(:last-child) {
    margin-bottom: var(--form-item-margin-bottom);
}

.root[layout="vertical"] .item > label{
    display: inline-flex;
    width: 100%;
    padding-right: 0;
    align-items: center;
    margin-bottom: 4px;
    justify-content: start;
}
.root[layout="vertical"] .item > label[required]::after {
    position: initial;
    display: inline-block;
    margin-left: 4px;
    line-height: 16px;
}
.root[layout="vertical"] .item > label:empty{
    display: none;
}
.root[layout="vertical"] .item > [class^="u-form_item_field__"],
.root[layout="vertical"] .item > [class^="u-form_item_field__"] > [class^="u-form_item_wrap__"] {
    display: block;
    max-width: 100%;
}
.root[layout="vertical"] .item > label [s-empty="true"] {
    max-width: 90px;
}
/* @deprecated 换成了label-layout*/
.root .item > label [s-empty="true"] {
    min-width: 56px;
}

.root[gap="large"][layout="block"] .item:not(:last-child),
.root[gap="large"][layout="vertical"] .item:not(:last-child) {
    margin-bottom: var(--form-item-margin-bottom-large);
}

.root[gap="large"][layout="inline"] .item:not(:last-child) {
    padding-right: var(--space-large);
}

.root[gap="small"][layout="block"] .item:not(:last-child),
.root[gap="small"][layout="vertical"] .item:not(:last-child)  {
    margin-bottom: var(--form-item-margin-bottom-small);
}

.root[gap="small"][layout="inline"] .item:not(:last-child) {
    padding-right: var(--space-small);
}

.root[gap="small"][layout="inline"] .item > .item_label { padding-right: var(--space-small); }

/* gap转换成gap-height, gap-width, 保留gap为了历史遗留组件的样式兼容问题 */
.root[gap-height="large"][layout="block"] .item:not(:last-child),
.root[gap-height="large"][layout="vertical"] .item:not(:last-child) {
  margin-bottom: var(--form-item-margin-bottom-large);
}

.root[gap-height="normal"][layout="block"] .item:not(:last-child),
.root[gap-height="normal"][layout="vertical"] .item:not(:last-child) {
    margin-bottom: var(--form-item-margin-bottom);
}

.root[gap-width="large"][layout="inline"]:not([repeat]) .item:not(:last-child) {
  margin-right: var(--space-large);
}

.root[gap-width="none"][layout="inline"]:not([repeat]) .item:not(:last-child) {
  margin-right: var(--form-item-margin-bottom-none);
}

.root[gap-height="small"][layout="block"] .item:not(:last-child),
.root[gap-height="small"][layout="vertical"] .item:not(:last-child) {
  margin-bottom: var(--form-item-margin-bottom-small);
}

.root[gap-height="none"][layout="block"] .item:not(:last-child),
.root[gap-height="none"][layout="vertical"] .item:not(:last-child) {
  margin-bottom: var(--form-item-margin-bottom-none);
}

.root[gap-width="small"][layout="inline"]:not([repeat]) .item:not(:last-child) {
  margin-right: var(--space-small);
}

/* 会导致label样式错乱 先去掉了 */
/* .root[layout="inline"][gap-width="small"]:not([repeat]) .item > .item_label {
  padding-right: var(--space-small);
} */

.root[gap-width="normal"][layout="inline"]:not([repeat]) .item:not(:last-child) {
  margin-right: var(--space-medium);
}

.root[label-layout="block"][layout="inline"] .item,
.root[label-layout="block"][layout="inline"] .item[label-layout="block"]{
    display: inline-flex;
}
</style>
