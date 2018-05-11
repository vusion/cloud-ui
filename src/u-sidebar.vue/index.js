import Sidebar from 'proto-ui.vusion/src/u-sidebar.vue';

export default {
    name: 'u-sidebar',
    mixins: [Sidebar],
    props: {
        particular: { type: Boolean, default: false },
    },
};
