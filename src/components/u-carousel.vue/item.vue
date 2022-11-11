<template>
<transition :name="animation">
    <div :class="$style.root"
        v-show="!!selected"
        :animation="animation">
        <div :class="$style.body">
            <slot></slot>
            <span vusion-slot-name="item">
                <slot name="item" :item="node"></slot>
                <s-empty v-if="!$slots.item && $env.VUE_APP_DESIGNER && ($attrs['vusion-node-path'] || $attrs.designer)" :class="$style.empty"></s-empty>
            </span>
        </div>
    </div>
</transition>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-carousel-item',
    parentName: 'u-carousel',
    extends: MSinglexItem,
    props: { 
        title: String,
        node: Object, 
    },
    components: {
        SEmpty,
    },
    computed: {
        animation() {
            return this.parentVM && this.parentVM.animation;
        },
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
            else
                return undefined;
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

.empty:not(:only-child){
    display: none;
}
.root .empty:after {
    font-size: 60px
}
.root[dataSource][designer] .body {
    overflow: auto;
}
</style>
