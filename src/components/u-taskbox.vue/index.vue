<template>
<span
    :class="{ [$style.root]: true, [$style.active]: active }"
    @click="onClick"
>
    <u-badge corner :value="total">
        <span :class="$style.notice"></span>
    </u-badge>
    <u-popup
        trigger="manual"
        placement="bottom"
        :opened.sync="opened"
    >
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
                        <span :class="$style.title">{{ task.name || task.processDefinitionName }}</span>
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
        interval: {
            type: Number,
            default: 30,
            validator(value) {
                return value >= 5;
            },
        },
    },
    data() {
        return {
            active: false,
            tasks: [],
            page: 1,
            total: 0,
            totalPages: 1,
            opened: false,
            timeout: null,
        };
    },
    async created() {
        await this.getTasks();
    },
    destroyed() {
        this.clearTime();
    },
    methods: {
        async getTasks() {
            if (this.$process) {
                this.setTime();
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
                // 刷新时可能数据变化造成分页过大，此时自动调整分页
                if (this.page > this.totalPages) {
                    this.page = this.totalPages;
                }
            }
        },
        async onClick() {
            this.opened = !this.opened;
            await this.getTasks();
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
        setTime() {
            this.clearTime();
            if (this.interval >= 5) {
                this.timeout = setTimeout(this.getTasks, this.interval * 1000);
            }
        },
        clearTime() {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
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
