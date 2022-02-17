### 基本用法

```html
<u-button @click="$refs.toast.show()">组件</u-button>
<u-toast :duration="2000" position="top-right">2s</u-toast>
```

### 嵌入文档流可关闭

``` html
<u-button @click="$refs.closableToast.show()">Static</u-button>
<u-toast position="static" text="Closable" :duration="0" closable></u-toast>
```
