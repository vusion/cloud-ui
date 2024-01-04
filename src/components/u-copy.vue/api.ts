/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '复制',
        icon: 'copy',
        description: '复制文本到剪切板',
        group: "Effects"
    })
    export class UCopy extends ViewComponent {

        constructor(options?: Partial<UCopyOptions>) { super(); }
    }

    export class UCopyOptions extends ViewComponentOptions {
        @Prop({
            title: '默认显示文本',
            description: '默认显示的文本',
        })
        private text: nasl.core.String = '复制';

        @Prop({
            title: '复制成功提示文本',
            description: '复制成功提示文本',
        })
        private successText: nasl.core.String = '已复制';

        @Prop({
            title: '复制提示反馈方式',
            description: '复制提示反馈方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '工具提示' }, { title: '弹框提示' }, { title: '无反馈' }],
            },
        })
        private feedback: 'tooltip' | 'toast' | 'none' = 'tooltip';

        @Prop({
            title: '提示框位置',
            description: 'tooltip 提示框位置',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '上' }, { title: '下' }, { title: '左' }, { title: '右' }, { title: '上左' }, { title: '上右' }, { title: '下左' }, { title: '下右' }, { title: '左上' }, { title: '左下' }, { title: '右上' }, { title: '右下' }],
            },
        })
        private placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end' = 'top';

        @Prop({
            title: '提示框显示时长',
            description: '提示框显示时长',
            setter: {
                concept: 'NumberInputSetter',
                precision: 0,
            },
        })
        private hideDelay: nasl.core.Integer = 3000;

        @Prop({
            group: '数据属性',
            title: '复制的值',
            description: '需要复制的值',
        })
        value: nasl.core.String;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '复制成功后',
            description: '内容复制成功后触发',
        })
        onCopy: (event: {
            value: nasl.core.String;
        }) => any;

        @Slot({
            title: 'undefined',
            description: '修改默认触发元素',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
