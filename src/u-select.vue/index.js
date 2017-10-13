import ListView from 'u-list-view.vue';

export default {
    name: 'u-select',
    childName: 'u-select-item',
    mixins: [ListView],
    props: {
        value: null,
        data: Array,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        size: String,
    },
    created() {
        this.$on('select', () => {
            this.$refs.popper.toggle(false);
        });
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined)
                this.selectedVM = this.itemVMs[0];
            else
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
        },
        onToggle($event) {
            this.$emit('toggle', $event);
        },
    },
};
