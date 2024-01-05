/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '多行输入',
        icon: 'textarea',
        description: '多行输入组件',
        group: 'Form'
    })
    export class UTextarea extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '让输入框获取焦点。',
        })
        private focus(): void {}

        @Method({
            title: 'undefined',
            description: '让输入框失去焦点。',
        })
        private blur(): void {}

        @Method({
            title: 'undefined',
            description: '清空输入框。',
        })
        private clear(): void {}
        constructor(options?: Partial<UTextareaOptions>) { super(); }
    }

    export class UTextareaOptions  extends ViewComponentOptions {
        @Prop({
            title: '最小长度',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        private minlength: nasl.core.Decimal;

        @Prop({
            title: '拼写检查',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private spellcheck: nasl.core.Boolean;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '输入的值',
            sync: true,
            docDescription: '当前多行输入组件，输入框内的本文内容',
        })
        value: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '输入框为空时的提示文本',
        })
        placeholder: nasl.core.String;

        @Prop<UTextareaOptions, 'maxlength'>({
            group: '主要属性',
            title: '最大字符数',
            description: '输入框内可输入的最大字符数，超过时不支持输入',
            docDescription: '输入框内可输入的最大字符数，超过时不支持输入',
            setter: {
                concept: 'NumberInputSetter',
                placeholder: '不限制',
            },
            onChange: [
                { update: {showWordLimit:false}, if: _ => _ === null },
            ],
        })
        maxlength: nasl.core.Decimal;

        @Prop<UTextareaOptions, 'showWordLimit'>({
            group: '主要属性',
            title: '显示字数统计',
            description: '设置是否显示「最大字符数」的字数统计',
            docDescription: '开启后，会在组件上显示当前输入字数以及最大字符数，当前输入字数超过最大字符数时，不支持输入。',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.maxlength !== null,
        })
        showWordLimit: nasl.core.Boolean;

        @Prop<UTextareaOptions, 'limitPosition'>({
            group: '主要属性',
            title: '字数统计位置',
            description: '设置字数统计位置',
            docDescription: '**显示字数统计**开启后，支持选择字数统计位置：输入框内、输入框外。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '输入框内' }, { title: '输入框外' }],
            },
            if: _ => _.showWordLimit === true,
        })
        limitPosition: 'inside' | 'outside';

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '进入页面时，自动选中该输入框。',
            designerValue: false,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可清除',
            description: '可点击清除按钮一键清除内容',
            docDescription: '是否可清空。开启并在输入框有内容时会显示清空按钮',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        clearable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可调整大小',
            description: '设置调整大小的方式',
            docDescription: '设置多行输入框是否可以调整大小。包括：不可调整，可调整，水平可调整，竖直可调整四种设置',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '不可调整' }, { title: '可调整' }, { title: '水平可调整' }, { title: '竖直可调整' }],
            },
        })
        resize: 'none' | 'both' | 'horizontal' | 'vertical' = 'vertical';

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

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
            group: '样式属性',
            title: '尺寸',
            description: '设置多行输入框大小',
            docDescription: '- 设置多行输入框大小。支持正常，中型，大，巨大，占满五种尺寸。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '中型' }, { title: '正常' }],
            },
        })
        size: 'full' | 'huge' | 'large' | 'medium' | 'normal' = 'normal';

        @Prop({
            group: '样式属性',
            title: '自适应内容高度',
            description: '可输入如{maxHeight:100,minHeight:50}，单位默认为px',
            docDescription: '可输入如{maxHeight:100,minHeight:50}，单位默认为px，不设置则根据输入内容自适应',
            setter: {
                concept: 'InputSetter',
                placeholder: '不设置则根据输入内容自适应',
            },
        })
        autosize: nasl.core.Boolean | object;

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
            title: '聚焦后',
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
            title: '失焦后',
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
            description: '清空时触发。',
        })
        onClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
    }
}
