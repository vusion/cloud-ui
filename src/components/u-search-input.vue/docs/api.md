## UInput
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Object | | 选中对象 |
| searchWord | String | | 输入框内容 |
| offset | Number | `0` | 输入框x轴方向偏移量 |
| loadList | Function | | 搜索列表返回函数，接受搜索关键字作为参数，以promise或者array返回值 |
| valueCheck | Boolean |`false` | 失焦时search与value值同步, 仅在value值绑定时生效 |
| type | String | `'text'` | 输入框的类型，目前支持两种：`'text'`和`'password'` |
| clearable | Boolean | | 是否可清空。开启并在输入框有内容时会显示清空按钮。 |
| placeholder | String | | 原生属性。对 IE9 做了兼容。 |
| minlength | Number | | 原生属性 |
| maxlength | Number | | 原生属性 |
| spellcheck | Boolean | | 原生属性 |
| autofocus | Boolean | | 是否自动获取焦点 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| size | String | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `'full'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |
| search | String | | 搜索标志，支持位置自定义，默认搜索标志在最右边，值为`left`即表示搜索标志在左边 |
| maxlengthMessage | String | | 输入内容达到上限时的错误提示，且被 [FormItem](#/components/u-form) 包裹时生效 |

### Slots

#### (default)

插入  HTML或 `Component`, 下来框单项展示。

#### header

分组数据，组标题

### Events

#### @input

value值更改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 选中下拉框中的值 |

#### @change

value值更改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Object | 改变后的值 |
| $event.oldValue | Object | 旧的值 |

#### @blur

输入框失焦事件透传

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | vue失焦事件对象 |

#### @focus

输入框聚焦焦事件透传

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | vue聚焦事件对象 |

#### @keyenter

enter输入事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | vue keydown.enter事件对象 |

#### @keydown

down输入事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | vue keydown.down事件对象 |

#### @keyup

up输入事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | vue keydown.up事件对象 |

#### @keychange

searchWord更改事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |
