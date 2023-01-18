<template>
<div :class="$style.root" :direction="direction" :fixed="String(fixed)" :fixdirec="String(fixdirec)" v-on="$listeners" vusion-slot-name="default" ref="item">
    <slot></slot>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
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
        fixdirec: {
            type: String,
            default: 'left',
        },
        direction: {
            type: String,
            default: 'horizontal',
        },
    },
    data() {
        return {
            observerwh: null,
        };
    },
    computed: {
    },
    mounted() {
        this.observerwh = new MutationObserver(this.pwh);
        this.observerwh.observe(this.$refs.item, {
            attributes: true, childList: true, subtree: true,
        });
        this.pwh();
    },
    destroyed() {
        this.observerwh && this.observerwh.disconnect();
    },
    methods: {
        pwh(mutationsList, observer) {
            const dom = this.$refs.item;
            const ifw = dom && (dom.style.width);
            const ifh = dom && (dom.style.height);
            const direction = this.$parent.direction;

            if ((ifw && direction === 'horizontal') || (ifh && direction === 'vertical')) {
                dom.style.flexGrow = 0;
                dom.style.flexBasis = 'auto';
            } else {
                dom.style.flexGrow = 1;
                dom.style.flexBasis = 0;
            }
        },
    },
};
</script>

<style module>
.root {
    flex: 1;
    box-sizing: border-box;
    min-width: 0;
}
.root[fixed="true"] {
    position: absolute;
    height: 100%;
    overflow-y: auto;
}
.root[fixed="true"][fixdirec="left"] {
    left: 0;
    top:0;
}
.root[fixed="true"][fixdirec="right"] {
    right: 0;
    top:0;
}
.root > [class^="s-empty_empty"] {
    height: 100%;
}
/* 默认为 block */
.root[display="inline"], .root[inline] {
    display: inline-block;
}

/* @trap: 不能自动添加`display: block`了，因为`display`有好多种如`table``flex``grid`，有覆盖掉的风险。
 * 用一个属性来添加是否使用`block`
 */
.root[layout="block"] > * {
    display: block;
}
.root[layout="inline"] > * {
    display: inline-block;
}

.root[direction="horizontal"] > *:not(:last-child) {
    margin-right: var(--space-base);
}
.root[direction="horizontal"][fixed] > *:not(:last-child) {
    margin-right: 0;
}
.root[direction="horizontal"] > *:not(:last-child) {
    margin-right: var(--space-base);
}
.root[direction="vertical"] > *:not(:last-child) {
    margin-bottom: var(--space-base);
}
.root[direction="horizontal"][gap="normal"] > *:not(:last-child) {
    margin-right: var(--space-base);
}
.root[direction="vertical"][gap="normal"] > *:not(:last-child) {
    margin-bottom: var(--space-base);
}
.root[direction="horizontal"][gap="shrink"] > *:not(:last-child) {
    margin-right: var(--space-shrink);
}
.root[direction="vertical"][gap="shrink"] > *:not(:last-child) {
    margin-bottom: var(--space-shrink);
}
.root[direction="horizontal"][gap="shrink"] > *:hover {
    position: relative;
}

.root[direction="horizontal"][gap="none"] > *:not(:last-child) {
    margin-right: 0;
}
.root[direction="vertical"][gap="none"] > *:not(:last-child) {
    margin-bottom: 0;
}

.root[direction="horizontal"][gap="mini"] > *:not(:last-child) {
    margin-right: var(--space-mini);
}
.root[direction="vertical"][gap="mini"] > *:not(:last-child) {
    margin-bottom: var(--space-mini);
}

.root[direction="horizontal"][gap="small"] > *:not(:last-child) {
    margin-right: var(--space-small);
}
.root[direction="vertical"][gap="small"] > *:not(:last-child) {
    margin-bottom: var(--space-small);
}

.root[direction="horizontal"][gap="large"] > *:not(:last-child) {
    margin-right: var(--space-large);
}
.root[direction="vertical"][gap="large"] > *:not(:last-child) {
    margin-bottom: var(--space-large);
}

/* @deprecated */
.root[alignment="left"] { text-align: left; }
.root[alignment="center"] { text-align: center; }
.root[alignment="right"] { text-align: right; }

/* @TRAP: 使用 text-align 可能会造成使用子元素的默认对齐方式不是左对齐 */
.root[justify="start"] { text-align: left; }
.root[justify="center"] { text-align: center; }
.root[justify="end"] { text-align: right; }
.root[justify="space-between"] > *:first-child { float: left; }
.root[justify="space-between"] > *:last-child { float: right; }
/* stylelint-disable-next-line declaration-block-single-line-max-declarations */
.root[justify="space-between"]::after { display: block; content: ''; clear: both; }

.root[mode="flex"] { display: flex; text-align: inherit; }

.root[mode="flex"][direction="vertical"] { flex-direction: column; }

.root[mode="flex"][justify="start"] { justify-content: flex-start; }
.root[mode="flex"][justify="center"] { justify-content: center; }
.root[mode="flex"][justify="end"] { justify-content: flex-end; }
.root[mode="flex"][justify="space-between"] { justify-content: space-between; }
.root[mode="flex"][justify="space-between"]::after { display: none; }
.root[mode="flex"][justify="space-around"] { justify-content: space-around; }

.root[mode="flex"][alignment="start"] { align-items: flex-start; }
.root[mode="flex"][alignment="center"] { align-items: center; }
.root[mode="flex"][alignment="end"] { align-items: flex-end; }
.root[mode="flex"][alignment="baseline"] { align-items: baseline; }
.root[mode="flex"][alignment="stretch"] { align-items: stretch; }
</style>
