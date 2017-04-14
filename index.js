import Vue from 'vue';

import Base from './src/u-base.vue';
import Link from './src/u-link.vue';
import Button from './src/u-button.vue';
import LinearProgress from 'u-linear-progress.vue';
import CircularProgress from 'u-circular-progress.vue';
import Pagination from './src/u-pagination.vue';
import Sidebar from './src/u-sidebar.vue';
import SidebarItem from './src/u-sidebar-item.vue';
import SidebarMenu from './src/u-sidebar-menu.vue';
import Tabs from './src/u-tabs.vue';
import Tab from './src/u-tab.vue';
import Selection from './src/u-selection.vue';
import SelectionItem from './src/u-selection-item.vue';

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
    Tabs,
    Tab,
    Selection,
    SelectionItem,
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
    Tabs,
    Tab,
    Selection,
    SelectionItem,
};
