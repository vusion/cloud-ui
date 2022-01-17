<template>
<div :class="[$style['wrap'],pattern==='big' ? $style['wrapbig'] :$style['wrapsmall']]" class="swiper-for-vusion">
    <swiper ref="mySwiper" :class="$style.swiper" class="swiper-small-wrap" :options="swiperOption" v-if="pattern==='small'" :auto-update="true" :auto-destroy="true" :delete-instance-on-destroy="true" :cleanup-styles-on-destroy="true">
        <swiper-slide :class="$style.swiperslide" v-for="(item, index) in options" :key="index">
            {{ item }}
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev" v-if="arrow"></div>
        <div class="swiper-button-next" slot="button-next" v-if="arrow"></div>
    </swiper>
    <template v-if="pattern==='big'">
        <swiper ref="mySwiperbig" :class="$style.swiperbig" class="swiper-big gallery-top" :options="swiperOptionbig" :auto-update="true" :auto-destroy="true" :delete-instance-on-destroy="true" :cleanup-styles-on-destroy="true">
            <swiper-slide :class="$style.swiperslidebig" class="swiper-big-slide swiper-big-thumb-slide" v-for="(item, index) in options" :key="index">
                {{ item }}
            </swiper-slide>
        </swiper>
        <div class="swiper-gallery-thumbs-wrap">
            <swiper ref="swiperThumbs" :class="$style.swiperthumb" class="gallery-thumbs" :options="swiperOptionThumbs" :auto-update="true" :auto-destroy="true" :delete-instance-on-destroy="true" :cleanup-styles-on-destroy="true">
                <swiper-slide :class="$style.swiperslidethumbs" class="swiper-thumb-slide swiper-big-thumb-slide" v-for="(item, index) in options" :key="index">
                    {{ item }}
                </swiper-slide>
            </swiper>
            <i-ico name="left-arrow" class="swiper-thumb-left-arrow" @click="prev" v-if="arrow"></i-ico>
            <i-ico name="right-arrow" class="swiper-thumb-right-arrow" @click="next" v-if="arrow"></i-ico>
        </div>
    </template>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
    name: 'u-gallery',
    components: { Swiper, SwiperSlide },
    props: {
        dataSource: {
            type: [Array, Object, Function],
            default: () => [1, 2, 3, 4, 5],
        },
        num: Number,
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
            swiperOption: {
                observer: true,
                resizeObserver: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 32,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            swiperOptionbig: {
                observer: true,
                resizeObserver: true,
                observeParents: true,
                loop: true,
                loopedSlides: 5, // looped slides should be the same
                spaceBetween: 10,
            },
            swiperOptionThumbs: {
                observer: true,
                resizeObserver: true,
                observeParents: true,
                loop: true,
                loopedSlides: 5, // looped slides should be the same
                spaceBetween: 10,
                slidesPerView: 5,
                slidesPerGroup: 1,
                centeredSlides: true,
                // slidesPerView: 'auto',
                // touchRatio: 0.2,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: '.swiper-button-next-thumb',
                    prevEl: '.swiper-button-prev-thumb',
                },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
        swiperbig() {
            return this.$refs.mySwiperbig.$swiper;
        },
        swiperThumbs() {
            return this.$refs.swiperThumbs.$swiper;
        },
    },
    watch: {
        dataSource: {
            deep: true,
            handler: 'update',
            immediate: true,
        },
        pattern: {
            deep: true,
            handler: 'setType',
            immediate: true,
        },
    },
    mounted() {
        this.setType();
        setTimeout(() => {
            this.options = [1, 2, 3, 4, 5, 67, 89, 555];
        }, 6000);
    },
    methods: {
        update() {
            this.options = this.dataSource;
        },
        setType() {
            if (this.pattern === 'big') {
                this.$nextTick(() => {
                    const swiperTop = this.$refs.mySwiperbig.$swiper;
                    const swiperThumbs = this.$refs.swiperThumbs.$swiper;
                    swiperTop.controller.control = swiperThumbs;
                    swiperThumbs.controller.control = swiperTop;
                });
            }
        },
        prev() {
            this.swiperThumbs.slidePrev();
        },
        next() {
            this.swiperThumbs.slideNext();
        },
    },
};
</script>
<style module>
.wrap {
    width: 100%;
    height: 300px;
    overflow: hidden;
}
.wrapbig {
    height: 472px;
    width: 400px;
}
.swiper{
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.swiperslide {
    height: 90.90909090909091%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    background-color: rgb(202, 25, 25);
  }
.swiperbig{
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.swiperslidethumbs {
    width: 60px;
    height: 60px;
}
.swiperslidebig {
    height: 90.90909090909091%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    background-color: rgb(202, 25, 25);
  }
</style>
<style>
    .swiper-for-vusion .swiper-wrapper {
        align-items: center;
    }
    .swiper-for-vusion .swiper-small-wrap .swiper-slide-next {
        transform: scale(1.1,1.1);
    }
    .swiper-for-vusion .swiper-button-prev, .swiper-for-vusion .swiper-button-next {
        color: #ccc;
        width: 39.18px;
        height: 21.84px;
    }
    .swiper-for-vusion .swiper-big-thumb-slide {
        background-size: cover;
        background-position: center;
    }
    .swiper-for-vusion .gallery-top.swiper-big {
      height: 80%;
      width: 100%;
      margin-bottom: 12px;
    }
    .swiper-for-vusion .swiper-big-slide {
        height: 100%;
        width: 100%;
    }
    .swiper-for-vusion .swiper-gallery-thumbs-wrap {
        overflow: hidden;
        padding: 0 36px;
        position: relative;
    }
    .swiper-for-vusion .gallery-thumbs {
      box-sizing: border-box;
    }
    .swiper-for-vusion .gallery-thumbs .swiper-slide {
      width: 60px;
      height: 60px;
      opacity: 0.4;
    }
    .swiper-for-vusion .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
    .swiper-for-vusion .gallery-thumbs .swiper-button-prev, .swiper-for-vusion .gallery-thumbs .swiper-button-next {
        color: #ccc;
        width: 19.59px;
        height: 10.92px;
    }
    .swiper-for-vusion .gallery-thumbs .swiper-button-prev:after, .swiper-for-vusion .gallery-thumbs .swiper-button-next:after {
        font-size: 100%;
    }
    .swiper-thumb-left-arrow, .swiper-thumb-right-arrow {
        color: #ccc;
        font-size: 20px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    .swiper-thumb-left-arrow {
        left: 0;
    }
    .swiper-thumb-right-arrow {
        right: 0;
    }
</style>
