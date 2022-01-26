### 基本用法

将需要弹出的内容用`<u-popup>`包裹起来，并插入到触发事件的元素中。

``` html
<u-popup-combination>
    <template #reference>
         <u-button color="primary" text="确定"></u-button>
    </template>
    <u-text>内容</u-text>
</u-popup-combination>
```