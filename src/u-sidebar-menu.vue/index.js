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
            currentOpen: this.open,
        };
    },
    computed: {
        accordion() {
            return this.$parent.accordion;
        },
    },
    watch: {
        open(open) {
            this.currentOpen = open;
        },
    },
    methods: {
        onClick() {
            if (this.accordion) {
                this.$parent.$children.forEach((item) => {
                    if (item.$options.name === 'u-sidebar-menu' && item !== this)
                        item.currentOpen = false;
                });
            }

            this.currentOpen = !this.currentOpen;
        },
    },
};
