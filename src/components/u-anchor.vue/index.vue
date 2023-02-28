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
    props: {
        name: { type: String, default: '' },
        label: { type: String, default: '' },
    },
    data() {
        return {
            refName: { type: String, default: '' },
        };
    },
    mounted() {
        if (this.$vnode) {
            this.refName = this.$vnode && this.$vnode.data && this.$vnode.data.ref;
        }
        const { hash } = location;
        const id = this.label || this.refName;
        if (hash && id && hash === `#${id}`) {
            this.$nextTick(() => {
                const node = document.querySelector(hash);
                if (node) {
                    node.scrollIntoView();
                }
            });
        }
    },
};
</script>
