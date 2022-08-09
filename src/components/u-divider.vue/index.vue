<template>
    <div
        role="separator"
        :direction="direction"
        :style="{ borderColor: borderColor, padding: direction==='column' && !title ? '0 4px' : '0' }"
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
        direction: {
            type: String,
            default: 'horizontal',
        },
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
.root[direction="column"] {
    display: inline-flex;
    height: 100%;
    margin: 0;
    flex-direction: column;

}
.root::before, .root::after {
    display: block;
    flex: 1;
    box-sizing: border-box;
    height: 1px;
    border-color: inherit;
    border-style: inherit;
    border-width: 1px 0 0;
}
.root[direction="column"]::before, .root[direction="column"]::after {
    border-width: 0;
    border-left-width: 1px;
    border-top-width: 1px;
}
.root::before {
    content: '';
}
.dashed {
    border-style: dashed;
}
.hairline {}
.hairline::before, .hairline::after {
    /* transform: scaleY(0.5); */
}
.content-center, .content-left, .content-right {}
.content-center::before, .content-left::before, .content-right::before {
     margin-right: 24px;
}
.content-center::after, .content-left::after, .content-right::after {
    margin-left: 24px;
    content: '';
}
.content-center[direction="column"]::before, .content-left[direction="column"]::before, .content-right[direction="column"]::before {
    margin-right: 0;
    margin-bottom: 24px;
}
.content-center[direction="column"]::after, .content-left[direction="column"]::after, .content-right[direction="column"]::after {
    margin-top: 24px;
    margin-left: 0;
    content: '';
}

.content-left::before {
    max-width: 10%;
}

.content-right::after {
    max-width: 10%;
}
.content-left[direction="column"]::before {
    max-height: 10%;
}

.content-right[direction="column"]::after {
    max-height: 10%;
}
</style>
