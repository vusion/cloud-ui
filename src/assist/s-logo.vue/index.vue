<template>
<div :class="$style.root">
    <a :class="$style.icon" v-bind="$attrs"></a>
    <span v-if="$slots.default" :class="$style.divider"></span>
    <span v-if="$slots.default" :class="$style.sub">
        <slot></slot>
    </span>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
</div>
</template>

<script>
import SEmpty from '../../components/s-empty.vue';
export default { name: 's-logo', components: { SEmpty } };
</script>

<style module>
.root {
    width: var(--sidebar-width);
    height: var(--navbar-height);
    line-height: var(--navbar-height);
}

/* Default Logo */
.root .icon {
    display: inline-block;
    width: 125px;
    height: 28px;
    background: url('./logo-lcap-white.svg') 10px 0 no-repeat;
    vertical-align: -8px;
}

.root[color="2color"] .icon {
    background: url('./logo-lcap-2color.svg') 10px 0 no-repeat;
}

.divider {
    display: inline-block;
    margin: 0 0.5em;
    background: white;
    width: 3px;
    height: 3px;
    border-radius: 10px;
    vertical-align: middle;
}

.sub {
    font-size: 16px;
    color: white;
    vertical-align: middle;
}
</style>
