# 标签页（Tabs）

## 示例
### 基本形式

``` html
<u-tabs>
    <u-tab title="详细信息">Content1</u-tab>
    <u-tab title="性能监控">Content2</u-tab>
    <u-tab title="操作日志">Content3</u-tab>
</u-tabs>
```

### 初始值

``` html
<u-tabs :selected-index="2">
    <u-tab title="详细信息">Content1</u-tab>
    <u-tab title="性能监控">Content2</u-tab>
    <u-tab title="操作日志">Content3</u-tab>
</u-tabs>
```

### 禁用

``` html
<u-tabs>
    <u-tab title="详细信息">部分禁用</u-tab>
    <u-tab title="性能监控" disabled>部分禁用</u-tab>
    <u-tab title="操作日志">部分禁用</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="详细信息">全部禁用</u-tab>
    <u-tab title="性能监控">全部禁用</u-tab>
    <u-tab title="操作日志">全部禁用</u-tab>
</u-tabs>
```
