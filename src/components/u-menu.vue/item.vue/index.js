import { MSinglexItem } from '../../m-singlex.vue';

export const UMenuItem = {
    name: 'u-menu-item',
    parentName: 'u-menu',
    groupName: 'u-menu-group',
    extends: MSinglexItem,
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
    },
    watch: {
        active(active) {
            this.watchActive(active);
        },
    },
    mounted() {
        this.watchActive(this.active);
    },
    methods: {
        watchActive(active) {
            // active && this.groupVM && this.groupVM.toggle(true);
        },
    },
};

export default UMenuItem;
