### 基本用法

``` html
<div style="height:100px">
    <u-copy value="需要 copy 的内容"></u-copy>
</div>
```

### 自定义触发元素

``` html
<div style="height:100px">
    <u-copy value="需要 copy 的内容">
        <u-button>复制</u-button>
    </u-copy>
</div>
```

### 自定义提示内容

``` html
<div style="height:100px">
    <u-copy value="需要 copy 的内容" successText="当前项已复制成功">
        <u-button>复制</u-button>
    </u-copy>
</div>
```

### 提示类型

无提示

``` html
<div style="height:100px">
    <u-copy value="需要 copy 的内容" modal-type="none">
        <u-link>复制</u-link>
    </u-copy>
</div>
```

toast 弹窗

``` html
<div style="height:100px">
    <u-copy value="需要 copy 的内容" modal-type="toast">
        <u-link>复制</u-link>
    </u-copy>
</div>
```

### 提示位置（仅 modal-type 为 popper 时生效）

``` html
<u-linear-layout direction="vertical" style="min-width: 300px; max-width: 550px;">
    <u-linear-layout justify="center" gap="small">
        <u-copy value="需要 copy 的内容" placement="top-start">
            <u-button>上左</u-button>
        </u-copy>
        <u-copy value="需要 copy 的内容" placement="top">
            <u-button>上边</u-button>
        </u-copy>
        <u-copy value="需要 copy 的内容" placement="top-end">
            <u-button>上右</u-button>
        </u-copy>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: left">
        <u-copy value="需要 copy 的内容" placement="left-start">
            <u-button>左上</u-button>
        </u-copy>
        <u-copy value="需要 copy 的内容" placement="left">
            <u-button>左边</u-button>
        </u-copy>
        <u-copy value="需要 copy 的内容" placement="left-end">
            <u-button>左下</u-button>
        </u-copy>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: right">
        <u-copy value="需要 copy 的内容" placement="right-start">
            <u-button>右上</u-button>
        </u-copy>
        <u-copy value="需要 copy 的内容" placement="right">
            <u-button>右边</u-button>
        </u-copy>
        <u-copy value="需要 copy 的内容" placement="right-end">
            <u-button>右下</u-button>
        </u-copy>
    </u-linear-layout>
    <u-linear-layout justify="center" gap="small" style="clear: both">
        <u-copy value="需要 copy 的内容" placement="bottom-start">
            <u-button>下左</u-button>
        </u-copy>
        <u-copy value="需要 copy 的内容" placement="bottom">
            <u-button>下边</u-button>
        </u-copy>
        <u-copy value="需要 copy 的内容" placement="bottom-end">
            <u-button>下右</u-button>
        </u-copy>
    </u-linear-layout>
</u-linear-layout>
```

### 提示显示时长

popper 弹框

``` html
<u-linear-layout style="height:100px">
    <u-copy value="需要 copy 的内容" :hideDelay="500">
        <u-button>500毫秒</u-button>
    </u-copy>
    <u-copy value="需要 copy 的内容" :hideDelay="2000">
        <u-button>2秒</u-button>
    </u-copy>
    <u-copy value="需要 copy 的内容" :hideDelay="4000">
        <u-button>4秒</u-button>
    </u-copy>
</u-linear-layout>
```

toast 弹窗

```html
<u-linear-layout style="height:100px">
    <u-copy value="需要 copy 的内容" :hideDelay="500" modal-type="toast">
        <u-button>500毫秒</u-button>
    </u-copy>
    <u-copy value="需要 copy 的内容" :hideDelay="2000" modal-type="toast">
        <u-button>2秒</u-button>
    </u-copy>
    <u-copy value="需要 copy 的内容" :hideDelay="4000" modal-type="toast">
        <u-button>4秒</u-button>
    </u-copy>
</u-linear-layout>
```

### 禁止复制

禁止复制仅针对功能，如果是自定义的触发元素需要自己添加禁止状态

``` html
<u-linear-layout style="height:100px">
    <u-copy value="需要 copy 的内容" :disabled="true" :hideDelay="500">
        <u-button :disabled="true">复制</u-button>
    </u-copy>
    <u-copy value="需要 copy 的内容" :disabled="true" :hideDelay="2000">
    </u-copy>
     <u-copy value="需要 copy 的内容" :disabled="true" :hideDelay="2000">
        <u-link :disabled="true">复制</u-link>
    </u-copy>
</u-linear-layout>
```

### 指令形式


``` html
<u-linear-layout style="height:100px">
    <u-button v-copy="'需要 copy 的内容'">复制</u-button>
    <u-button v-copy.top="'需要 copy 的内容'">复制</u-button>
    <u-button v-copy.toast="'需要 copy 的内容'">复制</u-button>
    <u-button v-copy.toast.500="'需要 copy 的内容'">复制</u-button>
    <u-button v-copy="'需要 copy 的内容'" :disabled="true">复制</u-button>
</u-linear-layout>
```
