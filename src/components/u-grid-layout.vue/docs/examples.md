### 基本用法

定义栅格系统，用`repeat`属性来定义栅格列数，用`span`属性来设置列跨越的栅格数。

``` html
<u-grid-layout>
	<u-grid-layout-row :repeat="6">
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>1/6</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="24">
		<u-grid-layout-column :span="2"><u-block>2/24</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="4"><u-block>4/24</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="8"><u-block>8/24</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="10"><u-block>10/24</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="3">
		<u-grid-layout-column :span="1"><u-block>1/3</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2"><u-block>2/3</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### 间隙

```html
<u-grid-layout gap="none">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout gap="small">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout gap="normal">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout gap="large">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout gap="small normal">
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>small normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small normal</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>small normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small normal</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### 列偏移

```html
<u-grid-layout>
	<u-grid-layout-row :repeat="12">
		<u-grid-layout-column :span="4"><u-block>4/12</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="4" :offset="4"><u-block>4/12 offset=4</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="12">
		<u-grid-layout-column :span="3" :offset="3"><u-block>3/12 offset=3</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="3" :offset="3"><u-block>3/12 offset=3</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### 列排序

``` html
<u-grid-layout>
	<u-grid-layout-row :repeat="10">
		<u-grid-layout-column :span="4" :push="6"><u-block>4/10 push=6</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="6" :pull="4"><u-block>6/10 pull=4</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="10">
		<u-grid-layout-column :span="2" :push="8"><u-block>2/10 push=8</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="3" :push="3"><u-block>3/10 push=5</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="5" :pull="5"><u-block>5/10 push=5</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### Flex模式
#### 水平分布方式

``` html
<u-grid-layout>
	<u-grid-layout-row :repeat="6" type="flex" justify="start">
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" justify="center">
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" justify="end">
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" justify="space-between">
		<u-grid-layout-column :span="1"><u-block>space-between</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>space-between</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>space-between</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" justify="space-around">
		<u-grid-layout-column :span="1"><u-block>space-around</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>space-around</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>space-around</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

#### 垂直对齐方式

``` html
<u-grid-layout gap="large small">
	<u-grid-layout-row :repeat="6" type="flex" alignment="start">
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">start</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" alignment="center">
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">center</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" alignment="end">
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">end</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" alignment="baseline">
		<u-grid-layout-column :span="1"><u-block>baseline</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">baseline</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">baseline</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" type="flex" alignment="stretch">
		<u-grid-layout-column :span="1"><u-block style="height: 100%">stretch</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto" style="height: 100%">stretch</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto" style="height: 100%">stretch</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

### 响应式

参考了[Bootstrap](https://getbootstrap.com)的响应式设计，预设了五个响应尺寸：`mini`、`small`、`medium`、`large`和`huge`。

``` html
<u-grid-layout>
	<u-grid-layout-row>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-huge="3" :media-medium="4" :media-small="6"><u-block>Responsive</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```
