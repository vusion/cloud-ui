<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UToast 吐司提示

- [示例](#示例)
    - [基本用法](#基本用法)
    - [快捷方式](#快捷方式)
    - [位置扩展](#位置扩展)
    - [设置颜色](#设置颜色)
    - [嵌入文档流](#嵌入文档流)
    - [可关闭](#可关闭)
    - [提示停留时间](#提示停留时间)
    - [始终显示一条](#始终显示一条)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

## 示例
### 基本用法

```html
<u-button @click="$refs.toast.show()">弹出消息</u-button>
<u-toast ref="toast">这是一条消息</u-toast>
```

### 快捷方式

``` vue
<template>
<u-button @click="show">弹出消息</u-button>
</template>

<script>
export default {
    methods: {
        show() {
            this.$toast.show('这是一条消息');
        },
    },
};
</script>
```

### 位置扩展

``` vue
<template>
<u-linear-layout>
    <u-button @click="show('top-center')">Top Center</u-button>
    <u-button @click="show('top-left')">Top Left</u-button>
    <u-button @click="show('top-right')">Top Right</u-button>
    <u-button @click="show('bottom-center')">Bottom Center</u-button>
    <u-button @click="show('bottom-left')">Bottom Left</u-button>
    <u-button @click="show('bottom-right')">Bottom Right</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        show(position) {
            this.$toast.position = position;
            this.$toast.show('position: ' + position);
        },
    },
};
</script>
```
### 设置颜色

``` vue
<template>
<u-linear-layout>
    <u-button @click="show('info')">Info</u-button>
    <u-button @click="show('success')">Success</u-button>
    <u-button @click="show('warning')">Warning</u-button>
    <u-button @click="show('error')">Error</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        show(color) {
            this.$toast[color]('color: ' + color);
        },
    },
};
</script>
```

### 嵌入文档流

上面的 Toast 都是以`fixed`的形式固定在浏览器中，也可以将Toast嵌入文档流。只需使用`u-toast`标签，并设置`position="static"`即可。

``` html
<p><u-button @click="$refs.staticToast.show()">Static</u-button></p>
<u-toast ref="staticToast" position="static" text="Static Toast"></u-toast>
```

### 可关闭

``` html
<p><u-button @click="$refs.closableToast.show()">Static</u-button></p>
<u-toast ref="closableToast" position="static" text="Closable" :duration="0" closable></u-toast>
```

### 提示停留时间

可以通过设置toast的`duration`参数设置所有提示的停留时间，也可以在`show`的时候单独设置该条提示的停留时间，单位为毫秒。

默认为`3000`。

``` vue
<template>
<u-linear-layout>
    <u-button @click="show(1000)">1s</u-button>
    <u-button @click="show(3000)">3s</u-button>
    <u-button @click="show(10000)">10s</u-button>
    <u-button @click="show(0)">常驻</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        show(duration) {
            this.$toast.show('duration: ' + duration + ' ms', duration);
        },
    },
};
</script>
```

### 始终显示一条

将`single`设置为`true`，可以让toast始终只显示一条提示。

``` vue
<template>
<u-button @click="show()">Single</u-button>
</template>

<script>
export default {
    data() {
        return {
            number: 1,
        };
    },
    methods: {
        show() {
            this.$toast.single = true;
            this.$toast.show('number: ' + this.number);
            this.number++;
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| position | enum | `'top-center'`<br/>`'top-left'`<br/>`'top-right'`<br/>`'bottom-center'`<br/>`'bottom-left'`<br/>`'bottom-right'`<br/>`'static'` | `'top-center'` | 显示的位置，可选值：`'top-center'`, `'top-left'`, `'top-right'`, `'bottom-center'`, `'bottom-left'`, `'bottom-right'`, `static` |
| duration | number |  | `2000` | 提示停留的时间。`0`表示常驻。 |
| single | boolean |  | `false` | 多个提示会合并为一个 |
| text | string |  | `''` | 默认提示内容 |
| color | string |  | `'default'` | 提示的颜色 |
| closable | boolean |  | `false` | 是否可以关闭提示 |

### Events

#### @open

弹出提示时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | 提示的内容 |
| $event.color | string | 提示的颜色 |
| $event.duration | number | 提示停留的时间 |
| senderVM | UToast | 发送事件实例 |

#### @before-close

关闭提示前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | 提示的内容 |
| $event.color | string | 提示的颜色 |
| $event.duration | number | 提示停留的时间 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | UToast | 发送事件实例 |

#### @close

关闭提示时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.text | string | 提示的内容 |
| $event.color | string | 提示的颜色 |
| $event.duration | number | 提示停留的时间 |
| senderVM | UToast | 发送事件实例 |

