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
        EventUtil.on(document, 'click', documentHandler);
    },
    unbind(el, binding) {
        EventUtil.off(document, 'click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },
};

const ellipsistitle = {
    update(el, binding, vnode, oldVnode) {
        const mouseenterHandler = function (e) {
            // 此处如果判断已存在title属性则不添加的话，会导致在u-select中场景下value不发生变化，text发生变化的title不会更新值
            const style = getComputedStyle(el);
            const title = binding.value || el.innerText;
            if (style.overflow === 'hidden' && style.textOverflow === 'ellipsis' && style.whiteSpace === 'nowrap' && el.scrollWidth > el.offsetWidth)
                el.setAttribute('title', title);
        };
        el.__vueEllipsisTitle__ = mouseenterHandler;
        EventUtil.on(el, 'mouseenter', mouseenterHandler);
    },
    unbind(el, binding) {
        EventUtil.off(el, 'mouseenter', el.__vueEllipsisTitle__);
    },
};

export default { clickoutside, ellipsistitle };
