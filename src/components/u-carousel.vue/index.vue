<template>
<div :class="$style.root">
    <div :class="$style.body" name="realpostion">
        <slot></slot>
        <u-carousel-item
            v-for="(item, index) in currentDataSource"
            :key="index"
        >
            <u-image style="width: 100%; height: 100%" fit="cover"
                     :src="$at(item, imgField)">
            </u-image>
        </u-carousel-item>

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
import UCarouselItem from '../u-carousel.vue/item.vue';

export default {
    name: 'u-carousel',
    childName: 'u-carousel-item',
    components: { UCarouselItem },
    extends: MSinglex,
    props: {
        autoSelect: { type: Boolean, default: true },
        value: null,
        dataSource: [Array, Object, Function],
        dataSchema: {type: String, default: 'entity'},
        imgField: String,
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
        return {
            animating: true,
            currentDataSource: undefined,
        };
    },
    watch: {
        async dataSource(dataSource, oldDataSource) {
            await this.handleData();
        },
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
        this.handleData();
    },
    mounted() {
        this.play();
    },
    destroyed() {
        clearTimeout(this.timer);
    },
    methods: {
        async handleData() {
            this.currentDataSource = await this.normalizeDataSource(this.dataSource);
        },
        async normalizeDataSource(dataSource) {
            if (!dataSource) {
                return [];
            }
            if (dataSource instanceof Promise || typeof dataSource === 'function') {
                return await dataSource();
            }
            return dataSource;
        },

        prev() {
            clearTimeout(this.timer);
            const length = this.itemVMs.length;
            this.selectedIndex = (this.selectedIndex - 1 + length) % length;
            this.play();
        },
        next() {
            clearTimeout(this.timer);
            const length = this.itemVMs.length;
            const index = this.selectedIndex + 1;

            if (!this.loop && index >= length)
                return;
            this.selectedIndex = index % length;

            this.play();
        },
        play() {
            // 可视化的展示去掉动态播放
            if (this.$env.VUE_APP_DESIGNER) {
                clearTimeout(this.timer);
                return;
            }
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
    margin-right: 4px;
    background: var(--carousel-nav-item-background);
    background-clip: content-box;
}

.nav-item:hover {
    background: var(--carousel-nav-item-background-hover);
}

.nav-item[selected] {
    width: 20px;
    background: var(--carousel-nav-item-background-hover);
}

.button {
    position: absolute;
    z-index: 100;
    font-size: var(--carousel-button-font-size);
    font-weight: var(--font-weight-bold);
    color: var(--carousel-button-color);
    transition: var(--carousel-button-transition);
    top: 50%;
    transform: translateY(calc(-50%));
    display: none;
}
.root:hover .button {
    display: block;
}
.button:hover {
    color: var(--carousel-button-color-hover);
    background: var(--carousel-button-background-hover);
}

.button[role='prev'], .button[role='next']{
    width: calc(var(--carousel-button-font-size)*2);
    height: calc(var(--carousel-button-font-size)*2);
    border-radius: var(--carousel-button-font-size);
    background: var(--carousel-button-background);
}

.button[role='prev'] {
    left: var(--carousel-button-space);
}

.button[role='prev']::before {
    icon-font: url("./assets/prev.svg");
    position: absolute;
    height: var(--carousel-button-font-size);
    top: 36%;
    left: 48%;
    transform: translate(-50%, -50%);
}

.button[role='next'] {
    right: var(--carousel-button-space);
}

.button[role='next']::before {
    icon-font: url("./assets/next.svg");
    position: absolute;
    height: var(--carousel-button-font-size);
    top: 36%;
    left: 52%;
    transform: translate(-50%, -50%);
}
</style>
