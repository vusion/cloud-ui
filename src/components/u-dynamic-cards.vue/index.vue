<template>
<u-linear-layout :class="$style.root" direction="vertical">
    <u-dynamic-card v-for="(item, index) in currentData" :key="index"
        :item="item"
        :index="index"
        :disable-remove="currentData.length <= minCount">
        <template slot="mini">
            <slot name="mini" :item="item" :index="index"></slot>
        </template>
        <slot :item="item" :index="index"></slot>
    </u-dynamic-card>
    <u-form-table-add-button v-if="dynamic" :disabled="currentData.length >= maxCount" @click="add">{{ addButtonText }}</u-form-table-add-button>
</u-linear-layout>
</template>

<script>
import MDynamic from '../m-dynamic.vue';
import UValidator from '../u-validator.vue';
import i18n from './i18n';

export default {
    name: 'u-dynamic-cards',
    mixins: [MDynamic, UValidator],
    i18n,
    props: {
        // data: Array,
        // getDefaultItem: Function,
        textField: { type: String, default: 'title' },
        index: { type: Number, default: 0 },
        addButtonText: {
            type: String,
            default() {
                return this.$t('add');
            },
        },
        miniFormatter: Function,
    },
    data() {
        return {
            // currentData
            currentIndex: this.index, // @TODO: 先用 index，观察会不会有不合适的问题
        };
    },
    created() {
        this.$on('add', ({ index }) => {
            this.currentIndex = index;
        });
        this.$on('remove', ({ index }) => {
            this.currentIndex
                = index === this.currentData.length ? index - 1 : index;
        });
    },
    methods: {
        expand(index) {
            this.currentIndex = index;
        },
        collapse(index) {
            this.currentIndex = undefined;
        },
    },
};
</script>

<style module>
.root {
    width: 680px;
}

.root[size="large"] {
    width: 800px;
}

.root[size="full"] {
    width: 100%;
}
</style>
