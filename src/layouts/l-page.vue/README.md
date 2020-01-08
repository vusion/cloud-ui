<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# LPage 通用页面布局

只有顶部栏和底部栏的通用页面布局。

## 示例
滚动区域设置在了全局，内容会随窗口自适应。（下面的示例暂时体现不出现滚动效果）

### 基本用法

``` html
<div style="position: relative; z-index: 1; height: 500px; overflow: hidden;">
    <l-page demo>
        <u-navbar slot="head">
            <u-logo slot="left">演示</u-logo>
            <u-navbar-item href="/">首页</u-navbar-item>
            <u-navbar-item href="https://vusion.github.io" target="_blank">Vusion</u-navbar-item>
            <u-navbar-item href="https://github.com/vusion/cloud-ui" target="_blank">组件库</u-navbar-item>
            <u-navbar-item href="https://github.com/vusion-templates/admin-cloud-fs" target="_blank">GitHub</u-navbar-item>
            <div slot="right">
                <u-navbar-dropdown style="width: 100px; margin-right: 10px;">
                    <div slot="title">user</div>
                    <u-navbar-menu>
                        <u-navbar-menu-item to="/account/info">个人信息</u-navbar-menu-item>
                        <u-navbar-menu-item>安全退出</u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-dropdown>
            </div>
        </u-navbar>
        <u-linear-layout direction="vertical" style="padding: 40px;">
            <u-crumb>
                <u-crumb-item to="/">首页</u-crumb-item>
                <u-crumb-item to="/cloud-ui">原型组件</u-crumb-item>
                <u-crumb-item disabled>Navigation</u-crumb-item>
                <u-crumb-item to="/cloud-ui/u-crumb" current>面包屑</u-crumb-item>
            </u-crumb>
            <!--router-view></router-view-->
            <u-article>
                <h1>前赤壁赋</h1>
                <p>苏轼 公元1082年</p>
                <p>壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。</p>
                <p>于是饮酒乐甚，扣舷而歌之。歌曰：“桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。”客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。</p>
                <p>苏子愀然，正襟危坐，而问客曰：“何为其然也？”客曰：“‘月明星稀，乌鹊南飞。’此非曹孟德之诗乎？西望夏口，东望武昌。山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。"</p>
                <p>苏子曰：“客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎！且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭，是造物者之无尽藏也，而吾与子之所共适。”</p>
                <p>客喜而笑，洗盏更酌。肴核既尽，杯盘狼籍。相与枕藉乎舟中，不知东方之既白。</p>
            </u-article>
        </u-linear-layout>
    </l-page>
</div>
```

### 居中布局

使用`<l-page-center>`可以将内容限制在居中区域。

下面的示例为了方便展示，设置了`size="small"`属性。

``` html
<div style="position: relative; z-index: 1; height: 500px; overflow: hidden;">
    <l-page demo>
        <l-page-center size="small" slot="head">
            <u-navbar>
                <u-logo slot="left" style="margin-left: -20px;">演示</u-logo>
                <u-navbar-item href="/">首页</u-navbar-item>
                <u-navbar-item href="https://vusion.github.io" target="_blank">Vusion</u-navbar-item>
                <u-navbar-item href="https://github.com/vusion/cloud-ui" target="_blank">组件库</u-navbar-item>
                <div slot="right">
                    <u-navbar-dropdown style="width: 100px; margin-right: 10px;">
                        <div slot="title">user</div>
                        <u-navbar-menu>
                            <u-navbar-menu-item to="/account/info">个人信息</u-navbar-menu-item>
                            <u-navbar-menu-item>安全退出</u-navbar-menu-item>
                        </u-navbar-menu>
                    </u-navbar-dropdown>
                </div>
            </u-navbar>
        </l-page-center>
        <l-page-center size="small">
            <u-linear-layout direction="vertical" style="padding: 40px 0;">
                <u-crumb>
                    <u-crumb-item to="/">首页</u-crumb-item>
                    <u-crumb-item to="/cloud-ui">原型组件</u-crumb-item>
                    <u-crumb-item disabled>Navigation</u-crumb-item>
                    <u-crumb-item to="/cloud-ui/u-crumb" current>面包屑</u-crumb-item>
                </u-crumb>
                <!--router-view></router-view-->
                <u-article>
                    <h1>前赤壁赋</h1>
                    <p>苏轼 公元1082年</p>
                    <p>壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。</p>
                    <p>于是饮酒乐甚，扣舷而歌之。歌曰：“桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。”客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。</p>
                    <p>苏子愀然，正襟危坐，而问客曰：“何为其然也？”客曰：“‘月明星稀，乌鹊南飞。’此非曹孟德之诗乎？西望夏口，东望武昌。山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。"</p>
                    <p>苏子曰：“客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎！且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭，是造物者之无尽藏也，而吾与子之所共适。”</p>
                    <p>客喜而笑，洗盏更酌。肴核既尽，杯盘狼籍。相与枕藉乎舟中，不知东方之既白。</p>
                </u-article>
            </u-linear-layout>
        </l-page-center>
    </l-page>
</div>
```

### 区块布局

使用`<l-page-section>`可以快速添加区块。

``` html
<div style="position: relative; z-index: 1; height: 500px; overflow: hidden;">
    <l-page demo>
        <u-navbar slot="head">
            <u-logo slot="left" style="margin-left: -20px;">演示</u-logo>
            <u-navbar-item href="/">首页</u-navbar-item>
            <u-navbar-item href="https://vusion.github.io" target="_blank">Vusion</u-navbar-item>
            <u-navbar-item href="https://github.com/vusion/cloud-ui" target="_blank">组件库</u-navbar-item>
            <div slot="right">
                <u-navbar-dropdown style="width: 100px; margin-right: 10px;">
                    <div slot="title">user</div>
                    <u-navbar-menu>
                        <u-navbar-menu-item to="/account/info">个人信息</u-navbar-menu-item>
                        <u-navbar-menu-item>安全退出</u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-dropdown>
            </div>
        </u-navbar>
        <l-page-section>
            <u-article>
                <h1>前赤壁赋</h1>
                <p>苏轼 公元1082年</p>
                <p>壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。</p>
            </u-article>
        </l-page-section>
        <l-page-section>
            <u-article>
                <p>于是饮酒乐甚，扣舷而歌之。歌曰：“桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。”客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。</p>
                <p>苏子愀然，正襟危坐，而问客曰：“何为其然也？”客曰：“‘月明星稀，乌鹊南飞。’此非曹孟德之诗乎？西望夏口，东望武昌。山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。"</p>
            </u-article>
        </l-page-section>
        <l-page-section>
            <u-article>
                <p>苏子曰：“客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎！且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭，是造物者之无尽藏也，而吾与子之所共适。”</p>
                <p>客喜而笑，洗盏更酌。肴核既尽，杯盘狼籍。相与枕藉乎舟中，不知东方之既白。</p>
            </u-article>
        </l-page-section>
    </l-page>
</div>
```

## LPage API
### Slots

#### (default)

主内容区。

#### head

设置顶部内容。

#### foot

设置底部内容。

## LPageCenter API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| size | enum | `'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'` | `'normal'` | 宽度大小。 |

### Slots

#### (default)

插入 HTML 或文本。

## LPageSection API
### Slots

#### (default)

插入 HTML 或文本。
