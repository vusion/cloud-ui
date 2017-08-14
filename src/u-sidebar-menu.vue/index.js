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
    computed: {
        accordion: this.$parent.accordion,
    },
    methods: {
        handleClick() {
            if (this.accordion) {
                this.parent.$children.forEach((item) => {
                    if (item.$options.name === 'u-sidebar-menu')
                        item.open_ = false;
                });
            }

            this.open_ = !this.open_;
        },
    },
};
