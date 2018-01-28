export default {
    name: 'u-steps',
    childName: 'u-step',
    props: {
        value: { type: Number, default: 0 },
        router: { type: Boolean, default: false },
    },
    data() {
        return {
            itemVMs: [],
            selectedVM: undefined,
            // currentValue: this.value,
        };
    },
    watch: {
        value(value, oldValue) {
            // this.currentValue = +value;
            this.watchValue(value, oldValue);
            this.$emit('change', { value, oldValue });
        },
        itemVMs() {
            this.watchValue(this.value);
        },
        // currentValue(value, oldValue) {
        //     value = Math.max(0, Math.min(value, this.itemVMs.length));
        //     if (value === oldValue)
        //         return;

        //     this.watchValue(value, oldValue);
        //     this.$emit('change', {
        //         value,
        //         oldValue,
        //     });
        // },
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
        this.$nextTick(() => this.watchValue(this.value));
    },
    methods: {
        watchValue(value) {
            this.selectedVM = this.itemVMs[value];
        },
    },
};
