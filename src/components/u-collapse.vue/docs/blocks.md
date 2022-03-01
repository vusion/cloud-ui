### 基本用法

``` html
<u-collapse>
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 额外插槽

对于一些操作项，可以使用 `extra` 插槽添加在详情列表组的右上角。

``` html
<u-collapse show-extra-empty-slot>
    <u-collapse-item title="面板1">
        <template #extra>
            <u-link>设置</u-link>
        </template>
        Content1
    </u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```
