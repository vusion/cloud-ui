<template>
<div :class="$style.root" :fit="fit" :style="wrapStyle"
    :vertical-center="verticalCenter"
    :horizontal-center="horizontalCenter">
    <template v-if="ready">
        <img :src="convertedSrc" :style="imageStyle" v-bind="$attrs">
    </template>
</div>
</template>

<script>
export default {
    name: 'u-image',
    props: {
        src: {
            type: String,
            default: '',
            required: true,
        },
        fit: {
            type: String,
            default: 'contain',
        },
        circle: {
            type: Boolean,
            default: false,
        },
        verticalCenter: {
            type: String,
            default: 'center',
        },
        horizontalCenter: {
            type: String,
            default: 'center',
        },
        convertSrcFn: {
            type: Function,
            default: (src) => {
                if (src.indexOf('base64') !== -1) {
                    return src;
                }
                const reg = /^([^\[\]]+)(\,([^\[\]]+)){0,}$/g;
                if (typeof src === 'string' && reg.test(src)) {
                    return src.split(',')[0];
                }
                try {
                    const tempSrc = JSON.parse(src);
                    const tempItem = tempSrc[0];
                    return tempItem.url;
                } catch (e) {
                    return src;
                }
            },
        },
    },
    computed: {
        convertedSrc() {
            if (typeof this.convertSrcFn === 'function') {
                return this.convertSrcFn(this.src);
            } else {
                return this.src;
            }
        },
        minSide() {
            return Math.min(this.imageWidth, this.imageHeight);
        },
        radius() {
            return Math.round(this.minSide / 2) + 'px';
        },
        imageStyle() {
            return {
                'object-fit': this.fit,
                'object-position': `${this.verticalCenter} ${this.horizontalCenter}`
            }
        },
        wrapStyle() {
            return {
                'border-radius': this.circle ? this.radius : ''
            }
        }
    },
    data() {
        return {
            ready: false,
            imageWidth: 0,
            imageHeight: 0,
        };
    },
    watch: {
        // src变化重新加载图片
        src() {
            this.loadImage();
        },
        // convertSrcFn变化重新加载图片
        convertSrcFn() {
            this.loadImage();
        },
    },
    mounted() {
        this.loadImage();
    },
    methods: {
        loadImage() {
            this.ready = false;
            const img = new Image();
            const that = this;
            img.onload = function () {
                that.ready = true;
                img.onload = undefined;
                img.onerror = undefined;
                that.imageWidth = img.width;
                that.imageHeight = img.height;
            };
            img.onerror = function (img) {
                that.ready = true;
                img.onload = undefined;
                img.onerror = undefined;
            };
            img.src = this.convertedSrc;
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    overflow: hidden;
}

.root img {
    width: 100%;
    height: 100%;
    display: block;
    max-width: none;
    max-height: none;
    object-position: left top;
}
</style>
