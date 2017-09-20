# 子标签页（subtabs）

## 示例
### 基本形式

``` html
<u-subtabs>
    <u-subtab title="未使用">Content1</u-subtab>
    <u-subtab title="使用中">Content2</u-subtab>
    <u-subtab title="已过期">Content3</u-subtab>
</u-subtabs>
```

### 初始值

``` html
<u-subtabs :index="2">
    <u-subtab title="未使用">Content1</u-subtab>
    <u-subtab title="使用中">Content2</u-subtab>
    <u-subtab title="已过期">Content3</u-subtab>
</u-subtabs>
```

### 禁用

``` html
<u-subtabs>
    <u-subtab title="未使用">部分禁用</u-subtab>
    <u-subtab title="使用中" disabled>部分禁用</u-subtab>
    <u-subtab title="已过期">部分禁用</u-subtab>
</u-subtabs>
<u-subtabs disabled>
    <u-subtab title="未使用">全部禁用</u-subtab>
    <u-subtab title="使用中">全部禁用</u-subtab>
    <u-subtab title="已过期">全部禁用</u-subtab>
</u-subtabs>
```
