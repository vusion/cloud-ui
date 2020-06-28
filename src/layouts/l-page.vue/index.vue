<template>
<div :class="$style.root">
    <header :class="$style.head">
        <slot name="head"></slot>
    </header>
    <div :class="$style.body">
        <slot></slot>
    </div>
    <footer :class="$style.foot">
        <slot name="foot"></slot>
    </footer>
</div>
</template>

<script>
export default { name: 'l-page' };
</script>

<style module>
.root {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
}

.head {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: var(--navbar-height);
    background: white;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    z-index: var(--z-index-layout);
}

.body {
    position: relative;
    padding-top: var(--navbar-height);
}

.foot {
    height: 70px;
    background: #34383b;
}

.foot:empty {
    display: none;
}
</style>
