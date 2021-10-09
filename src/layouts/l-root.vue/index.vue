<template>
<div :class="[$style.root, $env.VUE_APP_DESIGNER ? $style.height : null]" vusion-slot-name="default">
    <slot></slot>
    <div v-if="!$slots.default" :class="$style.box" :active="active">
        <u-text :text="text"></u-text>
    </div>
</div>
</template>
<script>
export default {
    name: 'l-root',
    props: {
        text: String, // 为空界面的提示文字
        active: Boolean,
    },
};
</script>
<style module>
.root {
    height: 100%;
    width: 100%;
}

.box {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #F7F8FA;
    color: #999;
}

.box[active] {
    background: rgba(78, 117, 236, 0.1);
    border: 1px dashed #4E75EC;
    color: #4E75EC;
}

.height {
    min-height: 200px;
}
</style>
