<template>
    <u-linear-layout v-if="$env.VUE_APP_DESIGNER" mode="inline">
        <u-button color="primary">提交</u-button>
        <u-button color="primary">同意</u-button>
        <u-button>不同意</u-button>
        <u-button>回退</u-button>
        <u-button>转交</u-button>
    </u-linear-layout>
    <component
        v-else
        is="u-process-button-real"
        v-bind="[$attrs, $props]"
        v-on="$listeners">
    </component>
</template>
<script>
import UProcessButtonReal from './index.vue';

export default {
    component: {
        UProcessButtonReal,
    },
};
</script>
