<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import { MComplex } from '../m-complex.vue';

export default {
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
</script>

<style module>
.root {
    position: absolute;
    line-height: var(--table-view-filter-line-height);
    /* max-height: var(--table-view-filter-max-height); */
    /* overflow: auto; */
    background: var(--table-view-filter-background);
    border: 1px solid var(--border-color-base);
    z-index: var(--z-index-popper);
    max-width: 300px;
}
.wrap {
    display: inline-block;
    min-width: 100%;
    max-height: var(--table-view-filter-max-height);
}
.footer {
    padding: 0 12px;
    height: 36px;
    line-height: 36px;
    border-top: 1px solid var(--table-view-filter-border-color);
}
</style>
