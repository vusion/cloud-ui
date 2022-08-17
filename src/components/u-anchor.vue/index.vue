<template>
<div :class="$style.root">
        <div
            :class="$style.link"
            :id="label"
            anchor
        >
            <span v-show="showAnchor" :class="$style.anchor">#{{labelName}}</span>
            <u-linear-layout direction="horizontal"></u-linear-layout>
        </div>
    <slot></slot>
</div>
</template>

<script>
import ULinearLayout from '@/components/u-linear-layout.vue';
export default {
    name: 'u-anchor',
    components: { ULinearLayout },
    props: {
        name: {type: String, default: ''},
        label: { type: String, default: '' },
        // ref: { type: String, default: '' },
        labelName: { type: String, default: '锚点' },
        showAnchor: { type: Boolean, default: true },
    },
    mounted() {
        console.log('attrs', this.$attrs);
    },
    computed: {
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
