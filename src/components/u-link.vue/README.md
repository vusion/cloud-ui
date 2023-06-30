<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# ULink 链接

- [示例](#示例)
    - [基本用法](#基本用法)
    - [设置颜色](#设置颜色)
    - [鼠标悬停状态为颜色变化](#鼠标悬停状态为颜色变化)
    - [禁用状态](#禁用状态)
    - [块级展示](#块级展示)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Display**

文字超链接

## 示例
### 基本用法

除了`<a>`标签的`href`和`target`基础属性，增加了类似`<router-link>`的`to`、`replace`和`append`属性等。

``` html
<u-link href="https://vusion.github.io" target="_blank" text="普通链接"></u-link>&nbsp;
<u-link to="/components/u-button" text="路由链接"></u-link>
```

### 设置颜色

用`color`属性修改颜色。

``` html
<u-link href="#" text="默认颜色"></u-link>&nbsp;
<u-link href="#" color="light" text="浅色链接">
    <u-tooltip>
        <u-link href="#" color="light">浅色链接</u-link>一般用于深色背景
    </u-tooltip>
</u-link>&nbsp;
<u-link color="success" text="成功链接"></u-link>&nbsp;
<u-link color="warning" text="警告链接"></u-link>&nbsp;
<u-link color="danger" text="危险链接"></u-link>&nbsp;
```

### 鼠标悬停状态为颜色变化

用`hoverType`属性修改鼠标悬停状态。

``` html
<u-link href="#" text="默认颜色" hoverType="color"></u-link>&nbsp;
<u-link href="#" hoverType="color" color="light"  text="浅色链接">
    <u-tooltip>
        <u-link href="#" color="light">浅色链接</u-link>一般用于深色背景
    </u-tooltip>
</u-link>&nbsp;
<u-link hoverType="color" color="success" text="成功链接"></u-link>&nbsp;
<u-link hoverType="color" color="warning" text="警告链接"></u-link>&nbsp;
<u-link hoverType="color" color="danger" text="危险链接"></u-link>&nbsp;
```

### 禁用状态

链接在禁用状态下，不会响应点击事件。

``` html
<u-link href="https://vusion.github.io" target="_blank" disabled text="禁用链接"></u-link>
```

### 块级展示

使用`display="block"`可以快速将链接宽度充满整行。

``` html
<u-link color="secondary" text="行内链接"></u-link>与周围其他文字保持在同一行。
<u-link display="block" color="secondary" text="块级链接"></u-link>宽度充满整行。
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| append | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。 |
| decoration | boolean |  | `true` | 是否显示下划线 |
| text | string |  |  | 显示文本内容 |
| color | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'default'` | 设置主题颜色样式 |
| display | string | `[object Object]`<br/>`[object Object]` | `'inline'` |  |
| linkType | string | `[object Object]`<br/>`[object Object]` | `'destination'` |  |
| hrefAndTo | string |  |  |  |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 链接跳转的打开方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。 |
| hoverType | string | `[object Object]`<br/>`[object Object]` | `'underline'` | 鼠标悬停时的样式变化方式 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Events

#### @$listeners

监听所有`<a>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @before-navigate

使用 router 相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | ULink | 发送事件实例 |

#### @navigate

使用 router 相关属性切换路由后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| senderVM | ULink | 发送事件实例 |

