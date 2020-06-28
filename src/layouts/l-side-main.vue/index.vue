<template>
<div :class="$style.root">
    <aside :class="$style.side">
        <slot name="side"></slot>
    </aside>
    <main :class="$style.main">
        <slot name="main">
            <div :class="$style.content">
                <slot></slot>
            </div>
        </slot>
    </main>
</div>
</template>

<script>
export default { name: 'l-side-main' };
</script>

<style module>
.root {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
}

.side {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: var(--sidebar-width);
}

.main {
    position: relative;
    margin-left: var(--sidebar-width);
}

.content {
    position: relative;
    padding: 30px 50px 50px;
}
</style>
