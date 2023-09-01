/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '分隔线',
        icon: 'divider',
        description: '用于将内容分隔为多个区域',
    })
    export class UDivider extends VueComponent {

        constructor(options?: Partial<UDividerOptions>) { super(); }
    }

    export class UDividerOptions {
        @Prop({
            title: '文本',
            description: '文本',
        })
        private title: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '线条类型',
            docDescription: '实线、虚线',
            setter: {
                type: 'enumSelect',
                titles: ['虚线', '实线'],
            },
        })
        dashed: 'b' | 'a' = 'a';

        @Prop({
            group: '主要属性',
            title: '内容位置',
            docDescription: '居中、左、右',
            setter: {
                type: 'enumSelect',
                titles: ['居中', '左', '右'],
            },
        })
        contentPosition: 'center' | 'left' | 'right' = 'center';

        @Prop({
            group: '主要属性',
            title: '方向',
            docDescription: '横向、竖向',
            setter: {
                type: 'enumSelect',
                titles: ['横向', '竖向'],
            },
        })
        direction: 'horizontal' | 'column' = 'horizontal';



        @Slot({
            title: '默认',
            description: '显示的文本',
        })
        private slotDefault: () => Array<VueComponent>;
    }
}
