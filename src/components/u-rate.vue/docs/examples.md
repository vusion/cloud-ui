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
<u-rate v-model="rating" :allow-half="true"></u-rate>
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
<u-rate v-model="rating" :allow-clear="true"></u-rate>
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
<u-rate :value="rating" readonly></u-rate>
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
