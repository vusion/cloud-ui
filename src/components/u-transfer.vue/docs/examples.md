### 基本用法

``` vue
<template>
<u-transfer :source="source" :target="target">
</u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: '水杯', value: 'cup' },
                { text: '坚果', value: 'nut' },
                { text: '毛巾', value: 'towel' },
                { text: '沙发', value: 'sofa' },
                { text: '牙刷', value: 'toothbrush' },
                { text: '碗', value: 'bowl' },
            ],
            target: [],
        };
    },
};
</script>
```

### 禁用某一项

``` vue
<template>
<u-transfer :source="source" :target="target">
</u-transfer>
</template>
<script>
export default {
    data() {
        return {
            source: [
                { text: '水杯', value: 'cup' },
                { text: '坚果', value: 'nut' },
                { text: '毛巾', value: 'towel' },
                { text: '沙发', value: 'sofa', disabled: true },
                { text: '牙刷', value: 'toothbrush', disabled: true },
                { text: '碗', value: 'bowl' },
            ],
            target: [],
        };
    },
};
</script>
```
