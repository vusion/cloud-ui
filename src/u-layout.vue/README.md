# 布局 Layout
## 示例
### 模式1 
``` html
<u-layout :mode="1" left-width="200px" right-width="150px" left-background="#579af5" right-background="#579af5">
	<div slot="header" style="width:960px;padding:16px;background: #67aaf5;">Header</div>
	<div slot="left" style="background: #579af5;">left</div>
	<div slot="content" style="background: #78baf5;min-height:200px">content:自适应宽高</div>
	<div slot="right" style="background: #579af5;">right</div>
	<div slot="footer" style="width:960px;padding:16px;background: #878ad5;">footer</div>
</u-layout>
```

### 模式1 示例
``` html
<u-layout :mode="1" left-width="200px" left-background="#579af5">
	<div slot="header" style="width:960px;padding:16px;background: #151d2b;">
		<u-navbar alignment="left">
			<u-logo slot="left"></u-logo>
            <u-navbar-item selected>主体</u-navbar-item>
            <u-navbar-item>备案管理</u-navbar-item>
            <u-navbar-item>帮助</u-navbar-item>
        </u-navbar></div>
	<div slot="left" style="background: #579af5;">
		<u-sidebar accordion>
        <u-sidebar-item>用户管理</u-sidebar-item>
        <u-sidebar-menu title="用户审核">
            <u-sidebar-item>企业认证</u-sidebar-item>
            <u-sidebar-item>个人认证</u-sidebar-item>
            <u-sidebar-item>发票资质</u-sidebar-item>
            <u-sidebar-item>发票审核</u-sidebar-item>
        </u-sidebar-menu>
        <u-sidebar-item>ICP管理</u-sidebar-item>
        <u-sidebar-item>资源配置</u-sidebar-item>
        <u-sidebar-menu title="费用管理">
            <u-sidebar-item>退款</u-sidebar-item>
            <u-sidebar-item>订单管理</u-sidebar-item>
            <u-sidebar-item>用户优惠</u-sidebar-item>
            <u-sidebar-item>代金券管理</u-sidebar-item>
            <u-sidebar-item>费用统计</u-sidebar-item>
        </u-sidebar-menu>
        <u-sidebar-menu title="通知平台">
            <u-sidebar-item>发短信</u-sidebar-item>
            <u-sidebar-item>发邮件</u-sidebar-item>
            <u-sidebar-item>消息中心</u-sidebar-item>
            <u-sidebar-item>公告管理</u-sidebar-item>
        </u-sidebar-menu>
        <u-sidebar-menu title="工单管理">
            <u-sidebar-item>工单问答</u-sidebar-item>
        </u-sidebar-menu>
        <u-sidebar-menu title="市场渠道">
            <u-sidebar-item>渠道推广</u-sidebar-item>
            <u-sidebar-item>用户申请</u-sidebar-item>
            <u-sidebar-item>活动管理</u-sidebar-item>
        </u-sidebar-menu>
        <u-sidebar-item>策略管理</u-sidebar-item>
    </u-sidebar>
	</div>
	<div slot="content">
	    <u-subnav>
	        <u-subnav-item title="设置带宽" selected>调整配额</u-subnav-item>
	        <u-subnav-item title="调整配额">调整配额</u-subnav-item>
	        <u-subnav-item title="灰度测试">灰度测试</u-subnav-item>
	    </u-subnav>
	</div>
	<div slot="footer" style="width:960px;padding:16px;background: #808080;color:#fff">
		<u-navbar alignment="center">
            <u-navbar-item selected>联系方式</u-navbar-item>
            <u-navbar-item>帮助与支持</u-navbar-item>
            <u-navbar-item>关注我们</u-navbar-item>
        </u-navbar>
	</div>
</u-layout>
```

### 模式2
``` html
<u-layout :mode="2" left-width="200px" left-background="#579af5" right-width="200px" right-background="#579af5">
	<div slot="header" style="width:960px;padding:16px;background: #67aaf5;">Header</div>
	<div slot="left" style="background: #579af5;">left</div>
	<div slot="right" style="background: #579af5;">right</div>
	<div slot="content" style="background: #78baf5;min-height:200px">content</div>
	<div slot="footer" style="width:960px;padding:16px;background: #878ad5;">footer</div>
</u-layout>
```

### 模式2 示例
``` html
<u-layout :mode="2" left-width="200px" left-background="#579af5">
	<div slot="header" style="width:960px;padding:16px;background: #151d2b;">
		<u-navbar alignment="left">
			<u-logo slot="left"></u-logo>
            <u-navbar-item selected>主体</u-navbar-item>
            <u-navbar-item>备案管理</u-navbar-item>
            <u-navbar-item>帮助</u-navbar-item>
        </u-navbar>
    </div>
	<div slot="left" style="background: #579af5;">
		<u-sidebar accordion>
	        <u-sidebar-item>用户管理</u-sidebar-item>
	        <u-sidebar-menu title="用户审核">
	            <u-sidebar-item>企业认证</u-sidebar-item>
	            <u-sidebar-item>个人认证</u-sidebar-item>
	            <u-sidebar-item>发票资质</u-sidebar-item>
	            <u-sidebar-item>发票审核</u-sidebar-item>
	        </u-sidebar-menu>
	        <u-sidebar-item>ICP管理</u-sidebar-item>
	        <u-sidebar-item>资源配置</u-sidebar-item>
	        <u-sidebar-menu title="费用管理">
	            <u-sidebar-item>退款</u-sidebar-item>
	            <u-sidebar-item>订单管理</u-sidebar-item>
	            <u-sidebar-item>用户优惠</u-sidebar-item>
	            <u-sidebar-item>代金券管理</u-sidebar-item>
	            <u-sidebar-item>费用统计</u-sidebar-item>
	        </u-sidebar-menu>
	        <u-sidebar-menu title="通知平台">
	            <u-sidebar-item>发短信</u-sidebar-item>
	            <u-sidebar-item>发邮件</u-sidebar-item>
	            <u-sidebar-item>消息中心</u-sidebar-item>
	            <u-sidebar-item>公告管理</u-sidebar-item>
	        </u-sidebar-menu>
	        <u-sidebar-menu title="工单管理">
	            <u-sidebar-item>工单问答</u-sidebar-item>
	        </u-sidebar-menu>
	        <u-sidebar-menu title="市场渠道">
	            <u-sidebar-item>渠道推广</u-sidebar-item>
	            <u-sidebar-item>用户申请</u-sidebar-item>
	            <u-sidebar-item>活动管理</u-sidebar-item>
	        </u-sidebar-menu>
	        <u-sidebar-item>策略管理</u-sidebar-item>
	    </u-sidebar>
	</div>
	<div slot="content">
	    <u-subnav>
	        <u-subnav-item title="设置带宽" selected>调整配额</u-subnav-item>
	        <u-subnav-item title="调整配额">调整配额</u-subnav-item>
	        <u-subnav-item title="灰度测试">灰度测试</u-subnav-item>
	    </u-subnav>
	</div>
	<div slot="footer" style="width:960px;padding:16px;background: #808080;color:#fff">
		<u-navbar alignment="center">
            <u-navbar-item selected>联系方式</u-navbar-item>
            <u-navbar-item>帮助与支持</u-navbar-item>
            <u-navbar-item>关注我们</u-navbar-item>
        </u-navbar>
    </div>
</u-layout>
```
### 固定侧边栏
``` html
<div style="height:300px">
	<u-layout :mode="2" left-width="200px" left-background="#579af5" right-width="200px" right-background="#579af5" :fix-side="true">
		<div slot="header" style="width:960px;padding:16px;background: #67aaf5;">Header</div>
		<div slot="left" style="background: #579af5;">left</div>
		<div slot="content" style="background: #78baf5;min-height:200px"><div style="height:600px">content</div></div>
	</u-layout>
</div>
```
## Layout API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| sidebarWidth | String | `auto` | 侧边栏宽度，百分数或像素 |
| siderDirection | String | `row` | 侧边栏宽度排列方向 |
| siderBackground | String | `undefined` | 侧边栏背景色 |
| mode | Number | `1` | 布局模式 |
| fixSide | Boolean | `false` | 是否固定侧边栏 |