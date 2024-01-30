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
import { Formatter, parseFormatters, placeholderFormatter } from '../../utils/Formatters';

export default {
    name: 'u-table-view-column',
    parentName: 'u-table-view',
    mixins: [MEmitter],
    props: {
        type: String,
        startIndex: { type: Number, default: 1 },
        autoIndex: { type: Boolean, default: false },
        title: String,
        field: String,
        width: [String, Number],
        fixed: { type: Boolean, default: false },
        sortable: { type: Boolean, default: false },
        sortCompare: { type: Function },
        defaultOrder: String,
        filters: { type: Array },
        ellipsis: { type: Boolean, default: undefined },
        formatter: { type: [String, Object, Function, Formatter], default: 'placeholder' },
        hidden: { type: Boolean, default: false },
        dblclickHandler: Function,
        filterMultiple: { type: Boolean, default: false },
        filterMax: Number,
        colSpan: Number,
        autoRowSpan: { type: Boolean, default: false },
        expanderPosition: { type: String, default: 'left' },
        thEllipsis: { type: Boolean, default: undefined }, // 表头是否缩略展示
    },
    data() {
        const data = {
            parentVM: undefined,
            filterVM: undefined,
            currentWidth: this.width === undefined ? undefined : this.width + '',
            computedWidth: this.width === undefined ? undefined : this.width + '',
            currentFormatter: undefined,
            currentHidden: this.hidden,
            isUnderGroup: false,
        };
        if (typeof this.formatter === 'object')
            data.currentFormatter = this.formatter;
        else if (typeof this.formatter === 'string') {
            data.currentFormatter = {
                _format: parseFormatters(this.formatter),
                format(value) {
                    return this._format(value);
                },
            };
        } else if (typeof this.formatter === 'function') {
            data.currentFormatter = { format: this.formatter };
        } else
            data.currentFormatter = placeholderFormatter;
        return data;
    },
    watch: {
        width(width) {
            this.currentWidth = width === undefined ? undefined : width + '';
            this.computedWidth = width === undefined ? undefined : width + '';
            // this.parentVM.handleResize(); // 暂时不需要，dataSource 会触发此方法
        },
        hidden(value) {
            this.currentHidden = value;
            // 分组下的列用hidden控制显隐，分组需要重新计算colSpan等
            this.$contact('u-table-view', (parentVM) => {
                const hasGroupedColumn = !!Object.keys(parentVM.columnGroupVMs).length;
                if (hasGroupedColumn) {
                    this.$dispatch(
                        ($parent) => $parent.$options.name && $parent.$options.name === 'u-table-view',
                        'handle-columns',
                    );
                }
            });
        },
        autoRowSpan() {
            this.$nextTick(() => {
                this.parentVM && this.parentVM.autoMergeRow();
            });
        },
    },
    created() {
        this.$contact('u-table-view', (parentVM) => {
            this.parentVM = parentVM;
            parentVM.columnVMsMap[this._uid] = {
                vnode: this.$vnode,
                columnVM: this,
            };
            this.$dispatch(
                ($parent) => $parent.$options.name && $parent.$options.name === 'u-table-view',
                'handle-columns',
            );
        });
    },
    destroyed() {
        this.$contact('u-table-view', (parentVM) => {
            parentVM.columnVMsMap[this._uid] = null;
            this.$dispatch(
                ($parent) => $parent.$options.name && $parent.$options.name === 'u-table-view',
                'handle-columns',
            );
        });
    },
};
</script>
