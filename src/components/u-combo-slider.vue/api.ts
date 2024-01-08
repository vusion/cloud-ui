/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '滑块',
        icon: 'slider',
        description: '滑动选择',
        group: "Form"
    })
    export class UComboSlider extends ViewComponent {

        constructor(options?: Partial<UComboSliderOptions>) { super(); }
    }

    export class UComboSliderOptions extends ViewComponentOptions {
        @Prop({
            title: '提示',
        })
        private tip: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '滑块值',
            sync: true,
            docDescription: '滑块的值',
        })
        value: nasl.core.Decimal | Array<nasl.core.Decimal> = 0;

        @Prop({
            group: '数据属性',
            title: '最小值',
            docDescription: '可设置的最大值 。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        min: nasl.core.Decimal = 0;

        @Prop({
            group: '数据属性',
            title: '最大值',
            docDescription: '可设置的最小值 。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        max: nasl.core.Decimal = 100;

        @Prop({
            group: '数据属性',
            title: '间隔',
            description: '间隔，`0`表示连续',
            docDescription: '表示点击按钮或按上下键所增加或减少的量，0表示连续',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        step: nasl.core.Decimal = 1;

        @Prop({
            group: '数据属性',
            title: '精度',
            description: '精度，表示数字要保留的最小单位，整数、小数均可',
            docDescription: '限制数字要保留的最小单位，整数、小数均可，如需要保留两位小数，则填入`0.01`',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        precision: nasl.core.Decimal = 1;

        @Prop({
            group: '数据属性',
            title: '范围',
            description: '进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值',
            docDescription: '进一步对`值`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值',
        })
        range: Array<nasl.core.Decimal> = [];

        @Prop({
            group: '数据属性',
            title: '格式化',
            description: '格式化字符串，具体参见示例。也可以传入一个包含`get`和`set`方法的格式化对象',
        })
        private formatter: nasl.core.String | object;

        @Prop({
            group: '数据属性',
            title: '双滑块',
            description: '设置是否展示双滑块',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        multiple: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '单位',
            docDescription: '数值右侧展示的文字',
        })
        unit: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '同步时机',
            docDescription: '当使用输入框时数值同步的时机',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '输入时同步' }, { title: '失焦时同步' }],
            },
        })
        syncOn: 'input' | 'blur' = 'input';

        @Prop({
            group: '主要属性',
            title: '隐藏按钮',
            docDescription: '是否隐藏上下调节按钮',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        hideButtons: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '展示提示信息',
            description: '鼠标悬浮时展示Tooltip提示信息',
            docDescription: '鼠标悬浮时展示提示文字',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showTooltip: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '提示信息',
            description: 'Tooltip提示信息设置。在展示提示信息开关打开的情况下才会生效',
            docDescription: 'tooltip文字设置，在展示Tooltip开关打开的情况下才会生效',
        })
        tooltip: nasl.core.String;

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

        @Event({
            title: '值改变时',
            description: '滑块的值改变时触发',
        })
        onInput: (event: nasl.core.Decimal) => any;

        @Event({
            title: '拖动滑块时',
            description: '拖动滑块时触发',
        })
        onSlide: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
            percent: nasl.core.Decimal;
            index: nasl.core.Decimal;
        }) => any;

        @Event({
            title: '值改变后',
            description: '滑块的值改变后触发',
        })
        onChange: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
        }) => any;

        @Event({
            title: '改变数字输入框的值后',
            description: '改变数字输入框的值后触发',
        })
        onNumberInput: (event: nasl.core.Decimal) => any;

        @Event({
            title: '拖动滑块结束后',
            description: '拖动滑块结束后触发',
        })
        onSlideEnd: (event: nasl.core.Decimal) => any;

        @Slot({
            title: '提示',
            description: '插入文本或 HTML。',
        })
        slotTip: () => Array<ViewComponent>;
    }
}
