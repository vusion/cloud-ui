<template>
<div :class="$style.root">
    <aside :class="$style.left">
        <slot name="left"></slot>
    </aside>
    <main :class="$style.middle">
        <slot name="middle">
            <div :class="$style.content">
                <slot></slot>
            </div>
        </slot>
    </main>
    <aside :class="$style.right">
        <slot name="right"></slot>
    </aside>
</div>
</template>

<script>
export default { name: 'l-left-middle-right' };
</script>

<style module>
.root {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
}

.left {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: var(--sidebar-width);
}

.middle {
    position: relative;
    margin-left: var(--sidebar-width);
    margin-right: var(--toc-width);
    height: 100%;
    overflow: auto;
}

.right {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: var(--toc-width);
}

.content {
    position: relative;
    padding: 30px 50px 50px;
}
</style>
