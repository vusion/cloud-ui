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
            // 清除自己
            parentVM.columnVMs.splice(parentVM.columnVMs.indexOf(this), 1);
            this.parentVM = undefined;
            parentVM.dynamicColumnVM = undefined;
        });
    },
    methods: {
        addVms() {
            this.$contact(this.$options.parentName, (parentVM) => {
                parentVM.dynamicColumnVM = this;
                const currentIndex = parentVM.columnVMs.findIndex((vm) => vm === this);
                const vms = this.currentDataSource.data.map((item) => ({
                    ...this,
                    ...this._props,
                    columnItem: item,
                    field: this.$at(item, this.valueField),
                    dynamicId: this._uid,
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
            });
        },
        clearVms(parentVM) {
            parentVM.columnVMs = parentVM.columnVMs.filter((vm) => !vm.dynamicId || vm.dynamicId !== this._uid);
        },
    },
};
</script>
