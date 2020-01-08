import { MSinglexItem } from '../../m-singlex.vue';
import { isElementInView } from '../../../utils/style';

export const USidebarItem = {
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    groupName: 'u-sidebar-group',
    extends: MSinglexItem,
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
            if (!active)
                return;

            let groupVM = this.groupVM;
            while (groupVM) {
                groupVM.toggle && groupVM.toggle(true, this.parentVM.particular);
                groupVM = groupVM.parentVM;
            }

            if (!isElementInView(this.$el, this.parentVM.$el, 'vertical'))
                this.$nextTick(() => this.$el.scrollIntoView(false));
        },
    },
};

export default USidebarItem;
