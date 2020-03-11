<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# URadios 单选组

**表单控件**, **块级展示**

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

## URadios API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any |  |  | 当前选择的值 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-radio>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
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
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | URadio | 选择项子组件 |
| senderVM | URadios | 发送事件实例 |

## URadio API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| label | any |  |  | 单选框标签。用于关联单选组的值 |
| readonly | boolean |  | `false` | 禁用只读 |
| disabled | boolean |  | `false` | 禁用此项 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.label | any | 此项的标签 |
| $event.itemVM | URadio | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | URadio | 发送事件实例 |
