### 基本用法

``` html
<u-collapse>
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3" disabled>Content3</u-collapse-item>
</u-collapse>
```

### 手风琴模式

``` html
<u-collapse accordion>
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 面板嵌套

折叠面板可以进行嵌套。

``` html
<u-collapse>
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>
        <u-collapse>
            <u-collapse-item title="面板1">Content1</u-collapse-item>
            <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
            <u-collapse-item title="面板3">Content3</u-collapse-item>
        </u-collapse>
    </u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 使用插槽

``` html
<u-collapse>
    <u-collapse-item title="面板1">
        <u-link slot="extra">设置</u-link>
        Content1
    </u-collapse-item>
    <u-collapse-item title="面板2" expanded>
        <u-collapse>
            <u-collapse-item title="面板1">Content1</u-collapse-item>
            <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
            <u-collapse-item title="面板3">Content3</u-collapse-item>
        </u-collapse>
    </u-collapse-item>
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

### 触发方式-仅点击小箭头时触发

#### 整行点击均可触发（默认）

<u-collapse expand-trigger="click-expander">
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2">Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>