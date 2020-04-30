<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UButton 按钮

- [示例](#示例)
    - [基本用法](#基本用法)
    - [设置形状](#设置形状)
    - [禁用状态](#禁用状态)
    - [设置尺寸](#设置尺寸)
    - [块级展示](#块级展示)
    - [图标](#图标)
    - [加载中](#加载中)
    - [链接](#链接)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**路由链接**, **行内展示**

用于触发一个即时操作。

## 示例
### 基本用法

按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

``` html
<u-linear-layout>
    <u-button color="primary">Primary</u-button>
    <u-button>Default</u-button>
    <u-button dashed>Dashed</u-button>
    <u-button color="danger">Danger</u-button>
</u-linear-layout>
```

### 设置形状

按钮有四种形状：默认、圆角、方形、圆形，使用`shape`属性来设置。

``` html
<u-linear-layout gap="small">
    <u-button color="primary">Primary</u-button>
    <u-button color="primary" shape="round">Round</u-button>
    <u-button color="primary" shape="square" icon="refresh"></u-button>
    <u-button color="primary" shape="circle" icon="refresh"></u-button>
    <u-button>Default</u-button>
    <u-button shape="round">Round</u-button>
    <u-button shape="square" icon="refresh"></u-button>
    <u-button shape="circle" icon="refresh"></u-button>
</u-linear-layout>
```

### 禁用状态

按钮在禁用状态下，不会响应点击事件。

``` html
<u-linear-layout>
    <u-button color="primary" disabled>Primary</u-button>
    <u-button disabled>Default</u-button>
    <u-button dashed disabled>Dashed</u-button>
    <u-button color="danger" disabled>Danger</u-button>
</u-linear-layout>
```

### 设置尺寸

按钮有最小、小、正常、大四种尺寸，通过`size`属性设置。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout gap="small">
        <u-button size="mini" color="primary">Primary</u-button>
        <u-button size="mini" color="primary" shape="round">Round</u-button>
        <u-button size="mini" shape="square" icon="refresh"></u-button>
        <u-button size="mini" shape="circle" icon="refresh"></u-button>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-button size="small" color="primary">Primary</u-button>
        <u-button size="small" color="primary" shape="round">Round</u-button>
        <u-button size="small" shape="square" icon="refresh"></u-button>
        <u-button size="small" shape="circle" icon="refresh"></u-button>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-button size="normal" color="primary">Primary</u-button>
        <u-button size="normal" color="primary" shape="round">Round</u-button>
        <u-button size="normal" shape="square" icon="refresh"></u-button>
        <u-button size="normal" shape="circle" icon="refresh"></u-button>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-button size="large" color="primary">Primary</u-button>
        <u-button size="large" color="primary" shape="round">Round</u-button>
        <u-button size="large" shape="square" icon="refresh"></u-button>
        <u-button size="large" shape="circle" icon="refresh"></u-button>
    </u-linear-layout>
</u-linear-layout>
```

<!-- <u-linear-layout gap="small">
    <u-button size="huge" color="primary">Primary</u-button>
    <u-button size="huge" color="primary" shape="round">Round</u-button>
    <u-button size="huge" shape="square" icon="refresh"></u-button>
    <u-button size="huge" shape="circle" icon="refresh"></u-button>
</u-linear-layout> -->

### 块级展示

使用`display="block"`可以快速将按钮宽度充满整行。

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-button display="block">Default</u-button>
    <u-button display="block" color="primary">Primary</u-button>
    <u-button display="block" dashed>Dashed</u-button>
    <u-button display="block" color="danger">Danger</u-button>
</u-linear-layout>
```

### 图标

使用`icon`属性添加图标。

``` html
<u-linear-layout>
    <u-button color="primary" icon="create">创建实例</u-button>
    <u-button color="primary" icon="create" disabled>创建实例</u-button>
    <u-button color="primary" icon="success">创建成功</u-button>
    <u-button shape="square" icon="refresh"></u-button>
</u-linear-layout>
```

### 加载中

通过设置`loading`属性让按钮处于加载状态。

``` vue
<template>
<u-linear-layout>
    <u-button color="primary" loading>创建实例</u-button>
    <u-button color="primary" icon="create" loading disabled>创建实例</u-button>
    <u-button color="primary" shape="square" icon="refresh"
        :loading="loading" :disabled="loading"
        @click="loading = true">
    </u-button>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
};
</script>
```

### 链接

在按钮上可以方便添加链接或路由，类似`<router-link>`。具有 href、target、to 等属性。

``` html
<u-linear-layout>
    <u-button color="primary" href="https://vusion.github.io" target="_blank">打开新窗口</u-button>
    <u-button to="/cloud-ui/components/u-link">路由跳转</u-button>
    <u-button color="primary" href="https://vusion.github.io" disabled>禁用链接</u-button>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| color | enum | `'default'`, `'primary'`, `'danger'` | `'default'` | 设置颜色。`'primary'`表示主按钮，`'danger'`表示危险按钮。 |
| dashed | boolean |  | `false` | 边框是否为虚线。 |
| size | enum | `'mini'`, `'small'`, `'normal'`, `'large'` | `'normal'` | 设置尺寸。 |
| shape | enum | `'default'`, `'square'`, `'round'`, `'circle'` | `false` | 设置形状。选项分别为默认、圆角、方形、圆形。 |
| disabled | boolean |  | `false` | 是否禁用。禁用后不会响应点击事件。 |
| display | enum | `'inline'`, `'block'` | `'inline'` | 展示方式。`'inline'`表示行内展示, `'block'`表示块级展示，宽度会充满父元素。 |
| icon | string | `'refresh'`, `'create'`, `'success'` |  | 设置图标。【待扩充】 |
| loading | boolean |  | `false` | 是否为加载中。 |
| href | string |  |  | 链接地址 |
| target | string |  |  | （原生属性）。比如设置`_blank`，会打开新的空白页。 |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| append | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @$listeners

监听所有`<a>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @before-navigate

使用 router 相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | UButton | 发送事件实例 |

#### @navigate

使用 router 相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| senderVM | UButton | 发送事件实例 |

