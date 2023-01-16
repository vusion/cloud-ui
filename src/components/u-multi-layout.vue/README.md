<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UMultiLayout 分栏布局

- [示例](#示例)
    - [两栏-左侧固定](#两栏-左侧固定)
    - [三栏-常规](#三栏-常规)
    - [三栏-全部](#三栏-全部)
    - [通栏-纵向](#通栏-纵向)
    - [通栏-横向](#通栏-横向)
    - [两栏-右侧固定](#两栏-右侧固定)
    - [三栏-双左栏](#三栏-双左栏)
- [UMultiLayout API](#umultilayout-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UMultiLayoutItem API](#umultilayoutitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)

**Layout**

一定的规则布局

## 示例
### 两栏-左侧固定

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
            <u-multi-layout-item>
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
</u-multi-layout>
```
### 三栏-常规

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
            <u-multi-layout-item>
            </u-multi-layout-item>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
</u-multi-layout>
```
### 三栏-全部

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
            <u-multi-layout-item>
            </u-multi-layout-item>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
</u-multi-layout>
```
### 通栏-纵向

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
    </u-multi-layout-item>
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
</u-multi-layout>
```
### 通栏-横向

``` html
<u-multi-layout>
    <u-multi-layout-item style="width: 200px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
    </u-multi-layout-item>
    <u-multi-layout-item style="width: 200px;">
    </u-multi-layout-item>
</u-multi-layout>
```
### 两栏-右侧固定

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
            <u-multi-layout-item>
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
</u-multi-layout>
```
### 三栏-双左栏

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 400px;">
                <u-multi-layout>
                    <u-multi-layout-item>
                    </u-multi-layout-item>
                    <u-multi-layout-item>
                    </u-multi-layout-item>
                </u-multi-layout>
            </u-multi-layout-item>
            <u-multi-layout-item>
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
</u-multi-layout>
```
## UMultiLayout API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| direction | string | `[object Object]`<br/>`[object Object]` | `'horizontal'` | undefined |
| justify | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'start'` | undefined |
| alignment | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'stretch'` | undefined |
| alignment | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'stretch'` | undefined |
| justify | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'start'` | undefined |
| gap | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'none'` | 布局中各分栏间的空隙大小 |

### Slots

#### (default)

插入`<u-multi-layout-item>`子组件。

### Events

#### @$listeners

监听所有事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

## UMultiLayoutItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| fixed | boolean |  | `false` | 开启后滚动时该项固定显示 |
| fixdirec | string | `[object Object]`<br/>`[object Object]` | `'left'` | 固定在左侧还是右侧 |
| display | string | `[object Object]`<br/>`[object Object]` | `'block'` | 行内展示，或块级换行展示 |
| mode | string | `[object Object]`<br/>`[object Object]` | `'inline'` | 设置布局模式 |
| direction | string | `[object Object]`<br/>`[object Object]` | `'horizontal'` | 可更改布局的排列方向 |
| justify | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'start'` | undefined |
| alignment | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'stretch'` | undefined |
| alignment | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'stretch'` | undefined |
| justify | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'start'` | undefined |
| gap | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'none'` | 内容块间隙大小 |

### Slots

#### (default)

内容

### Events

#### @$listeners

监听所有事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

