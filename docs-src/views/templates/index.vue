<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar collapsible accordion expand-trigger="click" :class="$style.color">
                <u-sidebar-group title="dashboard">
                    <u-sidebar-item to="/preview/dashboard/analysis">分析页</u-sidebar-item>
                    <u-sidebar-item to="/preview/dashboard/monitor">监控页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="表单页">
                    <u-sidebar-item to="/preview/form/basic">基础表单</u-sidebar-item>
                    <u-sidebar-item to="/preview/form/advance">高级表单</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="列表页">
                    <u-sidebar-item to="/preview/table/basic">基础表格</u-sidebar-item>
                    <u-sidebar-item to="/preview/table/advance">高级表格</u-sidebar-item>
                    <u-sidebar-item to="/preview/table/select">选择列表</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="详情">
                    <u-sidebar-item to="/preview/detail/basic">基础详情</u-sidebar-item>
                    <!-- <u-sidebar-item to="/preview/detail/advance">高级详情</u-sidebar-item> -->
                </u-sidebar-group>
                <u-sidebar-group title="日期页">
                    <u-sidebar-item to="/preview/date/basic">日期选择</u-sidebar-item>
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
    padding: 20px;
}

.color{
    background-color: #2b333f;
}
</style>
