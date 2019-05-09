# UStatusIcon 状态图标

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-status-icon name="success">运行中</u-status-icon>
    <u-status-icon name="pause">已停服</u-status-icon>
    <u-status-icon name="warning">异常</u-status-icon>
    <u-status-icon name="waiting">重启中</u-status-icon>
    <u-status-icon name="error">更新失败</u-status-icon>
    <u-status-icon name="mount">已绑定</u-status-icon>
    <u-status-icon name="end">结束</u-status-icon>
    <u-status-icon name="expire">失效</u-status-icon>
    <u-status-icon name="disabled">禁用</u-status-icon>
    <u-status-icon name="enabled">启用</u-status-icon>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| name | String | `` | 对应图标的name， |
| size | Number, String | `24` | 图标对应的font-size值大小 |
