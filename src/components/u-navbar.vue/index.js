import { UNavbar as ONavbar } from 'proto-ui.vusion';

export const UNavbar = {
    name: 'u-navbar',
    extends: ONavbar,
};

export { UNavbarItem } from './item.vue';
export { UNavbarDivider } from './divider.vue';
export { UNavbarDropdown } from './dropdown.vue';
export { UNavbarMenu, UNavbarMenuItem } from './menu.vue';
export { UNavbarSelect, UNavbarSelectItem } from './select.vue';

export default UNavbar;
