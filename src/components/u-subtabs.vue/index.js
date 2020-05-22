import { UTabs } from '../u-tabs.vue';

export const USubtabs = {
    name: 'u-subtabs',
    childName: 'u-subtab',
    extends: UTabs,
    props: {
        appear: { type: String, default: 'round' },
        size: { type: String, default: 'small' },
    }
};

export { USubtab } from './subtab.vue';

export default USubtabs;
