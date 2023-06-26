<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USwitch 开关

- [示例](#示例)
    - [基本用法](#基本用法)
    - [Value 绑定](#value-绑定)
    - [基本状态、只读和禁用](#基本状态-只读和禁用)
    - [调整尺寸](#调整尺寸)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Form**

开关

## 示例
### 基本用法

``` html
<u-switch></u-switch>
```

### Value 绑定

``` vue
<template>
<u-switch v-model="value" width="wide" disabled>{{ value ? 'ON' : 'OFF' }}</u-switch>
</template>
<script>
export default {
    data() {
        return { value: true };
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

### 调整尺寸

``` vue
<template>
<u-switch v-model="value" size="small" style="width: 52px;">{{ value ? 'LIST' : 'LIST' }}</u-switch>
</template>
<script>
export default {
    data() {
        return { value: false };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | boolean |  | `false` | 标识开关状态的值 |
| with-text | boolean |  | `false` | 是否显示开关`ON`和`OFF`文字 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Events

#### @before-toggle

切换开关状态前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | boolean | 开关状态 |
| $event.oldValue | boolean | 旧的开关状态 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | USwitch | 发送事件实例 |

#### @input

切换开关状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | boolean | 切换后的开关状态 |
| senderVM | USwitch | 发送事件实例 |

#### @on

开关打开时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 无 |
| senderVM | USwitch | 发送事件实例 |

#### @off

开关关闭时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 无 |
| senderVM | USwitch | 发送事件实例 |

#### @toggle

切换开关状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | boolean | 开关状态 |
| $event.oldValue | boolean | 旧的开关状态 |
| senderVM | USwitch | 发送事件实例 |

#### @change

开关状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | boolean | 开关状态 |
| $event.oldValue | boolean | 旧的开关状态 |
| senderVM | USwitch | 发送事件实例 |

