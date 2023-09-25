<template>
    <div v-show="false">
        <div v-if="false">
            <slot name="title"></slot>
            <slot name="cell"></slot>
            <slot name="expand-content"></slot>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import MEmitter from '../m-emitter.vue';
import SupportDataSource from '../../mixins/support.datasource.js';
import UTableViewColumn from './column.vue';

export default {
    name: 'u-table-view-column-dynamic',
    parentName: 'u-table-view',
    extends: UTableViewColumn,
    mixins: [MEmitter, SupportDataSource],
    watch: {
        'currentDataSource.data'(value) {
            this.addVms();
        },
        dataSource(value) {
            this.$nextTick(() => {
                if (this.currentDataSource && this.currentDataSource.load)
                    this.load();
            });
        },
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            // 清除添加的
            this.clearVms(parentVM);
            const index = parentVM.dynamicColumnVMs.findIndex(item => item === this);
            if (index > -1) {
                parentVM.dynamicColumnVMs.splice(index, 1);
            }
        });
    },
    methods: {
        addVms() {
            this.$contact(this.$options.parentName, (parentVM) => {
                parentVM.dynamicColumnVMs.push(this);
                const isUnderGroup = this.$parent.$options.name === 'u-table-view-column-group'
                const currentIndex = parentVM.columnVMs.findIndex((vm) => vm === this);
                const vms = this.currentDataSource.data.map((item) => ({
                    ...this,
                    ...this._props,
                    columnItem: item,
                    field: this.$at(item, this.valueField),
                    dynamicId: this._uid,
                    colSpan: 1, // 列合并还原为默认值
                    isUnderGroup
                }));
                if (vms.length === 0) return;
                // this是初始加载的组件，需要保留作为后续查找依据
                this.columnItem = vms[0].columnItem;
                this.field = vms[0].field;
                this.clearVms(parentVM);
                vms.shift();
                vms.forEach((vm, index) => {
                    parentVM.columnVMs.splice(currentIndex + 1 + index, 0, vm);
                });
                if (isUnderGroup) {
                    this.$set(this.$parent.dynamicColumnLengthMap, this._uid, vms.length)
                }
            });
        },
        clearVms(parentVM) {
            parentVM.columnVMs = parentVM.columnVMs.filter((vm) => !vm.dynamicId || vm.dynamicId !== this._uid);
            if (this.$parent.$options.name === 'u-table-view-column-group') {
                this.$delete(this.$parent.dynamicColumnLengthMap, this._uid)
            }
        },
    },
};
/**
 * TODO: 动态列和表头分组一起使用的问题：
 * 1. 第一次加载时，动态列直接插入到 columnVMs，不经过 group，可能会错位
 * 2. 动态列更新后，重新插入也会错位
 * 3. group 重新删除再渲染，会丢失动态列的内容
 */
</script>
