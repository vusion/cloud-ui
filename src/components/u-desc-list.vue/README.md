# UDescList 描述列表

## 示例
### 基本形式

``` html
<u-desc-list>
    <u-desc-list-group title="个人信息">
        <u-desc-list-item label="用户名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="登录账号">1111111</u-desc-list-item>
        <u-desc-list-item label="登录密码">
            <u-link>修改</u-link>
        </u-desc-list-item>
        <u-desc-list-item label="手机">13888888888</u-desc-list-item>
    </u-desc-list-group>
    <u-desc-list-group title="公司信息">
        <u-desc-list-item label="公司名">xxxxxx</u-desc-list-item>
        <u-desc-list-item label="联系电话">13688886666</u-desc-list-item>
        <u-desc-list-item label="联系邮箱">xxxx@163.com</u-desc-list-item>
    </u-desc-list-group>
</u-desc-list>
```

## DescList API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| label-size | String | `normal` | 标签大小。可选值：`small`、`normal`、`large`、`huge` |


### Slots

#### (default)

插入`<u-desc-list-item>`或`<u-desc-list-group>`子组件。

## DescListItem API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| label | String | | 标签 |
| label-size | String | | 标签大小。可选值：`small`、`normal`、`large`、`huge` |

### Slots

#### (default)

插入文本或HTML。

## DescListGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 标题 |
| label-size | String | | 标签大小。 可选值：`small`、`normal`、`large`、`huge` |

### Slots

#### (default)

插入`<u-desc-list-item>`子组件
