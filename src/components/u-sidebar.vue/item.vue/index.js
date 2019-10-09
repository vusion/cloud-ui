import { USidebarItem as OSidebarItem } from 'proto-ui.vusion';
import { checkIntoView } from '../../../utils/style';

export const USidebarItem = {
    name: 'u-sidebar-item',
    extends: OSidebarItem,
    methods: {
        watchActive(active) {
            if (active) {
                this.groupVM && this.groupVM.toggle(true, this.parentVM.particular);
                if (!checkIntoView(this.$el, this.parentVM.$el)) {
                    this.$nextTick(() => {
                        this.$el.scrollIntoView(false);
                    });
                }
            }
        },
    },
};

export default USidebarItem;
