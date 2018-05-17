import { on, off } from './dom';
export default {
    name: 'u-scroll-view',
    data() {
        return {
            thumbDrag: false,
            height: undefined,
            thumbOffsety: 0, // 点击thumb偏移y
            thumbTop: 0, // thumb距离bar顶部的距离
            contentScrollHeight: 0,
            showScrollBar: false, // 鼠标hover在scrollview时才显示滚动条
        };
    },
    mounted() {
        this.setStyle();
    },
    destroyed() {
        off(document, 'mouseup', this.mouseUpDocumentHandler);
    },
    watch: {
        thumbTop(value) { // 同时更改thumb和content位置
            value -= this.thumbOffsety;
            if (value < 0 || value > this.height)
                return;
            const radio = value / this.height;
            this.$refs.thumb.style.top = value + 'px';
            this.$refs.content.scrollTop = this.contentScrollHeight * radio;
        },
    },
    methods: {
        onBarClick(e) {
            if (e.currentTarget !== e.target) // 必须在bar上点击
                return;

            this.thumbTop = e.offsetY > this.height ? this.height : e.offsetY;
        },
        setStyle() {
            this.$refs.thumb.style.height = this.$refs.content.clientHeight * 100 / this.$refs.content.scrollHeight + '%';
            this.height = this.$refs.bar.clientHeight - this.$refs.thumb.clientHeight;
            this.contentScrollHeight = this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
        },
        startDrag(e) {
            e.stopImmediatePropagation();
            this.thumbDrag = true;
            on(document, 'mousemove', this.mouseMoveDocumentHandler);
            on(document, 'mouseup', this.mouseUpDocumentHandler);
            document.onselectstart = () => false;
        },
        onThumbMouseDown(e) {
            this.startDrag(e);
            this.thumbOffsety = e.offsetY;
        },
        mouseMoveDocumentHandler(e) {
            if (!this.thumbDrag)
                return;
            this.thumbTop = e.clientY - this.$refs.bar.getBoundingClientRect().top;
        },
        mouseUpDocumentHandler(e) {
            this.thumbDrag = false;
            this.thumbOffsety = 0;
            off(document, 'mousemove', this.mouseMoveDocumentHandler);
            document.onselectstart = null;
        },
        onScroll(e) {
            this.$refs.thumb.style.top = (e.target.scrollTop / this.contentScrollHeight * this.height) + 'px';
        },
        contentScrollChange(offsetY) {
            this.thumbTop = offsetY / this.contentScrollHeight * this.height;
        },
    },

};
