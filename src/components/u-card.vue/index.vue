<template>
<div :class="$style.root" v-on="$listeners" :shadow="shadow" :border="border" :style="{width: /^\d+$/.test(width)? width+'px': width}" :designer="$env.VUE_APP_DESIGNER">
    <div :class="$style.head">
        <slot name="head">
            <div v-if="title" :class="$style.title" vusion-slot-name="title">
                <slot name="title">{{ title }}</slot>
            </div>
            <a :class="$style.close" @click="cancel()"></a>
            <div :class="$style.extra">
                <slot name="extra"></slot>
            </div>
        </slot>
    </div>
    <div :class="$style.body" vusion-slot-name="default">
        <slot>{{ content }}</slot>
        <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER" :class="$style.empty"></s-empty>
    </div>
    <div :class="$style.foot">
        <slot name="foot">
        </slot>
    </div>
</div>
</template>

<script>
import SEmpty from '../s-empty.vue';
export default {
    name: 'u-card',
    components: {
        SEmpty,
    },
    props: {
        title: { type: String, default: '提示' },
        content: String,
        shadow: { type: String, default: 'always' },
        border: { type: Boolean, default: true },
        width: { type: [String, Number], default: '' },
    },
};
</script>

<style module>
.root {
    border-radius: var(--card-border-radius);
    background: var(--card-background);
    /* box-shadow: 0px 2px 10px rgba(64, 69, 78, 0.05); */
    /* border: var(--card-border-width) solid var(--border-color-light); */
    transition: box-shadow var(--transition-duration-base);
    overflow: hidden;
}

/* .root:hover {
    box-shadow: var(--card-box-shadow);
} */

.root[shadow='always']{
    box-shadow: var(--card-box-shadow);
}

.root[shadow='hover']:hover{
    box-shadow: var(--card-box-shadow);
}

.root[border]{
    border: var(--card-border-width) solid var(--border-color-light);
}

.root[designer]{
    word-break: break-all;
    white-space: normal;
}
.root[designer] [s-empty="true"]{
    min-width: inherit;
}

.head {
    position: relative;
    padding: var(--card-head-padding-y) var(--card-head-padding-x);
    padding-bottom: 0;
}

.title {
    margin: 0;
    font-size: var(--card-title-font-size);
    font-weight: var(--card-title-font-weight);
}

.extra {
    position: absolute;
    right: var(--card-head-padding-x);
    top: var(--card-head-padding-y);
}

.body {
    clear: both;
    padding: var(--card-body-padding-y) var(--card-body-padding-x);
}
</style>
