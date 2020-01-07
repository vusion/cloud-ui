<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UBadge 徽章

**UI 组件**, **行内展示**

## 示例
### 基本用法

``` html
<p>消息 <u-badge :value="3"></u-badge></p>
<p>消息 <u-badge value="new"></u-badge></p>
```

### 右上角

``` html
<u-badge :value="3" corner>
    <u-button>评论</u-button>
</u-badge>
```

### 最大值

``` html
<u-badge :value="120" :max="99" corner>
    <u-button>评论</u-button>
</u-badge>
```

### 小圆点

``` html
<p>消息 <u-badge :value="3" dot></u-badge></p>
<p><u-badge :value="3" corner dot>
    <u-button>评论</u-button>
</u-badge></p>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | number, string |  |  | 显示的值 |
| max | number |  |  | 最大值，超过最大值会显示为`max+`的形式，要求`value`是 `Number`类型。 |
| corner | boolean |  | `false` | 是否插入到右上角 |
| dot | boolean |  | `false` | 是否显示为小圆点 |

### Slots

#### (default)

插入需要附加徽章的元素。
