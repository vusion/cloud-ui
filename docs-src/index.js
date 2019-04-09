import Vue from 'vue';
import VueRouter from 'vue-router';
import CodeExamplePlugin from '@vusion/doc-loader/views/CodeExamplePlugin';
Vue.use(VueRouter);
Vue.use(CodeExamplePlugin);

import '../src/base/index.css';

const requires = require.context('@vusion/doc-loader/components/', true, /\.vue$/);
requires.keys().forEach((key) => {
    if (key.indexOf('.vue') !== key.lastIndexOf('.vue'))
        return;
    const name = requires(key).default.name || key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    Vue.component(name, requires(key).default);
});

import { install } from 'vusion-utils';

import * as Library from 'library';
import UGlobalLayout from './common/u-global-layout.vue';
import UArticle from './common/u-article.vue';
import UThemeSelect from './common/u-theme-select.vue';
import UThemeSelectItem from './common/u-theme-select-item.vue';
import UOverviewItem from './common/u-overview-item.vue';
import './common/atom-one-light.css';
import UExample from './common/u-example.vue';
import XAceEditor from '../packages/x-ace-editor.vue';

install(Vue, Library);
install(Vue, {
    UGlobalLayout,
    UArticle,
    UThemeSelect,
    UThemeSelectItem,
    UOverviewItem,
    UExample,
    XAceEditor,
});

Vue.prototype.$docs = '';
Vue.prototype.NODE_ENV = process.env.NODE_ENV;

import routes from './routes';
new Vue({
    router: new VueRouter({
        base: '/cloud-ui/',
        mode: history.pushState ? 'history' : 'hash',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
