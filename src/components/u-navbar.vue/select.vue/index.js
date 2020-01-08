import { USelect } from '../../u-select.vue';

export const UNavbarSelect = {
    name: 'u-navbar-select',
    groupName: 'u-navbar-select-group',
    childName: 'u-navbar-select-item',
    extends: USelect,
};

export { UNavbarSelectItem } from './item.vue';
export { UNavbarSelectGroup } from './group.vue';
export { UNavbarSelectDivider } from './divider.vue';

export default UNavbarSelect;
