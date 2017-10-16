import RouterItem from 'u-router-item.vue';
import Emitter from 'u-emitter.vue';

export default {
    name: 'u-sidebar-item',
    mixins: [RouterItem, Emitter],
    computed: {
        active() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui] Cannot find vue router.');

            const current = this.$route;
            const location = this.$router.resolve(this.to).location;
            this.dispatch('u-sidebar-menu', 'reset');
            if (this.exact) {
                if (location.path === current.path) {
                    if (this.$parent.$options.name === 'u-sidebar-menu')
                        this.$parent.currentOpen = true;
                    this.dispatch('u-sidebar-menu', 'select', this.$parent);
                    return true;
                } else
                    return false;
            } else {
                if (current.path.startsWith(location.path)) {
                    if (this.$parent.$options.name === 'u-sidebar-menu')
                        this.$parent.currentOpen = true;
                    this.dispatch('u-sidebar-menu', 'select', this.$parent);
                    return true;
                } else
                    return false;
            }
        },
    },
};
