import Tooltip from 'proto-ui.vusion/src/u-tooltip.vue';
export default {
    name: 'u-tooltip',
    mixins: [Tooltip],
    props: {
        size: { type: String, default: 'normal' },
    },
};
