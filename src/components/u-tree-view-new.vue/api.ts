/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '树形视图',
        icon: 'tree-view-new',
        description: '树形视图',
        group: 'Selector'
    })
    export class UTreeViewNew<T, V, M extends nasl.core.Boolean> extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '广度优先遍历树。当`func`函数有返回值时，停止遍历。',
        })
        private walk(
            @Param({
                title: 'undefined',
                description: '遍历的处理函数',
            })
            func: Function,
        ): void {}

        @Method({
            title: 'undefined',
            description: '查找节点实例。',
        })
        private find(
            @Param({
                title: 'undefined',
                description: '查找函数。找到第一个返回值为`true`的实例。',
            })
            func: Function,
        ): void {}

        @Method({
            title: 'undefined',
            description: '展开/折叠所有节点',
        })
        private toggleAll(
            @Param({
                title: 'undefined',
                description: '展开/折叠',
            })
            expanded: nasl.core.Boolean,
        ): void {}

        @Method({
            title: 'undefined',
            description: '选中/取消所有节点',
        })
        private checkAll(
            @Param({
                title: 'undefined',
                description: '选中/取消',
            })
            expanded: nasl.core.Boolean,
        ): void {}

        @Method({
            title: 'undefined',
            description: '重新加载',
        })
        reload(): void {}
        constructor(options?: Partial<UTreeViewNewOptions<T, V, M>>) { super(); }
    }

    export class UTreeViewNewOptions<T, V, M extends nasl.core.Boolean> extends ViewComponentOptions {
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
            docDescription: '该属性为只读状态，当数据源动态绑定集合List\<T>后，会自动识别T的类型并进行展示',
        })
        dataSchema: T;

        @Prop({
            group: '数据属性',
            title: '选项文本',
            description: '集合的元素类型中，用于显示文本的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            }
        })
        textField: (item: T) => any = ((item: any)  => item.text) as any;

        @Prop({
            group: '数据属性',
            title: '值字段',
            description: '集合的元素类型中，用于标识选中值的属性',
            docDescription: '集合的元素类型中，用于标识选中值的属性，支持自定义变更',
            setter: {
                concept: 'PropertySelectSetter',
            }
        })
        valueField: (item: T) => V = ((item: any)  => item.value) as any;

        @Prop({
            group: '数据属性',
            title: '子级值字段',
            description: '集合的元素类型中，用于标识子节点的属性，默认为children',
            docDescription: '集合的元素类型中，用于标识子级字段的的属性，支持自定义变更',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        childrenField: (item: T) => nasl.collection.List<any> = ((item: any)  => item.children) as any;

        @Prop({
            group: '数据属性',
            title: '父级值字段',
            description: '集合的元素类型中，用于标识父节点的属性',
            docDescription: '集合的元素类型中，用于标识父级字段的属性，支持自定义变更',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        parentField: (item: T) => any;

        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '选择后，所选中的值',
            sync: true,
            docDescription: '当前选择的值',
        })
        value: V;

        @Prop({
            group: '交互属性',
            title: '父子节点独立选择',
            description: '开启后父节点选择不会全选子节点，子节点选择不会联动父节点',
            docDescription: '开启后父节点选择不会全选子节点，子节点选择不会联动父节点',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        checkControlled: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可多选',
            description: '设置是否开启多选模式，显示多选框',
            docDescription: '开启后支持选中多项。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        checkable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '手风琴模式',
            description: '设置是否每次只展开一个',
            docDescription: '开启后每次只能展开一个分组，其他已经展开的分组会关闭。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        accordion: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '触发方式',
            description: '展开/折叠的触发方式',
            docDescription: '树展开/折叠的方式。可选择整行点击均可触发、点击小箭头时触发。默认整行点击均可触发',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '整行点击均可触发' }, { title: '点击小箭头时触发' }],
            },
        })
        expandTrigger: 'click' | 'click-expander' = 'click';

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
            title: '选择前',
            description: '选择某一项前触发',
        })
        onBeforeSelect: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;

        @Event({
            title: '输入时',
            description: '选择某一项时触发',
        })
        onInput: (event: V | nasl.collection.List<V>) => any;

        @Event({
            title: '选择后',
            description: '选择某一项时触发',
        })
        onSelect: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;

        @Event({
            title: '改变后',
            description: '选择值改变时触发',
        })
        onChange: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;

        @Event({
            title: '展开折叠后',
            description: '展开/折叠某节点时触发',
        })
        onToggle: (event: {
            expanded: nasl.core.Boolean;
            node: T;
        }) => any;

        @Event({
            title: '选中取消后',
            description: '选中/取消节点时触发',
        })
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            node: T;
            values: nasl.collection.List<V>; 
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
            description: '插入`<u-tree-view-node-new>`子组件',
            snippets: [
                {
                    title: '子节点',
                    code: '<u-tree-view-node-new><template slot="item">节点</template></u-tree-view-node-new>',
                },
            ],
        })
        slotDefault: () => Array<UTreeViewNodeNew<T, V>>;

        @Slot({
            title: '项',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }

    @Component({
        title: '树形视图节点',
        description: '树形视图节点',
    })
    export class UTreeViewNodeNew<T, V> extends ViewComponent {

        constructor(options?: Partial<UTreeViewNodeNewOptions<T, V>>) { super(); }
    }

    export class UTreeViewNodeNewOptions<T, V> extends ViewComponentOptions {
        @Prop({
            title: '文本',
            description: '节点的文本',
        })
        text: nasl.core.String;

        @Prop({
            title: '相关对象',
            description: '当选择此节点时，抛出的事件会传递该对象，便于开发',
        })
        private node: object;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '节点的值',
        })
        value: V;

        @Prop({
            group: '交互属性',
            title: '默认选中',
            sync: true,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        checked: nasl.core.Boolean;

        @Prop({
            group: '状态属性',
            title: '展开状态',
            description: '展开状态分为“True(展开)/False(折叠)”，默认为“展开”',
            sync: true,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        expanded: nasl.core.Boolean;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '选择前',
            description: '选择此项前触发',
        })
        onBeforeSelect: (event: {
            value: V,
            oldValue: V,
            node: T,
            oldNode: T,
        }) => any;

        @Event({
            title: '展开折叠前',
            description: '展开/折叠此节点前触发',
        })
        onBeforeToggle: (event: {
            expanded: nasl.core.Boolean;
            node: T;
        }) => any;

        @Event({
            title: '展开折叠后',
            description: '展开/折叠某节点时触发',
        })
        onToggle: (event: {
            expanded: nasl.core.Boolean;
            node: T;
        }) => any;

        @Event({
            title: '选中后',
            description: '选中节点时触发',
        })
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            node: T;
        }) => any;

        @Slot({
            title: '默认',
            description: '插入子节点',
            snippets: [
                {
                    title: '子节点',
                    code: '<u-tree-view-node-new><template slot="item">节点</template></u-tree-view-node-new>',
                },
            ],
        })
        slotDefault: () => Array<UTreeViewNodeNew<T, V>>;

        @Slot({
            title: '项',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
