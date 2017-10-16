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
            selectedMenu: undefined,
        };
    },
    created() {
        this.$on('reset', () => {
            if (!this.selectedMenu)
                this.currentOpen = false;
        });
        this.$on('select', (item) => this.selectedMenu = item);
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
