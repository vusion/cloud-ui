# 按钮（Button）

## 示例
### 基本形式

``` html
<u-button>设 置</u-button>
```

### 禁用

``` html
<u-button disabled>设 置</u-button>
```

### 颜色扩展

``` html
<u-linear-layout>
    <u-button color="primary">立即创建</u-button>
    <u-button color="primary" disabled>立即创建</u-button>
</u-linear-layout>
```

### 大小扩展

``` html
<u-linear-layout>
    <u-button size="small" disabled>保存</u-button>
    <u-button disabled>创建服务</u-button>
</u-linear-layout>
```

### 正方形

``` html
<u-button square icon="refresh"></u-button>
```

### 图标

``` html
<u-linear-layout>
    <u-button color="primary" icon="create">创建实例</u-button>
    <u-button color="primary" icon="loading">立即创建</u-button>
    <u-button color="primary" icon="loading" disabled>立即创建</u-button>
</u-linear-layout>
```

### 链接

``` html
<u-linear-layout>
    <u-button href="https://github.com/vusion/vusion">Button</u-button>
    <u-button to="/some/router/path">Button</u-button>
    <u-button href="https://github.com/vusion/vusion" disabled>Button</u-button>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| href | String |  | `href` property of link |
| target | String |  | (native property) |
| to | String \| Object |  | `to` property of `vue-router` |
| replace | Boolean | `false` | |
| append | Boolean | `false` | |
| color | String | `''` | |
| size | String | `''` | |
| square | Boolean | `false` | |
| disabled | Boolean | `false` | Disable the button |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | Hold the text and can contain HTML |

### Events

#### $listeners

Inherit all events from `<a>` element.

#### @click

#### @navigate
