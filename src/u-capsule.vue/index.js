import ListViewItem from 'u-list-view-item.vue';

/**
 * @class Capsule
 * @extends ListViewItem
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
const Capsule = ListViewItem.extend({
    name: 'u-capsule',
});

export default Capsule;
