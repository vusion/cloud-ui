import { USelect as OSelect } from 'proto-ui.vusion';

export const USelect = {
    name: 'u-select',
    extends: OSelect,
    props: {
        ellipsisDirection: { type: String, default: 'ltr' },
    },
};

export * from './group.vue';
export * from './item.vue';
export * from './divider.vue';

export default USelect;
