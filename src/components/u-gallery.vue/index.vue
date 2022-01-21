<template>
<div :class="[$style['wrap'],pattern==='big' ? $style['wrapbig'] :$style['wrapsmall']]" class="swiper-for-vusion">
    <div class="swiper mySwiper swiperbig" v-show="pattern==='big'" ref="swiperbig">
        <div class="swiper-wrapper swiper-wrapper-big">
            <div class="swiper-slide swiper-slide-big" v-for="(item, index) in options" :key="index">
                <img :src="getUrl(item)" class="swiper-slide-big-image">
            </div>
        </div>
    </div>
    <i-ico name="left-arrow" class="swiper-big-left-arrow" @click="prev" v-if="arrow && pattern==='big'" :notext="true"></i-ico>
    <i-ico name="right-arrow" class="swiper-big-right-arrow" @click="next" v-if="arrow && pattern==='big'" :notext="true"></i-ico>
    <div class="swiper mySwiper swipersmall" v-show="pattern==='small'" ref="swipersmall">
        <div class="swiper-wrapper swiper-wrapper-small">
            <div class="swiper-slide swiper-slide-small" v-for="(item, index) in options" :key="index">
                <img :src="getUrl(item)" class="swiper-slide-small-image">
            </div>
        </div>
    </div>
    <div class="swiperthumb-wrap">
        <div class="swiper mySwiper swiperthumb" ref="swiperthumb">
            <div class="swiper-wrapper swiper-wrapper-thumb">
                <div class="swiper-slide swiper-slide-thumb" v-for="(item, index) in options" :key="index">
                    <img :src="getUrl(item)" class="swiper-slide-thumb-image">
                </div>
            </div>
        </div>
        <i-ico name="left-arrow" class="swiper-thumb-left-arrow" @click="prevthumb" v-if="arrow && pattern==='small'" :notext="true"></i-ico>
        <i-ico name="right-arrow" class="swiper-thumb-right-arrow" @click="nextthumb" v-if="arrow && pattern==='small'" :notext="true"></i-ico>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.min.css';

export default {
    name: 'u-gallery',
    components: { },
    props: {
        dataSource: {
            type: [Array, Object, Function],
            default: () => '[{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg"}]',
        },
        num: {
            type: Number,
            default: 5,
        },
        arrow: {
            type: Boolean,
            default: true,
        },
        pattern: {
            type: String,
            default: 'big',
        },
    },
    data() {
        return {
            options: [],
            swiperbig: null,
            swipersmall: null,
            swiperthumb: null,
            bigOption: {
                observeParents: true,
                slideToClickedSlide: true,
                slidesPerView: this.num,
                spaceBetween: 32,
                navigation: {
                },
            },
            smallOption: {
                observeParents: true,
                spaceBetween: 10,
                navigation: {
                },
                thumbs: {
                    swiper: this.swiperthumb,
                },
            },
            thumbOption: {
                observeParents: true,
                spaceBetween: 10,
                slidesPerView: this.num,
                freeMode: true,
                watchSlidesProgress: true,
            },
        };
    },
    computed: {
    },
    watch: {
        dataSource: {
            deep: true,
            handler: 'update',
            immediate: true,
        },
        pattern: {
            deep: true,
            handler: 'renderSwiper',
        },
        num: {
            deep: true,
            handler: 'renderSwiper',
        },
    },
    methods: {
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
        getUrl(item) {
            return item.thumb || item.url || item;
        },
        fromValue(value) {
            try {
                if (value === null || value === undefined)
                    return [];
                if (typeof value === 'string')
                    return JSON.parse(value || '[]');
                if (typeof value === 'object')
                    return value;
            } catch (err) {
                return [];
            }
        },
        async update() {
            if (typeof (this.dataSource) === 'function') {
                try {
                    const res = await this.dataSource({
                        page: 1,
                        size: 1000,
                    });
                    this.options = (res.content);
                } catch (error) {
                    console.error(error);
                }
            } else {
                this.options = (this.fromValue(this.dataSource));
            }
            this.renderSwiper();
        },
        maxNum() {
            return Math.min(this.num, this.options.length);
        },
        renderSwiper() {
            try {
                this.swiperthumb && this.swiperthumb.destroy();
                this.swiperbig && this.swiperbig.destroy();
                this.swipersmall && this.swipersmall.destroy();
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
            }
            this.$nextTick(() => {
                if (this.pattern === 'small') {
                    this.thumbOption.slidesPerView = this.maxNum();
                    this.swiperthumb = new Swiper(this.$refs.swiperthumb, this.thumbOption);
                    this.smallOption.thumbs.swiper = this.swiperthumb;
                } else {
                    this.swiperthumb = null;
                    this.bigOption.slidesPerView = this.maxNum();
                }
                this[`swiper${this.pattern}`] = new Swiper(this.$refs[`swiper${this.pattern}`], this[`${this.pattern}Option`]);
                // if (this.pattern === 'small') {
                //     const newHeight = document.querySelector('.swiper-slide-thumb').offsetWidth;
                //     this.$refs.thumbwrap.style.height = `${newHeight}px`;
                // }
            });
        },
        prev() {
            this[`swiper${this.pattern}`].slidePrev();
        },
        next() {
            this[`swiper${this.pattern}`].slideNext();
        },
        prevthumb() {
            this.swiperthumb.slidePrev();
        },
        nextthumb() {
            this.swiperthumb.slideNext();
        },
    },
};
</script>
<style module>
.wrap {
    width: 100%;
    height: 600px;
    overflow: hidden;
}
.wrapbig {
    width: 100%;
    padding: 0 72px;
    position: relative;
}
.wrapsmall {
    width: 1000px;
    overflow: unset;
}
</style>
<style>
    .swiper-for-vusion .swiper {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .swiper-for-vusion .swiper-wrapper-big {
         align-items: center;
    }
    .swiper-for-vusion .swiper-wrapper-big .swiper-slide-big {
        text-align: center;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90.90909090909091%;
      }

    .swiper-for-vusion .swiper-wrapper-big .swiper-slide-big-image {
        display: block;
        width: 100%;
        height: 100%;
    }
    .swiper-for-vusion  .swiper-slide-small-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .swiper-for-vusion .swiper-wrapper-big .swiper-slide-active {
        transform: scale(1.1,1.1);
    }
    .swiper-for-vusion .swiper-slide-thumb-active {
        box-sizing: border-box;
        border: 2px solid #4c88ff;
    }
    .swiper-big-left-arrow, .swiper-big-right-arrow {
        font-size: 48px;
        color: #ccc;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    .swiper-big-right-arrow {
        left: auto;
        right: 0;
    }
    .swiper-for-vusion .swipersmall {
        width: 100%;
        height: 84.7457627118644%;
        position: relative;
        margin-bottom: 12px;
    }
    .swiper-for-vusion .swiperthumb-wrap {
        height: calc(15.254237288135599% - 12px);
        padding: 0 36px;
        position: relative;
    }

    .swiper-for-vusion .swiperthumb {

    }
    .swiper-for-vusion .swiper-wrapper-thumb .swiper-slide-thumb-image {
        display: block;
        width: 100%;
        height: 100%;
    }
    .swiper-thumb-left-arrow, .swiper-thumb-right-arrow {
        font-size: 20px;
        color: #ccc;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    .swiper-thumb-right-arrow {
        left: auto;
        right: 0;
    }
</style>
