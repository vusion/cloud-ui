import Vue from 'vue';

import Base from './src/vi-base.vue';
import Link from './src/vi-link.vue';
import Button from './src/vi-button.vue';
import LinearProgress from 'vi-linear-progress.vue';
import CircularProgress from 'vi-circular-progress.vue';
import Pagination from './src/vi-pagination.vue';
import Sidebar from './src/vi-sidebar.vue';
import SidebarItem from './src/vi-sidebar-item.vue';
import SidebarMenu from './src/vi-sidebar-menu.vue';

const Components = {
    Base,
    Link,
    Button,
    LinearProgress,
    CircularProgress,
    Pagination,
    Sidebar,
    SidebarItem,
    SidebarMenu,
};

window.Vue = Vue;
Object.keys(Components).forEach((key) => Vue.component(Components[key].options.name, Components[key]));

export {
    Base,
    Link,
    Button,
    LinearProgress,
    CircularProgress,
    Pagination,
    Sidebar,
    SidebarItem,
    SidebarMenu,
};
