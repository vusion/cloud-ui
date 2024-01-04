/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '地区选择',
        icon: 'region-select',
        description: '该组件从 UCascader 继承，仅填充了中国的行政区数据，其他功能与 UCascader 相同。',
        group: 'Selector'
    })
    export class URegionSelect<T, V> extends ViewComponent {


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
        constructor(options?: Partial<URegionSelectOptions<T, V>>) { super(); }
    }

    export class URegionSelectOptions<T, V> extends ViewComponentOptions {
        @Prop({
            title: '连接符',
            description: '将选中的值以选择的符号作为连接符，转为字符串格式,不可为空值',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: "以', '连接" }, { title: "以'|'连接" }, { title: "以' / '连接" }],
            },
        })
        private join: ',' | '|' | ' / ' = ' / ';

        @Prop({
            title: '转换器',
            description: '选择地区名称，返回：浙江省/杭州市/滨江区（不加空格）；选择地区码，返回：330108',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '地区名称' }, { title: '地区码' }],
            },
        })
        converter: 'name' | 'code';

        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑。',
            docDescription: '- 支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑。',
        })
        data: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop({
            group: '数据属性',
            title: '值',
            sync: true,
            docDescription: '当前选择的值',
        })
        value: nasl.core.Any;

        @Prop({
            group: '数据属性',
            title: '文本字段',
            docDescription: '集合的元素类型中，用于显示文本的属性名称，支持自定义变更',
        })
        field: (item: T) => any = ((item: any)  => item.text) as any;

        @Prop({
            group: '数据属性',
            title: '筛选',
            description: '设置是否可以筛选，开启将会显示搜索框。',
            docDescription: '开启后选择框可输入文本进行筛选',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        filterable: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '占位符',
            description: '为空时显示的占位符文本',
            docDescription: '选择框无内容时的提示信息，支持自定义编辑，默认为请选择',
        })
        placeholder: nasl.core.String = '请选择';

        @Prop({
            group: '主要属性',
            title: '只显示最后一项',
            description: '定义是否显示完整的路径，ture时只显示最后一项',
            docDescription: '控制选择地区项后输入框里展示的形式，开启时只展示最后一项目，未开启时展示所有项路径。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showFinalValue: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '自动获取焦点',
            description: '设置是否自动获取焦点',
            docDescription: '控制是否在进入页面时聚焦到该组件',
            designerValue: false,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autofocus: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '触发方式',
            docDescription: '地区选择时下一层级的展开方式，可以点击展开或者鼠标悬浮时展开',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '点击' }, { title: '悬浮' }],
            },
        })
        trigger: 'click' | 'hover' = 'click';

        @Prop({
            group: '交互属性',
            title: '可清空',
            description: '设置是否可以清空搜索框，开启后将在有内容时显示清除按钮。',
            docDescription: '控制是否显示清除按钮，支持一键清除所选内容',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        clearable: nasl.core.Boolean = false;

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

        @Prop({
            group: '状态属性',
            title: '弹出状态',
            description: '弹出状态分为“True(弹出)/False(关闭)”，默认为“弹出”',
            docDescription: '开启时加载下拉框时，下拉框自动弹出，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        opened: nasl.core.Boolean = false;

        @Event({
            title: '输入时',
            description: '选择某一项时触发',
        })
        onInput: (event: nasl.core.String) => any;

        @Event({
            title: '选择后',
            description: '选择某一项时触发',
        })
        onSelect: (event: {
            value: V;
            values: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
        }) => any;

        @Event({
            title: '获得焦点',
            description: '获得焦点时触发。',
        })
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '清空后',
            description: '清空后触发。',
        })
        onClear: (event: any) => any;
    }
}
