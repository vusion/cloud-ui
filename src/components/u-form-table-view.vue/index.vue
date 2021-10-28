<template>
<div :class="$style.root" direction="vertical" gap="small" :size="size">
    <u-form-table :class="$style.table" :theme="theme" :size="size" v-bind="$attrs">
        <thead><tr>
            <th ref="th" v-for="(columnVM, columnIndex) in columnVMs"
                :vusion-scope-id="columnVM.$vnode.context.$options._scopeId"
                :vusion-node-path="columnVM.$attrs['vusion-node-path']"
                :width="columnVM.width">
                <f-slot name="title" :vm="columnVM" :props="{ columnVM, columnIndex }">
                    <span>{{ columnVM.title }}</span>
                </f-slot>
            </th>
            <th :class="$style['last-column']" :dynamic="dynamic" v-if="dynamic && !actionDefine"></th>
        </tr></thead>
        <tbody>
            <u-form-table-view-row :actionDefine="actionDefine" :class="$style.row" v-for="(item, rowIndex) in currentData" :key="rowIndex" :muted="muted">
                <td :class="$style.cell" v-for="(columnVM, columnIndex) in columnVMs" :ellipsis="columnVM.ellipsis" v-ellipsis-title>
                    <f-slot v-if="columnVM.$scopedSlots && columnVM.$scopedSlots['action-column']" name="action-column" :vm="columnVM" :props="{ columnVM, item, rowIndex, columnIndex }">
                    </f-slot>
                    <u-validator v-else display="block" :label="columnVM.title" :action="columnVM.action"
                        :rules="columnVM.rules" :muted="columnVM.muted"
                        :ignore-validation="columnVM.ignoreValidation"
                        :validating-options="Object.assign({ data: currentData, item, rowIndex }, columnVM.validatingOptions)"
                        :validating-value="columnVM.validatingValue"
                        :validating-process="columnVM.validatingProcess">
                        <span v-if="columnVM.type === 'index'">{{ columnVM.startIndex + rowIndex }}</span>
                        <f-slot name="cell" :vm="columnVM" :props="{ item, value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex }">
                            <span>{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                        </f-slot>
                    </u-validator>
                </td>
                <template slot="last-column" v-if="dynamic && !actionDefine">
                    <u-form-table-remove-button @click="remove(rowIndex)" :disabled="currentData.length <= minCount || item.disabled"></u-form-table-remove-button>
                </template>
            </u-form-table-view-row>
        </tbody>
    </u-form-table>
    <u-form-table-add-button :class="$style['add-button']" v-if="showAddButton && dynamic" @click="add()" :disabled="currentData.length >= maxCount">{{ $t('add') }}</u-form-table-add-button>
    <slot></slot>
</div>
</template>

<script>
import i18n from './i18n';
import MDynamic from '../m-dynamic.vue';
import UValidator from '../u-validator.vue';
export default {
    name: 'u-form-table-view',
    i18n,
    mixins: [MDynamic, UValidator],
    props: {
        border: { type: Boolean, default: false },
        dynamic: { type: Boolean, default: false },
        validateOnAdd: { type: Boolean, default: true },
        size: String,
        theme: { type: String }, // gray
        showAddButton: { type: Boolean, default: true },
        muted: String,
        actionDefine: { type: Boolean, default: false }
    },
    data() {
        return { columnVMs: [] };
    },
    watch: {
        columnVMs(columnVMs) {
            this.$nextTick(() => {
                this.$refs.th
                    && this.$refs.th.forEach((thEl, index) => {
                        thEl.__vue__ = columnVMs[index];
                    });
            });
        },
    },
    created() {
        if (this.validateOnAdd)
            this.$on('add', () => this.validate().catch(() => ''));
    },
    methods: {
        onRemove(index) {
            this.remove(index);
        },
        onDuplicate(index) {
            this.duplicate(index); 
        },
        onAdd() {
            this.add();
        }
    }
};
</script>

<style module>
.root {
    width: 580px;
}

.root[size="full"] {
    width: 100%;
}

.root[size="mini"] {
    width: auto;
}

.last-column {
    width: 0;
}

.last-column[dynamic] {
    width: 40px;
}

.add-button {
    margin-top: var(--space-small);
}

.root[size="mini"] .add-button {
    height: var(--button-height-mini);
    line-height: calc(var(--button-height-mini) - var(--button-border-width) * 2 - var(--button-padding-y) * 2);
    padding: 0 var(--button-padding-x-mini);
    font-size: var(--button-font-size-mini);
}

.table[theme='gray'] thead tr{
    background: #f7f8fa;
}
</style>
