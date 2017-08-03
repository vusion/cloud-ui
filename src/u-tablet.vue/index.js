import ListViewItem from 'u-list-view-item.vue';

/**
 * @class Tablet
 * @extends ListViewItem
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
export default {
    mixins: [ListViewItem],
    name: 'u-tablet',
};
