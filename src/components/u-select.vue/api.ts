/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '选择器',
        icon: 'select',
        description: '下拉选择器，支持单选、多选、搜索等功能',
    })
    export class USelect<T, V, P extends boolean, M extends boolean, C extends string> extends VueComponent {
        @Prop({
            title: '数据',
        })
        data: USelectOptions<T, V, P, M, C>['dataSource'];

        value: USelectOptions<T, V, P, M, C>['value'];

        @Method({
            title: 'undefined',
            description: '弹出选择框。',
        })
        open(): void {}

        @Method({
            title: 'undefined',
            description: '关闭选择框。',
        })
        close(): void {}

        @Method({
            title: 'undefined',
            description: '切换弹出/关闭状态。',
        })
        toggle(
            @Param({
                title: 'undefined',
                description: '可选。弹出/关闭状态',
            })
            opened?: nasl.core.Boolean,
        ): void {}

        @Method({
            title: 'undefined',
            description: '清除缓存，重新加载',
        })
        reload(): void {}

        @Method({
            title: 'undefined',
            description: '添加项',
        })
        addItem(
            @Param({
                title: 'undefined',
                description: '当前添加的项',
            })
            item: T,
            @Param({
                title: 'undefined',
                description: '是否添加到列表的第一项',
            })
            inFirst: nasl.core.Boolean = false,
        ): void {}
        constructor(options?: Partial<USelectOptions<T, V, P, M, C>>) { super(); }
    }

    export class USelectOptions<T, V, P extends boolean, M extends boolean, C extends string> {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            docDescription: '支持动态绑定集合类型变量（List<T>）或输出参数为集合类型的逻辑',
        })
        dataSource: P extends true ? { list: nasl.collection.List<T>; total: nasl.core.Integer } : nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '该属性为只读状态，当数据源动态绑定集合List<T>后，会自动识别T的类型并进行展示。',
        })
        dataSchema: T;

        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            syncMode: 'both',
            docDescription: '当前选择的值',
        })
        value: M extends true ? (C extends '' ? nasl.collection.List<V> : nasl.core.String) : V;

        @Prop<USelectOptions<T, V, P, M, C>, 'textField'>({
            group: '数据属性',
            title: '文本字段',
            description: '集合的元素类型中，用于显示文本的属性名称',
            docDescription: '集合的元素类型中，用于显示文本的属性名称，支持自定义变更。',
            setter: {
                type: 'propertySelect',
            },
        })
        textField: (item: T) => nasl.core.String;

        @Prop<USelectOptions<T, V, P, M, C>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '集合的元素类型中，用于标识选中值的属性',
            docDescription: '集合的元素类型中，用于标识选中值的属性，支持自定义变更',
            setter: {
                type: 'propertySelect',
            },
        })
        valueField: (item: T) => V;

        @Prop({
            group: '数据属性',
            title: '分页加载更多',
            description: '设置是否分页加载更多',
            docDescription: '是否使用分页功能加载更多',
            setter: {
                type: 'switch',
            },
        })
        private pageable: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '后端分页',
            description: '是否使用后端分页',
            docDescription: '控制是否使用后端分页，不支持自定义分页条数，默认为50条',
            setter: {
                type: 'switch',
            },
        })
        private remotePaging: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '分页',
            description: '设置是否分页展示数据',
        })
        pagination: P;

        @Prop<USelectOptions<T, V, P, M, C>, 'pageSize'>({
            group: '数据属性',
            title: '默认每页条数',
            setter: {
                type: 'numberInput',
                min: 10,
            },
            if: _ => _.pagination === true,
        })
        pageSize: nasl.core.Decimal = 50;

        @Prop({
            group: '数据属性',
            title: '初始化排序规则',
            description: '设置数据初始化时的排序字段和顺序规则',
        })
        sorting: { field: nasl.core.String, order: 'asc' | 'desc' } = {field:null,order:'desc'};

        @Prop({
            group: '数据属性',
            title: '选项辅助文本',
            description: '选项的辅助说明信息，展示在选项文本下方',
            setter: {
                type: 'switch',
            },
        })
        description: nasl.core.Boolean = false;

        @Prop<USelectOptions<T, V, P, M, C>, 'descriptionField'>({
            group: '数据属性',
            title: '辅助文本字段',
            description: '集合的元素类型中，用于显示文本下方辅助描述的字段',
            docDescription: '集合的元素类型中，用于显示文本下方辅助描述的属性名称',
            setter: {
                type: 'propertySelect',
            },
            if: _ => _.description === true,
        })
        descriptionField: (item: T) => nasl.core.String;

        @Prop<USelectOptions<T, V, P, M, C>, 'iconField'>({
            group: '数据属性',
            title: '图标展示字段',
            description: '集合的元素类型中，用于显示文本前面图标的属性名称。与文本字段、值字段类似的写法',
            setter: {
                type: 'propertySelect',
            },
        })
        iconField: (item: T) => nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '选中值完整数据',
            description: '当下拉列表是分页或加载更多时，需要使用该字段回显选择框内数据。',
            docDescription: '当下拉列表是分页或加载更多时，需要使用该字段回显选择框内数据。',
        })
        private selectedValuesData: nasl.collection.List<{ text: nasl.core.String, value: V }>;

        @Prop({
            group: '数据属性',
            title: '筛选',
            description: '设置是否可以筛选，开启将会支持搜索。',
            docDescription: '开启后选择框可输入文本进行筛选',
            setter: {
                type: 'switch',
            },
        })
        filterable: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '后端筛选',
            description: '设置是否使用后端筛选',
            setter: {
                type: 'switch',
            },
        })
        private remoteFiltering: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '匹配方法',
            description: '过滤时的匹配方法',
            docDescription: '支持配置过滤时的匹配模式，共有包括、匹配开头或匹配结尾3种模式',
            setter: {
                type: 'enumSelect',
                titles: ['包括', '匹配开头', '匹配结尾'],
            },
        })
        matchMethod: 'includes' | 'startsWith' | 'endsWith' = 'includes';

        @Prop({
            group: '主要属性',
            title: '可扩展下拉项',
            description: '设置是否可扩展下拉项,开启后可自定义下拉框选项',
            setter: {
                type: 'switch',
            },
        })
        showRenderFooter: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '全选控制',
            description: '是否存在可以控制选项的全选/反选',
            docDescription: '是否存在可以控制选项的全选/反选',
            setter: {
                type: 'switch',
            },
        })
        hasAllCheckItem: nasl.core.Boolean = false;

        @Prop<USelectOptions<T, V, P, M, C>, 'allCheckItemText'>({
            group: '主要属性',
            title: '全选展示内容',
            description: '是否存在可以控制选项的全选/反选',
            docDescription: '是否存在可以控制选项的全选/反选',
            if: _ => _.hasAllCheckItem === true,
        })
        allCheckItemText: nasl.core.String = '全选';

        @Prop({
            group: '主要属性',
            title: '转换器',
            description: '将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式。',
            docDescription: '将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式',
            bindHide: true,
            setter: {
                type: 'enumSelect',
                titles: ['无', "以','连接", "以'|'连接", "以';'连接", 'json'],
            },
        })
        converter: '' | 'join' | 'join:|' | 'join:;' | 'json' = '';

        @Prop({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '选择框无内容时的提示信息，支持自定义编辑，默认为请选择',
        })
        placeholder: nasl.core.String = '请选择';

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '控制是否在进入页面时聚焦到该组件',
            designerValue: false,
            setter: {
                type: 'switch',
            },
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '前缀图标',
            docDescription: '支持添加前缀图标，如搜索图标',
            setter: {
                type: 'enumSelect',
                titles: ['搜索'],
            },
        })
        prefix: 'search';

        @Prop({
            group: '主要属性',
            title: '后缀图标',
            docDescription: '支持添加后缀图标，如搜索图标',
            setter: {
                type: 'enumSelect',
                titles: ['搜索'],
            },
        })
        suffix: 'search';

        @Prop({
            group: '主要属性',
            title: '弹出层位置依据',
            description: '设置弹出层依据哪个元素定位位置，可选值：`body`表示添加到 document.body，`reference`表示添加到参考元素中。',
            docDescription: '设置添加到哪个元素',
            setter: {
                type: 'enumSelect',
                titles: ['引用元素下', '全局body'],
            },
        })
        appendTo: 'reference' | 'body' = 'reference';

        @Prop({
            group: '交互属性',
            title: '可清除',
            description: '可点击清除按钮一键清除所选内容',
            docDescription: '控制是否显示清除按钮，支持一键清除所选内容',
            setter: {
                type: 'switch',
            },
        })
        clearable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '多选项展示形式',
            description: '多选项过多时的展示形式',
            setter: {
                type: 'enumSelect',
                titles: ['过多时省略', '过多时收缩', '过多时显示'],
            },
        })
        tagsOverflow: 'hidden' | 'collapse' | 'visible' = 'collapse';

        @Prop({
            group: '交互属性',
            title: '可取消',
            description: '设置是否可以取消选择',
            setter: {
                type: 'switch',
            },
        })
        private cancelable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可多选',
            description: '设置是否可以多选行',
            docDescription: '是否可以多选',
        })
        multiple: M = false as any;

        @Prop({
            group: '状态属性',
            title: '初始即加载',
            description: '设置初始时是否立即加载',
            docDescription: '是否在初始时立即加载',
            setter: {
                type: 'switch',
            },
        })
        initialLoad: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '加载中文字',
            description: '正在加载中的文字，使用分页加载时才会出现',
        })
        private loadingText: nasl.core.String = '加载中...';

        @Prop({
            group: '状态属性',
            title: '展示暂无数据文案',
            description: '是否在数据为空时展示暂无数据的文字提示',
            docDescription: '是否在数据为空时展示暂无数据的文字提示',
            setter: {
                type: 'switch',
            },
        })
        showEmptyText: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '暂无数据文案',
            description: '暂无数据状态显示的提示文案',
            docDescription: '暂无数据时的文字',
        })
        emptyText: nasl.core.String = '暂无数据';

        @Prop({
            group: '状态属性',
            title: '为空自动禁用',
            description: '为空时置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                type: 'switch',
            },
        })
        emptyDisabled: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入。',
            setter: {
                type: 'switch',
            },
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                type: 'switch',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '弹出状态',
            description: '弹出状态分为“True(弹出)/False(关闭)”，默认为“弹出”',
            syncMode: 'onlySync',
            docDescription: '开启时加载下拉框时，下拉框自动弹出，默认关闭',
            setter: {
                type: 'switch',
            },
        })
        opened: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置选择框宽度大小',
            docDescription: '设置选择框宽度大小，支持占满、巨大、大、中型、正常、小共6种模式',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置选择框高度大小',
            docDescription: '设置选择框高度大小，支持占满、巨大、大、中型、正常、小共6种模式',
            setter: {
                type: 'enumSelect',
                titles: ['占满', '巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '数据属性',
            title: '大小写敏感',
            description: '过滤时大小写是否敏感',
        })
        private caseSensitive: nasl.core.String = 'includes';

        @Prop({
            group: '数据属性',
            title: '自动补全',
            description: '是否开启自动补充模式，用于增加列表中没有的项',
            setter: {
                type: 'switch',
            },
        })
        private autoComplete: nasl.core.Boolean = false;

        @Event({
            title: '选择前',
            description: '选择某一项前触发。',
        })
        private onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;

        @Event({
            title: '选择时',
            description: '选择某一项时触发',
        })
        onInput: (event: V) => void;

        @Event({
            title: '选择后',
            description: '选择某一项后触发。单选模式中：',
        })
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;

        @Event({
            title: '改变后',
            description: '选择值改变时触发。单选模式中：',
        })
        onChange: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            values: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;

        @Event({
            title: '弹出前',
            description: '弹出前触发。',
        })
        private onBeforeOpen: () => void;

        @Event({
            title: '弹出后',
            description: '弹出后触发。',
        })
        onOpen: () => void;

        @Event({
            title: '关闭前',
            description: '关闭前触发。',
        })
        private onBeforeClose: () => void;

        @Event({
            title: '关闭后',
            description: '关闭时触发。',
        })
        onClose: () => void;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        private onBeforeLoad: () => void;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: () => void;

        @Event({
            title: '点击前缀图标',
            description: '点击前缀图标后触发',
        })
        onClickPrefix: (event: nasl.ui.MouseEvent) => void;

        @Event({
            title: '点击后缀图标',
            description: '点击后缀图标后触发',
        })
        onClickSuffix: (event: nasl.ui.MouseEvent) => void;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: (event: nasl.ui.FocusEvent) => void;

        @Event({
            title: '搜索前',
            description: '可搜索输入框，在输入搜索文字时',
        })
        onBeforeFilter: (event: {
            filterText: nasl.core.String;
        }) => void;

        @Slot({
            title: '默认',
            description: '插入`<u-select-item>`、`<u-select-divider>`或`<u-select-group>`子组件。',
            snippets: [
                {
                    title: '选项',
                    code: '<u-select-item><u-text text="选项"></u-text></u-select-item>',
                },
                {
                    title: '分组',
                    code: '<u-select-group><template #title><u-text text="分组"></u-text></template><u-select-item><u-text text="选项"></u-text></u-select-item></u-select-group>',
                },
                {
                    title: '分隔线',
                    code: '<u-select-divider></u-select-divider>',
                },
            ],
        })
        slotDefault: () => Array<USelectItem<T, V> | USelectGroup<T, V> | USelectDivider>;
    }

    @Component({
        title: '选择项',
        description: '选择项',
    })
    export class USelectItem<T, V> extends VueComponent {

        constructor(options?: Partial<USelectItemOptions<T, V>>) { super(); }
    }

    export class USelectItemOptions<T, V> {
        @Prop({
            title: '选项文本',
            description: '此项的显示值',
        })
        text: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '此项的值。',
            docDescription: '此项的值',
        })
        value: V;

        @Prop({
            group: '数据属性',
            title: '选项辅助文本',
            description: '选项的辅助说明信息，展示在选项文本下方',
            docDescription: '选项文本的辅助描述，展示在选项文本下方',
        })
        description: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '相关对象',
            description: '相关对象。当选择此项时，抛出的事件会传递该对象，便于开发。',
            docDescription: '相关对象。当选择此项时，抛出的事件会传递该对象，便于开发',
        })
        item: T;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '该项不可选，默认关闭',
            setter: {
                type: 'switch',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '选择前',
            description: '选择此项前触发',
        })
        private onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;

        @Slot({
            title: '默认',
            description: '插入文本或 HTML。',
        })
        slotDefault: (current: Current<T>) => Array<VueComponent>;
    }

    @Component({
        title: '选择分组',
        description: '选择分组',
    })
    export class USelectGroup<T, V> extends VueComponent {

        constructor(options?: Partial<USelectGroupOptions<T, V>>) { super(); }
    }

    export class USelectGroupOptions<T, V> {
        @Prop({
            group: '主要属性',
            title: '标题',
            docDescription: '选择分组的标题，标题只有在没有文本插槽的时候生效',
        })
        title: nasl.core.String;

        @Slot({
            title: '默认',
            description: '插入`<u-select-item>`或`<u-select-divider>`子组件。',
            snippets: [
                {
                    title: '选项',
                    code: '<u-select-item><u-text text="选项"></u-text></u-select-item>',
                },
            ],
        })
        slotDefault: () => Array<USelectItem<T, V>>;

        @Slot({
            title: '标题',
            description: '自定义标题文本。',
        })
        private slotTitle: () => Array<VueComponent>;

        @Slot({
            title: '附加内容',
            description: '在右侧可以附加内容。',
        })
        private slotExtra: () => Array<VueComponent>;
    }

    @Component({
        title: '分隔线',
        description: '分隔线',
    })
    export class USelectDivider extends VueComponent {

        constructor(options?: Partial<USelectDividerOptions>) { super(); }
    }

    export class USelectDividerOptions {

    }
}
