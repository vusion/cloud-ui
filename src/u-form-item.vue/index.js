import { FormItem as OFormItem } from 'proto-ui.vusion';

export const UFormItem = {
    name: 'u-form-item',
    extends: OFormItem,
    props: {
        description: String,
        hideSlots: { type: Boolean, default: false },
    },
};

export default UFormItem;
