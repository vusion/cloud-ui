<template>
    <u-process-info-real v-if="$env.VUE_APP_DESIGNER" ref="info"></u-process-info-real>
    <component
        v-else
        is="u-process-info-real"
        v-bind="[$attrs, $props]"
        v-on="$listeners">
    </component>
</template>
<script>
import UProcessInfoReal from './index.vue';

export default {
    component: {
        UProcessInfoReal,
    },
    mounted() {
        if (this.$refs.info) {
            this.$refs.info.detail = {
                startBy: '张三（示例）',
                processStartTime: '2020-01-01 12:00:00（示例）',
                finished: '进行中（示例）',
                currentNodes: '节点1（示例）',
                currentCandidateUsers: '张三, 李四（示例）',
            };
        }
    },
};
</script>
