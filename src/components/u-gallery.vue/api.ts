/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '画廊',
        icon: 'gallery',
        description: '画廊',
    })
    export class UGallery<T> extends VueComponent {


        @Method({
            title: 'undefined',
            description: '重新加载数据',
        })
        reload(): void {}
        constructor(options?: Partial<UGalleryOptions<T>>) { super(); }
    }

    export class UGalleryOptions<T> {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '组件所展示数据的输入源，可以是逻辑、变量。格式可参见示例',
        })
        dataSource: nasl.collection.List<T> = [{url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_1.png'},{url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_2.png'},{url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_3.png'},{url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_4.png'},{url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_5.png'}];

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '集合类型每一元素的数据类型',
        })
        dataSchema: T;

        @Prop({
            group: '主要属性',
            title: '画廊模式',
            description: '图片的显示模式，支持大图模式和缩略图模式。',
            docDescription: '图片的显示模式，支持大图模式和缩略图模式',
            setter: {
                type: 'enumSelect',
                titles: ['缩略图模式', '大图模式'],
            },
        })
        pattern: 'small' | 'big' = 'big';

        @Prop({
            group: '主要属性',
            title: '显示图片数',
            docDescription: '同时展示的图片数量',
        })
        num: nasl.core.Integer = 5;

        @Prop({
            group: '主要属性',
            title: '显示左右箭头',
            docDescription: '图片支持通过鼠标按住拖动或点击左右箭头的方式调整位置，关闭该选项后不显示左右箭头',
        })
        arrow: nasl.core.Boolean = true;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        private onBeforeLoad: (event: EventTarget) => void;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: (event: null) => void;
    }
}
