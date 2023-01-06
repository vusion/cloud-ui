<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UIframe Iframe

- [示例](#示例)
    - [基本用法](#基本用法)
    - [iframe 其他属性](#iframe-其他属性)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Container**

用于嵌入其他网页的容器。

## 示例
### 基本用法

```html
<u-iframe src="https://sf.163.com" style="width: 100%; height: 400px;"></u-iframe>
```

### iframe 其他属性

```html
<u-iframe src="https://sf.163.com" sandbox="allow-same-origin" style="width: 100%; height: 400px"></u-iframe>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| src | string |  |  | 需要嵌入的网页地址 |

### Events

#### @load

网页加载完成时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |

