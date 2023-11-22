/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '线形进度条',
        icon: 'linear-progress',
        description: '以线条的形式描述当前进度',
    })
    export class ULinearProgress extends VueComponent {

        constructor(options?: Partial<ULinearProgressOptions>) { super(); }
    }

    export class ULinearProgressOptions {
        @Prop({
            title: '百分比范围',
            description: '百分比范围限制',
        })
        private range: Array<nasl.core.Decimal> = [0,100];

        @Prop({
            group: '数据属性',
            title: '当前进度(%)',
            description: '进度条显示的进度百分比，1-100之间的数字',
            docDescription: '进度条显示的进度百分比，1-100之间的数字',
            setter: {
                type: 'numberInput',
            },
        })
        percent: nasl.core.Decimal = 0;

        @Prop({
            group: '主要属性',
            title: '进度条方向',
            docDescription: '横向、竖向',
            setter: {
                type: 'enumSelect',
                titles: ['横向', '竖向'],
            },
        })
        direction: 'horizontal' | 'vertical' = 'horizontal';

        @Prop({
            group: '样式属性',
            title: '尺寸',
            description: '进度条高度大小',
            docDescription: '支持小、正常、大、巨大',
            setter: {
                type: 'enumSelect',
                titles: ['小', '正常', '大', '巨大'],
            },
        })
        size: 'small' | 'normal' | 'large' | 'huge' = 'normal';

        @Slot({
            title: 'undefined',
            description: '插入文本或HTML。',
        })
        private slotDefault: () => Array<VueComponent>;
    }
}
