### 基本用法

``` html
<u-collapse>
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 简洁模式

``` html
<u-collapse appear="simple">
    <u-collapse-item title="面板1">
        <u-link slot="extra">设置</u-link>
        Content1
    </u-collapse-item>
    <u-collapse-item title="面板2" expanded>
        Content2
    </u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 手风琴模式

``` html
<u-collapse accordion>
    <u-collapse-item title="面板1" expanded>Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```
