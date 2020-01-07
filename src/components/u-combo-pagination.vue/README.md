<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UComboPagination 复合翻页器

**UI 组件**, **块级展示**

在 UPagination 的基础上，添加了显示总页数、切换每页大小、页面跳转等功能。

## 示例
### 基本用法

使用`show-total`、`show-sizer`、`show-jumper`这几个属性，可以对应开启的显示总页数、切换每页大小、页面跳转功能。

``` html
<u-combo-pagination :total-items="75" show-total show-sizer show-jumper></u-combo-pagination>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| page.sync | number |  | `1` | 当前页码 |
| page-size.sync | number |  | `20` | 每页大小 |
| page-size-options | Array |  | `[10, 20, 50]` | 每页大小选项列表 |
| total | number |  | `11` | 总页数 |
| side | number |  | `2` | 当页数多时，两边恒定显示的数量 |
| around | number |  | `5` | 当页数多时，中间恒定显示的数量 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| show-total | boolean |  | `false` | 是否显示总条目数 |
| show-sizer | boolean |  | `false` | 是否显示切换每页大小选项 |
| show-jumper | boolean |  | `false` | 是否显示页面跳转输入框 |

### Events

#### @change

页码改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | number | 当前页码 |
| $event.oldPage | number | 旧的页码 |
| senderVM | UComboPagination | 发送事件实例 |

#### @change-page-size

每页大小改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | number | 当前页码 |
| $event.oldPage | number | 旧的页码 |
| senderVM | UComboPagination | 发送事件实例 |
