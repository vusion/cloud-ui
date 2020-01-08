### 基本用法

将需要弹出的内容用`<m-popper>`包裹起来，并插入到触发事件的元素中。

``` html
<u-button>
    click
    <m-popper>
        <u-block>popper</u-block>
    </m-popper>
</u-button>
```

### 触发方式

#### 自动触发

``` html
<u-linear-layout>
    <u-button>
        click（默认）
        <m-popper trigger="click">
            <u-block>popper</u-block>
        </m-popper>
    </u-button>
    <u-button>
        hover
        <m-popper trigger="hover">
            <u-block>popper</u-block>
        </m-popper>
    </u-button>
    <u-button>
        right-click
        <m-popper trigger="right-click">
            <u-block>popper</u-block>
        </m-popper>
    </u-button>
    <u-button>
        double-click
        <m-popper trigger="double-click">
            <u-block>popper</u-block>
        </m-popper>
    </u-button>
</u-linear-layout>
```

#### 手动触发

也可以手动触发弹出层的弹出/关闭：

``` vue
<template>
<u-button @click="opened = !opened">
    {{ opened ? '隐藏' : '弹出' }}
    <m-popper trigger="manual" :opened.sync="opened">
        <u-block>popper</u-block>
    </m-popper>
</u-button>
</template>

<script>
export default {
    data() {
        return {
            opened: false,
        };
    },
};
</script>
```

#### Hover 的显隐时间

``` html
<u-button>
    hover
    <m-popper trigger="hover" :hover-delay="200" :hide-delay="1000">
        <u-block>popper</u-block>
    </m-popper>
</u-button>
```

### 弹出方位

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            top-start
            <m-popper placement="top-start">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            top
            <m-popper placement="top">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            top-end
            <m-popper placement="top-end">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            left-start
            <m-popper placement="left-start">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            left
            <m-popper placement="left">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            left-end
            <m-popper placement="left-end">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            right-start
            <m-popper placement="right-start">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            right
            <m-popper placement="right">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            right-end
            <m-popper placement="right-end">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            bottom-start
            <m-popper placement="bottom-start">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            bottom
            <m-popper placement="bottom">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            bottom-end
            <m-popper placement="bottom-end">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### 跟随鼠标

将`'follow-cursor'`属性设置为`true`可以跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            top-start
            <m-popper trigger="hover" placement="top-start" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            top
            <m-popper trigger="hover" placement="top" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            top-end
            <m-popper trigger="hover" placement="top-end" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            left-start
            <m-popper trigger="hover" placement="left-start" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            left
            <m-popper trigger="hover" placement="left" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            left-end
            <m-popper trigger="hover" placement="left-end" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            right-start
            <m-popper trigger="hover" placement="right-start" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            right
            <m-popper trigger="hover" placement="right" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            right-end
            <m-popper trigger="hover" placement="right-end" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            bottom-start
            <m-popper trigger="hover" placement="bottom-start" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            bottom
            <m-popper trigger="hover" placement="bottom" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            bottom-end
            <m-popper trigger="hover" placement="bottom-end" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            custom
            <m-popper trigger="hover" placement="bottom-start" :follow-cursor="50">
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### 禁用

``` html
<u-button disabled>
    disabled
    <m-popper disabled>
        <u-block>popper</u-block>
    </m-popper>
</u-button>
```
