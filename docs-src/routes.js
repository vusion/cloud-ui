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

import Test from './views/test.md';

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
            { path: 'typography', component: () => import('proto-ui.vusion/src/base/TYPOGRAPHY.md') },
            { path: 'u-link', component: () => import('../src/components/u-link.vue/README.md') },
            { path: 'u-actions', component: () => import('../src/components/u-actions.vue/README.md') },
            { path: 'u-button', component: () => import('../src/components/u-button.vue/README.md') },
            { path: 'u-badge', component: () => import('proto-ui.vusion/src/components/u-badge.vue/README.md') },
            { path: 'u-text', component: () => import('../src/components/u-text.vue/README.md') },
            { path: 'u-label', component: () => import('../src/components/u-label.vue/README.md') },
            { path: 'u-icon', component: () => import('../src/components/u-icon.vue/README.md') },
            { path: 'u-status-icon', component: () => import('../src/components/u-status-icon.vue/README.md') },
            { path: 'u-logo', component: () => import('../src/components/u-logo.vue/README.md') },
            /* Layout */
            { path: 'u-linear-layout', component: () => import('proto-ui.vusion/src/components/u-linear-layout.vue/README.md') },
            { path: 'u-grid-layout', component: () => import('proto-ui.vusion/src/components/u-grid-layout.vue/README.md') },
            { path: 'u-desc-list', component: () => import('../src/components/u-desc-list.vue/README.md') },
            { path: 'u-info-list', component: () => import('../src/components/u-info-list.vue/README.md') },
            /* Navigation */
            { path: 'u-navbar', component: () => import('../src/components/u-navbar.vue/README.md') },
            { path: 'u-sidebar', component: () => import('../src/components/u-sidebar.vue/README.md') },
            { path: 'u-menu', component: () => import('proto-ui.vusion/src/components/u-menu.vue/README.md') },
            { path: 'u-subnav', component: () => import('../src/components/u-subnav.vue/README.md') },
            { path: 'u-tabs', component: () => import('proto-ui.vusion/src/components/u-tabs.vue/README.md') },
            { path: 'u-subtabs', component: () => import('../src/components/u-subtabs.vue/README.md') },
            { path: 'u-steps', component: () => import('proto-ui.vusion/src/components/u-steps.vue/README.md') },
            { path: 'u-selectable-steps', component: () => import('../src/components/u-selectable-steps.vue/README.md') },
            { path: 'u-pagination', component: () => import('proto-ui.vusion/src/components/u-pagination.vue/README.md') },
            { path: 'u-crumb', component: () => import('proto-ui.vusion/src/components/u-crumb.vue/README.md') },
            /* Form */
            { path: 'u-input', component: () => import('../src/components/u-input.vue/README.md') },
            { path: 'u-number-input', component: () => import('proto-ui.vusion/src/components/u-number-input.vue/README.md') },
            { path: 'u-textarea', component: () => import('../src/components/u-textarea.vue/README.md') },
            { path: 'u-radios', component: () => import('proto-ui.vusion/src/components/u-radios.vue/README.md') },
            { path: 'u-checkboxes', component: () => import('proto-ui.vusion/src/components/u-checkboxes.vue/README.md') },
            { path: 'u-switch', component: () => import('../src/components/u-switch.vue/README.md') },
            { path: 'u-select', component: () => import('../src/components/u-select.vue/README.md') },
            { path: 'u-cascade-select', component: () => import('proto-ui.vusion/src/components/u-cascade-select.vue/README.md') },
            { path: 'u-region-select', component: () => import('proto-ui.vusion/src/components/u-region-select.vue/README.md') },
            { path: 'u-slider', component: () => import('proto-ui.vusion/src/components/u-slider.vue/README.md') },
            { path: 'u-combo-slider', component: () => import('../src/components/u-combo-slider.vue/README.md') },
            { path: 'u-field', component: Empty },
            { path: 'u-form', component: () => import('../src/components/u-form.vue/README.md') },
            { path: 'u-uploader', component: () => import('proto-ui.vusion/src/components/u-uploader.vue/README.md') },
            /* Data */
            { path: 'u-list-view', component: () => import('proto-ui.vusion/src/components/u-list-view.vue/README.md') },
            { path: 'u-tree-view', component: () => import('proto-ui.vusion/src/components/u-tree-view.vue/README.md') },
            { path: 'u-old-table-view', component: () => import('../src/components/u-old-table-view.vue/README.md') },
            { path: 'u-table', component: () => import('../src/components/u-table.vue/README.md') },
            { path: 'u-resize-table', component: () => import('../src/components/u-resize-table.vue/README.md') },
            { path: 'u-capsules', component: () => import('../src/components/u-capsules.vue/README.md') },
            { path: 'u-cascade-capsules', component: () => import('../src/components/u-cascade-capsules.vue/README.md') },
            { path: 'u-pills', component: () => import('../src/components/u-pills.vue/README.md') },
            { path: 'u-tablets', component: () => import('../src/components/u-tablets.vue/README.md') },
            { path: 'u-countup', component: () => import('../src/components/u-countup.vue/README.md') },
            { path: 'u-transfer', component: () => import('proto-ui.vusion/src/components/u-transfer.vue/README.md') },
            /* DateTime */
            { path: 'u-calendar', component: () => import('../src/components/u-calendar.vue/README.md') },
            { path: 'u-time-picker', component: () => import('../src/components/u-time-picker.vue/README.md') },
            { path: 'u-date-picker', component: () => import('../src/components/u-date-picker.vue/README.md') },
            { path: 'u-date-time-picker', component: () => import('../src/components/u-date-time-picker.vue/README.md') },
            /* Popper */
            { path: 'm-popper', component: () => import('proto-ui.vusion/src/components/m-popper.vue/README.md') },
            { path: 'u-popup', component: () => import('proto-ui.vusion/src/components/u-popup.vue/README.md') },
            { path: 'u-tooltip', component: () => import('../src/components/u-tooltip.vue/README.md') },
            { path: 'u-drawer', component: () => import('proto-ui.vusion/src/components/u-drawer.vue/README.md') },
            /* Feedback */
            { path: 'u-spinner', component: () => import('proto-ui.vusion/src/components/u-spinner.vue/README.md') },
            { path: 'u-loading', component: () => import('../src/components/u-loading.vue/README.md') },
            { path: 'u-toast', component: () => import('proto-ui.vusion/src/components/u-toast.vue/README.md') },
            { path: 'u-modal', component: () => import('../src/components/u-modal.vue/README.md') },
            { path: 'u-lightbox', component: () => import('../src/components/u-lightbox.vue/README.md') },
            /* Progress & Chart */
            { path: 'u-linear-progress', component: () => import('../src/components/u-linear-progress.vue/README.md') },
            { path: 'u-circular-progress', component: () => import('../src/components/u-circular-progress.vue/README.md') },
            { path: 'u-chart', component: () => import('../src/components/u-chart.vue/README.md') },
            { path: 'u-bar-chart', component: () => import('../src/components/u-bar-chart.vue/README.md') },
            { path: 'u-xbar-chart', component: () => import('../src/components/u-xbar-chart.vue/README.md') },
            { path: 'u-line-chart', component: () => import('../src/components/u-line-chart.vue/README.md') },
            { path: 'u-pie-chart', component: () => import('../src/components/u-pie-chart.vue/README.md') },
            /* Extension */
            { path: 'x-ace-editor', component: () => import('x-ace-editor.vue/README.md') },
            /* Mixin & Utils */
            { path: 'm-emitter', component: () => import('proto-ui.vusion/src/components/m-emitter.vue/README.md') },
            { path: 'f-collapse-transition', component: () => import('proto-ui.vusion/src/components/f-collapse-transition.vue/README.md') },
            { path: 'f-draggable', component: () => import('proto-ui.vusion/src/components/f-draggable.vue/README.md') },
            { path: 'f-droppable', component: () => import('proto-ui.vusion/src/components/f-droppable.vue/README.md') },
            { path: 'f-dragger', component: () => import('proto-ui.vusion/src/components/f-dragger.vue/README.md') },
            /* Test */
            { path: 'test', component: Test },
        ] },
    ] },
    { path: '*', redirect: '/components' },
];
