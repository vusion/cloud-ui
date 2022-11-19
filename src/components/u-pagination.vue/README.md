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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| page.sync | number |  | `1` |  |
| total | number |  | `11` |  |
| side | number |  | `2` | 当页数多时，两边恒定显示的数量 |
| around | number |  | `5` | 当页数多时，中间恒定显示的数量 |
| readonly | boolean |  | `false` |  |
| disabled | boolean |  | `false` |  |
| total-items | number |  |  | 总条数 |
| page-size.sync | number |  | `20` |  |
| page-size-options | Array |  | `[10, 20, 50]` | 每页条数选项列表 |
| show-total | boolean |  | `false` |  |
| show-sizer | boolean |  | `false` | 是否显示切换每页条数选项 |
| show-jumper | boolean |  | `false` | 是否显示页面跳转输入框 |

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

