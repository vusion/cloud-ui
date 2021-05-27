<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTaskBox 任务箱

- [示例](#示例)
    - [设置分页](#设置分页)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Process**

用于展示流程任务箱

## 示例
### 设置分页

通过`size`属性设置尺寸。

``` html
<u-linear-layout gap="large">
    <u-task-box :size="5"></u-task-box>
    <u-task-box :size="10"></u-task-box>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| size | number |  | `5` | 每页条数 |
| title | string |  |  | 鼠标 hover 在图标上展示文案 |

### Events

#### @$listeners

监听所有`<span>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

