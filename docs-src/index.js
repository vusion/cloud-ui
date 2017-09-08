import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as Library from 'library';
import GlobalLayout from './common/u-global-layout.vue';
import Article from './common/u-article.vue';
import ThemeSelect from './common/u-theme-select.vue';
import ThemeSelectItem from './common/u-theme-select-item.vue';
import './common/atom-one-light.css';

const Components = Object.assign({}, Library, {
    GlobalLayout,
    Article,
    ThemeSelect,
    ThemeSelectItem,
});
delete Components.default;

Object.keys(Components).forEach((key) => Components[key].name && Vue.component(Components[key].name, Components[key]));

import routes from './routes';
new Vue({
    router: new VueRouter({
        base: window.base,
        mode: 'history',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
