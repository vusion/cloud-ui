import Vue from 'vue';
import Layout from './views/layout.vue';
import Index from './views/index.vue';
import Components from './views/components.vue';
import Guide from './views/guide/index.vue';
import GuideIntroduce from './views/guide/introduce.md';
import GuideQuickStart from './views/guide/quickstart.md';
import PreviewIndex from './views/templates/index.vue';
import PreviewDashboardAnalysis from './views/templates/dashboard/analysis.vue';
import PreviewDashboardMonitor from './views/templates/dashboard/monitor.vue';
import PreviewFormBasic from './views/templates/form/basic.vue';
import PreviewFormAdvance from './views/templates/form/advance.vue';
import PreviewTableBasic from './views/templates/table/basic.vue';
import PreviewTableAdvance from './views/templates/table/advance.vue';
import PreviewTableSelect from './views/templates/table/select.vue';
import PreviewDetailBasic from './views/templates/detail/basic.vue';
import PreviewDetailAdvance from './views/templates/detail/advance.vue';
import PreviewDate from './views/templates/date/basic.vue';

const Empty = Vue.extend({ template: '<div>待完善...</div>' });

export default [
    { path: '/', component: Layout, children: [
        { path: '', component: Index, redirect: '/components' },
        { path: 'guide', component: Guide, children: [
            { path: '', redirect: 'introduce' },
            { path: 'introduce', component: GuideIntroduce },
            { path: 'quickstart', component: GuideQuickStart },
        ] },
        { path: 'preview', component: PreviewIndex, children: [
            { path: '', redirect: 'dashboard/analysis' },
            { path: 'dashboard/analysis', component: PreviewDashboardAnalysis },
            { path: 'dashboard/monitor', component: PreviewDashboardMonitor },
            { path: 'form/basic', component: PreviewFormBasic },
            { path: 'form/advance', component: PreviewFormAdvance },
            { path: 'table/basic', component: PreviewTableBasic },
            { path: 'table/advance', component: PreviewTableAdvance },
            { path: 'table/select', component: PreviewTableSelect },
            { path: 'detail/basic', component: PreviewDetailBasic },
            { path: 'detail/advance', component: PreviewDetailAdvance },
            { path: 'date/basic', component: PreviewDate },
        ] },
        { path: 'components', component: Components, children: [
            { path: '', redirect: 'u-link' },
            /* Basic */
            { path: 'u-base', component: () => import('proto-ui.vusion/src/base/README.md') },
            { path: 'u-link', component: () => import('../src/u-link.vue/README.md') },
            { path: 'u-button', component: () => import('../src/u-button.vue/README.md') },
            { path: 'u-badge', component: () => import('proto-ui.vusion/src/u-badge.vue/README.md') },
            { path: 'u-tags', component: () => import('../src/u-tag.vue/README.md') },
            { path: 'u-label', component: () => import('../src/u-label.vue/README.md') },
            { path: 'u-icon', component: () => import('../src/u-icon.vue/README.md') },
            { path: 'u-status-icon', component: () => import('../src/u-status-icon.vue/README.md') },
            { path: 'u-logo', component: () => import('../src/u-logo.vue/README.md') },
            /* Layout */
            { path: 'u-linear-layout', component: () => import('../src/u-linear-layout.vue/README.md') },
            { path: 'u-grid-layout', component: () => import('proto-ui.vusion/src/u-grid-layout.vue/README.md') },
            /* Navigation */
            { path: 'u-navbar', component: () => import('../src/u-navbar.vue/README.md') },
            { path: 'u-sidebar', component: () => import('../src/u-sidebar.vue/README.md') },
            { path: 'u-steps', component: () => import('proto-ui.vusion/src/u-steps.vue/README.md') },
            { path: 'u-subnav', component: () => import('../src/u-subnav.vue/README.md') },
            { path: 'u-tabs', component: () => import('proto-ui.vusion/src/u-tabs.vue/README.md') },
            { path: 'u-subtabs', component: () => import('../src/u-subtabs.vue/README.md') },
            { path: 'u-pagination', component: () => import('proto-ui.vusion/src/u-pagination.vue/README.md') },
            /* Form */
            { path: 'u-input', component: () => import('../src/u-input.vue/README.md') },
            { path: 'u-number-input', component: () => import('../src/u-number-input.vue/README.md') },
            { path: 'u-textarea', component: () => import('../src/u-textarea.vue/README.md') },
            { path: 'u-radios', component: () => import('proto-ui.vusion/src/u-radios.vue/README.md') },
            { path: 'u-checkboxes', component: () => import('proto-ui.vusion/src/u-checkboxes.vue/README.md') },
            { path: 'u-switch', component: () => import('../src/u-switch.vue/README.md') },
            { path: 'u-select', component: () => import('../src/u-select.vue/README.md') },
            { path: 'u-suggest', component: () => import('../src/u-suggest.vue/README.md') },
            { path: 'u-multi-select', component: () => import('../src/u-multi-select.vue/README.md') },
            { path: 'u-color-select', component: () => import('../src/u-color-select.vue/README.md') },
            { path: 'u-slider', component: () => import('../src/u-slider.vue/README.md') },
            { path: 'u-combo-slider', component: () => import('../src/u-combo-slider.vue/README.md') },
            { path: 'u-field', component: Empty },
            { path: 'u-form', component: () => import('../src/u-form.vue/README.md') },
            /* Data */
            { path: 'u-list-view', component: () => import('proto-ui.vusion/src/u-list-view.vue/README.md') },
            { path: 'u-tree-view', component: () => import('proto-ui.vusion/src/u-tree-view.vue/README.md') },
            { path: 'u-table-view', component: () => import('../src/u-table-view.vue/README.md') },
            { path: 'u-capsules', component: () => import('../src/u-capsules.vue/README.md') },
            { path: 'u-pills', component: () => import('../src/u-pills.vue/README.md') },
            { path: 'u-tablets', component: () => import('../src/u-tablets.vue/README.md') },
            /* DateTime */
            { path: 'u-calendar', component: () => import('../src/u-calendar.vue/README.md') },
            { path: 'u-time-picker', component: () => import('../src/u-time-picker.vue/README.md') },
            { path: 'u-date-picker', component: () => import('../src/u-date-picker.vue/README.md') },
            { path: 'u-date-time-picker', component: () => import('../src/u-date-time-picker.vue/README.md') },
            /* Popper */
            { path: 'u-popper', component: () => import('proto-ui.vusion/src/u-popper.vue/README.md') },
            { path: 'u-tooltip', component: () => import('../src/u-tooltip.vue/README.md') },
            { path: 'u-popover', component: () => import('../src/u-popover.vue/README.md') },
            /* Feedback */
            { path: 'u-loading', component: () => import('../src/u-loading.vue/README.md') },
            { path: 'u-toast', component: () => import('../src/u-toast.vue/README.md') },
            { path: 'u-modal', component: () => import('../src/u-modal.vue/README.md') },
            { path: 'u-lightbox', component: () => import('../src/u-lightbox.vue/README.md') },
            /* Progress & Chart */
            { path: 'u-linear-progress', component: () => import('proto-ui.vusion/src/u-linear-progress.vue/README.md') },
            { path: 'u-circular-progress', component: () => import('../src/u-circular-progress.vue/README.md') },
            { path: 'u-chart', component: () => import('../src/u-chart.vue/README.md') },
            { path: 'u-bar-chart', component: () => import('../src/u-bar-chart.vue/README.md') },
            { path: 'u-xbar-chart', component: () => import('../src/u-xbar-chart.vue/README.md') },
            { path: 'u-line-chart', component: () => import('../src/u-line-chart.vue/README.md') },
            { path: 'u-pie-chart', component: () => import('../src/u-pie-chart.vue/README.md') },
            /* Mixin & Utils */
            { path: 'u-emitter', component: () => import('proto-ui.vusion/src/u-emitter.vue/README.md') },
            { path: 'u-router-item', component: () => import('proto-ui.vusion/src/u-router-item.vue/README.md') },
            { path: 'u-collapse-transition', component: () => import('proto-ui.vusion/src/u-collapse-transition.vue/README.md') },
            { path: 'u-draggable', component: () => import('proto-ui.vusion/src/u-draggable.vue/README.md') },
            { path: 'u-droppable', component: () => import('proto-ui.vusion/src/u-droppable.vue/README.md') },
            { path: 'u-dragger', component: () => import('proto-ui.vusion/src/u-dragger.vue/README.md') },

            { path: 'u-desc-list', component: () => import('../src/u-desc-list.vue/README.md') },
            { path: 'u-info-list', component: () => import('../src/u-info-list.vue/README.md') },
        ] },
    ] },
    { path: '*', redirect: '/components' },
];
