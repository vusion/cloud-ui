<template>
<div :class="$style.root" :style="style" :fixed="String(fixed)" v-on="$listeners" vusion-slot-name="default">
    <slot></slot>
    <s-empty v-if="canEmpty"></s-empty>
</div>
</template>

<script>
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-multi-layout-item',
    components: {
        SEmpty,
    },
    props: {
        fixed: {
            type: Boolean,
            default: false,
        },
        'justify-content': {
            type: String,
            default: 'flex-start',
        },
        'align-items': {
            type: String,
            default: 'flex-start',
        },
    },
    computed: {
        canEmpty() {
            return (!this.$slots.default) && this.$env.VUE_APP_DESIGNER;
        },
        style() {
            const {alignItems, justifyContent} = this;
            return {
                alignItems,
                justifyContent,
            }
        }
    }
};
</script>

<style module>
.root {
    display: flex;
    flex: 1;
    flex-basis: auto;
}
.root[fixed="true"] {
    position: fixed;
    overflow: auto;
}
</style>