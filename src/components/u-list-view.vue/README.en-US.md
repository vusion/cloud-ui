# ListView

## Examples
### Basic

It is recommended to use tag pattern, which is more flexible than data pattern.

#### Tag Pattern

``` html
<u-list-view>
    <u-list-view-item>Apple</u-list-view-item>
    <u-list-view-item>Banana</u-list-view-item>
    <u-list-view-item>Cake</u-list-view-item>
</u-list-view>
```

#### Data Pattern

``` html
<u-list-view :data="[
    { text: 'Apple' },
    { text: 'Banana' },
    { text: 'Cake' },
]"></u-list-view>
```

### Value

#### Tag Pattern

``` html
<u-list-view value="C">
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
```

#### Data Pattern

``` html
<u-list-view value="C" :data="[
    { text: 'Apple', value: 'A' },
    { text: 'Banana', value: 'B' },
    { text: 'Cake', value: 'C' },
]"></u-list-view>
```

### Readonly & Disabled

#### Tag Pattern

``` html
<u-list-view value="C" readonly>
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
<u-list-view value="C" disabled>
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
<u-list-view value="C">
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B" disabled>Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
```

#### Data Pattern

``` html
<u-list-view value="C" :data="[
    { text: 'Apple', value: 'A' },
    { text: 'Banana', value: 'B', disabled: true },
    { text: 'Cake', value: 'C' },
]"></u-list-view>
```

### Cancelable

Try to click twice on an item.

``` html
<u-list-view value="C" cancelable>
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
```

### Multiple

``` vue
<template>
<div>
    <u-list-view multiple v-model="value">
        <u-list-view-item value="A">Apple</u-list-view-item>
        <u-list-view-item value="B">Banana</u-list-view-item>
        <u-list-view-item value="C">Cake</u-list-view-item>
    </u-list-view>
    <p>value: {{ value }}<p>
</div>
</template>

<script>
export default {
    data() {
        return { value: ['B', 'C'] };
    },
};
</script>
```

## ListView API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array<{ text, value }> | | Pass a data list and no need to loop tags manually |
| value.sync, v-model | Any | | Value of selected item |
| field | String | `'text'` | Indicate which field to show text |
| cancelable | Boolean | `false` | Select twice to cancel |
| multiple | Boolean | `false` | Multiple select |
| readonly | Boolean | `false` | Readonly |
| disabled | Boolean | `false` | Disabled |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @select

Emit when selecting an item.

| Property | Type | Description |
| -------- | ---- | ----------- |
| value | Any | Value of selected item |
| item | Object | The selected object. Only useful in data pattern |
| $item | ListViewItem | Selected item |

#### @input

Emit when selecting

| Property | Type | Description |
| -------- | ---- | ----------- |
| value | Any | Value of selected item |

## ListViewItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | Value of this item |
| disabled | Boolean | `false` | Disabled |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @select

Emit when selecting an item.

| Property | Type | Description |
| -------- | ---- | ----------- |
| value | Any | Value of this item |
| item | Object | Only useful in data pattern |
| $item | ListViewItem | This item |

