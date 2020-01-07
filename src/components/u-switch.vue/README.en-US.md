# Switch

## Examples
### Basic

``` html
<u-switch></u-switch>
```

### v-model & Text

``` vue
<template>
<u-switch v-model="value" width="wide">{{ value ? 'ON' : 'OFF' }}</u-switch>
</template>
<script>
export default {
    data() {
        return { value: false };
    },
};
</script>
```

### Readonly & Disabled

``` html
<u-linear-layout>
    <u-switch readonly></u-switch>
    <u-switch disabled></u-switch>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Boolean | `false` | Switch status. |
| readonly | Boolean | `false` | Readonly |
| disabled | Boolean | `false` | Disabled |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @input

Emit when checking.

| Property | Type | Description |
| -------- | ---- | ----------- |
| value | Boolean | Checked value |

#### @change

Emit when change value.

| Property | Type | Description |
| -------- | ---- | ----------- |
| newValue | Boolean | New value |
| oldValue | Boolean | Old value |
