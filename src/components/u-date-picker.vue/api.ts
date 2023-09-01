/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '日期选择',
        icon: 'date-picker',
        description: '日期选择',
    })
    export class UDatePicker extends VueComponent {

        constructor(options?: Partial<UDatePickerOptions>) { super(); }
    }

    export class UDatePickerOptions {
        @Prop({
            group: '数据属性',
            title: '值',
            description: '默认显示的日期值，格式如2018-08-08',
            syncMode: 'both',
            docDescription: '当前选择的值',
        })
        date: nasl.core.String | nasl.core.Decimal | Date;

        @Prop({
            group: '数据属性',
            title: '最小日期值',
            description: '最小可选的日期值，默认为10年前，日期填写格式为“yyyy-mm-dd”',
            docDescription: '设置日期范围，支持输入的最小日期',
        })
        minDate: nasl.core.String | nasl.core.Decimal | Date;

        @Prop({
            group: '数据属性',
            title: '最大日期值',
            description: '最大可选的日期值，默认为9年后，日期填写格式为“yyyy-mm-dd”',
            docDescription: '设置日期范围，支持输入的最大日期',
        })
        maxDate: nasl.core.String | nasl.core.Decimal | Date;

        @Prop({
            group: '数据属性',
            title: '时间格式',
            description: '输入对应格式的字符串（8:00:00）即可',
        })
        time: nasl.core.String | nasl.core.Decimal = '00:00:00';

        @Prop({
            group: '数据属性',
            title: '最小年份差值',
            description: '最小可选年份值与当前年份值的差值',
            docDescription: '设置日期范围，最小可选择的年份',
        })
        yearDiff: nasl.core.Decimal = 20;

        @Prop({
            group: '数据属性',
            title: '最大年份差值',
            description: '最大可选年份值与当前年份值的差值',
            docDescription: '设置日期范围，最大可选择的年份',
        })
        yearAdd: nasl.core.Decimal = 20;

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '控制是否在进入页面时聚焦到该组件',
            designerValue: false,
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '日期选择框无内容时的提示信息，支持自定义编辑，默认为请输入',
        })
        placeholder: nasl.core.String = '请输入';

        @Prop({
            group: '主要属性',
            title: '日历弹窗对齐方式',
            description: '日历弹窗对齐方式',
            docDescription: '日期选择弹出层与输入框的对齐方式，支持左对齐、右对齐2种模式。默认为左对齐',
            setter: {
                type: 'enumSelect',
                titles: ['左对齐', '右对齐'],
            },
        })
        alignment: 'left' | 'right' = 'left';

        @Prop({
            group: '主要属性',
            title: '转换器',
            description: '转换器，用于转换时间结果',
            docDescription: '用于转换选中的日期格式，支持JSON、Unix 时间戳、Date对象、YYYY-MM-DD共4种模式。默认YYYY-MM-DD',
            setter: {
                type: 'enumSelect',
                titles: ['JSON', 'Unix 时间戳', 'Date 对象', 'YYYY-MM-DD'],
            },
        })
        converter: 'json' | 'timestamp' | 'date' | 'format' = 'format';

        @Prop({
            group: '主要属性',
            title: '日期格式',
            description: '日期格式设置',
            docDescription: '日期选择弹出层里的日期展示格式，支持日期、月份、季度、年份4种模式。默认日期格式',
            setter: {
                type: 'enumSelect',
                titles: ['日期', '月份', '季度', '年份'],
            },
        })
        picker: 'date' | 'month' | 'quarter' | 'year' = 'date';

        @Prop({
            group: '主要属性',
            title: '前缀图标',
            docDescription: '支持添加前缀图标，如搜索图标',
            setter: {
                type: 'enumSelect',
                titles: ['日历'],
            },
        })
        preIcon: 'calendar' = 'calendar';

        @Prop({
            group: '主要属性',
            title: '后缀图标',
            docDescription: '支持添加后缀图标，如搜索图标',
            setter: {
                type: 'enumSelect',
                titles: ['日历'],
            },
        })
        suffixIcon: 'calendar';

        @Prop({
            group: '主要属性',
            title: '弹出层位置依据',
            description: `设置弹出层依据哪个元素定位位置，可选值：'body'表示添加到 document.body，'reference'表示添加到参考元素中。`,
            docDescription: '设置弹出层添加到哪个元素',
            setter: {
                type: 'enumSelect',
                titles: ['引用元素下', '全局body'],
            },
        })
        appendTo: 'reference' | 'body' = 'body';

        @Prop({
            group: '交互属性',
            title: '可清除',
            description: '可点击清除按钮一键清除内容',
            docDescription: '控制是否显示清除按钮，支持一键清除所选内容',
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
            group: '状态属性',
            title: '弹出状态',
            description: '弹出状态分为“True(弹出)/False(关闭)”，默认为“弹出”',
            docDescription: '开启时加载日期组件时，下拉框自动弹出，默认关闭',
        })
        opened: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置日期选择输入框宽度大小',
            docDescription: '设置日期选择框宽度大小，支持占满、巨大、大、中型、正常、小共6种模式',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置日期选择输入框高度大小',
            docDescription: '设置日期选择框高度大小，支持占满、巨大、大、中型、正常、小共6种模式',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Event({
            title: '值输入时',
            description: '值变化时触发 (表单验证可以检测到其值得变化)',
        })
        onInput: (event: Date) => void;

        @Event({
            title: '值变化时',
            description: '值变化时触发',
        })
        onChange: (event: nasl.ui.DateEvent) => void;

        @Event({
            title: '选择时',
            description: '选择日期时触发',
        })
        onSelect: (event: nasl.ui.DateEvent) => void;

        @Event({
            title: '弹出/隐藏时',
            description: '弹出/隐藏时触发',
        })
        private onToggle: (event: nasl.ui.CollapseEvent) => void;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: (event: nasl.ui.FocusEvent) => void;
    }
}
