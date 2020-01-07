### Basic

``` html
<u-checkbox>Checkbox</u-checkbox>
```

### v-model

``` vue
<template>
<u-checkbox v-model="value">{{ value }}</u-checkbox>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
    },
};
</script>
```

### Disabled

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly>Readonly</u-checkbox>
    <u-checkbox :value="true" disabled>Disabled</u-checkbox>
</u-linear-layout>
```

### Indeterminate

``` html
<u-checkbox :value="null">Indeterminate</u-checkbox>
```
