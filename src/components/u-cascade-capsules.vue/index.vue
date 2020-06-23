<template>
<u-linear-layout :class="$style.root" direction="vertical" gap="small">
    <div v-for="(category, level) in categories" :key="level">
        <span :class="$style.label">{{ category.label }}</span>
        <u-capsules :class="$style.capsules" :field="field" :cancelable="cancelable" :readonly="readonly" :disabled="disabled"
            v-model="values[level]" @select="onSelect($event, level)">
            <u-capsule v-for="item in lists[level]" v-if="item.exist === undefined || !!item.exist === true"
                :key="item.value"
                :value="item.value"
                :item="item"
                :label="item.label"
                :disabled="item.disabled">
                <slot name="text" :item="item" :level="level">{{ item[field] }}</slot>
            </u-capsule>
        </u-capsules>
        <span :class="$style.tip" v-if="category.tip">{{ category.tip }}</span>
    </div>
</u-linear-layout>
</template>

<script>
import { UCascadeSelect } from '../u-cascade-select.vue';

export default {
    name: 'u-cascade-capsules',
    extends: UCascadeSelect,
    props: { cancelable: { type: Boolean, default: false } },
};
</script>

<style module>
.label {
    display: inline-block;
    width: 60px;
    color: var(--color-light);
    margin-top: 4px;
}

.root[label-size="small"] .label {
    width: 40px;
}

.root[label-size="large"] .label {
    width: 120px;
}

.capsules {
    max-width: calc(100% - 60px);
    vertical-align: top;
}

.tip {
    margin-left: 20px;
    color: var(--color-light);
}
</style>
