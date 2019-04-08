import { USelectItem as OSelectItem } from 'proto-ui.vusion';

export const USelectItem = {
    name: 'u-select-item',
    extends: OSelectItem,
    props: {
        flag: { type: String },
        layer: { type: String },
    },
};

export default USelectItem;
