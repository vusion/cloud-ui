<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MModal 弹窗 Mixin

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

用于封装弹窗的 Mixin

## 示例
### 基本用法

``` html
<m-modal></m-modal>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | number |  | `0` | 需要传入的值 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @change

修改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.param1 | string | 参数1 |
| $event.param2 | number | 参数2 |

