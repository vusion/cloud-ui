/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '穿梭框',
        icon: 'transfer',
        description: '双栏穿梭选择框，常用于将多个项目从一边移动到另一边。',
        group: 'Selector'
    })
    export class UTransfer<T, V> extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '从左向右转移数据。',
        })
        forward(
            @Param({
                title: 'undefined',
                description: '指定转移选项值的列表。如果不填，则为按左列表框选中项值的列表。',
            })
            values: Array<nasl.core.String>,
        ): void {}

        @Method({
            title: 'undefined',
            description: '从右向左转移数据。',
        })
        reverse(
            @Param({
                title: 'undefined',
                description: '指定转移选项值的列表。如果不填，则为按右列表框选中项值的列表。',
            })
            values: Array<nasl.core.String>,
        ): void {}

        @Method({
            title: 'undefined',
            description: '转移指定项的数据。',
        })
        transfer(
            @Param({
                title: 'undefined',
                description: '方向',
            })
            direction: 'forward' | 'reverse' = 'forward',
            @Param({
                title: 'undefined',
                description: '指定转移选项值的列表。',
            })
            values: Array<nasl.core.String>,
        ): void {}
        constructor(options?: Partial<UTransferOptions<T, V>>) { super(); }
    }

    export class UTransferOptions<T, V> extends ViewComponentOptions {
        @Prop({
            title: '过滤匹配方法',
            description: '过滤时的匹配方法',
        })
        private matchMethod: nasl.core.String = 'includes';

        @Prop({
            title: '分页',
            description: '是否需要分页',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private pageable: nasl.core.Boolean = false;

        @Prop({
            title: '分页大小',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        private pageSize: nasl.core.Integer = 50;

        @Prop({
            group: '数据属性',
            title: '原始数据',
            description: '原数据列表',
            sync: true,
            docDescription: '支持动态绑定集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
        })
        source: nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '目标数据',
            description: '目标数据列表',
            sync: true,
            docDescription: '支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑。',
        })
        target: nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '文本字段',
            description: '选项文本的字段名',
            docDescription: '集合的元素类型中，用于显示文本的属性名称，支持自定义变更。',
        })
        textField: (item: T) => any = ((item: any)  => item.text) as any;

        @Prop({
            group: '数据属性',
            title: '值字段',
            description: '选项值的字段名',
            docDescription: '集合的元素类型中，用于指定数据唯一值的字段，支持自定义变更',
        })
        valueField: (item: T) => V = ((item: any)  => item.text) as any;

        @Prop({
            group: '数据属性',
            title: '筛选',
            description: '显示筛选（搜索框）',
            docDescription: '是否开启过滤输入框和过滤功能。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        filterable: nasl.core.Boolean = false;

        @Prop<UTransferOptions<T, V>, 'caseSensitive'>({
            group: '数据属性',
            title: '大小写敏感',
            description: '设置是否区分大小写',
            docDescription: '搜索是否大小写敏感。默认关闭。在过滤属性开启后有效。',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.filterable === true,
        })
        caseSensitive: nasl.core.Boolean = false;

        @Prop<UTransferOptions<T, V>, 'clearable'>({
            group: '数据属性',
            title: '可清除筛选',
            description: '可点击清除按钮一键清除搜索框内容',
            docDescription: '过滤输入框是否开启清除按钮。默认开启。在过滤属性开启后有效',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.filterable === true,
        })
        clearable: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '显示头部',
            docDescription: '开启后会显示头部全选栏。默认开启',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showHead: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '左侧列表标题',
            docDescription: '- 左侧头部全选框右侧展示的文字。默认为“左列表”。',
        })
        sourceTitle: nasl.core.String = '列表';

        @Prop({
            group: '主要属性',
            title: '右侧列表标题',
            docDescription: '右侧头部全选框右侧展示的文字。默认为“右列表”',
        })
        targetTitle: nasl.core.String = '列表';

        @Prop<UTransferOptions<T, V>, 'placeholder'>({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '过滤输入框无内容时的提示信息，支持自定义编辑，默认为请选择。在过滤属性开启后有效',
            if: _ => _.filterable === true,
        })
        placeholder: nasl.core.String = '请输入';

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
            title: '数据转移时',
            description: '数据转移时触发',
        })
        onTransfer: (event: {
            source: nasl.collection.List<T>;
            target: nasl.collection.List<T>;
            transfer: nasl.collection.List<T>;
            transferValues: nasl.collection.List<V>;
        }) => any;

        @Event({
            title: '改变后',
            description: '数据改变时触发',
        })
        onChange: (event: {
            source: nasl.collection.List<T>;
            target: nasl.collection.List<T>;
            transfer: nasl.collection.List<T>;
            transferValues: nasl.collection.List<V>;
        }) => any;

        @Slot({
            title: '默认',
            description: '插入文本或 HTML',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: '项',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
