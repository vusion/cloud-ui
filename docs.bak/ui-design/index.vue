<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar">
                <u-sidebar-group title="规范">
                    <u-sidebar-item to="/components/u-base" disabled>事件设计</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>API设计</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="模式">
                    <u-sidebar-item to="/components/u-base" disabled>父子模式</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>父组子模式</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>根节点模式</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="系列">
                    <u-sidebar-item to="/components/u-base" disabled>列表系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-link" disabled>路由系列</u-sidebar-item>
                    <u-sidebar-item to="/ui-design/form">表单系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-badge" disabled>递归系列</u-sidebar-item>
                    <u-sidebar-item to="/ui-design/popper">弹出层系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag" disabled>布局系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag" disabled>图表系列</u-sidebar-item>
                    <!-- <u-sidebar-item to="/components/u-label">数值范围系列</u-sidebar-item> -->
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const advanced = !!JSON.parse(localStorage.getItem('advanced'));

        return {
            advanced,
        };
    },
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: var(--sidebar-width);
    top: var(--navbar-height);
    bottom: 0;
    overflow: hidden;
}

.sidebar {
    padding: 36px 0;
    height: 100%;
    overflow: auto;
    /* width: calc(--var(sidebar-width) + 8px); */
}

/* .sidebar > * {
    width: var(--sidebar-width);
} */

.main {
    margin-left: var(--sidebar-width);
    max-width: 1000px;
    padding: 50px;
    padding-top: 30px;
}
</style>
