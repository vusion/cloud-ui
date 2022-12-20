<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :isShowMultipleIcon="parentVM.multiple"
    :duplicated="parentVM.duplicated"
    :focused="isFocused"
    :readonly="parentVM.readonly"
    :disabled="disabled || parentVM.disabled"
    @mouseenter="hover"
    :style="{ direction: parentVM.ellipsisDirection }"
    @click="select"
    v-ellipsis-title
    vusion-slot-name="default">
    <!-- @override: 添加了flag功能 -->
    <span v-if="flag !== undefined" :class="$style.flag" :layer="layer" v-tooltip.top="flag"></span>
    <slot>
        {{ text }}
        <s-empty
            v-if="(!$slots.default)
            && !text
            && $env.VUE_APP_DESIGNER
            && !!$attrs['vusion-node-path']">
        </s-empty>
    </slot>
    <div :class="$style.desc" v-if="description || $slots.description">
        <slot name="description">
            {{ description }}
        </slot>
    </div>
</div>
</template>

<script>
import { UListViewItem } from '../u-list-view.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-select-item',
    parentName: 'u-select',
    groupName: 'u-select-group',
    components: {
        SEmpty,
    },
    extends: UListViewItem,
    props: {
        flag: { type: String },
        layer: { type: String },
        text: { type: String },
        description: { type: String },
    },
    computed: {
        isFocused() {
            return this.parentVM && this.parentVM.focusedVM === this;
        },
        currentText() {
            return this.text || this.$slots.default[0] && this.$slots.default[0].text;
        },
    },
    mounted() {
        this.$nextTick(() => {
            if (this.isSelected)
                this.$el.scrollIntoView({ block: 'center' });
        });
    },
    methods: {
        hover() {
            this.parentVM && (this.parentVM.focusedVM = this);
        },
    },
};
</script>

<style module src="./item.css"></style>
