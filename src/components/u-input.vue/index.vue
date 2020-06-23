<template>
<div :class="$style.root" :readonly="readonly" :disabled="disabled" :color="currentColor || this.formItemVM && this.formItemVM.color"
    :focus="focused" :clearable="clearable && currentValue" :prefix="prefix" :suffix="suffix" :search="search"
    @click.self="!focused && focus()">
    <span :class="$style.baseline">b</span><!-- 用于基线对齐 -->
    <span :class="$style.placeholder">{{ currentValue ? '' : placeholder }}</span><!-- 兼容 IE9 -->
    <span v-if="prefix" :class="$style.prefix" :name="prefix"><slot name="prefix"></slot></span>
    <input ref="input" :class="$style.input" v-bind="$attrs" :value="currentValue"
        :placeholder="placeholder" v-focus="autofocus" :readonly="readonly" :disabled="disabled"
        @input="onInput" @focus="onFocus" @blur="onBlur" @keypress="onKeypress" @keyup="onKeyup" v-on="listeners"
        @compositionstart="compositionInputing = true"
        @compositionend="onCompositionEnd"
        :title="currentValue && !disabled ? '' : ($attrs.title || placeholder)">
    <slot></slot>
    <span v-if="suffix" v-show="!clearable || !currentValue" :class="$style.suffix" :name="suffix"><slot name="suffix"></slot></span>
    <span :class="$style.clearable" v-if="clearable && currentValue" @click.stop="clear"></span>
    <span :class="$style.search" v-if="search" v-show="!clearable || !currentValue || search === 'left'" :alignment="search"></span>
</div>
</template>

<script>
import MField from '../m-field.vue';
import { focus } from '../../directives';

export default {
    name: 'u-input',
    mixins: [MField],
    directives: { focus },
    props: {
        value: [String, Number],
        color: String,
        placeholder: String,
        clearable: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        maxlengthMessage: String,
        prefix: String,
        suffix: String,
        search: String,
        autoSize: {
            type: String,
            validator: (value) =>
                ['horizontal', 'vertical', 'both'].includes(value),
        },
    },
    data() {
        return {
            focused: false,
            currentValue: this.value,
            currentColor: this.color,
            compositionInputing: false,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            [
                'input',
                'change',
                'focus',
                'blur',
                'update:value',
                'keyup',
            ].forEach((prop) => {
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
            this.autoSize && this.autoResize();
            this.$emit('change', { value, oldValue }, this);
        },
        color(color) {
            this.currentColor = color;
        },
    },
    mounted() {
        this.autoSize && this.autoResize();
    },
    methods: {
        onKeypress(e) {
            const inputEl = e.target;
            if (
                this.formItemVM &&
                this.maxlengthMessage &&
                inputEl.value.length === inputEl.maxLength
            ) {
                this.formItemVM.color = 'error';
                this.formItemVM.currentMessage = this.maxlengthMessage;
            }
        },
        onKeyup(e) {
            this.$emit('keyup', e, this);
        },
        onInput(e) {
            if (this.autoSize) this.autoResize();
            if (!this.compositionInputing) {
                const $event = {
                    oldValue: this.currentValue,
                    value: e.target.value,
                };
                if (this.$emitPrevent('before-input', $event, this)) return;
                if (this.formItemVM && this.maxlengthMessage) {
                    this.formItemVM.color = '';
                    this.formItemVM.currentMessage = '';
                }
                this.currentValue = $event.value;
                this.$emit('input', $event.value, this);
                this.$emit('update:value', $event.value, this);
            }
        },
        onFocus(e) {
            this.focused = true;
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            this.focused = false;
            this.$emit('blur', e, this);
        },
        onCompositionEnd(e) {
            // 中文输入的时候，会先触发 onInput 事件，再触发此事件，导致不能捕捉到中文输入
            // 因此需要特殊处理，此时 compositionInputing 值为 true
            this.compositionInputing = false;
            const $event = {
                oldValue: this.currentValue,
                value: e.target.value,
            };
            if (this.$emitPrevent('before-input', $event, this)) return;
            this.currentValue = $event.value;
            this.$emit('input', $event.value, this);
            this.$emit('update:value', $event.value, this);
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
        clear() {
            if (this.readonly || this.disabled) return;
            const $event = { oldValue: this.currentValue, value: '' };
            if (this.$emitPrevent('before-clear', $event, this)) return;
            if (this.$emitPrevent('before-input', $event, this)) return;
            this.currentValue = $event.value;
            this.$emit('input', $event.value, this);
            this.$emit('update:value', $event.value, this);
            this.focus();
            this.$emit('clear', $event, this);
        },
        autoResize() {
            const inputEl = this.$refs.input;
            if (this.autoSize === 'both' || this.autoSize === 'horizontal') {
                inputEl.style.width = '3px';
                this.$el.style.width =
                    inputEl.scrollWidth +
                    (this.$el.offsetWidth - this.$el.clientWidth) +
                    'px';
                inputEl.style.width = '';
            }
            if (this.autoSize === 'both' || this.autoSize === 'vertical') {
                inputEl.style.height = '3px';
                this.$el.style.height =
                    inputEl.scrollHeight +
                    (this.$el.offsetHeight - this.$el.clientHeight) +
                    'px';
                inputEl.style.height = '';
            }
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    max-width: 100%; /* 防止表格等小的地方超出区域 */
    width: var(--input-width);
    height: var(--input-height);
    padding: 0 var(--input-padding-x);
    line-height: calc(var(--input-height) - var(--input-border-width) * 2);
    background: var(--input-background);
    border: var(--input-border-width) solid var(--input-border-color);
    border-radius: var(--input-border-radius);
    cursor: text;
    color: var(--input-color);
    transition: border-color var(--transition-duration-base);
}

.input {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: inherit;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: inherit;
    font: inherit;
    border-radius: inherit;
    line-height: inherit;
    text-align: inherit;
    cursor: inherit;
}

.baseline {
    visibility: hidden;
}

.placeholder, .input::placeholder {
    /* Removes placeholder transparency in Firefox. */
    opacity: 1;
    font-size: inherit;
    color: var(--input-placeholder-color);
}

.placeholder { /* for IE9 */
    display: none;
    display: block\9; /* stylelint-disable-line declaration-block-no-duplicate-properties */
    position: absolute;
    left: 0;
    top: 0;
    padding: inherit;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.clearable::before {
    display: block;
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    line-height: 1;
    height: 1em;
    margin: auto;
    icon-font: url('../i-icon.vue/assets/close-solid.svg');
    cursor: var(--cursor-pointer);
    color: var(--input-clearable-color);
}

.input:focus {
    outline: var(--focus-outline);
}

.root[focus] {
    border-color: var(--input-border-color-focus);
}

.root[color="default"] { /* By default */ }

.root[color="error"] {
    border-color: var(--input-border-color-error);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--input-background-disabled);
    color: var(--color-light);
}

.root[size="normal"] { /* By default */ }

.root[display="inline"] { /* By default */ }

.root[display="block"] {
    display: block;
    width: auto;
}

.root[search="left"] .input {
    padding-left: 30px;
}

.root[clearable] .input, .root[search="right"] .input {
    padding-right: 30px;
}

.prefix, .suffix {
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
}

.prefix {
    left: 8px;
}

.suffix {
    right: 8px;
}

.root[prefix] .input {
    padding-left: 30px;
}

.root[clearable] .input, .root[suffix] .input {
    padding-right: 30px;
}

.prefix[name="search"]::before, .suffix[name="search"]::before {
    icon-font: url("../i-icon.vue/icons/search.svg");
    font-size: 16px;
    color: #a7afbb;
}

/* @deprecated */
.search {
    display: block;
    position: absolute;
    right: 8px;
    top: 0;
}

/* @deprecated */
.search::before {
    icon-font: url("../i-icon.vue/icons/search.svg");
    font-size: 16px;
    color: #a7afbb;
}

/* @deprecated */
.search[alignment="left"] {
    right: auto;
    left: 8px;
    top: 0;
}

.root[size$="mini"] { width: var(--input-width-mini); padding: 0 var(--input-padding-x-mini); }
.root[size^="mini"] { height: var(--input-height-mini); line-height: calc(var(--input-height-mini) - var(--input-border-width) * 2); }

.root[size$="small"] { width: var(--input-width-small); padding: 0 var(--input-padding-x-small); }
.root[size^="small"] { height: var(--input-height-small); line-height: calc(var(--input-height-small) - var(--input-border-width) * 2); }

.root[size$="normal"] { width: var(--input-width); padding: 0 var(--input-padding-x); }
.root[size^="normal"] { height: var(--input-height); line-height: calc(var(--input-height) - var(--input-border-width) * 2); }

.root[size$="medium"] { width: var(--input-width-medium); padding: 0 var(--input-padding-x-medium); }
.root[size^="medium"] { height: var(--input-height-medium); line-height: calc(var(--input-height-medium) - var(--input-border-width) * 2); }

.root[size$="large"] { width: var(--input-width-large); padding: 0 var(--input-padding-x-large); }
.root[size^="large"] { height: var(--input-height-large); line-height: calc(var(--input-height-large) - var(--input-border-width) * 2); }

.root[size$="huge"] { width: var(--input-width-huge); padding: 0 var(--input-padding-x-huge); }
.root[size^="huge"] { height: var(--input-height-huge); line-height: calc(var(--input-height-huge) - var(--input-border-width) * 2); }

.root[size$="full"] { width: 100%; padding: 0 var(--input-padding-x-full); }
.root[size^="full"] { height: 100%; }
</style>
