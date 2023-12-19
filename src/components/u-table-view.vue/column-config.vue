<template>
<div :class="$style.root">
    <span vusion-slot-name="title" vusion-click-enabled>
        <slot name="title">
            <s-empty
                v-if="!($slots && $slots.title)
                    && $env.VUE_APP_DESIGNER
                    && !!$attrs['vusion-node-path']">
            </s-empty>
        </slot>
        <u-table-view-filters-popper
            :value="currentValue"
            :data="currentDataSource.data"
            :text-field="textField"
            :value-field="valueField"
            :multiple="true"
            :hidden="hiddenConfig"
            :show-footer="showFooter"
            @select="onSelectShowColumns($event)"
            @load="onLoadConfigList()"
            :vusion-scope-id="$vnode.context.$options._scopeId"
            :vusion-node-path="$attrs['vusion-node-path']"
            :vusion-node-tag="$attrs['vusion-node-tag']"
            vusion-slot-name="item"
            :class="[{[$style.designerMask]: dataSource && $env.VUE_APP_DESIGNER}]"
            ref="filterPopper"
            @open="onPopperOpen">
            <template #item="item" v-if="dataSource">
                <slot name="item" v-bind="item"></slot>
                <s-empty v-if="$scopedSlots
                && !($scopedSlots.item && $scopedSlots.item(item))
                && $env.VUE_APP_DESIGNER
                && !!$attrs['vusion-node-path']
                && !!dataSource"></s-empty>
            </template>
            <template #footer>
                <u-link @click="confirm">确定</u-link>
                <u-link @click="cancel">取消</u-link>
            </template>
        </u-table-view-filters-popper>
    </span>
</div>
</template>
<script>
import MEmitter from '../m-emitter.vue';
import SupportDataSource from '../../mixins/support.datasource.js';
import SEmpty from '../../components/s-empty.vue';

export default {
    name: 'u-table-view-column-config',
    parentName: 'u-table-view',
    components: {
        SEmpty,
    },
    mixins: [MEmitter, SupportDataSource],
    props: {
        value: { type: Array }, // 配置列下拉数据里的选中项
        hiddenConfig: { type: Boolean, default: false }, // 隐藏配置列的下拉弹层
        showFooter: { type: Boolean, default: true },
    },
    data() {
        const data = {
            parentVM: undefined,
            currentValue: this.value || [],
        };
        return data;
    },
    watch: {
        value(value, oldValue) {
            this.currentValue = value;
            this.handleColumnsHidden(value);
        },
        'currentDataSource.data'(value) {
            this.setCurrentValue(value);
        },
        dataSource(dataSource, oldDataSource) {
            // 当绑定的是:data-source=['name']这样的，watch会一直进来，所以增加判断
            if (typeof dataSource === 'function' || typeof oldDataSource === 'function') {
                if (String(dataSource) === String(oldDataSource))
                    return;
            } else if (JSON.stringify(dataSource) === JSON.stringify(oldDataSource)) {
                return;
            }
            this.$nextTick(() => {
                this.currentValue = [];
                if (this.currentDataSource && this.currentDataSource.load)
                    this.load();
                this.handleColumnsData();
            });
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
        });
    },
    methods: {
        /**
         * 获取配置列的下拉数据
         * 有数据源的情况下返回数据源
         * 没有数据源解析每一列的数据，如果title是插槽，只处理第一层组件是u-text的情况
         */
        getConfigurabeList() {
            // 解析列得到默认值
            if (!this.parentVM)
                return [];
            const columnVMs = this.parentVM.columnVMs;
            const data = [];
            columnVMs.forEach((columnVM) => {
                if (columnVM.field) {
                    if (columnVM.title) {
                        data.push({ text: columnVM.title, value: columnVM.field });
                    } else {
                        const titleSlot = columnVM.$slots.title && columnVM.$slots.title[0];
                        if (titleSlot && titleSlot.tag && titleSlot.tag.endsWith('u-text')) {
                            const title = titleSlot.componentOptions && titleSlot.componentOptions.propsData && titleSlot.componentOptions.propsData.text;
                            if (title) {
                                data.push({ text: title, value: columnVM.field });
                            }
                        }
                    }
                }
            });
            this.currentDataSource.data = data;
        },
        /**
         * 选中展示列
         */
        onSelectShowColumns(event, columnVM) {
            const value = event.value || [];
            this.currentValue = value;
            this.handleColumnsHidden(value);
            // 抛出事件和双向绑定值
            this.$emit('update:value', value);
            this.$emit('select', event);
        },
        /**
         * 初始时处理显隐
         */
        handleInitColumnsHidden() {
            const selectedValues = this.currentValue;
            this.handleColumnsHidden(selectedValues);
        },
        /**
         * 处理列显隐
         */
        handleColumnsHidden(selectedValue) {
            if (!this.parentVM)
                return;
            const columnVMs = this.parentVM.columnVMs;
            if (!selectedValue)
                return;
            // 有些列可能不参与隐藏处理，即不在配置列的下拉数据里，这种列不能隐藏
            const configList = this.currentDataSource.data.map((item) => (this.$at(item, this.valueField) || item.value || item));
            for (let i = 0; i < columnVMs.length; i++) {
                const columnVM = columnVMs[i];
                if (columnVM.field
                    && configList.includes(columnVM.field)
                    && !selectedValue.includes(columnVM.field)) {
                    columnVM.currentHidden = true;
                    this.setColSpanColumn(columnVM, i, columnVMs);
                    if (columnVM.colSpan > 1) {
                        i = i + columnVM.colSpan;
                    }
                } else {
                    columnVM.currentHidden = columnVM.hidden;
                    this.setColSpanColumn(columnVM, i, columnVMs);
                    if (columnVM.colSpan > 1) {
                        i = i + columnVM.colSpan;
                    }
                }
            }
        },
        setColSpanColumn(columnVM, index, list) {
            if (columnVM.colSpan > 1) {
                for (let j = index + 1; j < index + columnVM.colSpan && j < list.length; j++) {
                    list[j].currentHidden = columnVM.currentHidden;
                }
            }
        },
        /**
         * 配置列的下拉数据可能是个函数，需要等数据回来后再处理一遍显隐
         */
        onLoadConfigList() {
            this.handleInitColumnsHidden();
        },
        handleColumnsData() {
            if (!this.dataSource) {
                this.getConfigurabeList();
            }
            this.handleInitColumnsHidden();
        },
        setCurrentValue(value) {
            if (!this.currentValue || (!this.value && !this.currentValue.length)) {
                this.currentValue = value.map((item) => this.$at(item, this.valueField) || item.value || item);
            }
        },
        confirm() {
            this.$refs.filterPopper.confirm();
        },
        cancel() {
            this.$refs.filterPopper.cancel();
        },
        onPopperOpen() {
            if (this.$env.VUE_APP_DESIGNER)
                this.handleColumnsData();
        },
    },
};
</script>

<style module>
.root {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    right: 7px;
    top: 8px;
}
.designerMask [class^='u-table-view_filter__']:not(:first-child) {
    position: relative;
}
.designerMask [class^='u-table-view_filter__']:not(:first-child)::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255,255,255,0.8);
    z-index: 999;
}
</style>
