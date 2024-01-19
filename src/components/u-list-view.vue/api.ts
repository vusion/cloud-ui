/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '数据列表',
        icon: 'list-view',
        description: '用于列举大量数据的列表框，支持单选、多选、过滤（搜索）、分页等功能。',
        group: 'Table'
    })
    export class UListView<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponent {
        @Prop({
            title: '数据',
        })
        data: UListViewOptions<T, V, P, M, C>['dataSource'];

        @Prop({
            title: '分页大小',
        })
        size: UListViewOptions<T, V, P, M, C>['pageSize'];

        @Prop({
            title: '当前页数',
        })
        page: UListViewOptions<T, V, P, M, C>['pageNumber'];

        // 由于之前误开放出去了，有历史数据，防止ts报错临时补上
        @Prop({
            title: '排序属性'
        })
        sort: nasl.core.String;

        @Prop({
            title: '排序方式'
        })
        order: nasl.core.String;

        @Prop({
            title: '过滤文本',
        })
        filterText: nasl.core.String;

        @Method({
            title: 'undefined',
            description: '清除缓存，重新加载',
        })
        reload(): void {}
        constructor(options?: Partial<UListViewOptions<T, V, P, M, C>>) { super(); }
    }

    export class UListViewOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '列表展示的数据。数据源可以绑定变量或者逻辑。变量或逻辑的返回值可以是数组，也可以是对象。对象格式为{list:[], total:10}',
            designerValue: [{}, {}, {}],
        })
        dataSource: { list: nasl.collection.List<T>; total: nasl.core.Integer } | nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '列表每一行的数据类型。该属性为展示属性，由数据源推倒得到，无需填写。',
        })
        dataSchema: T;

        @Prop({
            group: '数据属性',
            title: '分页',
            description: '设置是否分页展示数据',
            docDescription: '是否展示分页组件，数据源调用接口是否加入分页参数。默认开启',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        pageable: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '默认每页条数',
            docDescription: '每页的数据条数。默认50条。在"可分页"属性开启时有效',
            setter: {
                concept: 'NumberInputSetter',
                precision: 0,
            },
        })
        pageSize: nasl.core.Integer = 50;

        @Prop({
            group: '数据属性',
            title: '当前页数',
            description: '当前默认展示在第几页',
            docDescription: '当前加载的列表页。默认1。在"可分页"属性开启时有效',
            setter: {
                concept: 'NumberInputSetter',
                precision: 0,
            },
        })
        pageNumber: nasl.core.Integer = 1;

        @Prop({
            group: '数据属性',
            title: '每页条数选项',
            description: '每页条数切换器的选项',
            docDescription: '每页显示数据条数的选择列表，需设置数组，如[10,20,30,40,50]。在"可分页"属性开启时有效',
        })
        pageSizeOptions: Array<nasl.core.Integer> = [10,20,50];

        @Prop({
            group: '数据属性',
            title: '显示总条数',
            docDescription: '分页组件处是否显示列表总数。默认关闭。在"可分页"属性开启时有效',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showTotal: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '显示每页条数',
            description: '显示每页条数切换器',
            docDescription: '是否展示数据条数的选择列表。默认开启。在"可分页"属性开启时有效',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showSizer: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '显示跳转输入',
            description: '显示页面跳转输入框',
            docDescription: '分页组件处是否展示跳转到某一页的输入框。默认关闭。在"可分页"属性开启时有效。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showJumper: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '筛选',
            description: '设置是否可以筛选，开启将会显示搜索框。',
            docDescription: '是否展示可筛选的输入框。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        filterable: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '后端分页',
            description: '是否使用后端分页。',
            docDescription: '表示数据列表的分页由接口处理。分页参数传入后端接口，由后端接口返回相应的数据。默认开始。关闭后，如果"可分页"属性开启，分页将由列表组件处理，不会发送后端接口。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        remotePaging: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '后端筛选',
            description: '是否使用后端过滤',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private remoteFiltering: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '匹配方法',
            description: '筛选时的匹配方法',
            docDescription: '筛选时的匹配方法。可写值"="、"=="、"eq"、"!="、"neq"、"<"，"lt"，"<="，"lte"，">"，"gt"，">="，"gte"，"includes"，"startsWith"，"endsWith"。也可传入处理函数。当"可筛选"属性开启时有效。',
        })
        matchMethod: nasl.core.String = 'includes';

        @Prop({
            group: '数据属性',
            title: '大小写敏感',
            description: '设置是否区分大小写',
            docDescription: '表示筛选时是否大小写敏感。当"可筛选"属性开启时有效。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        caseSensitive: nasl.core.Boolean = false;

        @Prop<UListViewOptions<T, V, P, M, C>, 'placeholder'>({
            group: '数据属性',
            title: '搜索框占位符',
            description: '搜搜框为空时显示的占位符文本',
            docDescription: '搜索框为空时提示文本，默认"请输入"。当"可筛选"属性开启时有效。',
            if: _ => _.filterable === true,
        })
        placeholder: nasl.core.String = '请输入';

        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '显示的值',
            sync: true,
            docDescription: '在列表开启可多选时，指定数据唯一值的字段。',
        })
        value: M extends true ? (C extends '' ? nasl.collection.List<V> : nasl.core.String) : V;

        @Prop<UListViewOptions<T, V, P, M, C>, 'textField'>({
            group: '数据属性',
            title: '文本字段',
            description: '当开启可多选时，显示的选项文本字段名',
            docDescription: '当开启可多选时，显示的选项文本字段名。',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        textField: (item: T) => any = ((item: any)  => item.text) as any;

        @Prop<UListViewOptions<T, V, P, M, C>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '当开启可多选时，选项值的字段',
            docDescription: '当开启可多选时，选项值的字段名。当"可多选"属性开启时有效。',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        valueField: (item: T) => V = ((item: any)  => item.value) as any;

        @Prop({
            group: '数据属性',
            title: '可取消',
            description: '与"可多选"属性对应，表示选中的行再点击时是否可以取消选中。默认关闭。',
            docDescription: '与"可多选"属性对应，表示选中的行再点击时是否可以取消选中。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        cancelable: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '可多选',
            description: '设置是否可以多选行',
            docDescription: '列表的行是否可选中。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            }
        })
        multiple: M = false as any;

        @Prop({
            group: '数据属性',
            title: '可清除筛选',
            description: '可点击搜索框中的清除按钮一键清除内容',
            docDescription: '搜索框是否有清除按钮，默认关闭。当"可筛选"属性开启时有效。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        clearable: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '显示头部',
            docDescription: '是否显示列表头。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showHead: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '列表标题',
            docDescription: '列表头部的标题信息。当"显示头部"属性开启时有效',
        })
        title: nasl.core.String = '列表';

        @Prop({
            group: '主要属性',
            title: '显示底部',
            docDescription: '显示列表底部，包括分页组件。默认开启。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showFoot: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '初始即加载',
            description: '设置初始时是否立即加载',
            docDescription: '是否在列表出现时立即加载数据，默认开启。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        initialLoad: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '加载状态设置',
            description: '设置不同加载状态的展示内容',
            bindHide: true,
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '加载完成-有数据' }, { title: '加载完成-暂无数据' }, { title: '加载中' }, { title: '加载失败' }],
            },
        })
        designerMode: 'success' | 'empty' | 'loading' | 'error' = 'success';

        @Prop<UListViewOptions<T, V, P, M, C>, 'loadingText'>({
            group: '状态属性',
            title: '加载中文案',
            description: '加载中状态显示的文案',
            docDescription: '当数据正在加载时展示的文字，默认为"加载中..."。',
            if: _ => _.designerMode === 'loading',
        })
        loadingText: nasl.core.String = '加载中...';

        @Prop<UListViewOptions<T, V, P, M, C>, 'loading'>({
            group: '状态属性',
            title: '自定义加载中触发条件',
            description: '支持自定义状态的触发条件，未设置则默认为系统定义条件',
            bindOpen: true,
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.designerMode === 'loading',
        })
        loading: nasl.core.Boolean;

        @Prop<UListViewOptions<T, V, P, M, C>, 'errorText'>({
            group: '状态属性',
            title: '加载失败文案',
            description: '加载失败状态显示的提示文案',
            docDescription: '加载失败的提示文字。默认"加载失败，请重试"',
            if: _ => _.designerMode === 'error',
        })
        errorText: nasl.core.String = '加载失败，请重试';

        @Prop<UListViewOptions<T, V, P, M, C>, 'error'>({
            group: '状态属性',
            title: '加载失败触发条件',
            description: '加载失败状态的触发条件，未设置则默认为系统定义条件',
            docDescription: '控制表格加载失败的展示时机。默认关闭。',
            bindOpen: true,
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.designerMode === 'error',
        })
        error: nasl.core.Boolean;

        @Prop<UListViewOptions<T, V, P, M, C>, 'emptyText'>({
            group: '状态属性',
            title: '暂无数据文案',
            description: '暂无数据状态显示的提示文案',
            docDescription: '当列表为空时的提示文字。默认"暂无数据"',
            if: _ => _.designerMode === 'empty',
        })
        emptyText: nasl.core.String = '暂无数据';

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入。',
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

        @Prop({
            group: '样式属性',
            title: '显示边框',
            docDescription: '列表是否展示边框。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        border: nasl.core.Boolean = true;

        @Prop({
            group: '样式属性',
            title: '宽度',
            description: '设置数据列表宽度大小',
            docDescription: '数据列表宽度。默认自适应。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '正常' }, { title: '自适应' }],
            },
        })
        width: 'full' | 'huge' | 'large' | 'normal' | 'auto' = 'auto';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置数据列表高度大小',
            docDescription: '数据列表高度。默认正常。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '正常' }, { title: '自适应' }],
            },
        })
        height: 'full' | 'huge' | 'large' | 'normal' | 'auto' = 'normal';

        @Event({
            title: '选择前',
            description: '选择某一项前触发',
        })
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;

        @Event({
            title: '选择时',
            description: '选择某一项时触发',
        })
        onInput: (event: V) => any;

        @Event({
            title: '选择后',
            description: '选择某一项时触发。单选模式中：',
        })
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;

        @Event({
            title: '改变后',
            description: '选择值改变时触发。',
        })
        onChange: (event: {
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
            values: nasl.collection.List<V>;
        }) => any;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        onBeforeLoad: (event: any) => any;

        @Event({
            title: '加载后',
            description: '加载时触发',
        })
        onLoad: (event: any) => any;

        @Slot({
            title: '默认',
            description: '插入文本或 HTML',
            emptyBackground: 'drag-entity-here',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: '项',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
