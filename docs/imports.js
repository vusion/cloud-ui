import Vue from 'vue';
import VueI18n from 'vue-i18n';
import mock from '@vusion/mock';
Vue.use(VueI18n);
Vue.use(mock);

import variables from 'themeCSS?variables';
Vue.prototype.$theme = variables;

import './message';
