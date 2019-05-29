import Vue from 'vue';
import VueRouter from 'vue-router';
import CodeExamplePlugin from '@vusion/doc-loader/views/CodeExamplePlugin';
Vue.use(VueRouter);
Vue.use(CodeExamplePlugin);

import * as Library from 'library';
import * as directives from '../src/base/directives';

import GlobalLayout from './common/u-global-layout.vue';
import Article from './common/u-article.vue';
import ThemeSelect from './common/u-theme-select.vue';
import ThemeSelectItem from './common/u-theme-select-item.vue';
// import SidebarGroup from './common/u-sidebar-group.vue';
// import Sidebar from './common/u-sidebar.vue';
// import SidebarItem from './common/u-sidebar-item.vue';
import OverviewItem from './common/u-overview-item.vue';
import Table2 from './common/u-table.vue';
import './common/atom-one-light.css';
import Example from './common/u-example.vue';
import XAceEditor from '../packages/x-ace-editor.vue';

const requires = require.context('@vusion/doc-loader/components/', true, /\.vue$/);
requires.keys().forEach((key) => {
    if (key.indexOf('.vue') !== key.lastIndexOf('.vue'))
        return;
    const name = requires(key).default.name || key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    Vue.component(name, requires(key).default);
});

const Components = Object.assign({}, Library, {
    directives,
    GlobalLayout,
    Article,
    ThemeSelect,
    ThemeSelectItem,
    // SidebarGroup,
    // Sidebar,
    // SidebarItem,
    OverviewItem,
    Table2,
    Example,
    XAceEditor,
});

import { install } from 'vusion-utils';
install(Components, Vue);

import '../src/base/index.css';
import './common/base.css';

Vue.prototype.$docs = '';

import routes from './routes';
new Vue({
    router: new VueRouter({
        base: '/cloud-ui@0.3.x/',
        mode: history.pushState ? 'history' : 'hash',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
