<template>
<i :class="$style.root" :name="name" :size="size" :color="color" v-on="$listeners">
    <slot></slot>
</i>
</template>

<script>
export default {
    name: 'i-icon',
    props: { name: String, size: String, color: String },
};
</script>

<style module>
.root {}

.root[name="arrow-up"]::before {
    icon-font: url('./assets/arrow-up.svg');
}

.root[name="arrow-down"]::before {
    icon-font: url('./assets/arrow-down.svg');
}

.root[name="arrow-left"]::before {
    icon-font: url('./assets/arrow-left.svg');
}

.root[name="arrow-right"]::before {
    icon-font: url('./assets/arrow-right.svg');
}

.root[name="angle-up"]::before {
    icon-font: url('./assets/angle-up.svg');
}

.root[name="angle-down"]::before {
    icon-font: url('./assets/angle-down.svg');
}

.root[name="angle-left"]::before {
    icon-font: url('./assets/angle-left.svg');
}

.root[name="angle-right"]::before {
    icon-font: url('./assets/angle-right.svg');
}

.root[name="close"]::before {
    icon-font: url('./assets/close.svg');
}

.root[name="close-solid"]::before {
    icon-font: url('./assets/close-solid.svg');
}

.root[name="filter"]::before {
    icon-font: url('./assets/filter.svg');
}

.root[name="github"]::before {
    icon-font: url('./assets/github.svg');
}

.root[size="small"]::before {
    font-size: 14px;
}

.root::before {}

.root[size="large"]::before {
    font-size: 32px;
    vertical-align: -8px;
}

.root[hover] {
    cursor: pointer;
    transition: color var(--transition-duration-fast);
}

.root[hover]:hover {
    color: var(--brand-primary);
}

.root[color="primary"] {
    color: var(--brand-primary);
}

.root[color="success"] {
    color: var(--brand-success);
}

.root[color="normal"] {
    color: var(--brand-normal);
}

.root[color="problem"] {
    color: var(--brand-problem);
}

.root[color="warning"] {
    color: var(--brand-warning);
}

.root[color="error"] {
    color: var(--brand-error);
}

.root[color="assist"] {
    color: var(--brand-assist);
}

.root[color="disabled"] {
    color: var(--brand-disabled);
}

.root[size="small"] {
    font-size: 12px;
}

.root[size="normal"] {
    font-size: 14px;
}

.root[size="medium"] {
    font-size: 16px;
}

.root[size="large"] {
    font-size: 24px;
}

.root[size="huge"] {
    font-size: 32px;
}
</style>
