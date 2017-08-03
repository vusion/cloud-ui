import ListViewItem from 'u-list-view-item.vue';

/**
 * @class Capsule
 * @extends ListViewItem
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
export default {
    name: 'u-capsule',
    mixins: [ListViewItem],
};
