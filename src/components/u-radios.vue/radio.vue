<template>
<label :class="$style.root" :disabled="currentDisabled" @click="select()"
tabindex="0" @keydown.space.prevent @keyup.space.prevent="select()"
@focus="onFocus" @blur="onBlur" v-on="listeners" :readonly="currentReadonly">
    <span :class="$style.radio" :selected="selected" :disabled="currentDisabled" :readonly="currentReadonly"></span>
    <slot></slot>
    <span vusion-slot-name="item">
        <slot name="item" :item="node">{{ text }}</slot>
        <s-empty v-if="!$slots.item && !text && $env.VUE_APP_DESIGNER" inline :class="$style.empty"></s-empty>
    </span>
</label>
</template>

<script>
import { MChild } from '../m-parent.vue';
import MField from '../m-field.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-radio',
    parentName: 'u-radios',
    mixins: [MChild, MField],
    components: {
        SEmpty,
    },
    props: {
        text: String,
        value: { type: Boolean, default: false },
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        node: Object,
    },
    data() {
        return {
            // inherit: parentVM: undefined,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        },
        selected() {
            return this.parentVM ? this.parentVM.selectedVM === this : this.value;
        },
        currentDisabled() {
            return this.disabled || (this.parentVM && this.parentVM.disabled);
        },
        currentReadonly() {
            return this.readonly || (this.parentVM && this.parentVM.readonly);
        },
    },
    mounted() {
        this.autofocus && this.$el.focus();
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            this.$emit('blur', e, this);
        },
        select() {
            if (this.readonly || this.disabled)
                return;
            if (
                this.parentVM
                && (this.parentVM.readonly || this.parentVM.disabled)
            )
                return;
            let cancel = false;
            this.$emit(
                'before-select',
                {
                    label: this.label,
                    itemVM: this,
                    preventDefault: () => (cancel = true),
                },
                this,
            );
            if (cancel)
                return;
            this.parentVM && this.parentVM.select(this);
        },
    },
};
</script>

<style module>
.root {
    user-select: none;
    cursor: var(--cursor-pointer);
}

.root:focus {
    outline: var(--focus-outline);
}

.root:focus .radio {
    box-shadow: var(--radio-box-shadow-focus);
    border-color: var(--radio-border-color-focus);
}

.root:active {
    outline: var(--focus-outline);
}

.root:active .radio {
    box-shadow: var(--radio-box-shadow-active);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--radio-color-disabled);
}
.root[disabled]:focus .radio,
.root[readonly]:focus .radio
{
    box-shadow: var(--radio-box-shadow-focus-disabled);
    border-color: var(--radio-border-color-disabled);
}
.root[readonly]:hover {
    cursor: var(--radio-cursor-readonly);
}
.root[disabled]:active .radio,
.root[readonly]:active .radio
{
    box-shadow: var(--radio-box-shadow-active-disabled);
}

.radio {
    display: inline-block;
    position: relative;
    vertical-align: text-top;
    width: var(--radio-size);
    height: var(--radio-size);
    border-radius: 100px;
    line-height: calc(var(--radio-size) - 2px);
    background: var(--radio-background);
    border: 1px solid var(--radio-border-color);
    margin-right: var(--radio-inner-space-x);
    text-align: center;
    transition: all var(--transition-duration-base);
    font-size: 14px;
}

.radio:hover {
    border-color: var(--radio-border-color-hover);
}
.radio[readonly]:hover,
.radio[disabled]:hover {
    border-color: var(--radio-border-color-disabled);
}

.radio::before {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '\2713';
    width: var(--radio-solid-circle-size);
    height: var(--radio-solid-circle-size);
    border-radius: 100px;
    color: transparent;
    overflow: hidden;
}

.radio[selected] {
    border-color: var(--brand-primary);
}

.radio[selected]::before {
    background: var(--radio-solid-circle-background);
}

.radio[selected][disabled]::before {
    background: var(--radio-solid-circle-background-disabled);
}

.radio[disabled] {
    border-color: var(--radio-border-color-disabled);
    background: var(--radio-circle-background-disabled);
}

.root[designer]{
    display: inline-block;
    position: relative;
}
.root[designer] + .root[designer]:after{
    content: '';
    position: absolute;
    display: block;
    background: rgba(255,255,255,0.8);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.empty:not(:only-child){
    display: none;
}
</style>
