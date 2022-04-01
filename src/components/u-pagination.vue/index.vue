<template>
<nav :class="$style.root" :disabled="disabled" :readonly="readonly" :simple="simple" :size="size">
    <template v-if="simple">
        <a :class="$style.item" role="prev" :disabled="currentPage <= 1" @click="select(currentPage - 1)"></a>
        <div :class="$style['jumper-wrap']">
            <u-number-input :class="$style.jumper" :value="currentPage"
                :min="1" :max="currentTotalPage" hide-buttons :readonly="readonly" :disabled="disabled"
                @change="onChange($event.value, $event.oldValue)">
            </u-number-input> / {{ currentTotalPage }}
        </div>
        <a :class="$style.item" role="next" :disabled="currentPage >= currentTotalPage" @click="select(currentPage + 1)"></a>
    </template>
    <template v-else>
        <span v-if="showTotal" :class="$style.total">
            <slot name="total" :data="{totalItems,pageSize:currentPageSize,page:currentPage}">{{ $t('total', { totalItems }) }}</slot>
        </span>
        <u-select v-if="showSizer" :class="$style.sizer" v-model="currentPageSize" :readonly="readonly" :disabled="disabled" @select="onSelectPageSize">
            <u-select-item v-for="pageSize in pageSizeOptions" :key="pageSize" :value="pageSize">
                每页{{ pageSize }}{{ $t('pageSizeUnit') }}
            </u-select-item>
        </u-select>
        <a :class="$style['item-wrap']" :disabled="currentPage <= 1" @click="select(currentPage - 1)">
            <slot name="prev">
                <i :class="$style.item" role="prev"></i>
            </slot>
        </a>
        <template v-for="page in pages">
            <a v-if="page" :class="$style.item" :selected="currentPage === page" @click="select(page)">{{ page }}</a>
            <a v-else :class="$style.item" role="blank">...</a>
        </template>
        <a :class="$style['item-wrap']" :disabled="currentPage >= currentTotalPage" @click="select(currentPage + 1)">
            <slot name="next">
                <i :class="$style.item" role="next"></i>
            </slot>
        </a>
        <span v-if="showJumper" :class="$style['jumper-wrap']">{{ $t('goto') }}
            <u-number-input :class="$style.jumper" :value="currentPage"
                :min="1" :max="currentTotalPage" hide-buttons :readonly="readonly" :disabled="disabled"
                @change="onChange($event.value, $event.oldValue)" :defaultValue="1">
            </u-number-input>
            {{ $t('pageUnit') }}</span>
        <slot></slot>
    </template>
</nav>

</template>

<script>
import i18n from './i18n';

export default {
    name: 'u-pagination',
    i18n,
    props: {
        total: {
            type: Number,
            default: 1,
            validator: (value) => Number.isInteger(value) && value >= 0,
        },
        page: {
            type: Number,
            default: 1,
            validator: (value) => Number.isInteger(value) && value > 0,
        },
        side: {
            type: Number,
            default: 2,
            validator: (value) => Number.isInteger(value) && value > 0,
        },
        around: {
            type: Number,
            default: 5,
            validator: (value) =>
                Number.isInteger(value) && value > 0 && value % 2 === 1,
        },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        totalItems: Number,
        pageSize: { type: Number, default: 20 },
        pageSizeOptions: {
            type: Array,
            default() {
                return [10, 20, 50];
            },
        },
        showTotal: { type: Boolean, default: false },
        showSizer: { type: Boolean, default: false },
        showJumper: { type: Boolean, default: false },
        simple: { type: Boolean, default: false },
        size: { type: String, default: 'normal' },
    },
    data() {
        return { currentPage: this.page, currentPageSize: this.pageSize };
    },
    computed: {
        pages() {
            const pages = [];
            const part = this.around >> 1;
            let start = this.currentPage - part;
            let end = start + this.around - 1;
            if (start < 1) {
                end += 1 - start;
                start = 1;
            } else if (end > this.currentTotalPage) {
                start -= end - this.currentTotalPage;
                end = this.currentTotalPage;
            }
            start = Math.max(
                1,
                Math.min(start, this.currentTotalPage - this.side + 1),
            );
            end = Math.min(this.currentTotalPage, Math.max(end, this.side));
            let page = 1;
            while (page <= this.currentTotalPage) {
                if (
                    page <= this.side
                    || (page >= start && page <= end)
                    || page > this.currentTotalPage - this.side
                )
                    pages.push(page);
                else {
                    pages.push(undefined);
                    if (page < start)
                        page = start - 1;
                    if (page > end)
                        page = this.currentTotalPage - this.side;
                }
                page++;
            }
            return pages;
        },
        currentTotalPage() {
            if (this.totalItems)
                return Math.ceil(this.totalItems / this.currentPageSize);
            else
                return this.total;
        },
    },
    watch: {
        page(page) {
            this.currentPage = page;
        },
        currentPage(page, oldPage) {
            this.$emit('change', { page, oldPage }, this);
        },
    },
    created() {
        // 自动补充 pageSizeOptions
        if (this.pageSizeOptions && !this.pageSizeOptions.includes(this.pageSize)) {
            for (let i = 0; i < this.pageSizeOptions.length; i++) {
                if (this.pageSizeOptions[i] > this.pageSize) {
                    this.pageSizeOptions.splice(i, 0, this.pageSize);
                    break;
                }
            }
        }
    },
    methods: {
        select(page) {
            if (this.readonly || this.disabled)
                return;
            if (
                page < 1
                || page > this.currentTotalPage
                || page === this.currentPage
            )
                return;
            const oldPage = this.currentPage;
            let cancel = false;
            this.$emit(
                'before-select',
                { page, oldPage, preventDefault: () => (cancel = true) },
                this,
            );
            if (cancel)
                return;
            this.currentPage = page;
            this.$emit('update:page', page, this);
            this.$emit('select', { page, oldPage }, this);
        },
        onChange(page, oldPage) {
            if (this.readonly || this.disabled)
                return; // if (page === oldPage)
            //     return;
            this.currentPage = page;
        },
        onSelectPageSize($event) {
            if (this.readonly || this.disabled)
                return;
            this.$emit('update:page-size', $event.value, this);
            this.$emit(
                'change-page-size',
                {
                    pageSize: $event.value,
                    oldPageSize: $event.oldValue,
                    pageSizeOptions: this.pageSizeOptions,
                },
                this,
            );
        },
    },
};
</script>

<style module>
.root {
    user-select: none;
    cursor: default;
    padding: 0;
    vertical-align: 1px;
    text-align: right;
}

.root a:not(:last-child) {
    margin-right: 8px;
}

.item {
    display: inline-block;
    text-decoration: none;
    padding: var(--pagination-item-padding);
    min-width: var(--pagination-item-width);
    height: var(--pagination-item-height);
    line-height: calc(var(--pagination-item-height) - 1px * 2);
    font-size: var(--pagination-item-font-size);
    text-align: center;
    background: var(--pagination-item-background);
    color: var(--pagination-item-color);
    cursor: var(--cursor-pointer);
    border: 1px solid var(--pagination-item-border-color);
    border-radius: var(--pagination-item-border-radius);
    margin-left: -1px;
    vertical-align: middle;
}

.item:hover {
    position: relative;
    background: var(--pagination-item-background-hover);
    border-color: var(--pagination-item-border-color-hover);
    color: var(--pagination-item-color-hover);
}

.item[selected] {
    border-color: var(--pagination-item-border-color-selected);
    background: var(--pagination-item-background-selected);
    color: var(--pagination-item-color-selected);
}

.item[disabled] {
    cursor: var(--cursor-not-allowed);
    color: var(--pagination-item-color-disabled);
    background: none;
    border-color: var(--pagination-item-border-color-disabled);
}

.item[role="prev"] {
    font-size: var(--pagination-item-prenext-font-size);
    padding: 0 4px;
    border-radius: var(--pagination-item-border-radius);
    color: var(--pagination-item-color);
}

.item[role="prev"]::before {
    icon-font: url('../i-icon.vue/assets/angle-left.svg');
}
.item[role="prev"]:hover{
    color: var(--pagination-item-color-hover);
}

.item[role="next"] {
    font-size: var(--pagination-item-prenext-font-size);
    padding: 0 4px;
    border-radius: var(--pagination-item-border-radius);
    color: var(--pagination-item-color);
}

.item[role="next"]::before {
    icon-font: url('../i-icon.vue/assets/angle-right.svg');
}
.item[role="next"]:hover{
    color: var(--pagination-item-color-hover);
}

.item[role="blank"] {
    line-height: 2;
    border: 1px solid var(--pagination-item-border-color);
    background: var(--pagination-item-background-blank);
    color: var(--pagination-item-color-blank);
    cursor: initial;
}

.item-wrap {
    display: inline-block;
    vertical-align: middle;
}

.item-wrap[disabled],
.item-wrap[disabled] .item,
.item-wrap[disabled] .item:hover,
.item-wrap[disabled] > a {
    cursor: var(--cursor-not-allowed);
    color: var(--pagination-item-color-disabled);
    background: none;
    border-color: var(--pagination-item-border-color-disabled);
}

.item-wrap > [role="text"]{
    margin: 0 var(--space-small);
}

.total {
    margin-right: var(--space-small);
}

.sizer {
    text-align: left;
    width: var(--pagination-sizer-width);
    height: var(--pagination-item-height);
    line-height: var(--pagination-line-height);
    margin-right: var(--space-small);
    vertical-align: top;
    padding-right: 24px;
}

.sizer::after {
    right: 10px;
    font-size: 12px;
    icon-font: url('../i-icon.vue/assets/arrow-down.svg');
}

.sizer .item {
    line-height: var(--pagination-line-height);
}

.jumper-wrap {
    margin-left: var(--space-small);
    vertical-align: middle;
}

.jumper {
    width: var(--pagination-jumper-width);
    height: var(--pagination-item-height);
    line-height: var(--pagination-line-height);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: none;
    border-color: #dedede;
}

.root[disabled] .item,
.root[disabled] .total,
.root[disabled] .sizer,
.root[disabled] .jumper,
.root[disabled] .jumper-wrap,
.root[disabled] .item-wrap {
    color: var(--pagination-item-color-disabled);
    cursor: var(--cursor-not-allowed);
    background: none;
    border-color: var(--pagination-item-border-color-disabled);
}

.root[disabled] .item[role="blank"] {
    color: var(--pagination-item-color-blank-disabled);
    cursor: initial;
}

.root[disabled] .item[selected] {
    background: var(--pagination-item-background-disabled-selected);
}
.root[readonly] .item {
    cursor: default;
}

.root[display="inline"] {
    display: inline-block;
}

.root[simple] .jumper-wrap {
    display: inline-block;
    margin: 0;
}

.root[simple] .item {
    border: 0;
}

.root[simple] .item:hover {
    background-color: transparent;
    color: var(--pagination-item-color-hover);
}

.root[simple][disabled] .item,
.root[simple][disabled] .item:hover,
.root[simple] .item[disabled],
.root[simple] .item[disabled]:hover {
    color: var(--pagination-item-color-disabled);
}

.root[size="small"] .item{
    border: none;
    min-width: var(--pagination-item-width-small);
    height: var(--pagination-item-height-small);
    line-height: var(--pagination-item-height-small-line-height);
}
.root[size="small"] a:not(:last-child) {
    margin-right: 4px;
}
</style>
