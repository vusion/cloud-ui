<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UGallery 画廊

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Display**

画廊

## 示例
### 基本用法

``` html
<u-gallery>
    
</u-gallery>
```
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| object |  | `'\[{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_1.png"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_2.png"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_3.png"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_4.png"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_5.png"}\]'` | 数据源 |
| pattern | string | `[object Object]`<br/>`[object Object]` | `'big'` | 链接类型 |
| num | number |  | `5` | 显示图片数 |
| arrow | boolean |  | `true` | 是否显示左右箭头 |

