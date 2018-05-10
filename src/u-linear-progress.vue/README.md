# 线型进度条 LinearProgress

## 示例
### 基本形式

``` html
<u-linear-progress :percent="36"></u-linear-progress>
```

### 高度扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-progress :percent="36" size="small">small</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :percent="36" size="normal">normal</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :percent="36" size="large">large</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :percent="36" size="huge">huge</u-linear-progress>
    </u-linear-layout>
</u-linear-layout>
```


## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| percent | Number | `0` | 百分比 |
| size | String | `'normal'` | 高度扩展，值有`'small'`, `'normal'`, `'large'`, `'huge'`四个值 |

### Slots

#### (default)

插入文本或HTML。
