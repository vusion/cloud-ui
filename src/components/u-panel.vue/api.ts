/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '面板',
        icon: 'panel',
        description: '用于快速布局',
        group: 'Container'
    })
    export class UPanel extends ViewComponent {

        constructor(options?: Partial<UPanelOptions>) { super(); }
    }

    export class UPanelOptions  extends ViewComponentOptions {
        @Prop({
            title: '内容',
            description: '面板内容',
        })
        private content: nasl.core.String = '';

        @Prop({
            group: '主要属性',
            title: '标题',
            description: '面板项的标题',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/03.%E5%AE%B9%E5%99%A8/030.%E9%9D%A2%E6%9D%BF.html',
            docDescription: '面板组的标题',
        })
        private title: nasl.core.String;

        @Prop({
            group: '样式属性',
            title: '显示边框',
            description: '设置是否显示边框',
            docDescription: '支持配置面板边框的显示和隐藏，默认显示',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        bordered: nasl.core.Boolean = true;

        @Prop({
            group: '样式属性',
            title: '阴影',
            description: '阴影显示方式',
            docDescription: `支持配置面板阴影状态，默认为一直显示。- 一直显示：常态显示面板阴影。
- hover时显示：鼠标悬停在面板区域时显示面板阴影。
- 不显示：不显示面板阴影`,
            setter: {
                concept: 'EnumSelectSetter',
                options: [
                    { title: '一直显示' },
                    { title: 'hover时显示' },
                    { title: '不显示' },
                ],
            }
        })
        shadow: 'always' | 'hover' | 'never' = 'always';

        @Slot({
            title: '默认',
            description: '插入`<u-panel-group>`子组件。',
            snippets: [
                {
                    title: '面板组',
                    code: '<u-panel-group><template #title><u-text text="面板组"></u-text></template>面板项</u-panel-group>',
                },
            ],
        })
        slotDefault: () => Array<UPanelGroup | ViewComponent>;

        @Slot({
            title: '标题',
            description: '标题自定义',
        })
        slotTitle: () => Array<ViewComponent>;

        @Slot({
            title: '额外信息',
            description: '额外信息自定义',
        })
        slotExtra: () => Array<ViewComponent>;
    }

    @Component({
        title: '面板组',
        description: '面板组',
    })
    class UPanelGroup extends ViewComponent {

        constructor(options?: Partial<UPanelGroupOptions>) { super(); }
    }

    class UPanelGroupOptions  extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '标题',
            description: '面板项的标题',
            docDescription: '面板组的标题',
        })
        title: nasl.core.String;

        @Slot({
            title: 'undefined',
            description: '插入默认的元素',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: '标题',
            description: '标题自定义',
        })
        slotTitle: () => Array<ViewComponent>;
    }
}
