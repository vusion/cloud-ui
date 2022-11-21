<template>
    <component
        v-if="mode && $env.VUE_APP_DESIGNER"
        is="u-visible-drawer"
        v-bind="[$attrs, $props]"
        v-on="$listeners"
        ref="item"
        :vusion-scope-id="$vnode.context.$options._scopeId"
    >
        <slot v-for="(item, name) in $slots" :name="name" :slot="name"></slot>
        <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
            <slot :name="name" v-bind="slotData"></slot>
        </template>
    </component>
    <component
        v-else
        is="u-drawer-real"
        v-bind="[$attrs, $props]"
        v-on="$listeners"
        ref="item"
        open-event="openEvent"
    >
        <slot v-for="(item, name) in $slots" :name="name" :slot="name"></slot>
        <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
            <slot :name="name" v-bind="slotData"></slot>
        </template>
    </component>
</template>
<script>
import UDrawerReal from './index.vue';
import UVisibleDrawer from './visibleDrawer.vue';
import i18n from './i18n';
export const UDrawer = {
    name: 'u-drawer',
    i18n,
    component: {
        UDrawerReal,
        UVisibleDrawer,
    },
    props: {
        mode: { type: Boolean, default: true },
        visible: { type: Boolean, default: false },
        title: String,
        content: String,
        heading: String,
        okButton: {
            type: String,
            default() {
                return this.$t('ok');
            },
        },
        cancelButton: {
            type: String,
            default() {
                return this.$t('cancel');
            },
        },
        primaryButton: { type: String, default: 'okButton' },
        disableOk: { type: Boolean, default: false },
        disableCancel: { type: Boolean, default: false }, // @deprecated
        width: { type: [String, Number], default: '' },
        size: { type: String, default: 'normal' },
        static: { type: Boolean, default: false },
        icon: String,
        maskClose: { type: Boolean, default: false },
    },
    methods: {
        // 双击打开弹出框
        designerDbControl() {
            this.$refs.item.designerDbControl();
        },
        open() {
            this.$refs.item.open();
        },
        close() {
            this.$refs.item.close();
        },
        ok() {
            this.$refs.item.ok();
        },
        cancel() {
            this.$refs.item.cancel();
        },
        openEvent() {
            this.$emit('open');
        },
    },
};
export default UDrawer;
</script>
