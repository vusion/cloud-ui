import ListViewItem from 'u-list-view-item.vue';

/**
 * @class Pill
 * @extends ListViewItem
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
const Pill = ListViewItem.extend({
    name: 'u-pill',
});

export default Pill;
