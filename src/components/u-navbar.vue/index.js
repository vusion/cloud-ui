import { MSinglex } from '../m-singlex.vue';

export const UNavbar = {
    name: 'u-navbar',
    childName: 'u-navbar-item',
    extends: MSinglex,
    props: {
        router: { type: Boolean, default: true },
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
};

export { UNavbarItem } from './item.vue';
export { UNavbarDivider } from './divider.vue';
export { UNavbarDropdown } from './dropdown.vue';
export { UNavbarMenu, UNavbarMenuItem, UNavbarMenuGroup, UNavbarMenuDivider } from './menu.vue';
export { UNavbarSelect, UNavbarSelectItem, UNavbarSelectGroup, UNavbarSelectDivider } from './select.vue';

export default UNavbar;
