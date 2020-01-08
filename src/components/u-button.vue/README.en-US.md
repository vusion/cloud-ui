# Button

## Examples
### Basic

``` html
<u-button>Button</u-button>
```

### Disabled

``` html
<u-button disabled>Disabled</u-button>
```

### Link

``` html
<u-linear-layout>
    <u-button href="https://github.com/vusion/vusion" target="_blank">href</u-button>
    <u-button to="/some/router/path">to</u-button>
    <u-button href="https://github.com/vusion/vusion" disabled>href</u-button>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| href | String |  | `href` property of link |
| target | String |  | (native property) |
| to | String, Object |  | `to` property of `vue-router` |
| replace | Boolean | `false` | |
| append | Boolean | `false` | |
| disabled | Boolean | `false` | Disable the button |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | Hold the text and can contain HTML |

### Events

#### $listeners

Inherit all events from `<a>` element.

#### @click

#### @navigate
