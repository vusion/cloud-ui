## 色彩规范

### 品牌色

Main Color
```html
<u-block style="background: var(--brand-theme); color: white;">
    Main-color
</u-block>
```

### 功能色

```html
<u-linear-layout direction="vertical">
    <u-block style="background: var(--brand-theme); color: white;">
        高亮色
    </u-block>
    <u-block style="background: var(--brand-success); color: white;">
        成功色
    </u-block>
    <u-block style="background: var(--brand-error); color: white;">
        失败色
    </u-block>
    <u-block style="background: var(--brand-warning); color: white;">
        提醒色
    </u-block>
</u-linear-layout>
```

### 中性色

```html
<u-linear-layout direction="vertical">
    <u-block style="background: var(--background-color-base); color: white;">
        背景色_黑
    </u-block>
    <u-block style="background: var(--background-color-gray); color: white;">
        背景色_深灰
    </u-block>
    <u-block style="background: var(--divider-global-color); color: white;">
        分割线 1
    </u-block>
    <u-block style="background: var(--divider-list-color); color: white;">
        分割线 2
    </u-block>
    <u-block style="background: var(--tabs-border-base-color); color: white;">
        Tab_线框/选中色
    </u-block>
    <u-block style="background: var(--editor-content-background-color); color: white;">
        编辑区背景色
    </u-block>
</u-linear-layout>
```

## 文字规范

### 字体

中文字体
```html
<u-linear-layout direction="vertical">
    <u-block style="background:white;color:black;font-family: var(--font-family-zh-CN);font-size:32px;">
        苹方
    </u-block>
    <u-block style="background:white;color:black;font-family: var(--font-family-zh-CN);font-size:32px;">
        微软雅黑
    </u-block>
</u-linear-layout>
```

英文字体
```html
<u-linear-layout direction="vertical">
    <u-block style="background:white;color:black;font-family: var(--font-family-zh-CN);font-size:32px;">
        Arial
    </u-block>
    <u-block style="background:white;color:black;font-family: var(--font-family-zh-CN);font-size:32px;">
        Helvetica Neue
    </u-block>
</u-linear-layout>
```

### 文字色彩

```html
<u-linear-layout direction="vertical">
    <u-block style="background:black;color:var(--color-base);font-size:32px;">
        一级字色
    </u-block>
    <u-block style="background:white;color:var(--font-second-color);font-size:32px;">
        二级字色
    </u-block>
    <u-block style="background:white;color:var(--font-third-color);font-size:32px;">
        三级字色
    </u-block>
    <u-block style="background:white;color:var(--color-light);font-size:32px;">
        禁用字色
    </u-block>
</u-linear-layout>
```

### 文字使用规范

```html
<u-linear-layout direction="vertical">
    <u-block style="background:white;color:black;font-size:16px;">
        页面标题  
    </u-block>
    <u-block style="background:white;color:black;font-size:14px;">
        大标题
    </u-block>
    <u-block style="background:white;color:black;font-size:12px;">
        列表标题
    </u-block>
    <u-block style="background:white;color:black;font-size:12px;">
        正文/小标题/辅助文字
    </u-block>
</u-linear-layout>
```

## popover

```html
<u-linear-layout>
    <u-button style="background:white;color:black;margin-right:20px;">
        内容
        <u-popup>使用 content 属性添加内容</u-popup>
    </u-button>
    <u-button>
        right-click
        <u-popup trigger="right-click">Popup</u-popup>
    </u-button>
</u-linear-layout>
```