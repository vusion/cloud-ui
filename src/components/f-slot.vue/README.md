<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# FSlot 便捷插槽

- [示例](#示例)

- [API]()
    - [Props/Attrs](#propsattrs)

## 示例
有时在模板中需要其他组件的`slot`。常用的方法是把整个模板用`slot`函数重写，或者局部再写个组件，这些方法的成本都较高。

`<f-slot>`比`<f-render>`更方便，支持向作用域插槽传入属性，支持对作用域插槽、普通插槽、后备内容的判断。

``` htm
<f-slot name="cell" :vm="columnVM" :props="{ item, value, index }">
    <span>{{ value }}</span>
</f-slot>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| vm | Vue |  |  | 实例 |
| name | string |  |  | Slot 名称 |
| props | object |  |  | 需要传给作用域插槽的属性 |
| catchError | boolean |  | `true` | 是否捕获异常，防止报错终止整体渲染 |

