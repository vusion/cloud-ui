<template>
<div :class="$style.root">
    <a :class="$style.icon" v-bind="$attrs"></a>
    <span v-if="$slots.default" :class="$style.divider"></span>
    <span v-if="$slots.default" :class="$style.sub">
        <slot></slot>
    </span>
</div>
</template>

<script>
export default { name: 's-logo' };
</script>

<style module>
.root {
    /* display: flex;
    align-items: center; */
}

/* Default Logo */
.root .icon {
    display: inline-block;
    vertical-align: middle;
    width: 114px;
    height: 64px;
    background: url('./logo-163yun-white.svg') 10px 0 no-repeat;
}

.root[color="2color"] .icon {
    background: url('./logo-163yun-2color.svg') 10px 0 no-repeat;
}

.divider {
    margin: 0 1em;
    border-left: 1px solid white;
    height: 18px;
}

.sub {
    font-size: 16px;
    color: white;
    vertical-align: -1px;
}
</style>
