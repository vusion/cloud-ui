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
        onToggle($event) {
            this.$emit('toggle', $event);
        },
    },
};
