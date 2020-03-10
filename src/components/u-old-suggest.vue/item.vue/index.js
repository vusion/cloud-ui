import ListViewItem from '../u-old-list-view-item.js';

export const UOldSuggestItem = {
    name: 'u-old-suggest-item',
    parentName: 'u-old-suggest',
    extends: ListViewItem,
    props: {
        value: { type: String, default: '' },
    },
    computed: {
        innerText() {
            return this.$slots.default[0].text;
        },
        matched() {
            return this.parentVM && this.parentVM.match(this);
        },
    },
};

export default UOldSuggestItem;
