const EventUtil = {
    addHandler(element, type, handler) {
        if (element.addEventListener)
            element.addEventListener(type, handler, false);
        else if (element.attachEvent)
            element.attachEvent('on' + type, handler);
        else
            element['on' + type] = handler;
    },
    removeHandler(element, type, handler) {
        if (element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if (element.detachEvent)
            element.detachEvent('on' + type, handler);
        else
            element['on' + type] = null;
    },
};
export default EventUtil;
