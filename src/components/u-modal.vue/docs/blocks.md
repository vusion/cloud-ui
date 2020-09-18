### 基本用法

``` html
<u-modal ref="modal1" title="标题">
    这是一段文字内容。
</u-modal>
<u-linear-layout>
    <u-button @click="$refs.modal1.currentVisible=true">Modal</u-button>
</u-linear-layout>
```

### 改变主要按钮

``` html
<u-modal title="标题" ref="model2"
  primary-button="cancelButton">内容</u-modal>
<u-linear-layout>
    <u-button @click="$refs.model2.currentVisible=true">Modal</u-button>
</u-linear-layout>
```

### 禁用按钮

``` html
<u-modal title="标题" ref="model3" disable-ok>内容</u-modal>
<u-linear-layout>
    <u-button @click="$refs.model3.currentVisible=true">Modal</u-button>
</u-linear-layout>
```

### 自定义

``` html
<u-modal ref="model4">
    <div slot="title">自定义</div>
    <div slot="foot">
        <u-button color="primary">关闭</u-button>
    </div>
</u-modal>
<u-linear-layout>
    <u-button @click="$refs.model4.currentVisible=true">Modal</u-button>
</u-linear-layout>
```
