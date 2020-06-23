<template>
<div :class="$style.root" :column="currentColumn" :label-size="currentLabelSize" :style="responsiveStyle">
    <div :class="$style.label">
        <slot name="label">{{ label }}</slot>
    </div>
    <div :class="$style.value" :ellipsis="ellipsis">
        <slot></slot>
    </div>
</div>
</template>

<script>
import { MEmitter } from '../m-emitter.vue';

export default {
    name: 'u-info-list-item',
    parentName: 'u-info-list',
    groupName: 'u-info-list-group',
    mixins: [MEmitter],
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
    created() {
        this.dispatch(this.$options.groupName, 'add-item-vm', this);
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.groupName, 'remove-item-vm', this);
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
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
            return (span / repeat) * 100 + '%';
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    display: inline-block;
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
    display: table-cell;
    padding-right: 20px;
    color: var(--color-light);
}

.root[label-size$="small"] .label { width: 80px; }
.root[label-size$="normal"] .label { width: 100px; }
.root[label-size$="large"] .label { width: 120px; }

.value {
    display: table-cell;
    white-space: normal;
    word-break: break-all;
    width: 100%;
}

.value[ellipsis] {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 0;
}
</style>
