<template>
    <component
        v-if="mode && $env.VUE_APP_DESIGNER"
        is="u-visible-modal"
        v-bind="[$attrs, $props]"
        :style="getStyle()"
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
        is="u-modal-real"
        v-bind="[$attrs, $props]"
        v-on="$listeners"
        ref="item"
    >
        <slot v-for="(item, name) in $slots" :name="name" :slot="name"></slot>
        <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
            <slot :name="name" v-bind="slotData"></slot>
        </template>
    </component>
</template>
<script>
import UModalReal from './index.vue';
import UVisibleModal from './visibleModal.vue';
import i18n from './i18n';
export const UModal = {
    name: 'u-modal',
    i18n,
    component: {
        UModalReal,
        UVisibleModal,
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
        getStyle() {
            const { staticStyle = {}, style = {} } = this.$vnode.data;
            return {...staticStyle, ...style };
        },
    },
};
export default UModal;
</script>
