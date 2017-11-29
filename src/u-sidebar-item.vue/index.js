import RouterItem from 'proto-ui.vusion/src/u-router-item.vue';
import Emitter from 'proto-ui.vusion/src/u-emitter.vue';

export default {
    name: 'u-sidebar-item',
    mixins: [RouterItem, Emitter],
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                if (!this.to || this.$router)
                    return;

                const location = this.$router.resolve(this.to).location;
                const flag = this.exact ? location.path === to.path : to.path.startsWith(location.path);
                if (flag)
                    this.dispatch('u-sidebar-menu', 'select', this.$parent);
            },
        },
    },
};
