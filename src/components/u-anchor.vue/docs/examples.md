### 基本用法

``` html
<u-anchor label="/#/components/u-toc/examples#高级">
</u-anchor>
```

``` html
<u-anchor label="/#/components/u-anchor/examples#高级">
</u-anchor>
```


``` html
<u-toc>
    <u-toc-item label="基础示例" to="examples">
        <u-toc-item label="锚点1" anchorLinked="#锚点1" :to="{ path: 'examples', hash: '#基本用法' }"></u-toc-item>
        <u-toc-item label="value" anchorLinked="#/components/u-toc/examples#基本用法" :to="{ path: 'examples', hash: '#value' }"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UToc API" :to="{ path: 'api', hash: '#api' }">
        <u-toc-item label="Props/Attrs" :to="{ path: 'api', hash: '#propsattrs' }"></u-toc-item>
        <u-toc-item label="Slots" :to="{ path: 'api', hash: '#slots' }"></u-toc-item>
        <u-toc-item label="Events" :to="{ path: 'api', hash: '#events' }"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UTocItem API" :to="{ path: 'api', hash: '#api' }">
        <u-toc-item label="Props/Attrs" :to="{ path: 'api', hash: '#propsattrs' }"></u-toc-item>
        <u-toc-item label="Slots" :to="{ path: 'api', hash: '#slots' }"></u-toc-item>
        <u-toc-item label="Events" :to="{ path: 'api', hash: '#events' }"></u-toc-item>
    </u-toc-item>
</u-toc>
```

``` html
<u-anchor label="锚点2">
</u-anchor>
```

``` html
<u-toc>
    <u-toc-item label="基础示例" to="examples">
        <u-toc-item label="锚点1" anchorLinked="#锚点1" :to="{ path: 'examples', hash: '#基本用法' }"></u-toc-item>
        <u-toc-item label="value" anchorLinked="#/components/u-toc/examples#基本用法" :to="{ path: 'examples', hash: '#value' }"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UToc API" :to="{ path: 'api', hash: '#api' }">
        <u-toc-item label="Props/Attrs" :to="{ path: 'api', hash: '#propsattrs' }"></u-toc-item>
        <u-toc-item label="Slots" :to="{ path: 'api', hash: '#slots' }"></u-toc-item>
        <u-toc-item label="Events" :to="{ path: 'api', hash: '#events' }"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UTocItem API" :to="{ path: 'api', hash: '#api' }">
        <u-toc-item label="Props/Attrs" :to="{ path: 'api', hash: '#propsattrs' }"></u-toc-item>
        <u-toc-item label="Slots" :to="{ path: 'api', hash: '#slots' }"></u-toc-item>
        <u-toc-item label="Events" :to="{ path: 'api', hash: '#events' }"></u-toc-item>
    </u-toc-item>
</u-toc>
```
