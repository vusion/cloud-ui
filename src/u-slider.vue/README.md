# 滑块 Slider

## 示例
### 基本形式

``` html
<u-slider :value="20" :step="10"></u-slider>
```

### 最大值和最小值

``` html
<u-slider :value="20" :min="10" :max="50"></u-slider>
```

### 连续和间隔

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :step="20"></u-slider>
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
| step | Number | `0` | 间隔。`0`表示连续 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @input

滑块的值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Number | 滑块的值 |

#### @change

滑块的值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Number | 改变后的值 |
| $event.oldValue | Number | 旧的值 |
