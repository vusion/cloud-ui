<template>
<div :class="$style.root" :mini="!expanded">
    <!-- 最小化显示节点 -->
    <div v-show="!expanded" :class="$style.mini" @click="expand()">
        <span :class="$style['mini-text']">
            <slot name="mini" :item="item" :text="miniText">{{ miniText || '-' }}</slot>
        </span>
        <div :class="$style.textWrap">
            <!-- 错误提示 -->
            <span v-show="firstError" :class="$style.error">{{ firstError }}</span>
            <!-- 展开操作 -->
            <u-link @click="expand()">{{ $t('expand') }}</u-link>
        </div>
    </div>
    <div v-show="expanded">
        <div :class="$style.actions">
            <u-linear-layout>
                <u-link :disabled="disableRemove" @click="remove()">{{ $t('remove') }}</u-link>
                <u-link @click="collapse()">{{ $t('collapse') }}</u-link>
            </u-linear-layout>
        </div>
        <slot :item="item" :index="index"></slot>
    </div>
</div>
</template>

<script>
import UValidator from '../u-validator.vue';
import i18n from './i18n';

export default {
    name: 'u-dynamic-card',
    mixins: [UValidator],
    i18n,
    props: { item: Object, index: Number, disableRemove: Boolean },
    data() {
        return { parentVM: undefined };
    },
    computed: {
        miniText() {
            const text = this.parentVM.miniFormatter ? this.parentVM.miniFormatter(this.item) : this.$at(this.item, this.parentVM.textField);
            return text || '-';
        },
        expanded() {
            return this.parentVM.currentIndex === this.index;
        },
    },
    created() {
        this.parentVM = this.$vnode.context;
    },
    methods: {
        expand() {
            this.parentVM.expand(this.index);
        },
        collapse() {
            this.parentVM.collapse(this.index);
            this.validate();
        },
        remove() {
            this.parentVM.remove(this.index);
        },
    },
};
</script>

<style module>
.root {
    display: block;
    position: relative;
    padding: 45px 15px 35px;
    border: 1px solid var(--border-color-base);
}

.root[mini]:hover {
    box-shadow: 0 0 10px 0 rgb(80, 90, 109, 0.16);
    cursor: var(--cursor-pointer);
}

.root[mini] {
    padding: 0 15px;
}

.root[noborder] {
    border: 0;
    padding: 0;
}

.mini {
    padding: 13px 5px 13px 10px;
}

.mini-text {
    margin-left: 10px;
    display: inline-block;
    line-height: 30px;
    max-width: calc(100% - 80px);
    overflow: hidden;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.actions {
    position: absolute;
    top: 13px;
    right: 20px;
}

.desc {
    display: inline-block;
    max-width: 680px;
    color: var(--color-light);
    padding-bottom: 10px;
}

.textWrap {
    float: right;
    line-height: 30px;
}

.error {
    display: inline-block;
    margin-right: 40px;
    color: #ff867f;
}

.more {
    margin-left: 45px;
}
</style>
