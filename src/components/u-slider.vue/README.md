<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USlider 滑块

- [示例](#示例)
    - [基本用法](#基本用法)
    - [最大值和最小值](#最大值和最小值)
    - [连续和间隔](#连续和间隔)
    - [范围](#范围)
    - [只读和禁用](#只读和禁用)
    - [展示 ToolTip](#展示-tooltip)
    - [多滑块](#多滑块)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**表单控件**, **块级展示**

## 示例
### 基本用法

``` html
<u-slider :value="36"></u-slider>
```

### 最大值和最小值

``` html
<u-slider :value="36" :min="10" :max="50"></u-slider>
```

### 连续和间隔

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :step="0"></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :step="20"></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 范围

使用`range`可以进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="50" :range="[20, 85]"></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="40" :step="10" :range="[30]"></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 只读和禁用
``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" readonly></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" disabled></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 展示 ToolTip

``` html
<u-slider :value="36" :show-tooltip="true"></u-slider>
<u-slider :value="36" :show-tooltip="true" tooltip="展示 ToolTip"></u-slider>
```

### 多滑块

``` html
<u-slider multiple :value="[18, 36]"></u-slider>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number |  | `0` | 滑块的值 |
| min | number |  | `0` | 最小值 |
| max | number |  | `100` | 最大值 |
| step | number |  | `1` | 间隔，表示点击按钮或按上下键所增加或减少的量。`0`表示连续 |
| precision | number |  | `1` | 精度，表示数字要保留的最小单位，整数、小数均可 |
| range | Array |  | `[]` | 进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| show-tooltip | boolean |  | `false` | 鼠标悬浮时展示提示文字 |
| tooltip | string |  |  | Tooltip文字设置。在展示Tooltip开关打开的情况下才会生效 |
| multiple | boolean |  | `false` | 设置是否展示多滑块 |

### Events

#### @input

拖动滑块时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | number | 滑块的值 |
| senderVM | USlider | 发送事件实例 |

#### @slide

拖动滑块时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | number | 滑块的值 |
| $event.oldValue | number | 旧的值 |
| $event.percent | number | 滑块位置所在的百分比 |
| senderVM | USlider | 发送事件实例 |

#### @change

滑块的值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | number | 改变后的值 |
| $event.oldValue | number | 旧的值 |
| senderVM | USlider | 发送事件实例 |

