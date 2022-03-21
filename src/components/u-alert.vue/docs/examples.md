### 基础样式

``` html
<div>
    <u-alert type="info" title="信息提示"></u-alert>
    <u-alert type="success" title="成功提示"></u-alert>
    <u-alert type="warning" title="警告提示"></u-alert>
    <u-alert type="error" title="错误提示"></u-alert>
</div>
```

### 可手动关闭

``` html
<div>
    <u-alert type="info" title="信息提示" closeable></u-alert>
    <u-alert type="success" title="成功提示" closeable></u-alert>
    <u-alert type="warning" title="警告提示" closeable></u-alert>
    <u-alert type="error" title="错误提示" closeable></u-alert>
</div>
```

### 含辅助性文字的通告形式

``` html
<div>
    <u-alert type="info" title="信息提示" desc="描述信息"></u-alert>
    <u-alert type="success" title="成功提示" desc="描述信息"></u-alert>
    <u-alert type="warning" title="警告提示" desc="描述信息"></u-alert>
    <u-alert type="error" title="错误提示" desc="描述信息"></u-alert>
</div>
```

### 页面顶部通告形式

``` html
<div>
    <u-alert :bordered="false" type="info" title="信息提示" :show-icon="false"></u-alert>
    <u-alert :bordered="false" type="success" title="成功提示"></u-alert>
    <u-alert :bordered="false" type="warning" title="警告提示" horizontal="center"></u-alert>
    <u-alert :bordered="false" type="error" closeable><template #title>标题提示slot</template>描述信息slot</u-alert>
</div>
```
