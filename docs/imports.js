import Vue from 'vue';
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);
import mock from '@vusion/mock';
Vue.use(mock);

import variables from 'themeCSS?variables';
Vue.prototype.$theme = variables;

import './message';
