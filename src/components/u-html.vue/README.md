<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UHtml html 文本

- [示例](#示例)
    - [基本用法](#基本用法)
    - [不使用安全过滤](#不使用安全过滤)
- [API]()
    - [Props/Attrs](#propsattrs)

**Display**

用于添加 html 文本

## 示例
### 基本用法

``` html
<u-html html="<a href='https://www.163yun.com' target='_blank' >html 元素</a><img src='' onerror='alert(4)'>"></u-html>
```

### 不使用安全过滤

```vue
<template>
<u-html html="<a href='https://www.163yun.com' target='_blank' >html 元素</a><img src='' onerror='console.log(1)'>" :security="false"></u-html>
</template>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| html | string |  | `''` | html 文本内容 |
| security | boolean |  | `true` | 过滤不安全的内容 |
| options | object |  | `'{ "ADD_ATTR": \["target"\] }'` | 安全过滤库 dompurify 的配置 |

