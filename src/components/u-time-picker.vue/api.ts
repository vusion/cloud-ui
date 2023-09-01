/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '时间选择',
        icon: 'time-picker',
        description: '时间选择',
    })
    export class UTimePicker extends VueComponent {

        constructor(options?: Partial<UTimePickerOptions>) { super(); }
    }

    export class UTimePickerOptions {
        @Prop({
            group: '数据属性',
            title: '值',
            description: '默认显示的时间值，格式如08:08:08',
            syncMode: 'both',
            docDescription: '默认显示的日期值。',
        })
        time: nasl.core.String = '';

        @Prop({
            group: '数据属性',
            title: '最小单位',
            description: '最小时间单位',
            docDescription: '最小时间单位，支持秒或分',
            setter: {
                type: 'enumSelect',
                titles: ['秒', '分'],
            },
        })
        minUnit: 'second' | 'minute' = 'second';

        @Prop({
            group: '数据属性',
            title: '最小时间值',
            description: '最小可选的时间值，填写null则不限制，日期填写格式为“00:00:00”',
            docDescription: '支持输入的最小时间。',
        })
        minTime: nasl.core.String = '00:00:00';

        @Prop({
            group: '数据属性',
            title: '最大时间值',
            description: '最大可选的时间值，填写null则不限制，日期填写格式为“00:00:00”',
            docDescription: '支持输入的最大时间',
        })
        maxTime: nasl.core.String = '23:59:59';

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '是否自动获得焦点',
            designerValue: false,
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '此刻按钮',
            description: '点击可快捷选择当前时间',
            docDescription: '是否展示此刻按钮',
        })
        showRightNowButton: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '此刻按钮名称',
            docDescription: '支持自定义修改原此刻按钮名称',
        })
        rightNowTitle: nasl.core.String = '';

        @Prop({
            group: '主要属性',
            title: '取消/确定按钮',
            description: '控制弹出层的关闭和设置的生效与否',
            docDescription: '是否展示取消/确定按钮',
        })
        showFooterButton: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '取消按钮名称',
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
            title: '前缀图标',
            docDescription: '支持配置选择框前缀图标，仅支持时间图标',
            setter: {
                type: 'enumSelect',
                titles: ['时间'],
            },
        })
        preIcon: 'time' = 'time';

        @Prop({
            group: '主要属性',
            title: '后缀图标',
            docDescription: '支持配置选择框后缀图标，仅支持时间图标',
            setter: {
                type: 'enumSelect',
                titles: ['时间'],
            },
        })
        suffixIcon: 'time';

        @Prop({
            group: '主要属性',
            title: '弹出层位置依据',
            description: `设置弹出层依据哪个元素定位位置，可选值：'body'表示添加到 document.body，'reference'表示添加到参考元素中。`,
            docDescription: '设置添加到哪个元素：引用元素下、全局body',
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
        clearable: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '显示状态',
            description: '显示状态分为“True(打开)/False(关闭)”，默认为“打开”',
        })
        private visible: nasl.core.Boolean = true;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置时间选择输入框宽度大小',
            docDescription: '支持占满、巨大、大、中型、正常、小、迷你',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置时间选择输入框高度大小',
            docDescription: '支持占满、巨大、大、中型、正常、小、迷你',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Event({
            title: '改变后',
            description: '时间改变时触发',
        })
        onChange: (event: nasl.ui.DateEvent) => void;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: (event: nasl.ui.FocusEvent) => void;
    }
}
