<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UListComponents 组件列表

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)

**Table**

组件列表

## 示例
### 基本用法

``` html
<u-list-components :data-source="[1,2,3,4,5]">
  <template #default="scope">
    <u-linear-layout vusion-disabled-copy vusion-disabled-cut>
        <u-button>Button</u-button>
    </u-linear-layout>
  </template>
</u-list-components>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | array |  |  | 一个包含字符串或对象的数组 |
| data-schema | schema |  |  | 组件列表每一项的结构 |
| colnum | number |  | `5` | 每行排列项数 |

### Slots

#### (default)

内容自定义

