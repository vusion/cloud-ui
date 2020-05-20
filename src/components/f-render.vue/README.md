<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# FRender 渲染器

- [示例](#示例)

- [API]()
    - [Props/Attrs](#propsattrs)

## 示例
有时在模板中需要动态渲染一部分`vnode`的节点，比如别的组件的`slot`。常用的方法是把整个模板用`render`函数重写，或者局部再写个组件，这些方法的成本都较高。

`<f-render>`可以方便解决这类问题。

``` htm
<f-render :vnode="$slots.title"></f-render>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| vnode | VNode |  |  | 需要渲染的 VNode 节点 |

