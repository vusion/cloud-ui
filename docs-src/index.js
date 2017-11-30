import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as Library from 'library';
import '../src/base/index.css';

import GlobalLayout from './common/u-global-layout.vue';
import Article from './common/u-article.vue';
import ThemeSelect from './common/u-theme-select.vue';
import ThemeSelectItem from './common/u-theme-select-item.vue';
import Block from './common/u-block.vue';
import './common/atom-one-light.css';

const Components = Object.assign({}, Library, {
    GlobalLayout,
    Article,
    ThemeSelect,
    ThemeSelectItem,
    Block,
});

import { installComponents } from 'vusion-utils';
installComponents(Components, Vue);

import routes from './routes';
new Vue({
    router: new VueRouter({
        base: '/cloud-ui/',
        mode: 'history',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
