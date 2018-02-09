# 开关 Switch

## 示例
### 基本形式

``` html
<u-switch></u-switch>
```

### With Text

``` html
<u-switch with-text></u-switch>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Boolean | `false` | 开关状态 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 插入文本或HTML |

### Events

#### @before-toggle

切换开关状态前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean | 开关状态 |
| $event.oldValue | Boolean | 旧的开关状态 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @input

切换开关状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Boolean | 切换后的开关状态 |

#### @toggle

切换开关状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean | 开关状态 |
| $event.oldValue | Boolean | 旧的开关状态 |

#### @change

开关状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean | 开关状态 |
| $event.oldValue | Boolean | 旧的开关状态 |
