# Pagination

## Examples
### Basic

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11"></u-pagination>
    <u-pagination :total="11" :page="6"></u-pagination>
</u-linear-layout>
```

### Side & Around

Use `side` and `around` properties to change the count of displayed numbers.

``` html
<u-pagination :total="11" :page="6" :side="1" :around="3"></u-pagination>
```

### Readonly & Disabled

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" readonly></u-pagination>
    <u-pagination :total="11" disabled></u-pagination>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| page | Number | `1` | Current page number |
| total | Number | `11` | Total count of pages |
| side | Number | `2` | Count of pages at side position |
| around | Number | `5` | Count of pages around the current position |
| readonly | Boolean | `false` | Readonly |
| disabled | Boolean | `false` | Disabled |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @select

Emit when selecting a page.

| Property | Type | Description |
| -------- | ---- | ----------- |
| $event.page | Number | Page number to select |
