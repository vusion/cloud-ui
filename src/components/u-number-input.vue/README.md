<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UNumberInput 数字输入

- [示例](#示例)
    - [基本用法](#基本用法)
    - [按钮为两端分布](#按钮为两端分布)
    - [双向绑定](#双向绑定)
    - [最大值和最小值](#最大值和最小值)
    - [精度与间隔](#精度与间隔)
    - [格式化](#格式化)
    - [只读和禁用](#只读和禁用)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [ARIA and Keyboard](#aria-and-keyboard)

**Form**

输入数字时使用

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-number-input></u-number-input>
    <u-number-input :value="6"></u-number-input>
</u-linear-layout>
```

### 按钮为两端分布

``` html
<u-linear-layout>
    <u-number-input buttonDisplay="bothEnds" :value="6"></u-number-input>
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

如果不限精度和间隔，则将`precision`和`step`设置为`0`即可。

``` html
<u-linear-layout>
    <u-number-input :value="6" :precision="0" :step="0"></u-number-input>
</u-linear-layout>
```

`precision`和`step`有一个为0，精度由另外一个与`value`的精度值决定，取精度高的值。

``` html
<u-linear-layout>
    <u-number-input :value="6.11" :precision="0" :step="0.5"></u-number-input>
    <u-number-input :value="6.11" :precision="0.01" :step="0"></u-number-input>
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
    <u-number-input buttonDisplay="bothEnds" :value="6" readonly></u-number-input>
    <u-number-input buttonDisplay="bothEnds" :value="6" disabled></u-number-input>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| formatter | string, object |  |  | 格式化字符串，具体参见示例。也可以传入一个包含`get`和`set`方法的格式化对象。 |
| value.sync, v-model | number |  | `0` | 输入的值 |
| min | number |  | `''` | 最小可输入的值 |
| max | number |  | `''` | 最大可输入的值 |
| precision | number |  | `1` | 限制数字输入要保留的最小精度单位，默认不限制精度，如需保留两位小数，则填入0.01 |
| decimal-length | number |  |  | 控制数据存储时小数点后保留几位。例如：精度为2，则数据存储时小数点后保留2位。 |
| decimal-places | { places: number, omit: boolean } |  | `'{ places: '', omit: true }'` | 控制数据展示时小数点后保留几位，仅影响展示，不影响数据实际存储的值。例如：小数位数为2，则数据展示时小数点后保留2位。 |
| thousandths | boolean |  | `false` | undefined |
| percent-sign | boolean |  | `false` | undefined |
| unit | { type: string, value: string } |  | `'{ type: 'prefix', value: '' }'` | 输入框中显示的单位 |
| advanced-format | { enable: boolean, value: string } |  | `'{ enable: false, value: '' }'` | 用来控制数字的展示格式 |
| placeholder | string |  |  | 为空时显示的占位符文本 |
| autofocus | boolean |  |  | 设置是否自动获取焦点 |
| hide-buttons | boolean |  | `false` | 是否隐藏上下点击按钮 |
| clearable | boolean |  |  | 可点击清除按钮一键清除内容 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| step | number |  | `1` | 间隔，表示点击按钮或按上下键所增加或减少的量 |
| width | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置数字输入框宽度大小 |
| height | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置数字输入框高度大小 |

### Slots

#### (default)

插入 HTML 或 `Component`, 可展示额外内容。

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
| $event | object | 自定义事件对象 |
| $event.rawValue | string | 用户输入的原始值 |
| $event.value | number | 验证修复的值 |
| $event.valid | boolean | 原始值是否合法 |
| senderVM | UNumberInput | 发送事件实例 |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
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

#### @keydown

键盘按键按下时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 键盘按键事件对象 |

#### @keyup

键盘按键松开时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 键盘按键事件对象 |

### ARIA and Keyboard

| Key | Description |
| --- | ----------- |
| <kdb>↑</kdb> | 按`step`量增加值 |
| <kdb>↓</kdb> | 按`step`量减小值 |
| <kdb>Enter</kdb> | 自动修复为合法的值，并且应用更改 |

