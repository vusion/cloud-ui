import Emitter from 'u-emitter.vue';

export default {
    name: 'u-sidebar-menu',
    parentName: 'u-sidebar',
    mixins: [Emitter],
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
            parentVM: undefined,
        };
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-menu-vm', this);
        this.$on('select', (item) => {
            this.parentVM.menuVMs.forEach((itemMenu) => {
                if (itemMenu.$options.name === 'u-sidebar-menu')
                    itemMenu.currentOpen = false;
            });
            this.currentOpen = true;
        });
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-menu-vm', this);
    },
    computed: {
        accordion() {
            return this.parentVM.accordion;
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
                this.parentVM.menuVMs.forEach((item) => {
                    if (item.$options.name === 'u-sidebar-menu' && item !== this)
                        item.currentOpen = false;
                });
            }

            this.currentOpen = !this.currentOpen;
        },
    },
};
