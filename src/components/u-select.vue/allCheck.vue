<template>
    <div :class="$style.root"
        :selected="allChecked === true"
        :partial-selected="allChecked === null"
        :focused="isFocused"
        :readonly="parentVM.readonly"
        :disabled="parentVM.disabled"
        @mouseenter="hover"
        :style="{ direction: parentVM.ellipsisDirection }"
        @click="select"
        isShowMultipleIcon
        v-ellipsis-title>
        全选
    </div>
</template>
<script>

export default {
    name: 'u-select-item-all-check',
    props: {
        allChecked: [Boolean, null],
        checkAll: Function,
        parentVM: Object,
    },
    computed: {
        isFocused() {
            return this.parentVM && this.parentVM.focusedVM === this;
        },
        currentText() {
            return this.text || this.$slots.default[0] && this.$slots.default[0].text;
        },
    },
    methods: {
        hover() {
            this.parentVM && (this.parentVM.focusedVM = this);
        },
        select() {
            this.checkAll(this.allChecked !== true);
        },
    },
};
</script>

<style module>
.root {
    cursor: var(--cursor-pointer);
    padding: var(--list-view-item-padding);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    line-height: 32px;
    color: var(--select-popper-item-color);
    background: var(--select-popper-item-background);
}

.root {
    padding-top: 0;
    padding-bottom: 0;
}

.root[readonly] {
    cursor: default !important;
    color: var(--select-popper-item-color-readonly);
    background: var(--select-popper-item-background-readonly);
}

.root[focused] {
    color: var(--select-popper-item-color-focused);
    background: var(--select-popper-item-background-focused);
}

.root[selected] {
    color: var(--select-popper-item-color-selected);
    background: var(--select-popper-item-background-selected);
}

.root:hover {
    color: var(--select-popper-item-color-hover);
    background: var(--select-popper-item-background-hover);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--list-view-item-background-disabled);
    color: var(--list-view-item-color-disabled);
    opacity: 0.5;
}

.root[selected][disabled] {
    color: var(--select-popper-item-color-selected-disabled);
    background: var(--select-popper-item-background-selected-disabled);
}

.root[duplicated] {
    color: var(--select-popper-item-color-duplicated);
    background: var(--select-popper-item-background-duplicated);
}

.root[duplicated]:hover {
    color: var(--select-popper-item-color-duplicated-hover);
    background: var(--select-popper-item-background-duplicated-hover);
}

.root[isShowMultipleIcon]::before {
    content: "";
    box-sizing: border-box;
    display: inline-block;
    width: 18px;
    height: 18px;
    border: var(--select-multiple-border-color);
    border-radius: 4px;
    vertical-align: text-top;
    margin-right: 8px;
}

.root[isShowMultipleIcon][selected]:before {
    border-color: transparent;
    background-color: var(--select-multiple-background-color);
}

.root[isShowMultipleIcon][selected]:after {
    position: absolute;
    left: 13px;
    top: 0px;
    font-size: 16px;
    color: var(--select-multiple-icon-color);
    icon-font: url('../i-icon.vue/icons/select-dark.svg');
}

.root[isShowMultipleIcon][partial-selected]:after {
    position: absolute;
    height: 8px;
    width: 8px;
    left: 21px;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    content: '';
    background: var(--select-multiple-partial-icon-color);
    border-radius: 2px;
}

.flag {
    position: absolute;
    top: 0;
    left: 0;
    border: 7px solid;
    border-color: #4ec9ab transparent transparent #4ec9ab;
}

.flag[layer="high"] {
    width: 14px;
    height: 14px;
    border: none;
    background-image: url("../../assets/images/high.png");
}

.desc {
    color: var(--select-popper-item-description-color);
    font-size: var(--select-popper-item-description-font-size);
    line-height: var(--select-popper-item-description-line-height);
    margin-top: -3px;
    margin-bottom: 5px;
    white-space: initial;
}
.root[selected] .desc {
    color: var(--select-popper-item-description-selected-color);
}
</style>
