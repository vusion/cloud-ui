<template>
    <u-input ref="input" :value="value" :color="color" :placeholder="placeholder"
        :clearable="clearable"
        :readonly="readonly"
        :disabled="disabled"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keydown.prevent.up="$refs.listView && $refs.listView.shift(-1)"
        @keydown.prevent.down="$refs.listView && $refs.listView.shift(+1)">
        <m-popper v-show="currentData && currentData.length" :class="$style.popper" ref="popper" :color="color"
            append-to="reference"
            trigger="manual">
            <u-list-view :class="$style.listview" ref="listView"
                empty-text=""
                :value-field="textField" :value="currentValue" @input="onSelect"
                :data-source="currentDataSource">
            </u-list-view>
        </m-popper>
    </u-input>
</template>

<script>
import MField from '../m-field.vue';
import MDataSource from '../m-data-source.vue';

export default {
    name: 'u-auto-complete',
    directives: { focus },
    mixins: [MField, MDataSource],
    props: {
        value: [String, Number],
        color: String,
        placeholder: String,
        textField: { type: String, default: 'text' },
        clearable: { type: Boolean, default: false },
        autofocus: { type: [Boolean, String], default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },

        // maxlengthMessage: String,
        // prefix: String,
        // suffix: String,
        // search: String,
        // autoSize: {
        //     type: String,
        //     validator: (value) =>
        //         ['horizontal', 'vertical', 'both'].includes(value),
        // },
        placement: { type: String, validator: (value) => /^(top|bottom|left|right)(-start|-end)?$/.test(value) },
    },
    data() {
        return {
            currentValue: this.value,
            // currentDataSource: undefined,
        };
    },
    computed: {
        filtering() {
            return {
                [this.field || this.textField]: {
                    operator: this.matchMethod,
                    value: this.currentValue,
                    caseInsensitive: !this.caseSensitive,
                },
            };
        },
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
    },
    methods: {
        onInput($event) {
            this.currentValue = $event;
            this.$emit('input', $event, this);
            this.$emit('update:value', $event, this);
            this.fastLoad(false, true);
        },
        onSelect($event) {
            this.currentValue = $event;
            this.$refs.popper.close();
            this.$emit('input', $event, this);
            this.$emit('update:value', $event, this);
            this.$refs.input.focus();
        },
        onFocus(e) {
            this.$refs.popper && this.$refs.popper.open();
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            setTimeout(() => {
                this.$refs.popper && this.$refs.popper.close();
                // this.$emit('update:input', this.value);
                this.$emit('blur', e, this);
            }, 200);
        },
    },
};
</script>

<style module>
.popper {
    width: calc(100% + 2px);
    line-height: var(--select-popper-line-height);
}

.listview[class] {
    width: 100%;
    min-width: auto;
    height: auto;
    overflow-y: auto;
    max-height: var(--list-view-height);
}
</style>
