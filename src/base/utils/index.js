export const isObject = (value) => {
    if (value === null || value === undefined)
        return false;
    return value.toString() === '[object Object]';
};

export const deepCopy = function (result, source) {
    for (const key in source) {
        const copy = source[key];
        if (Array.isArray(copy))
            result[key] = deepCopy(result[key] || [], copy);
        else if (isObject(copy))
            result[key] = deepCopy(result[key] || {}, copy);
        else
            result[key] = copy;
    }
    return result;
};

export const getRequestAnimation = function () {
    let lastTime = 0;
    const vendors = ['webkit', 'moz', 'ms', 'o'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            const currTime = new Date().getTime();
            const timeToCall = Math.max(0, 16 - (currTime - lastTime));
            const id = window.setTimeout(() => callback(currTime + timeToCall), timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = (id) => {
            clearTimeout(id);
        };
    }
};
