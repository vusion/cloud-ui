### 基本用法

默认为单选模式，通过`placeholder`属性设置初始占位符。添加选择项支持两种书写方式：

#### tag 方式

在有少量静态数据的时候，推荐使用这种方式。

``` html
<u-linear-layout>
    <u-select>
        <u-select-item value="java">Java</u-select-item>
        <u-select-item value="python">Python</u-select-item>
        <u-select-item value="nodejs">Node.js</u-select-item>
        <u-select-item value="go">Go</u-select-item>
        <u-select-item value=".net">.NET</u-select-item>
        <u-select-item value="php">PHP</u-select-item>
    </u-select>
    <u-select placeholder="设置占位符">
        <u-select-item value="java">Java</u-select-item>
        <u-select-item value="python">Python</u-select-item>
        <u-select-item value="nodejs">Node.js</u-select-item>
        <u-select-item value="go">Go</u-select-item>
        <u-select-item value=".net">.NET</u-select-item>
        <u-select-item value="php">PHP</u-select-item>
    </u-select>
</u-linear-layout>
```

#### data-source 方式

在有较大量数据或者后端请求数据的时候，推荐使用这种方式。

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="data"></u-select>
    <u-select :data-source="data" placeholder="设置占位符"></u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: 'Batch', value: 'bat' },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'CSS', value: 'css' },
                { text: 'Clojure', value: 'clojure' },
                { text: 'CoffeeScript', value: 'coffeescript' },
                { text: 'Coq', value: 'coq' },
                { text: 'Diff', value: 'diff' },
                { text: 'Dockerfile', value: 'dockerfile' },
                { text: 'F#', value: 'fshape' },
                { text: 'Go', value: 'go' },
                { text: 'Groovy', value: 'groovy' },
                { text: 'HLSL', value: 'hlsl' },
                { text: 'HTML', value: 'html' },
                { text: 'Handlebars', value: 'Handlebars' },
                { text: 'Ignore', value: 'ignore' },
                { text: 'Ini', value: 'ini' },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Jinja', value: 'jinja' },
                { text: 'Jupyter', value: 'jupyter' },
                { text: 'Less', value: 'less' },
                { text: 'Log', value: 'log' },
                { text: 'Lua', value: 'lua' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Properties', value: 'properties' },
                { text: 'Pug', value: 'jade' },
                { text: 'Python', value: 'python' },
                { text: 'R', value: 'r' },
                { text: 'Razor', value: 'razor' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'Rust', value: 'rust' },
                { text: 'SCSS', value: 'scss' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shaderlab', value: 'shaderlab' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'TypeScript', value: 'typescript' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'Vue', value: 'vue' },
                { text: 'XML', value: 'xml' },
                { text: 'XSL', value: 'xsl' },
                { text: 'YAML', value: 'yaml' },
            ],
        };
    },
};
</script>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

``` vue
<template>
<u-linear-layout>
    <u-select v-model="value" placeholder="v-model">
        <u-select-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</u-select-item>
    </u-select>
    <u-select :value.sync="value" :data="list" placeholder=":value.sync"></u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: 'towel',
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Python', value: 'python' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: '.NET', value: '.net' },
                { text: 'PHP', value: 'php' },
            ],
        };
    },
};
</script>
```

### 禁用状态、禁用某一项

``` html
<u-linear-layout>
    <u-select value="nut" disabled>
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
    </u-select>
    <u-select value="nut">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee" disabled>咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
    </u-select>
</u-linear-layout>
```

#### 为空禁用

有时在没有数据的情况下，不希望用户进行选择。使用`empty-disabled`属性自动禁用掉这种情况。

``` html
<u-select value="nut" empty-disabled placeholder="暂无选项"></u-select>
```

### 分隔符

``` html
<u-select value="nut">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="toothbrush">牙刷</u-select-item>
    <u-select-divider></u-select-divider>
    <u-select-item value="nut">坚果</u-select-item>
    <u-select-item value="towel">毛巾</u-select-item>
    <u-select-item value="sofa">沙发</u-select-item>
</u-select>
```

### 分组

``` html
<u-select>
    <u-select-group title="洗具">
        <u-select-item>毛巾</u-select-item>
        <u-select-item>牙刷</u-select-item>
    </u-select-group>
    <u-select-group title="杯具">
        <u-select-item>牙缸</u-select-item>
        <u-select-item>水杯</u-select-item>
    </u-select-group>
    <u-select-group title="餐具">
        <u-select-item>筷子</u-select-item>
        <u-select-item>碗</u-select-item>
    </u-select-group>
</u-select>
```

### 可清除

``` html
<u-select value="coffee" clearable>
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="coffee">咖啡</u-select-item>
    <u-select-item value="nut">坚果</u-select-item>
</u-select>
```

### 多选模式

通过`multiple`属性开启多选模式。可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue
<template>
<u-select multiple v-model="values">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="coffee">咖啡</u-select-item>
    <u-select-item value="nut">坚果</u-select-item>
    <u-select-item value="towel">毛巾</u-select-item>
    <u-select-item value="sofa">沙发</u-select-item>
</u-select>
</template>
<script>
export default {
    data() {
        return {
            values: ['nut', 'towel'],
        };
    },
};
</script>
```

### Tags 风格

Tags 过多时如何显示。

``` vue
<template>
<u-linear-layout>
    <u-select multiple tags-overflow="hidden" v-model="value" placeholder="过多时省略">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <u-select multiple tags-overflow="collapse" v-model="value" placeholder="过多时收缩">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <u-select multiple tags-overflow="visible" v-model="value" placeholder="过多时显示">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: ['sofa', 'nut', 'towel'],
        };
    },
};
</script>
```

### 可以重复

设置`duplicated`属性可以让选项重复。

``` vue
<template>
<u-select multiple duplicated v-model="values">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="coffee">咖啡</u-select-item>
    <u-select-item value="nut">坚果</u-select-item>
    <u-select-item value="towel">毛巾</u-select-item>
    <u-select-item value="sofa">沙发</u-select-item>
</u-select>
</template>
<script>
export default {
    data() {
        return {
            values: ['nut', 'towel', 'nut'],
        };
    },
};
</script>
```

### Flag

``` html
<u-select value="C">
    <u-select-item value="A">苹果</u-select-item>
    <u-select-item value="B" flag>香蕉</u-select-item>
    <u-select-item value="C" flag="默认选项">蛋糕</u-select-item>
</u-select>
```

### Label

``` html
<u-select value="C" label="CPU">
    <u-select-item value="A">1核</u-select-item>
    <u-select-item value="B">2核</u-select-item>
    <u-select-item value="C">4核</u-select-item>
</u-select>
```

### Layer

``` html
<u-select value="C">
    <u-select-item value="A">苹果</u-select-item>
    <u-select-item value="B" flag layer="high">香蕉</u-select-item>
    <u-select-item value="C" flag="默认选项" layer="high">蛋糕</u-select-item>
</u-select>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-select size="mini" placeholder="mini">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="mini small" placeholder="mini small">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="mini normal" placeholder="mini normal">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="mini medium" placeholder="mini medium">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="small mini" placeholder="small mini">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="small" placeholder="small">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="small normal" placeholder="small normal">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="small medium" placeholder="small medium">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="normal mini" placeholder="normal mini">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="normal small" placeholder="normal small">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="normal" placeholder="normal">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="normal medium" placeholder="normal medium">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="medium mini" placeholder="medium mini">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="medium small" placeholder="medium small">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="medium normal" placeholder="medium normal">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
        <u-select size="medium" placeholder="medium">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="large" placeholder="large">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="huge" placeholder="huge">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
    <u-linear-layout>
        <u-select size="huge full" placeholder="huge full">
            <u-select-item>苹果</u-select-item>
            <u-select-item>香蕉</u-select-item>
            <u-select-item>蛋糕</u-select-item>
        </u-select>
    </u-linear-layout>
</u-linear-layout>
```
