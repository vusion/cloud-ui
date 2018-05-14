# 消息提示 Toast

## 示例
### 基本形式

#### 命令式
推荐使用下面的方式，使用$toast方式实现toast提示，标签形式用在有路由跳转时会有问题

``` vue
<template>
<div>
<u-button @click.native="open">Toast</u-button>
</div>
</template>

<script>
export default {
    methods: {
        open() {
            this.$toast.show('Hello world');
        },
    },
};
</script>
```

#### 声明式


``` html
<u-button @click.native="$refs.toast.show()">toast</u-button>
<u-toast ref="toast" message="消息提示" position="static"></u-toast>
```

``` html
<u-button @click.native="$refs.toastInfo.show()">toast</u-button>
<u-toast ref="toastInfo" message="消息提示" state="info"></u-toast>
```

``` html
<u-button @click.native="$refs.toastSucc.show()">toast</u-button>
<u-toast ref="toastSucc" message="消息提示" state="success"></u-toast>
```

``` html
<u-button @click.native="$refs.toastWarn.show()">toast</u-button>
<u-toast ref="toastWarn" message="消息提示" state="warnning"></u-toast>
```

``` html
<u-button @click.native="$refs.toastError.show()">toast</u-button>
<u-toast ref="toastError" message="消息提示" state="error"></u-toast>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| position | String | top-center | 显示的位置，可选的值有：top-center, top-left, top-right, bottom-center, bottom-left, bottom-right, static |
| duration | Number | 2000 | 默认的显示位置 |
| single | Boolean | false | 只显示一个toast提示，，需要手动设置，默认为false |
| state | String | '' | 可选值有info，success, warnning, error和默认的五种样式toast |
| message | String | '' | 提示内容 |
| closeable | Boolean | false | 是否可关闭提示，默认不可关闭 |

### Methods

#### show

显示 toast 信息

| Param | Type | Description |
| ----- | ---- | ----------- |
| message | String | 提示内容 |
