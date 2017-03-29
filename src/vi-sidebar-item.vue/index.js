import Base from '../vi-base.vue';

const SidebarItem = Base.extend({
    name: 'vi-sidebar-item',
    props: {
        to: [String, Object],
        exact: Boolean,
        append: Boolean,
        replace: Boolean,
    },
    created() {
        const router = this.$router;
        const current = this.$route;

        if (!router || !current)
            return;

        const { location, route, href } = router.resolve(this.to, current, this.append);
    },
});

export default SidebarItem;
