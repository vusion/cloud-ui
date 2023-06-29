<template>
    <div :class="$style.root" :focus="focused" @click.stop="onClick">
        <u-input
            height="full"
            :class="$style.input"
            type="text"
            :value="leftValue"
            ref="leftInput"
            :prefix="preIcon"
            :autofocus="autofocus"
            :readonly="readonly"
            :disabled="disabled"
            :placeholder="placeholder"
            :color="color"
            @focus="onFocus"
            @blur="onBlur"
            @update:value="onUpdateLeftValue"
            @blur:value="onBlurLeftValue">
            <template #prefix>
                <i-ico v-if="preIcon" :name="preIcon" :class="[$style.preIcon]" notext slot="prefix"></i-ico>
            </template>
        </u-input>
        <u-input
            width="full"
            height="full"
            :class="$style.input"
            type="text"
            :value="rightValue"
            ref="rightInput"
            prefix
            :suffix="suffixIcon"
            :autofocus="autofocus"
            :readonly="readonly"
            :disabled="disabled"
            :placeholder="placeholder"
            :clearable="clearable"
            :color="color"
            @focus="onFocus"
            @blur="onBlur"
            @clear="onClear"
            @update:value="onUpdateRightValue"
            @blur:value="onBlurRightValue">
            <template #prefix>
                <span :class="$style.toIcon" />
            </template>
            <template #suffix>
                <i-ico v-if="suffixIcon" :name="suffixIcon" :class="[$style.suffixIcon]" notext></i-ico>
            </template>
        </u-input>
    </div>
</template>

<script>
export default {
    name: 'u-range-input',
    props: {
        leftValue: { type: String },
        rightValue: { type: String },
        preIcon: {
            type: String,
            default: 'calendar',
        },
        suffixIcon: {
            type: String,
        },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default() {
                return this.$t('selectDateText');
            },
        },
        clearable: { type: Boolean, default: false },
        color: { type: String },
    },
    data() {
        return {
            focused: false,
        }
    },
    methods: {
        onClick(event) {
            this.$emit('click', event)
        },
        onUpdateLeftValue(value) {
            this.$emit('update:value', {
                leftValue: value,
                rightValue: this.rightValue
            })
        },
        onUpdateRightValue(value) {
            this.$emit('update:value', {
                leftValue: this.leftValue,
                rightValue: value
            })
        },
        onFocus(e) {
            this.focused = true;
            this.$emit('focus', e)
        },
        onBlur(e) {
            this.focused = false;
            this.$emit('blur', e)
        },
        onBlurLeftValue(value) {
            this.$emit('blur:value', { leftValue: value, rightValue: this.rightValue })
        },
        onBlurRightValue(value) {
            this.$emit('blur:value', { leftValue: this.leftValue, rightValue: value })
        },
        onClear() {
            this.$nextTick(() => {
                // 右边被清除的时候，左边也要清除
                this.$refs.leftInput.clear()
            })
        },
        updateCurrentValue({ leftValue, rightValue }) {
            if (leftValue) {
                this.$refs.leftInput.updateCurrentValue(leftValue)
            }
            if (rightValue) {
                this.$refs.rightInput.updateCurrentValue(rightValue)
            }
        }
    }
}
</script>
<style module>
.root {
    display: flex;
}

.root[focus] {
    border-color: var(--input-border-color-focus);
    box-shadow: var(--input-box-shadow-focus);
}

.input {
    border: none!important;
    box-shadow: none!important;
}

.input input:focus {
    outline: none!important;
}

.preIcon {
    left: 12px;
    color: var(--datepicker-input-pre-icon-color);
}

.toIcon::before {
    icon-font: url('./assets/to.svg');
    color: var(--datepicker-input-pre-icon-color);
    font-size: 16px;
}

.suffixIcon {
    right: 12px;
    color: var(--datepicker-input-after-icon-color);
}
</style>
