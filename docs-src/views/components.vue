<template>
    <div>
        <div :class="$style.side">
            <u-sidebar size="small">
                <u-sidebar-item><u-checkbox v-model="advanced" @check="onCheck">显示所有组件</u-checkbox></u-sidebar-item>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item to="/components/u-carousel">轮播图 <small>Carousel</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-base">基础 <small>Base</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-link">链接 <small>Link</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-button">按钮 <small>Button</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-badge">徽章 <small>Badge</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag">标签 <small>Tag</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-label">标签条 <small>Label</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-icon">图标 <small>Icon</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-status-icon">状态图标 <small>StatusIcon</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-logo">标识 <small>Logo</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Layout">
                    <u-sidebar-item to="/components/u-linear-layout">线性布局 <small>LinearLayout</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-grid">栅格 <small>Grid</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item to="/components/u-navbar">导航栏 <small>Navbar</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-sidebar">侧边栏 <small>Sidebar</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-subnav">子导航 <small>Subnav</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tabs">标签页 <small>Tabs</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-pagination">翻页器 <small>Pagination</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item to="/components/u-input">单行输入 <small>Input</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-number-input">数字输入 <small>Input</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-textarea">多行输入 <small>Textarea</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-select">选择框 <small>Select</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-multi-select">多项选择框 <small>MultiSelect</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-color-select">颜色选择框 <small>Select</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-checkbox">多选框 <small>Checkbox</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-switch">开关 <small>Switch</small></u-sidebar-item>
                    <u-sidebar-item v-if="advanced" to="/components/u-field">表单控件 <small>Field</small></u-sidebar-item>
                    <!-- <u-sidebar-item v-if="advanced" to="/components/u-form-item">表单项 <small>FormItem</small></u-sidebar-item> -->
                    <u-sidebar-item to="/components/u-form">表单 <small>Form</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Data">
                    <u-sidebar-item to="/components/u-list-view">列表选择 <small>ListView</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tree-view">树型选择 <small>TreeView</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-table-view">表格视图 <small>TableView</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-capsules">胶囊 <small>Capsules</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-pills">药丸 <small>Pills</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tablets">药片 <small>Tablets</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="DateTime">
                    <u-sidebar-item to="/components/u-calendar">日历 <small>Calendar</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-date-picker">日期选择 <small>DatePicker</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-time-picker">时间选择 <small>TimePicker</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-date-time-picker">日期时间 <small>DateTimePicker</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Popper">
                    <u-sidebar-item to="/components/u-popper">弹出层 <small>Popper</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tooltip">工具提示 <small>Tooltip</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-popover">弹出框 <small>Popover</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Feedback">
                    <u-sidebar-item to="/components/u-loading">加载中 <small>Loading</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-toast">吐司 <small>Toast</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-modal">弹窗 <small>Modal</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Progress & Chart">
                    <u-sidebar-item to="/components/u-linear-progress">线型进度条 <small>LinearProgress</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-circular-progress">圆型进度条 <small>CircularProgress</small></u-sidebar-item>
                    <u-sidebar-item v-if="advanced" to="/components/u-chart">图表 <small>Chart</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-bar-chart">柱状图 <small>BarChart</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-xbar-chart">水平柱状图 <small>XBarChart</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-line-chart">线状图 <small>LineChart</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-pie-chart">饼状图 <small>PieChart</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group v-if="advanced" title="Mixin & Utils">
                    <u-sidebar-item to="/components/u-emitter">触发器 <small>Emitter</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-router-item">路由项 <small>RouterItem</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-draggable">拖拽 <small>Draggable</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-droppable">拖放 <small>Droppable</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-movable">拖移 <small>Movable</small></u-sidebar-item>
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
    padding: 20px 0;
    position: fixed;
    width: 200px;
    top: 64px;
    bottom: 0;
    /* height: calc(100vh - 134px); */
    background: #f0f6fa;
    overflow: auto;
}

.main {
    margin-left: 200px;
    padding: 40px;
}
</style>
