import Base from '../vi-base.vue';
import Vue from 'vue';

Vue.directive('link', {
    inserted(el) {
        el.style.background = 'red';
    },
});

const SidebarMenu = Base.extend({
    name: 'vi-sidebar-menu',
    props: {
        title: String,
        open: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            open_: this.open,
        };
    },
});

export default SidebarMenu;
