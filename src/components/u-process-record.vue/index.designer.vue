<template>
    <u-process-record-real v-if="$env.VUE_APP_DESIGNER" ref="info" :type="type"></u-process-record-real>
    <component
        v-else
        is="u-process-record-real"
        v-bind="[$attrs, $props]"
        v-on="$listeners">
    </component>
</template>
<script>
import UProcessRecordReal from './index.vue';

export default {
    component: {
        UProcessRecordReal,
    },
    props: {
        type: {
            type: String,
            default: 'table',
        },
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
