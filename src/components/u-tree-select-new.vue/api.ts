/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '树选择',
        icon: 'tree-view',
        description: '树选择',
    })
    export class UTreeSelectNew<T, V, M extends boolean> extends VueComponent {


        @Method({
            title: 'undefined',
            description: '重新加载',
        })
        reload(): void {}
        constructor(options?: Partial<UTreeSelectNewOptions<T, V, M>>) { super(); }
    }

    export class UTreeSelectNewOptions<T, V, M extends boolean> {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            docDescription: '支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的',
            designerValue: [{}, {}, {}],
        })
        dataSource: nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '该属性为只读状态，当数据源动态绑定集合List<T>后，会自动识别T的类型并进行展示',
        })
        dataSchema: T;

        @Prop({
            group: '数据属性',
            title: '文本字段',
            description: '集合的元素类型中，用于显示文本的属性名称',
        })
        textField: (item: T) => nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '值字段',
            description: '集合的元素类型中，用于标识选中值的属性',
            docDescription: '集合的元素类型中，用于标识选中值的属性',
        })
        valueField: (item: T) => V;

        @Prop({
            group: '数据属性',
            title: '父级值字段',
            description: '集合的元素类型中，用于标识父节点的属性',
            docDescription: '集合的元素类型中，用于标识父节点的属性',
        })
        parentField: nasl.core.String = '';

        @Prop({
            group: '数据属性',
            title: '子级值字段',
            description: '集合的元素类型中，用于标识子节点的属性，默认为children',
            docDescription: '集合的元素类型中，用于标识子节点的属性',
        })
        childrenField: nasl.core.String = 'children';

        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '选择后，所选中的值',
            syncMode: 'both',
            docDescription: '通过组件进行选择后，最终选中的值，支持双向绑定到变量',
        })
        value: V;

        @Prop({
            group: '交互属性',
            title: '可多选',
            description: '设置是否开启多选模式，显示多选框',
            docDescription: '开启后支持选中多项。默认关闭',
        })
        checkable: nasl.core.Boolean = false;

        @Prop({
            title: '占位符',
            description: '为空时显示的占位符文本',
        })
        placeholder: nasl.core.String = '请选择';

        @Prop({
            group: '交互属性',
            title: '父子节点独立选择',
            description: '开启后父节点选择不会全选子节点，子节点选择不会联动父节点',
            docDescription: '开启后父节点选择不会全选子节点，子节点选择不会联动父节点',
        })
        checkControlled: nasl.core.Boolean = false;

        @Prop<UTreeSelectNewOptions<T, V, M>, 'disabledField'>({
            group: '交互属性',
            title: '不可选择字段',
            description: '集合的元素类型中，用于标识节点的disabled属性',
            docDescription: '集合的元素类型中，用于标识父级字段的属性，支持自定义变更',
            setter: {
                type: 'propertySelect',
            },
        })
        disabledField: nasl.core.String = 'disabled';

        @Prop({
            group: '交互属性',
            title: '可清除',
            description: '设置是否开启可清除模式',
            docDescription: '开启后支持清除按钮。默认关闭',
        })
        clearable: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '弹出层位置依据',
            description: `设置弹出层依据哪个元素定位位置，可选值：'body'表示添加到 document.body，'reference'表示添加到参考元素中。`,
            docDescription: '设置弹出层在html里的位置，支持引用元素下、全局body设置。当把当前组件放入某个组件，而组件overflow是hidden的时候，需要设置为全局body',
            setter: {
                type: 'enumSelect',
                titles: ['引用元素下', '全局body'],
            },
        })
        appendTo: 'reference' | 'body' = 'reference';

        @Event({
            title: 'undefined',
            description: '修改时触发',
        })
        onChange: (event: nasl.ui.TreeChangeEvent) => void;

        @Event({
            title: '选择后',
            description: '选择某一项时触发',
        })
        onSelect: (event: nasl.ui.TreeChangeEvent) => void;

        @Event({
            title: '选中或取消后',
            description: '选中/取消节点时触发',
        })
        onCheck: (event: nasl.ui.CheckedEvent) => void;

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

        @Event({
            title: '清空前',
            description: '清空前触发',
        })
        onBeforeClear: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '清空后',
            description: '清空时触发',
        })
        onClear: (event: nasl.ui.ChangeEvent) => void;

        @Slot({
            title: 'undefined',
            description: '插入`<u-tree-view-node-new>`子组件',
            snippets: [
                {
                    title: '子节点',
                    code: '<u-tree-view-node-new><template #item>选项</template></u-tree-view-node-new>',
                },
            ],
        })
        slotDefault: () => Array<UTreeViewNodeNew<V>>;

        @Slot({
            title: 'undefined',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<VueComponent>;
    }
}
