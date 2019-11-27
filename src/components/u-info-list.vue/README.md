<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# InfoList 详情列表

## 示例
### 基本用法

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

### 列数

``` html
<u-info-list column="2">
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息" column="3">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

### 操作

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <template slot="extra">
            <u-link style="float: right;">设置</u-link>
        </template>
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

## InfoList API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| column | string |  | `3` | 列数。可选值：`1`、`2`、`3`、`4` |
| label-size | string |  | `'auto'` | 标签大小。可选值：`small`、`normal`、`large`、`auto` |

### Slots

#### (default)

插入`<u-info-list-item>`或`<u-info-list-group>`子组件。

## InfoListItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| label | string |  |  | 标签 |
| column | string |  |  | 列数。可选值：`1`、`2`、`3`、`4` |
| label-size | string |  | `'auto'` | 标签大小。可选值：`small`、`normal`、`large`、`auto` |
| ellipsis | boolean |  | `false` | 是否换行，默认换行，值为`true`则开启不换行，超出部分显示为省略号 |

### Slots

#### (default)

插入文本或HTML。

#### label

用于自定义 label 内容。

## InfoListGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 标题 |
| label-size | string |  | `'auto'` | 标签大小。可选值：`small`、`normal`、`large`、`auto` |

### Slots

#### (default)

插入`<u-info-list-item>`子组件

#### operate

自定义副标题。
