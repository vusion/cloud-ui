/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '卡片',
        icon: 'card',
        description: '用于快速布局',
    })
    export class UCard extends VueComponent {

        constructor(options?: Partial<UCardOptions>) { super(); }
    }

    export class UCardOptions {
        @Prop({
            group: '主要属性',
            title: '标题',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/03.%E5%AE%B9%E5%99%A8/050.%E5%8D%A1%E7%89%87.html',
        })
        private title: nasl.core.String;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置卡片宽度，可设置为像素或百分比',
            docDescription: '卡片宽度，支持设置像素或是百分比',
        })
        width: nasl.core.String;

        @Prop({
            group: '样式属性',
            title: '阴影',
            description: '卡片阴影显示时机',
            docDescription: `支持配置卡片阴影状态，默认为一直显示。
- 一直显示：常态显示卡片阴影。
- hover时显示：鼠标悬停在卡片区域时显示卡片阴影。
- 不显示：不显示卡片阴影`,
            setter: {
                type: 'enumSelect',
                titles: ['一直显示', 'hover时显示', '不显示'],
            },
        })
        shadow: 'always' | 'hover' | 'never' = 'always';

        @Prop({
            group: '样式属性',
            title: '显示边框',
            docDescription: '控制卡片边框的显隐，默认开启',
            setter: {
                type: 'switch',
            },
        })
        border: nasl.core.Boolean = true;

        @Prop({
            group: '样式属性',
            title: '分割线',
            docDescription: '控制卡片标题和内容间分割线的显隐，默认关闭',
            setter: {
                type: 'switch',
            },
        })
        split: nasl.core.Boolean = false;

        @Event({
            title: '点击',
            description: '在元素上按下并释放任意鼠标按钮时触发。',
        })
        onClick: () => void;

        @Event({
            title: '双击',
            description: '在元素上双击鼠标按钮时触发。',
        })
        onDblclick: () => void;

        @Event({
            title: '右键点击',
            description: '在右键菜单显示前触发。',
        })
        onContextmenu: () => void;

        @Event({
            title: '鼠标按下',
            description: '在元素上按下任意鼠标按钮时触发。',
        })
        onMousedown: () => void;

        @Event({
            title: '鼠标释放',
            description: '在元素上释放任意鼠标按钮时触发。',
        })
        onMouseup: () => void;

        @Event({
            title: '鼠标移入',
            description: '鼠标移入元素时触发。',
        })
        onMouseenter: () => void;

        @Event({
            title: '鼠标移出',
            description: '鼠标移出元素时触发。',
        })
        onMouseleave: () => void;

        @Slot({
            title: 'undefined',
            description: '插入默认的元素',
        })
        slotDefault: () => Array<VueComponent>;

        @Slot({
            title: 'undefined',
            description: '插入图片',
        })
        slotCover: () => Array<VueComponent>;
    }

    @Component({
        title: '卡片组',
        description: '卡片组',
    })
    class UCardGroup extends VueComponent {

        constructor(options?: Partial<UCardGroupOptions>) { super(); }
    }

    class UCardGroupOptions {
        @Prop({
            group: '主要属性',
            title: '标题',
        })
        title: nasl.core.String;

        @Slot({
            title: 'undefined',
            description: '插入默认的元素',
        })
        slotDefault: () => Array<VueComponent>;

        @Slot({
            title: 'undefined',
            description: '插入图片',
        })
        slotCover: () => Array<VueComponent>;
    }
}
