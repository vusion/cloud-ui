# 链接（Link）

## 示例
### 基本形式

``` html
<u-link href="#">链接</u-link>&nbsp;<u-link href="#">查看详情</u-link>
```

### 禁用

``` html
<u-link href="#" disabled>Link</u-link>
```

### `href` vs `to`

``` html
<u-link href="https://github.com/vusion/vusion" target="_blank">href</u-link>&nbsp;
<u-link to="/some/router/path">to</u-link>
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
| disabled | Boolean | `false` | Prevent action of this link |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | Hold the text and can contain HTML |

### Events

#### $listeners

Inherit all events from `<a>` element.

#### @click

#### @navigate
