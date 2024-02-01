<template>
    <div :class="$style.root">
        <div :class="$style.item">
            <div :class="$style.label">{{ $tt('startBy') }}：</div>
            <div :class="$style.value" v-ellipsis-title>{{ detail.procInstStartBy || '-' }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">{{ $tt('processStartTime') }}：</div>
            <div :class="$style.value" v-ellipsis-title>{{ dateFormatter(detail.procInstStartTime) }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">{{ $tt('finished') }}：</div>
            <div :class="$style.value" v-ellipsis-title> {{ formatStatus(detail.procInstStatus) }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">{{ $tt('currentNodes') }}：</div>
            <div :class="$style.value" v-ellipsis-title> {{ formatCurrentNodes(detail.procInstCurrentTask) }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">{{ $tt('currentCandidateUsers') }}：</div>
            <div :class="$style.value" v-ellipsis-title>{{ formatCurrentAssignee(detail.procInstCurrentTask) }}</div>
        </div>
    </div>
</template>

<script>
import i18nMixin from '../../mixins/i18n';
export default {
    name: 'u-process-info',
    mixins: [i18nMixin('u-process-info')],
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
        };
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
                const result = await this.$processV2.getProcInstInfo({
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
            if (value === 'APPROVED') {
                return '已结束';
            } else if (value === 'PENDING') {
                return '进行中';
            } else {
                return value;
            }
        },
        formatCurrentNodes(item) {
            const procInstCurrentTask = item.procInstCurrentTask || [];
            const set = new Set(procInstCurrentTask.map((task) => task.currentTaskTitle));
            return Array.from(set).join('，');
        },
        formatCurrentAssignee(item) {
            const procInstCurrentTask = item.procInstCurrentTask || [];
            const set = new Set(procInstCurrentTask.map((task) => task.currentTaskAssignees));
            return Array.from(set).join('，');
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
