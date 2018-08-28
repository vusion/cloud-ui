# 圆型进度条 CircularSpecificProgress

## 示例

### 基本形式

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
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| percent | Number | `0` | 百分比 |
| rule | Object | `{value: -1}` | 自定义显示规则，当大于`rule.value`时，颜色由值的`rule.color`属性来决定 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 插入文本或HTML |
