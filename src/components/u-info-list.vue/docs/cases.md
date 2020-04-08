### column 分列

``` html
<u-info-list column="2">
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息" column="3">
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
        <u-info-list-item label="描述" column="1">云服务器是网易云提供的一种弹性可伸缩的云计算基础服务，快速满足公司产品上线、开发测试等对IT基础设施的需求，帮助用户降低IT成本，简化运维工作。</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
        <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
        <u-info-list-item label="默认VPC">是</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
        <u-info-list-item label="描述" column="1">云服务器是网易云提供的一种弹性可伸缩的云计算基础服务，快速满足公司产品上线、开发测试等对IT基础设施的需求，帮助用户降低IT成本，简化运维工作。</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```
