### 基本用法

``` html
<u-list-view>
    <u-list-view-item>水杯</u-list-view-item>
    <u-list-view-item>坚果</u-list-view-item>
    <u-list-view-item>毛巾</u-list-view-item>
    <u-list-view-item>沙发</u-list-view-item>
</u-list-view>
```

### 自定义
```html
<u-list-view show-head title="单选列表" :data-source="list">
		<template #item="scope">
				<h3 :class="$style.title"><u-text :text="scope.item.text"></u-text></h3>
				<u-text :text="scope.item.text" wrap="ellipsis">is a specfic language with some features that ...</u-text>
		</template>
</u-list-view>
```

### 禁用

``` html
<u-list-view value="towel" disabled>
		<u-list-view-item value="cup">水杯</u-list-view-item>
		<u-list-view-item value="nut">坚果</u-list-view-item>
		<u-list-view-item value="towel">毛巾</u-list-view-item>
		<u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```

### 分隔符

``` html
<u-list-view value="nut">
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="toothbrush">牙刷</u-list-view-item>
    <u-list-view-divider></u-list-view-divider>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```

### 分组

``` html
<u-list-view>
		<u-list-view-group title="洗具">
				<u-list-view-item>毛巾</u-list-view-item>
				<u-list-view-item>牙刷</u-list-view-item>
		</u-list-view-group>
		<u-list-view-group title="杯具">
				<u-list-view-item>牙缸</u-list-view-item>
				<u-list-view-item>水杯</u-list-view-item>
		</u-list-view-group>
		<u-list-view-group title="餐具">
				<u-list-view-item>筷子</u-list-view-item>
				<u-list-view-item>碗</u-list-view-item>
		</u-list-view-group>
</u-list-view>
```

### 可取消

```html
<u-list-view value="towel" cancelable>
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```