import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Library from 'library';
Vue.use(Library);

import GlobalLayout from './common/u-global-layout.vue';
import Article from './common/u-article.vue';
import ThemeSelect from './common/u-theme-select.vue';
import ThemeSelectItem from './common/u-theme-select-item.vue';
import './common/atom-one-light.css';

Vue.component(GlobalLayout.name, GlobalLayout);
Vue.component(Article.name, Article);
Vue.component(ThemeSelect.name, ThemeSelect);
Vue.component(ThemeSelectItem.name, ThemeSelectItem);

import routes from './routes';
new Vue({
    router: new VueRouter({
        mode: 'history',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
