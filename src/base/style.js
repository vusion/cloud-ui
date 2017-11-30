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

export const getPosition = function (elem) {
    const doc = elem && elem.ownerDocument;
    const docElem = doc.documentElement;
    const body = doc.body;

    const box = elem.getBoundingClientRect ? elem.getBoundingClientRect() : { left: 0, top: 0 };

    const clientLeft = docElem.clientLeft || body.clientLeft || 0;
    const clientTop = docElem.clientTop || body.clientTop || 0;

    return { left: box.left - clientLeft, top: box.top - clientTop };
};

export const getSize = function (elem, mode = 'outside') {
    if (mode === 'inside')
        return { width: elem.clientWidth, height: elem.clientHeight };
    else if (mode === 'center')
        return { width: (elem.clientWidth + elem.offsetWidth) / 2, height: (elem.offsetHeight + elem.clientHeight) / 2 };
    else if (mode === 'outside')
        return { width: elem.offsetWidth, height: elem.offsetHeight };
};

export const getDimension = function (elem, mode) {
    return Object.assign(getSize(elem, mode), getPosition(elem));
};

export const isInRect = function (position, dimension) {
    if (!position || !dimension)
        return false;

    return position.left > dimension.left
        && (position.left < dimension.left + dimension.width)
        && position.top > dimension.top
        && (position.top < dimension.top + dimension.height);
};

export const getComputedStyle = function (elem, property) {
    const computedStyle = elem.currentStyle || window.getComputedStyle(elem, null);
    return property ? computedStyle[property] : computedStyle;
};
