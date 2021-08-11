<template>
<label :class="$style.root" :disabled="disabled" @click="check()"
    tabindex="0" @keydown.space.prevent @keyup.space.prevent="check()"
    @focus="onFocus" @blur="onBlur" v-on="listeners" allowChild>
    <span :class="$style.box" :status="String(currentValue)" :disabled="disabled"></span>
    <span vusion-slot-name="text"><slot>{{ text }}</slot></span>
</label>
</template>

<script>
import { MChild } from '../m-parent.vue';
import MField from '../m-field.vue';

export default {
    name: 'u-checkbox',
    parentName: 'u-checkboxes',
    mixins: [MChild, MField],
    props: {
        value: { type: Boolean, default: false },
        label: null,
        text: String,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
    },
    data() {
        return { parentVM: undefined, currentValue: this.value };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            ['focus', 'blur', 'update:value'].forEach((prop) => {
                delete listeners[prop];
            });
            return listeners;
        },
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
        currentValue(value, oldValue) {
            this.$emit('change', { value, oldValue });
        },
    },
    mounted() {
        this.autofocus && this.$el.focus();
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        check() {
            if (this.readonly || this.disabled)
                return;
            const oldValue = this.currentValue;
            const value = !this.currentValue;
            if (
                this.parentVM
                && !this.parentVM.canCheck({
                    value,
                    oldValue,
                    label: this.label,
                    itemVM: this,
                })
            )
                return;
            let cancel = false;
            this.$emit('before-check', {
                value,
                oldValue,
                label: this.label,
                preventDefault: () => (cancel = true),
            });
            if (cancel)
                return;
            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('check', { value, oldValue });
            this.parentVM
                && this.parentVM.onCheck({
                    value,
                    oldValue,
                    label: this.label,
                    itemVM: this,
                });
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

.root:focus .box {
    box-shadow: var(--checkbox-box-shadow-focus);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--brand-disabled);
}

.box {
    display: inline-block;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    line-height: calc(var(--checkbox-size) - 2px);
    background: var(--background-color-default);
    border: 1px solid var(--border-color-base);
    border-radius: var(--checkbox-border-radius);
    margin-right: 5px;
    text-align: center;
    font-size: var(--font-size-small);
    transition: all var(--transition-duration-base);
    vertical-align: 1px;
}

.box::before {
    transition: all var(--transition-duration-base);
}

.box[status="false"]::before {
    icon-font: url('../i-icon.vue/assets/check.svg');
    color: transparent;
}

.box[status="true"] {
    background: var(--checkbox-background);
    border-color: var(--checkbox-background);
}
.box[status="true"]::before {
    icon-font: url('../i-icon.vue/assets/check.svg');
    color: var(--checkbox-color);
}

.box[status="null"] {
    background: var(--checkbox-background);
    border-color: var(--checkbox-background);
}
.box[status="null"]::before {
    icon-font: url('i-material-design.vue/assets/filled/horizontal_rule.svg');
    color: var(--checkbox-color);
    font-weight: bold;
}

.box[disabled] {
    border-color: var(--border-color-base);
    background: var(--background-color-base);
}
</style>
