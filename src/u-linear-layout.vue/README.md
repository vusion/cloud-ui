# 线性布局（LinearLayout）

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
</u-linear-layout>
```

### 排列方向

``` html
<u-linear-layout direction="vertical">
    <u-linear-progress :percent="25"></u-linear-progress>
    <u-linear-progress :percent="50"></u-linear-progress>
    <u-linear-progress :percent="75"></u-linear-progress>
</u-linear-layout>
```

### 间隙

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout gap="none">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout gap="normal">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout gap="large">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

### 水平分布方式

普通的分布方式是用`inline-block`与`text-align`两个特性实现的，只支持水平方向。

如果想使用更灵活的分布方式，请使用下面的Flex模式，并确保您的浏览器支持该功能。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout justify="start">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout justify="center">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout justify="end">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Flex模式
#### 主轴分布方式

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout type="flex" justify="start">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="center">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="end">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="space-between">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="space-around">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 交叉轴对齐方式

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout type="flex" alignment="start">
        <u-block>Button</u-block>
        <u-block size="large">Button</u-block>
        <u-block size="huge">Button</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="center">
        <u-block>Button</u-block>
        <u-block size="large">Button</u-block>
        <u-block size="huge">Button</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="end">
        <u-block>Button</u-block>
        <u-block size="large">Button</u-block>
        <u-block size="huge">Button</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="baseline">
        <u-block>Button</u-block>
        <u-block size="large">Button</u-block>
        <u-block size="huge">Button</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="stretch">
        <u-block>Button</u-block>
        <u-block size="large">Button</u-block>
        <u-block size="huge">Button</u-block>
    </u-linear-layout>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| direction | String | `'horizontal'` | 排列方向，'horizontal'或'vertical' |
| gap | String | `'normal'` | 间隙大小。可选值：'none', 'small', 'normal'或'large' |
| type | String | | 布局模式，可选值：'flex' |
| justify | String | `'start'` | 普通模式下可选值：'start', 'center', 'end'。flex布局模式下还支持：'space-between', 'space-around' |
| alignment | String | `'stretch'` | flex布局模式的交叉轴对齐方式，可选值：'start', 'center', 'end', 'baseline', 'stretch' |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |
