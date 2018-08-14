# 吐司提示 Toast

## 示例
### 基本形式

``` html
<u-button @click="$refs.toastBasic.show()">toast</u-button>
<u-toast ref="toastBasic" message="Hello World!"></u-toast>
```

推荐使用下面的方式，使用`$toast`方式实现`toast`提示，标签形式用在有路由跳转时会有问题

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
            this.$toast.show('Hello World!');
        },
    },
};
</script>
```

### 位置扩展

``` vue
<template>
    <u-linear-layout>
        <u-button size="small" @click.native="show('top-center')">Top Center</u-button>
        <u-button size="small" @click.native="show('top-left')">Top Left</u-button>
        <u-button size="small" @click.native="show('top-right')">Top Right</u-button>
        <u-button size="small" @click.native="show('bottom-center')">Bottom Center</u-button>
        <u-button size="small" @click.native="show('bottom-left')">Bottom Left</u-button>
        <u-button size="small" @click.native="show('bottom-right')">Bottom Right</u-button>
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
}
</script>
```
### 嵌入文档流

上面的 `Toast` 都是以fixed的形式固定在浏览器中，也可以将`Toast`嵌入文档流。只需使用`u-toast`标签，并设置`position="static"`即可。

``` html
<u-button @click.native="$refs.toast.show()">Static</u-button>
<u-toast ref="toast" position="static" message="Static Toast"></u-toast>
```

### 可关闭

``` html
<u-button @click.native="$refs.toastClose.show()">可关闭的 Toast</u-button>
<u-toast ref="toastClose" position="static" message="Static Toast" closeable></u-toast>
```

### 提示停留时间

``` vue
<template>
    <u-linear-layout>
        <u-button @click="show(500)">0.5s</u-button>
        <u-button @click="show(1000)">1s</u-button>
        <u-button @click="show(2000)">2s</u-button>
        <u-button @click="show(0)">常驻</u-button>
    </u-linear-layout>
</template>

<script>
export default {
    methods: {
        show(duration) {
            this.$toast.position = 'top-center';
            this.$toast.state = '';
            this.$toast.show('duration: ' + duration, duration);
        },
    },
}
</script>
```
### 始终显示一条

将`single`设置为`true`，可以让`toast`始终只显示一条提示。

```vue
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
    }
};
</script>
```

### 样式扩展

``` vue
<template>
    <u-linear-layout>
        <u-button @click.native="show('info')">info 样式</u-button>
        <u-button @click.native="show('success')">success 样式</u-button>
        <u-button @click.native="show('warnning')">warnning 样式</u-button>
        <u-button @click.native="show('error')">error 样式</u-button>
    </u-linear-layout>
</template>

<script>
export default {
    methods: {
        show(state) {
            this.$toast.position = 'top-center';
            this.$toast.state = state;
            this.$toast.show('state: ' + state);
        },
    },
}
</script>
```

### 大小扩展

``` vue
<template>
    <u-linear-layout>
        <u-button @click.native="show('small')">small</u-button>
        <u-button @click.native="show('normal')">normal</u-button>
        <u-button @click.native="show('large')">large</u-button>
        <u-button @click.native="show('huge')">huge</u-button>
        <u-button @click.native="show('auto')">auto</u-button>
        <u-toast ref="toastSize" position="top-center" :size="size"></u-toast>
    </u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            size: 'small',
        }
    },
    methods: {
        show(size) {
            this.size = size;
            this.$refs.toastSize.show('hello');
        },
    },
}
</script>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| position | String | `top-center` | 显示的位置，可选的值有：`top-center`,`top-left`, `top-right`, `bottom-center`, `bottom-left`, `bottom-right`, `static` |
| duration | Number | `2000 `| 提示停留的时间。`0`表示常驻。 |
| single | Boolean | `false` | 多个提示会合并为一个 |
| state | String | `''` | 可选值：`info`，`success`, `warnning`, `error`和默认的五种样式toast |
| message | String | `''` | 提示内容 |
| closeable | Boolean | `false` | 是否可关闭提示，默认不可关闭 |
| size | String | `''` | 改变默认宽度大小，值有`'small'`, `'normal'`,`'large'`,`'huge'`,`'auto'` |

### Methods

#### show

显示 toast 信息

| Param | Type | Description |
| ----- | ---- | ----------- |
| message | String | 提示内容 |
