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
        title: String,
        field: String,
        width: [String, Number],
        fixed: { type: Boolean, default: false },
        sortable: { type: Boolean, default: false },
        sortCompare: { type: Function },
        defaultOrder: String,
        filters: { type: Array },
        ellipsis: { type: Boolean, default: false },
        formatter: { type: [String, Object, Function, Formatter], default: 'placeholder' },
        hidden: { type: Boolean, default: false },
        dblclickHandler: Function,
        filterMultiple: { type: Boolean, default: false },
        filterMax: Number,
    },
    data() {
        const data = {
            parentVM: undefined,
            filterVM: undefined,
            currentWidth: this.width === undefined ? undefined : this.width + '',
            computedWidth: this.width === undefined ? undefined : this.width + '',
            currentFormatter: undefined,
            currentHidden: this.hidden,
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
        },
    },
    created() {
        !this.parentVM
            && this.$contact(this.$options.parentName, (parentVM) => {
                this.parentVM = parentVM;
                let slotVms = parentVM.$slots.default || [];
                slotVms = slotVms.filter((vm) => !!vm.tag);
                const index = slotVms.indexOf(this.$vnode);
                if (~index)
                    parentVM.columnVMs.splice(index, 0, this);
                else {
                    parentVM.columnVMs.push(this);
                }
            });
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            parentVM.columnVMs.splice(parentVM.columnVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
    },
};
</script>
