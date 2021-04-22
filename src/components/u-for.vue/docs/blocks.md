### 基础示例

``` html
<u-for :data="[1,2,3]">
    <template slot-scope="scope">
        <u-text display="block" :text="`序号:${scope.index}, 值 ${scope.item}`"> </u-text>
    </template>
</u-for>
```
