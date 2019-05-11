import { USelect as OSelect } from 'proto-ui.vusion';

export const USelect = {
    name: 'u-select',
    extends: OSelect,
    props: {
        ellipsisDirection: { type: String, default: 'ltr' },
    },
};

export { USelectGroup } from './group.vue';
export { USelectItem } from './item.vue';
export { USelectDivider } from './divider.vue';

export default USelect;
