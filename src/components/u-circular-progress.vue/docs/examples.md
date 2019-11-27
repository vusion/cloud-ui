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
