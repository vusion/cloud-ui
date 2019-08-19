import { Form as OForm } from 'proto-ui.vusion';

export const UForm = {
    name: 'u-form',
    extends: OForm,
    computed: {
        extraSlots() {
            return this.validatorVMs.some((itemVM) => itemVM.$slots.extra);
        },
    },
};

export default UForm;
