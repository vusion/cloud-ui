<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UGridLayout 栅格布局

- [示例](#示例)
    - [基本用法](#基本用法)
    - [间隙](#间隙)
    - [列间隙](#列间隙)
    - [列偏移](#列偏移)
    - [列排序](#列排序)
    - [Flex模式](#flex模式)
    - [响应式](#响应式)
- [UGridLayout API](#ugridlayout-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UGridLayoutRow API](#ugridlayoutrow-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
- [UGridLayoutColumn API](#ugridlayoutcolumn-api)
    - [Props/Attrs](#propsattrs-3)
    - [Slots](#slots-3)
    - [Events](#events)

**Layout**

内部元素按照一定的规则布局

## 示例
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

### 列间隙

```html
<u-grid-layout>
	<u-grid-layout-row :repeat="4" gap="none">
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout>
	<u-grid-layout-row :repeat="4" gap="mini">
		<u-grid-layout-column :span="1"><u-block>mini</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>mini</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>mini</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>mini</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout>
	<u-grid-layout-row :repeat="4" gap="small">
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>small</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout>
	<u-grid-layout-row :repeat="4" gap="normal">
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>normal</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout>
	<u-grid-layout-row :repeat="4" gap="large">
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>large</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<br>
<u-grid-layout>
	<u-grid-layout-row :repeat="4" gap="huge">
		<u-grid-layout-column :span="1"><u-block>huge</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>huge</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>huge</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>huge</u-block></u-grid-layout-column>
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
	<u-grid-layout-row :repeat="6" justify="start">
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" justify="center">
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" justify="end">
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" justify="space-between">
		<u-grid-layout-column :span="1"><u-block>space-between</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>space-between</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>space-between</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" justify="space-around">
		<u-grid-layout-column :span="1"><u-block>space-around</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>space-around</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>space-around</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

#### 垂直对齐方式

``` html
<u-grid-layout gap="large small">
	<u-grid-layout-row :repeat="6" alignment="start">
		<u-grid-layout-column :span="1"><u-block>start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">start</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">start</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" alignment="center">
		<u-grid-layout-column :span="1"><u-block>center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">center</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">center</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" alignment="end">
		<u-grid-layout-column :span="1"><u-block>end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">end</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">end</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" alignment="baseline">
		<u-grid-layout-column :span="1"><u-block>baseline</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="normal auto">baseline</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block size="large auto">baseline</u-block></u-grid-layout-column>
	</u-grid-layout-row>
	<u-grid-layout-row :repeat="6" alignment="stretch">
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
		<u-grid-layout-column :span="2" :media-small="3" :media-medium="4" :media-huge="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-small="3" :media-medium="4" :media-huge="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-small="3" :media-medium="4" :media-huge="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-small="3" :media-medium="4" :media-huge="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-small="3" :media-medium="4" :media-huge="6"><u-block>Responsive</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="2" :media-small="3" :media-medium="4" :media-huge="6"><u-block>Responsive</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```

## UGridLayout API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| gap | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 栅格行之间的间隔 |

### Slots

#### (default)

插入`<u-grid-layout-row>`或`<u-grid-layout-column>`子组件。

## UGridLayoutRow API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| justify | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'start'` |  |
| alignment | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'stretch'` |  |
| repeat | number |  | `12` | 默认24，可设置栅格行大小 |
| gap | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 栅格列之间的间隔 |

### Slots

#### (default)

插入`<u-grid-layout-column>`子组件。

## UGridLayoutColumn API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| media-huge | number |  |  | 响应式布局`<=1440px`的列跨越栅格数 |
| media-large | number |  |  | 响应式布局`<=1200px`的列跨越栅格数 |
| media-medium | number |  |  | 响应式布局`<=960px`的列跨越栅格数 |
| media-small | number |  |  | 响应式布局`<=768px`的列跨越栅格数 |
| media-mini | number |  |  | 响应式布局`<=480px`的列跨越栅格数 |
| mode | string | `[object Object]`<br/>`[object Object]` | `'inline'` |  |
| direction | string | `[object Object]`<br/>`[object Object]` | `'horizontal'` |  |
| justify | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'start'` |  |
| alignment | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'stretch'` |  |
| alignment | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'stretch'` |  |
| justify | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'start'` |  |
| span | number |  | `1` | 列占据栅格行的栅格数 |
| offset | number |  | `0` | 列偏移的栅格数 |
| pull | number |  | `0` | 列向左移动的栅格数 |
| push | number |  | `0` | 列向右移动的栅格数 |
| wrap | boolean |  | `true` | 设置弹性布局下子元素总宽度超出父级时子元素是否换行展示 |
| gap | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 内容块间隙大小 |

### Slots

#### (default)

插入需要布局的元素。

### Events

#### @responsive

响应式布局引发栅格变化时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.span | number | 列跨越的栅格数 |
| $event.oldSpan | number | 旧的列跨越的栅格数 |
| senderVM | Vue | 发送事件实例 |

