<template>
    <div>
        <h1>详情页</h1>
        <p>详情页是一种比较常见的需求，根据使用场景的不同，可以大致划分为以下形式。</p>
        <div :class="$style.part">
            <u-desc-list>
                <u-desc-list-group title="个人信息">
                    <u-desc-list-item label="用户名">xxxxxx</u-desc-list-item>
                    <u-desc-list-item label="登录账号">1111111</u-desc-list-item>
                    <u-desc-list-item label="登录密码">
                        <u-link>修改</u-link>
                    </u-desc-list-item>
                    <u-desc-list-item label="手机">13888888888</u-desc-list-item>
                </u-desc-list-group>
                <u-desc-list-group title="公司信息">
                    <u-desc-list-item label="公司名">xxxxxx</u-desc-list-item>
                    <u-desc-list-item label="联系电话">13688886666</u-desc-list-item>
                    <u-desc-list-item label="联系邮箱">xxxx@163.com</u-desc-list-item>
                </u-desc-list-group>
            </u-desc-list>
        </div>
        <div :class="$style.part">
            <u-info-list>
                <u-info-list-group title="基本信息">
                    <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
                    <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                    <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
                    <u-info-list-item label="默认VPC">是</u-info-list-item>
                    <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
                </u-info-list-group>
            </u-info-list>
            <u-info-list column="2">
                <u-info-list-group title="基本信息">
                    <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
                    <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                    <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
                    <u-info-list-item label="默认VPC">是</u-info-list-item>
                    <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
                </u-info-list-group>
            </u-info-list>
        </div>
    </div>
</template>

<style module>
.part {
    margin-top: 50px;
}
</style>
