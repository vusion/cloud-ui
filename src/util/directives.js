import EventUtil from './event.js';

const clickoutside = {
    bind(el, binding, vnode) {
        const documentHandler = function (e) {
            if (el.contains(e.target))
                return false;

            if (binding.expression)
                binding.value(e);
        };
        el.__vueClickOutside__ = documentHandler;
        EventUtil.addHandler(document, 'click', documentHandler);
    },
    unbind(el, binding) {
        EventUtil.removeHandler(document, 'click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },
};

export default { clickoutside };
