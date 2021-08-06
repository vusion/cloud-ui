<template>
<transition :name="animation">
    <div v-if="$env.VUE_APP_DESIGNER && !$slots.default" :class="$style.emptyImage">
    </div>
    <div :class="$style.root"
        v-show="!!selected"
        v-else
        :animation="animation">
        <div :class="$style.body"><slot></slot></div>
    </div>
</transition>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';

export default {
    name: 'u-carousel-item',
    parentName: 'u-carousel',
    extends: MSinglexItem,
    props: { title: String },
    computed: {
        animation() {
            return this.parentVM && this.parentVM.animation;
        },
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        },
    },
    methods: {
        designerControl() {
            this.parentVM.select(this);
        },
        onAnimationStart() {
            this.parentVM.animating = true;
        },
        onAnimationEnd() {
            this.parentVM.animating = false;
        },
    },
};
</script>

<style module>
.root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* display: none; */
}

.emptyImage {
    background-image: url('./assets/carouselItem.svg');  
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
}

.body {
    width: 100%;
    height: 100%;
}

.body > * {
    width: 100%;
    height: 100%;
}

/* .root[selected] {
    display: block;
} */

/* .root[animation="fade"] {
    display: block;
    transition: all 0.5s ease-out;
    opacity: 0;
}

.root[selcted][animation="fade"] {
    opacity: 1;
} */
</style>
