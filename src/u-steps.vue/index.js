import Tabs from 'proto-ui.vusion/src/u-tabs.vue';

export default {
    name: 'u-steps',
    childName: 'u-step',
    mixins: [Tabs],
    props: {
        value: { type: Number, default: 0 }, // 默认选择下标
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(value) {
            value = +value;
            if (typeof (value) !== 'number')
                throw new TypeError(value + ' is not a number!');

            this.currentValue = value;
        },
        currentValue(newValue, oldValue) {
            if (!this.itemVMs)
                return;
            if (this.cancelChagne) {
                this.cancelChagne = false;
                return;
            }

            if (newValue < 0)
                this.currentValue = 0;
            else if (newValue >= this.itemVMs.length)
                this.currentValue = this.itemVMs.length - 1;

            // 如果是hiden元素则调整到非hidden
            while (this.currentValue >= 0 && this.currentValue < this.itemVMs.length && this.itemVMs[this.currentValue].hidden)
                this.currentValue = newValue > oldValue ? this.currentValue + 1 : this.currentValue - 1;

            if (this.currentValue !== newValue) { // currentValue被修改
                this.oldValue = oldValue;
                this.resetCurrentValue = true;
                return;
            }

            oldValue = this.resetCurrentValue ? this.oldValue : oldValue;

            if (this.currentValue !== this.oldValue) {
                let cancel = false;
                this.$emit('before-change', {
                    value: this.currentValue,
                    oldValue,
                    preventDefault: () => cancel = true,
                });
                if (cancel) { // 取消改变，修改currentValue 和 value值
                    this.cancelChagne = true;
                    this.$emit('update:value', oldValue);
                    return;
                }

                this.$emit('change', {
                    value: this.currentValue,
                    oldValue,
                });
            }

            this.resetCurrentValue = false;
            this.$emit('update:value', newValue);
        },
    },
    methods: {
        // tabs value变化调用
        watchValue() {
            this.selectedVM = this.itemVMs[this.value];
        },
    },
};
