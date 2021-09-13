<template>
<div :class="$style.root">
    <div :class="$style.head">
        <slot name="head">
            <div v-if="title" :class="$style.title">
                <slot name="title">{{ title }}</slot>
            </div>
            <a :class="$style.close" @click="cancel()"></a>
            <div :class="$style.extra">
                <slot name="extra"></slot>
            </div>
        </slot>
    </div>
    <div :class="$style.body">
        <slot>{{ content }}</slot>
    </div>
    <div :class="$style.foot">
        <slot name="foot">
        </slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-card',
    props: {
        title: { type: String, default: '提示' },
        content: String,
    },
};
</script>

<style module>
.root {
    border-radius: var(--card-border-radius);
    background: var(--card-background);
    box-shadow: 0px 2px 10px rgba(64, 69, 78, 0.05);
    border: var(--card-border-width) solid var(--border-color-light);
    transition: box-shadow var(--transition-duration-base);
}

.root:hover {
    box-shadow: var(--card-box-shadow);
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
