<template>
<div :class="$style.root" :type="type">
    <template v-if="type === 'paragraph'">
        <h3 v-if="title" :class="$style.title"></h3>
        <p :class="$style.paragraph" v-for="i in currentParagraph" :key="i"></p>
    </template>
</div>
</template>

<script>
export default {
    name: 'u-skeleton',
    props: {
        type: { type: String, default: 'paragraph' },
        title: { type: Boolean, default: true },
        paragraph: { type: [Boolean, Number], default: true },
    },
    computed: {
        currentParagraph() {
            if (this.paragraph === true)
                return 3;
            else if (this.paragraph === false)
                return 0;
            else
                return this.paragraph;
        },
    },
};
</script>

<style module>
.root {}

.title {
    margin: 0;
    width: var(--skeleton-title-width);
    height: 1em;
    background: var(--skeleton-background);
}

.paragraph {
    margin: 0;
    height: 1em;
    background: var(--skeleton-background);
}

.paragraph:last-child {
    width: var(--skeleton-paragraph-width);
}

* + .paragraph {
    margin-top: 1em;
}

.root[type="image"] {
    position: relative;
    background: var(--skeleton-background);
    padding-bottom: 56.25%;
}

.root[type="image"]::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    icon-font: url('i-material-design.vue/assets/filled/photo_size_select_actual.svg');
    font-size: 36px;
    color: var(--brand-disabled);
}
</style>
