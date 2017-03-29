import Base from '../vi-base.vue';

const SidebarItem = Base.extend({
    name: 'vi-sidebar-item',
    props: {
        href: String,
    },
});

export default SidebarItem;
