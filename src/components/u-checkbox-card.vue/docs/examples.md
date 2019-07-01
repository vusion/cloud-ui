### 基本形式

``` vue
<template>
<u-linear-layout>
    <u-checkbox-card v-model="value" :data="data"></u-checkbox-card>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['1', '4'],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```
### 设置空态

``` vue
<template>
<u-linear-layout>
    <u-checkbox-card v-model="value" placeholder="当前无相关环境" :data="data"></u-checkbox-card>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['1', '4'],
            data: [],
        };
    },
};
</script>
```
### 卡牌宽度

``` vue
<template>
<div>
    <p>samll尺寸</p>
    <u-linear-layout>
        <u-checkbox-card size="small" :data="data"></u-checkbox-card>
    </u-linear-layout>
    <p>默认尺寸</p>
    <u-linear-layout>
        <u-checkbox-card :data="data"></u-checkbox-card>
    </u-linear-layout>
    <p>large尺寸</p>
    <u-linear-layout>
        <u-checkbox-card size="large" :data="data"></u-checkbox-card>
    </u-linear-layout>
    <p>huge尺寸</p>
    <u-linear-layout>
        <u-checkbox-card size="huge" :data="data"></u-checkbox-card>
    </u-linear-layout>
    <p>自适应尺寸</p>
    <u-linear-layout style="width:900px;">
        <u-checkbox-card size="auto" :data="data"></u-checkbox-card>
    </u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```
### 固定每行展示数据个数

``` vue
<template>
<u-linear-layout>
    <u-checkbox-card :column="3" size="large" :data="data"></u-checkbox-card>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```

### 表单校验
由于checkbox card的value值是数组类型的，这里需要指定type=‘array’同时需要使用validator做判断
``` vue
<template>
<u-form>
    <u-form-item label="选择环境" placement="bottom" layout="block" :rules="rules">
        <u-checkbox-card :column="3" size="large" :data="data"></u-checkbox-card>
    </u-form-item>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
            },{
                text: 'region-1',
                value: '5',
            }],
            rules: [{
                type: 'array',
                message: '环境为必填项',
                trigger: 'input',
                validator: (rule, value, callback) => {
                    if (!value||value.length === 0) {
                        console.log('error');
                        callback(new Error());
                    } else
                        callback();
                },
            }]
        };
    },
};
</script>
```

### 部分选项不可选择
``` vue
<template>
<u-linear-layout>
    <u-checkbox-card v-model="value" :data="data"></u-checkbox-card>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: ['2', '3'],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
                disabled: true,
            },{
                text: 'yiqiao-public',
                value: '3',
            },{
                text: 'liantong-public',
                value: '4',
                 disabled: true,
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```


### 自定义placeholder
``` vue
<template>
<u-linear-layout>
    <u-checkbox-card v-model="value" :data="data">
        <p style="margin: 0px;" slot="placeholder">自定义placeholder内容</p>
    </u-checkbox-card>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [],
        };
    },
};
</script>
```
### 自定义选择项
``` vue
<template>
<u-linear-layout>
    <u-checkbox-card :column="3" size="large" v-model="value" :data="data">
        <div style="display: inline-block;" slot-scope="scope">
            {{scope.data.text}}
            <span v-if="scope.data.error" style="width: 10px;height: 10px;padding: 0px;border-radius: 100%;display: inline-block;background: #ff8a7a;"></span>
        </div>
    </u-checkbox-card>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: [],
            data: [{
                text: 'jiande-private',
                value: '1',
            },{
                text: 'jiande-public',
                value: '2',
                disabled: true,
            },{
                text: 'yiqiao-public',
                value: '3',
                error: true,
            },{
                text: 'liantong-public',
                value: '4',
                disabled: true,
            },{
                text: 'region-1',
                value: '5',
            }],
        };
    },
};
</script>
```