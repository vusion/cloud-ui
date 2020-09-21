### 基本用法

将需要弹出的内容用`<u-popup>`包裹起来，并插入到触发事件的元素中。

``` html
 <u-button>
    使用 slot
    <u-popup>
        <template #title>
            <span>标题 <u-badge :value="3"></u-badge></span>
        </template>
        <span>使用 <u-link>slot</u-link> 可以添加一些复杂功能</span>
    </u-popup>
</u-button>
```

### 自定义

通过 root 插槽可以自定义整体内容。

``` html
<u-button>
    Textarea
    <u-popup>
        <template #root>
        <u-textarea ></u-textarea>
        </template>
    </u-popup>
</u-button>
```

### 触发方式-hover

使用`trigger`属性设置触发方式。

``` html
<u-button>
    hover
    <u-popup trigger="hover">Popup</u-popup>
</u-button>
```

### 触发方式-right-click

使用`trigger`属性设置触发方式。

``` html
<u-button>
    right-click
    <u-popup trigger="right-click">Popup</u-popup>
</u-button>
```

### 触发方式-double-click

使用`trigger`属性设置触发方式。

``` html
 <u-button>
    double-click
    <u-popup trigger="double-click">Popup</u-popup>
</u-button>
```

#### 手动触发

也可以手动触发弹出框的弹出/关闭：

``` html
<u-button @click="$refs.popup1.currentOpened=!$refs.popup1.currentOpened">
    手动
    <u-popup ref="popup1" trigger="manual" >Popup</u-popup>
</u-button>
```

### 弹出方位

使用`placement`属性控制弹出方位。

``` html
<u-button>
    上左
    <u-popup placement="top-start">Popup</u-popup>
</u-button>
```

#### 跟随鼠标

开启`follow-cursor`属性可以让弹出层跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-button>
    上左
    <u-popup placement="top-start" follow-cursor>Popup</u-popup>
</u-button>

```

### 右键菜单

使用`trigger`和`follow-cursor`两个属性可以很容易的实现右键菜单功能。

``` html
<u-button>
    右键菜单
    <u-popup trigger="right-click" placement="right-start" follow-cursor>
    <template #root>
        <u-menu value="3" :router="false">
            <u-menu-item value="1">指南</u-menu-item>
            <u-menu-item value="2">概念</u-menu-item>
            <u-menu-item value="3">组件</u-menu-item>
        </u-menu>
    </template>
        
    </u-popup>
</u-button>
```

### 禁用状态

给弹出框添加`disabled`属性可以禁止弹出效果，但需要手动设置外层元素的状态。

``` html
<u-button disabled>
    disabled
    <u-popup disabled>Popup</u-popup>
</u-button>
```
