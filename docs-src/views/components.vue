<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar size="small" style="padding: 20px 0;">
                <u-sidebar-item><u-checkbox v-model="advanced" @check="onCheck">显示所有组件</u-checkbox></u-sidebar-item>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item exact to="/components/u-base">基础 <small>Base</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/typography">排印 <small>Typography</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-text">文本 <small>Text</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-link">链接 <small>Link</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-link-list">链接列表 <small>LinkList</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-button">按钮 <small>Button</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-badge">徽章 <small>Badge</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-label">标签 <small>Label</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-icon">图标 <small>Icon</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-status-icon">状态图标 <small>StatusIcon</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-logo">标识 <small>Logo</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Layout & Composing">
                    <u-sidebar-item exact to="/components/u-linear-layout">线性布局 <small>LinearLayout</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-grid-layout">栅格布局 <small>GridLayout</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-desc-list">描述列表 <small>DescList</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-info-list">详情列表 <small>InfoList</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item exact to="/components/u-navbar">导航栏 <small>Navbar</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-sidebar">侧边栏 <small>Sidebar</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-menu">菜单 <small>Menu</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-subnav">子导航 <small>Subnav</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-tabs">标签页 <small>Tabs</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-subtabs">子标签页 <small>Subtabs</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-steps">步骤条 <small>Steps</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-pagination">翻页器 <small>Pagination</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item exact to="/components/u-input">单行输入 <small>Input</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-number-input">数字输入 <small>NumberInput</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-radios">单选组 <small>Radios</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-checkboxes">多选组 <small>Checkboxes</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-switch">开关 <small>Switch</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-textarea">多行输入 <small>Textarea</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-select">选择框 <small>Select</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-cascade-select">级联选择 <small>CascadeSelect</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-region-select">地区选择 <small>RegionSelect</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-multi-select">多项选择框 <small>MultiSelect</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-color-select">颜色选择框 <small>ColorSelect</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-suggest">自动提示 <small>Suggest</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-slider">滑块 <small>Slider</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-combo-slider">复合滑块 <small>ComboSlider</small></u-sidebar-item>
                    <!-- <u-sidebar-item v-if="advanced" to="/components/u-field">表单控件 <small>Field</small></u-sidebar-item> -->
                    <u-sidebar-item exact to="/components/u-form">表单 <small>Form</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Data">
                    <u-sidebar-item exact to="/components/u-list-view">列表选择 <small>ListView</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-tree-view">树型选择 <small>TreeView</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-table-view">表格视图 <small>TableView</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-capsules">胶囊 <small>Capsules</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-cascade-capsules">级联胶囊 <small>CascadeCapsules</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-pills">药丸 <small>Pills</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-tablets">药片 <small>Tablets</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-countup">数字渐变 <small>CountUp</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="DateTime">
                    <u-sidebar-item exact to="/components/u-calendar">日历 <small>Calendar</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-date-picker">日期选择 <small>DatePicker</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-time-picker">时间选择 <small>TimePicker</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-date-time-picker">日期时间 <small>DateTimePicker</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Popper">
                    <u-sidebar-item exact to="/components/u-popper">弹出层 <small>Popper</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-tooltip">工具提示 <small>Tooltip</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-popup">弹出框 <small>Popup</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Feedback">
                    <u-sidebar-item exact to="/components/u-loading">加载中 <small>Loading</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-toast">吐司 <small>Toast</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-modal">弹窗 <small>Modal</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-lightbox">灯箱 <small>Lightbox</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Progress & Chart">
                    <u-sidebar-item exact to="/components/u-linear-progress">线型进度条 <small>LinearProgress</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-circular-progress">圆型进度条 <small>CircularProgress</small></u-sidebar-item>
                    <u-sidebar-item v-if="advanced" to="/components/u-chart">图表 <small>Chart</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-bar-chart">柱状图 <small>BarChart</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-xbar-chart">水平柱状图 <small>XBarChart</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-line-chart">线状图 <small>LineChart</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-pie-chart">饼状图 <small>PieChart</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Extension">
                    <u-sidebar-item exact to="/components/x-ace-editor">代码编辑器 <small>XAceEditor</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group v-if="advanced" title="Mixin & Utils">
                    <u-sidebar-item exact to="/components/u-emitter">触发器 <small>Emitter</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-router-item">路由项 <small>RouterItem</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-draggable">拖拽 <small>Draggable</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-droppable">拖放 <small>Droppable</small></u-sidebar-item>
                    <u-sidebar-item exact to="/components/u-dragger">拖拽器 <small>Dragger</small></u-sidebar-item>
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
.root {
    /* width: 1180px;
    margin: 0 auto; */
}

.side {
    position: fixed;
    width: 200px;
    top: 64px;
    bottom: 0;
    overflow: hidden;
}

.side li {
    width: 200px;
}

.main {
    margin-left: 220px;
    max-width: 1000px;
    padding: 40px;
}
</style>
