# 栅格布局（Grid）
## 示例

### 基本形式

定义栅格系统，用`repeat`属性来定义栅格列数，用`span`属性来设置列跨越的栅格数。

``` html
<u-grid>
	<u-grid-row :repeat="12">
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>1/12</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="24">
		<u-grid-column :span="2"><u-block>2/24</u-block></u-grid-column>
		<u-grid-column :span="5"><u-block>5/24</u-block></u-grid-column>
		<u-grid-column :span="7"><u-block>7/24</u-block></u-grid-column>
		<u-grid-column :span="10"><u-block>10/24</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="5">
		<u-grid-column :span="2"><u-block>2/5</u-block></u-grid-column>
		<u-grid-column :span="3"><u-block>3/5</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
```

### 间隔

```html
<u-grid gap="none">
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>none</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>none</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>none</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>none</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>none</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>none</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
<br>
<u-grid gap="small">
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
<br>
<u-grid gap="normal">
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>normal</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>normal</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>normal</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>normal</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>normal</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>normal</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
<br>
<u-grid gap="large">
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>large</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>large</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>large</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>large</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>large</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>large</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
<br>
<u-grid gap="small normal">
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>small</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
```

### 列偏移

```html
<u-grid>
	<u-grid-row :repeat="12">
		<u-grid-column :span="4"><u-block>4/12</u-block></u-grid-column>
		<u-grid-column :span="4" :offset="4"><u-block>4/12 offset=4</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="12" >
		<u-grid-column :span="3" :offset="3"><u-block>3/12 offset=3</u-block></u-grid-column>
		<u-grid-column :span="3" :offset="3"><u-block>3/12 offset=3</u-block></u-grid-column>
	</u-grid-row>
<u-grid>
```

### 列排序

``` html
<u-grid>
	<u-grid-row :repeat="10">
		<u-grid-column :span="4" :push="6"><u-block>4/10 push=6</u-block></u-grid-column>
		<u-grid-column :span="6" :pull="4"><u-block>6/10 pull=4</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="10">
		<u-grid-column :span="2" :push="8"><u-block>2/10 push=8</u-block></u-grid-column>
		<u-grid-column :span="3" :push="3"><u-block>3/10 push=5</u-block></u-grid-column>
		<u-grid-column :span="5" :pull="5"><u-block>5/10 push=5</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
```

### flex模式
#### 水平排列方式

``` html
<u-grid>
	<u-grid-row :repeat="6" type="flex" justify="start">
		<u-grid-column :span="1"><u-block>start</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>start</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>start</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" type="flex" justify="center">
		<u-grid-column :span="1"><u-block>center</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>center</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>center</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" type="flex" justify="end">
		<u-grid-column :span="1"><u-block>end</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>end</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>end</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" type="flex" justify="space-between">
		<u-grid-column :span="1"><u-block>space-between</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>space-between</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>space-between</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" type="flex" justify="space-around">
		<u-grid-column :span="1"><u-block>space-around</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>space-around</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block>space-around</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
```

#### 垂直排列方式

``` html
<u-grid gap="large small">
	<u-grid-row :repeat="6" type="flex" alignment="top">
		<u-grid-column :span="1"><u-block>top</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="large">top</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="huge">top</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" type="flex" alignment="middle">
		<u-grid-column :span="1"><u-block>middle</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="large">middle</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="huge">middle</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" type="flex" alignment="bottom">
		<u-grid-column :span="1"><u-block>bottom</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="large">bottom</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="huge">bottom</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" type="flex" alignment="baseline">
		<u-grid-column :span="1"><u-block>baseline</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="large">baseline</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="huge">baseline</u-block></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" type="flex" alignment="stretch">
		<u-grid-column :span="1"><u-block>stretch</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="large">stretch</u-block></u-grid-column>
		<u-grid-column :span="1"><u-block size="huge">stretch</u-block></u-grid-column>
	</u-grid-row>
</u-grid>
```

## Grid API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| gap | String | `'normal'` | 栅格之间的间隔（行间隔 列间隔），可选值: 'none', 'small', 'normal', 'large' |

## GridRow API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| repeat | Number | `12` | 划分的栅格数 |
| type | String | | 布局模式，可选值：'flex' |
| justify | String | `'start'` | flex布局模式的水平分布方式，可选值：'start', 'center', 'end', 'space-between', 'space-around' |
| alignment | String | `'stretch'` | flex布局模式的垂直对齐方式，可选值：'top', 'middle', 'bottom', 'baseline', 'stretch' |

## GridColumn API
### Attrs/Props

Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| span | Number | | 列跨越的栅格数 |
| offset | Number | | 列左边偏移的栅格数 |
| pull | Number | | 列向左移动栅格数 |
| push | Number | | 列向右移动栅格数 |
