### 基本形式

``` vue
<template>
<u-linear-layout style="height:100px">
    <u-search-input :loadList="loadList"></u-search-input>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
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
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```
### 搜索内容双向绑定

u-search-input与一般的u-input不太相同，u-search-input用户可绑定的数据有两个searchWord与value，其中searchWord是input输入框中的实际值，value为用户选择值的对象，这种设计方式主要是有些业务场景中使用者只关心input中的输入值，而有些场景下使用者需要的是loaderList中的value值而不是text。任选其一作为双向绑定的参数,searchWord实时变化，而value只有选中某一个值是才会出现变动其等于loadlist中的选中项

``` vue
<template>
<div>
    <div>
        <u-search-input v-model="value" :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
    <div style="margin-top:20px;">
        <u-search-input :searchWord.sync="searchWord" :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: {
                text: 'jiande-private',
                value: '1',
            },
            searchWord: 'yiqiao-public',
            list: [{
                text: '建德',
                value: 'jiande',
                children: [{
                    text: 'jiande-private',
                    description: '建德私有云环境',
                    value: '1',
                },{
                    text: 'jiande-public',
                    description: '建德公有云环境',
                    value: '2',
                }]
            }, {
                text: '义桥',
                value: 'yiqiao',
                children: [{
                    text: 'yiqiao-public',
                    description: '义桥公有云环境',
                    value: '3',
                }],
            }, {
                text: '联通',
                value: 'liantong',
                children: [{
                    text: 'liantong-public',
                    description: '联通公有云环境',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'region云环境',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```

### searchWord与value一致性检查

value与searchWord存在偏差，所以在此提供keyWord与value的一致性检查开关，设置为true将在输入框失焦时检查并同步keyWord为value的text

``` vue
<template>
<div>
    <div>
        <u-search-input v-model="value" :valueCheck="true"  :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: {
                text: 'jiande-private',
                value: '1',
            },
            list: [{
                text: '建德',
                value: 'jiande',
                children: [{
                    text: 'jiande-private',
                    description: '建德私有云环境',
                    value: '1',
                },{
                    text: 'jiande-public',
                    description: '建德公有云环境',
                    value: '2',
                }]
            }, {
                text: '义桥',
                value: 'yiqiao',
                children: [{
                    text: 'yiqiao-public',
                    description: '义桥公有云环境',
                    value: '3',
                }],
            }, {
                text: '联通',
                value: 'liantong',
                children: [{
                    text: 'liantong-public',
                    description: '联通公有云环境',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'region云环境',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```

### 下拉框位置偏移
``` vue
<template>
<div>
    <div>
        <u-search-input :offset="20" :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                text: '建德',
                value: 'jiande',
                children: [{
                    text: 'jiande-private',
                    description: '建德私有云环境',
                    value: '1',
                },{
                    text: 'jiande-public',
                    description: '建德公有云环境',
                    value: '2',
                }]
            }, {
                text: '义桥',
                value: 'yiqiao',
                children: [{
                    text: 'yiqiao-public',
                    description: '义桥公有云环境',
                    value: '3',
                }],
            }, {
                text: '联通',
                value: 'liantong',
                children: [{
                    text: 'liantong-public',
                    description: '联通公有云环境',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'region云环境',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```
### 输入框尺寸
搜索输入框尺寸设置方式与u-input相同，通过设置与u-input相同size尺寸可以控制达到所有u-input效果
``` vue
<template>
<div>
<u-linear-layout style="height:100px">
    <u-search-input :loadList="loadList"></u-search-input>
</u-linear-layout>
<u-linear-layout style="height:100px">
    <u-search-input size="large" :loadList="loadList"></u-search-input>
</u-linear-layout>
<u-linear-layout style="height:100px">
    <u-search-input size="huge" :loadList="loadList"></u-search-input>
</u-linear-layout>
</div>
</template>
<script>
export default {
    data() {
        return {
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
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```
### 可清除
搜索输入框尺寸设置方式与u-input相同，通过设置与u-input相同size尺寸可以控制达到所有u-input效果
``` vue
<template>
<u-linear-layout style="height:100px">
    <u-search-input :loadList="loadList" clearable></u-search-input>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
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
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```
### 搜索图标
``` vue
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable></u-search-input>
    </div>
    <div style="margin-top:20px;">
        <u-search-input :loadList="loadList" size="large" search="right"  clearable></u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
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
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```

### 自定义搜索列表项
``` vue
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable>
            <div slot-scope="scope">
                <p style="margin: 5px 0px;line-height: 12px;">{{scope.item.text}}</p>
                <p style="margin: 5px 0px;color: #2333;line-height: 12px;">{{scope.item.description}}</p>
            </div>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                text: 'jiande-private',
                description: '建德私有云环境',
                value: '1',
            },{
                text: 'jiande-public',
                description: '建德公有云环境',
                value: '2',
            },{
                text: 'yiqiao-public',
                description: '义桥公有云环境',
                value: '3',
            },{
                text: 'liantong-public',
                description: '联通公有云环境',
                value: '4',
            },{
                text: 'region-1',
                description: 'region云环境',
                value: '5',
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```

### 自定义搜索列表项
``` vue
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable>
            <div slot-scope="scope">
                <p style="margin: 5px 0px;line-height: 12px;">{{scope.item.text}}</p>
                <p style="margin: 5px 0px;color: #2333;line-height: 12px;">{{scope.item.description}}</p>
            </div>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                text: 'jiande-private',
                description: '建德私有云环境',
                value: '1',
            },{
                text: 'jiande-public',
                description: '建德公有云环境',
                value: '2',
            },{
                text: 'yiqiao-public',
                description: '义桥公有云环境',
                value: '3',
            },{
                text: 'liantong-public',
                description: '联通公有云环境',
                value: '4',
            },{
                text: 'region-1',
                description: 'region云环境',
                value: '5',
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            return this.data.filter((item) => {
                return item.text.includes(keyWord);
            });
        },
    }
};
</script>
```

### 搜索内容分组
``` vue
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable>
            <div slot-scope="scope">
                <p style="margin: 5px 0px;line-height: 12px;">{{scope.item.text}}</p>
                <p style="margin: 5px 0px;color: #2333;line-height: 12px;">{{scope.item.description}}</p>
            </div>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                text: '建德',
                value: 'jiande',
                children: [{
                    text: 'jiande-private',
                    description: '建德私有云环境',
                    value: '1',
                },{
                    text: 'jiande-public',
                    description: '建德公有云环境',
                    value: '2',
                }]
            }, {
                text: '义桥',
                value: 'yiqiao',
                children: [{
                    text: 'yiqiao-public',
                    description: '义桥公有云环境',
                    value: '3',
                }],
            }, {
                text: '联通',
                value: 'liantong',
                children: [{
                    text: 'liantong-public',
                    description: '联通公有云环境',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'region云环境',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```
### 自定义搜索内容分组
``` vue
<template>
<div>
    <div>
        <u-search-input :loadList="loadList" size="large" search="left" clearable>
            <u-linear-layout justify="space-between" style="padding:5px 10px;border-bottom:1px solid #dfe4ec;border-top:1px solid #dfe4ec;" slot="header" slot-scope="scope">
                <span>{{scope.group.title}}</span>
                <u-link>查看更多</u-link>
            </u-linear-layout>
            <div slot-scope="scope">
                <p style="margin: 5px 0px;line-height: 12px;">{{scope.item.text}}</p>
                <p style="margin: 5px 0px;color: #2333;line-height: 12px;">{{scope.item.description}}</p>
            </div>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                text: '建德',
                value: 'jiande',
                children: [{
                    text: 'jiande-private',
                    description: '建德私有云环境',
                    value: '1',
                },{
                    text: 'jiande-public',
                    description: '建德公有云环境',
                    value: '2',
                }]
            }, {
                text: '义桥',
                value: 'yiqiao',
                children: [{
                    text: 'yiqiao-public',
                    description: '义桥公有云环境',
                    value: '3',
                }],
            }, {
                text: '联通',
                value: 'liantong',
                children: [{
                    text: 'liantong-public',
                    description: '联通公有云环境',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'region云环境',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```

### 默认占位提示

``` vue
<template>
<div>
    <div>
        <u-search-input placeholder="请输入环境名称" :valueCheck="true"  :loadList="loadList" size="large" search="left" clearable>
        </u-search-input>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                text: '建德',
                value: 'jiande',
                children: [{
                    text: 'jiande-private',
                    description: '建德私有云环境',
                    value: '1',
                },{
                    text: 'jiande-public',
                    description: '建德公有云环境',
                    value: '2',
                }]
            }, {
                text: '义桥',
                value: 'yiqiao',
                children: [{
                    text: 'yiqiao-public',
                    description: '义桥公有云环境',
                    value: '3',
                }],
            }, {
                text: '联通',
                value: 'liantong',
                children: [{
                    text: 'liantong-public',
                    description: '联通公有云环境',
                    value: '4',
                }],
            }, {
                text: 'region',
                value: 'region',
                children: [{
                    text: 'region-1',
                    description: 'region云环境',
                    value: '5',
                }],
            }],
        };
    },
    methods: {
        loadList(keyWord) {
            const result = {};
            for (const item of this.list) {
                for (const region of item.children) {
                    if (region.text.includes(keyWord)) {
                        const group = item.value;
                        if(!result[group]) {
                            result[group] = {
                                title: item.text,
                                children: [],
                            }
                        }
                        result[group].children.push(region);
                    }
                }
            }
            return Object.keys(result).map((name) => {
                return result[name];
            });
        },
    }
};
</script>
```