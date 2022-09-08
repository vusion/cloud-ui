<template>
    <div :class="$style.root">
        <div
            :class="$style.link"
            :id="label || refName"
            anchor
        >
            <div :class="$style.sub" vusion-slot-name="default">
                <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import SEmpty from '@/components/s-empty.vue';
export default {
    name: 'u-anchor',
    components: { SEmpty },
    props: {
        name: { type: String, default: '' },
        label: { type: String, default: '' },
        refName: { type: String, default: '' },
    },
    mounted() {
        if (this.$vnode) {
            this.refName = this.$vnode && this.$vnode.data && this.$vnode.data.ref;
        }
    },
};
</script>

<style module>
.root {
    display: block;
}

</style>
