<template>
<div :class="$style.root" @mouseleave="onMouseleave">
    <span :class="$style.item" v-for="i in max" :key="i" :status="i <= (isHover ? hoverIndex : currentValue) ? 'full' : ''"
        @mousemove="onMousemove(i, $event)"
        @click="select(i)"></span>
</div>
</template>

<script>
import MField from '../m-field.vue';

export default {
    name: 'u-rate',
    mixins: [MField],
    props: {
        value: { type: Number, default: 0 },
        max: { type: Number, default: 5 },
        readonly: { type: Boolean, default: false },
        showText: { type: Boolean, default: false },
        texts: { type: Array },
    },
    data() {
        const list = [];
        for (let i = 0; i < 5; i++)
            list.push({ index: i });
        return {
            currentValue: this.value,
            list,
            isHover: false,
            hoverIndex: -1,
        };
    },
    watch: {
        currentValue(value, oldValue) {
            this.$emit('change', {
                value,
                oldValue,
            }, this);
        },
    },
    methods: {
        onMousemove(i, $event) {
            if (this.readonly) {
                return false;
            }
            this.isHover = true;
            this.hoverIndex = i;
        },
        onMouseleave() {
            this.isHover = false;
            this.hoverIndex = -1;
        },
        select(i) {
            if (this.readonly) {
                return false;
            }
            this.currentValue = i;
            this.$emit('input', i, this);
            this.$emit('update:value', i, this);
        },
    },
};
</script>

<style module>
.root {}

.item {
    display: inline-block;
    font-size: var(--rate-size);
    transition: all .3s ease;
    color: var(--rate-color);
    cursor: var(--cursor-pointer);
}

.item:hover {
    transform: scale(1.1);
}

.item::before {
    icon-font: url('./assets/star.svg');
}

.item:not(:last-child) {
    margin-right: var(--rate-space);
}

.item[status="full"] {
    color: var(--rate-color-full);
}
</style>
