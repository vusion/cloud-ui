const defaults = {
    zoom: 0.10, // 每次缩放的百分比
    // canZoomin: false,  // 是否允许放大
    // canZoomout: false, // 是否允许缩小
    // MaxZoomin: undefined,  // 最大放大值
    // MaxZoomout: undefined, // 最小缩小值
    // allowWheel: false, // 是否允许滚轮缩放
};

class Zoom {
    constructor(img, options = {}) {
        this.img = img;
        this.canvas = document.createElement('canvas');
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

        const computedStyle = window.getComputedStyle(this.img, null);

        this.width = parseInt(computedStyle.width);
        this.height = parseInt(computedStyle.height);
        this.radio = this.width / this.height;
        this.bgWidth = this.width;
        this.bgHeight = this.height;
        this.bgPosX = 0;
        this.bgPosY = 0;

        this.setSrcToBackground(this.img);

        this.img.style.backgroundSize = this.width + 'px ' + this.height + 'px';
        this.img.style.backgroundPosition = '0 0';

        if (this.settings.allowWheel)
            this.img.onwheel = this.onwheel.bind(this);
        this.img.onmousedown = this.draggable.bind(this);
    }
    // 将src设置为background
    setSrcToBackground() {
        this.img.style.backgroundImage = 'url("' + this.img.src + '")';
        this.img.style.backgroundRepeat = 'no-repeat';
        this.canvas.width = this.img.naturalWidth;
        this.canvas.height = this.img.naturalHeight;
        this.cachedDataUrl = this.canvas.toDataURL();
        this.img.src = this.cachedDataUrl;
    }
    // 更新backgournd为缩小后宽高和位置
    zoomoutBgStyle() {
        this.bgPosX = (this.width - this.bgWidth) / 2;
        this.bgPosY = (this.height - this.bgHeight) / 2;
        this.img.style.backgroundSize = this.bgWidth + 'px ' + this.bgHeight + 'px';
        this.img.style.backgroundPosition = this.bgPosX + 'px ' + this.bgPosY + 'px';
    }
    // 更新backgournd为放大后宽高和位置
    zoominBgStyle() {
        if (this.bgPosX > 0)
            this.bgPosX = 0;
        else if (this.bgPosX < this.width - this.bgWidth)
            this.bgPosX = this.width - this.bgWidth;

        if (this.bgPosY > 0)
            this.bgPosY = 0;
        else if (this.bgPosY < this.height - this.bgHeight)
            this.bgPosY = this.height - this.bgHeight;

        this.img.style.backgroundSize = this.bgWidth + 'px ' + this.bgHeight + 'px';
        this.img.style.backgroundPosition = this.bgPosX + 'px ' + this.bgPosY + 'px';
    }
    // 重置为初始值
    reset() {
        this.bgWidth = this.width;
        this.bgHeight = this.height;
        this.bgPosX = this.bgPosY = 0;
        this.zoominBgStyle();
    }
    // 缩放图片
    zoom(zoomin = true, e = {}) {
        // 设置不可缩放返回
        if ((zoomin && !this.settings.canZoomin) || (!zoomin && !this.settings.canZoomout))
            return;

        const rect = this.img.getBoundingClientRect();
        const offsetX = e.pageX ? e.pageX - rect.left - window.pageXOffset : this.width / 2;
        const offsetY = e.pageY ? e.pageY - rect.top - window.pageYOffset : this.height / 2;

        const bgCursorX = offsetX - this.bgPosX;
        const bgCursorY = offsetY - this.bgPosY;

        const bgRatioX = bgCursorX / this.bgWidth;
        const bgRatioY = bgCursorY / this.bgHeight;

        // Update the bg size:
        if (zoomin) {
            this.bgWidth += this.bgWidth * this.settings.zoom;
            this.bgHeight += this.bgHeight * this.settings.zoom;
            if (this.settings.MaxZoomin && this.bgWidth > this.settings.MaxZoomin) { // 超出最大放大宽度
                this.bgWidth = this.settings.MaxZoomin;
                this.bgHeight = this.bgWidth / this.radio;
            }
        } else {
            this.bgWidth -= this.bgWidth * this.settings.zoom;
            this.bgHeight -= this.bgHeight * this.settings.zoom;
            if (this.settings.MaxZoomout && this.bgWidth < this.settings.MaxZoomout) { // 小于最小缩小宽度
                this.bgWidth = this.settings.MaxZoomout;
                this.bgHeight = this.bgWidth / this.radio;
            }
        }

        // Take the percent offset and apply it to the new size:
        this.bgPosX = offsetX - (this.bgWidth * bgRatioX);
        this.bgPosY = offsetY - (this.bgHeight * bgRatioY);

        if (this.bgWidth <= this.width || this.bgHeight <= this.height) {
            this.img.style.cursor = 'auto';
            this.zoomoutBgStyle();
        } else {
            this.img.style.cursor = 'move';
            this.zoominBgStyle();
        }
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
        if (this.bgWidth <= this.width || this.bgHeight <= this.height)
            return;

        e.preventDefault();
        this.previousEvent = e;
        const drag = (e) => {
            e.preventDefault();
            this.bgPosX += (e.pageX - this.previousEvent.pageX);
            this.bgPosY += (e.pageY - this.previousEvent.pageY);
            this.previousEvent = e;
            this.zoominBgStyle();
        };
        const removeDrag = () => {
            this.img.onmouseup = null;
            this.img.onmousemove = null;
        };
        this.img.onmouseup = removeDrag.bind(this);
        this.img.onmousemove = drag.bind(this);
    }
}

export default Zoom;
