/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '数字输入',
        icon: 'number',
        description: '输入数字时使用',
    })
    export class UNumberInput extends VueComponent {

        constructor(options?: Partial<UNumberInputOptions>) { super(); }
    }

    export class UNumberInputOptions {
        @Prop({
            title: '格式化',
            description: '格式化字符串，具体参见示例。也可以传入一个包含`get`和`set`方法的格式化对象。',
        })
        private formatter: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '输入的值',
            syncMode: 'both',
            docDescription: '输入框的值。',
        })
        value: nasl.core.Decimal = 0;

        @Prop({
            group: '数据属性',
            title: '最小值',
            description: '最小可输入的值',
            docDescription: '限制输入数值的最小值。',
        })
        min: nasl.core.Decimal;

        @Prop({
            group: '数据属性',
            title: '最大值',
            description: '最大可输入的值',
            docDescription: '限制输入数值的最大值。',
        })
        max: nasl.core.Decimal;

        @Prop({
            group: '数据属性',
            title: '精度',
            description: '精度，表示数字要保留的最小单位，整数、小数均可',
            docDescription: '限制数字要保留的最小单位，整数、小数均可，如需要保留两位小数，则填入0.01。',
        })
        precision: nasl.core.Decimal = 1;

        @Prop({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '为空时的提示文本。',
        })
        placeholder: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '是否自动获取输入框的焦点。',
            designerValue: false,
        })
        autofocus: nasl.core.Boolean;

        @Prop({
            group: '主要属性',
            title: '隐藏按钮',
            description: '是否隐藏上下点击按钮',
            docDescription: '是否隐藏数值加减按钮',
        })
        hideButtons: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可清除',
            description: '可点击清除按钮一键清除内容',
            docDescription: '开启并在输入框有内容时会显示清除按钮',
        })
        clearable: nasl.core.Boolean;

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
            title: '间隔',
            description: '间隔，表示点击按钮或按上下键所增加或减少的量',
            docDescription: '限制点击按钮或按上下键所增加或减少的量。',
        })
        step: nasl.core.Decimal = 1;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置数字输入框宽度大小',
            docDescription: '设置数字输入框宽度大小，可选占满、巨大、大、中型、正常、小、迷你。',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置数字输入框高度大小',
            docDescription: '设置数字输入框高度大小，可选占满、巨大、大、中型、正常、小、迷你。',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Event({
            title: '输入时',
            description: '输入时触发',
        })
        onInput: (event: String) => void;

        @Event({
            title: '验证时',
            description: '输入验证时触发',
        })
        onValidate: (event: nasl.ui.ValidateEvent) => void;

        @Event({
            title: '改变后',
            description: '值变化时触发（与原生事件不同）',
        })
        onChange: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '聚焦后',
            description: '获得焦点时触发',
        })
        onFocus: (event: nasl.ui.FocusEvent) => void;

        @Event({
            title: '失焦后',
            description: '失去焦点时触发',
        })
        onBlur: (event: nasl.ui.FocusEvent) => void;

        @Slot({
            title: '默认',
            description: '插入 HTML 或 `Component`, 可展示额外内容。',
        })
        private slotDefault: () => Array<VueComponent>;
    }
}
