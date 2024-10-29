/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '单行输入',
        icon: 'input',
        description: '基本的表单输入组件',
        group: 'Form'
    })
    export class UInput extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '让输入框获取焦点。',
        })
        focus(): void {}

        @Method({
            title: 'undefined',
            description: '让输入框失去焦点。',
        })
        blur(): void {}

        @Method({
            title: 'undefined',
            description: '清空输入框。',
        })
        clear(): void {}
        constructor(options?: Partial<UInputOptions>) { super(); }
    }

    export class UInputOptions  extends ViewComponentOptions {
        @Prop({
            title: '最小长度',
            setter: {
                concept: 'NumberInputSetter',
                precision: 0,
            },
        })
        private minlength: nasl.core.Integer;

        @Prop({
            title: '拼写检查',
            description: '原生属性',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private spellcheck: nasl.core.Boolean;

        @Prop({
            title: '长度上限提示',
            description: '输入内容达到上限时的错误提示，且被 [FormItem](#/components/u-form) 包裹时生效',
        })
        private maxlengthMessage: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '类型',
            description: '文本框或者密码框',
            docDescription: '文本框或者密码框。文本：文本类型。密码：密码类型。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '文本' }, { title: '密码' }],
            },
        })
        type: 'text' | 'password' = 'text';

        @Prop({
            group: '数据属性',
            title: '值',
            description: '输入的值',
            sync: true,
            docDescription: '输入框的值。',
        })
        value: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '内容为空时的提示文本。',
        })
        placeholder: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '最大字符数',
            docDescription: '限定输入文本最大长度。',
            setter: {
                concept: 'NumberInputSetter',
                precision: 0,
            },
        })
        maxlength: nasl.core.Integer;

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '是否自动获取输入框焦点。',
            designerValue: false,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '前缀图标',
            docDescription: '设置输入框的前缀图标。',
            setter: {
                concept: 'IconSetter',
            },
        })
        prefix: nasl.core.String = '';

        @Prop({
            group: '主要属性',
            title: '后缀图标',
            docDescription: '设置输入框的后缀图标。',
            setter: {
                concept: 'IconSetter',
            },
        })
        suffix: nasl.core.String = '';

        @Prop({
            group: '交互属性',
            title: '可清除',
            description: '可点击清除按钮一键清除内容',
            docDescription: '是否在输入框有内容时会显示清除内容的按钮。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        clearable: nasl.core.Boolean;

        @Prop({
            group: '状态属性',
            title: '显示状态',
            description: '显示状态分为“True(显示)/False(隐藏)”，默认为“隐藏”',
            docDescription: '切换密码的显示/隐藏。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        password: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '预览',
            description: '显示预览态',
            docDescription: '',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        preview: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置单行输入框宽度大小',
            docDescription: '设置单行输入框宽度大小，可选占满、巨大、大、中型、正常、小、迷你',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '中型' }, { title: '正常' }, { title: '小' }, { title: '迷你' }],
            },
        })
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置单行输入框高度大小',
            docDescription: '设置单行输入框高度大小，可选占满、巨大、大、中型、正常、小、迷你。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '中型' }, { title: '正常' }, { title: '小' }, { title: '迷你' }],
            },
        })
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Event({
            title: '输入前',
            description: '输入前触发。可以在这个阶段阻止输入，或者修改输入的值 $event.value',
        })
        onBeforeInput: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '输入时',
            description: '输入时触发。',
        })
        onInput: (event: nasl.core.String) => any;

        @Event({
            title: '改变后',
            description: '值变化时触发。（注意：与原生事件不同）',
        })
        onChange: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '获得焦点',
            description: '获得焦点时触发。',
        })
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '清空前',
            description: '清空前触发。',
        })
        onBeforeClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '清空后',
            description: '清空后触发。',
        })
        onClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '点击前缀图标',
            description: '点击前缀图标后触发',
        })
        onClickPrefix: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '点击后缀图标',
            description: '点击后缀图标后触发',
        })
        onClickSuffix: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '键盘按下',
            description: '键盘按键按下时触发',
        })
        onKeydown: (event: KeyboardEvent) => any;

        @Event({
            title: '键盘松开',
            description: '键盘按键松开时触发',
        })
        onKeyup: (event: KeyboardEvent) => any;

        @Slot({
            title: '前缀图标',
            description: '前缀图标自定义',
        })
        slotPrefix: () => Array<ViewComponent>;

        @Slot({
            title: '后缀图标',
            description: '后缀图标自定义',
        })
        slotSuffix: () => Array<ViewComponent>;
    }
}
