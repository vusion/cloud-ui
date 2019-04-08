import { UNavbar } from '../u-navbar.vue';

export const USubnav = {
    name: 'u-subnav',
    childName: 'u-subnav-item',
    extends: UNavbar,
};

export * from './item.vue';
export * from './divider.vue';

export default USubnav;
