/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '画廊',
        icon: 'gallery',
        description: '画廊',
        group: 'Display'
    })
    export class UGallery<T> extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '重新加载数据',
        })
        reload(): void {}
        constructor(options?: Partial<UGalleryOptions<T>>) { super(); }
    }

    export class UGalleryOptions<T> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '组件所展示数据的输入源，可以是逻辑、变量。格式可参见示例',
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

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
                concept: 'EnumSelectSetter',
                options: [{ title: '缩略图模式' }, { title: '大图模式' }],
            },
        })
        pattern: 'small' | 'big' = 'big';

        @Prop({
            group: '主要属性',
            title: '显示图片数',
            docDescription: '同时展示的图片数量',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        num: nasl.core.Decimal = 5;

        @Prop({
            group: '主要属性',
            title: '显示左右箭头',
            docDescription: '图片支持通过鼠标按住拖动或点击左右箭头的方式调整位置，关闭该选项后不显示左右箭头',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        arrow: nasl.core.Boolean = true;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        onBeforeLoad: (event: any) => any;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: (event: any) => any;
    }
}
