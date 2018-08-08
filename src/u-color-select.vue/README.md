# 颜色选择框 ColorSelect

## 示例
### 基本形式

``` vue
<template>
<u-color-select :options="options" :value="value" @select="select($event.value)"></u-color-select>
</template>

<script>
export default {
    data() {
        return {
            value: '#EE867D',
            options: [
                {
                    value: '#EE867D',
                },
                {
                    value:'#805DCF'
                },
                {
                    value:'#40CCCA'
                },
                {
                    value:'#FFCA12'
                },
                {
                    value:'#30A8DC'
                },
                {
                    value:'#E1AEF6'
                },
                {
                    value:'#D2D2D2'
                },
            ],
        };
    },
    methods: {
        select(value) {
            console.log(value);
            this.value = value;
        }
    },
};
</script>
```
### 文字


``` vue
<template>
<u-color-select :options="options" :value="value"></u-color-select>
</template>

<script>
export default {
    data() {
        return {
            value: '#EE867D',
            options: [
                {
                    name: '粉色',
                    value: '#EE867D',
                },
                {
                    name: '粉色',
                    value:'#805DCF'
                },
                {
                    name: '粉色',
                    value:'#40CCCA'
                },
                {
                    name: '粉色',
                    value:'#FFCA12'
                },
                {
                    name: '粉色',
                    value:'#30A8DC'
                },
                {
                    name: '粉色',
                    value:'#E1AEF6'
                },
                {
                    name: '粉色',
                    value:'#D2D2D2'
                },
            ],
        };
    }
};
</script>
```

### 只读、禁用、禁用某一项

``` vue
<template>
<u-linear-layout>
    <u-color-select :options="optionsOne" :value="value" readonly></u-color-select>
    <u-color-select :options="optionsOne" :value="value" disabled></u-color-select>
    <u-color-select :options="optionsTwo" :value="value"></u-color-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        const option = [
            {
                value: '#EE867D',
            },
            {
                value:'#40CCCA'
            },
            {
                value:'#FFCA12'
            },
            {
                value:'#30A8DC'
            },
            {
                value:'#E1AEF6'
            },
            {
                value:'#D2D2D2'
            },
        ];
        return {
            value: '#EE867D',
            optionsOne: option,
            optionsTwo: [{
                name: '我被禁用了',
                value:'#805DCF',
                disabled: true,
            }, ...option]
        };
    }
};
</script>
```

## ColorSelect API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| options | Array\< { value, ...arg } \> || 书写颜色哈希值的列表，可额外书写`name`,`disabled`的值 |
| value | String || 选中的颜色 |
| width | String/Number | `'160'` | 输入框长度 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @select

选中列表项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | Object | 选中后的列表对象 |
| $event.value | String | 选中后的列表对象的值 |

#### @change

开关状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | Object | 改变后的列表对象 |
| $event.value | String | 改变后的列表对象的值 |
