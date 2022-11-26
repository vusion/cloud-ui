### 测试多种布局属性影响

``` vue
<template>
    <u-linear-layout direction="vertical">
        <u-linear-layout direction="vertical">
            <u-linear-layout>
                <u-label>布局模式：</u-label>
                <u-select v-model="mode" clearable>
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
        <u-multi-layout direction="vertical">
            <u-multi-layout-item style="height: 60px;">
                <u-block>1</u-block>
            </u-multi-layout-item>
            <u-multi-layout-item>
                <u-multi-layout>
                    <u-multi-layout-item style="width: 200px;">
                        <u-panel>1</u-panel>
                        <u-panel>2</u-panel>
                        <u-panel>3</u-panel>
                    </u-multi-layout-item>
                    <u-multi-layout-item :mode="mode"
                    :justify="justify"
                    :alignment="alignment"
                    :direction="direction">
                        <u-panel>1</u-panel>
                        <u-panel>2</u-panel>
                        <u-panel>3</u-panel>
                    </u-multi-layout-item>
                </u-multi-layout>
            </u-multi-layout-item>
        </u-multi-layout>
    </u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            justify: undefined,
            alignment: undefined,
            mode: undefined,
            direction: undefined,
        }
    },
}
</script>
```