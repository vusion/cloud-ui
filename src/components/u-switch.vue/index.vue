<template>
<label :class="$style.root" :checked="currentValue" :disabled="disabled" @click="toggle()"
    tabindex="0" @keydown.space.prevent @keyup.space.prevent="toggle()"
    @focus="onFocus" @blur="onBlur" v-on="listeners">
    <span :class="$style.button"></span>
    <span :class="$style.text"><slot></slot></span>
</label>
</template>

<script>
import MField from '../m-field.vue';

export default {
    name: 'u-switch',
    mixins: [MField],
    props: {
        value: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return { currentValue: this.value };
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
            this.$emit('change', { value, oldValue }, this);
        },
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            this.$emit('blur', e, this);
        },
        toggle(value) {
            // Check if enabled
            if (this.readonly || this.disabled)
                return; // Method overloading
            if (value === undefined)
                value = !this.currentValue; // Prevent replication
            const oldValue = this.currentValue;
            if (value === oldValue)
                return; // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-toggle', { value, oldValue }, this))
                return; // Assign and sync `value`
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this); // Emit `after-` events
            if (value)
                this.$emit('on', undefined, this);
            else
                this.$emit('off', undefined, this);
            this.$emit('toggle', { value, oldValue }, this);
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    line-height: var(--switch-height);
    height: var(--switch-height);
    vertical-align: middle;
    user-select: none;
    cursor: var(--cursor-pointer);
    width: var(--switch-width);
    border-radius: 100px;
    background: var(--switch-background);
    color: var(--switch-color);
    transition: var(--switch-transition);
}

.root:focus {
    outline: var(--focus-outline);
}

.button {
    position: absolute;
    left: var(--switch-button-space);
    top: calc((var(--switch-height) - var(--switch-button-size)) / 2);
    border-radius: var(--switch-button-radius);
    width: var(--switch-button-size);
    height: var(--switch-button-size);
    background: var(--switch-button-background);
    transition: var(--switch-button-transition);
}

.text {
    display: block;
    text-align: right;
    margin: var(--switch-text-margin);
}

.root[checked] {
    background: var(--switch-background-checked);
}

.root[checked] .button {
    left: calc(var(--switch-width) - var(--switch-button-size) - var(--switch-button-space));
}

.root[checked] .text {
    text-align: left;
}

.root[width="wide"] {
    width: var(--switch-width-wide);
}

.root[width="wide"][checked] .button {
    left: calc(var(--switch-width-wide) - var(--switch-button-size) - var(--switch-button-space));
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--switch-background-disabled);
}

.root[with-text] {
    width: 54px;
}

.root[with-text][checked] .button {
    left: calc(54px - var(--switch-button-size) - 2px);
}

.root[with-text] .text::before {
    content: 'OFF';
}

.root[with-text][checked] .text::before {
    content: 'ON';
}
</style>
