# 链接 Link

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
<u-link href="https://vusion.github.io" target="_blank">href</u-link>&nbsp;
<u-link to="/components/u-button">to</u-link>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| href | String |  | 链接地址 |
| target | String |  | （原生属性） |
| to | String,  Location |  | 需要vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| append | Boolean | `false` | 需要vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。 |
| disabled | Boolean | `false` | 是否禁用。禁用后不会响应`click`事件。 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 插入文本或HTML |

### Events

#### $listeners

监听所有`<a>`元素的事件。

#### @before-navigate

使用router相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String,  Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.append | Boolean | `append`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String,  Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.append | Boolean | `append`属性的值 |
