### 基本用法

将需要弹出的内容用`<u-popup>`包裹起来，并插入到触发事件的元素中。

``` html
<u-popup>
    <template #title>
        <span>标题 <u-badge :value="3"></u-badge></span>
    </template>
    <span>使用 <u-link>slot</u-link> 可以添加一些复杂功能</span>
</u-popup>
```