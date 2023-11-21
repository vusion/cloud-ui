/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '多行输入',
        icon: 'textarea',
        description: '多行输入组件',
    })
    export class UTextarea extends VueComponent {


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

    export class UTextareaOptions {
        @Prop({
            title: '最小长度',
        })
        private minlength: nasl.core.Decimal;

        @Prop({
            title: '拼写检查',
        })
        private spellcheck: nasl.core.Boolean;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '输入的值',
            syncMode: 'both',
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
                type: 'numberInput',
                placeholder: '不限制',
            },
            onToggle: [
                { update: {'show-word-limit':false}, if: _ => _ === null },
            ],
        })
        maxlength: nasl.core.Decimal;

        @Prop<UTextareaOptions, 'showWordLimit'>({
            group: '主要属性',
            title: '显示字数统计',
            description: '设置是否显示「最大字符数」的字数统计',
            docDescription: '开启后，会在组件上显示当前输入字数以及最大字符数，当前输入字数超过最大字符数时，不支持输入。',
            if: _ => _.maxlength !== '',
        })
        showWordLimit: nasl.core.Boolean;

        @Prop<UTextareaOptions, 'limitPosition'>({
            group: '主要属性',
            title: '字数统计位置',
            description: '设置字数统计位置',
            docDescription: '**显示字数统计**开启后，支持选择字数统计位置：输入框内、输入框外。',
            setter: {
                type: 'enumSelect',
                titles: ['输入框内', '输入框外'],
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
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可清除',
            description: '可点击清除按钮一键清除内容',
            docDescription: '是否可清空。开启并在输入框有内容时会显示清空按钮',
        })
        clearable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可调整大小',
            description: '设置调整大小的方式',
            docDescription: '设置多行输入框是否可以调整大小。包括：不可调整，可调整，水平可调整，竖直可调整四种设置',
            setter: {
                type: 'enumSelect',
                titles: ['不可调整', '可调整', '水平可调整', '竖直可调整'],
            },
        })
        resize: 'none' | 'both' | 'horizontal' | 'vertical' = 'vertical';

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '尺寸',
            description: '设置多行输入框大小',
            docDescription: '- 设置多行输入框大小。支持正常，中型，大，巨大，占满五种尺寸。',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常'],
            },
        })
        size: 'full' | 'huge' | 'large' | 'medium' | 'normal' = 'normal';

        @Prop({
            group: '样式属性',
            title: '自适应内容高度',
            description: '可输入如{maxHeight:100,minHeight:50}，单位默认为px',
            docDescription: '可输入如{maxHeight:100,minHeight:50}，单位默认为px，不设置则根据输入内容自适应',
            setter: {
                type: 'input',
                placeholder: '不设置则根据输入内容自适应',
            },
        })
        autosize: nasl.core.Boolean;

        @Event({
            title: '输入前',
            description: '输入前触发。可以在这个阶段阻止输入，或者修改输入的值 $event.value',
        })
        private onBeforeInput: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '输入时',
            description: '输入时触发。',
        })
        onInput: (event: String) => void;

        @Event({
            title: '改变后',
            description: '值变化时触发。（注意：与原生事件不同）',
        })
        onChange: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '聚焦后',
            description: '获得焦点时触发。',
        })
        private onFocus: (event: nasl.ui.FocusEvent) => void;

        @Event({
            title: '失焦后',
            description: '失去焦点时触发。',
        })
        private onBlur: (event: nasl.ui.FocusEvent) => void;

        @Event({
            title: '清空前',
            description: '清空前触发。',
        })
        private onBeforeClear: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '清空后',
            description: '清空时触发。',
        })
        onClear: () => void;

        @Slot({
            title: '默认',
            description: '插入 HTML 或 `Component`, 可展示额外内容。',
        })
        private slotDefault: () => Array<VueComponent>;
    }
}
