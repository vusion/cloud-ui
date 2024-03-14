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
import Vue from 'vue';

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
            // fix: 2825186155187968 动态列宽度拖动没有实时渲染
            let vms = this.currentDataSource.data.map((item) => {
                const valueField = this.valueField;
                const _this = this;
                const copiedComponent = new Vue({
                    props: _this.$attrs,
                    data() {
                        return Object.assign({}, _this.$data, {
                            columnItem: item,
                        });
                    },
                });
                Object.keys(_this).forEach((key) => {
                    if (key.startsWith('$') && key !== '$attrs' && key !== '$data') {
                        Object.assign(copiedComponent, { [key]: _this[key] });
                    }
                });
                Object.assign(copiedComponent, this._props, {
                    field: this.$at(item, valueField),
                    colSpan: 1, // 列合并还原为默认值
                });
                return copiedComponent;
            });
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
        reload() {
            // 数据源不是function的时候，调用reload会报错，进行容错处理
            if (this.currentDataSource.load)
                this.load();
            else if (this.currentDataSource.data) // valueField里的数据变化时，field需要重新生成
                this.addVms();
        },
    },
};
</script>
