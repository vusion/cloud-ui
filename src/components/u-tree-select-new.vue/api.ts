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
            title: '父节点字段',
            description: '集合的元素类型中，用于标识父节点的属性',
            docDescription: '集合的元素类型中，用于标识父节点的属性',
        })
        parentField: nasl.core.String = '';

        @Prop({
            group: '数据属性',
            title: '子节点字段',
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
            title: '加载前',
            description: '加载前触发',
        })
        private onBeforeLoad: (event: EventTarget) => void;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: (event: null) => void;

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
