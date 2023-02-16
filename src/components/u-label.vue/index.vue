<template>
<span :class="$style.root" v-on="$listeners" :type="type" :selected="selected" @click="handleClick()">
    <span vusion-slot-name-edit="text"><slot>{{ text }}</slot></span>
    <span v-if="removable" :class="$style.remove" @click="remove()"></span>
</span>
</template>

<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'u-label',
    mixins: [MEmitter],
    data() {
        return {
            selected: false,
        };
    },
    props: {
        text: String,
        removable: { type: Boolean, default: false },
        type: { type: String, default: 'filled' }, // 填充or线性 line
    },
    methods: {
        remove() {
            if (this.$emitPrevent('before-remove', null, this))
                return;
            this.$emit('remove', null, this);
        },
        handleClick() {
            this.selected = !this.selected;
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    line-height: var(--label-line-height);
    padding: var(--label-padding-y) var(--label-padding-x);
    font-size: var(--label-font-size);
    background: var(--label-background);
    color: var(--label-color);
    border-radius: var(--label-border-radius);
    white-space: nowrap;
}

.remove {
    display: inline;
    cursor: var(--cursor-pointer);
    opacity: 0.7;
    padding: 0 var(--label-remove-padding-x);
    margin-right: calc(var(--label-padding-x) * (-1));
}

.remove:hover {
    opacity: 1;
}

.remove::before {
    icon-font: url('../i-icon.vue/assets/close.svg');
}

.root[color="primary"] {
    background: var(--label-background-primary);
    color: var(--label-color-primary);
}

.root[color="success"] {
    background: var(--label-background-success);
    color: var(--label-color-success);
}

.root[color="normal"] {
    background: var(--label-background-normal);
    color: var(--label-color-normal);
}

.root[color="warning"] {
    background: var(--label-background-warning);
    color: var(--label-color-warning);
}

.root[color="error"] {
    background: var(--label-background-error);
    color: var(--label-color-error);
}

.root:hover {
    background: var(--label-background-hover);
    color: var(--label-color-hover);
}

.root[color="primary"]:hover {
    background: var(--label-background-primary-hover);
    color: var(--label-color-primary-hover);
}

.root[color="success"]:hover {
    background: var(--label-background-success-hover);
    color: var(--label-color-success-hover);
}

.root[color="warning"]:hover {
    background: var(--label-background-warning-hover);
    color: var(--label-color-warning-hover);
}

.root[color="error"]:hover {
    background: var(--label-background-error-hover);
    color: var(--label-color-error-hover);
}

.root[selected] {
    background: var(--label-background-selected);
    color: var(--label-color-selected);
}

.root[color="primary"][selected] {
    background: var(--label-background-primary-selected);
    color: var(--label-color-primary-selected);
}

.root[color="success"][selected] {
    background: var(--label-background-success-selected);
    color: var(--label-color-success-selected);
}

.root[color="warning"][selected]  {
    background: var(--label-background-warning-selected);
    color: var(--label-color-warning-selected);
}

.root[color="error"][selected]  {
    background: var(--label-background-error-selected);
    color: var(--label-color-error-selected);
}

.root[size="small"] {
    padding: var(--label-padding-y-small) var(--label-padding-x-small);
    font-size: var(--label-font-size-small);
    line-height: var(--label-line-height-small);
}

.root[size="small"] .remove {
    padding: var(--label-remove-padding-x-small);
    margin-right:  calc(var(--label-remove-padding-x-small) * (-1));
}

.root[size="large"] {
    padding: var(--label-padding-y-large) var(--label-padding-x-large);
    font-size: var(--label-font-size-large);
}

.root[size="large"] .remove {
    padding: var(--label-remove-padding-x-large);
    margin-right: calc(var(--label-padding-x-large) * (-1));
}

.root[size="huge"] {
    padding: var(--label-padding-y-huge) var(--label-padding-x-huge);
    font-size: var(--label-font-size-huge);
}

.root[size="huge"] .remove {
    padding: var(--label-remove-padding-x-huge);
    margin-right: calc(var(--label-padding-x-huge) * (-1));
}

.root[display="block"] {
    display: block;
}

.root[type="line"] {
    background: var(--label-line-background);
    border: 1px solid var(--label-line-border-color);
    padding: calc( var(--label-padding-y) - 1px ) calc( var(--label-padding-x) - 1px );
}
.root[type="line"][color="primary"]{
    color: var(--label-line-color-primary);
    border-color: var(--label-line-color-primary);
}
.root[type="line"][color="success"]{
    color: var(--label-line-color-success);
    border-color: var(--label-line-color-success);
}
.root[type="line"][color="normal"]{
    color: var(--label-line-color-normal);
    border-color: var(--label-line-color-normal);
}
.root[type="line"][color="warning"]{
    color: var(--label-line-color-warning);
    border-color: var(--label-line-color-warning);
}
.root[type="line"][color="error"]{
    color: var(--label-line-color-error);
    border-color: var(--label-line-color-error);
}
.root[type="line"]:hover {
    background: var(--label-line-background-hover);
    border: 1px solid var(--label-line-border-color);
    padding: calc( var(--label-padding-y) - 1px ) calc( var(--label-padding-x) - 1px );
}
.root[type="line"][color="primary"]:hover{
    color: var(--label-line-color-primary);
    background-color: var(--label-line-background-primary-hover);
    border-color: var(--label-line-color-primary);
}
.root[type="line"][color="success"]:hover{
    color: var(--label-line-color-success);
    background-color: var(--label-line-background-success-hover);
    border-color: var(--label-line-color-success);
}
.root[type="line"][color="warning"]:hover{
    color: var(--label-line-color-warning);
    background-color: var(--label-line-background-warning-hover);
    border-color: var(--label-line-color-warning);
}
.root[type="line"][color="error"]:hover{
    color: var(--label-line-color-error);
    background-color: var(--label-line-background-error-hover);
    border-color: var(--label-line-color-error);
}

.root[type="line"][selected] {
    background: var(--label-line-background-selected);
    border: 1px solid var(--label-line-background-selected);
    color: var(--label-line-color-selected);
    padding: calc( var(--label-padding-y) - 1px ) calc( var(--label-padding-x) - 1px );
}
.root[type="line"][color="primary"][selected]{
    color: var(--label-line-color-primary-selected);
    background-color: var(--label-line-background-primary-selected);
    border-color: var(--label-line-background-primary-selected);
}
.root[type="line"][color="success"][selected]{
    color: var(--label-line-color-success-selected);
    background-color: var(--label-line-background-success-selected);
    border-color: var(--label-line-background-success-selected);
}
.root[type="line"][color="warning"][selected]{
    color: var(--label-line-color-warning-selected);
    background-color: var(--label-line-background-warning-selected);
    border-color: var(--label-line-background-warning-selected);
}
.root[type="line"][color="error"][selected]{
    color: var(--label-line-color-error-selected);
    background-color: var(--label-line-background-error-selected);
    border-color: var(--label-line-background-error-selected);
}
.root[type="line"][size="small"] {
    padding: calc( var(--label-padding-y-small) - 1px ) calc( var(--label-padding-x-small) - 1px );
}
.root[type="line"][size="large"] {
    padding: calc( var(--label-padding-y-large) - 1px ) calc( var(--label-padding-x-large) - 1px );
}
.root[type="line"][size="huge"] {
    padding: calc( var(--label-padding-y-huge) - 1px ) calc( var(--label-padding-x-huge) - 1px );
}
</style>
