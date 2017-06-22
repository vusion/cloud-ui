# 开关（Switch）

## 示例
### 基本形式

### 方法
``` vue
<template>
<div>
    <u-switch v-model="value" :on-text="onText" :off-text="offText" :on-color="onColor" :off-color="offColor"></u-switch>
</div>
</template>

<script>
export default {
    data() {
        return {
            value: 123,
            onText: 'ON',
            offText: 'OFF',
            onColor: '#13ce66',
            offColor: '#ff4949',
        };
    },
    methods: {
    },
    watch: {
        value(newValue) {
            console.log(this.value);
        }
    }
};
</script>
```
