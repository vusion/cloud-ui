## 表单布局
### 基本用法

``` html
<u-form gap="large">
    <u-form-item label="计费方式" required>
        <u-radios value="0">
            <u-radio label="0">包年包月</u-radio>
            <u-radio label="1">按量付费</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="实例名称" required>
        <u-input size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item label="　" required>
        <u-input size="huge" maxlength="63" placeholder="label为空的必填项"></u-input>
    </u-form-item>
    <u-form-item label="规格">
        <u-capsules value="0101">
            <u-capsule value="0101">1核 1GB</u-capsule>
            <u-capsule value="0102">1核 2GB</u-capsule>
            <u-capsule value="0204">2核 4GB</u-capsule>
            <u-capsule value="0408">4核 8GB</u-capsule>
            <u-capsule value="0816">8核 16GB</u-capsule>
            <u-capsule value="0832">8核 32GB</u-capsule>
            <u-capsule value="1664">16核 64GB</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="类型" description="高性能 SSD 云盘不支持快照功能" layout="block">
        <u-capsules value="SSD">
            <u-capsule value="SSD">SSD 云盘</u-capsule>
            <u-capsule value="HSSD">高性能 SSD 云盘</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="端口号" required>
        <u-input size="huge medium" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
    </u-form-item>
    <u-form-item label="公网带宽">
        <u-combo-slider :step="10" unit="Mbps"></u-combo-slider>
    </u-form-item>
    <u-form-item label="详情" layout="block">
        <u-textarea size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
```

### 行内

``` html
<u-form layout="inline" label-size="auto">
    <u-form-item label="状态">
        <u-select auto-select>
            <u-select-item>认证中</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="用户名">
        <u-input maxlength="63" placeholder="请输入用户名"></u-input>
    </u-form-item>
    <u-form-item label="联系号码">
        <u-input maxlength="63" placeholder="请输入联系号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">查询</u-button>
    </u-form-item>
</u-form>
```

### 栅格布局

有多行的表单为了对齐美观，通常与栅格布局搭配使用。

``` html
<u-form layout="inline">
    <u-grid-layout>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-form-item label="状态">
                    <u-select auto-select>
                        <u-select-item>认证中</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="备案类型">
                    <u-select auto-select>
                        <u-select-item>全部</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="备案号">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-form-item label="用户名">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="单位名称">
                    <u-input maxlength="63"></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item>
                    <u-button color="primary">查询</u-button>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
    </u-grid-layout>
</u-form>
```

### 插槽

- 通过`slot="label"`插槽自定义左侧内容
- 通过`slot="description"`插槽自定义描述内容
- 通过`slot='extra'`插槽自定义`label`右侧额外内容

``` html
<u-form ref="form">
    <u-form-item required layout="block">
        <span slot="label">
            用户名
        </span>
        <div slot="description">描述描述</div>
        <i-icon name="alert" size="small" slot="extra">
            <u-tooltip content="请输入正确格式的中文汉字"></u-tooltip>
        </i-icon>
        <u-input maxlength="4" maxlength-message="不超过4个字符" placeholder="不超过4个字符"></u-input>
    </u-form-item>
</u-form>
```


## 数据收集与提交

推荐将各表单控件使用`v-model`绑定的数据，统一收集到`data`里的`model`对象中。

``` vue
<template>
<u-form gap="large">
    <u-form-item label="计费方式" required>
        <u-radios v-model="model.chargeType">
            <u-radio label="0">包年包月</u-radio>
            <u-radio label="1">按量付费</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="实例名称" required>
        <u-input v-model="model.name" size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item label="规格">
        <u-capsules v-model="model.spec">
            <u-capsule value="0101">1核 1GB</u-capsule>
            <u-capsule value="0102">1核 2GB</u-capsule>
            <u-capsule value="0204">2核 4GB</u-capsule>
            <u-capsule value="0408">4核 8GB</u-capsule>
            <u-capsule value="0816">8核 16GB</u-capsule>
            <u-capsule value="0832">8核 32GB</u-capsule>
            <u-capsule value="1664">16核 64GB</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="类型" description="高性能 SSD 云盘不支持快照功能" layout="block">
        <u-capsules v-model="model.type">
            <u-capsule value="SSD">SSD 云盘</u-capsule>
            <u-capsule value="HSSD">高性能 SSD 云盘</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="端口号" required>
        <u-input v-model.number="model.port" size="huge normal" maxlength="5" placeholder="1150-65535"></u-input>
    </u-form-item>
    <u-form-item label="公网带宽">
        <u-combo-slider v-model="model.bandwidth" :step="10" unit="Mbps"></u-combo-slider>
    </u-form-item>
    <u-form-item label="描述" layout="block">
        <u-textarea v-model="model.description" size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit()">立即创建</u-button>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                chargeType: '0',
                name: '',
                spec: '0101',
                type: 'SSD',
                port: '',
                bandwidth: 10,
                description: '',
            },
        };
    },
    methods: {
        submit() {
            console.log(this.model);
            this.$toast.show('没有验证，直接提交成功！');
        },
    },
};
</script>
```

### 数据转换

有时 UI 中的数据与向后端提交的数据不完全一致，可以将`v-model`分解为一个`:value`属性绑定 + `@input`事件，做临时转换。

对于需要保持数字类型的，可以直接使用 Vue 的 `v-model` 的 `.number` 修饰符。

``` vue
<template>
<u-form gap="large">
    <u-form-item label="超时时长" required>
        <u-input size="huge normal" maxlength="5" placeholder="300-10000"
            :value="model.timeout / 1000" @input="model.timeout = $event * 1000"></u-input>
    </u-form-item>
    <u-form-item label="端口号" required>
        <u-input v-model.number="model.port" size="huge normal" maxlength="5" placeholder="1150-65535"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit()">立即创建</u-button>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                timeout: 900000,
                port: '',
            },
        };
    },
    methods: {
        submit() {
            console.log(this.model);
            this.$toast.show('没有验证，直接提交成功！');
        },
    },
};
</script>
```

### 表单验证

需要在`<u-form-item>`的`rules`属性添加验证规则，输入和失焦会自动触发验证，点击提交按钮时，需要手动调用 form 的`validate`方法。

可以根据`@validate`事件监听表单的验证状态。

关于验证规则的详细使用，参见 [UValidator](../u-validator)。

``` vue
<template>
<u-form ref="form" gap="large">
    <u-form-item label="计费方式" required>
        <u-radios v-model="model.chargeType">
            <u-radio label="0">包年包月</u-radio>
            <u-radio label="1">按量付费</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="实例名称" required rules="required | ^az | az09$ | ^az09-$ | rangeLength(1,63)">
        <u-input v-model="model.name" size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item label="规格">
        <u-capsules v-model="model.spec">
            <u-capsule value="0101">1核 1GB</u-capsule>
            <u-capsule value="0102">1核 2GB</u-capsule>
            <u-capsule value="0204">2核 4GB</u-capsule>
            <u-capsule value="0408">4核 8GB</u-capsule>
            <u-capsule value="0816">8核 16GB</u-capsule>
            <u-capsule value="0832">8核 32GB</u-capsule>
            <u-capsule value="1664">16核 64GB</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="类型" description="高性能 SSD 云盘不支持快照功能" layout="block">
        <u-capsules v-model="model.type">
            <u-capsule value="SSD">SSD 云盘</u-capsule>
            <u-capsule value="HSSD">高性能 SSD 云盘</u-capsule>
        </u-capsules>
    </u-form-item>
    <u-form-item label="端口号" required rules="required | integer | range(1150,65535)">
        <u-input v-model.number="model.port" size="huge normal" maxlength="5" placeholder="1150-65535"></u-input>
    </u-form-item>
    <u-form-item label="公网带宽">
        <u-combo-slider v-model="model.bandwidth" :step="10" unit="Mbps"></u-combo-slider>
    </u-form-item>
    <u-form-item label="描述" layout="block" rules="minLength(8)">
        <u-textarea v-model="model.description" size="huge"></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit">立即创建</u-button>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            model: {
                chargeType: '0',
                name: '',
                spec: '0101',
                type: 'SSD',
                port: '',
                bandwidth: 10,
                description: '',
            },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => this.$toast.show('验证通过，提交成功！'))
                .catch(() => this.$toast.show('验证失败！'));
        },
    },
};
</script>
```
