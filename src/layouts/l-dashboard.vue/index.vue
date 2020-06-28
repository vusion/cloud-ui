<template>
<div :class="$style.root">
    <header :class="$style.head">
        <slot name="head"></slot>
    </header>
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
export default { name: 'l-dashboard' };
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

.side {
    position: absolute;
    left: 0;
    bottom: 0;
    top: var(--navbar-height);
    width: var(--sidebar-width);
}

.main {
    position: absolute;
    bottom: 0;
    right: 0;
    top: var(--navbar-height);
    left: var(--sidebar-width);
    overflow: auto;
}

.content {
    position: relative;
    min-width: 1110px;
    padding: 40px;
}
</style>
