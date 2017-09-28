# 网格布局
## 示例
### 定义12栅格系统,repeat参数定义栅格列数,span参数定义列跨越的栅格数
``` html
<u-grid-row :repeat="12" style="margin-bottom:10px">
	<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
</u-grid-row>
<u-grid-row :repeat="24" style="margin-bottom:10px">
	<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">2/24</div></u-grid-column>
	<u-grid-column :span="5"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">5/24</div></u-grid-column>
	<u-grid-column :span="7"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">7/24</div></u-grid-column>
	<u-grid-column :span="10"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">10/24</div></u-grid-column>
</u-grid-row>
<u-grid-row :repeat="5" style="margin-bottom:10px">
	<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">2/5</div></u-grid-column>
	<u-grid-column :span="3"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">3/5</div></u-grid-column>
</u-grid-row>
```
### gaps参数定义列间隔 10px
```html
<u-grid-row :gaps="10" :repeat="10"  style="margin-bottom:10px">
	<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/10</div></u-grid-column>
	<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">2/10</div></u-grid-column>
	<u-grid-column :span="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/10</div></u-grid-column>
	<u-grid-column :span="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/10</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" :repeat="10"  style="margin-bottom:10px">
	<u-grid-column :span="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/10</div></u-grid-column>
	<u-grid-column :span="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/10</div></u-grid-column>
	<u-grid-column :span="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/10</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" :repeat="10"  style="margin-bottom:10px">
	<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">2/10</div></u-grid-column>
	<u-grid-column :span="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/10</div></u-grid-column>
	<u-grid-column :span="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/10</div></u-grid-column>
</u-grid-row>
```
### offset参数定义列偏移 
```html
<u-grid-row :repeat="12"  style="margin-bottom:10px">
	<u-grid-column :span="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/12</div></u-grid-column>
	<u-grid-column :span="4" :offset="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/12 offset=4</div></u-grid-column>
</u-grid-row>
<u-grid-row :repeat="12"  style="margin-bottom:10px">
	<u-grid-column :span="3" :offset="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/12 offset=3</div></u-grid-column>
	<u-grid-column :span="3" :offset="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/12 offset=3</div></u-grid-column>
</u-grid-row>
```
### push,pull参数定义列排序
``` html
<u-grid-row :gaps="10" :repeat="10" style="margin-bottom:10px">
	<u-grid-column :span="4" :push="6"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">6/10 push=6</div></u-grid-column>
	<u-grid-column :span="6" :pull="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/10 pull=4</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" :repeat="10" style="margin-bottom:10px">
	<u-grid-column :span="2" :push="8"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">2/10 push=8</div></u-grid-column>
	<u-grid-column :span="3" :push="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/10 push=5</div></u-grid-column>
	<u-grid-column :span="5" :pull="5"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">5/10 push=5</div></u-grid-column>
</u-grid-row>
```
### unit参数定义栅格单位
``` html
<u-grid-row :gaps="10" unit="px" style="margin-bottom:10px">
	<u-grid-column :span="300"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">200px</div></u-grid-column>
	<u-grid-column :span="300" :offset="360"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">300px offset=360px</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" unit="px" style="margin-bottom:10px">
	<u-grid-column :span="360" :push="600"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">360px push=600px</div></u-grid-column>
	<u-grid-column :span="600" :pull="360"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">600 push=360px</div></u-grid-column>
</u-grid-row>
```
### flex模式,可不指定span
``` html
<u-grid-row :gaps="10" :repeat="10" type="flex" justify="center" style="margin-bottom:10px">
	<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">span=2 center</div></u-grid-column>
	<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">span=2 center</div></u-grid-column>
	<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">span=2 center</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" type="flex" justify="center" style="margin-bottom:10px">
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">center</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" type="flex" justify="center" style="margin-bottom:10px">
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">center</div></u-grid-column>
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">center</div></u-grid-column>
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">center</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" type="flex" justify="space-between" style="margin-bottom:10px">
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-between</div></u-grid-column>
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-between</div></u-grid-column>
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-between</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" type="flex" justify="space-around" style="margin-bottom:10px">
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-around</div></u-grid-column>
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-around</div></u-grid-column>
	<u-grid-column><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-around</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" type="flex" justify="space-around" style="margin-bottom:10px">
	<u-grid-column flex-type="item" flex="auto"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">flex=auto space-between</div></u-grid-column>
	<u-grid-column flex-type="item" flex="auto"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">flex=auto space-between</div></u-grid-column>
	<u-grid-column flex-type="item" flex="auto"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">flex=auto space-between</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" type="flex" justify="space-around" align-items="center" direction="column" style="margin-bottom:10px;height:200px;border:1px solid #67aaf5">
	<u-grid-column flex-type="item" flex="none"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-around</div></u-grid-column>
	<u-grid-column flex-type="item" flex="none"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-around</div></u-grid-column>
	<u-grid-column flex-type="item" flex="none"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-around</div></u-grid-column>
</u-grid-row>
<u-grid-row :gaps="10" type="flex" justify="center" style="margin-bottom:10px;height:100px;border:1px solid #67aaf5">
	<u-grid-column flex-type="item" flex="none" align-self="center"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">center</div></u-grid-column>
</u-grid-row>
```
### flex模式,可不指定span
``` html

```

## ROW API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| repeat | Number | `24` | 划分的栅格数 |
| gaps | Number | `0` | 栅格列之间的间隔 |
| unit | String | `%` | 栅格单位,为px时参数数值计算为像素值,repeat参数此时不起作用 |
| type | String | `undefined` | 布局模式，可选flex |


## COLUNM API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| span | Number | `undefined` | 列跨越的栅格数 |
| offset | Number | `0` | 列左边间隔栅格数 |
| pull | Number | `undefined` | 列向左移动栅格数 |
| push | Number | `undefined` | 列向右移动栅格数 |
## FLEX API
### Attrs/Props
| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| flexType | String | `container` | 元素作为flex布局的类型 container/item|
| justify | String | `stretch` | flex布局的justify-content值 |
| alignContent | String | `stretch` | flex布局的justify-content值 |
| alignItems | String | `stretch` | flex布局的align-content值 |
| alignSelf | String | `auto` | flex布局的align-items值 |
| direction | String | `row` | flex布局的align-self值 |
| flex | String | `auto` | flex布局的flex值 |
