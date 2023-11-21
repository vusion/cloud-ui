/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '弹出消息',
        icon: 'toast',
        description: '弹出消息',
    })
    export class UToastSingle extends VueComponent {


        @Method({
            title: 'undefined',
            description: '打开轻提示',
        })
        open(): void {}

        @Method({
            title: 'undefined',
            description: '关闭轻提示',
        })
        close(): void {}
        constructor(options?: Partial<UToastSingleOptions>) { super(); }
    }

    export class UToastSingleOptions {
        @Prop({
            title: '提示内容',
            description: '默认提示内容',
        })
        text: nasl.core.String = '弹出消息';

        @Prop({
            title: '消息类型',
            description: '提示的类型',
            setter: {
                type: 'enumSelect',
                titles: ['成功', '警告', '错误', '加载中', '自定义'],
            },
        })
        color: 'success' | 'warning' | 'error' | 'loading' | 'custom' = 'custom';

        @Prop<UToastSingleOptions, 'customIcon'>({
            title: '自定义图标',
            setter: {
                type: 'iconSelect',
            },
            if: _ => _.color === 'custom',
        })
        customIcon: nasl.core.String;

        @Prop({
            title: '停留时间',
            description: '自动关闭的延时，单位毫秒。设为 0 时不自动关闭',
        })
        duration: nasl.core.Decimal = 2000;

        @Prop({
            title: '位置',
            description: '显示的位置',
            setter: {
                type: 'enumSelect',
                titles: ['上中', '上左', '上右', '下中', '下左', '下右', '静态'],
            },
        })
        private position: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'static' = 'top-center';

        @Prop({
            title: '合并',
            description: '多个提示会合并为一个',
        })
        private single: nasl.core.Boolean = false;

        @Prop({
            title: '关闭提示',
            description: '是否可以关闭提示',
        })
        private closable: nasl.core.Boolean = false;

        @Event({
            title: '弹出后事件',
            description: '弹出提示时触发',
        })
        onOpen: () => void;

        @Event({
            title: '关闭后',
            description: '关闭提示时触发',
        })
        onClose: () => void;
    }
}
