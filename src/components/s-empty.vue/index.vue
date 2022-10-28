<template>
    <div :class="$style.empty" s-empty="true"></div>
</template>
<script>

export default {
    name: 's-empty',
    props: {},
};
</script>
<style module>
.empty {
    background: #F7F8FA;
    border: 1px dashed #C3C3C3;
    text-align: center;
    color: #999;
    min-height: 30px;
    min-width: 90px;
    width: 100%;
    align-items: center;
    display: inline-flex;
    justify-content: center;
}

.empty[inline] {
    width: auto;
}

.empty::after {
    content: "+";
    font-size: 20px;
    line-height: 12px;
    display: inline-block;
    margin-bottom: 2px;
}
</style>
