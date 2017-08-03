export default {
    name: 'u-sidebar-menu',
    props: {
        title: String,
        open: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            open_: this.open,
        };
    },
};
