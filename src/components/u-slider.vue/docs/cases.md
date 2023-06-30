### 多滑块最大值和最小值

``` vue
<template>
    <u-slider multiple v-model="value" :min="10" :max="50"></u-slider>
</template>
<script>
export default {
    data() {
        return {
            value: [20, 35],
        };
    },
};
</script>
```

### 多滑块范围 & 步长

``` vue
<template>
    <u-grid-layout>
        <u-grid-layout-column :span="6">
            <u-slider multiple v-model="value1" :range="[20, 85]"></u-slider>
        </u-grid-layout-column>
        <u-grid-layout-column :span="6">
            <u-slider multiple v-model="value2" :step="10" :range="[30]"></u-slider>
        </u-grid-layout-column>
    </u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            value1: [30, 60],
            value2: [40, 70],
        };
    },
};
</script>
```


