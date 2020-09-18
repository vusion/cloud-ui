### 基本用法

将需要弹出的内容用`<u-tooltip>`包裹起来，并插入到触发事件的元素中。

也可以直接使用指令的方式。

``` html
<u-linear-layout>
    <u-button>
        直接插入
        <u-tooltip>直接插入<u-link>文本</u-link>或<u-link>HTML</u-link></u-tooltip>
    </u-button>
    <u-button v-tooltip="'指令中只能插入文本'">指令</u-button>
</u-linear-layout>
```

### 触发方式-click

使用`trigger`属性设置触发方式。

``` html
<u-button>
    click
    <u-tooltip trigger="click">Tooltip</u-tooltip>
</u-button>
<u-linear-layout>
    <u-button>
        hover（默认）
        <u-tooltip trigger="hover">Tooltip</u-tooltip>
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

### 触发方式-click

使用`trigger`属性设置触发方式。

``` html
<u-button>
    click
    <u-tooltip trigger="click">Tooltip</u-tooltip>
</u-button>

```

### 触发方式-right-click

使用`trigger`属性设置触发方式。

``` html
<u-button>
    right-click
    <u-tooltip trigger="right-click">Tooltip</u-tooltip>
</u-button>
```

### 触发方式-double-click

使用`trigger`属性设置触发方式。

``` html
<u-button>
    double-click
    <u-tooltip trigger="double-click">Tooltip</u-tooltip>
</u-button>
```

#### 手动触发

也可以手动触发工具提示的弹出/关闭：

``` html
<u-button @click="$refs.tooltip.currentOpened=!$refs.tooltip.currentOpened">
    <u-tooltip trigger="manual" ref="tooltip">Tooltip</u-tooltip>
    手动
</u-button>
```

### 弹出方位

使用`placement`属性控制弹出方位。

``` html
<u-button>
    上左
<u-tooltip placement="top-start">Tooltip</u-tooltip>
</u-button>
```

#### 跟随鼠标

开启`follow-cursor`属性可以让弹出层跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-button>
    上左
    <u-tooltip placement="top-start" follow-cursor>Tooltip</u-tooltip>
</u-button>
```

#### 显隐延时

使用`hover-delay`属性和`hide-delay`属性控制显隐的延时。

``` html
<u-button>Hover Delay
        <u-tooltip trigger="hover" :hide-delay="300">Tooltip</u-tooltip>
</u-button>
```

### 禁用状态

给工具提示添加`disabled`属性可以禁止弹出效果，但需要手动设置外层元素的状态。

``` html
<u-button disabled>
    disabled
    <u-tooltip content="Tooltip" disabled>disabled</u-tooltip>
</u-button>
```
