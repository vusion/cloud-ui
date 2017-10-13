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

### 方向

``` html
<u-linear-layout direction="vertical">
    <u-pagination></u-pagination>
    <u-pagination></u-pagination>
    <u-pagination></u-pagination>
</u-linear-layout>
```

### 间隙

``` html
<u-linear-layout gap="small">
    <u-button>Button</u-button>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| direction | String | `'horizontal'` | 排列方向，'horizontal'或'vertical' |
| alignment | String | `'left'` | 'left', 'center'或'right' |
| gap | String | `'normal'` | 间隙大小。'small', 'normal'或'large' |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |
