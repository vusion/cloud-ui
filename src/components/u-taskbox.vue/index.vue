<template>
<span :class="{ [$style.root]: true, [$style.active]: active }">
    <u-badge corner :value="total">
        <span :class="$style.notice"></span>
    </u-badge>
    <u-popup placement="bottom">
        <u-linear-layout direction="vertical" :class="$style.content">
            <h3 :class="$style.h3">待处理任务 ({{ total }})</h3>
            <u-list line hover striped>
                <u-list-item v-for="task in tasks" :key="task.id" @click.native="clickTask(task)">
                    <u-linear-layout
                        type="flex"
                        justify="space-between"
                        alignment="center"
                        :class="$style.line"
                    >
                        <span :class="$style.title">{{ task.processDefinitionName || task.name }}</span>
                        <span :class="$style.time">{{ dateFormatter(task.createAt) }}</span>
                    </u-linear-layout>
                </u-list-item>
            </u-list>
            <u-pagination v-if="total" :total="totalPages" simple @change="changePage"></u-pagination>
        </u-linear-layout>
    </u-popup>
</span>
</template>

<script>
export default {
    name: 'u-taskbox',
    props: {
        title: {
            type: String,
            default: '通知',
        },
        size: {
            type: Number,
            default: 5,
        },
    },
    data() {
        return {
            active: false,
            tasks: [],
            page: 1,
            total: 0,
            totalPages: 1,
        };
    },
    async created() {
        await this.getTasks();
    },

    methods: {
        async getTasks() {
            if (this.$process) {
                const { Data = {} } = await this.$process.getTasks({
                    query: {
                        page: this.page - 1,
                        size: this.size,
                    },
                }) || {};
                const { content, totalElements = 0, totalPages = 1 } = Data;
                this.tasks = content;
                this.total = totalElements;
                this.totalPages = totalPages;
            }
        },
        async clickTask(task) {
            const { id } = task;
            await this.$process.claimTask({
                path: { id },
            });
            const res = await this.$process.getDestinationUrl({
                path: { id },
            });
            location.href = res.Data;
        },
        dateFormatter(value) {
            // eslint-disable-next-line new-cap
            return this.$utils ? this.$utils.FormatDateTime(value) : value;
        },
        changePage({ page }) {
            this.page = page;
            this.getTasks();
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    text-align: center;
    cursor: pointer;
}

.active .notice::before,
.root:hover .notice::before {
    color: var(--brand-primary);
}

.notice {
    display: inline-block;
    font-size: 22px;
}
.notice::before {
    icon-font: url('i-material-design.vue/assets/outlined/notifications.svg');
    color: var(--color-base);
    font-weight: bold;
}

.content {
    min-width: 360px;
    padding: 16px;
}

.h3 {
    margin: 0;
    color: var(--brand-primary);
}

.line {
    height: 32px;
}

.title {
    font-size: 14px;
}

.time {
    color: var(--color-lighter);
    font-size: 12px;
}
</style>
