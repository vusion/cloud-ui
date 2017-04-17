# Capsules

## Examples
### Basic

``` html
<u-capsules>
    <u-capsule>Apple</u-capsule>
    <u-capsule>Banana</u-capsule>
    <u-capsule>Cake</u-capsule>
</u-capsules>
```

### Value

``` html
<u-capsules value="C">
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### Readonly & Disabled

``` html
<u-capsules value="C" readonly>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
<p></p>
<u-capsules value="C" disabled>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
<p></p>
<u-capsules value="C">
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B" disabled>Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### Cancelable

Try to click twice on an item.

``` html
<u-capsules value="C" cancelable>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### Flag

``` html
<u-capsules>
    <u-capsule>Apple</u-capsule>
    <u-capsule flag>Banana</u-capsule>
    <u-capsule flag>Cake</u-capsule>
</u-capsules>
```
