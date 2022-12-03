``` html
<u-grid-layout>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<u-table-view :data-source="[]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
<u-grid-layout>
	<u-grid-layout-row :repeat="12">
		<u-grid-layout-column :span="12"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="12"><u-block>none</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### 测试多种布局属性影响

``` vue
<template>
<div>
    <u-linear-layout direction="vertical">
        <u-linear-layout direction="vertical">
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
        <u-grid-layout>
            <u-grid-layout-row :repeat="4"
				:justify="justify"
				:alignment="alignment"
                :direction="direction">
				<u-grid-layout-column :span="1" style="border:1px solid #ddd"><u-panel>1</u-panel></u-grid-layout-column>
				<u-grid-layout-column :span="1" style="border:1px solid #ddd"><u-block>2</u-block></u-grid-layout-column>
				<u-grid-layout-column :span="1" style="border:1px solid #ddd"><u-block>3</u-block></u-grid-layout-column>
			</u-grid-layout-row>
        </u-grid-layout>
    </u-linear-layout>
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
                <u-select v-model="cloumndirection" clearable>
                    <u-select-item value="horizontal">横向排列</u-select-item>
                    <u-select-item value="vertical">纵向排列</u-select-item>
                </u-select>
            </u-linear-layout>
            <u-linear-layout>
                <u-label>主轴对齐方式：</u-label>
                <u-select v-model="cloumnjustify" clearable>
                    <u-select-item value="start">左对齐</u-select-item>
                    <u-select-item value="center">居中对齐</u-select-item>
                    <u-select-item value="end">右对齐</u-select-item>
                    <u-select-item value="space-between">各行之间留有空</u-select-item>
                    <u-select-item value="space-around">之前、之间、之后都留有空白</u-select-item>
                </u-select>
            </u-linear-layout>
            <u-linear-layout>
                <u-label>纵轴对齐方式：</u-label>
                <u-select v-model="cloumnalignment" clearable>
                    <u-select-item value="start">头对齐</u-select-item>
                    <u-select-item value="center">居中对齐</u-select-item>
                    <u-select-item value="end">尾对齐</u-select-item>
                    <u-select-item value="baseline">基线对齐</u-select-item>
                    <u-select-item value="stretch">拉伸子元素充满整个父元素空间</u-select-item>
                </u-select>
            </u-linear-layout>
            <u-linear-layout>
                <u-label>内容间隙：</u-label>
                <u-select v-model="gap" clearable>
                    <u-select-item value="shrink">shrink</u-select-item>
                    <u-select-item value="none">none</u-select-item>
                    <u-select-item value="mini">mini</u-select-item>
                    <u-select-item value="small">small</u-select-item>
                    <u-select-item value="large">large</u-select-item>
                </u-select>
            </u-linear-layout>
        </u-linear-layout>
        <u-grid-layout>
            <u-grid-layout-row :repeat="4">
				<u-grid-layout-column :span="2" style="border:1px solid #ddd"
                    :mode="mode"
                    :justify="cloumnjustify"
                    :alignment="cloumnalignment"
                    :direction="cloumndirection"
                    :gap="gap">
                    <u-panel>1</u-panel>
                    <u-panel>1</u-panel>
                    <u-panel>1</u-panel>
                </u-grid-layout-column>
				<u-grid-layout-column :span="1" style="border:1px solid #ddd"><u-block>2</u-block></u-grid-layout-column>
			</u-grid-layout-row>
        </u-grid-layout>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            justify: undefined,
            alignment: undefined,
            direction: undefined,
            cloumnjustify: undefined,
            cloumnalignment: undefined,
            cloumndirection: undefined,
            gap:'',
            mode: undefined,
        }
    },
}
</script>
```