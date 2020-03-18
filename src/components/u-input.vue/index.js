import MField from '../m-field.vue';
import { focus } from '../../directives';

export const UInput = {
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
        autoSize: { type: String, validator: (value) => ['horizontal', 'vertical', 'both'].includes(value) },
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
            ['input', 'change', 'focus', 'blur', 'update:value'].forEach((prop) => {
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
            if (this.formItemVM && this.maxlengthMessage && inputEl.value.length === inputEl.maxLength) {
                this.formItemVM.color = 'error';
                this.formItemVM.currentMessage = this.maxlengthMessage;
            }
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

            const $event = {
                oldValue: this.currentValue,
                value: '',
            };

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
        autoResize() {
            const inputEl = this.$refs.input;
            if (this.autoSize === 'both' || this.autoSize === 'horizontal') {
                inputEl.style.width = '3px';
                this.$el.style.width = inputEl.scrollWidth + (this.$el.offsetWidth - this.$el.clientWidth) + 'px';
                inputEl.style.width = '';
            }
            if (this.autoSize === 'both' || this.autoSize === 'vertical') {
                inputEl.style.height = '3px';
                this.$el.style.height = inputEl.scrollHeight + (this.$el.offsetHeight - this.$el.clientHeight) + 'px';
                inputEl.style.height = '';
            }
        },
    },
};

export default UInput;
