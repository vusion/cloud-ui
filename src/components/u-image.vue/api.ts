/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '图片展示',
        icon: 'image',
        description: '可以用来展示一张图片，支持设置图片地址。',
    })
    export class UImage extends VueComponent {

        constructor(options?: Partial<UImageOptions>) { super(); }
    }

    export class UImageOptions {
        @Prop({
            title: '图片地址转换器',
            description: '将传入的src转换为符合要求的字符串',
        })
        private convertSrcFn: Function;

        @Prop({
            group: '主要属性',
            title: '地址',
            docDescription: '图片链接，可以是来自网络的链接，也可以上传本地图片。',
            setter: {
                type: 'imageSelect',
            },
        })
        src: nasl.core.String = '';

        @Prop({
            group: '主要属性',
            title: '填充方式',
            docDescription: '设置图片的显示方式，适应、适应（图片小于父元素时以原尺寸展示、原尺寸、拉伸、填充）',
            setter: {
                type: 'enumSelect',
                titles: ['适应', '适应（图片小于父元素时以原尺寸展示）', '原尺寸', '拉伸', '填充'],
            },
        })
        fit: 'contain' | 'scale-down' | 'none' | 'fill' | 'cover' = 'contain';

        @Prop({
            group: '主要属性',
            title: '圆形遮罩',
            docDescription: '是否使用圆形进行图片展示。',
        })
        circle: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '水平对齐方式',
            docDescription: '左对齐、右对齐、居中对齐',
            setter: {
                type: 'enumSelect',
                titles: ['左对齐', '居中对齐', '右对齐'],
            },
        })
        horizontalCenter: 'left' | 'center' | 'right' = 'center';

        @Prop({
            group: '主要属性',
            title: '垂直对齐方式',
            docDescription: '顶部对齐、居中对齐、底部对齐',
            setter: {
                type: 'enumSelect',
                titles: ['顶部对齐', '居中对齐', '底部对齐'],
            },
        })
        verticalCenter: 'top' | 'center' | 'bottom' = 'center';

        @Prop({
            group: '交互属性',
            title: '点击放大',
            description: '是否支持点击放大全屏展示',
            docDescription: '是否支持点击放大全屏展示',
        })
        preview: nasl.core.Boolean = false;

        @Event({
            title: '加载完成',
            description: '网页加载完成时触发',
        })
        onLoad: () => void;

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
    }
}
