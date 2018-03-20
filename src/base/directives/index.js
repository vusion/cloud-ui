import Vue from 'vue';

export * from 'proto-ui.vusion/src/base/directives';

export const clickOutside = {
    bind(el, binding) {
        const documentHandler = function (e) {
            if (el.contains(e.target))
                return false;
            if (binding.expression)
                binding.value(e);
        };
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    unbind(el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },
};
