import Base from '../vi-base.vue';

const SidebarItem = Base.extend({
    name: 'vi-sidebar-item',
    props: {
        to: [String, Object],
        exact: Boolean,
        append: Boolean,
        replace: Boolean,
    },
    computed: {
        active() {
            if (!this.$route || this.to === undefined)
                return;

            const current = this.$route;
            const route = this.$router.resolve(this.to, current, this.append).route;

            return this.exact ? route.path === current.path : current.path.includes(route.path);
        },
    },
    methods: {
        onClick(e) {
            if (!this.$route || this.to === undefined)
                return;

            const router = this.$router;

            router.push(this.to);

            this.$emit('click', e);
        },
    },
});

export default SidebarItem;
