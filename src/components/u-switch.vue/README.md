# USwitch 开关

## 示例
### 基本形式

``` html
<u-switch></u-switch>
```

### Value绑定

``` vue
<template>
<u-switch v-model="value" width="wide">{{ value ? 'ON' : 'OFF' }}</u-switch>
</template>
<script>
export default {
    data() {
        return { value: false };
    },
};
</script>
```

### 基本状态、只读和禁用

``` html
<u-linear-layout>
    <u-switch with-text></u-switch>
    <u-switch readonly></u-switch>
    <u-switch disabled></u-switch>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | `Boolean` | `false` | 开关状态 |
| readonly | `Boolean` | `false` | 是否只读 |
| disabled | `Boolean` | `false` | 是否禁用 |
| with-text | `Boolean` | `false` | 是否显示开关`ON`和`OFF`文字 |

### Slots

#### (default)

插入文本或`HTML`。

### Events

#### @before-toggle

切换开关状态前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | `Boolean` | 开关状态 |
| $event.oldValue | `Boolean` | 旧的开关状态 |
| $event.preventDefault | `Function` | 阻止切换流程 |

#### @input

切换开关状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | `Boolean` | 切换后的开关状态 |

#### @toggle

切换开关状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | `Boolean` | 开关状态 |
| $event.oldValue | `Boolean` | 旧的开关状态 |

#### @change

开关状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | `Boolean` | 开关状态 |
| $event.oldValue | `Boolean` | 旧的开关状态 |
