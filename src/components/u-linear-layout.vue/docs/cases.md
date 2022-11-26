### 测试多种布局属性影响

``` vue
<template>
<div>
    <u-linear-layout direction="vertical">
        <u-linear-layout direction="vertical">
            <u-linear-layout>
                <u-label>布局模式：</u-label>
                <u-select v-model="mode" clearable>
                    <u-select-item value="inline">行内</u-select-item>
                    <u-select-item value="block">块级</u-select-item>
                    <u-select-item value="flex">弹性</u-select-item>
                </u-select>
            </u-linear-layout>
            <u-linear-layout>
                <u-label>方向：</u-label>
                <u-select v-model="direction" clearable>
                    <u-select-item value="horizontal">横向排列</u-select-item>
                    <u-select-item value="vertical">纵向排列</u-select-item>
                </u-select>
            </u-linear-layout>
            <u-linear-layout>
                <u-label>子元素展示方式：</u-label>
                <u-select v-model="layout" clearable>
                    <u-select-item value="inline">行内</u-select-item>
                    <u-select-item value="block">块级</u-select-item>
                </u-select>
            </u-linear-layout>
            <u-linear-layout>
                <u-label>主轴对齐方式：</u-label>
                <u-select v-model="justify" clearable>
                    <u-select-item value="start">左对齐</u-select-item>
                    <u-select-item value="center">居中对齐</u-select-item>
                    <u-select-item value="end">右对齐</u-select-item>
                    <u-select-item value="space-between">各行之间留有空</u-select-item>
                    <u-select-item value="space-around">之前、之间、之后都留有空白</u-select-item>
                </u-select>
            </u-linear-layout>
            <u-linear-layout>
                <u-label>纵轴对齐方式：</u-label>
                <u-select v-model="alignment" clearable>
                    <u-select-item value="start">头对齐</u-select-item>
                    <u-select-item value="center">居中对齐</u-select-item>
                    <u-select-item value="end">尾对齐</u-select-item>
                    <u-select-item value="baseline">基线对齐</u-select-item>
                    <u-select-item value="stretch">拉伸子元素充满整个父元素空间</u-select-item>
                </u-select>
            </u-linear-layout>
        </u-linear-layout>
        <u-linear-layout
            :mode="mode"
            :direction="direction"
            :justify="justify"
            :alignment="alignment"
            :layout="layout"
            style="height:300px;border: 1px solid #aaa; padding: 20px; margin: 20px;">
            <u-panel>1</u-panel>
            <u-panel>2</u-panel>
            <u-button>3</u-button>
            <u-button>3</u-button>
        </u-linear-layout>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            mode: 'block',
            direction: undefined,
            justify: undefined,
            alignment: undefined,
            layout:undefined,
        }
    },
}
</script>
```