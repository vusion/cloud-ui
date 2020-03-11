<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UNumberInput 数字输入

**表单控件**, **行内展示**

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-number-input></u-number-input>
    <u-number-input :value="6"></u-number-input>
</u-linear-layout>
```

### 双向绑定

``` vue
<template>
<u-number-input v-model="value"></u-number-input>
</template>
<script>
export default {
    data() {
        return {
            value: 6,
        };
    },
};
</script>
```

### 最大值和最小值

``` html
<u-linear-layout>
    <u-number-input :min="4" :max="12"></u-number-input>
    <u-number-input :value="6" :min="4" :max="12"></u-number-input>
</u-linear-layout>
```

### 精度与间隔

精度表示数字要保留的最小单位，整数、小数均可，输入框会根据它作四舍五入。默认为`1`，即保留到整数。

间隔表示点击按钮或按上下键所增加或减少的量，最好为精度的整数倍。

``` html
<u-linear-layout>
    <u-number-input :value="6" :precision="0.1" :step="0.5"></u-number-input>
    <u-number-input :value="5" :precision="5" :step="10"></u-number-input>
    <u-number-input :value="6" :step="10"></u-number-input>
</u-linear-layout>
```

### 格式化

通常可以用以下字符组成一个格式化字符串：

- `0`表示数字占位符。如果整数部分长度小于占位符的数量，则用`0`补足。如果小数部分长度大于占位符数量，则会四舍五入。
- `#`表示数字占位符。只显有意义的零而不显示无意义的零。
- `.`表示小数点。
- `,`表示千分位。

也可以传入一个包含`get`和`set`方法的格式化对象。

``` html
<u-linear-layout>
    <u-number-input :value="20" formatter="0000"></u-number-input>
    <u-number-input :value="1234" :precision="0.01" :step="0.1" formatter="$ #,##0.00"></u-number-input>
    <u-number-input :value="20" :precision="0.5" :step="0.5" formatter="0.0%"></u-number-input>
</u-linear-layout>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-number-input :value="6" readonly></u-number-input>
    <u-number-input :value="6" disabled></u-number-input>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number |  | `0` | 输入框的值 |
| min | number |  | `-Infinity` | 最小值 |
| max | number |  | `Infinity` | 最大值 |
| step | number |  | `1` | 间隔，表示点击按钮或按上下键所增加或减少的量 |
| precision | number |  | `1` | 精度，表示数字要保留的最小单位，整数、小数均可 |
| formatter | string, object |  |  | 格式化字符串，具体参见示例。也可以传入一个包含`get`和`set`方法的格式化对象。 |
| placeholder | string |  |  | 原生属性 |
| autofocus | boolean |  |  | 原生属性 |
| hide-buttons | boolean |  | `false` | 是否隐藏按钮 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| size | string |  | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `'full'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |

### Events

#### @input

输入时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | 输入框的值 |
| senderVM | UNumberInput | 发送事件实例 |

#### @validate

输入验证时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.rawValue | string | 用户输入的原始值 |
| $event.value | number | 验证修复的值 |
| $event.valid | boolean | 原始值是否合法 |
| senderVM | UNumberInput | 发送事件实例 |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | number | 改变后的值 |
| $event.oldValue | number | 旧的值 |
| $event.formattedValue | string | 格式化后的值 |
| $event.valid | boolean | 改变后的值是否合法 |
| senderVM | UNumberInput | 发送事件实例 |

#### @focus

获得焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | 原生事件对象 |
| senderVM | UNumberInput | 发送事件实例 |

#### @blur

失去焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | 原生事件对象 |
| senderVM | UNumberInput | 发送事件实例 |

### ARIA and Keyboard

| Key | Description |
| --- | ----------- |
| <kdb>↑</kdb> | 按`step`量增加值 |
| <kdb>↓</kdb> | 按`step`量减小值 |
| <kdb>Enter</kdb> | 自动修复为合法的值，并且应用更改 |
