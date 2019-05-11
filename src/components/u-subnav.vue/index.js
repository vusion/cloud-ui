import { UNavbar } from '../u-navbar.vue';

export const USubnav = {
    name: 'u-subnav',
    childName: 'u-subnav-item',
    extends: UNavbar,
};

export { USubnavItem } from './item.vue';
export { USubnavDivider } from './divider.vue';

export default USubnav;
