<template>
<div :class="$style.root">
    <div v-if="$env.VUE_APP_DESIGNER && !$slots.default" :class="$style.emptyBackground">
    </div>
    <div :class="$style.body" name="realpostion" v-else>
        <slot></slot>
    </div>
    <nav :class="$style.nav" v-if="$env.VUE_APP_DESIGNER">
        <a :class="$style['nav-item']"
            v-for="(itemVM, index) in itemVMs"
            :title="itemVM.title"
            :vusion-index="index"
            findname="realpostion"
            :selected="router ? itemVM.active : itemVM === selectedVM"
            @click="select(itemVM)">
        </a>
    </nav>
    <nav :class="$style.nav" v-else>
        <a :class="$style['nav-item']"
            v-for="itemVM in itemVMs"
            :title="itemVM.title"
            :selected="router ? itemVM.active : itemVM === selectedVM"
            @click="select(itemVM)">
        </a>
    </nav>
    <div v-show="!hideButtons && !(!loop && selectedIndex === 0)" :class="$style.button" findname="realpostion" :vusion-index="selectedIndex" role="prev" @click="prev()"></div>
    <div v-show="!hideButtons && !(!loop && selectedIndex === itemVMs.length - 1)" :class="$style.button"  findname="realpostion" :vusion-index="selectedIndex" role="next" @click="next()"></div>
</div>
</template>

<script>
import { MSinglex } from '../m-singlex.vue';

export default {
    name: 'u-carousel',
    childName: 'u-carousel-item',
    extends: MSinglex,
    props: {
        autoSelect: { type: Boolean, default: true },
        value: null,
        autoplay: { type: Boolean, default: true }, // Same with <video>
        loop: { type: Boolean, default: true },
        interval: {
            type: Number,
            default: 4000,
            validator: (value) => Number.isInteger(value) && value >= 0,
        },
        direction: { type: String, default: 'right' },
        animation: String, // duration: { type: Number, default: 1000, validator: (value) => Number.isInteger(value) && value >= 0 },
        router: { type: Boolean, default: false },
        hideButtons: { type: Boolean, default: false },
    },
    data() {
        return { animating: true };
    },
    computed: {
        selectedIndex: {
            get() {
                return this.itemVMs.indexOf(this.selectedVM);
            },
            set(index) {
                this.selectedVM = this.itemVMs[index];
            },
        },
    },
    created() {
        this.$on('select', ($event) => {
            clearTimeout(this.timer);
            this.router && $event.itemVM.navigate();
            this.play();
        });
    },
    mounted() {
        this.play();
    },
    destroyed() {
        clearTimeout(this.timer);
    },
    methods: {
        prev() {
            clearTimeout(this.timer);
            const length = this.itemVMs.length;
            this.selectedIndex = (this.selectedIndex - 1 + length) % length;
             // 可视化的展示去掉动态播放
            if (this.$env.VUE_APP_DESIGNER) {
                return;
            }
            this.play();
        },
        next() {
            clearTimeout(this.timer);
            const length = this.itemVMs.length;
            const index = this.selectedIndex + 1;
           
            if (!this.loop && index >= length)
                return;
            this.selectedIndex = index % length;
             // 可视化的展示去掉动态播放
            if (this.$env.VUE_APP_DESIGNER) {
                return;
            }
            this.play();
        },
        play() {
            if (!this.autoplay)
                return;
            this.timer = setTimeout(() => {
                this.next();
            }, this.interval);
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: var(--carousel-width);
    height: var(--carousel-height);
}

.emptyBackground {
    background-image: url('./assets/carousel.svg');  
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
}

.body {
    width: 100%;
    height: 100%;
}

.nav {
    position: absolute;
    z-index: 100;
    width: 100%;
    left: 0;
    right: 0;
    bottom: var(--carousel-nav-bottom);
    text-align: center;
}

.nav-item {
    display: inline-block;
    cursor: var(--cursor-pointer);
    box-sizing: content-box;
    width: var(--carousel-nav-item-width);
    height: var(--carousel-nav-item-height);
    padding: var(--carousel-nav-item-padding);
    background: var(--carousel-nav-item-background);
    background-clip: content-box;
}

.nav-item:hover {
    background: var(--carousel-nav-item-background-hover);
}

.nav-item[selected] {
    background: var(--carousel-nav-item-background-hover);
}

.button {
    position: absolute;
    z-index: 100;
    font-size: var(--carousel-button-font-size);
    font-weight: var(--font-weight-bold);
    color: var(--carousel-button-color);
    transition: var(--carousel-button-transition);
    top: 36%;
    display: none;
}
.root:hover .button {
    display: block;
}
.button:hover {
    color: var(--carousel-button-color-hover);
}

.button[role='prev'] {
    left: var(--carousel-button-space);
}

.button[role='prev']::before {
    content: '\27e8';
}

.button[role='next'] {
    right: var(--carousel-button-space);
}

.button[role='next']::before {
    content: '\27e9';
}
</style>
