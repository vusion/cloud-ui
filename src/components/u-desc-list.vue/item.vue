<template>
<div :class="$style.root" :label-size="currentLabelSize">
    <label :class="$style.label">
        <slot name="label">{{ label }}</slot>
    </label>
    <div :class="$style.value">
        <slot></slot>
    </div>
</div>
</template>

<script>
import { MEmitter } from '../m-emitter.vue';

export default {
    name: 'u-desc-list-item',
    parentName: 'u-desc-list',
    groupName: 'u-desc-list-group',
    mixins: [MEmitter],
    props: { label: String, labelSize: String },
    data() {
        return { groupVM: undefined, parentVM: undefined };
    },
    computed: {
        currentLabelSize() {
            return (
                this.labelSize ||
                (this.groupVM && this.groupVM.labelSize) ||
                (this.parentVM && this.parentVM.labelSize) ||
                'auto'
            );
        },
    },
    created() {
        this.dispatch(this.$options.groupName, 'add-item-vm', this);
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.groupName, 'remove-item-vm', this);
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
</script>

<style module>
.root {
    position: relative;
}

.root::before, .root::after {
    display: table;
    content: '';
    line-height: 0;
}

.root::after {
    clear: both;
}

.label {
    display: block;
    float: left;
    padding-right: var(--desc-list-item-label-padding-right);
    text-align: right;
    color: var(--color-light);
}

.root[label-size$="auto"] .label { width: auto; padding-right: 1em; }
.root[label-size$="mini"] .label { width: var(--desc-list-item-label-width-mini); }
.root[label-size$="small"] .label { width: var(--desc-list-item-label-width-small); }
.root[label-size$="normal"] .label { width: var(--desc-list-item-label-width); }
.root[label-size$="large"] .label { width: var(--desc-list-item-label-width-large); }

.value {
    float: left;
    max-width: calc(100% - var(--desc-list-item-label-width) - 30px);
    color: var(--color-base);
}

.root[label-size$="mini"] .value {
    max-width: calc(100% - var(--desc-list-item-label-width-mini) - 30px);
}

.root[label-size$="small"] .value {
    max-width: calc(100% - var(--desc-list-item-label-width-small) - 30px);
}

.root[label-size$="large"] .value {
    max-width: calc(100% - var(--desc-list-item-label-width-large) - 30px);
}

.root[label-size$="huge"] .value {
    max-width: calc(100% - 120px - 30px);
}
</style>
