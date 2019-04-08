const defaults = {
    zoom: 0.10, // 每次缩放的百分比
    // canZoomin: false,  // 是否允许放大
    // canZoomout: false, // 是否允许缩小
    // MaxZoomin: undefined,  // 最大放大值
    // MaxZoomout: undefined, // 最小缩小值
    // allowWheel: false, // 是否允许滚轮缩放
};

class Zoom {
    constructor(img, wrapper, options = {}) {
        this.img = img;
        this.wrapper = wrapper;
        this.settings = Object.assign(options, defaults);
        // Do nothing in IE8
        if (typeof window.getComputedStyle !== 'function')
            return;

        if (this.img.complete)
            this.load();

        this.img.addEventListener('load', this.load.bind(this));
    }
    load() {
        if (this.img.src === this.cachedDataUrl)
            return;
        const computedStyle = window.getComputedStyle(this.wrapper, null);

        this.initWidth = this.width = parseInt(computedStyle.width);
        this.initHeight = this.height = parseInt(computedStyle.height);
        this.radio = this.width / this.height;

        this.wrapper.left = parseInt(computedStyle.left);
        this.wrapper.top = parseInt(computedStyle.top);

        if (this.settings.allowWheel)
            this.wrapper.onwheel = this.onwheel.bind(this);
        this.wrapper.onmousedown = this.draggable.bind(this);
    }
    // 重置为初始值
    reset() {
        this.wrapper.style.width = this.initWidth + 'px';
        this.wrapper.style.height = this.initHeight + 'px';
        this.wrapper.style.left = (window.innerWidth - this.initWidth) / 2 + 'px';
        this.wrapper.style.top = (window.innerHeight - this.initHeight) / 2 + 'px';
    }
    // 缩放图片
    zoom(zoomin = true, e = {}) {
        // 设置不可缩放返回
        if ((zoomin && !this.settings.canZoomin) || (!zoomin && !this.settings.canZoomout))
            return;
        const rect = this.wrapper.getBoundingClientRect();
        // 鼠标相对图片左上角的偏移量
        const offsetX = e.pageX ? e.pageX - rect.left - window.pageXOffset : this.width / 2;
        const offsetY = e.pageY ? e.pageY - rect.top - window.pageYOffset : this.height / 2;

        const computedStyle = window.getComputedStyle(this.wrapper, null);
        this.wrapper.left = parseInt(computedStyle.left);
        this.wrapper.top = parseInt(computedStyle.top);

        let tempZoom;
        if (zoomin) {
            // 根据是否超出最大放大倍数调整缩放比
            tempZoom = (this.settings.MaxZoomin && (this.width * (1 + this.settings.zoom)) > this.settings.MaxZoomin) ? this.settings.MaxZoomin / this.width - 1 : this.settings.zoom;
            this.wrapper.left -= offsetX * tempZoom;
            this.wrapper.top -= offsetY * tempZoom;
            this.width *= (1 + tempZoom);
            this.height *= (1 + tempZoom);
        } else {
            tempZoom = (this.settings.MaxZoomin && (this.width / (1 + this.settings.zoom)) < this.settings.MaxZoomout) ? this.width / this.settings.MaxZoomout - 1 : this.settings.zoom;
            this.wrapper.left += offsetX * tempZoom;
            this.wrapper.top += offsetY * tempZoom;
            this.width /= (1 + tempZoom);
            this.height /= (1 + tempZoom);
        }
        this.wrapper.style.width = this.width + 'px';
        this.wrapper.style.height = this.height + 'px';
        this.wrapper.style.left = this.wrapper.left + 'px';
        this.wrapper.style.top = this.wrapper.top + 'px';
    }
    zoomin() {
        this.zoom();
    }
    zoomout() {
        this.zoom(false);
    }
    // 滚轮事件
    onwheel(e) {
        let deltaY = 0;

        e.preventDefault();

        if (e.deltaY) { // FireFox 17+ (IE9+, Chrome 31+?)
            deltaY = e.deltaY;
        } else if (e.wheelDelta)
            deltaY = -e.wheelDelta;
        this.zoom(deltaY < 0, e);
    }

    draggable(e) {
        e.preventDefault();
        this.previousEvent = e;
        const drag = (e) => {
            e.preventDefault();
            this.wrapper.left += (e.pageX - this.previousEvent.pageX);
            this.wrapper.top += (e.pageY - this.previousEvent.pageY);
            this.wrapper.style.left = this.wrapper.left + 'px';
            this.wrapper.style.top = this.wrapper.top + 'px';
            this.previousEvent = e;
        };
        const removeDrag = () => {
            this.wrapper.onmouseup = null;
            this.wrapper.onmousemove = null;
        };
        this.wrapper.onmouseup = removeDrag.bind(this);
        this.wrapper.onmousemove = drag.bind(this);
    }
}

export default Zoom;
