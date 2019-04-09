<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar size="small" style="padding: 20px 0;">
                <u-sidebar-group title="Guide">
                    <u-sidebar-item to="/components/quickstart">Quickstart <small>快速开始</small></u-sidebar-item>
                    <u-sidebar-item to="/components/pattern">Pattern <small>设计模式</small></u-sidebar-item>
                    <u-sidebar-item href="https://github.com/vusion/cloud-ui/releases">Changelog <small>更新日志</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item to="/components/typography">Typography <small>排印</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-text">UText <small>文本</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-link">ULink <small>链接</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-button">UButton <small>按钮</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-badge">UBadge <small>徽章</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-label">ULabel <small>标签</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-actions">UActions <small>操作项</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-icon">UIcon <small>图标</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-status-icon">UStatusIcon <small>状态图标</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-logo">ULogo <small>标识</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Layout & Composing">
                    <u-sidebar-item to="/components/u-linear-layout">ULinearLayout <small>线性布局</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-grid-layout">UGridLayout <small>栅格布局</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-desc-list">UDescList <small>描述列表</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-info-list">UInfoList <small>详情列表</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-table">UTable <small>表格</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item to="/components/u-navbar">UNavbar <small>导航栏</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-sidebar">USidebar <small>侧边栏</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-menu">UMenu <small>菜单</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-subnav">USubnav <small>子导航</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tabs">UTabs <small>标签页</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-subtabs">USubtabs <small>子标签页</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-steps">USteps <small>步骤条</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-selectable-steps">USelectableSteps <small>可选步骤条</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-pagination">UPagination <small>翻页器</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-crumb">UCrumb <small>面包屑</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item to="/components/u-input">UInput <small>单行输入</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-number-input">UNumberInput <small>数字输入</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-radios">URadios <small>单选组</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-checkboxes">UCheckboxes <small>多选组</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-switch">USwitch <small>开关</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-textarea">UTextarea <small>多行输入</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-select">USelect <small>选择框</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-cascade-select">UCascadeSelect <small>级联选择</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-region-select">URegionSelect <small>地区选择</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-slider">USlider <small>滑块</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-combo-slider">UComboSlider <small>复合滑块</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-uploader">UUploader <small>文件上传</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-form">UForm <small>表单</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Data">
                    <u-sidebar-item to="/components/u-list-view">UListView <small>列表选择</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tree-view">UTreeView <small>树型选择</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-table-view">UTableView <small>表格视图</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-old-view">UOldTableView <small>表格视图</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-resize-table">UResizeTable <small>调整列宽表格</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-capsules">UCapsules <small>胶囊</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-cascade-capsules">UCascadeCapsules <small>级联胶囊</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-pills">UPills <small>药丸</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tablets">UTablets <small>药片</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-countup">UCountup <small>数字渐变</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-transfer">UTransfer <small>穿梭框</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="DateTime">
                    <u-sidebar-item to="/components/u-calendar">UCalendar <small>日历</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-date-picker">UDatePicker <small>日期选择</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-time-picker">UTimePicker <small>时间选择</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-date-time-picker">UDateTimePicker <small>日期时间</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Popper">
                    <u-sidebar-item to="/components/u-popper">UPopper <small>弹出层</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tooltip">UTooltip <small>工具提示</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-popup">UPopup <small>弹出框</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-drawer">UDrawer <small>抽屉</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Feedback">
                    <u-sidebar-item to="/components/u-loading">ULoading <small>加载中</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-spinner">USpinner <small>加载图标</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-toast">UToast <small>吐司提示</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-modal">UModal <small>弹窗</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-lightbox">ULightbox <small>灯箱</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Progress & Chart">
                    <u-sidebar-item to="/components/u-linear-progress">ULinearProgress <small>线型进度条</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-circular-progress">UCircularProgress <small>圆型进度条</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-chart">UChart <small>图表</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-bar-chart">UBarChart <small>柱状图</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-xbar-chart">UXBarChart <small>水平柱状图</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-line-chart">ULineChart <small>线状图</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-pie-chart">UPieChart <small>饼状图</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Extension">
                    <u-sidebar-item to="/components/x-ace-editor">XAceEditor <small>代码编辑器</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Mixin & Utils">
                    <u-sidebar-item to="/components/u-emitter">MEmitter <small>触发器</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-draggable">FDraggable <small>拖拽</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-droppable">FDroppable <small>拖放</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-dragger">FDragger <small>拖拽器</small></u-sidebar-item>
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
