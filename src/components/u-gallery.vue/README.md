<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UGallery 画廊

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

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
| data-source | Array\<Item\> \| Function \| object |  | `'\[{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_1.png"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_2.png"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_3.png"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_4.png"},{"url": "https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_5.png"}\]'` | 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑 |
| data-schema | schema |  |  | 集合类型每一元素的数据类型 |
| pattern | string | `[object Object]`<br/>`[object Object]` | `'big'` | 图片的显示模式，支持大图模式和缩略图模式。 |
| num | number |  | `5` |  |
| arrow | boolean |  | `true` |  |

### Events

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无 |
| senderVM | UTableView | 发送事件实例 |

Methods

#### reload()

重新加载数据

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

