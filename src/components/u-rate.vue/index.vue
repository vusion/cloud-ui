<template>
<div :class="$style.root" @mouseleave="onMouseleave" :readonly="readonly">
    <span :class="$style.item" v-for="i in max" :key="i" :status="getFullStatus(i)"
        @mousemove="onMousemove(i, $event)"
        @click="select(i)" :half="getHalfStatus(i)"
        ref="star">
        <span :class="$style.mask" :style="{width: decimalWidth + '%'}"></span>
        <u-popup :class="$style.popup" v-if="showTooltip" trigger="manual" :opened="hoverIndex === i" :placement="placement">
            {{ tooltips[tooltipIndex] }}
        </u-popup>
    </span>
    <span :class="$style.text" v-if="showText">{{ texts[tooltipIndex] }}</span>
    <span :class="$style.text" v-if="showValue"> {{ value }} </span>
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
        texts: {
            type: Array,
            default() {
                return ['极差', '失望', '一般', '满意', '惊喜'];
            },
        },
        allowHalf: { type: Boolean, default: false },
        clearable: { type: Boolean, default: false },
        showText: { type: Boolean, default: false },
        showTooltip: { type: Boolean, default: false },
        showValue: { type: Boolean, default: false },
        placement: { type: String, default: 'top' },
        tooltips: {
            type: Array,
            default() {
                return ['极差', '失望', '一般', '满意', '惊喜'];
            },
        },
    },
    computed: {
        decimalWidth() {
            if (this.allowHalf) {
                return 50;
            } else {
                return this.currentValue * 100 - Math.floor(this.currentValue) * 100;
            }
        },
        tooltipIndex(){
            if (this.isHover) {
                return this.hoverIndex - 1;
            } else {
                const value = Math.floor(this.currentValue);
                return value - 1;
            }
        }

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
            pointerAtLeftHalf: false,
        };
    },
    watch: {
        value(value, oldValue) {
            this.currentValue = value;
        },
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
            if (this.allowHalf) {
                const target = this.$refs.star[i-1];
                this.pointerAtLeftHalf = $event.offsetX * 2 <= target.clientWidth;
            }
            this.isHover = true;
            this.hoverIndex = i;
        },
        onMouseleave() {
            this.pointerAtLeftHalf = false;
            this.isHover = false;
            this.hoverIndex = -1;
        },
        select(i) {
            if (this.readonly) {
                return false;
            }
            const newValue = this.pointerAtLeftHalf? i - 0.5 :i;
            let isReset = false;
            if (this.clearable) {
                isReset = this.currentValue === newValue;
            }
            this.onMouseleave();
            this.currentValue = isReset? 0 : newValue;
            this.$emit('input', this.currentValue, this);
            this.$emit('update:value', this.currentValue, this);
        },
        showMask(index){
            const allowDecimal = this.readonly && this.currentValue > index -1 && index > this.currentValue;
            const allowClickHalf = this.allowHalf && this.pointerAtLeftHalf && this.hoverIndex === index;
            console.log('showMask', allowDecimal || allowClickHalf);
            return allowDecimal || allowClickHalf;
        },
        getFullStatus(index) {
            let isFull = false;
            if(this.isHover) {
                if(this.pointerAtLeftHalf) {
                    isFull = index <= this.hoverIndex - 0.5;
                } else {
                    isFull = index <= this.hoverIndex;
                }
            } else {
                isFull = index<= this.currentValue;
            }
            return isFull? 'full' : '';
        },
        getHalfStatus(index) {
            if (this.isHover) {
                return this.hoverIndex === index && this.pointerAtLeftHalf;
            } else {
                return this.currentValue > index -1 && this.currentValue < index;
            }
        }
    },
};
</script>

<style module>
.root[readonly] .item {
    cursor: default;
}
.root[readonly] .item:hover{
    transform: scale(1);
}

.item {
    display: inline-block;
    font-size: var(--rate-size);
    transition: all .3s ease;
    color: var(--rate-color);
    cursor: var(--cursor-pointer);
    position: relative;
}

.item:hover {
    transform: scale(1.2);
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
.item[half] .mask {
    opacity: 1;
}

.mask {
    position: absolute;
    height: 100%;
    left: 0;
    overflow: hidden;
    color: var(--rate-color-full);
    opacity: 0;
    width: 50%;
    transition: all .3s;
}
.mask::before {
    icon-font: url('./assets/star.svg');
}

.text {
    color: var(--rate-text-color);
}

.popup {
    background: var(--rate-popup-background);
    min-width: initial;
}
</style>
