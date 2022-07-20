<template>
<div :class="$style.root" :readonly="readonly" :disabled="disabled" :color="currentColor || formItemVM && formItemVM.color"
    :focus="focused" :clearable="clearable && currentValue" :prefix="prefix" :suffix="suffix"
    :show-password="showPassword" :password="password"
    @click.self="!focused && focus()">
    <span :class="$style.baseline">b</span><!-- 用于基线对齐 -->
    <span :class="$style.placeholder" v-show="placeholder">{{ valueEmpty ? placeholder : '' }}</span><!-- 兼容 IE9 -->
    <!-- <span v-if="prefix" :class="$style.prefix" :name="prefix" @click="$emit('click-prefix', $event, this)"><slot name="prefix"></slot></span> -->
    <i-ico v-if="prefix" :name="prefix" :class="$style.prefix" @click="$emit('click-prefix', $event, this)"><slot name="prefix"></slot></i-ico>
    <input ref="input" :class="$style.input" v-bind="$attrs" :type="curType" :value="currentValue"
        v-focus="autofocus" :readonly="readonly" :disabled="disabled"
        @input="onInput" @focus="onFocus" @blur="onBlur" @keypress="onKeypress" @keyup="onKeyup" v-on="listeners"
        @compositionstart="onCompositionStart"
        @compositionend="onCompositionEnd"
        :title="!showTitle || (!valueEmpty && !disabled) ? null : ($attrs.title || placeholder)">
    <slot></slot>
    <span :class="$style.suffix" v-if="password || suffix || clearable">
        <span :class="$style.password" v-if="password" @click.stop="togglePassword"></span>
        <i-ico v-if="suffix" :name="suffix"
            @click="$emit('click-suffix', $event, this)"><slot name="suffix"></slot></i-ico>
        <span :class="$style.clearable" v-if="clearable && !valueEmpty && !readonly && !disabled" @click.stop="clear"></span>
    </span>
</div>
</template>

<script>
import MField from '../m-field.vue';
import { focus } from '../../directives';
import { isIE } from '../../utils/dom';
import IIco from '../i-ico.vue';


export default {
    name: 'u-input',
    component: {
        IIco,
    },
    directives: { focus },
    mixins: [MField],
    props: {
        value: [String, Number],
        color: String,
        placeholder: String,
        clearable: { type: Boolean, default: false },
        autofocus: { type: [Boolean, String], default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        password: { type: Boolean, default: false },
        type: { type: String, default: 'text' },
        maxlengthMessage: String,
        prefix: String,
        suffix: String,
        autoSize: {
            type: String,
            validator: (value) =>
                ['horizontal', 'vertical', 'both'].includes(value),
        },
        showTitle: { type: Boolean, default: false },
        icon: {
            type: String,
        },
    },
    data() {
        return {
            focused: false,
            currentValue: this.value,
            currentColor: this.color,
            compositionInputing: false,
            showPassword: false,
            curType: this.type,
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
        showPasswordBtn() {
            return (
                this.type === 'password'
                && this.password
                && !this.disabled
                && !this.readonly
            );
        },
        valueEmpty() {
            const { currentValue } = this;
            if (this.compositionInputing) {
                return false;
            }
            return currentValue === undefined || currentValue === '' || currentValue === null;
        },
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
        currentValue(value, oldValue) {
            this.autoSize && this.autoResize();
            this.$emit('update', value, this);
            this.$emit('change', { value, oldValue }, this);
        },
        color(color) {
            this.currentColor = color;
        },
        type(type) {
            this.curType = type;
        },
    },
    mounted() {
        this.$emit('update', this.value, this);
        this.autoSize && this.autoResize();
        // 在ie11，刷新页面会保留输入框输入的值，这里强制同步
        if (isIE()) {
            clearInterval(this.inputTimer);
            this.inputTimer = setTimeout(() => {
                if (this.$refs.input && this.$refs.input.value !== this.currentValue) {
                    this.$refs.input.value = this.valueEmpty ? '' : this.currentValue;
                }
            });
        }
    },
    methods: {
        onKeypress(e) {
            const inputEl = e.target;
            if (
                this.formItemVM
                && this.maxlengthMessage
                && inputEl.value.length === inputEl.maxLength
            ) {
                this.formItemVM.color = 'error';
                this.formItemVM.currentMessage = this.maxlengthMessage;
            }
        },
        onKeyup(e) {
            this.$emit('keyup', e, this);
        },
        onInput(e) {
            if (this.autoSize)
                this.autoResize();
            if (!this.compositionInputing) {
                const $event = {
                    oldValue: this.currentValue,
                    value: e.target.value,
                };
                if (this.$emitPrevent('before-input', $event, this))
                    return;
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
            this.$emit('blur:value', this.currentValue);
        },
        onCompositionStart(e) {
            this.compositionInputing = true;
            this.$emit('compositionstart', e);
        },
        onCompositionEnd(e) {
            // 中文输入的时候，会先触发 onInput 事件，再触发此事件，导致不能捕捉到中文输入
            // 因此需要特殊处理，此时 compositionInputing 值为 true
            this.compositionInputing = false;
            const $event = {
                oldValue: this.currentValue,
                value: e.target.value,
            };
            if (this.$emitPrevent('before-input', $event, this))
                return;
            this.currentValue = $event.value;
            this.$emit('input', $event.value, this);
            this.$emit('update:value', $event.value, this);
            this.$emit('compositionend', e);
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
        clear() {
            if (this.readonly || this.disabled)
                return;
            const $event = { oldValue: this.currentValue, value: '' };
            if (this.$emitPrevent('before-clear', $event, this))
                return;
            if (this.$emitPrevent('before-input', $event, this))
                return;
            this.currentValue = $event.value;
            this.$emit('input', $event.value, this);
            this.$emit('update:value', $event.value, this);
            this.focus();
            this.$emit('clear', $event, this);
        },
        togglePassword() {
            if (this.readonly || this.disabled)
                return;
            const showPassword = this.curType === 'text';
            this.showPassword = !showPassword;
            this.curType = showPassword ? 'password' : 'text';
        },
        autoResize() {
            const inputEl = this.$refs.input;
            if (this.autoSize === 'both' || this.autoSize === 'horizontal') {
                inputEl.style.width = '3px';
                this.$el.style.width
                    = inputEl.scrollWidth
                        + (this.$el.offsetWidth - this.$el.clientWidth)
                        + 'px';
                inputEl.style.width = '';
            }
            if (this.autoSize === 'both' || this.autoSize === 'vertical') {
                inputEl.style.height = '3px';
                this.$el.style.height
                    = inputEl.scrollHeight
                        + (this.$el.offsetHeight - this.$el.clientHeight)
                        + 'px';
                inputEl.style.height = '';
            }
        },
        updateCurrentValue(value) {
            this.currentValue = value;
        },
    },
};
</script>

<style module src="./index.css"></style>
