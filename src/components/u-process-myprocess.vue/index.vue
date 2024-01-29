<template>
    <div>
        <u-tabs appear="line" v-model="tabValue" @select="onSelectTab">
            <u-tab :title="$tt('pendingTasks')" value="pendingTasks"></u-tab>
            <u-tab :title="$tt('processedTasks')" value="processedTasks"></u-tab>
            <u-tab :title="$tt('intiationProcess')" value="intiationProcess"></u-tab>
        </u-tabs>
        <u-linear-layout direction="vertical">
            <u-linear-layout mode="flex" justify="space-between">
                <u-linear-layout :class="$style.left">
                    <u-form layout="inline">
                        <u-form-item :label="$tt('process')">
                            <u-select
                                filterable
                                clearable
                                text-field="title"
                                value-field="processDefUniqueKey"
                                :data-source="getAllProcessDefList"
                                :value.sync="filter.processDefUniqueKey"
                                :initial-load="true">
                            </u-select>
                        </u-form-item>
                        <u-form-item :label="$tt('createTime')">
                            <u-date-picker
                                range
                                picker="date"
                                clearable
                                :placeholder="$tt('createTimeAfter')"
                                :placeholder-right="$tt('createTimeBefore')"
                                converter="json"
                                :start-date.sync="filter.createTimeAfter"
                                :end-date.sync="filter.createTimeBefore">
                            </u-date-picker>
                        </u-form-item>
                        <u-form-item :label="$tt('startBy')" v-if="tabValue !== 'intiationProcess'">
                            <u-select
                                filterable
                                clearable
                                text-field="userName"
                                value-field="userName"
                                :data-source="getProcessStartByList"
                                :value.sync="filter.processStartBy"
                                :initial-load="true">
                            </u-select>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
                <u-linear-layout>
                    <u-button color="primary" @click="onSearch">{{ $tt('search') }}</u-button>
                </u-linear-layout>
            </u-linear-layout>
            <u-table-view :data-source="load" ref="tableview" :page-size="20" :page-number="1" pagination :initial-load="initialLoad">
                <u-table-view-column :title="$tt('processType')">
                    <template #cell="current"> {{ current.item.processType || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('currentNodes')">
                    <template #cell="current"> {{ current.item.currentNodes && current.item.currentNodes.join(',') || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('currentAssignee')">
                    <template #cell="current"> {{ formatCurrentAssignee(current.item) }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('startBy')">
                    <template #cell="current"> {{ current.item.startBy || '-' }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('createTime')">
                    <template #cell="current"> {{ dateFormatter(current.item.taskCreateTime) }}</template>
                </u-table-view-column>
                <u-table-view-column :title="$tt('operator')">
                    <template #cell="current">
                        <u-link @click="goToDetail(current.item)">{{ tabValue === 'pendingTasks'? $tt('approval') : $tt('check') }}</u-link>
                    </template>
                </u-table-view-column>
            </u-table-view>
        </u-linear-layout>
    </div>
</template>

<script>
import i18nMixin from '../../mixins/i18n';
export default {
    name: 'u-process-myprocess',
    mixins: [i18nMixin('u-process-myprocess')],
    props: {
        taskId: [String, Number],
        initialLoad: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            list: [],
            tabValue: 'pendingTasks',
            filter: {
                processDefUniqueKey: '',
                createTimeAfter: '',
                createTimeBefore: '',
                startBy: '',
            },
        };
    },
    methods: {
        async load(params) {
            const typeMap = {
                pendingTasks: 'myPendingTaskList',
                processedTasks: 'myCompletedTaskList',
                intiationProcess: 'myLaunchList',
            };
            if (this.$processV2) {
                const body = {
                    taskId: this.taskId,
                    page: params.page,
                    size: params.size,
                };
                Object.keys(this.filter).forEach((key) => {
                    if (this.filter[key]) {
                        body[key] = this.filter[key];
                    }
                });
                const result = await this.$processV2.getMyTaskList({
                    path: {
                        taskType: typeMap[this.tabValue],
                    },
                    body,
                });
                return result.data;
            }
        },
        onSelectTab() {
            Object.keys(this.filter).forEach((key) => {
                this.filter[key] = '';
            });
            this.$refs.tableview.reload();
        },
        async getAllProcessDefList() {
            if (this.$processV2) {
                const result = await this.$processV2.getProcessDefinitionList();
                return result.data;
            }
        },
        async getProcessStartByList() {
            if (this.$processV2) {
                const result = await this.$processV2.getProcessStartByList();
                return result.data;
            }
        },
        async goToDetail(item) {
            if (this.$processV2) {
                const result = await this.$processV2.getTaskDestinationUrl({
                    body: {
                        taskId: item.taskId,
                    },
                });
                const toUrl = window.location.origin + result.data;
                window.location.href = toUrl;
            }
        },
        onSearch() {
            console.log('onSearch', this.filter);
            this.$refs.tableview.reload();
        },
        formatCurrentAssignee(item) {
            if (item.currentAssignee) {
                return item.currentAssignee;
            } else if (item.currentCandidateUsers && Array.isArray(item.currentCandidateUsers)) {
                return item.currentCandidateUsers.join('，');
            } else {
                return '-';
            }
        },
        dateFormatter(value) {
            // eslint-disable-next-line new-cap
            return this.$utils ? this.$utils.FormatDateTime(value) : value;
        },
    },
};
</script>

<style module>
.left {
    flex: 1;
}
</style>
