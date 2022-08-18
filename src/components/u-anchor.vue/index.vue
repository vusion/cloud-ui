<template>
<div :class="$style.root">
        <div
            :class="$style.link"
            :id="label || componentName"
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
        name: {type: String, default: ''},
        label: { type: String, default: '' },
    },
    mounted() {
    },
    computed: {
        // 获取组件名称
        componentName() {
            if (this.$attrs['vusion-node-path']) {
                return this.$attrs['vusion-node-path'].split('.').pop().split('=').pop().slice(0, -1);
            }
        },

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
    display: block;
}

</style>
