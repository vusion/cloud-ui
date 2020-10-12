### 基本用法

``` html
<u-modal ref="modal1" title="标题" visible>
    这是一段文字内容。
</u-modal>
```

### 改变主要按钮

``` html
<u-modal ref="modal1" title="标题" visible
  primary-button="cancelButton">内容</u-modal>
```

### 禁用按钮

``` html
<u-modal ref="modal1" title="标题" visible disable-ok>内容</u-modal>
```

### 自定义

``` html
<u-modal ref="modal1" visible>
    <template #title>
        自定义
    </template>
    <template #body>
        内容
    </template>
    <template #foot>
        <u-button color="primary">关闭</u-button>
    </template>
</u-modal>
```
