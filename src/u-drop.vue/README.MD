# 拖放（Drag and Drop）

## 示例
### 基本形式

``` vue
<template>
    <div style="overflow: hidden; ">
        <u-drag :value="value">
            <div style="background: #00a65a;color: #fff;height: 128px;width: 128px;line-height: 128px;">拖我</div>
        </u-drag>
        <u-drop :value.sync="dropValue"><div :class="dropValue" style="background: #3c8dbc;color: #fff;height: 128px;width: 128px;line-height: 128px; margin-top:150px;">放到这里</div></u-drop>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: 'success',
                dropValue: '',
            };
        },
        watch: {
            dropValue(newValue) {
                console.log(newValue);
            },
        },
    };
</script>
<style scoped>
    .success{
        background: #00a65a !important;
    }
</style>
```
