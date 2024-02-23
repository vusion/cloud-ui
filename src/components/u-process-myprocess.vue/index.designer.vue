<template>
    <u-process-myprocess-real v-if="$env.VUE_APP_DESIGNER" ref="myprocess" :initial-load="false"></u-process-myprocess-real>
    <component
        v-else
        is="u-process-myprocess-real"
        v-bind="[$attrs, $props]"
        v-on="$listeners">
    </component>
</template>
<script>
import UProcessMyprocessReal from './index.vue';

export default {
    component: {
        UProcessMyprocessReal,
    },
    mounted() {
        if (this.$refs.myprocess) {
            this.timer = setTimeout(() => {
                this.$refs.myprocess.$refs.tableview.currentDataSource.arrangedData = [
                    {
                        taskId: '3df4ffc2-ba8f-11ee-94b2-aa63f0d148e3',
                        taskBoxTitle: 'x',
                        procInstTitle: '张三申请事件1天',
                        procDefTitle: '会签流程1',
                        procInstStartBy: null,
                        procInstStartTime: '2024-01-24 10:00:00',
                        procInstCurNodes: [
                            {
                                currNodeTitle: '多人审批任务',
                                currNodeParticipants: [
                                    'xb1',
                                    'xb2',
                                ],
                            },
                            {
                                currNodeTitle: '审批任务1',
                                currNodeParticipants: [
                                    'xb3',
                                    'xb4',
                                ],
                            },
                        ],
                    },
                    {
                        taskId: '219ea9dd-ba8f-11ee-a35a-a2041721ddc7',
                        taskBoxTitle: 'x',
                        procInstTitle: '李四申请事件1天',
                        procDefTitle: '会签流程1',
                        procInstStartBy: null,
                        procInstStartTime: '2024-01-24 10:00:00',
                        procInstCurNodes: [
                            {
                                currNodeTitle: '多人审批任务',
                                currNodeParticipants: [
                                    'xb1',
                                    'xb2',
                                ],
                            },
                            {
                                currNodeTitle: '审批任务1',
                                currNodeParticipants: [
                                    'xb3',
                                    'xb4',
                                ],
                            },
                        ],
                    },
                    {
                        taskId: '219ea9dd-ba8f-11ee-a35a-a2041721ddc7',
                        taskBoxTitle: 'x',
                        procInstTitle: '张三申请事件1天',
                        procDefTitle: '会签流程1',
                        procInstStartBy: null,
                        procInstStartTime: '2024-01-24 10:00:00',
                        procInstCurNodes: [
                            {
                                currNodeTitle: '多人审批任务',
                                currNodeParticipants: [
                                    'xb1',
                                    'xb2',
                                ],
                            },
                            {
                                currNodeTitle: '审批任务1',
                                currNodeParticipants: [
                                    'xb3',
                                    'xb4',
                                ],
                            },
                        ],
                    },
                ];
                clearTimeout(this.timer);
            });
        }
    },
};
</script>
