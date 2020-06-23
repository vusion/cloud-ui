<template>
<transition :name="animation">
    <div :class="$style.root"
        v-show="!!selected"
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
                return this.parentVM.router
                    ? this.active
                    : this.parentVM.selectedVM === this;
        },
    },
    methods: {
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
