<template>
    <span :class="$env.VUE_APP_DESIGNER? [$style.root, $style.rootDesigner]:$style.root" :display="display" :ellipsis="ellipsis">
        <span vusion-slot-name="reference" :class="$style.reference">
            <slot name="reference"></slot>
            <s-empty v-if="$env.VUE_APP_DESIGNER && !$slots.reference"></s-empty>
        </span>
        <u-popup reference="prev" v-bind="$attrs" v-on="$listeners" ref="popup" :vusion-scope-id="$vnode.context.$options._scopeId">
            <slot></slot>
        </u-popup>
    </span>
</template>

<script>
import UPopup from '../u-popup.vue/wrapPopup.vue';
import SEmpty from '../../components/s-empty.vue';
export default {
    name: 'u-popup-combination',
    components: { SEmpty, UPopup },
    props: {
        display: String,
        ellipsis: Boolean,
    },
    methods: {
        // 双击打开弹出框
        designerDbControl() {
            this.$refs.popup.designerDbControl();
        },
    },
};
</script>

<style module>
.root{
    display: inline-block;
    vertical-align: middle;
}
.root[display="block"]{
    display: block;
}
.root[ellipsis] {
    width: 100%;
}
.root[ellipsis] .reference {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.root[ellipsis] .reference > * {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.rootDesigner{
    padding: 5px;
    border: 1px dashed #C3C3C3;
    min-height: 100px;
}
.reference{
    display: inline-block;
}
</style>

