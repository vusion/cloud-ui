<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UPagination 翻页器

- [示例](#示例)
    - [基本用法](#基本用法)
    - [显示数量](#显示数量)
    - [上一页和下一页](#上一页和下一页)
    - [显示总条数](#显示总条数)
    - [全部配置](#全部配置)
    - [只读和禁用](#只读和禁用)
    - [小尺寸](#小尺寸)
    - [简洁版](#简洁版)
    - [修复样式字体无效的bug](#修复样式字体无效的bug)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

展示多页列表时使用

## 示例
### 基本用法

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11"></u-pagination>
    <u-pagination :total="11" :page="6"></u-pagination>
</u-linear-layout>
```

### 显示数量

当页数多时，可以使用`side`和`around`来设置两边和中间恒定显示的数量。

``` html
<u-pagination :total="11" :page="6" :side="1" :around="3"></u-pagination>
```

### 上一页和下一页

修改上一页和下一页，接受 slot 来自定义内容

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11">
        <a slot="prev" role="text">上一页</a>
        <a slot="next" role="text">下一页</a>
    </u-pagination>
</u-linear-layout>
```

### 显示总条数

显示总共多少条数据，接受 slot 来自定义内容

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total></u-pagination>
    <u-pagination :total-items="75" show-total>
        <template slot="total" slot-scope="{ data }">
            {{ (data.page - 1)*data.pageSize + 1}}-{{ data.page*data.pageSize}}条，共{{data.totalItems}}条
        </template>
    </u-pagination>
</u-linear-layout>
```

### 全部配置

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total show-sizer show-jumper></u-pagination>
    <u-pagination
        :total-items="75"
        show-total
        show-sizer
        show-jumper
        :pageSize="30"
        :pageSizeOptions="[30,50,100]">
    </u-pagination>
</u-linear-layout>
```

### 只读和禁用

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" readonly></u-pagination>
    <u-pagination :total-items="75" show-total show-sizer show-jumper readonly></u-pagination>
    <u-pagination :total="11" disabled></u-pagination>
    <u-pagination :total-items="75" show-total show-sizer show-jumper disabled></u-pagination>
</u-linear-layout>
```

### 小尺寸

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total show-sizer show-jumper size="small"></u-pagination>
</u-linear-layout>
```

### 简洁版

设置`simple`属性即可使用简洁版的分页，不支持显示总页数、切换每页大小、页面跳转功能

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" simple></u-pagination>
    <u-pagination :total="11" simple readonly></u-pagination>
    <u-pagination :total="11" simple disabled></u-pagination>
</u-linear-layout>
```

### 修复样式字体无效的bug

```html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" style="font-size: 18px;color:#ec2929;"></u-pagination>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| page.sync | number |  | `1` | 当前默认展示在第几页 |
| total | number |  | `11` |  |
| side | number |  | `2` | 当页数多时，两端恒定显示的页码数量 |
| around | number |  | `5` | 当页数多时，中间恒定显示的页码数量 |
| total-items | number |  |  |  |
| page-size.sync | number |  | `20` |  |
| page-size-options | Array |  | `[10, 20, 50]` | 每页条数切换器的选项 |
| show-total | boolean |  | `false` |  |
| show-sizer | boolean |  | `false` | 显示每页条数切换器 |
| show-jumper | boolean |  | `false` | 显示页面跳转输入框 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Events

#### @before-select

选择分页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.page | number | 选择的页码 |
| $event.oldPage | number | 旧的页码 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UPagination | 发送事件实例 |

#### @select

选择分页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.page | number | 选择的页码 |
| $event.oldPage | number | 旧的页码 |
| senderVM | UPagination | 发送事件实例 |

#### @change

页码改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.page | number | 当前页码 |
| $event.oldPage | number | 旧的页码 |
| senderVM | UPagination | 发送事件实例 |

#### @change-page-size

每页条数改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.pageSize | number | 当前每页条数 |
| $event.oldPageSize | number | 旧的每页条数 |
| senderVM | UPagination | 发送事件实例 |

