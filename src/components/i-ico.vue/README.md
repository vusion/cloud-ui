<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# IIco 图标

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Display**

图标

## 示例
### 基本用法

``` html
<u-linear-layout>
    <i-ico name=refresh><u-text>刷新</u-text></i-ico>
    <i-ico name=download><u-text>下载</u-text></i-ico>
    <i-ico name=upload><u-text>上传</u-text></i-ico>
    <i-ico name=default><u-text>默认</u-text></i-ico>
    <i-ico name=left-arrow><u-text>左箭头</u-text></i-ico>
    <i-ico name=right-arrow><u-text>右箭头</u-text></i-ico>
    <i-ico name=top-arrow><u-text>上箭头</u-text></i-ico>
    <i-ico name=bottom-arrow><u-text>下箭头</u-text></i-ico>
    <i-ico name=close><u-text>关闭</u-text></i-ico>
    <i-ico name=add><u-text>添加</u-text></i-ico>
    <i-ico name=search><u-text>搜索</u-text></i-ico>
    <i-ico name=more><u-text>更多</u-text></i-ico>
    <i-ico name=home><u-text>首页</u-text></i-ico>
    <i-ico name=task><u-text>任务</u-text></i-ico>
    <i-ico name=task-failed><u-text>任务失败</u-text></i-ico>
    <i-ico name=task-done><u-text>任务成功</u-text></i-ico>
    <i-ico name=file><u-text>文件</u-text></i-ico>
    <i-ico name=calendar><u-text>日历</u-text></i-ico>
    <i-ico name=user><u-text>用户</u-text></i-ico>
    <i-ico name=edit><u-text>编辑</u-text></i-ico>
    <i-ico name=find><u-text>查找</u-text></i-ico>
    <i-ico name=copy><u-text>复制</u-text></i-ico>
    <i-ico name=data><u-text>数据</u-text></i-ico>
    <i-ico name=remove><u-text>删除</u-text></i-ico>
    <i-ico name=save><u-text>保存</u-text></i-ico>
    <i-ico name=time><u-text>时间</u-text></i-ico>
    <i-ico name=info><u-text>提醒</u-text></i-ico>
    <i-ico name=help><u-text>帮助</u-text></i-ico>
    <i-ico name=success><u-text>成功</u-text></i-ico>
    <i-ico name=error><u-text>失败</u-text></i-ico>
    <i-ico name=star><u-text>收藏</u-text></i-ico>
    <i-ico name=attachment><u-text>附件</u-text></i-ico>
    <i-ico name=notice><u-text>通知</u-text></i-ico>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| name | icon |  | `''` |  |
| linkType | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'href'` |  |
| hrefAndTo | string |  |  |  |
| target | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'_self'` | 链接打开方式 |

### Events

#### @click

点击此项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @dblclick

双击此项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @rightclick

右键点击此项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @over

鼠标移入此项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @out

鼠标移出此项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @down

鼠标按下此项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

