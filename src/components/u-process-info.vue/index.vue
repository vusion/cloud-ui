<template>
    <div :class="$style.root">
        <div :class="$style.item">
            <div :class="$style.label">发起人：</div>
            <div :class="$style.value" v-ellipsis-title>{{ detail.startBy || '-' }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">发起时间：</div>
            <div :class="$style.value" v-ellipsis-title>{{ dateFormatter(detail.createTime) }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">当前状态：</div>
            <div :class="$style.value" v-ellipsis-title> {{ formatStatus(detail.finished) }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">当前节点：</div>
            <div :class="$style.value" v-ellipsis-title> {{ formatArray2String(detail.currentNode) }}</div>
        </div>
        <div :class="$style.item">
            <div :class="$style.label">参与人：</div>
            <div :class="$style.value" v-ellipsis-title>{{ formatArray2String(detail.currentCandidateUsers) }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'u-process-info',
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
