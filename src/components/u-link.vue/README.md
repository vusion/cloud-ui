# ULink 链接

## 示例
### 基本形式

``` html
<u-link href="#">链接</u-link>&nbsp;<u-link href="#">查看详情</u-link>
```

### 禁用

``` html
<u-link href="#" disabled>禁用</u-link>
```

### 目标

使用`href`和`target`属性，可以直接实现`<a>`元素对应的功能。使用`to`、`replace`和`append`需要引入vue-router，它们与`<router-link>`组件中对应属性的功能相同。

``` html
<u-link href="https://vusion.github.io" target="_blank">href</u-link>&nbsp;
<u-link to="/proto-ui/u-button">router</u-link>
```

### 展示方式

``` html
<u-link href="#" display="block">这是几个</u-link>
<u-link href="#" display="block">块级</u-link>
<u-link href="#" display="block">链接组件</u-link>
<u-link href="#" display="inline">这是几个</u-link>
<u-link href="#">行内（默认）</u-link>
<u-link href="#" display="inline">链接组件</u-link>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| href | String |  | 链接地址 |
| target | String |  | （原生属性） |
| to | String, Location |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| append | Boolean | `false` | 需要 vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。 |
| disabled | Boolean | `false` | 是否禁用。禁用后不会响应`click`事件。 |
| display | String | `'inline'` | 展示方式。可选值：`'inline'`, `'block'` |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### $listeners

监听所有`<a>`元素的事件。

#### @click

点击链接时触发，与原生 click 事件不同的是，它只会在非禁用状态下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |

#### @before-navigate

使用router相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.append | Boolean | `append`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.append | Boolean | `append`属性的值 |
