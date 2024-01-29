<template>
    <div :class="$style.root">
        <template v-if="type === 'timeline'">
            <u-timeline :data-source="list">
                <template #item="current">
                    <u-timeline-item>
                        <div>{{ current.item.type }}</div>
                        <div>处理人：{{ current.item.startBy || '-' }}</div>
                        <div>处理时间：{{ current.item.startBy || '-' }}</div>
                        <div>审批结果：{{ current.item.startBy || '-' }}</div>
                        <div>审批意见：{{ current.item.startBy || '-' }}</div>
                    </u-timeline-item>
                </template>
            </u-timeline>
            <u-link v-if="hasMore">加载更多</u-link>
        </template>
        <template v-else>
            <u-table-view :data-source="load" ref="tableview" :page-size="20" :page-number="1" pagination :initial-load="initialLoad">
                <u-table-view-column title="流程节点">
                    <template #cell="current"> {{ current.item.processTitle || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column title="处理人">
                    <template #cell="current"> {{ current.item.currentNode || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column title="处理时间">
                    <template #cell="current"> {{ formatCurrentAssignee(current.item) }}</template>
                </u-table-view-column>
                <u-table-view-column title="审批结果">
                    <template #cell="current"> {{ current.item.startBy || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column title="审批意见">
                    <template #cell="current"> {{ dateFormatter(current.item.taskCreateTime) }}</template>
                </u-table-view-column>
            </u-table-view>
        </template>
    </div>
</template>

<script>
import i18nMixin from '../../mixins/i18n';
export default {
    name: 'u-process-record',
    mixins: [i18nMixin('u-process-record')],
    props: {
        type: {
            type: String,
            default: 'table',
        },
    },
    data() {
        return {
            detail: {
                startBy: '',
                createTime: '',
                finished: false,
                currentNode: '',
                currentCandidateUsers: [],
            },
            taskId: undefined,
            list: [],
            paging: {
                size: 20,
                number: 1,
                total: 0,
            },
        };
    },
    computed: {
        hasMore() {
            return this.list.length < this.paging.total;
        },
    },
    created() {
        location.search.replace('?', '').split('&').forEach((item) => {
            const [key, value] = item.split('=');
            if (key === 'taskId') {
                this.taskId = value;
            }
        });
        if (this.taskId) {
            this.getProcessInfo();
        }
    },
    methods: {
        async getProcessInfo() {
            if (this.$processV2) {
                const result = await this.$processV2.getProcessInstanceInfo({
                    body: {
                        taskId: this.taskId,
                    },
                });
                this.detail = result.data || {};
            }
        },
        dateFormatter(value) {
            // eslint-disable-next-line new-cap
            return this.$utils ? this.$utils.FormatDateTime(value) : value;
        },
        formatStatus(value) {
            if (value === null || value === undefined) {
                return '-';
            }
            if (value === true) {
                return '已结束';
            } else if (value === false) {
                return '进行中';
            } else {
                return value;
            }
        },
        formatArray2String(value) {
            if (value === null || value === undefined) {
                return '-';
            }
            if (Array.isArray(value)) {
                return value.join('，') || '-';
            }
            return value;
        },
        onChangePage() {

        },
        onChangePageSize() {

        },
        async load() {
            if (this.$processV2) {
                const result = await this.$processV2.getMyTaskList({
                });
                this.list = result.data.list;
                this.page.total = result.data.total;
                return result.data;
            }
        },
    },
};
</script>

<style module>
.root {

}

.item {
    width: 20%;
    display: inline-flex;
}

.item + .item {
    padding-left: 10px;
}
.label {
    color: var(--process-info-label-color);
}

.value {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
