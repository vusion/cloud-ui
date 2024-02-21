<template>
    <div v-if="$env.VUE_APP_DESIGNER">
        <template v-if="type === 'timeline'">
            <u-timeline :data-source="list">
                <template #item="current">
                    <u-timeline-item>
                        <div :class="$style.title">{{ current.item.nodeTitle }}</div>
                        <div :class="$style.item">
                            <div :class="$style.left">
                                <div :class="$style.label">{{ $tt('assignee') }}</div>
                                <div :class="$style.label">{{ $tt('recordCreateTime') }}</div>
                                <div :class="$style.label">{{ $tt('nodeOperation') }}</div>
                                <div :class="$style.label">{{ $tt('comment') }}</div>
                            </div>
                            <div :class="$style.content">
                                <div :class="$style.value">{{ current.item.userName || '-' }}</div>
                                <div :class="$style.value">{{ current.item.recordCreateTime || '-' }}</div>
                                <div :class="$style.value">{{ current.item.nodeOperation || '-' }}</div>
                                <div :class="$style.value">{{ current.item.comment || '-' }}</div>
                            </div>
                        </div>
                    </u-timeline-item>
                </template>
            </u-timeline>
        </template>
        <template v-else>
            <u-table-view :data-source="list">
                <u-table-view-column :title="$tt('currentNode')">
                    <template #cell="current"> {{ current.item.nodeTitle || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('assignee')">
                    <template #cell="current"> {{ current.item.userName || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('recordCreateTime')">
                    <template #cell="current"> {{ current.item.recordCreateTime }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('nodeOperation')">
                    <template #cell="current"> {{ current.item.nodeOperation || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('comment')">
                    <template #cell="current"> {{ current.item.comment }}</template>
                </u-table-view-column>
            </u-table-view>
        </template>
    </div>
    <component
        v-else
        is="u-process-record-real"
        v-bind="[$attrs, $props]"
        v-on="$listeners">
    </component>
</template>
<script>
import i18nMixin from '../../mixins/i18n';
export default {
    mixins: [i18nMixin('u-process-record')],
    props: {
        type: {
            type: String,
            default: 'table',
        },
    },
    data() {
        return {
            list: [
                {
                    nodeTitle: '发起任务',
                    userName: '章三',
                    recordCreateTime: '2023-12-21 10:20:20',
                    nodeOperation: 'submit',
                    nodeOperationText: '提交了一个任务',
                    nodeComment: '无',
                },
                {
                    nodeTitle: '审批任务',
                    userName: '李四',
                    recordCreateTime: '2023-12-21 10:20:20',
                    nodeOperation: 'consent',
                    nodeOperationText: '通过了一个任务',
                    nodeComment: '无',
                },
                {
                    nodeTitle: '审批任务',
                    userName: '李四',
                    recordCreateTime: '2023-12-21 10:20:20',
                    nodeOperation: 'consent',
                    nodeOperationText: '通过了一个任务',
                    nodeComment: '无',
                },
            ],
        };
    },
};
</script>

<style module>
.item {
    display: flex;
}
.left {
    min-width: 9%;
    margin-right: 10px;
}
.label {
    color: var(--process-record-label-color);
}
.value {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.title {
    font-weight: 500;
    color: var(--process-record-title-color);
}
</style>
