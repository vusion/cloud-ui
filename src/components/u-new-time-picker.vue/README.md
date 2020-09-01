<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UNewTimePicker 时间选择器

- [示例](#示例)
    - [基本用法](#基本用法)
    - [设置格式](#设置格式)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

新版时间选择器

## 示例
### 基本用法

``` html
<u-new-time-picker></u-new-time-picker>
```

### 设置格式

``` html
<u-new-time-picker format="dd:HH:mm"></u-new-time-picker>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | string |  |  | 值 |
| format | string |  | `'HH:mm:ss'` | undefined |
| autofocus | boolean |  | `false` | 是否自动获得焦点 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @change

修改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | string | 值 |
| $event.oldValue | number | 旧的值 |

