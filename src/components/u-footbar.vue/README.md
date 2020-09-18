<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFootbar 底部栏

- [示例](#示例)
    - [基本用法](#基本用法)
    - [与列表一起使用](#与列表一起使用)
- [API]()
    - [Props/Attrs](#propsattrs)

**Layout**

底部栏

## 示例
### 基本用法

``` vue
<template>
<u-footbar :position="position">
    <u-linear-layout>
        <u-button color="primary" @click="position='fixed'">切换底部</u-button>
        <u-button @click="position='static'">取消</u-button>
    </u-linear-layout>
</u-footbar>
</template>
<script>
export default {
    data() {
        return {
            position: 'fixed',
        };
    },
};
</script>
```

### 与列表一起使用

``` vue
<template>
<div>
    <u-table-view value-field="name" :values="values" :data="[
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ]">
        <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
        <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view>
    <u-footbar :position="position">
        <u-linear-layout>
            <u-button color="primary">删除</u-button>
            <u-button >重启</u-button>
        </u-linear-layout>
    </u-footbar>
</div>
</template>
<script>
export default {
    data() {
        return {
            values:[],
        };
    },
    computed: {
        position(){
            return this.values && this.values.length > 0 ? 'auto' : 'static';
        }
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| position | string |  |  | 显示的位置。 |

