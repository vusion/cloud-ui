export function addClass(el, className) {
    const full = ' ' + (el.className || '') + ' ';
    if (!full.includes(' ' + className + ' '))
        el.className = (full + className).trim();
}

export function removeClass(el, className) {
    const full = ' ' + (el.className || '') + ' ';
    el.className = full.replace(' ' + className + ' ', ' ').trim();
}

export function hasClass(el, className) {
    const full = ' ' + (el.className || '') + ' ';
    return full.includes(' ' + className + ' ');
}
