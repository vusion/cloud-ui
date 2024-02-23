<template>
    <div>
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
            <div :class="$style.value" v-ellipsis-title> {{ formatCurrentNodes(detail) }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">{{ $tt('currentCandidateUsers') }}：</div>
            <div :class="$style.value" v-ellipsis-title>{{ formatCurrentAssignee(detail) }}</div>
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
                procInstStartBy: '',
                procInstStartTime: '',
                procInstStatus: false,
                procInstCurNodes: [],
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
            if (value === 'approved') {
                return '审批通过';
            } else if (value === 'approving') {
                return '审批中';
            } else {
                return value;
            }
        },
        formatCurrentNodes(item) {
            console.log('dddd');
            const procInstCurNodes = item.procInstCurNodes || [];
            const set = new Set(procInstCurNodes.map((task) => task.currNodeTitle));
            return Array.from(set).join('，');
        },
        formatCurrentAssignee(item) {
            const procInstCurNodes = item.procInstCurNodes || [];
            let currNodeParticipants = [];
            procInstCurNodes.forEach((task) => {
                currNodeParticipants = currNodeParticipants.concat(task.currNodeParticipants);
            });
            const set = new Set(currNodeParticipants);
            return Array.from(set).join('，');
        },
    },
};
</script>

<style module src="./index.css"></style>
