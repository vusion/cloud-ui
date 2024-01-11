<template>
    <u-process-myprocess-real v-if="$env.VUE_APP_DESIGNER" ref="myprocess"></u-process-myprocess-real>
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
                        taskId: '2759bf13-9fd4-11ee-8735-8a36b3181f25',
                        currentNode: '审批任务',
                        processTitle: '流程1',
                        currentAssignee: '章三',
                        currentCandidateUsers: [],
                        startBy: '张三',
                        createTime: '2023-12-21T07:40:04.000Z',
                    },
                    {
                        taskId: '275c0907-9fd4-11ee-8735-8a36b3181f25',
                        currentNode: '审批任务',
                        processTitle: '流程1',
                        currentAssignee: '章三',
                        currentCandidateUsers: [
                            'xb1',
                            'zzz zz',
                            'yyy yy',
                            'xxx xx',
                        ],
                        startBy: '张三',
                        createTime: '2023-12-21T07:40:04.000Z',
                    },
                    {
                        taskId: '2759bf13-9fd4-11ee-8735-8a36b3181f25',
                        currentNode: '审批任务',
                        processTitle: '流程1',
                        currentAssignee: '章三',
                        currentCandidateUsers: [],
                        startBy: '张三',
                        createTime: '2023-12-21T07:40:04.000Z',
                    },
                ];
                clearTimeout(this.timer);
            });
        }
    },
};
</script>
