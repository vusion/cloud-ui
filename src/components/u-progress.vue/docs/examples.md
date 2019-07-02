### 基本形式

基本使用
``` html
<u-progress :percent="10"></u-progress>
```

数值展示模板
``` html
<u-progress :percent="10">
    <u-link>10</u-link>
</u-progress>
```

整体大小
``` html
<u-progress :percent="10" size="large"></u-progress>
```

轨迹宽度
``` html
<u-progress :percent="10" :strokeWidth="8"></u-progress>
```

路径两端的形状
``` html
<u-progress :percent="10" strokeLinecap="butt"></u-progress>
<u-progress :percent="10" strokeLinecap="butt" type="dashboard"></u-progress>
```

数值回调方法
``` vue
<template>
    <div>
        <u-progress :percent="10.23333"></u-progress>
        <u-progress :percent="10.23333" :format="format"></u-progress>
    </div>
</template>
<script>
export default {
    methods: {
        format(value) {
            // 保留小数点后一位
            const intValue = parseInt(value);
            return (intValue === value ? intValue : Math.round(value * 10) / 10) + '%';
        },
    },
}
</script>
```


### 支持开口圆形
基本使用
``` html
<u-progress :percent="10" :gapDegrees="90"></u-progress>
```

定义开口大小
``` html
<u-progress :percent="10" :gapDegrees="150"></u-progress>
```

### 支持起始点定义

底部（默认）
``` html
<u-progress :percent="10" position="bottom"></u-progress>
<u-progress :percent="10" :gapDegrees="90" position="bottom"></u-progress>
```

顶部
``` html
<u-progress :percent="10" position="top"></u-progress>
<u-progress :percent="10" :gapDegrees="90" position="top"></u-progress>
```

左侧
``` html
<u-progress :percent="10" position="left"></u-progress>
<u-progress :percent="10" :gapDegrees="90" position="left"></u-progress>
```

右侧
``` html
<u-progress :percent="10" position="right"></u-progress>
<u-progress :percent="10" :gapDegrees="90" position="right"></u-progress>
```


### 支持不同类型

完整圆（默认）
``` html
<u-progress :percent="10" type="circle"></u-progress>
```

仪表盘
``` html
<u-progress :percent="10" type="dashboard"></u-progress>
```

分段【segments默认颜色只有2个，且顺序固定，如果需要更多或者不满意默认分段颜色，segments内的定义为对象】
``` html
<u-progress :percent="10" type="dashboard" :segments="[50]"></u-progress>
<u-progress :percent="10" type="dashboard" :segments="[50, 80]"></u-progress>
<u-progress :percent="60" type="dashboard" :segments="[50, 80]"></u-progress>
<u-progress :percent="90" type="dashboard" :segments="[50, 80]"></u-progress>
```

分段中，segment完全自定义
``` vue
<template>
    <div>
        <u-progress :percent="10" type="dashboard" :segments="segments1"></u-progress>
        <u-progress :percent="10" trailColor="#3ad0af" type="dashboard" :segments="segments2"></u-progress>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            segments1: [
                { percent: 50, color: 'red' },
            ],
            segments2: [
                { percent: 50, color: 'orange' }, 
                { percent: 80, color: 'red' },
            ],
        };
    },
    methods: {
        format(value) {
            const intValue = parseInt(value);
            return (intValue === value ? intValue : Math.round(value * 10) / 10) + '%';
        },
    },
}
</script>
```
