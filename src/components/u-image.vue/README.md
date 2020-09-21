<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UImage 图片展示

- [示例](#示例)
    - [基本用法](#基本用法)
    - [样式调整](#样式调整)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Display**

可以用来展示一张图片，支持设置图片地址。

## 示例
### 基本用法

``` html
<u-image src="https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg" ></u-image>
```

### 样式调整

``` html
<u-image src="https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg" style="height:120px;border:1px solid red;"></u-image>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| src | string |  | `''` | 图片地址 |

### Events

#### @load

网页加载完成时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

