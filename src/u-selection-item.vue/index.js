import ListViewItem from 'u-list-view-item.vue';

/**
 * @class ListViewItem
 * @extends Base
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
const SelectionItem = ListViewItem.extend({
    name: 'u-selection-item',
});

export default SelectionItem;
