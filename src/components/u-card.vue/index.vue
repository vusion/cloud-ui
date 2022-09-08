<template>
<div :class="$style.root" v-on="$listeners" :shadow="shadow" :border="border" :split="split"
    :style="{width: /^\d+$/.test(width)? width+'px': width}" :designer="$env.VUE_APP_DESIGNER">
    <f-scroll-view :class="$style.scrollview">
        <div :class="$style.cover" vusion-slot-name="cover">
            <slot name="cover"></slot>
            <s-empty v-if="coverSlot && (!$slots.cover) && !!$attrs['vusion-node-path']"></s-empty>
        </div>
        <div :class="$style.head">
            <slot name="head">
                <div v-if="title" :class="$style.title" vusion-slot-name="title" vusion-slot-name-edit="title">
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
            <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
        </div>
        <div :class="$style.foot">
            <slot name="foot">
            </slot>
        </div>
    </f-scroll-view>
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
        title: String,
        content: String,
        shadow: { type: String, default: 'always' },
        border: { type: Boolean, default: true },
        split: { type: Boolean, default: false },
        width: { type: [String, Number], default: '' },
        // 控制模板占位插槽的显示
        coverSlot: { type: Boolean, default: false },
    },
};
</script>

<style module>
.root {
    border-radius: var(--card-border-radius);
    background: var(--card-background);
    overflow: hidden;
}

.root[shadow="always"] {
    box-shadow: var(--card-box-shadow);
}

.root[shadow="hover"]:hover {
    box-shadow: var(--card-box-shadow-hover);
}

.root[shadow="always"],
.root[shadow="hover"] {
    transition: box-shadow var(--transition-duration-base);
}

.root[shadow="never"] {
    box-shadow: none;
}

.root[split] .head {
    border-bottom: var(--card-border-width) solid var(--border-color-base);
    padding-bottom: var(--card-head-padding-y);
}

.root[border] {
    border: var(--card-border-width) solid var(--border-color-base);
}

.root[designer] {
    word-break: break-all;
    white-space: normal;
}
.root[designer] [s-empty="true"] {
    min-width: inherit;
}

.cover {
    padding: 0;
}

.cover > * {
    vertical-align: middle;
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
.scrollview {
    height: 100%;
}
</style>
