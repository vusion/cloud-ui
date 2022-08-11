<template>
<div :class="$style.root">
        <a :class="$style.link" :href="label" target="_self">
            <span v-show="showAnchor" :class="$style.anchor">#</span>
            {{labelName}}
        </a>

    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'u-anchor',
    props: {
        label: { type: String, default: '' },
        labelName: { type: String, default: '锚点' },
        showAnchor: { type: Boolean, default: true },
    },
    data() {
        return {

        }
    },
    methods: {

    },
};
</script>

<style module>
.root {
    display: inline-block;
}

.anchor {

}
</style>
