# 工具提示 Tooltip

## 示例
### 基本形式

``` html
<u-tooltip>
    <u-button>hover</u-button>
</u-tooltip>
```

### 弹出方向

``` html
<div>
    <u-tooltip placement="top-start">
        <u-button>top-start</u-button>
    </u-tooltip>
    <u-tooltip placement="top">
        <u-button>top</u-button>
    </u-tooltip>
    <u-tooltip placement="top-end">
        <u-button>top-end</u-button>
    </u-tooltip>
</div>
<div>
    <u-tooltip placement="left-start">
        <u-button>left-start</u-button>
    </u-tooltip>
    <u-tooltip placement="left">
        <u-button>left</u-button>
    </u-tooltip>
    <u-tooltip placement="left-end">
        <u-button>left-end</u-button>
    </u-tooltip>
</div>
<div>
    <u-tooltip placement="right-start">
        <u-button>right-start</u-button>
    </u-tooltip>
    <u-tooltip placement="right">
        <u-button>right</u-button>
    </u-tooltip>
    <u-tooltip placement="right-end">
        <u-button>right-end</u-button>
    </u-tooltip>
</div>
<div>
    <u-tooltip placement="bottom-start">
        <u-button>bottom-start</u-button>
    </u-tooltip>
    <u-tooltip placement="bottom">
        <u-button>bottom</u-button>
    </u-tooltip>
    <u-tooltip placement="bottom-end">
        <u-button>bottom-end</u-button>
    </u-tooltip>
</div>
```

### 指令

使用组件需要多嵌套一层，使用指令可以更简洁。

``` html
<u-button v-tooltip="'这条提示是使用指令生成的'">Directive</u-button>
<u-button v-tooltip.click.top-start="'这条提示是使用指令生成的'">Click</u-button>
```

## Popper API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| placement | String | `'bottom'` | 弹出层的弹出方向：top,bottom,left,right,top-start,top-end... |
| content | String | `'提示内容'` | 提示内容 |
| size | String | `'normal'` | 大小扩展，支持一个值： `'small'`, `'normal'`, `'large'`, `'auto'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |
