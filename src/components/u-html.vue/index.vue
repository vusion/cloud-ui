<template>
<div :class="$style.root" v-html="content">
</div>
</template>

<script>
import DOMPurify from 'dompurify';
export default {
    name: 'u-html',
    props: {
        html: {
            type: String,
            default: '',
        },
        security: {
            type: Boolean,
            default: true,
        },
        options: {
            type: Object,
            default: () => ({
                ADD_ATTR: ['target'],
            }),
        },
    },
    computed: {
        content() {
            return this.security ? DOMPurify.sanitize(this.html, this.options) : this.html;
        },
    },
};
</script>

<style module >
.root {

}
</style>
