import Tabs from 'proto-ui.vusion/src/u-tabs.vue';

export default {
    name: 'u-chosen-steps',
    childName: 'u-chosen-step',
    mixins: [Tabs],
    props: {
        readonly: { type: Boolean, default: true },
        value: { type: Number, default: 0 },
        pattern: { type: String, default: 'normal', validator: (value) => ['normal', 'special'].includes(value) },
        size: String,
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(value, oldValue) {
            this.currentValue = +value;
            this.watchValue(value);
            this.$emit('change', { value, oldValue });
        },
        itemVMs() {
            this.watchValue(this.value);
        },
        currentValue(value, oldValue) {
            this.watchValue(value, oldValue);
        },
    },
    computed: {
        maxItem() {
            const itemVM = this.itemVMs.filter((item) => item.currentState[0] === '' && item.currentState[1] === 'checking');
            return itemVM && itemVM[0];
        },
        styleObject() {
            if (this.size === 'auto') {
                const width = this.itemVMs.length ? (1 / this.itemVMs.length) * 100 + '%' : undefined;
                return {
                    width,
                };
            } else
                return {};
        },
    },
    methods: {
        watchValue(value, oldValue) {
            this.selectedVM = this.itemVMs[value];
            if (this.pattern === 'special') {
                if (oldValue && oldValue > value) {
                    const flag = this.itemVMs[oldValue].currentState.includes('checked');
                    flag && this.itemVMs[oldValue].currentState.unshift('checked');
                    !flag && this.itemVMs[oldValue].currentState.unshift('');
                }
                this.itemVMs.forEach((item, index) => {
                    if (index < value)
                        item.currentState.unshift('checked');
                    else if (index === value)
                        item.currentState.unshift('checking');
                });
            }
        },
        select(itemVM, index) {
            if (this.disabled || itemVM.disabled)
                return;

            const oldValue = this.currentValue;
            const value = +index;

            let cancel = false;
            this.$emit('before-select', {
                value,
                oldValue,
                itemVM,
                preventDefault: () => cancel = true,
            });
            if (cancel) {
                this.currentValue = oldValue;
                return;
            }

            this.selectedVM = this.itemVMs[index];
            this.currentValue = value;
            this.$emit('change', {
                value,
                oldValue,
            });
        },
    },
};
