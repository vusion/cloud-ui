<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar collapsible accordion expand-trigger="click" :class="$style.color">
                <u-sidebar-group title="dashboard" icon="alarm">
                    <u-sidebar-item to="/preview/dashboard/analysis">分析页</u-sidebar-item>
                    <u-sidebar-item to="/preview/dashboard/monitor">监控页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="表单页" icon="alarm">
                    <u-sidebar-item to="/preview/form/basic">基础表单</u-sidebar-item>
                    <u-sidebar-item to="/preview/form/advance">高级表单</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="列表页" icon="alarm">
                    <u-sidebar-item to="/preview/table/basic">基础列表</u-sidebar-item>
                    <u-sidebar-item to="/preview/table/advance">高级列表</u-sidebar-item>
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
        return {

        };
    },
};
</script>

<style module>
.side {
    padding: 20px 0;
    position: fixed;
    width: 220px;
    top: 64px;
    bottom: 0;
    /* height: calc(100vh - 134px); */
    background: #f0f6fa;
    overflow: auto;
}

.main {
    margin-left: 220px;
    padding: 40px;
}

.color{
    background-color: #2b333f;
}
</style>
