import Vue from 'vue';

import enUS from './lang/en-US';
import zhCN from './lang/zh-CN';
import ja from './lang/ja';

const defaultMessages = {
    'zh-CN': zhCN,
    'en-US': enUS,
    ja,
};

const proto = Vue.prototype;
const { defineReactive } = Vue.util;

defineReactive(proto, '$CloudUILang', 'zh-CN');
defineReactive(proto, '$CloudUIMessages', defaultMessages);

export default {
    messages() {
        return proto.$CloudUIMessages[proto.$CloudUILang];
    },

    use(lang, messages) {
        proto.$CloudUILang = lang;
        this.add({ [lang]: messages });
    },

    add(messages = {}) {
        Object.assign(proto.$CloudUIMessages, messages);
    },
};
