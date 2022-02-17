### 基本用法

向`data-source`属性中传入`Array<Item>`格式的数组，每个`Item`为这样格式的对象`{ text: string, value: any, disabled: boolean, ... }`。

``` html
<u-transfer show-head source-title="左列表" target-title="右列表"
:source="[{ text: 'SQL', value: 'sql' },{ text: 'JSON', value: 'json' },]" :target="[{ text: 'CSS', value: 'css' },{ text: 'HTML', value: 'html' },{ text: 'JavaScript', value: 'javascript' },{ text: 'Vue', value: 'vue' },]"></u-transfer>
```
