/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '步骤条',
        icon: 'steps',
        description: '当操作需要分步骤时使用',
        group: 'Selector'
    })
    export class USelectableSteps<T> extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '重新加载数据',
        })
        reload(): void {}
        constructor(options?: Partial<USelectableStepsOptions<T>>) { super(); }
    }

    export class USelectableStepsOptions<T> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            designerValue: [{}, {}, {}],
        })
        dataSource: nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '集合类型每一元素的数据类型',
        })
        dataSchema: T;

        @Prop<USelectableStepsOptions<T>, any>({
            group: '数据属性',
            title: '标签项标题',
            description: '数据源集合的元素，用于显示步骤标题的属性',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        private titleField: (item: T) => any;

        @Prop<USelectableStepsOptions<T>, any>({
            group: '数据属性',
            title: '描述项标题',
            description: '数据源集合的元素，用于显示步骤描述的属性',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        private descField: (item: T) => any;

        @Prop({
            group: '数据属性',
            title: '当前步骤',
            description: '设置当前处于选中状态的步骤',
            sync: true,
            docDescription: '当前步骤数',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        value: nasl.core.Decimal = 0;

        @Prop({
            group: '主要属性',
            title: '步骤条方向',
            docDescription: '步骤条的方向，支持水平或垂直',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '横向' }, { title: '竖向' }],
            },
        })
        direction: 'horizontal' | 'vertical' = 'horizontal';

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '是否只读，非只读的情况下可以选择',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '尺寸',
            docDescription: '设置尺寸',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '自适应' }, { title: '正常' }],
            },
        })
        size: 'auto' | 'normal' = 'normal';

        @Event({
            title: '选择前',
            description: '选择某一步骤前触发',
        })
        onBeforeSelect: (event: {
            value: nasl.core.Integer;
            oldValue: nasl.core.Integer;
            item: T;
        }) => any;

        @Event({
            title: '选择后',
            description: '选择某一步骤时触发',
        })
        onSelect: (event: {
            value: nasl.core.Integer;
            oldValue: nasl.core.Integer;
            item: T;
        }) => any;

        @Event({
            title: '改变后',
            description: '步骤数改变后触发',
        })
        onChange: (event: {
            value: nasl.core.Integer;
            oldValue: nasl.core.Integer;
            item: T;
            oldItem: T;
        }) => any;

        @Slot({
            title: '默认',
            description: '插入`<u-selectable-step>`子组件。',
            snippets: [
                {
                    title: '步骤条子组件',
                    code: '<u-selectable-step><template #title><u-text text="步骤 N"></u-text></template></u-selectable-step>',
                },
            ],
        })
        slotDefault: () => Array<USelectableStep>;

        @Slot({
            title: '头部标题',
        })
        slotTitle: (current: Current<T>) => Array<ViewComponent>;

        @Slot({
            title: '描述',
        })
        slotDesc: (current: Current<T>) => Array<ViewComponent>;
    }

    @Component({
        title: '步骤条项',
        description: '步骤条项',
    })
    export class USelectableStep extends ViewComponent {

        constructor(options?: Partial<USelectableStepOptions>) { super(); }
    }

    export class USelectableStepOptions  extends ViewComponentOptions {
        @Prop({
            title: '标题',
            description: '步骤标题文本',
        })
        private title: nasl.core.String;

        @Prop({
            title: '描述信息',
            description: '步骤描述信息',
        })
        private desc: nasl.core.String = '';

        @Prop({
            group: '数据属性',
            title: '状态值',
            description: '若不配置该属性时，会使用步骤条的当前步骤来自动指定状态；如果该属性与当前步骤指定的状态不匹配会覆盖自动匹配的状态',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '等待' }, { title: '进行中' }, { title: '完成' }, { title: '错误' }],
            },
        })
        status: 'pending' | 'selected' | 'passed' | 'failed';

        @Prop({
            group: '主要属性',
            title: '图标',
            docDescription: '在该步骤展示的图标',
            setter: {
                concept: 'IconSetter',
            }
        })
        icon: nasl.core.String = '';

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/07.%E9%80%89%E6%8B%A9%E5%99%A8/170.%E6%AD%A5%E9%AA%A4%E6%9D%A1.html',
            docDescription: '是否只读，非只读的情况下可以选择',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '禁用该项',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Slot({
            title: '默认',
            description: '插入文本或 HTML',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: '标题',
            description: '自定义标题文本',
        })
        slotTitle: () => Array<ViewComponent>;

        @Slot({
            title: '描述',
        })
        slotDesc: () => Array<ViewComponent>;
    }
}
