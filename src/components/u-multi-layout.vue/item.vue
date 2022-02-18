<template>
<div :class="$style.root" v-on="$listeners" vusion-slot-name="default">
    <slot></slot>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
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
        direction: {
            type: String,
            default: 'horizontal',
        },
    },
};
</script>

<style module>
.root {
    display: flex;
}
</style>