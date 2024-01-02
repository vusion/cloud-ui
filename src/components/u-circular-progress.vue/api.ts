/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '圆形进度条',
        icon: 'circular-progress',
        description: '以圆形的形式描述当前进度',
        group: "Chart"
    })
    export class UCircularProgress extends ViewComponent {

        constructor(options?: Partial<UCircularProgressOptions>) { super(); }
    }

    export class UCircularProgressOptions extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '当前进度(%)',
            description: '进度条显示的进度百分比，1-100之间的数字',
            docDescription: '进度条显示的进度百分比，1-100之间的数字',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        percent: nasl.core.Decimal = 0;

        @Prop({
            group: '样式属性',
            title: '尺寸',
            description: '进度条大小',
            docDescription: '支持小、正常、大、巨大',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '小' }, { title: '正常' }, { title: '大' }, { title: '巨大' }],
            },
        })
        size: 'small' | 'normal' | 'large' | 'huge' = 'normal';

        @Slot({
            title: '默认',
            description: '插入文本或 HTML。',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: '分数展示',
            description: '分数展示自定义',
        })
        slotPercent: () => Array<ViewComponent>;
    }
}
