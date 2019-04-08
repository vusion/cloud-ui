import { UForm as OForm } from 'proto-ui.vusion';

export const UForm = {
    name: 'u-form',
    extends: OForm,
    computed: {
        extraSlots() {
            return this.itemVMs.some((item) => item.$slots.extra);
        },
    },
};

export * from './item.vue';

export default UForm;
