<template>
<tr :class="$style.root">
    <slot></slot>
    <td v-if="!actionDefine" :class="$style['last-column']" :dynamic="dynamic">
        <slot name="last-column"></slot>
        <span v-if="!mutedMessage && touched && !valid && firstError" :class="$style.message" color="error">{{ firstError }}</span>
    </td>
</tr>
</template>

<script>
import UValidator from '../u-validator.vue';

export default {
    name: 'u-form-table-view-row',
    extends: UValidator,
    props: {
        actionDefine: { type: Boolean },
    },
    computed: {
        dynamic() {
            return this.$vnode.context.dynamic;
        }
    }
};
</script>

<style module>
@extends '../u-validator.vue/index.css';

.root {
    display: table-row;
    position: static;
}

.last-column {
    position: relative;
}

.message {
    position: absolute;
    white-space: nowrap;
    margin-top: 8px;
}
</style>
