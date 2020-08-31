<template>
<div :class="$style.root" :size="size">
    <div :class="$style.head">
        <u-checkbox :disabled="data.length===0" v-model="allChecked">全选</u-checkbox>
    </div>
    <div :class="$style.body">
        <u-checkboxes v-if="data.length > 0" v-model="checkedList">
            <div v-for="(item, index) in data" :style="{width: column ? `${columnWidth}%`:undefined}" :class="$style.item">
                <u-checkbox :label="item.value" :disabled="item.disabled" :title="item.text">
                    <slot :data="item" :index="index">
                        {{ item.text }}
                    </slot>
                </u-checkbox>
            </div>
        </u-checkboxes>
        <div :class="$style.placeholder" v-else>
            <slot name="placeholder">
                {{ placeholder }}
            </slot>
        </div>
    </div>
</div>
</template>

<script>
// import i18n from '@/utils/i18n';
import MField from '../m-field.vue';

export default {
    name: 'u-checkbox-card',
    mixins: [MField],
    props: {
        data: { type: Array, default: () => [] },
        value: { type: Array, default: () => [] },
        placeholder: { type: String, default: '暂无数据' },
        size: { type: String, default: 'normal' },
        column: Number,
    },
    data() {
        return { checkedList: this.value };
    },
    computed: {
        columnWidth() {
            if (!this.column)
                return 0;
            return 100 / this.column;
        },
        allChecked: {
            set(checked) {
                if (checked) {
                    this.checkedList = this.data.map((item) => item.value);
                } else {
                    this.checkedList = [];
                }
            },
            get() {
                if (this.data.length === 0) {
                    return false;
                }
                if (this.checkedList.length === this.data.length)
                    return true;
                else if (this.checkedList.length === 0)
                    return false;
                else
                    return null;
            },
        },
    },
    watch: {
        value(value) {
            this.checkedList = value;
        },
        checkedList(value, oldValue) {
            this.$emit('update:value', value);
            this.$emit('change', { value, oldValue }, this);
            this.$emit('input', value, this);
        },
    },
    methods: {
        getCheckList() {
            return [...this.checkedList];
        },
    },
};
</script>

<style module>
.root {
    max-width: 100%;
    width: 515px;
    max-height: 360px;
    border: 1px solid var(--border-color-base);
}
.root[size="small"] {
    width: 180px;
}
.root[size="large"] {
    width: 654px;
}
.root[size="huge"] {
    width: 812px;
}
.root[size="auto"] {
    width: 100%;
}
.head {
    padding: 5px 10px;
    height: 41px;
    line-height: 30px;
    border-bottom: 1px solid var(--border-color-base);
    background-color: #eef2f5;
}
.body {
    max-height: 318px;
    overflow: auto;
    padding: 10px;
    padding-bottom: 5px;
}
.item {
    display: inline-block;
    width: 158px;
    padding-right: 20px;
    margin-right: 0 !important;
}
.placeholder {
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 0;
    margin-bottom: 5px;
    color: rgb(153, 153, 153);
}
</style>
