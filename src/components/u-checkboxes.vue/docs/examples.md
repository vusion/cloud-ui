### 基本用法

``` html
<u-checkbox>多选框</u-checkbox>
```

### 双向绑定

``` vue
<template>
<u-linear-layout>
    <u-checkbox v-model="value">{{ value }}</u-checkbox>
    <u-checkbox :value.sync="value">{{ value }}</u-checkbox>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
    },
};
</script>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly>只读</u-checkbox>
    <u-checkbox :value="true" disabled>禁用</u-checkbox>
</u-linear-layout>
```

### 不确定状态

``` html
<u-checkbox :value="null">不确定</u-checkbox>
```

### 多选组

``` vue
<template>
<div>
    <u-checkboxes v-model="checkedList">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: ['毛巾', '沙发'],
        };
    },
};
</script>
```

### 数量限制

使用`min`和`max`属性可以限制选择项的数量。

``` vue
<template>
<div>
    <u-checkboxes :min="1" :max="2" v-model="checkedList">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: ['毛巾', '沙发'],
        };
    },
    methods: {
        add() {
            this.checkedList.push('水杯');
        },
    },
};
</script>
```

### 全选

``` vue
<template>
<div>
    <u-checkbox v-model="allChecked" @check="checkAll($event.value)">全选</u-checkbox>
    <u-checkboxes v-model="checkedList" @check="onCheck($event.value)">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            allChecked: false,
            checkedList: [],
        };
    },
    methods: {
        checkAll(checked) {
            this.checkedList = checked ? ['水杯', '坚果', '毛巾', '沙发'] : [];
        },
        onCheck(value) {
            if (this.checkedList.length === 4)
                this.allChecked = true;
            else if (this.checkedList.length === 0)
                this.allChecked = false;
            else
                this.allChecked = null;
        },
    },
};
</script>
```

### autofocus

``` html
<u-checkboxes>
    <u-checkbox label="水杯">水杯</u-checkbox>
    <u-checkbox label="坚果" autofocus>坚果</u-checkbox>
    <u-checkbox label="毛巾">毛巾</u-checkbox>
    <u-checkbox label="沙发">沙发</u-checkbox>
</u-checkboxes>
```
