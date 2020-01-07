<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCircularProgress 圆形进度条

## 示例
### 基本用法

```html
<u-circular-specific-progress :percent="10">
    <div>VCPU</div>
</u-circular-specific-progress>
```

### 自定义显示规则

```html
<u-circular-specific-progress :rule="{ value: 50, color: 'skyblue' }" :percent="60">
    <div>VCPU</div>
</u-circular-specific-progress>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| percent | number |  | `0` | 百分比 |
| rule | object |  | `[object Object]` | 自定义显示规则，当大于`rule.value`时，颜色由值的`rule.color`属性来决定 |

### Slots

#### (default)

插入文本或HTML。
