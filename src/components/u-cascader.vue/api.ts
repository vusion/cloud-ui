/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '级联选择',
        icon: 'cascade-select',
        description: '一次选择多个相关联的项',
    })
    export class UCascader<T, V> extends VueComponent {


        @Method({
            title: 'undefined',
            description: '弹出实例。',
        })
        open(): void {}

        @Method({
            title: 'undefined',
            description: '关闭实例。',
        })
        close(): void {}

        @Method({
            title: 'undefined',
            description: '清空输入框。',
        })
        clear(): void {}

        @Method({
            title: 'undefined',
            description: '重新加载数据',
        })
        reload(): void {}
        constructor(options?: Partial<UCascaderOptions<T, V>>) { super(); }
    }

    export class UCascaderOptions<T, V> {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '数据列表，支持直接放置多层的数据源也支持通过单层的数据和`父节点字段名`或`子节点字段名`构建树形',
        })
        dataSource: nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '集合类型每一元素的数据类型',
        })
        dataSchema: T;

        @Prop<UCascaderOptions<T, V>, 'field'>({
            group: '数据属性',
            title: '文本字段',
            description: '集合的元素类型中，用于显示文本的属性名称',
            docDescription: '集合的元素类型中，用于显示文本的属性名称',
            setter: {
                type: 'propertySelect',
            },
        })
        field: (item: T) => nasl.core.String;

        @Prop<UCascaderOptions<T, V>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '集合的元素类型中，用于标识选中值的属性',
            docDescription: '集合的元素类型中，用于标识选中值的属性',
            setter: {
                type: 'propertySelect',
            },
        })
        valueField: (item: T) => V;

        @Prop<UCascaderOptions<T, V>, 'childrenField'>({
            group: '数据属性',
            title: '子级节点字段',
            description: '树形数据子节点字段名，默认为children',
            docDescription: '树形数据子节点字段名，默认为children',
            setter: {
                type: 'propertySelect',
            },
            disabledIf: _ => _.parentField !== null && _.parentField !== '',
        })
        childrenField: nasl.core.String = 'children';

        @Prop<UCascaderOptions<T, V>, 'parentField'>({
            group: '数据属性',
            title: '父级节点字段',
            description: '当数据源为平铺数据时自动生成级联数据的节点字段名，重要：值字段名需要一起配置',
            docDescription: '当数据源为平铺数据时自动生成级联数据的节点字段名，重要：值字段名需要一起配置',
            setter: {
                type: 'propertySelect',
            },
            disabledIf: _ => _.childrenField !== null && _.childrenField !== '',
        })
        parentField: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '值',
            syncMode: 'both',
            docDescription: '选择器的值',
        })
        value: V;

        @Prop({
            group: '数据属性',
            title: '筛选',
            description: '设置是否可以筛选，开启将会显示搜索框。',
            docDescription: '是否可以过滤（搜索），开启将会显示搜索框',
        })
        filterable: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '搜索框为空时提示文本',
        })
        placeholder: nasl.core.String = '请选择';

        @Prop({
            group: '主要属性',
            title: '只显示最后一项',
            description: '定义是否显示完整的路径，ture时只显示最后一项',
            docDescription: '定义是否显示完整的路径，ture时只显示最后一项',
        })
        showFinalValue: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '是否自动获取焦点',
            designerValue: false,
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '触发方式',
            docDescription: '触发方式',
            setter: {
                type: 'enumSelect',
                titles: ['点击', '悬浮'],
            },
        })
        trigger: 'click' | 'hover' = 'click';

        @Prop({
            group: '交互属性',
            title: '可清空',
            description: '设置是否可以清空搜索框，开启后将在有内容时显示清除按钮。',
            docDescription: '开启并在输入框有内容时会显示清除按钮',
        })
        clearable: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '禁用选择器',
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '弹出状态',
            description: '弹出状态分为“True(弹出)/False(关闭)”，默认为“弹出”',
            docDescription: '切换弹出/关闭状态',
        })
        opened: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置级联框宽度大小',
            docDescription: '设置级联框宽度大小',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置级联框高度大小',
            docDescription: '设置级联框高度大小',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '数据属性',
            title: '连接符',
            description: '将选中的值以选择的符号作为连接符，转为字符串格式,不可为空值',
            setter: {
                type: 'enumSelect',
                titles: ["以','连接", "以'|'连接", "以' / '连接"],
            },
        })
        private join: ',' | '|' | ' / ' = ' / ';

        @Event({
            title: '输入时',
            description: '选择某一项时触发',
        })
        onInput: (event: String) => void;

        @Event({
            title: '选择后',
            description: '选择某一项时触发',
        })
        onSelect: (event: nasl.ui.CascadeCapsulesEvent) => void;

        @Event({
            title: '获得焦点',
            description: '获得焦点时触发。',
        })
        onFocus: (event: nasl.ui.FocusEvent) => void;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: (event: nasl.ui.FocusEvent) => void;

        @Event({
            title: '清空后',
            description: '清空后触发。',
        })
        onClear: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        private onBeforeLoad: (event: EventTarget) => void;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: (event: null) => void;
    }
}
