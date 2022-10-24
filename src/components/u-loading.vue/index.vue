<template>
<div :class="$style.root" :size="size">
    <div :class="[
        {
            [$style.rotate]: iconRotate
        }
    ]">
        <i-ico :class="$style.icon" :name="icon"></i-ico>
    </div>
    <div v-if="text">
        <u-text :class="$style.text">{{text}}</u-text>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-loading',
    props: {
        icon: {
            type: String, 
            default: 'loading' 
        },
        iconRotate: {
            type: Boolean,
            default: true,
        },
        text: {
            type: String,
        },
        size: {
            type: String,
            validator: (value) => ['small', 'large'].includes(value),
        },
    },
};
</script>

<style module>
.root {
    text-align: center;
    display: inline-block;
    vertical-align: middle;
}

.root .icon {
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 24px;
    color: var(--loading-icon-color);
}

.root[size="small"] .icon {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
}

.root[size="large"] .icon {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 40px;
}

.rotate {
    animation: rotate 1.5s linear infinite;
    transform-origin: center;
}

@keyframes rotate {
    0%{ 
       transform: rotate(0deg);
    }
    100%{
       transform: rotate(360deg);
    }
}

.text {
    color: var(--loading-text-color);
}
</style>
