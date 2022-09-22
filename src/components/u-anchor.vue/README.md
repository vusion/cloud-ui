<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UAnchor 锚点

- [UAnchor 锚点](#uanchor-锚点)
  - [示例](#示例)
    - [基本用法](#基本用法)
  - [API](#api)
    - [Props/Attrs](#propsattrs)

**Navigation**

锚点

## 示例
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| label.sync, v-model | string |  |  | 锚点的唯一标识，用于跳转链接，如“/page#linkname” |

