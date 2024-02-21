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
                procInstStartBy: '张三（示例）',
                procInstStartTime: '2024-01-24 08:00:00',
                procInstEndTime: '2024-01-24 10:00:00',
                procInstStatus: 'approving',
                procInstCurNodes: [
                    {
                        curNodeTitle: '多人审批任务',
                        curNodeParticipants: [
                            'xb1',
                            'xb2',
                        ],
                    },
                    {
                        curNodeTitle: '审批任务1',
                        curNodeParticipants: [
                            'xb1',
                            'xb2',
                        ],
                    },
                ],
            };
        }
    },
};
</script>
