/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '水印',
        icon: 'watermark',
        description: '在页面显示水印',
        group: "Effects"
    })
    export class EWatermark extends ViewComponent {

        constructor(options?: Partial<EWatermarkOptions>) { super(); }
    }

    export class EWatermarkOptions  extends ViewComponentOptions {
        @Prop({
            title: '水印图案',
            description: '水印图案。如果没有，则默认按文本绘制',
        })
        private image: CanvasImageSource;

        @Prop({
            group: '主要属性',
            title: '文本',
            description: '水印文本显示内容',
            docDescription: '设置水印文本内容',
        })
        text: nasl.core.String = '水印';

        @Prop({
            group: '样式属性',
            title: '不透明度',
            description: '0-1之间的小数，0代表完全透明，1代表完全不透明',
            docDescription: '设置水印透明度，参数为0-1之间的小数，0代表完全透明，1代表完全不透明',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        opacity: nasl.core.Decimal = 0.1;
    }
}
