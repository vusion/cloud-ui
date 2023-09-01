/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '多选组',
        icon: 'checkboxes',
        description: '多项中选择多个时使用',
    })
    export class UCheckboxes<T, V, C extends string> extends VueComponent {


        @Method({
            title: 'undefined',
            description: '清除缓存，重新加载',
        })
        reload(): void {}
        constructor(options?: Partial<UCheckboxesOptions<T, V, C>>) { super(); }
    }

    export class UCheckboxesOptions<T, V, C extends string> {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            docDescription: '支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑',
            designerValue: [{}, {}, {}],
        })
        dataSource: nasl.collection.List<T>;

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
        })
        private textField: (item: T) => nasl.core.String;

        @Prop<UCheckboxesOptions<T, V, C>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '用于标识选中值的字段',
            docDescription: '集合的元素类型中，用于标识选中值的属性，支持自定义变更。',
            setter: {
                type: 'propertySelect',
            },
        })
        valueField: (item: T) => V;

        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            syncMode: 'both',
            docDescription: '多选组的选中项，返还结构为List\<T>。',
        })
        value: nasl.collection.List<V> = [];

        @Prop({
            group: '主要属性',
            title: '最小选中数',
            description: '可以勾选多选框的最小数量',
            docDescription: '多选组可以勾选多选框的最小数量。',
        })
        min: nasl.core.Decimal = 0;

        @Prop({
            group: '主要属性',
            title: '最大选中数',
            description: '可以勾选多选框的最大数量',
            docDescription: '多选组可以勾选多选框的最大数量。',
        })
        max: nasl.core.Decimal;

        @Prop({
            group: '主要属性',
            title: '转换器',
            description: '将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式',
            docDescription: '将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式',
            bindHide: true,
            setter: {
                type: 'enumSelect',
                titles: ['无', "以','连接", "以'|'连接", "以';'连接", 'json'],
            },
        })
        converter: '' | 'join' | 'join:|' | 'join:;' | 'json' = '';

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

        @Event({
            title: '输入时',
            description: '切换选项时触发',
        })
        onInput: (event: nasl.collection.List<V>) => void;

        @Event({
            title: '选中后',
            description: '切换选项时触发',
        })
        onCheck: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '改变后',
            description: '选中状态改变时触发',
        })
        onChange: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        private onBeforeLoad: (event: EventTarget) => void;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: (event: nasl.ui.BaseEvent) => void;

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
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<VueComponent>;
    }

    @Component({
        title: '多选项',
        description: '多选项',
    })
    export class UCheckbox<T, V> extends VueComponent {

        constructor(options?: Partial<UCheckboxOptions<T, V>>) { super(); }
    }

    export class UCheckboxOptions<T, V> {
        @Prop({
            title: '文本',
            description: '显示文本内容',
        })
        private text: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '标志选中状态的值，`null`表示不确定状态',
            syncMode: 'both',
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
        })
        autofocus: nasl.core.Boolean = false;

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
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）。',
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '选中前',
            description: '切换选中状态前触发',
        })
        private onBeforeCheck: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '输入时',
            description: '切换选中状态时触发',
        })
        onInput: (event: Boolean) => void;

        @Event({
            title: '选中后',
            description: '切换选中状态时触发',
        })
        onCheck: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '改变后',
            description: '选中状态改变时触发',
        })
        onChange: (event: nasl.ui.ChangeEvent) => void;
    }
}
