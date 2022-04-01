### 基本用法

``` vue
<template>
<u-rate v-model="rating"></u-rate>
</template>
<script>
export default {
    data() {
        return {
            rating: 3,
        };
    },
};
</script>
```

### 允许半选

``` vue
<template>
<u-rate v-model="rating" allowHalf></u-rate>
</template>
<script>
export default {
    data() {
        return {
            rating: 3,
        };
    },
};
</script>
```

### 允许清除

``` vue
<template>
<u-rate v-model="rating" :clearable="true"></u-rate>
</template>
<script>
export default {
    data() {
        return {
            rating: 3,
        };
    },
};
</script>
```

### 只读

``` vue
<template>
<u-rate v-model="rating" readonly></u-rate>
</template>
<script>
export default {
    data() {
        return {
            rating: 3,
        };
    },
};
</script>
```

### 只读，值为小数

``` vue
<template>
<div>
<u-rate :value="rating" readonly></u-rate>
<u-rate :value="rating" readonly showValue></u-rate>
</div>
</template>
<script>
export default {
    data() {
        return {
            rating: 3.6,
        };
    },
};
</script>
```

### 辅助文字

``` vue
<template>
<u-rate :value="rating" showText showTooltip></u-rate>
</template>
<script>
export default {
    data() {
        return {
            rating: 3,
        };
    },
};
</script>
```
