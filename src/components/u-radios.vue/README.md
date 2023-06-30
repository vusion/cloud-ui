<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# URadios 单选组

- [示例](#示例)
    - [基本用法](#基本用法)
    - [只读、禁用、禁用某一项](#只读-禁用-禁用某一项)
    - [autofocus](#autofocus)
- [URadios API](#uradios-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
- [URadio API](#uradio-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events-2)

**Form**

多项中选择一个时使用

## 示例
### 基本用法

``` html
<u-radios value="毛巾">
    <u-radio label="水杯">水杯</u-radio>
    <u-radio label="坚果">坚果</u-radio>
    <u-radio label="毛巾">毛巾</u-radio>
    <u-radio label="沙发">沙发</u-radio>
</u-radios>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout direction="vertical">
    <u-radios value="毛巾" readonly>
        <u-radio label="水杯">水杯</u-radio>
        <u-radio label="坚果">坚果</u-radio>
        <u-radio label="毛巾">毛巾</u-radio>
        <u-radio label="沙发">沙发</u-radio>
    </u-radios>
    <u-radios value="毛巾" disabled>
        <u-radio label="水杯">水杯</u-radio>
        <u-radio label="坚果">坚果</u-radio>
        <u-radio label="毛巾">毛巾</u-radio>
        <u-radio label="沙发">沙发</u-radio>
    </u-radios>
    <u-radios value="坚果">
        <u-radio label="水杯">水杯</u-radio>
        <u-radio label="坚果">坚果</u-radio>
        <u-radio label="毛巾" disabled>毛巾</u-radio>
        <u-radio label="沙发" disabled>沙发</u-radio>
    </u-radios>
</u-linear-layout>
```

### autofocus

``` html
<u-radios>
    <u-radio label="水杯">水杯</u-radio>
    <u-radio label="坚果" autofocus>坚果</u-radio>
    <u-radio label="毛巾">毛巾</u-radio>
    <u-radio label="沙发">沙发</u-radio>
</u-radios>
```

## URadios API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function |  |  | 展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| text-field | string |  | `'text'` | 集合的元素类型中，用于显示文本的属性名称 |
| value-field | string |  | `'value'` | 集合的元素类型中，用于标识选中值的字段 |
| value.sync, v-model | any |  |  | 当前选中的值 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Slots

#### (default)

插入`<u-radio>`子组件。

#### item

自定义选项的结构和样式

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | URadio | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | URadios | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | URadios | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | URadio | 选择项子组件 |
| senderVM | URadios | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | URadio | 选择项子组件 |
| senderVM | URadios | 发送事件实例 |

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无 |
| senderVM | UTableView | 发送事件实例 |

Methods

#### reload()

清除缓存，重新加载

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## URadio API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 显示文本内容 |
| label | any |  |  | 用于标识选项的值 |
| autofocus | boolean |  | `false` | 设置是否自动获取焦点 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.label | any | 此项的标签 |
| $event.itemVM | URadio | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | URadio | 发送事件实例 |

