/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '圆形进度条',
        icon: 'circular-progress',
        description: '以圆形的形式描述当前进度',
    })
    export class UCircularProgress extends VueComponent {

        constructor(options?: Partial<UCircularProgressOptions>) { super(); }
    }

    export class UCircularProgressOptions {
        @Prop({
            group: '数据属性',
            title: '当前进度(%)',
            description: '进度条显示的进度百分比，1-100之间的数字',
            docDescription: '进度条显示的进度百分比，1-100之间的数字',
        })
        percent: nasl.core.Decimal = 0;

        @Prop({
            group: '样式属性',
            title: '尺寸',
            description: '进度条大小',
            docDescription: '支持小、正常、大、巨大',
            setter: {
                type: 'enumSelect',
                titles: ['小', '正常', '大', '巨大'],
            },
        })
        size: 'small' | 'normal' | 'large' | 'huge' = 'normal';

        @Slot({
            title: 'undefined',
            description: '插入文本或 HTML。',
        })
        private slotDefault: () => Array<VueComponent>;
    }
}
