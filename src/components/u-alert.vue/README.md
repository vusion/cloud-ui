<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UAlert 公告

- [示例](#示例)
    - [基础样式](#基础样式)
    - [可手动关闭](#可手动关闭)
    - [含辅助性文字的通告形式](#含辅助性文字的通告形式)
    - [页面顶部通告形式](#页面顶部通告形式)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**Display**

公告。

## 示例
### 基础样式

``` html
<u-linear-layout direction="vertical">
    <u-alert type="info" title="信息提示"></u-alert>
    <u-alert type="success" title="成功提示"></u-alert>
    <u-alert type="warning" title="警告提示"></u-alert>
    <u-alert type="error" title="错误提示"></u-alert>
</u-linear-layout>
```

### 可手动关闭

``` html
<u-linear-layout direction="vertical">
    <u-alert type="info" title="信息提示" closeable></u-alert>
    <u-alert type="success" title="成功提示" closeable></u-alert>
    <u-alert type="warning" title="警告提示" closeable></u-alert>
    <u-alert type="error" title="错误提示" closeable></u-alert>
</u-linear-layout>
```

### 含辅助性文字的通告形式

``` html
<u-linear-layout direction="vertical">
    <u-alert type="info" title="信息提示" desc="描述信息"></u-alert>
    <u-alert type="success" title="成功提示" desc="描述信息"></u-alert>
    <u-alert type="warning" title="警告提示" desc="描述信息"></u-alert>
    <u-alert type="error" title="错误提示" desc="描述信息"></u-alert>
</u-linear-layout>
```

### 页面顶部通告形式

``` html
<u-linear-layout direction="vertical">
    <u-alert :bordered="false" type="info" title="信息提示" :show-icon="false"></u-alert>
    <u-alert :bordered="false" type="success" title="成功提示"></u-alert>
    <u-alert :bordered="false" type="warning" title="警告提示" horizontal="center"></u-alert>
    <u-alert :bordered="false" type="error" closeable><template #title>标题提示slot</template>描述信息slot</u-alert>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'info'` | 选择公告类型 |
| title | string |  | `''` | 公告标题 |
| desc | string |  | `''` | 公告辅助文本 |
| horizontal | string | `[object Object]`<br/>`[object Object]` | `'left'` | 选择对齐方式 |
| showIcon | boolean |  | `true` | 显示/隐藏图标 |
| bordered | boolean |  | `true` | 显示/隐藏边框 |
| closeable | boolean |  | `false` | 是否可手动关闭 |

### Slots

#### (default)

辅助文本

#### title

标题

### Events

#### @close

关闭时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UAlter | 发送事件实例 |

