<template>
<div :class="$style.root" :style="style" :fixed="String(fixed)" v-on="$listeners" vusion-slot-name="default" ref="item">
    <slot></slot>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
</div>
</template>

<script>
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-multi-layout-item',
    components: {
        SEmpty,
    },
    props: {
        fixed: {
            type: Boolean,
            default: false,
        },
        'justify-content': {
            type: String,
            default: 'flex-start',
        },
        'align-items': {
            type: String,
            default: 'flex-start',
        },
    },
    data() {
        return {
            observerwh: null,
        }
    },
    mounted() {
        this.observerwh = new MutationObserver(this.pwh);
        this.observerwh.observe(this.$refs.item, {
            attributes: true,
        });
        this.pwh();
    },
    destroyed() {
        this.observerwh && this.observerwh.disconnect();
    },
    methods: {
        pwh(mutationsList, observer) {
            console.log(mutationsList);
            console.log(observer);
            const dom = this.$refs.item;
            const ifwh = dom && (dom.style.height || dom.style.width);
            if (ifwh) {
                dom.style.flexGrow = 0;
            }
        },
    },
    computed: {
        style() {
            const {alignItems, justifyContent} = this;
            return {
                alignItems,
                justifyContent,
            }
        }
    }
};
</script>

<style module>
.root {
    display: flex;
    flex: 1;
    flex-basis: auto;
    flex-direction: row;
    overflow: auto;
}
.root[fixed="true"] {
    position: fixed;
    overflow: auto;
}
.root [class^="s-empty_empty"] {
    height: 100%;
}
</style>