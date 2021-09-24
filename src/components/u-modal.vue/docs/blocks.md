### 基本用法

``` html
<u-modal>
    <template #title>
        <u-text text="标题"></u-text>
    </template>
    <template #body>
        <u-linear-layout direction="vertical">内容</u-linear-layout>
    </template>
    <template #foot>
        <u-linear-layout>
            <u-button color="primary">确定</u-button>
            <u-button>取消</u-button>
        </u-linear-layout>
    </template>
</u-modal>
```
