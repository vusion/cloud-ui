import camelCase from 'lodash/camelCase';
import get from 'lodash/get';
import template from 'lodash/template';

import locale from '../../i18n';

export default function (name) {
    return {
        // 在注册props之前，往vm上挂载一个$tt方法
        beforeCreate() {
            this.$tt = function (key, data) {
                const k = `${camelCase(name)}_${key}`;
                const messages = locale.messages();
                const message = get(messages, k) || get(messages, key);

                return template(message, {
                    interpolate: /\{(.+?)\}/g,
                })(data);
            };
        },
    };
}
