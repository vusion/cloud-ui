import Vue from 'vue';
import Layout from './views/layout.vue';
import Index from './views/index.vue';
import Components from './views/components.vue';

const Empty = Vue.extend({ template: '<div>待完善...</div>' });

export default [
    { path: '/', component: Layout, children: [
        { path: '', component: Index, redirect: '/components' },
        { path: 'components', component: Components, children: [
            { path: '', redirect: 'quickstart' },
            { path: 'quickstart', component: () => import(/* webpackChunkName: 'component' */'./views/guide/quickstart.md') },
            { path: 'pattern', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/docs/views/guide/pattern.md') },
            /* Basic */
            { path: 'typography', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/base/typography.md') },
            { path: 'u-link', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-link.vue/README.md') },
            { path: 'u-button', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-button.vue/README.md') },
            { path: 'u-badge', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-badge.vue/README.md') },
            { path: 'u-text', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-text.vue/README.md') },
            { path: 'u-label', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-label.vue/README.md') },
            { path: 'u-actions', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-actions.vue/README.md') },
            { path: 'u-icon', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-icon.vue/README.md') },
            { path: 'u-status-icon', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-status-icon.vue/README.md') },
            { path: 'u-logo', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-logo.vue/README.md') },
            /* Layout */
            { path: 'u-linear-layout', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-linear-layout.vue/README.md') },
            { path: 'u-grid-layout', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-grid-layout.vue/README.md') },
            { path: 'u-desc-list', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-desc-list.vue/README.md') },
            { path: 'u-info-list', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-info-list.vue/README.md') },
            { path: 'u-table', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-table.vue/README.md') },
            /* Navigation */
            { path: 'u-navbar', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-navbar.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-navbar.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-navbar.vue/docs/api.md') },
            ] },
            { path: 'u-sidebar', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-sidebar.vue/README.md') },
            { path: 'u-menu', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-menu.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-menu.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-menu.vue/docs/api.md') },
            ] },
            { path: 'u-subnav', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-subnav.vue/README.md') },
            { path: 'u-tabs', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tabs.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tabs.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tabs.vue/docs/api.md') },
            ] },
            { path: 'u-subtabs', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-subtabs.vue/README.md') },
            { path: 'u-steps', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-steps.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-steps.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-steps.vue/docs/api.md') },
            ] },
            { path: 'u-selectable-steps', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-selectable-steps.vue/README.md') },
            { path: 'u-pagination', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-pagination.vue/README.md') },
            { path: 'u-crumb', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-crumb.vue/README.md') },
            /* Form */
            { path: 'u-input', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-input.vue/README.md') },
            { path: 'u-number-input', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-number-input.vue/README.md') },
            { path: 'u-textarea', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-textarea.vue/README.md') },
            { path: 'u-radios', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-radios.vue/README.md') },
            { path: 'u-checkboxes', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-checkboxes.vue/README.md') },
            { path: 'u-switch', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-switch.vue/README.md') },
            { path: 'u-select', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-select.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-select.vue/docs/examples.md') },
                { path: 'data', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-select.vue/docs/data.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-select.vue/docs/api.md') },
            ] },
            { path: 'u-cascade-select', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-cascade-select.vue/README.md') },
            { path: 'u-region-select', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-region-select.vue/README.md') },
            { path: 'u-slider', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-slider.vue/README.md') },
            { path: 'u-combo-slider', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-combo-slider.vue/README.md') },
            { path: 'u-field', component: Empty },
            { path: 'u-form', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-form.vue/README.md') },
            { path: 'u-uploader', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-uploader.vue/README.md') },
            /* Data */
            { path: 'u-list-view', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-list-view.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-list-view.vue/docs/examples.md') },
                { path: 'data', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-list-view.vue/docs/data.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-list-view.vue/docs/api.md') },
            ] },
            { path: 'u-tree-view', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tree-view.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tree-view.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tree-view.vue/docs/api.md') },
            ] },
            { path: 'u-table-view', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-table-view.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-table-view.vue/docs/examples.md') },
                { path: 'data', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-table-view.vue/docs/data.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-table-view.vue/docs/api.md') },
            ] },
            { path: 'u-old-table-view', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-old-table-view.vue/README.md') },
            { path: 'u-resize-table', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-resize-table.vue/README.md') },
            { path: 'u-capsules', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-capsules.vue/README.md') },
            { path: 'u-cascade-capsules', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-cascade-capsules.vue/README.md') },
            { path: 'u-pills', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-pills.vue/README.md') },
            { path: 'u-tablets', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-tablets.vue/README.md') },
            { path: 'u-countup', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-countup.vue/README.md') },
            { path: 'u-transfer', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-transfer.vue/README.md') },
            /* DateTime */
            { path: 'u-calendar', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-calendar.vue/README.md') },
            { path: 'u-time-picker', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-time-picker.vue/README.md') },
            { path: 'u-date-picker', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-date-picker.vue/README.md') },
            { path: 'u-date-time-picker', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-date-time-picker.vue/README.md') },
            /* Popper */
            { path: 'm-popper', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-popper.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-popper.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-popper.vue/docs/api.md') },
            ] },
            { path: 'u-popup', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-popup.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-popup.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-popup.vue/docs/api.md') },
            ] },
            { path: 'u-tooltip', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tooltip.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tooltip.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-tooltip.vue/docs/api.md') },
            ] },
            /* Feedback */
            { path: 'u-spinner', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-spinner.vue/README.md') },
            { path: 'u-loading', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-loading.vue/README.md') },
            { path: 'u-toast', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-toast.vue/README.md') },
            { path: 'u-modal', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-modal.vue/README.md') },
            { path: 'u-lightbox', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-lightbox.vue/README.md') },
            { path: 'u-drawer', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-drawer.vue/README.md') },
            /* Effects */
            { path: 'u-carousel', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/u-carousel.vue/README.md') },
            { path: 'e-ripple', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/e-ripple.vue/README.md') },
            { path: 'e-watermark', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/e-watermark.vue/README.md') },
            /* Progress & Chart */
            { path: 'u-linear-progress', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-linear-progress.vue/README.md') },
            { path: 'u-circular-progress', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-circular-progress.vue/README.md') },
            { path: 'u-chart', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-chart.vue/README.md') },
            { path: 'u-bar-chart', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-bar-chart.vue/README.md') },
            { path: 'u-xbar-chart', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-xbar-chart.vue/README.md') },
            { path: 'u-line-chart', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-line-chart.vue/README.md') },
            { path: 'u-pie-chart', component: () => import(/* webpackChunkName: 'component' */'../src/components/u-pie-chart.vue/README.md') },
            /* Extension */
            { path: 'x-ace-editor', component: () => import(/* webpackChunkName: 'component' */'x-ace-editor.vue/README.md') },
            /* Mixin & Utils */
            { path: 'm-emitter', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-emitter.vue/README.md') },
            { path: 'm-parent', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-parent.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-parent.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-parent.vue/docs/api.md') },
            ] },
            { path: 'm-group', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-group.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-group.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-group.vue/docs/api.md') },
            ] },
            { path: 'm-root', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-root.vue/README.md') },
            { path: 'm-singlex', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-singlex.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-singlex.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-singlex.vue/docs/api.md') },
            ] },
            { path: 'm-multiplex', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-multiplex.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-multiplex.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-multiplex.vue/docs/api.md') },
            ] },
            { path: 'm-complex', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-complex.vue/README.md'), children: [
                { path: '', redirect: 'examples' },
                { path: 'examples', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-complex.vue/docs/examples.md') },
                { path: 'api', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/m-complex.vue/docs/api.md') },
            ] },
            { path: 'f-collapse-transition', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/f-collapse-transition.vue/README.md') },
            { path: 'f-draggable', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/f-draggable.vue/README.md') },
            { path: 'f-droppable', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/f-droppable.vue/README.md') },
            { path: 'f-dragger', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/f-dragger.vue/README.md') },
            { path: 'f-render', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/f-render.vue/README.md') },
            { path: 'f-forbidden', component: () => import(/* webpackChunkName: 'component' */'proto-ui.vusion/src/components/f-forbidden.vue/README.md') },
        ] },
    ] },
    { path: '*', redirect: '/components' },
];
