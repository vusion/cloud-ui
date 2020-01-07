import UMenu from '../../u-menu.vue';

export const UNavbarMenu = {
    name: 'u-navbar-menu',
    groupName: 'u-navbar-menu-group',
    childName: 'u-navbar-menu-item',
    extends: UMenu,
};

export { UNavbarMenuItem } from './item.vue';
export { UNavbarMenuGroup } from './group.vue';
export { UNavbarMenuDivider } from './divider.vue';

export default UNavbarMenu;
