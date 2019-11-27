<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UKeyValue 键值对

最基本的键值对显示

## 示例
### 基本用法

最基本的键值对显示
``` html
<u-key-value label="类型" value="发布"></u-key-value>
```

### 自定义值

自定义内容
``` html
<u-key-value label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
    </div>
</u-key-value>
```
### 自定义label

自定义标题
``` html
<u-key-value label="构建状态">
    <div style="position: relative;" slot="label">
        构建状态<u-badge style="position: absolute;right: -14px;top: -8px;" value="1"></u-badge>
    </div>
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
    </div>
</u-key-value>
```
### 垂直对齐方式
label垂直对齐方式，默认按照 baseline，提供top，middle与bottom三种设置方式
``` html
<u-key-value label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
       <p>当前构建成功，存在12个warning等待处理</p>
    </div>
</u-key-value>
```
顶部对齐
``` html
<u-key-value vertical="top" label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
       <p>当前构建成功，存在12个warning等待处理</p>
    </div>
</u-key-value>
```
居中对齐
``` html
<u-key-value vertical="middle" label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
       <p>当前构建成功，存在12个warning等待处理</p>
    </div>
</u-key-value>
```
底部对齐
``` html
<u-key-value vertical="bottom" label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
       <p>当前构建成功，存在12个warning等待处理</p>
    </div>
</u-key-value>
```

### label尺寸设置
左侧label的宽度默认自适应，但考虑到定宽需求也提供设置label宽度
``` html
<u-key-value label-size="200" label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
    </div>
</u-key-value>
```

### label水平对齐方式
默认右对齐
``` html
<u-key-value label-size="200" label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
    </div>
</u-key-value>
```
左对齐（label-align仅在设置label-size后生效）
``` html
<u-key-value label-align="right" label-size="200" label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
    </div>
</u-key-value>
```
居中对齐（label-align仅在设置label-size后生效）
``` html
<u-key-value label-align="center" label-size="200" label="构建状态">
    <div>
       <u-status-icon name="success">构建成功</u-status-icon>
    </div>
</u-key-value>
```


## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| vertical | string |  | `'baseline'` | label与value对齐方式`'top'`,`'middle'`,`'bottom'` |
| label | string |  |  | label显示值 |
| value | string |  |  | value显示值 |
| labelSize | number |  |  | 设置label宽度，不填label为自适应 |
| labelAlignment | string |  | `'right'` | label文字水平对齐方式`'left'`,`'center'`,注意此值仅在设置labelSize后生效 |

### Slots

#### (default)

插入自定义value，一般用于非纯文本的内容展示

#### label

插入自定义label，一般用于label的特殊化处理
