<template>
    <component
        v-if="mode && $env.VUE_APP_DESIGNER"
        is="u-visible-modal"
        v-bind="[$attrs, $props]"
        :style="getStyle()"
        v-on="$listeners"
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
import i18nMixin from '../../mixins/i18n';

export const UModal = {
    name: 'u-modal',
    // i18n,
    mixins: [i18nMixin('u-modal')],
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
        size: { type: String, default: 'normal' },
        static: { type: Boolean, default: false },
        icon: { type: String, default: null },
        maskClose: { type: Boolean, default: false },
        disableEsc: { type: Boolean, default: false },
        customClass: { type: String, default: undefined },
        functionalModal: { type: Boolean, default: false },
        showFoot: { type: Boolean, default: true },
        isTitleSlotEmpty: { type: Boolean, default: false }, // 有插槽template但是不想展示的情况
        isFootSlotEmpty: { type: Boolean, default: false },
        showHead: { type: Boolean, default: true },
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
        getStyle() {
            const { staticStyle = {}, style = {} } = this.$vnode.data;
            return { ...staticStyle, ...style };
        },
        getDynamicPlaceholderInDesigner() {
            if (!(this.mode && this.$env.VUE_APP_DESIGNER)) {
                return '双击编辑弹窗';
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
            this.placeholderInDesigner = [title && `标题：${title}`, refName && `组件名称：${refName}`, '双击编辑弹窗']
                .filter(Boolean).join('，'); // 注意中文的符号
            if (this.placeholderInDesigner !== oldPlaceHolder) {
                this.$forceUpdate(); // 解决某些情况下对$slots响应不及时导致的问题
            }
        },
    },
};
export default UModal;
</script>
