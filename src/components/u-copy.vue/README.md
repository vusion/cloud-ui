<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCopy 复制

提供复制文本到浏览器剪切板功能

## 示例
### 基本用法


``` html
<div style="height:100px">
    <u-copy value="需要copy的内容"></u-copy>
</div>
```

### 自定义复制触发

``` html
<div style="height:100px">
    <u-copy value="需要copy的内容">
        <u-button>复制</u-button>
    </u-copy>
</div>
```

### 自定义提示内容

``` html
<div style="height:100px">
    <u-copy value="需要copy的内容" successText="当前项已复制成功">
        <u-button>复制</u-button>
    </u-copy>
</div>
```
### 复制提示类型

无提示
``` html
<div style="height:100px">
    <u-copy value="需要copy的内容" modal-type="none">
        <u-link>复制</u-link>
    </u-copy>
</div>
```
toast弹窗
``` html
<div style="height:100px">
    <u-copy value="需要copy的内容" modal-type="toast">
        <u-link>复制</u-link>
    </u-copy>
</div>
```

### 复制提示位置（仅modal-type为popper时生效）

``` html
<u-linear-layout style="height:100px">
    <u-copy value="需要copy的内容" placement="right">
        <u-button>提示靠右</u-button>
    </u-copy>
    <u-copy value="需要copy的内容" placement="left">
        <u-button>提示靠左</u-button>
    </u-copy>
    <u-copy value="需要copy的内容" placement="top">
        <u-button>提示靠上</u-button>
    </u-copy>
</u-linear-layout>
```


### 复制提示显示时间（仅modal-type为popper时生效）

``` html
<u-linear-layout style="height:100px">
    <u-copy value="需要copy的内容" :hideDelay="500">
        <u-button>延时500毫秒</u-button>
    </u-copy>
    <u-copy value="需要copy的内容" :hideDelay="2000">
        <u-button>延时2秒</u-button>
    </u-copy>
    <u-copy value="需要copy的内容" :hideDelay="4000">
        <u-button>延时4秒</u-button>
    </u-copy>
</u-linear-layout>
```

### 禁止复制

禁止复制仅针对功能，如果是自定义的触发元素需要自己添加禁止状态
``` html
<u-linear-layout style="height:100px">
    <u-copy value="需要copy的内容" :disabled="true" :hideDelay="500">
        <u-button :disabled="true">复制</u-button>
    </u-copy>
    <u-copy value="需要copy的内容" :disabled="true" :hideDelay="2000">
    </u-copy>
     <u-copy value="需要copy的内容" :disabled="true" :hideDelay="2000">
        <u-link :disabled="true">复制</u-link>
    </u-copy>
</u-linear-layout>
```


## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | string |  |  | 需要复制的值 |
| placement | string |  | `'bottom'` | popper提示框位置，`'top'` `'right'` `'left'` |
| success-text | string |  | `'已复制'` | 复制成功提示文本 |
| disabled | boolean |  | `false` | 是否禁止复制 |
| hide-delay | number |  | `3000` | popper提示框影藏消失时间 |
| modal-type | string |  | `'popper'` | 复制提示弹窗类型`'popper'` `'toast'` `'none'` |

### Slots

#### (default)

插入  HTML或 `Component`, 可展示额外内容。

### Events

#### @copy

内容复制成功后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | string | 复制的内容 |
