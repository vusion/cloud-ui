<template>
<section :class="$style.root"><slot></slot></section>
</template>

<script>
export default { name: 'l-page-section' };
</script>

<style module>
.root {
    padding: 40px 80px;
}
</style>
