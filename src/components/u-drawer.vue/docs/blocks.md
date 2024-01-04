### 基本用法

``` html
<u-drawer>
    <template #title>
        <u-text text="标题"></u-text>
    </template>
    <template #body>
        <u-text>内容</u-text>
    </template>
    <template #foot>
        <u-linear-layout justify="start">
            <u-button color="primary">确 定</u-button>
            <u-button>取 消</u-button>
        </u-linear-layout>
    </template>
</u-drawer>
```
