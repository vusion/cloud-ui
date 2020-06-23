<template>
<tr :class="$style.root">
    <slot></slot>
    <td :class="$style['last-td']">
        <slot name="last-td"></slot>
        <span v-if="!mutedMessage && touched && !valid && firstError" :class="$style.message" color="error">{{ firstError }}</span>
    </td>
</tr>
</template>

<script>
import UValidator from '../u-validator.vue';

export default { name: 'u-validator-tr', extends: UValidator };
</script>

<style module>
@import '../u-validator.vue/module.css';

.root {
    display: table-row;
    position: static;
}

.last-td {
    position: relative;
}

.message {
    margin-top: 8px;
}
</style>
