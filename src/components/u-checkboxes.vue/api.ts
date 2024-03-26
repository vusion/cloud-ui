/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '多选组',
        icon: 'checkboxes',
        description: '多项中选择多个时使用',
        group: "Form"
    })
    export class UCheckboxes<T, V, C extends string> extends ViewComponent {
        @Prop({
            title: '数据',
        })
        data: UCheckboxesOptions<T, V, C>['dataSource'];

        @Prop({
            title: '选中值',
        })
        value: UCheckboxesOptions<T, V, C>['value'];

        @Method({
            title: 'undefined',
            description: '清除缓存，重新加载',
        })
        reload(): void {}
        constructor(options?: Partial<UCheckboxesOptions<T, V, C>>) { super(); }
    }

    export class UCheckboxesOptions<T, V, C extends string> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            docDescription: '支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑',
            designerValue: [{}, {}, {}],
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '该属性为只读状态，当数据源动态绑定集合List\<T>后，会自动识别T的类型并进行展示。',
        })
        dataSchema: T;

        @Prop({
            group: '数据属性',
            title: '选项文本',
            description: '集合的元素类型中，用于显示文本的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        private textField: (item: T) => any;

        @Prop<UCheckboxesOptions<T, V, C>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '用于标识选中值的字段',
            docDescription: '集合的元素类型中，用于标识选中值的属性，支持自定义变更。',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        valueField: (item: T) => V = ((item: any)  => item.value) as any;

        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            sync: true,
            docDescription: '多选组的选中项，返还结构为List\<T>。',
        })
        value: C extends '' ? nasl.collection.List<V> : nasl.core.String;

        @Prop<UCheckboxesOptions<T, V, C>, 'checkAll'>({
            group: '主要属性',
            title: '全选控制',
            description: '是否进行全选',
            setter: {
                concept: 'SwitchSetter',
            },
            onChange: [
                { clear: ['min','max'] }
            ],
        })
        checkAll: nasl.core.Boolean = false;

        @Prop<UCheckboxesOptions<T, V, C>, 'checkAllText'>({
            group: '主要属性',
            title: '全选展示内容',
            description: '全选功能展示的文案内容',
            if: _ => _.checkAll === true,
        })
        checkAllText: nasl.core.String = '全选';

        @Prop<UCheckboxesOptions<T, V, C>, 'checkAllWidth'>({
            group: '主要属性',
            title: '全选项宽度',
            description: '全选功能展示的宽度',
            if: _ => _.checkAll === true,
        })
        checkAllWidth: nasl.core.String = '100px';

        @Prop<UCheckboxesOptions<T, V, C>, 'checkAllDisplay'>({
            group: '主要属性',
            title: '展示方式',
            description: '选择展开方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '同行展示' }, { title: '分行展示' }],
            },
            if: _ => _.checkAll === true,
        })
        checkAllDisplay: 'inline' | 'block' = 'inline';

        @Prop<UCheckboxesOptions<T, V, C>, 'min'>({
            group: '主要属性',
            title: '最小选中数',
            description: '可以勾选多选框的最小数量',
            docDescription: '多选组可以勾选多选框的最小数量。',
            setter: {
                concept: 'NumberInputSetter',
            },
            if: _ => _.checkAll === false,
        })
        min: nasl.core.Decimal = 0;

        @Prop<UCheckboxesOptions<T, V, C>, 'max'>({
            group: '主要属性',
            title: '最大选中数',
            description: '可以勾选多选框的最大数量',
            docDescription: '多选组可以勾选多选框的最大数量。',
            setter: {
                concept: 'NumberInputSetter',
            },
            if: _ => _.checkAll === false,
        })
        max: nasl.core.Decimal;

        @Prop({
            group: '主要属性',
            title: '转换器',
            description: '将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式',
            docDescription: '将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式',
            bindHide: true,
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '无' }, { title: "以', '连接" }, { title: "以'|'连接" }, { title: "以';'连接" }, { title: 'json' }],
            },
        })
        converter: '' | 'join' | 'join:|' | 'join:;' | 'json' = '';

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
            title: '预览',
            description: '显示预览态',
            docDescription: '',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        preview: nasl.core.Boolean = false;


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
            title: '输入时',
            description: '切换选项时触发',
        })
        onInput: (event: nasl.collection.List<V>) => any;

        @Event({
            title: '选中后',
            description: '切换选项时触发',
        })
        onCheck: (event: {
            value: nasl.collection.List<V> | nasl.core.String;
            oldValue: nasl.collection.List<V> | nasl.core.String;
        }) => any;

        @Event({
            title: '改变后',
            description: '选中状态改变时触发',
        })
        onChange: (event: {
            value: nasl.collection.List<V> | nasl.core.String;
            oldValue: nasl.collection.List<V> | nasl.core.String;
        }) => any;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        onBeforeLoad: (event: any) => any;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: (event: any) => any;

        @Slot({
            title: 'undefined',
            description: '插入`<checkbox>`子组件。',
            emptyBackground: 'add-sub',
            snippets: [
                {
                    title: '多选项',
                    code: '<u-checkbox><template slot="item">节点</template></u-checkbox>',
                },
            ],
        })
        slotDefault: () => Array<UCheckbox<T, V>>;

        @Slot({
            title: 'undefined',
            description: '全选/反选',
            snippets: [
                {
                    title: '全选/反选文本',
                    code: "<u-text text='全选'></u-text>",
                },
            ],
        })
        slotCheckAll: () => Array<UText>;

        @Slot({
            title: 'undefined',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }

    @Component({
        title: '多选项',
        description: '多选项',
    })
    export class UCheckbox<T, V> extends ViewComponent {

        constructor(options?: Partial<UCheckboxOptions<T, V>>) { super(); }
    }

    export class UCheckboxOptions<T, V> extends ViewComponentOptions {
        @Prop({
            title: '文本',
            description: '显示文本内容',
        })
        private text: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '标志选中状态的值，`null`表示不确定状态',
            sync: true,
            docDescription: '选项返还的选项值。',
        })
        value: nasl.core.Boolean | null = false;

        @Prop({
            group: '数据属性',
            title: '选项值',
            description: '用于标识选项的值',
        })
        label: V;

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autofocus: nasl.core.Boolean = false;

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
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '选中前',
            description: '切换选中状态前触发',
        })
        onBeforeCheck: (event: {
            value: nasl.core.Boolean;
            oldValue: nasl.core.Boolean;
        }) => any;

        @Event({
            title: '输入时',
            description: '切换选中状态时触发',
        })
        onInput: (event: V) => any;

        @Event({
            title: '选中后',
            description: '切换选中状态时触发',
        })
        onCheck: (event: {
            value: V;
        }) => any;

        @Event({
            title: '改变后',
            description: '选中状态改变时触发',
        })
        onChange: (event: {
            value: V;
            oldValue: V;
        }) => any;

        @Slot({
            title: '项',
            description: '插入文本或 HTML。',
        })
        slotItem: () => Array<ViewComponent>;
    }
}
