<template>
<div :class="$style.root">
    <header :class="$style.head">
        <div :class="$style.wrap">
            <slot name="head"></slot>
        </div>
    </header>
    <main :class="$style.body">
        <slot name="body">
            <div :class="$style.wrap">
                <slot></slot>
            </div>
        </slot>
    </main>
<!-- <footer :class="$style.foot">
    <div :class="$style.wrap">
        <slot name="foot"></slot>
    </div>
</footer> -->
</div>
</template>

<script>
export default {
    name: 'u-global-layout',
};
</script>

<style module>
.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 64px;
    background: #1c2b41;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    z-index: 2000;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: 64px;
}

.foot {
    height: 70px;
    background: #34383b;
}

.wrap {
    /* width: 1180px; */
    /* margin: 0 auto; */
}
</style>
