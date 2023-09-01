/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '步骤条',
        icon: 'steps',
        description: '当操作需要分步骤时使用',
    })
    export class USelectableSteps<T> extends VueComponent {


        @Method({
            title: 'undefined',
            description: '重新加载数据',
        })
        reload(): void {}
        constructor(options?: Partial<USelectableStepsOptions<T>>) { super(); }
    }

    export class USelectableStepsOptions<T> {
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

        @Prop({
            group: '数据属性',
            title: '标签项标题',
            description: '数据源集合的元素，用于显示步骤标题的属性',
        })
        private titleField: (item: T) => nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '描述项标题',
            description: '数据源集合的元素，用于显示步骤描述的属性',
        })
        private descField: (item: T) => nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '当前步骤',
            description: '设置当前处于选中状态的步骤',
            syncMode: 'both',
            docDescription: '当前步骤数',
        })
        value: nasl.core.Decimal = 0;

        @Prop({
            group: '主要属性',
            title: '步骤条方向',
            docDescription: '步骤条的方向，支持水平或垂直',
            setter: {
                type: 'enumSelect',
                titles: ['横向', '竖向'],
            },
        })
        direction: 'horizontal' | 'vertical' = 'horizontal';

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '是否只读，非只读的情况下可以选择',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '尺寸',
            docDescription: '设置尺寸',
            setter: {
                type: 'enumSelect',
                titles: ['自适应', '正常'],
            },
        })
        size: 'auto' | 'normal' = 'normal';

        @Event({
            title: '选择前',
            description: '选择某一步骤前触发',
        })
        private onBeforeSelect: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '选择后',
            description: '选择某一步骤时触发',
        })
        onSelect: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '改变后',
            description: '步骤数改变后触发',
        })
        onChange: (event: nasl.ui.ChangeEvent) => void;

        @Slot({
            title: 'undefined',
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
        slotTitle: (current: Current<T>) => Array<VueComponent>;

        @Slot({
            title: '描述',
        })
        slotDesc: (current: Current<T>) => Array<VueComponent>;
    }

    @Component({
        title: '步骤条项',
        description: '步骤条项',
    })
    export class USelectableStep extends VueComponent {

        constructor(options?: Partial<USelectableStepOptions>) { super(); }
    }

    export class USelectableStepOptions {
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
                type: 'enumSelect',
                titles: ['等待', '进行中', '完成', '错误'],
            },
        })
        status: 'pending' | 'selected' | 'passed' | 'failed';

        @Prop({
            group: '主要属性',
            title: '图标',
            docDescription: '在该步骤展示的图标',
        })
        icon: nasl.core.String = '';

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/07.%E9%80%89%E6%8B%A9%E5%99%A8/170.%E6%AD%A5%E9%AA%A4%E6%9D%A1.html',
            docDescription: '是否只读，非只读的情况下可以选择',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '禁用该项',
        })
        disabled: nasl.core.Boolean = false;

        @Slot({
            title: 'undefined',
            description: '插入文本或 HTML',
        })
        slotDefault: () => Array<VueComponent>;

        @Slot({
            title: 'undefined',
            description: '自定义标题文本',
        })
        slotTitle: () => Array<VueComponent>;
    }
}
