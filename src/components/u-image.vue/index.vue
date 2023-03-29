<template>
    <div :class="$style.root"
         :fit="fit"
         :style="wrapStyle"
         :vertical-center="verticalCenter"
         :horizontal-center="horizontalCenter"
         v-on="$listeners">
        <template v-if="ready && src || isEmpty">
            <img :src="convertedSrc" :style="imageStyle" v-bind="$attrs" @click="onClick">
            <u-lightbox v-if="preview" :visible.sync="visible" closeButton>
                <u-lightbox-item title="图片预览"><img :src="convertedSrc" /></u-lightbox-item>
            </u-lightbox>
        </template>
        <template v-else>
            <u-loading size="small" :class="$style.loading"></u-loading>
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
                if (src.indexOf && src.indexOf('base64') !== -1) {
                    return src;
                }
                const reg = /^([^\[\]]+)(\,([^\[\]]+)){0,}$/g;
                if (typeof src === 'string' && reg.test(src)) {
                    const [a1, a2] = src.split(',');
                    if (/\/\//.test(a2)) {
                        return a1;
                    }
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
        preview: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            ready: false,
            imageWidth: 0,
            imageHeight: 0,
            isEmpty: false,
            loadImgTimer: undefined,
            visible: false,
        };
    },
    computed: {
        convertedSrc() {
            let res;
            if (typeof this.convertSrcFn === 'function') {
                res =  this.convertSrcFn(this.src);
            } else {
                res =  this.src;
            }

            if(this.$formatMicroFrontUrl)
                res = this.$formatMicroFrontUrl(res);

            return res;
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
                'object-position': `${this.verticalCenter} ${this.horizontalCenter}`,
            };
        },
        wrapStyle() {
            return {
                'border-radius': this.circle ? this.radius : '',
            };
        },
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
            this.isEmpty = false;
            // 10s后图片仍未加载出来，变成裂开的状态
            clearTimeout(this.loadImgTimer);
            this.loadImgTimer = setTimeout(() => this.isEmpty = true, 10000);
            const img = new Image();
            const that = this;
            img.onload = function () {
                that.$emit('load', that);
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
        onClick() {
            if (!(this.$env && this.$env.VUE_APP_DESIGNER) && this.preview) {
                this.visible = true;
            }
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
    width: var(--image-width);
    height: var(--image-height);
    display: block;
    max-width: none;
    max-height: none;
    object-position: left top;
}

.root .loading {
    width: var(--image-width);
    height: var(--image-height);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
