<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCrumb 面包屑

- [示例](#示例)
    - [基本用法](#基本用法)
    - [分隔符](#分隔符)
    - [带图标面包屑](#带图标面包屑)
- [UCrumb API](#ucrumb-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UCrumbItem API](#ucrumbitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events)

**Navigation**

导航指引

## 示例
### 基本用法

``` html
<u-crumb>
    <u-crumb-item to="/">首页</u-crumb-item>
    <u-crumb-item to="/cloud-ui">原型组件</u-crumb-item>
    <u-crumb-item type="text">Navigation</u-crumb-item>
    <u-crumb-item type="text" to="/cloud-ui/u-crumb">面包屑</u-crumb-item>
</u-crumb>
<u-crumb>
    <u-crumb-item to="/">首页</u-crumb-item>
    <u-crumb-item to="/cloud-ui">原型组件</u-crumb-item>
    <u-crumb-item disabled>Navigation</u-crumb-item>
    <u-crumb-item type="text" to="/cloud-ui/u-crumb">面包屑</u-crumb-item>
</u-crumb>
```

### 分隔符

``` html
<u-crumb separator="slash">
    <u-crumb-item to="/">首页</u-crumb-item>
    <u-crumb-item to="/cloud-ui">原型组件</u-crumb-item>
    <u-crumb-item disabled>Navigation</u-crumb-item>
</u-crumb>
```

### 带图标面包屑

``` html
<u-crumb icon>
    <u-crumb-item to="/" icon="home">首页</u-crumb-item>
    <u-crumb-item to="/cloud-ui" icon="file">原型组件</u-crumb-item>
    <u-crumb-item disabled icon="task">Navigation</u-crumb-item>
</u-crumb>
```

## UCrumb API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| auto | boolean |  | `false` | 是否自动根据子页面配置的面包屑属性自动生成 |
| separator | string | `[object Object]`<br/>`[object Object]` | `'arrow'` | 设置面包屑分隔样式类型，基础样式为箭头，分隔符样式为斜杠 |
| icon | boolean |  | `false` |  |

### Slots

#### (default)

插入`<u-crumb-item>`子组件。

## UCrumbItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 文本内容 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| append | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。 |
| icon | icon |  |  |  |
| type | string | `[object Object]`<br/>`[object Object]` | `'link'` |  |
| linkType | string | `[object Object]`<br/>`[object Object]` | `'destination'` |  |
| hrefAndTo | string |  |  |  |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 链接打开后的展示方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Events

#### @$listeners

监听所有`<a>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |

#### @click

点击链接时触发，与原生 click 事件不同的是，它只会在非禁用状态下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | UCrumb | 发送事件实例 |

#### @before-navigate

使用 router 相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | UCrumb | 发送事件实例 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| senderVM | UCrumb | 发送事件实例 |

