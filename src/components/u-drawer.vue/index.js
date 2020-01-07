import UModal from '../u-modal.vue';

export const UDrawer = {
    name: 'u-drawer',
    extends: UModal,
    props: {
        placement: { type: String, default: 'left' },
        maskClosable: { type: Boolean, default: true },
    },
    data() {
        return {
            drawerVisible: this.visible,
        };
    },
    watch: {
        // @TODO: 为了让两个动画错开的临时解决方案
        currentVisible(currentVisible) {
            this.$nextTick(() => this.drawerVisible = currentVisible);
        },
    },
};

export default UDrawer;
