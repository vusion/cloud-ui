import Tabs from 'u-tabs.vue';

/**
 * @class Tabs
 * @extends Base
 * @param {number=0}            props.selectedIndex             Index of selected tab
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
/**
 * @method select(index) - Select a tab
 * @public
 * @param  {number} index - Index of tab to select
 * @return {void}
 */
/**
 * @event select - Emit when selecting a tab
 * @property {number} selectedTab - The selected tab
 * @property {number} selectedIndex - Index of selected tab
 */

export default Tabs;
