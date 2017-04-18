import Base from 'u-base.vue';
import RouterItem from 'u-base.vue/mixins';

const SidebarItem = Base.extend({
    name: 'u-sidebar-item',
    mixins: [RouterItem],
});

export default SidebarItem;
