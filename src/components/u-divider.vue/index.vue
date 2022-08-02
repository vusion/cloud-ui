<template>
    <div
        role="separator"
        :style="{ borderColor: borderColor }"
        :class="{
            [$style.root]: true,
            [$style.dashed]: dashed !== 'a',
            [$style.hairline]: hairline,
            [$style[`content-${contentPosition}`]]: title || $slots.default,
        }"
        >
        <span v-if="title" vusion-slot-name-edit="title">{{title}}</span>
    </div>
</template>

<script>
export default {
    name: 'u-divider',
    props: {
        dashed: {
            type: String,
            default: 'a',
        },
        hairline: {
            type: Boolean,
            default: true,
        },
        contentPosition: {
            type: String,
            default: 'center',
        },
        title: {
            type: String,
        },
    },
};
</script>
<style module>
.root {
    display: flex;
    align-items: center;
    margin: 24px 0;
    color: #969799;
    font-size: 14px;
    line-height: 24px;
    border-color: #ebedf0;
    border-style: solid;
    border-width: 0;
}
.root::before, .root::after {
    display: block;
    flex: 1;
    box-sizing: border-box;
    height: 1px;
    border-color: #e8e9eb;
    border-style: inherit;
    border-width: 1px 0 0;
}
.root::before {
    content: '';
}
.dashed {
    border-style: dashed;
}
.hairline {}
.hairline::before, .hairline::after {
    transform: scaleY(0.5);
}
.content-center, .content-left, .content-right {}
.content-center::before, .content-left::before, .content-right::before {
     margin-right: 24px;
}
.content-center::after, .content-left::after, .content-right::after {
    margin-left: 24px;
    content: '';
}


.content-left::before {
    max-width: 10%;
}

.content-right::after {
    max-width: 10%;
}
</style>
