<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFor 循环渲染

- [示例](#示例)
    - [基础示例](#基础示例)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)

**Container**

用于对数组类型的数据结构循环展示

## 示例
### 基础示例

``` html
<u-for :data="[1,2,3]">
    <template slot-scope="{item, index}">
        <u-text display="block" :text="'序号:' + index + ', 值:' + item"> </u-text>
    </template>
</u-for>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | array |  |  | 待渲染数据 |

### Slots

#### (default)

待循环渲染的项

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 循环中的当前项。 |
| index | string | 该列组件实例。 |

