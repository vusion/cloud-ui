/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '弹出消息',
        icon: 'toast',
        description: '弹出消息',
        group: 'Feedback'
    })
    export class UToastSingle extends ViewComponent {


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

    export class UToastSingleOptions  extends ViewComponentOptions {
        @Prop({
            title: '提示内容',
            description: '默认提示内容',
        })
        text: nasl.core.String = '弹出消息';

        @Prop({
            title: '消息类型',
            description: '提示的类型',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '成功' }, { title: '警告' }, { title: '错误' }, { title: '加载中' }, { title: '自定义' }],
            },
        })
        color: 'success' | 'warning' | 'error' | 'loading' | 'custom' = 'custom';

        @Prop<UToastSingleOptions, 'customIcon'>({
            title: '自定义图标',
            setter: {
                concept: 'IconSetter',
            },
            if: _ => _.color === 'custom',
        })
        customIcon: nasl.core.String;

        @Prop({
            title: '停留时间',
            description: '自动关闭的延时，单位毫秒。设为 0 时不自动关闭',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        duration: nasl.core.Decimal = 2000;

        @Prop({
            title: '位置',
            description: '显示的位置',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '上中' }, { title: '上左' }, { title: '上右' }, { title: '下中' }, { title: '下左' }, { title: '下右' }, { title: '静态' }],
            },
        })
        private position: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'static' = 'top-center';

        @Prop({
            title: '合并',
            description: '多个提示会合并为一个',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private single: nasl.core.Boolean = false;

        @Prop({
            title: '关闭提示',
            description: '是否可以关闭提示',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private closable: nasl.core.Boolean = false;

        @Event({
            title: '弹出后事件',
            description: '弹出提示时触发',
        })
        onOpen: (event: {
            text: nasl.core.String;
            color: nasl.core.String;
            duration: nasl.core.Integer;
            timestamp: nasl.core.Integer;
        }) => any;

        @Event({
            title: '关闭后',
            description: '关闭提示时触发',
        })
        onClose: (event: {
            text: nasl.core.String;
            color: nasl.core.String;
            duration: nasl.core.Integer;
            timestamp: nasl.core.Integer;
        }) => any;

        @Slot({
            title: '项',
            description: '项自定义',
        })
        slotItem: () => Array<ViewComponent>;
    }
}
