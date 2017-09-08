# Vusion Cloud UI

## Development

``` shell
npm install
npm install -g vusion-cli
docs-src/dev src
```

其他主题：

``` shell
npm install
npm install -g vusion-cli
docs-src/dev theme-seagreen
```

要在打开的浏览器中设置一下localStorage：

``` javascript
localStorage.setItem('theme', 'seagreen');
location.reload();
```

## Build

``` shell
docs-src/build
```

## Publish

``` shell
docs-src/build
vusion publish
```
