### 基本用法

``` html
<u-linear-layout direction="vertical">
    <u-region-select></u-region-select>
    <u-region-select value="浙江,杭州,滨江区"></u-region-select>
</u-linear-layout>
```

### Placeholder

``` html
<u-region-select :categories="[
    { label: '省', placeholder: '请选择省份' },
    { label: '市', placeholder: '请选择城市' },
    { label: '区', placeholder: '请选择县区' },
]"></u-region-select>
```

### 隐藏空列表

``` html
<u-region-select hide-empty :categories="[
    { label: '省', placeholder: '请选择省份' },
    { label: '市', placeholder: '请选择城市' },
    { label: '区', placeholder: '请选择县区' },
]"></u-region-select>
```
