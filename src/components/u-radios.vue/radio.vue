<template>
<label :class="$style.root" :disabled="currentDisabled" @click="select()"
tabindex="0" @keydown.space.prevent @keyup.space.prevent="select()"
@focus="onFocus" @blur="onBlur" v-on="listeners">
    <span :class="$style.radio" :selected="selected" :disabled="currentDisabled"></span>
    <slot></slot>
</label>
</template>

<script>
import { MChild } from '../m-parent.vue';
import MField from '../m-field.vue';

export default {
    name: 'u-radio',
    parentName: 'u-radios',
    mixins: [MChild, MField],
    props: {
        value: { type: Boolean, default: false },
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
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
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--brand-disabled);
}

.radio {
    display: inline-block;
    width: var(--radio-size);
    height: var(--radio-size);
    border-radius: 100px;
    line-height: calc(var(--radio-size) - 2px);
    background: var(--radio-background);
    border: 1px solid var(--border-color-base);
    margin-right: 5px;
    text-align: center;
    transition: all var(--transition-duration-base);
    font-size: 14px;
}

.radio::before {
    display: inline-block;
    content: '✓';
    width: 10px;
    height: 10px;
    border-radius: 100px;
    color: transparent;
    overflow: hidden;
}

.radio[selected] {
    border-color: var(--brand-primary);
}

.radio[selected]::before {
    background: var(--brand-primary);
}

.radio[disabled] {
    border-color: var(--border-color-base);
    background: var(--background-color-base);
}
</style>
