export function getRect(el) {
    return el.getBoundingClientRect();
}

export function getPosition(el) {
    const rect = getRect(el);
    return { left: rect.left, top: rect.top };
}

export function getSize(el, mode = 'outside') {
    if (mode === 'inside')
        return { width: el.clientWidth, height: el.clientHeight };
    else if (mode === 'center')
        return { width: (el.clientWidth + el.offsetWidth) / 2, height: (el.offsetHeight + el.clientHeight) / 2 };
    else if (mode === 'outside')
        return { width: el.offsetWidth, height: el.offsetHeight };
}

export function isInRect(position, rect) {
    if (!position || !rect)
        return false;

    return position.left > rect.left
        && (position.left < rect.left + rect.width)
        && position.top > rect.top
        && (position.top < rect.top + rect.height);
}

export function getComputedStyle(el, property) {
    const computedStyle = window.getComputedStyle(el, null);
    return property ? computedStyle[property] : computedStyle;
}

export function isElementInView(el, viewEl, direction = 'both', complete = false) {
    if (direction === 'both')
        return isElementInView(el, viewEl, 'vertical', complete) && isElementInView(el, viewEl, 'horizontal', complete);
    else if (direction === 'vertical') {
        const elRect = getRect(el);
        const viewRect = getRect(viewEl);

        if (complete)
            return elRect.top >= viewRect.top && elRect.bottom <= viewRect.bottom;
        else // @TODO: border?
            return elRect.bottom > viewRect.top && elRect.top < viewRect.bottom;
    } else if (direction === 'horizontal') {
        const elRect = getRect(el);
        const viewRect = getRect(viewEl);

        if (complete)
            return elRect.left >= viewRect.left && elRect.right <= viewRect.right;
        else // @TODO: border?
            return elRect.right > viewRect.left && elRect.left < viewRect.right;
    } else
        throw new TypeError(`Unknown direction ${direction} of isElementInView param!`);
}

export const getDimension = function (elem, mode) {
    return Object.assign(getSize(elem, mode), getPosition(elem));
};

const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

export const camelCase = function (name) {
    return name.replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => offset ? letter.toUpperCase() : letter).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

export const getStyle = function (element, styleName) {
    if (!element || !styleName)
        return null;

    styleName = camelCase(styleName);

    if (styleName === 'float')
        styleName = 'cssFloat';

    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
};

export const getScrollSize = function () {
    const inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    const outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    const widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll)
        widthScroll = outer.clientWidth;

    document.body.removeChild(outer);

    return widthContained - widthScroll;
};

export function checkIntoView(elm, parentScrollElm) {
    const rect = elm.getBoundingClientRect();
    const viewHeight = getSize(parentScrollElm).height;
    const parentTop = parentScrollElm.getBoundingClientRect().top;
    const top = rect.top - parentTop;
    const bottom = rect.bottom - parentTop;
    return bottom >= 0 && top - viewHeight < 0;
}
