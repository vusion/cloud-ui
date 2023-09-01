/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: 'Iframe',
        icon: 'iframe',
        description: '用于嵌入其他网页的容器。',
    })
    export class UIframe extends VueComponent {

        constructor(options?: Partial<UIframeOptions>) { super(); }
    }

    export class UIframeOptions {
        @Prop({
            group: '主要属性',
            title: '网页地址',
            description: '需要嵌入的网页地址',
            docDescription: '需要嵌入的网页地址',
        })
        src: nasl.core.String;

        @Event({
            title: '加载完成',
            description: '网页加载完成时触发。',
        })
        onLoad: () => void;
    }
}
