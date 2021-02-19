<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UIf 条件渲染

- [示例](#示例)
    - [基础示例](#基础示例)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)

**Container**

用于按照条件展示内容

## 示例
### 基础示例

``` html
<u-if :check="true">
    <template #True>
        <u-text text="成功"></u-text>
    </template>
    <template #False>
        <u-text text="失败"></u-text>
    </template>
</u-if>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| check | boolean |  |  | 判断条件 |

### Slots

#### True

当判断条件为 true 时显示

#### False

当判断条件为 false 时显示

