### 基本用法

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

### 栅格分列

类似`<u-grid-layout>`组件，在`<u-info-list>`或`<u-info-list-group>`组件上使用`repeat`属性来定义栅格列数，用`span`属性来设置列跨越的栅格数。`repeat`默认为`3`列。

下面是两个示例：

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息" :repeat="2">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC" :span="2">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
        <u-info-list-item label="描述" :span="3">云服务器是网易云提供的一种弹性可伸缩的云计算基础服务，快速满足公司产品上线、开发测试等对IT基础设施的需求，帮助用户降低IT成本，简化运维工作。</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

``` html
<u-info-list :repeat="2">
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="描述" :span="2">云服务器是网易云提供的一种弹性可伸缩的云计算基础服务，快速满足公司产品上线、开发测试等对IT基础设施的需求，帮助用户降低IT成本，简化运维工作。</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

### 额外插槽

对于一些操作项，可以使用`extra`插槽添加在详情列表组的右上角。

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <template slot="extra">
            <u-link>设置</u-link>
        </template>
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

### 与表格结合

对于详情列表内部添加的表格，一般设置`color="light"`与`u-info-list`风格更配。

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <u-table-view :data="[
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ]" color="light">
            <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column title="地址" field="address"></u-table-view-column>
            <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        </u-table-view>
    </u-info-list-group>
</u-info-list>
```

### 隐藏标题行

在弹窗或面板中，可能想要隐藏掉标题行。这时不使用`<u-info-list-group>`组件即可。

下面是两个示例：

``` html
<u-panel title="云主机详情">
    <u-info-list>
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
        <u-info-list-item label="描述" :span="3">云服务器是网易云提供的一种弹性可伸缩的云计算基础服务，快速满足公司产品上线、开发测试等对IT基础设施的需求，帮助用户降低IT成本，简化运维工作。</u-info-list-item>
    </u-info-list>
</u-panel>
```

``` html
<u-panel title="云主机详情">
    <u-info-list repeat="2">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list>
</u-panel>
```
