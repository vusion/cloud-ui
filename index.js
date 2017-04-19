import Library from './src';

<<<<<<< 54f4209fe229cc3d2475b62cc2ab89663c83fb5a
export default Library;
export * from './src';
=======
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
import Pills from './src/u-pills.vue';
import Pill from './src/u-pill.vue';
import Capsules from './src/u-capsules.vue';
import Capsule from './src/u-capsule.vue';
import Tablets from './src/u-tablets.vue';
import Tablet from './src/u-tablet.vue';

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
    Pills,
    Pill,
    Capsules,
    Capsule,
    Tablets,
    Tablet,
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
    Pills,
    Pill,
    Capsules,
    Capsule,
    Tablets,
    Tablet,
};
>>>>>>> :sparkles: Complete tablets component #2
