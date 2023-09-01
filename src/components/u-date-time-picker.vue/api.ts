/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '日期时间选择',
        icon: 'date-time-picker',
        description: '日期时间选择器',
    })
    export class UDateTimePicker extends VueComponent {

        constructor(options?: Partial<UDateTimePickerOptions>) { super(); }
    }

    export class UDateTimePickerOptions {
        @Prop({
            group: '数据属性',
            title: '值',
            description: '默认显示的日期时间值，格式如2018-08-08 08:08:08',
            syncMode: 'both',
            docDescription: '默认显示的日期时间值',
        })
        date: nasl.core.String | nasl.core.Decimal | Date;

        @Prop({
            group: '数据属性',
            title: '最小日期时间值',
            description: '最小可选的日期时间值，填写null则不限制，日期填写格式为“yyyy-mm-dd  00:00:00”',
            docDescription: '支持输入的最小日期时间',
        })
        minDate: nasl.core.String | nasl.core.Decimal | Date;

        @Prop({
            group: '数据属性',
            title: '最大日期时间值',
            description: '最大可选的日期时间值，填写null则不限制，日期填写格式为“yyyy-mm-dd  00:00:00”',
            docDescription: '支持输入的最大日期时间',
        })
        maxDate: nasl.core.String | nasl.core.Decimal | Date;

        @Prop({
            group: '数据属性',
            title: '最小年份差值',
            description: '最小可选年份值与当前年份值的差值',
            docDescription: '最小可选年份值为当前年减去此值',
        })
        yearDiff: nasl.core.Decimal = 20;

        @Prop({
            group: '数据属性',
            title: '最大年份差值',
            description: '最大可选年份值与当前年份值的差值',
            docDescription: '最大可选年份值为当前年加上此值',
        })
        yearAdd: nasl.core.Decimal = 20;

        @Prop({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '未选择状态下的提示文案',
        })
        placeholder: nasl.core.String = '请选择时间';

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '是否自动聚焦',
            designerValue: false,
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '此刻按钮',
            description: '点击可快捷选择当前时间',
            docDescription: '快捷选择当前时间',
        })
        showRightNowButton: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '此刻按钮名称',
            docDescription: '支持自定义修改原此刻按钮名称。',
        })
        rightNowTitle: nasl.core.String = '';

        @Prop({
            group: '主要属性',
            title: '取消/确定按钮',
            description: '控制弹出层的关闭和设置的生效与否',
            docDescription: '是否显示取消/确定按钮。',
        })
        showFooterButton: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '取消按钮名称',
            description: '取消按钮的显示名称，如果为空则不显示',
            docDescription: '支持自定义修改原取消按钮名称',
        })
        cancelTitle: nasl.core.String = '';

        @Prop({
            group: '主要属性',
            title: '确定按钮名称',
            description: '确定按钮的显示名称，如果为空则不显示',
            docDescription: '支持自定义修改原确定按钮名称',
        })
        okTitle: nasl.core.String = '';

        @Prop({
            group: '主要属性',
            title: '转换器',
            docDescription: '- SON、Unix 时间戳、 Date 对象、 YYYY-MM-DD HH:mm:ss',
            setter: {
                type: 'enumSelect',
                titles: ['JSON', 'Unix 时间戳', 'Date 对象', 'YYYY-MM-DD HH:mm:ss'],
            },
        })
        converter: 'json' | 'timestamp' | 'date' | 'format' = 'format';

        @Prop({
            group: '主要属性',
            title: '前缀图标',
            docDescription: '选择并展示前缀图标',
            setter: {
                type: 'enumSelect',
                titles: ['日历'],
            },
        })
        preIcon: 'calendar' = 'calendar';

        @Prop({
            group: '主要属性',
            title: '后缀图标',
            docDescription: '选择并展示后缀图标',
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
            docDescription: '设置添加到哪个元素，引用元素下、全局body',
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
            docDescription: '是否展示清除按钮',
        })
        clearable: nasl.core.Boolean;

        @Prop({
            group: '状态属性',
            title: '弹出状态',
            description: '弹出状态分为“True(弹出)/False(关闭)”，默认为“弹出”',
        })
        opened: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置日期时间选择输入框宽度大小',
            docDescription: '支持占满、巨大、大、中型、正常、小、迷你。',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置日期时间选择输入框高度大小',
            docDescription: '支持占满、巨大、大、中型、正常、小、迷你。',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Event({
            title: '值选择时',
            description: '日期值发生变化触发',
        })
        onSelect: (event: nasl.ui.DateEvent) => void;

        @Event({
            title: '值变化时',
            description: '选择新时间触发',
        })
        onChange: (event: nasl.ui.DateEvent) => void;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: (event: nasl.ui.FocusEvent) => void;
    }
}
