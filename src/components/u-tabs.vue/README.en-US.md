# Tabs

## Examples
### Basic

``` html
<u-tabs>
    <u-tab title="TabA">ContentA</u-tab>
    <u-tab title="TabB">ContentB</u-tab>
    <u-tab title="TabC">ContentC</u-tab>
</u-tabs>
```

### Index

``` html
<u-tabs :index="2">
    <u-tab title="TabA">ContentA</u-tab>
    <u-tab title="TabB">ContentB</u-tab>
    <u-tab title="TabC">ContentC</u-tab>
</u-tabs>
```

### Readonly & Disabled

``` html
<u-tabs readonly>
    <u-tab title="TabA">Readonly</u-tab>
    <u-tab title="TabB">Readonly</u-tab>
    <u-tab title="TabC">Readonly</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="TabA">Disabled All</u-tab>
    <u-tab title="TabB">Disabled All</u-tab>
    <u-tab title="TabC">Disabled All</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="TabA">Disabled Partially</u-tab>
    <u-tab title="TabB" disabled>Disabled Partially</u-tab>
    <u-tab title="TabC">Disabled Partially</u-tab>
</u-tabs>
```

### Hidden

``` html
<u-tabs :index="2">
    <u-tab title="TabA">ContentA</u-tab>
    <u-tab title="TabB" hidden>ContentB</u-tab>
    <u-tab title="TabC">ContentC</u-tab>
</u-tabs>
```

## Tabs API
### Props/Attrs

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| index.sync | Number | `0` | Index of selected tab |
| readonly | Boolean | `false` | Readonly |
| disabled | Boolean | `false` | Disabled |
| router | Boolean | `false` | Use vue router to activate |

### Slots

| Name | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @select

Emit when selecting a tab.

| Property | Type | Description |
| -------- | ---- | ----------- |
| index | Number | Index of selected tab |
| $Tab | Tab | The selected tab |

#### @input

Emit after selecting a tab.

| Property | Type | Description |
| -------- | ---- | ----------- |
| index | Number | Index of selected tab |

## Tab API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | Tab title |
| hidden | Boolean | `false` | Hide this tab |
| disabled | Boolean | `false` | Disabled |
| to | String, Object | | The target location of this link |
| replace | Boolean | `false` | Setting `replace` prop will call `router.replace()` instead of `router.push()` when clicked |
| exact | Boolean | `false` | Active matching behavior is inclusive match |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @navigate

Emit when navigating to other router.

| Property | Type | Description |
| -------- | ---- | ----------- |
| to | Object | The target location of this link |
| replace | Boolean | Setting `replace` prop will call `router.replace()` instead of `router.push()` when clicked |
| exact | Boolean | Active matching behavior is inclusive match |
