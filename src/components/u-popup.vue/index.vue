<template>
    <component 
        v-if="this.mode && this.$env.VUE_APP_DESIGNER" 
        is="u-visible-popup"
        v-bind="[$attrs, $props]"
        v-on="$listeners"
        ref="item"
    >
        <slot v-for="(item, name) in this.$slots" :name="name" :slot="name"></slot>
        <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </component>
    <component 
        v-else 
        v-bind="[$attrs, $props]"
        v-on="$listeners"
        ref="item"
        is="u-popup-real"
    >
        <slot v-for="(item, name) in this.$slots" :name="name" :slot="name"></slot>
        <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </component>
</template>
<script>
import UPopupReal from './popupReal.vue';
import UVisiblePopup from './visiblePopup.vue';

export default {
    name: 'u-popup',
    component: {
        UPopupReal,
        UVisiblePopup,
    },
    props: {
        title: String,
        content: String,
        mode: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
        mergeBorders: { type: Boolean, default: true },
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
        }
    }
};
</script>
