/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '数字输入',
        icon: 'number',
        description: '输入数字时使用',
        group: 'Form'
    })
    export class UNumberInput extends ViewComponent {

        constructor(options?: Partial<UNumberInputOptions>) { super(); }
    }

    export class UNumberInputOptions  extends ViewComponentOptions {
        @Prop({
            title: '格式化',
            description: '格式化字符串，具体参见示例。也可以传入一个包含`get`和`set`方法的格式化对象。',
        })
        private formatter: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '输入的值',
            sync: true,
            docDescription: '输入框的值。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        value: nasl.core.Decimal = 0;

        @Prop({
            group: '数据属性',
            title: '最小值',
            description: '最小可输入的值',
            docDescription: '限制输入数值的最小值。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        min: nasl.core.Decimal;

        @Prop({
            group: '数据属性',
            title: '最大值',
            description: '最大可输入的值',
            docDescription: '限制输入数值的最大值。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        max: nasl.core.Decimal;

        @Prop({
            group: '数据属性',
            title: '精度',
            description: '限制数字输入要保留的最小精度单位，默认不限制精度，如需保留两位小数，则填入0.01',
            docDescription: '限制数字要保留的最小单位，整数、小数均可，如需要保留两位小数，则填入0.01。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        private precision: nasl.core.Decimal = 1;

        @Prop({
            group: '数据属性',
            title: '精度',
            description: '控制数据存储时小数点后保留几位。例如：精度为2，则数据存储时小数点后保留2位。',
            docDescription: '限制值要保留的小数位数。默认0，不保留小数位',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        decimalLength: nasl.core.Decimal;

        @Prop<UNumberInputOptions, 'decimalPlaces'>({
            group: '主要属性',
            title: '小数位数',
            description: '控制数据展示时小数点后保留几位，仅影响展示，不影响数据实际存储的值。例如：小数位数为2，则数据展示时小数点后保留2位。',
            if: _ => _.advancedFormat.enable === false,
        })
        decimalPlaces: { places: nasl.core.Decimal, omit: nasl.core.Boolean } = { places: null, omit: true };

        @Prop<UNumberInputOptions, 'thousandths'>({
            group: '主要属性',
            title: '千位符',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.advancedFormat.enable === false,
        })
        thousandths: nasl.core.Boolean = false;

        @Prop<UNumberInputOptions, 'percentSign'>({
            group: '主要属性',
            title: '百分号',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.advancedFormat.enable === false,
        })
        percentSign: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '单位',
            description: '输入框中显示的单位',
        })
        unit: { type: nasl.core.String, value: nasl.core.String } = { type: 'prefix', value: '' };

        @Prop({
            group: '主要属性',
            title: '高级格式化',
            description: '用来控制数字的展示格式',
            bindHide: true,
        })
        advancedFormat: { enable: nasl.core.Boolean, value: nasl.core.String } = { enable: false, value: '' };

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
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autofocus: nasl.core.Boolean;

        @Prop({
            group: '主要属性',
            title: '隐藏按钮',
            description: '是否隐藏上下点击按钮',
            docDescription: '是否隐藏数值加减按钮',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        hideButtons: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可清除',
            description: '可点击清除按钮一键清除内容',
            docDescription: '开启并在输入框有内容时会显示清除按钮',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        clearable: nasl.core.Boolean;

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
            title: '间隔',
            description: '间隔，表示点击按钮或按上下键所增加或减少的量',
            docDescription: '限制点击按钮或按上下键所增加或减少的量。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        step: nasl.core.Decimal = 1;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置数字输入框宽度大小',
            docDescription: '设置数字输入框宽度大小，可选占满、巨大、大、中型、正常、小、迷你。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '中型' }, { title: '正常' }, { title: '小' }, { title: '迷你' }],
            },
        })
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置数字输入框高度大小',
            docDescription: '设置数字输入框高度大小，可选占满、巨大、大、中型、正常、小、迷你。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '中型' }, { title: '正常' }, { title: '小' }, { title: '迷你' }],
            },
        })
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Event({
            title: '输入时',
            description: '输入时触发',
        })
        onInput: (event: nasl.core.String) => any;

        @Event({
            title: '验证时',
            description: '输入验证时触发',
        })
        onValidate: (event: { 
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '改变后',
            description: '值变化时触发（与原生事件不同）',
        })
        onChange: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
            formattedValue: nasl.core.String;
            valid: nasl.core.Boolean;
        }) => any;

        @Event({
            title: '聚焦后',
            description: '获得焦点时触发',
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
            description: '失去焦点时触发',
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
            title: '键盘按下',
            description: '键盘按键按下时触发',
        })
        onKeydown: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => any;

        @Event({
            title: '键盘松开',
            description: '键盘按键松开时触发',
        })
        onKeyup: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => any;

        @Slot({
            title: '默认',
            description: '插入 HTML 或 `Component`, 可展示额外内容。',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
