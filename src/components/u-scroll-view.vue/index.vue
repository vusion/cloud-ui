<script>
import Bar from './bar.vue';
import scrollbarWidth from './js/scrollbar-width.js'
import { addResizeListener, removeResizeListener } from './js/resize-event.js';

export default {
    name: 'u-scroll-view',
    props: {
        native: {
            type: Boolean,
            default: false
        },
        wrapStyle: {},
        wrapClass: {},
        viewStyle: {},
        viewClass: {},
        noresize: {
            type: Boolean,
            default: false
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    components: {
        Bar
    },
    data() {
        return {
            sizeWidth: '0',
            sizeHeight: '0',
            moveX: 0,
            moveY: 0,
        }
    },
    computed: {
        wrap() {
            return this.$refs.wrap;
        }
    },
    render(h) {
        let gutter = scrollbarWidth();

        let style = this.wrapStyle;

        // if (gutter) {
        //     const gutterWith = `${gutter}px`;
        //     const gutterStyle = `margin-bottom: ${gutterWith};margin-right: ${gutterWith};`;

        //     if (Array.isArray(this.wrapStyle)) {
        //         style = this.toObject(this.wrapStyle);
        //         style.marginRight = style.marginBottom = gutterWith;
        //     } else if (typeof this.wrapStyle === "string") {
        //         style += gutterStyle;
        //     } else {
        //         style = gutterStyle;
        //     }
        // }

        const view = h(
            this.tag,
            {
                class: ["u-scroll-view__view", this.viewClass],
                style: this.viewStyle,
                ref: 'resize'
            },
            this.$slots.default
        );

        const wrap = (
            <div
                ref="wrap"
                style={style}
                onScroll={this.handleScroll}
                class={[
                    this.wrapClass,
                    "u-scroll-view__wrap",
                    gutter ? "" : "u-scroll-view__wrap--hidden-default"
                ]}
            >
                {[view]}
            </div>
        );

        let nodes = [];
        if (!this.native) {
            nodes = [
                wrap,
                <Bar move={this.moveX} size={this.sizeWidth} />,
                <Bar vertical move={this.moveY} size={this.sizeHeight} />
            ];
        } else {
            nodes = [
                <div
                    ref="wrap"
                    class={[this.wrapClass, "u-scroll-view__wrap"]}
                    style={style}
                >
                    {[view]}
                </div>
            ];
        }
        return h("div", { class: 'u-scroll-view', attrs: {native: `${this.native}`}}, nodes);
    },
    mounted() {
        if (this.native) {
            return;
        }
        this.$nextTick(this.update);
        !this.noresize && addResizeListener(this.$refs.resize, this.update);
    },
    beforeDestroy() {
        if (this.native) {
            return;
        }
        !this.noresize && removeResizeListener(this.$refs.resize, this.update);
    },
    methods: {   
        // toObject() {

        // },
        handleScroll() {
            const wrap = this.wrap;

            this.moveY = (wrap.scrollTop * 100) / wrap.clientHeight;
            this.moveX = (wrap.scrollLeft * 100) / wrap.clientWidth; 
        },
        update() {
            let heightPercentage, widthPercentage;
            const wrap = this.wrap;
            if (!wrap) {
                return;
            }
            
            heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight;
            widthPercentage = (wrap.clientWidth * 100) / wrap.scrollWidth;

            this.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";
            this.sizeWidth = widthPercentage < 100 ? widthPercentage + "%" : "";
        },
    }
};
</script>

<style>
    .u-scroll-view {
        /* overflow: hidden; */
        position: relative;
    }

    .u-scroll-view__wrap {
        overflow: scroll;
        height: 100%;
    }

    .u-scroll-view[native="false"] ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
</style>
