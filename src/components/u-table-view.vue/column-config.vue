<template>
<div v-show="false"></div>
</template>
<script>
import MEmitter from '../m-emitter.vue';
import SupportDataSource from '../../mixins/support.datasource.js';

export default {
    name: 'u-table-view-column-config',
    parentName: 'u-table-view',
    mixins: [MEmitter, SupportDataSource],
    props: {
        showColumnValue: { type: Array }, // 配置列下拉数据里的选中项
        hiddenConfig: { type: Boolean, default: false }, // 隐藏配置列的下拉弹层
    },
    data() {
        const data = {
            parentVM: undefined,
            currentShowColumnValue: this.showColumnValue,
        };
        return data;
    },
    watch: {
        showColumnValue(value) {
            this.currentShowColumnValue = value;
        },
    },
    created() {
        !this.parentVM
            && this.$contact(this.$options.parentName, (parentVM) => {
                this.parentVM = parentVM;
                parentVM.configColumnVM = this;
            });
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            parentVM.configColumnVM = undefined;
            this.parentVM = undefined;
        });
    },
};
</script>
