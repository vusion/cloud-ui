function resizeHandler(entries) {
    for (let entry of entries) {
        const listeners = entry.target.__resizeListeners__ || [];
        if (listeners.length) {
            listeners.forEach(fn => {
                fn();
            });
        }
    }
}

function addResizeListener(element, fn) {
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new ResizeObserver(resizeHandler);
        element.__ro__.observe(element);
        window.ro = element.__ro__;
    }
    element.__resizeListeners__.push(fn);
}

function removeResizeListener(element, fn) {
    if (!element || !element.__resizeListeners__) {
        return;
    }
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
    }
}

export {
    resizeHandler,
    addResizeListener,
    removeResizeListener
}