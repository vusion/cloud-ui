<template>
<div :class="$style.root" :fit="fit">
    <template v-if="ready">
        <img :src="getSrc(src)" :style="imageStyle" v-bind="$attrs">
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
    },
    data() {
        return {
            ready: false,
            imageWidth: 0,
            imageHeight: 0,
        };
    },
    watch: {
        src() {
            this.getImageStyle(); 
        },
        fit() {
            this.getImageStyle();
        },
    },
    mounted() {
        this.loadImage();
    },
    methods: {
        getSrc(src) {
            try {
                const tempSrc = JSON.parse(src);
                const tempItem = tempSrc[0];
                return tempItem.url;
            } catch (e) {
                return src;
            }
        },
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
                that.getImageStyle();
            };
            img.onerror = function (img) {
                that.ready = true;
                img.onload = undefined;
                img.onerror = undefined;
            };
            img.src = this.src;
        },
        getImageStyle() {
            let fit = this.fit;
            const { imageWidth, imageHeight } = this;
            const {
                clientWidth: containerWidth,
                clientHeight: containerHeight,
            } = this.$el;
            if (!imageWidth || !imageHeight || !containerWidth || !containerHeight)
                this.imageStyle = {};
            const vertical = imageWidth / imageHeight < 1;
            if (fit === 'scale-down') {
                const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
                fit = isSmaller ? 'none' : 'contain';
            }
            switch (fit) {
                case 'none':
                    this.imageStyle = { width: 'auto', height: 'auto' };
                    break;
                case 'contain':
                    this.imageStyle = vertical ? { width: 'auto' } : { height: 'auto' };
                    break;
                case 'cover':
                    this.imageStyle = vertical ? { height: 'auto' } : { width: 'auto' };
                    break;
                default:
                    this.imageStyle = {};
            }
        },
    },
};
</script>

<style module >

.root {
    position: relative;
    display: inline-block;
    overflow: hidden;
}
.root {
    width: var(--image-width);
    height: var(--image-height);
}
.root img {
    width: 100%;
    height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    display: block;
    max-width: none;
    max-height: none;
}
</style>
