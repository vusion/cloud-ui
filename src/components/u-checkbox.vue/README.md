<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCheckbox 多选框

## 示例
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | boolean, null |  | `false` | Checked status. `null` means indeterminate status. |
| readonly | boolean |  | `false` | Readonly |
| disabled | boolean |  | `false` | Disabled |

### Events

#### @input

Emit when checking.

| Param | Type | Description |
| ----- | ---- | ----------- |
| undefined | boolean, null | Checked value |

#### @change

Emit when change value.

| Param | Type | Description |
| ----- | ---- | ----------- |
| undefined | boolean, null | New value |
| undefined | boolean, null | Old value |
