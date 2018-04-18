# 复合滑块 ComboSlider

``` html
<u-combo-slider></u-combo-slider>
```

``` html
<u-combo-slider :step="10" unit="GB" tip="步长为10GB"></u-combo-slider>
```

### 最大/最小值

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

### 错误修复时机

用`fixOn`属性可以设置输入框错误在失焦时修复（默认）还是在输入时修复。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" :precision="10" :step="20"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" :precision="10" :step="20" fix-on="input"></u-combo-slider>
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

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Number | `0` | 滑块的值 |
| min | Number | `0` | 最小值 |
| max | Number | `0` | 最大值 |
| step | Number | `1` | 间隔。`0`表示连续 |
| precision | Number | `1` | 精度，表示数字要保留的最小单位，整数、小数均可 |
| formatter | String, Object |  | 格式化字符串，具体参见示例。也可以传入一个包含`get`和`set`方法的格式化对象。 |
| fix-on | String | `'blur'` | 错误修复时机。可选值：`'input'`表示在输入时修复，`'blur'`表示在失焦时修复 |
| hide-buttons | Boolean | `true` | 是否隐藏按钮 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| unit | String |  | 单位 |
| tip | String |  | 提示 |

### Events

#### @input

滑块的值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Number | 滑块的值 |

#### @slide

拖动滑块时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Number | 滑块的值 |
| $event.oldValue | Number | 旧的值 |
| $event.percent | Number | 滑块位置所在的百分比 |

#### @change

滑块的值改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Number | 改变后的值 |
| $event.oldValue | Number | 旧的值 |
