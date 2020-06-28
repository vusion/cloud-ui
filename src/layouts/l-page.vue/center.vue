<template>
<div :class="$style.root"><slot></slot></div>
</template>

<script>
export default { name: 'l-page-center' };
</script>

<style module>
.root {
    width: 960px;
    margin: 0 auto;
}

.root[size="huge"] {
    width: 1440px;
}

.root[size="large"] {
    width: 1180px;
}

.root[size="small"] {
    width: 768px;
}

.root[size="mini"] {
    width: 640px;
}
</style>
