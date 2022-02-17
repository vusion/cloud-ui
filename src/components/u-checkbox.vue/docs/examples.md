### Basic

``` html
<u-checkbox text="Checkbox"></u-checkbox>
```

### v-model

``` vue
<template>
<u-checkbox v-model="value" :text="value"></u-checkbox>
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
    <u-checkbox :value="true" readonly text="Readonly"></u-checkbox>
    <u-checkbox :value="true" disabled text="Disabled"></u-checkbox>
</u-linear-layout>
```

### Indeterminate

``` html
<u-checkbox :value="null" text="Indeterminate"></u-checkbox>
```
