import MField from '../m-field.vue';

export const USwitch = {
    name: 'u-switch',
    mixins: [MField],
    props: {
        value: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
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
                return;

            // Method overloading
            if (value === undefined)
                value = !this.currentValue;

            // Prevent replication
            const oldValue = this.currentValue;
            if (value === oldValue)
                return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-toggle', { value, oldValue }, this))
                return;

            // Assign and sync `value`
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);

            // Emit `after-` events
            if (value)
                this.$emit('on', undefined, this);
            else
                this.$emit('off', undefined, this);
            this.$emit('toggle', { value, oldValue }, this);
        },
    },
};

export default USwitch;
