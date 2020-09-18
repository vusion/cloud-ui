<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDescList 描述列表

- [示例](#示例)
    - [基本用法](#基本用法)
    - [行内排列](#行内排列)
    - [间距](#间距)
- [UDescList API](#udesclist-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UDescListGroup API](#udesclistgroup-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
- [UDescListItem API](#udesclistitem-api)
    - [Props/Attrs](#propsattrs-3)
    - [Slots](#slots-3)

## 示例
### 基本用法

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

### 行内排列

``` html
<u-desc-list layout="inline" label-size="auto">
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

### 间距

通过设置`gap`属性，调整间距大小。

``` html
<u-desc-list gap="none">
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

``` html
<u-desc-list gap="small">
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

``` html
<u-desc-list gap="large">
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
## UDescList API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| label-size | enum | `'small'`<br/>`'normal'`<br/>`'large'`<br/>`'huge'` | `'normal'` | 描述列表所有项的标签大小。 |

### Slots

#### (default)

插入`<u-desc-list-item>`或`<u-desc-list-group>`子组件。

## UDescListGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | undefined |
| label-size | enum | `'small'`<br/>`'normal'`<br/>`'large'`<br/>`'huge'` |  | 该组下面所有项的标签大小。 |

### Slots

#### (default)

插入`<u-desc-list-item>`子组件

## UDescListItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| label | string |  |  | undefined |
| label-size | enum | `'small'`<br/>`'normal'`<br/>`'large'`<br/>`'huge'` |  | 该项的标签大小。 |

### Slots

#### (default)

插入文本或HTML。

