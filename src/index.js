import './styles/base.css';
import 'themeCSS';
export * from './components';
export * from './layouts';
export * from './assist';

import * as directives from './directives';
import * as filters from './filters';
import * as utils from './utils';
export { directives, filters, utils };

export { install } from '@vusion/utils';

import Vue from 'vue';
Vue.prototype.$env = Vue.prototype.$env || {};
Vue.prototype.$env.VUE_APP_DESIGNER = String(process.env.VUE_APP_DESIGNER) === 'true';
Vue.prototype.$at2 = function (obj, propertyPath) {
    if (propertyPath === '' && !this.$env.VUE_APP_DESIGNER)
        return obj;
    return this.$at(obj, propertyPath);
};

/**
 * 为了不破坏 $at2
 * 属性取值，目前仅用于select的descriptionField
 * @param {*} obj
 * @param {*} propertyPath
 * @param {*} allowEmpty
 * @returns
 */
Vue.prototype.$at3 = function (obj, propertyPath, allowEmpty = true) {
    if (propertyPath === '' && !this.$env.VUE_APP_DESIGNER) {
        if (allowEmpty) {
            return '';
        }

        return obj;
    }

    return this.$at(obj, propertyPath);
};

function getAsyncPublicPath() {
    const script = document.querySelector('script[src*="cloud-ui.vusion"]');
    if (!script)
        return;

    const src = script.src;
    const publicPath = src.replace(/\/[^/]+$/, '/');
    __webpack_public_path__ = publicPath;
}
getAsyncPublicPath();
