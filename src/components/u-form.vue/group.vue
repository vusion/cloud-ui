<template>
    <div :class="$style.root">
        <div :class="$style.head">
            <div :class="$style.title"><slot name="title">{{ title }}</slot></div>
            <div :class="$style.extra"><slot name="extra"></slot></div>
        </div>
        <div :class="$style.body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'u-form-group',
    props: {
        title: String,
    }
}
</script>

<style module>
.root:not(:last-child) {
    margin-bottom: var(--form-group-space);
}

.head {
    padding: var(--form-group-head-padding);
    margin: 0;
    line-height: var(--form-group-head-line-height);
    color: var(--form-group-head-color);
    background: var(--form-group-head-background);
    border-bottom: var(--form-group-head-border-width) solid var(--form-group-head-border-color);
}

.head::after {
    content: '';
    clear: both;
}

.title {
    display: inline-block;
}

.extra {
    float: right;
}

.body {
    padding: var(--form-group-body-padding-y) 0;
}

.root[appear="header"] .body {
    padding: 0;
}
</style>