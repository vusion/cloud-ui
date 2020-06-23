<template>
<div :class="$style.root">
    <h3 v-if="title" :class="$style.title"></h3>
    <p :class="$style.paragraph" v-for="i in currentParagraph"></p>
</div>
</template>

<script>
export default {
    name: 'u-skeleton',
    props: {
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
</style>
