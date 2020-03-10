### 基本形式

``` html
<u-linear-layout>
    <u-old-suggest placeholder="输入时会自动提示">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="absent">absent</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="brief">brief</u-old-suggest-item>
        <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
        <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
    </u-old-suggest>
    <u-old-suggest value="bread">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="absent">absent</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="brief">brief</u-old-suggest-item>
        <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
        <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
    </u-old-suggest>
</u-linear-layout>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
    <u-old-suggest value="蛋糕" readonly>
        <u-old-suggest-item value="苹果">苹果</u-old-suggest-item>
        <u-old-suggest-item value="香蕉">香蕉</u-old-suggest-item>
        <u-old-suggest-item value="蛋糕">蛋糕</u-old-suggest-item>
    </u-old-suggest>
    <u-old-suggest value="蛋糕" disabled>
        <u-old-suggest-item value="苹果">苹果</u-old-suggest-item>
        <u-old-suggest-item value="香蕉">香蕉</u-old-suggest-item>
        <u-old-suggest-item value="蛋糕">蛋糕</u-old-suggest-item>
    </u-old-suggest>
    <u-old-suggest value="蛋糕">
        <u-old-suggest-item value="苹果">苹果</u-old-suggest-item>
        <u-old-suggest-item value="香蕉" disabled>香蕉</u-old-suggest-item>
        <u-old-suggest-item value="蛋糕">蛋糕</u-old-suggest-item>
    </u-old-suggest>
</u-linear-layout>
```

### 匹配方式

``` html
<u-linear-layout>
    <u-old-suggest match-method="includes" placeholder="包括即可（默认）">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="absent">absent</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="brief">brief</u-old-suggest-item>
        <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
        <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
    </u-old-suggest>
    <u-old-suggest match-method="startsWith" placeholder="只匹配开头">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="absent">absent</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="brief">brief</u-old-suggest-item>
        <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
        <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
    </u-old-suggest>
    <u-old-suggest match-method="endsWith" placeholder="只匹配结尾">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="absent">absent</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="brief">brief</u-old-suggest-item>
        <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
        <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
    </u-old-suggest>
</u-linear-layout>
```

### 区分大小写

默认不区分大小写，可用`case-sensitive`属性开启。

``` html
<u-linear-layout>
    <u-old-suggest placeholder="区分大小写">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="Absent">Absent</u-old-suggest-item>
        <u-old-suggest-item value="ABOUT">ABOUT</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="Break">Break</u-old-suggest-item>
        <u-old-suggest-item value="BRIEF">BRIEF</u-old-suggest-item>
    </u-old-suggest>
    <u-old-suggest case-sensitive placeholder="不区分大小写">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="Absent">Absent</u-old-suggest-item>
        <u-old-suggest-item value="ABOUT">ABOUT</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="Break">Break</u-old-suggest-item>
        <u-old-suggest-item value="BRIEF">BRIEF</u-old-suggest-item>
    </u-old-suggest>
</u-linear-layout>
```

### 严格模式

严格模式下，输入框中的值必须与某一个选项中的值完全匹配。

``` html
<u-linear-layout>
    <u-old-suggest placeholder="非严格模式">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="absent">absent</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="brief">brief</u-old-suggest-item>
        <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
        <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
    </u-old-suggest>
    <u-old-suggest strict placeholder="严格模式">
        <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
        <u-old-suggest-item value="absent">absent</u-old-suggest-item>
        <u-old-suggest-item value="bread">bread</u-old-suggest-item>
        <u-old-suggest-item value="brief">brief</u-old-suggest-item>
        <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
        <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
    </u-old-suggest>
</u-linear-layout>
```

### 数据源

使用标签或`data`属性添加数据时，均为静态的。如果想要动态更新数据，可以设置数据源属性。数据源为`DataSource`类型或普通函数，要求返回一个`Array<{ text, value }>`格式的数组或一个`Promise`对象。

#### 同步数据源

``` vue
<template>
<u-old-suggest placeholder="请输入邮箱" :data-source="fetchData"></u-old-suggest>
</template>
<script>
export default {
    methods: {
        fetchData({ filter }) {
            const prefix = filter.value.split('@')[0];
            if (!prefix)
                return [];
            else {
                return ['163.com', '126.com', 'vip.163.com', 'vip.126.com'].map((suffix) => {
                    const text = `${prefix}@${suffix}`;
                    return { text, value: text };
                });
            }
        },
    },
};
</script>
```

#### 异步数据源

``` vue
<template>
<u-old-suggest placeholder="请输入地名" :data-source="dataSource"></u-old-suggest>
</template>
<script>
import { utils } from 'library';

export default {
    created() {
        let data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        this.dataSource = new utils.DataSource({
            fetch({ filter }) {
                const value = filter.value.toLowerCase();
                // 这里使用 Promise 和 setTimeout 模拟一个 fetch 异步请求
                return new Promise((resolve, reject) => {
                    setTimeout((result) => {
                        resolve(data.filter((item) => item.value.toLowerCase().startsWith(value)));
                    }, 500);
                });
            },
        });
    },
}
</script>
```

#### 异步分页数据源

<!-- @TODO: 同步分页 -->

当过滤后数据量仍然很大时，可以分页加载异步数据。在`new DataSource`时，直接重写`loadMore`这个方法。该方法会传入相关的参数，并要求返回一个`Promise`对象。

``` vue
<template>
<u-old-suggest placeholder="请输入 item, info 或 test" :data-source="dataSource"></u-old-suggest>
</template>
<script>
import { utils } from 'library';

export default {
    created() {
        let data = [];
        for (let i = 1; i <= 1000; i++) {
            data.push('item' + i);
            data.push('info' + i);
            data.push('detail' + i);
        }
        data = data.map((text) => ({ text, value: text }));

        this.dataSource = new utils.DataSource({
            loadMore(params) {
                const value = params.filter.value.toLowerCase();

                // 这里使用 Promise 和 setTimeout 模拟一个异步请求
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data.filter((item) => item.value.includes(value))
                            .slice(params.offset, params.offset + params.limit)
                        );
                    }, 500);
                });
            },
        });
    },
}
</script>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-old-suggest size="mini" placeholder="mini">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="mini small" placeholder="mini small">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="mini normal" placeholder="mini normal">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="mini medium" placeholder="mini medium">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-suggest size="small mini" placeholder="small mini">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="small" placeholder="small">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="small normal" placeholder="small normal">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="small medium" placeholder="small medium">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-suggest size="normal mini" placeholder="normal mini">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="normal small" placeholder="normal small">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="normal" placeholder="normal">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="normal medium" placeholder="normal medium">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-suggest size="medium mini" placeholder="medium mini">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="medium small" placeholder="medium small">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="medium normal" placeholder="medium normal">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
        <u-old-suggest size="medium" placeholder="medium">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-suggest size="large" placeholder="large">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-suggest size="huge" placeholder="huge">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-suggest size="huge full" placeholder="huge full">
            <u-old-suggest-item value="abandon">abandon</u-old-suggest-item>
            <u-old-suggest-item value="absent">absent</u-old-suggest-item>
            <u-old-suggest-item value="bread">bread</u-old-suggest-item>
            <u-old-suggest-item value="brief">brief</u-old-suggest-item>
            <u-old-suggest-item value="calendar">calendar</u-old-suggest-item>
            <u-old-suggest-item value="cancel">cancel</u-old-suggest-item>
        </u-old-suggest>
    </u-linear-layout>
</u-linear-layout>
```
