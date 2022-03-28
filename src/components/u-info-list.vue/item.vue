<template>
<div :class="$style.root" :column="currentColumn" allowChild :label-size="currentLabelSize" :style="responsiveStyle">
    <div :class="$style.label" vusion-slot-name="label">
        <slot name="label">{{ label }}</slot>
    </div>
    <div v-if="$env.VUE_APP_DESIGNER" :class="$style.value" :ellipsis="ellipsis" vusion-slot-name="default">
        <slot></slot>
        <s-empty v-if="(!$slots.default)"></s-empty>
    </div>
    <div v-else :class="$style.value" :ellipsis="ellipsis">
        <slot></slot>
    </div>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-info-list-item',
    parentName: 'u-info-list',
    groupName: 'u-info-list-group',
    mixins: [MEmitter],
    components: {
        SEmpty,
    },
    props: {
        label: String,
        labelSize: String,
        ellipsis: { type: Boolean, default: false },
        span: { type: [Number, String], default: 1 },
    },
    data() {
        return {
            groupVM: undefined,
            parentVM: undefined,
            currentSpan: this.span,
        };
    },
    computed: {
        currentColumn() {
            return (
                (this.groupVM && this.groupVM.column)
                || (this.parentVM && this.parentVM.column)
                || 'auto'
            );
        },
        currentLabelSize() {
            return (
                this.labelSize
                || (this.groupVM && this.groupVM.labelSize)
                || (this.parentVM && this.parentVM.labelSize)
                || 'auto'
            );
        },
        responsiveStyle() {
            const width = this.getPercent(this.currentSpan);
            return { width };
        },
    },
    watch: {
        span(span) {
            this.currentSpan = span;
        },
    },
    created() {
        this.$dispatch(this.$options.groupName, 'add-item-vm', this);
        this.$dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.$dispatch(this.$options.groupName, 'remove-item-vm', this);
        this.$dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
    methods: {
        getPercent(span) {
            // 兼容原来的column属性
            if (
                (this.groupVM && this.groupVM.column)
                || (this.parentVM && this.parentVM.column)
            )
                return '';
            const repeat
                = (this.groupVM && this.groupVM.repeat)
                    || (this.parentVM && this.parentVM.repeat)
                    || 3;
            // return (span / repeat) * 100 + '%';
            //兼容ie宽度有小数点添1
            return ((span / repeat) * 100) - 0.2 + '%';  
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    display: inline-flex;
    padding: 16px 0 16px 20px;
    vertical-align: top;
    line-height: 24px;
    white-space: nowrap;
}

.root[column="1"] { width: 100% !important; }
.root[column="2"] { width: 50% !important; }
.root[column="3"] { width: 33.333% !important; }
.root[column="4"] { width: 25% !important; }

.label {
    flex: 0 0 auto;
    padding-right: 20px;
    color: var(--color-light);
}
.root .label { max-width: calc(50% - 20px); white-space: normal; }
.root[label-size$="small"] .label { width: 80px; white-space: normal; }
.root[label-size$="normal"] .label { width: 100px; white-space: normal; }
.root[label-size$="large"] .label { width: 120px; white-space: normal; }

.value {
    white-space: normal;
    word-break: break-all;
    width: 100%;
}

.value[ellipsis] {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
}
</style>
