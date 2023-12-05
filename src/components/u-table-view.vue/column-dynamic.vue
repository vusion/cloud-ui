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
    created() {
        this.addVms();
    },
    destroyed() {
        this.$contact('u-table-view', (parentVM) => {
            parentVM.columnVMsMap[this._uid] = null;
            parentVM.dynamicColumnVMsMap[this._uid] = null;
            this.$dispatch(
                ($parent) => $parent.$options.name && $parent.$options.name === 'u-table-view',
                'handle-columns',
            );
        });
    },
    methods: {
        addVms() {
            let vms = this.currentDataSource.data.map((item) => ({
                ...this,
                ...this._props,
                columnItem: item,
                field: this.$at(item, this.valueField),
                dynamicId: this._uid,
                colSpan: 1, // 列合并还原为默认值
            }));
            // 适配 IDE 展示
            if (this.$env.VUE_APP_DESIGNER) {
                vms = [this];
            }
            this.$contact('u-table-view', (parentVM) => {
                this.parentVM = parentVM;
                parentVM.columnVMsMap[this._uid] = {
                    vnode: this.$vnode,
                    columnVM: this,
                };
                parentVM.dynamicColumnVMsMap[this._uid] = {
                    columnVM: this,
                    vms,
                };
                this.$dispatch(
                    ($parent) => $parent.$options.name && $parent.$options.name === 'u-table-view',
                    'handle-columns',
                );
            });
        },
    },
};
</script>
