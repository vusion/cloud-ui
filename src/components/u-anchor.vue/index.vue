<template>
    <div
        :id="label || refName"
        :name="label || refName"
        anchor
        vusion-slot-name="default"
    >
        <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
        <slot></slot>
    </div>
</template>

<script>
import SEmpty from '../s-empty.vue';
export default {
    name: 'u-anchor',
    components: { SEmpty },
    data() {
        return {
            refName: { type: String, default: '' },
        };
    },
    props: {
        name: { type: String, default: '' },
        label: { type: String, default: '' },
    },
    mounted() {
        if (this.$vnode) {
            this.refName = this.$vnode && this.$vnode.data && this.$vnode.data.ref;
        }
    },
};
</script>
