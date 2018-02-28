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

/**
 * 给任意元素添加`<u-tooltip>`工具提示效果
 * @value 需要绑定的内容

 */
export const tooltip = {
    bind(el, binding) {
        if (!el.dataset)
            el.dataset = {};
        el.dataset.tooltip = binding.value;

        const propsData = {
            reference: el,
            content: binding.value,
        };

        Object.keys(binding.modifiers).forEach((key) => {
            if (['click', 'hover', 'right-click', 'double-click', 'manual'].includes(key))
                propsData.trigger = key;
            if (/^(top|bottom|left|right)(-start|-end)?$/.test(key))
                propsData.placement = key;
        });

        const Tooltip = Vue.component('u-tooltip');
        el.tooltip = new Tooltip({
            propsData,
        }).$mount();
    },
    update(el, binding) {
        el.dataset.tooltip = binding.value;
    },
    unbind(el, binding) {
        el.tooltip.$destroy();
    },
};
