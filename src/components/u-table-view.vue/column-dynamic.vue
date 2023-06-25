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
            parentVM.columnVMs.splice(parentVM.columnVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
    },
    methods: {
        addVms() {
            this.$contact(this.$options.parentName, (parentVM) => {
                const currentIndex = parentVM.columnVMs.findIndex((vm) => vm === this);
                const vms = this.currentDataSource.data.map((item) => {
                    this.columnItem = item;
                    return this;
                });
                vms.forEach((vm, index) => {
                    parentVM.columnVMs.splice(currentIndex + index, 1, vm);
                });
            });
        },
    },
};
</script>
