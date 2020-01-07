import UValidator from '../../u-validator.vue';

export const UFormTableViewRow = {
    name: 'u-form-table-view-row',
    extends: UValidator,
    computed: {
        dynamic() {
            return this.$vnode.context.dynamic;
        },
    },
};

export default UFormTableViewRow;
