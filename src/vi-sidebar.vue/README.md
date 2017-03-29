# 侧边栏（Sidebar）

## 示例
### 基本形式

``` html
<div style="width: 164px; height: 300px;">
    <vi-sidebar>
        <vi-sidebar-item>用户管理</vi-sidebar-item>
        <vi-sidebar-item selected>用户审核</vi-sidebar-item>
        <vi-sidebar-item>ICP管理</vi-sidebar-item>
    </vi-sidebar>
</div>
```

### 分组

``` html
<div style="width: 164px; height: 500px;">
    <vi-sidebar>
        <vi-sidebar-item>用户管理</vi-sidebar-item>
        <vi-sidebar-menu title="用户审核">
            <vi-sidebar-item>企业认证</vi-sidebar-item>
            <vi-sidebar-item>个人认证</vi-sidebar-item>
            <vi-sidebar-item>发票资质</vi-sidebar-item>
            <vi-sidebar-item>发票审核</vi-sidebar-item>
        </vi-sidebar-menu>
        <vi-sidebar-item>ICP管理</vi-sidebar-item>
        <vi-sidebar-item>资源配置</vi-sidebar-item>
        <vi-sidebar-menu title="费用管理">
            <vi-sidebar-item>退款</vi-sidebar-item>
            <vi-sidebar-item>订单管理</vi-sidebar-item>
            <vi-sidebar-item>用户优惠</vi-sidebar-item>
            <vi-sidebar-item>代金券管理</vi-sidebar-item>
            <vi-sidebar-item>费用统计</vi-sidebar-item>
        </vi-sidebar-menu>
        <vi-sidebar-menu title="通知平台">
            <vi-sidebar-item>发短信</vi-sidebar-item>
            <vi-sidebar-item>发邮件</vi-sidebar-item>
            <vi-sidebar-item>消息中心</vi-sidebar-item>
            <vi-sidebar-item>公告管理</vi-sidebar-item>
        </vi-sidebar-menu>
        <vi-sidebar-menu title="工单管理">
            <vi-sidebar-item>工单问答</vi-sidebar-item>
        </vi-sidebar-menu>
        <vi-sidebar-menu title="市场渠道">
            <vi-sidebar-item>渠道推广</vi-sidebar-item>
            <vi-sidebar-item>用户申请</vi-sidebar-item>
            <vi-sidebar-item>活动管理</vi-sidebar-item>
        </vi-sidebar-menu>
        <vi-sidebar-item>策略管理</vi-sidebar-item>
    </vi-sidebar>
</div>
```
