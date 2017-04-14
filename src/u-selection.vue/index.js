import ListView from 'u-list-view.vue';

/**
 * @class Selection
 * @extends ListView
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const Selection = ListView.extend({
    name: 'u-selection',
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
});

export default Selection;
