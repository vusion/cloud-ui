### 基本用法
按照以下层级添加即可。

``` html
<u-toc>
    <u-toc-item label="锚点跳转1" :disabled=true hrefAndTo="/#/components/u-toc/examples" anchorLinked="锚点1" value="锚点value1"></u-toc-item>
    <u-toc-item label="锚点其它页面" hrefAndTo="/#/components/u-anchor/examples" anchorLinked="锚点2" value="锚点value2"></u-toc-item>
    <u-toc-item label="锚点本页面" hrefAndTo="/#/components/u-toc/examples" anchorLinked="锚点1" value="锚点value1"></u-toc-item>
    <u-toc-item label="基础示例" to="examples">
        <u-toc-item label="value" :to="{ path: 'examples', hash: '#value' }"></u-toc-item>
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
#### 高级


### value


将`router`属性设置为`false`，也可以用`value`控制选择项。

``` vue
<template>
<u-toc :router="false" v-model="value">
    <u-toc-item label="基础示例" value="examples">
        <u-toc-item label="基本用法" value="基本用法"></u-toc-item>
        <u-toc-item label="value" value="value"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UToc API" value="utocapi">
        <u-toc-item label="Props/Attrs" value="propsattrs"></u-toc-item>
        <u-toc-item label="Slots" value="slots"></u-toc-item>
        <u-toc-item label="Events" value="events"></u-toc-item>
    </u-toc-item>
    <u-toc-item label="UTocItem API" value="utocitemapi">
        <u-toc-item label="Props/Attrs" value="propsattrs1"></u-toc-item>
        <u-toc-item label="Slots" value="slots1"></u-toc-item>
        <u-toc-item label="Events" value="events1"></u-toc-item>
    </u-toc-item>
</u-toc>
</template>
<script>
export default {
    data() {
        return {
            value: 'utocitemapi',
        };
    },
};
</script>
```

``` html
<u-anchor label="锚点1">
</u-anchor>

```
