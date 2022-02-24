<template>
    <div>
        <u-switch v-model="striped">打开斑马纹</u-switch>
        <u-table-view :striped="striped" :data-source="tableView">
            <u-table-view-column
                title="用户名"
                field="name"
                width="20%">
            </u-table-view-column>
            <u-table-view-column
                title="手机号码"
                field="phone"
                width="20%">
            </u-table-view-column>
            <u-table-view-column
                title="地址"
                field="address">
            </u-table-view-column>
            <u-table-view-column
                title="最近登录时间"
                field="loginTime"
                formatter="placeholder | date"
                width="20%">
            </u-table-view-column>
        </u-table-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            striped: true,
            tableView: [
                {
                    name: '张三',
                    phone: '18612917895',
                    email: 'zhangsan@163.com',
                    address: '浙江省杭州市滨江区网商路599号网易大厦',
                    createdTime: '1464421931000',
                    loginTime: '1527515531000',
                },
                {
                    name: '小明',
                    phone: '13727160283',
                    email: 'xiaoming@163.com',
                    address: '浙江省杭州市滨江区江虹路459号英飞特科技园',
                    createdTime: '1520864676000',
                    loginTime: '1552400676000',
                },
                {
                    name: '李四',
                    phone: '18897127809',
                    email: 'lisi@163.com',
                    address: '浙江省杭州市滨江区秋溢路606号西可科技园',
                    createdTime: '1494488730000',
                    loginTime: '1558165530000',
                },
            ],
        };
    },
};
</script>
