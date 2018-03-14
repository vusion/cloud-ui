# 复合滑块 ComboSlider

``` html
<u-combo-slider></u-combo-slider>
```

``` html
<u-combo-slider :step="10" unit="GB" tip="步长为10GB"></u-combo-slider>
```

### 禁用

``` html
<u-combo-slider :step="10" unit="GB" tip="步长为10GB" disabled :value="40"></u-combo-slider>
```

### 最大/最小值

``` html
<u-combo-slider :step="10" unit="GB" tip="步长为10GB" :min="10" :max="90" :value="40"></u-combo-slider>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Number | `0` | 滑块的值 |
| min | Number | `0` | 最小值 |
| max | Number | `0` | 最大值 |
| step | Number | `0` | 间隔。`0`表示连续 |
| unit | String |  | 单位 |
| tip | String |  | 提示 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @input

滑块的值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Number | 滑块的值 |

#### @change

滑块的值改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Number | 改变后的值 |
| $event.oldValue | Number | 旧的值 |
