### 基本用法

``` html
<u-linear-layout>
    <u-button>
        直接插入
        <u-tooltip>直接插入<u-link>文本</u-link>或<u-link>HTML</u-link></u-tooltip>
    </u-button>
    <u-button v-tooltip="'指令中只能插入文本'">指令</u-button>
</u-linear-layout>
```

### 触发方式

``` html
<u-linear-layout>
    <u-button>
        hover（默认）
        <u-tooltip trigger="hover">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        click
        <u-tooltip trigger="click">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        right-click
        <u-tooltip trigger="right-click">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        double-click
        <u-tooltip trigger="double-click">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

#### 指令形式

``` html
<u-linear-layout>
    <u-button v-tooltip="'Tooltip'">hover（默认）</u-button>
    <u-button v-tooltip.click="'Tooltip'">click</u-button>
    <u-button v-tooltip.right-click="'Tooltip'">right-click</u-button>
    <u-button v-tooltip.double-click="'Tooltip'">double-click</u-button>
</u-linear-layout>
```

#### 手动触发

也可以手动触发工具提示的弹出/关闭：

``` vue
<template>
<u-button @click="opened = !opened">
    {{ opened ? '隐藏' : '弹出' }}
    <u-tooltip trigger="manual" :opened.sync="opened">Tooltip</u-tooltip>
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

### 弹出位置

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout style="text-align: center; margin-bottom: 10px;">
        <u-button style="margin: 6px">
            top-start
            <u-tooltip placement="top-start">Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            top
            <u-tooltip placement="top">Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            top-end
            <u-tooltip placement="top-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout style="float: left; width: 200px; text-align: right; margin-bottom: 10px;">
        <u-button style="margin: 6px">
            left-start
            <u-tooltip placement="left-start">Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            left
            <u-tooltip placement="left">Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            left-end
            <u-tooltip placement="left-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout style="float: right; width: 200px; margin-bottom: 10px;">
        <u-button style="margin: 6px">
            right-start
            <u-tooltip placement="right-start">Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            right
            <u-tooltip placement="right">Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            right-end
            <u-tooltip placement="right-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout style="clear: both; text-align: center">
        <u-button style="margin: 6px">
            bottom-start
            <u-tooltip placement="bottom-start">Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            bottom
            <u-tooltip placement="bottom">Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            bottom-end
            <u-tooltip placement="bottom-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 指令形式

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout style="text-align: center; margin-bottom: 10px;">
        <u-button style="margin: 6px" v-tooltip.top-start="'Tooltip'">top-start</u-button>
        <u-button style="margin: 6px" v-tooltip.top="'Tooltip'">top</u-button>
        <u-button style="margin: 6px" v-tooltip.top-end="'Tooltip'">top-end</u-button>
    </u-linear-layout>
    <u-linear-layout style="float: left; width: 200px; text-align: right; margin-bottom: 10px;">
        <u-button style="margin: 6px" v-tooltip.left-start="'Tooltip'">left-start</u-button>
        <u-button style="margin: 6px" v-tooltip.left="'Tooltip'">left</u-button>
        <u-button style="margin: 6px" v-tooltip.left-end="'Tooltip'">left-end</u-button>
    </u-linear-layout>
    <u-linear-layout style="float: right; width: 200px; margin-bottom: 10px;">
        <u-button style="margin: 6px" v-tooltip.right-start="'Tooltip'">right-start</u-button>
        <u-button style="margin: 6px" v-tooltip.right="'Tooltip'">right</u-button>
        <u-button style="margin: 6px" v-tooltip.right-end="'Tooltip'">right-end</u-button>
    </u-linear-layout>
    <u-linear-layout style="clear: both; text-align: center">
        <u-button style="margin: 6px" v-tooltip.bottom-start="'Tooltip'">bottom-start</u-button>
        <u-button style="margin: 6px" v-tooltip.bottom="'Tooltip'">bottom</u-button>
        <u-button style="margin: 6px" v-tooltip.bottom-end="'Tooltip'">bottom-end</u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 跟随鼠标

将`'follow-cursor'`属性设置为`true`可以跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout style="text-align: center; margin-bottom: 10px;">
        <u-button style="margin: 6px">
            top-start
            <u-tooltip placement="top-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            top
            <u-tooltip placement="top" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            top-end
            <u-tooltip placement="top-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout style="float: left; width: 200px; text-align: right; margin-bottom: 10px;">
        <u-button style="margin: 6px">
            left-start
            <u-tooltip placement="left-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            left
            <u-tooltip placement="left" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            left-end
            <u-tooltip placement="left-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout style="float: right; width: 200px; margin-bottom: 10px;">
        <u-button style="margin: 6px">
            right-start
            <u-tooltip placement="right-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            right
            <u-tooltip placement="right" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            right-end
            <u-tooltip placement="right-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout style="clear: both; text-align: center">
        <u-button style="margin: 6px">
            bottom-start
            <u-tooltip placement="bottom-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            bottom
            <u-tooltip placement="bottom" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button style="margin: 6px">
            bottom-end
            <u-tooltip placement="bottom-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Hover 时延迟消失

``` html
<u-linear-layout>
    <u-button>Hover Delay
        <u-tooltip trigger="hover" :hide-delay="300">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

### 禁用

``` html
<u-button disabled>
    disabled
    <u-tooltip content="Tooltip" disabled>disabled</u-tooltip>
</u-button>
```

### 大小扩展

``` vue
<template>
<u-linear-layout>
        <u-button>small
            <u-tooltip size="small">{{ content }}</u-tooltip>
        </u-button>
        <u-button>normal
            <u-tooltip>{{ content }}</u-tooltip>
        </u-button>
        <u-button>large
            <u-tooltip size="large">{{ content }}</u-tooltip>
        </u-button>
        <u-button>auto
            <u-tooltip size="auto">{{ content }}</u-tooltip>
        </u-button>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            content: '深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。其间有一个十一二岁的少年，项带银圈，手捏一柄钢叉，向一匹猹尽力地刺去。那猹却将身一扭，反从他的胯下逃走了。',
        };
    },
};
</script>
```

#### 指令形式

``` vue
<template>
<u-linear-layout>
    <u-button v-tooltip.small="content">small</u-button>
    <u-button v-tooltip="content">normal</u-button>
    <u-button v-tooltip.large="content">large</u-button>
    <u-button v-tooltip.auto="content">auto</u-button>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            content: '深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。其间有一个十一二岁的少年，项带银圈，手捏一柄钢叉，向一匹猹尽力地刺去。那猹却将身一扭，反从他的胯下逃走了。',
        };
    },
};
</script>
```
