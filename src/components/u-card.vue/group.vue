<template>
<div :class="$style.root">
    <div :class="$style.head" v-if="title">
        {{ title }}
    </div>
    <div :class="$style.body">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-card-group',
    props: {
        title: String,
    },
};
</script>

<style module>
.root {

}

.root:not(:last-child) {
    margin-bottom: var(--space-base);
}

.head {
    font-weight: bold;
    border-top: 1px solid var(--border-color-base);
    margin-left: calc(var(--card-head-padding-x) * (-1));
    margin-right: calc(var(--card-head-padding-x) * (-1));
    padding: var(--card-head-padding-y) var(--card-head-padding-x);
    color: var(--color-light);
}

.body {
    /* padding-bottom: var(--); */
}
</style>
