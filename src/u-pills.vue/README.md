# Pills

## Examples
### Basic

``` html
<u-pills>
    <u-pill>Apple</u-pill>
    <u-pill>Banana</u-pill>
    <u-pill>Cake</u-pill>
</u-pills>
```

### Value

``` html
<u-pills value="C">
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
```

### Readonly & Disabled

``` html
<u-pills value="C" readonly>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
<p></p>
<u-pills value="C" disabled>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
<p></p>
<u-pills value="C">
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B" disabled>Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
```

### Cancelable

Try to click twice on an item.

``` html
<u-pills value="C" cancelable>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
```
