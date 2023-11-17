<template>
    <component
        v-if="mode && $env.VUE_APP_DESIGNER"
        is="u-visible-drawer"
        v-bind="[$attrs, $props]"
        v-on="$listeners"
        :style="getStyle()"
        ref="item"
        :vusion-scope-id="$vnode.context.$options._scopeId"
        :placeholder-in-designer="placeholderInDesigner"
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
import i18nMixin from '../../mixins/i18n';
export const UDrawer = {
    name: 'u-drawer',
    // i18n,
    mixins: [i18nMixin('u-drawer')],
    component: {
        UDrawerReal,
        UVisibleDrawer,
    },
    props: {
        mode: { type: Boolean, default: true },
        visible: { type: Boolean, default: false },
        heading: String,
        okButton: {
            type: String,
            default() {
                return this.$tt('ok');
            },
        },
        cancelButton: {
            type: String,
            default() {
                return this.$tt('cancel');
            },
        },
        primaryButton: { type: String, default: 'okButton' },
        disableOk: { type: Boolean, default: false },
        disableCancel: { type: Boolean, default: false }, // @deprecated
        width: { type: [String, Number], default: '' },
        static: { type: Boolean, default: false },
        icon: String,
        maskClose: { type: Boolean, default: false },
        placement: { type: String, default: 'right' },
        maskClosable: { type: Boolean, default: true },
        showFoot: { type: Boolean, default: true },
        showHead: { type: Boolean, default: true },
        content: { type: String, default: '' },
        title: { type: String, default: '' },
        size: { type: String, default: 'normal' },
        hideMask: { type: Boolean, default: false },
    },
    data() {
        return {
            placeholderInDesigner: undefined,
        };
    },
    mounted() {
        this.getDynamicPlaceholderInDesigner();
    },
    updated() {
        this.getDynamicPlaceholderInDesigner();
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
        getStyle() {
            const { staticStyle = {}, style = {} } = this.$vnode.data;
            return { ...staticStyle, ...style };
        },
        getDynamicPlaceholderInDesigner() {
            if (!(this.mode && this.$env.VUE_APP_DESIGNER)) {
                return '双击编辑抽屉';
            }
            // readme: 由于$slots不是响应式数据，该函数无法改写为computed属性，需要手动在updated和mounted阶段调用
            let title = this.$props.title;

            if (this.$scopedSlots && this.$scopedSlots.title) {
                const firstTextvnode = this.$scopedSlots.title().find((vnode) => vnode && vnode.componentOptions && vnode.componentOptions.tag === 'u-text');
                if (firstTextvnode && firstTextvnode.componentOptions.propsData.text) {
                    title = firstTextvnode.componentOptions.propsData.text;
                }
            }

            const refName = this.$vnode.data.ref;
            const oldPlaceHolder = this.placeholderInDesigner;
            this.placeholderInDesigner = [title && `标题：${title}`, refName && `组件名称：${refName}`, '双击编辑抽屉']
                .filter(Boolean).join('，'); // 注意中文的符号
            if (this.placeholderInDesigner !== oldPlaceHolder) {
                this.$forceUpdate(); // 解决某些情况下对$slots响应不及时导致的问题
            }
        },
    },
};
export default UDrawer;
</script>
