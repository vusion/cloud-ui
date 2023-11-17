<template>
    <div :class="$style.root"
         :fit="fit"
         :style="wrapStyle"
         :vertical-center="verticalCenter"
         :horizontal-center="horizontalCenter"
         v-on="$listeners">
        <template v-if="ready && src || isEmpty">
            <img :src="convertedSrc" :style="imageStyle" v-bind="$attrs" @click="onClick">
            <u-lightbox v-if="preview" :visible.sync="visible" close-button>
                <u-lightbox-item title="图片预览">
                    <img :src="convertedSrc"/>
                </u-lightbox-item>
            </u-lightbox>
        </template>
        <template v-else-if="placeholderReady && convertedPlaceholderSrc || placeholderIsEmpty">
            <img :src="convertedPlaceholderSrc" :style="imageStyle" v-bind="$attrs" @click="onClick" hsj="hsj">
            <u-lightbox v-if="preview" :visible.sync="visible" close-button>
                <u-lightbox-item title="图片预览">
                    <img :src="convertedPlaceholderSrc"/>
                </u-lightbox-item>
            </u-lightbox>
        </template>
        <template v-else-if="loadingType !== 'none'">
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
        placeholderSrc: {
            type: String,
        },
        loadingType: {
            type: String,
            default: 'loading',
            validator: (value) => ['loading', 'placeholder', 'none'].includes(value),
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
                const reg = /^([^[\]]+)(,([^[\]]+)){0,}$/g;
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
            // for src
            ready: false,
            loadImgTimer: undefined,
            isEmpty: false,

            // for placeholderSrc
            placeholderReady: false,
            placeholderLoadingTimer: false,
            placeholderIsEmpty: false,

            imageWidth: 0,
            imageHeight: 0,
            visible: false,
        };
    },
    computed: {
        convertedSrc() {
            let res;
            if (typeof this.convertSrcFn === 'function') {
                res = this.convertSrcFn(this.src);
            } else {
                res = this.src;
            }

            if (this.$formatMicroFrontUrl)
                res = this.$formatMicroFrontUrl(res);

            return res;
        },
        convertedPlaceholderSrc() {
            if (this.loadingType !== 'placeholder') {
                return '';
            }
            let res;
            if (typeof this.convertSrcFn === 'function') {
                res = this.convertSrcFn(this.placeholderSrc);
            } else {
                res = this.placeholderSrc;
            }

            if (this.$formatMicroFrontUrl)
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
        placeholderSrc() {
            this.loadPlaceholderImage();
        },
        // convertSrcFn变化重新加载图片
        convertSrcFn() {
            this.loadPlaceholderImage();
            this.loadImage();
        },
    },
    mounted() {
        this.loadImage();
        this.loadPlaceholderImage();
    },
    methods: {
        loadImage() {
            this.ready = false;
            this.isEmpty = false;

            if (this.loadImgTimer) {
                this.loadImgTimer();
                this.loadImgTimer = null;
            }
            const [promise, cancel] = this.load(
                this.convertedSrc,
                () => {
                    // 10s后图片仍未加载出来，变成裂开的状态
                    this.isEmpty = true;
                },
                10000, // 10s
            );

            promise.then(
                (img) => {
                    this.$emit('load', this);
                    this.ready = true;
                    this.imageWidth = img.width;
                    this.imageHeight = img.height;
                },
                () => {
                    this.ready = true;
                },
            );

            this.loadImgTimer = cancel;
        },
        loadPlaceholderImage() {
            if (this.ready) {
                // 正常的图片已经成功加载，不需要加载占位图片
                return;
            }
            this.placeholderReady = false;
            this.placeholderIsEmpty = false;

            if (this.placeholderLoadingTimer) {
                this.placeholderLoadingTimer();
                this.placeholderLoadingTimer = null;
            }
            const [promise, cancel] = this.load(
                this.convertedPlaceholderSrc,
                () => {
                    // 10s后图片仍未加载出来，变成裂开的状态
                    this.placeholderIsEmpty = true;
                },
                10000, // 10s
            );

            promise.then(
                (img) => {
                    // this.$emit('load', this);
                    this.placeholderReady = true;
                    this.imageWidth = img.width;
                    this.imageHeight = img.height;
                },
                () => {
                    this.placeholderReady = true;
                },
            );

            this.placeholderLoadingTimer = cancel;
        },
        load(src, onTimeout, delay = 10000) {
            const img = new Image();
            const timer = setTimeout(onTimeout, delay);
            return [
                new Promise((res, rej) => {
                    img.onload = () => {
                        res(img);
                        img.onload = undefined;
                        img.onerror = undefined;
                    };
                    img.onerror = (e) => {
                        rej(e);
                        img.onload = undefined;
                        img.onerror = undefined;
                    };
                    img.src = src;
                }),
                () => clearTimeout(timer),
            ];
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
