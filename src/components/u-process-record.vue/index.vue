<template>
    <div>
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
                                <div :class="$style.value">{{ dateFormatter(current.item.recordCreateTime) || '-' }}</div>
                                <div :class="$style.value">{{ current.item.nodeOperation || '-' }}</div>
                                <div :class="$style.value">{{ current.item.comment || '-' }}</div>
                            </div>
                        </div>
                    </u-timeline-item>
                </template>
            </u-timeline>
            <u-text v-if="currentLoading">{{ $tt('loading') }}</u-text>
            <u-link v-else-if="hasMore" @click="loadMore">{{ $tt('loadMore') }}</u-link>
            <u-text v-else-if="list.length > 0">{{ $tt('noMore') }}</u-text>
        </template>
        <template v-else>
            <u-table-view :data-source="loadTable" ref="tableview" :page-size="20" :page-number="1" pagination :initial-load="initialLoad">
                <u-table-view-column :title="$tt('currentNode')">
                    <template #cell="current"> {{ current.item.nodeTitle || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('assignee')">
                    <template #cell="current"> {{ current.item.userName || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('recordCreateTime')">
                    <template #cell="current"> {{ dateFormatter(current.item.recordCreateTime) }}</template>
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
        initialLoad: {
            type: Boolean,
            default: true,
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
            currentLoading: false,
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
        if (this.taskId && this.type === 'timeline' && this.initialLoad) {
            this.list = [];
            this.loadList();
        }
    },
    watch: {
        type(value) {
            if (value === 'timeline') {
                this.paging.number = 1;
                this.list = [];
                this.loadList();
            }
        },
    },
    methods: {
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
        async loadList() {
            this.currentLoading = true;
            if (this.$processV2) {
                this.currentLoading = true;
                try {
                    const result = await this.$processV2.getProcInstRecords({
                        body: {
                            taskId: this.taskId,
                            size: this.paging.size,
                            page: this.paging.number,
                        },
                    });
                    const list = result.data.list || [];
                    this.list = this.list.concat(list);
                    this.paging.total = result.data.total;
                } finally {
                    this.currentLoading = false;
                }
            }
        },
        loadMore() {
            this.paging.number += 1;
            this.loadList();
        },
        async loadTable(params) {
            if (this.$processV2) {
                const result = await this.$processV2.getProcInstRecords({
                    body: {
                        taskId: this.taskId,
                        size: this.paging.size,
                        page: this.paging.number,
                    },
                });
                return result.data;
            }
        },
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
