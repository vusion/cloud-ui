# Selection

## Examples
### Basic

``` html
<u-selection>
    <u-selection-item>Apple</u-selection-item>
    <u-selection-item>Banana</u-selection-item>
    <u-selection-item>Cake</u-selection-item>
</u-selection>
```

### Value

``` html
<u-selection value="C">
    <u-selection-item value="A">Apple</u-selection-item>
    <u-selection-item value="B">Banana</u-selection-item>
    <u-selection-item value="C">Cake</u-selection-item>
</u-selection>
```

### Readonly & Disabled

``` html
<u-selection value="C" readonly>
    <u-selection-item value="A">Apple</u-selection-item>
    <u-selection-item value="B">Banana</u-selection-item>
    <u-selection-item value="C">Cake</u-selection-item>
</u-selection>
<p></p>
<u-selection value="C" disabled>
    <u-selection-item value="A">Apple</u-selection-item>
    <u-selection-item value="B">Banana</u-selection-item>
    <u-selection-item value="C">Cake</u-selection-item>
</u-selection>
<p></p>
<u-selection value="C">
    <u-selection-item value="A">Apple</u-selection-item>
    <u-selection-item value="B" disabled>Banana</u-selection-item>
    <u-selection-item value="C">Cake</u-selection-item>
</u-selection>
```

### Cancelable

Try to click twice on an item.

``` html
<u-selection value="C" cancelable>
    <u-selection-item value="A">Apple</u-selection-item>
    <u-selection-item value="B">Banana</u-selection-item>
    <u-selection-item value="C">Cake</u-selection-item>
</u-selection>
```
