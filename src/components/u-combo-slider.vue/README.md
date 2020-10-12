<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UComboSlider 复合滑块

- [示例](#示例)
    - [基本用法](#基本用法)
    - [提示](#提示)
    - [最大值和最小值](#最大值和最小值)
    - [只读和禁用](#只读和禁用)
    - [精度与间隔](#精度与间隔)
    - [范围](#范围)
    - [同步时机](#同步时机)
    - [格式化](#格式化)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [ARIA and Keyboard](#aria-and-keyboard)

**Form**

滑动选择

## 示例
### 基本用法

``` html
<u-combo-slider></u-combo-slider>
```

### 提示
``` html
<u-combo-slider :step="10" unit="GB" tip="步长为10GB"></u-combo-slider>
```

### 最大值和最小值

``` html
<u-combo-slider :step="10" unit="GB" tip="步长为10GB" :min="10" :max="90" :value="40"></u-combo-slider>
```

### 只读和禁用
``` html
<u-grid-layout>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="36" readonly></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="36" disabled></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 精度与间隔

精度表示数字要保留的最小单位，整数、小数均可，输入框会根据它作四舍五入。默认为`1`，即保留到整数。

间隔表示点击按钮或按上下键所增加或减少的量，最好为精度的整数倍。

间隔为`0`时，滑块拖动连续，数值保留到精度。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" :precision="5" :step="5"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" :precision="5" :step="20"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" :step="0"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 范围

使用`range`可以进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="50" :range="[20, 85]"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="40" :step="10" :range="[30]"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 同步时机

用`sync-on`属性可以设置输入后何时同步值到`<u-slider>`组件中。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="20" :precision="10" :step="20"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="20" :precision="10" :step="20" sync-on="blur"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 格式化

通常可以用以下字符组成一个格式化字符串：

- `0`表示数字占位符。如果整数部分长度小于占位符的数量，则用`0`补足。如果小数部分长度大于占位符数量，则会四舍五入。
- `#`表示数字占位符。只显有意义的零而不显示无意义的零。
- `.`表示小数点。
- `,`表示千分位。

也可以传入一个包含`get`和`set`方法的格式化对象。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="6" formatter="000"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" formatter="0%"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number |  | `0` | 滑块的值 |
| min | number |  | `0` | 最小值 |
| max | number |  | `0` | 最大值 |
| step | number |  | `1` | 间隔。`0`表示连续 |
| precision | number |  | `1` | 精度，表示数字要保留的最小单位，整数、小数均可 |
| range | Array |  | `[]` | 进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。 |
| formatter | string, object |  |  | 格式化字符串，具体参见示例。也可以传入一个包含`get`和`set`方法的格式化对象。 |
| sync-on | string | `[object Object]`<br/>`[object Object]` | `'input'` | 同步时机 |
| hide-buttons | boolean |  | `true` | 是否隐藏按钮 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| unit | string |  |  | 单位 |
| tip | string |  |  | 提示 |

### Events

#### @input

滑块的值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | number | 滑块的值 |

#### @slide

拖动滑块时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | number | 滑块的值 |
| $event.oldValue | number | 旧的值 |
| $event.percent | number | 滑块位置所在的百分比 |

#### @change

滑块的值改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | number | 改变后的值 |
| $event.oldValue | number | 旧的值 |

#### @number-input

改变数字输入框的值后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | number | 改变后滑块的值 |

#### @slide-end

拖动滑块结束后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | number | 改变后的值 |

### ARIA and Keyboard

| Key | Description |
| --- | ----------- |
| <kdb>↑</kdb> | 按`step`量增加值 |
| <kdb>↓</kdb> | 按`step`量减小值 |
| <kdb>Enter</kdb> | 自动修复为合法的值，并且应用更改 |

