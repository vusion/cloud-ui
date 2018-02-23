# 详情列表 InfoList

## 示例
### 基本形式

``` vue
<template>
    <u-info-list>
        <u-info-list-group title="基本信息">
            <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
            <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
            <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
            <u-info-list-item label="默认VPC">是</u-info-list-item>
            <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
        </u-info-list-group>
    </u-info-list>
</template>
```

### 列数

``` vue
<template>
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
</template>
```

## InfoList API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| column | String | 3 | 列数。可选值：1、2、3、4。 |
| label-size | String | | 标签大小。可选值：small、normal、large

### Slots

#### (default)

插入`<u-info-list-item>`或`<u-info-list-group>`子组件。

## InfoListItem API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| label | String | | 标签 |
| column | String | 3 | 列数。可选值：1、2、3、4。 |
| label-size | String | | 标签大小。可选值：small、normal、large

### Slots

#### (default)

插入文本或HTML。

## InfoListGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 标题 |
| label-size | String | | 标签大小。可选值：small、normal、large

### Slots

#### (default)

插入`<u-info-list-item>`子组件
