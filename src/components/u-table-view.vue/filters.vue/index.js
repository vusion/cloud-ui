import { MComplex } from '../../m-complex.vue';

export const UTableViewFilters = {
    name: 'u-table-view-filters',
    childName: 'u-table-view-filter',
    extends: MComplex,
    props: {
        // @inherit: value: { type: String, default: '' },
        // @inherit: field: { type: String, default: 'text' },
        // @inherit: data: Array,
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: keepOrder: { type: Boolean, default: false },
        // : { type: Boolean, default: false },
    },
    data() {
        return {
            columnVM: undefined,
        };
    },
    created() {
        this.$on('select', () => {
            if (!this.multiple)
                this.close();
        });
    },
    methods: {
        open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
    },
    // created() {
    //     !this.columnVM && this.$contact('u-table-view-column', (columnVM) => {
    //         this.columnVM = columnVM;
    //         columnVM.filterVM = this;
    //     });
    // },
    // destroyed() {
    //     !this.columnVM && this.$contact('u-table-view-column', (columnVM) => {
    //         columnVM.filterVM = undefined;
    //         this.columnVM = undefined;
    //     });
    // },
};

export { UTableViewFilter } from './filter.vue';

export default UTableViewFilters;
