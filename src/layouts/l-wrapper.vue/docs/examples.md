在设置 VueRouter 时，经常会遇到这样的场景：模块需要显示一些内容，往往要重定向到第一个子路由（比如列表页面），而它自身只要配一个什么都不做的容器组件。

它的模板很简单：

``` htm
<div><router-view></router-view></div>
```

### 基本用法

``` js
import { LWrapper } from 'cloud-ui.vusion';

{ path: 'blog', component: LWrapper, children: [
    { path: 'list', component: import(/* webpackChunkName: blog */ './list') },
    { path: 'detail', component: import(/* webpackChunkName: blog */ './detail') },
    { path: 'create', component: import(/* webpackChunkName: blog */ './create') },
    { path: 'modify', component: import(/* webpackChunkName: blog */ './modify') },
] };
```
