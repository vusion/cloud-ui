import ListView from 'u-list-view.vue';

/**
 * @class Tablets
 * @extends ListView
 * @param {Array}               props.data                      Pass a data list and don't need to loop tags manually
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
export default {
    name: 'u-tablets',
    mixins: [ListView],
    data() {
        return {
            ChildComponent: 'u-tablet',
        };
    },
    /**
     * @method select(item) - Select a item
     * @public
     * @param  {number} item - Item to select
     * @return {void}
     */
    /**
     * @event select - Emit when selecting an item
     * @property {number} selectedItem - The selected item
     */
};
