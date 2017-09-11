# 布局 Layout
## 示例
### 模式1
``` html
<u-layout :mode="1" sidebar-width="200px" sider-background="#579af5">
	<div slot="header" style="width:960px;padding:16px;background: #67aaf5;">Header</div>
	<div slot="sider" style="background: #579af5;">sider</div>
	<div slot="content" style="background: #78baf5;min-height:200px">content</div>
	<div slot="footer" style="width:960px;padding:16px;background: #878ad5;">footer</div>
</u-layout>
```
### 模式1 sider反转
``` html
<u-layout :mode="1" sidebar-width="200px" sider-direction="row-reverse" sider-background="#579af5">
	<div slot="header" style="width:960px;padding:16px;background: #67aaf5;">Header</div>
	<div slot="sider" style="background: #579af5;">sider</div>
	<div slot="content" style="background: #78baf5;min-height:200px">content</div>
	<div slot="footer" style="width:960px;padding:16px;background: #878ad5;">footer</div>
</u-layout>
```
### 模式2
``` html
<u-layout :mode="2" sidebar-width="200px" sider-background="#579af5">
	<div slot="header" style="width:960px;padding:16px;background: #67aaf5;">Header</div>
	<div slot="sider" style="background: #579af5;">sider</div>
	<div slot="content" style="background: #78baf5;min-height:200px">content</div>
	<div slot="footer" style="width:960px;padding:16px;background: #878ad5;">footer</div>
</u-layout>
```
### 模式2 sider反转
``` html
<u-layout :mode="2" sidebar-width="200px" sider-direction="row-reverse" sider-background="#579af5">
	<div slot="header" style="width:960px;padding:16px;background: #67aaf5;">Header</div>
	<div slot="sider" style="background: #579af5;">sider</div>
	<div slot="content" style="background: #78baf5;min-height:200px">content</div>
	<div slot="footer" style="width:960px;padding:16px;background: #878ad5;">footer</div>
</u-layout>
```

## Layout API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| sidebarWidth | String | `auto` | 侧边栏宽度，百分数或像素 |
| siderDirection | String | `row` | 侧边栏宽度排列方向 |
| siderBackground | String | `undefined` | 侧边栏背景色 |
| mode | Number | `1` | 布局模式 |