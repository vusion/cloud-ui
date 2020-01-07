import { UListViewItem } from '../../u-list-view.vue';

export const USelectItem = {
    name: 'u-select-item',
    parentName: 'u-select',
    groupName: 'u-select-group',
    extends: UListViewItem,
    props: {
        flag: { type: String },
        layer: { type: String },
    },
    computed: {
        isFocused() {
            return this.parentVM && this.parentVM.focusedVM === this;
        },
        currentText() {
            return this.$slots.default[0] && this.$slots.default[0].text;
        },
    },
    methods: {
        hover() {
            this.parentVM && (this.parentVM.focusedVM = this);
        },
    },
};

export default USelectItem;
