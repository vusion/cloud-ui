# 侧边栏（Sidebar）

## 示例
### 基本形式

``` html
<div style="width: 164px; height: 300px;">
    <u-sidebar>
        <u-sidebar-item>用户管理</u-sidebar-item>
        <u-sidebar-item selected>用户审核</u-sidebar-item>
        <u-sidebar-item>ICP管理</u-sidebar-item>
    </u-sidebar>
</div>
```

### 分组

``` html
<div style="width: 164px; height: 500px;">
    <u-sidebar>
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
```
