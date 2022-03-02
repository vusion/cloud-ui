<template>
<div :class="$style.root" :style="style" :direction="direction" :fixed="String(fixed)" v-on="$listeners" vusion-slot-name="default" ref="item">
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
        direction: {
            type: String,
            default: 'horizontal',
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
            attributes: true, childList: true, subtree: true
        });
        setTimeout(() => {
            this.pwh();
        }, 100);
    },
    destroyed() {
        this.observerwh && this.observerwh.disconnect();
    },
    methods: {
        pwh(mutationsList, observer) {
            const dom = this.$refs.item;
            const ifO1 = (dom.scrollWidth > dom.offsetWidth);
            const ifO2 = (dom.scrollHeight > dom.offsetHeight);
            const ifO = (ifO1 || ifO2);
            const ifwh = dom && (dom.style.height || dom.style.width);
            if (ifwh) {
                dom.style.flexGrow = 0;
                dom.style.flexBasis = 'auto';
            } else {
                dom.style.flexGrow = 1;
                dom.style.flexBasis = 0;
            }
            if (ifO) {
                dom.style.overflow = 'auto';
            } else {
                dom.style.overflow = 'unset';
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
    box-sizing: border-box;
    flex-direction: row;
}
.root[fixed="true"] {
    position: absolute;
    height: 100%;
}
.root [class^="s-empty_empty"] {
    height: 100%;
}
.root > [class^="u-multi-layout__"][direction=horizontal] {
    height: 100%;
}
.root[direction="horizontal"] {
    flex-direction: row;
    min-width: 0;
}
.root[direction="vertical"] {
    flex-direction: column;
    min-height: 0;
}
.root > [class^="u-router-view_"] {
    width: 100%;
}
</style>