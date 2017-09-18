import Vue from 'vue';
import Layout from './views/layout.vue';
import Index from './views/index.vue';
import Components from './views/components.vue';

const Empty = Vue.extend({ template: '<div>待完善...</div>' });

export default [
    { path: '/', component: Layout, children: [
        { path: '', component: Index, redirect: '/components' },
        { path: 'components', component: Components, children: [
            { path: '', redirect: 'u-link' },
            /* Basic */
            { path: 'u-base', component: Empty },
            { path: 'u-link', component: () => import('../src/u-link.vue/README.md') },
            { path: 'u-button', component: () => import('../src/u-button.vue/README.md') },
            { path: 'u-badge', component: () => import('../src/u-badge.vue/README.md') },
            { path: 'u-tag', component: () => import('../src/u-tag.vue/README.md') },
            { path: 'u-label', component: Empty },
            { path: 'u-icon', component: () => import('../src/u-icon.vue/README.md') },
            { path: 'u-status-icon', component: () => import('../src/u-status-icon.vue/README.md') },
            { path: 'u-logo', component: () => import('../src/u-logo.vue/README.md') },
            /* Layout */
            { path: 'u-linear-layout', component: () => import('u-linear-layout.vue/README.md') },
            { path: 'u-grid', component: Empty },
            /* Navigation */
            { path: 'u-navbar', component: () => import('../src/u-navbar.vue/README.md') },
            { path: 'u-sidebar', component: () => import('../src/u-sidebar.vue/README.md') },
            { path: 'u-subnav', component: () => import('../src/u-subnav.vue/README.md') },
            { path: 'u-tabs', component: () => import('../src/u-tabs.vue/README.md') },
            { path: 'u-pagination', component: () => import('../src/u-pagination.vue/README.md') },
            /* Form */
            { path: 'u-input', component: () => import('../src/u-input.vue/README.md') },
            { path: 'u-number-input', component: () => import('../src/u-number-input.vue/README.md') },
            { path: 'u-textarea', component: () => import('../src/u-textarea.vue/README.md') },
            { path: 'u-select', component: () => import('../src/u-select.vue/README.md') },
            { path: 'u-multi-select', component: () => import('../src/u-multi-select.vue/README.md') },
            { path: 'u-color-select', component: () => import('../src/u-color-select.vue/README.md') },
            { path: 'u-checkbox', component: () => import('u-checkbox.vue/README.md') },
            { path: 'u-switch', component: () => import('../src/u-switch.vue/README.md') },
            /* { path: 'u-slider', component: () => import('../src/u-slider.vue/README.md') },*/
            { path: 'u-field', component: Empty },
            { path: 'u-form-item', component: Empty },
            { path: 'u-form', component: () => import('../src/u-form.vue/README.md') },
            /* Data */
            { path: 'u-list-view', component: () => import('u-list-view.vue/README.md') },
            { path: 'u-tree-view', component: () => import('u-tree-view.vue/README.md') },
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
            { path: 'u-popper', component: () => import('../src/u-popper.vue/README.md') },
            { path: 'u-tooltip', component: () => import('../src/u-tooltip.vue/README.md') },
            { path: 'u-popover', component: () => import('../src/u-popover.vue/README.md') },
            /* Feedback */
            { path: 'u-loading', component: () => import('../src/u-loading.vue/README.md') },
            { path: 'u-toast', component: () => import('../src/u-toast.vue/README.md') },
            { path: 'u-modal', component: () => import('../src/u-modal.vue/README.md') },
            /* Progress & Chart */
            { path: 'u-linear-progress', component: () => import('u-linear-progress.vue/README.md') },
            { path: 'u-circular-progress', component: () => import('../src/u-circular-progress.vue/README.md') },
            { path: 'u-chart', component: () => import('../src/u-chart.vue/README.md') },
            { path: 'u-bar-chart', component: () => import('../src/u-bar-chart.vue/README.md') },
            { path: 'u-xbar-chart', component: () => import('../src/u-xbar-chart.vue/README.md') },
            { path: 'u-line-chart', component: () => import('../src/u-line-chart.vue/README.md') },
            { path: 'u-pie-chart', component: () => import('../src/u-pie-chart.vue/README.md') },
            /* Mixin & Utils */
            { path: 'u-emitter', component: Empty },
            { path: 'u-router-item', component: Empty },
            { path: 'u-draggable', component: Empty },
            { path: 'u-droppable', component: Empty },
            { path: 'u-movable', component: Empty },
        ] },
    ] },
    { path: '*', redirect: '/components' },
];
