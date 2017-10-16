import RouterItem from 'u-router-item.vue';

export default {
    name: 'u-sidebar-item',
    mixins: [RouterItem],
    computed: {
        active() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui] Cannot find vue router.');

            const current = this.$route;
            const location = this.$router.resolve(this.to).location;

            if (this.exact) {
                if (location.path === current.path) {
                    if (this.$parent.$options.name === 'u-sidebar-menu')
                        this.$parent.currentOpen = true;
                    return true;
                } else
                    return false;
            } else {
                if (current.path.startsWith(location.path)) {
                    if (this.$parent.$options.name === 'u-sidebar-menu')
                        this.$parent.currentOpen = true;
                    return true;
                } else
                    return false;
            }
        },
    },
};
