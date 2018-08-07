import { on, off } from './dom';
export default {
    name: 'u-scroll-view',
    props: {
        showThumb: { type: String, default: 'hover' }, // 默认在hover时才显示滚动条。可选值：hover | always
    },
    data() {
        return {
            thumbDrag: false,
            height: undefined,
            thumbOffsety: 0, // 点击thumb偏移y
            thumbTop: 0, // thumb距离bar顶部的距离
            contentScrollHeight: 0,
            showScrollBar: this.showThumb !== 'hover',
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
        loadContent() {
            this.$nextTick(() => this.setStyle());
        },
        setStyle() {
            if (this.$refs.content.clientHeight >= this.$refs.content.scrollHeight)
                this.showScrollBar = false;
            else
                this.$refs.thumb.style.height = this.$refs.content.clientHeight * 100 / this.$refs.content.scrollHeight + '%';

            this.height = this.$refs.bar.clientHeight - this.$refs.thumb.clientHeight;
            this.contentScrollHeight = this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
            this.showScrollBar = this.showThumb !== 'hover';
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
            if (!this.contentScrollHeight) // 元素还没显示在页面中时，setStyle的值可能不准确。
                this.setStyle();
            this.thumbTop = offsetY / this.contentScrollHeight * this.height;
        },
    },

};
