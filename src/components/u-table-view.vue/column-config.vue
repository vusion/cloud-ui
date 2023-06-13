<template>
<div :class="$style.root" vusion-slot-name="default">
    <slot>
        <s-empty
            v-if="!($slots && $slots.default)
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
        @change="onChangeShowColumns($event)">
    </u-table-view-filters-popper>
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
            currentValue: this.value,
        };
        return data;
    },
    watch: {
        value(value, oldValue) {
            if (JSON.stringify(value) !== JSON.stringify(oldValue))
                this.currentValue = value;
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
            console.log('default columns', data);
            if (!this.currentValue || (!this.value && !this.currentValue.length)) {
                this.currentValue = data.map((item) => item.value);
            }
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
         * 控制列的弹窗在表格外部实现，数据需要与表格联动时走change逻辑
         */
        onChangeShowColumns(event) {
            if (this.hiddenConfig) {
                const value = event.value || [];
                this.currentValue = value;
                this.handleColumnsHidden(value);
            }
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
            const configList = this.currentDataSource.data.map((item) => (this.$at(item, this.valueField) || item.value));
            columnVMs.forEach((columnVM) => {
                if (columnVM.field
                    && configList.includes(columnVM.field)
                    && !selectedValue.includes(columnVM.field)) {
                    columnVM.currentHidden = true;
                } else {
                    columnVM.currentHidden = columnVM.hidden;
                }
            });
        },
        /**
         * 配置列的下拉数据可能是个函数，需要等数据回来后再处理一遍显隐
         */
        onLoadConfigList() {
            this.handleInitColumnsHidden();
        },
        handleColumnsData() {
            console.log('handleColumnsData');
            if (!this.dataSource) {
                this.getConfigurabeList();
            }
            this.handleInitColumnsHidden();
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
</style>
