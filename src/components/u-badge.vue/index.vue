<template>
<div :class="$style.root">
    <div v-if="$env.VUE_APP_DESIGNER" vusion-slot-name="default" :class="$style.content">
        <slot></slot>
        <s-empty v-if="(!$slots.default) && !!$attrs['vusion-node-path']"></s-empty>
    </div>
     <slot v-else></slot>
    <span :class="$style.value" v-if="currentValue">{{ currentValue }}</span>
</div>
</template>

<script>
import SEmpty from '../../components/s-empty.vue';
export default {
    name: 'u-badge',
    components: { SEmpty },
    props: { value: [Number, String], max: { type: Number, default: 99 } },
    computed: {
        currentValue() {
            if (typeof this.value !== 'number')
                return this.value;
            else
                return this.value > this.max ? this.max + '+' : this.value;
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    display: inline-block;
}

.content {
    display: inline-block;
}

.value {
    display: inline-block;
    text-align: center;
    line-height: var(--badge-value-size);
    min-width: var(--badge-value-size);
    font-size: var(--font-size-small);
    padding: 0 6px;
    border-radius: 100px;
    background: var(--badge-background);
    color: var(--badge-color);
    box-shadow: var(--badge-box-shadow);
}

.root[corner] {
    line-height: 1; /* 防止外面的 line-height 影响 */
}

.root[corner] .value {
    position: absolute;
    /* transform: translateX(50%); */
    /* right: -5px; */
    top: calc(var(--badge-value-size) / -2);
    left: calc(100% - 7px);
}

.root[dot] .value {
    width: var(--badge-dot-size);
    height: var(--badge-dot-size);
    font-size: 0;
    min-width: auto;
    padding: 0;
    top: calc(var(--badge-dot-size) / -2);
    left: 100%;
}

.root[display="block"] {
    display: block;
}
</style>
