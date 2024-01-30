/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '数据网格',
        icon: 'grid-view',
        description: '用于列举大量数据的列表框，支持单选、多选、过滤（搜索）、分页等功能。',
        group: 'Table'
    })
    export class UGridView<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponent {
        @Prop({
            title: '数据',
        })
        data: UGridViewOptions<T, V, P, M, C>['dataSource'];

        @Prop({
            title: '分页大小',
        })
        size: UGridViewOptions<T, V, P, M, C>['pageSize'];

        @Prop({
            title: '当前页数',
        })
        page: UGridViewOptions<T, V, P, M, C>['pageNumber'];

        // 由于之前误开放出去了，有历史数据，防止ts报错临时补上
        @Prop({
            title: '排序属性'
        })
        sort: nasl.core.String;

        @Prop({
            title: '排序方式'
        })
        order: nasl.core.String;

        @Method({
            title: 'undefined',
            description: '清除缓存，重新加载',
        })
        reload(): void {}
        constructor(options?: Partial<UGridViewOptions<T, V, P, M, C>>) { super(); }
    }

    export class UGridViewOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponentOptions {
        @Prop({
            title: '值',
            description: '当前选择的值',
            sync: true,
        })
        private value: M extends true ? (C extends '' ? nasl.collection.List<V> : nasl.core.String) : V;

        @Prop({
            title: '文本字段名',
            description: '选项文本的字段名',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        private field: (item: T) => any;

        @Prop({
            title: '可取消',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private cancelable: nasl.core.Boolean = false;

        @Prop({
            title: '可多选',
        })
        private multiple: M = false as any;

        @Prop({
            title: '筛选清除按钮',
            description: '搜索框是否有清除按钮',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private clearable: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '组件的数据源，配置内容为数据集对象或者返回数据集的逻辑。',
            designerValue: [{}, {}, {}, {}, {}, {}, {}, {}],
        })
        dataSource: { list: nasl.collection.List<T>; total: nasl.core.Integer } | nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: 'IDE 根据配置的数据源动态计算返回内容的数据结构，用于动态配置项 current.item 的类型说明。',
        })
        dataSchema: T;

        @Prop<UGridViewOptions<T, V, P, M, C>, 'textField'>({
            group: '数据属性',
            title: '文本字段名',
            description: '选项文本的字段名',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        textField: (item: T) => any = ((item: any)  => item.text) as any;

        @Prop<UGridViewOptions<T, V, P, M, C>, 'valueField'>({
            group: '数据属性',
            title: '值字段名',
            description: '选项值的字段名',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        valueField: (item: T) => V = ((item: any)  => item.value) as any;

        @Prop({
            group: '数据属性',
            title: '分页',
            description: '设置是否分页展示数据',
            docDescription: `可分页：是否需要数据分页展示，默认关闭。
- 开启：展示分页内容，调用数据源逻辑时会将分页信息作为入参传入。
- 关闭：不展示分页内容。`,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        pageable: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '默认每页条数',
            docDescription: '每页的数据条数，默认 50。',
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
            docDescription: '可设置加载出的网格处于第几页的位置。',
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
            docDescription: '每页显示数据条数的选择列表，需设置数组，如 [10,20,50]。',
        })
        pageSizeOptions: Array<nasl.core.Integer> = [10,20,50];

        @Prop({
            group: '数据属性',
            title: '显示总条数',
            docDescription: `开启时显示列表所有行数，默认关闭。
- 开启：展示分页内容，调用数据源时会将数据源作为入参传入。
- 关闭：不展示分页内容。`,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showTotal: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '显示每页条数',
            description: '显示每页条数切换器',
            docDescription: '开启时显示分页大小选项，可选择每页显示条数，默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showSizer: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '显示跳转输入',
            description: '显示页面跳转输入框',
            docDescription: '开启时可直接输入要跳转的页数，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showJumper: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '后端分页',
            docDescription: '数据网格内容展示，完全由数据源返回值控制，比如总条目数、数据展示条数等。默认开启。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        remotePaging: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '后端筛选',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private remoteFiltering: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '匹配方法',
            description: '过滤时的匹配方法',
        })
        private matchMethod: nasl.core.String = 'includes';

        @Prop({
            group: '数据属性',
            title: '大小写敏感',
            description: '过滤时是否区分大小写',
        })
        private caseSensitive: nasl.core.String = 'includes';

        @Prop({
            group: '数据属性',
            title: '搜索框占位符',
            description: '开启筛选后，搜索框为空时的占位符提示文本',
        })
        private placeholder: nasl.core.String = '请输入';

        @Prop({
            group: '主要属性',
            title: '网格数',
            description: '每行排列几项',
            docDescription: '每行排列多少个网格。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        repeat: nasl.core.Decimal = 5;

        @Prop({
            group: '主要属性',
            title: '显示头部',
            docDescription: '显示数据网格列表标题，默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showHead: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '头部标题',
            docDescription: '数据网格列表标题，在开始显示头部功能后显示',
        })
        title: nasl.core.String = '列表';

        @Prop({
            group: '主要属性',
            title: '显示底部',
            docDescription: '显示数据网格底部选项，如分页大小，跳转输入等，默认开启。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showFoot: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '初始即加载',
            description: '设置初始时是否立即加载',
            docDescription: '是否在初始时立即加载，当数据源配置为逻辑时，组件首次渲染自动调用逻辑。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        initialLoad: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '状态设置',
            description: '设置不同状态的展示内容',
            bindHide: true,
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '加载完成-有数据' }, { title: '加载完成-暂无数据' }, { title: '加载中' }, { title: '加载失败' }],
            },
        })
        designerMode: 'success' | 'empty' | 'loading' | 'error' = 'success';

        @Prop<UGridViewOptions<T, V, P, M, C>, 'loadingText'>({
            group: '状态属性',
            title: '加载中文案',
            description: '加载中状态显示的提示文案',
            docDescription: '加载中显示的文字，仅在使用分页加载时出现，默认正在加载中。',
            if: _ => _.designerMode === 'loading',
        })
        loadingText: nasl.core.String = '正在加载中...';

        @Prop<UGridViewOptions<T, V, P, M, C>, 'loading'>({
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

        @Prop<UGridViewOptions<T, V, P, M, C>, 'errorText'>({
            group: '状态属性',
            title: '加载失败文案',
            description: '加载失败状态显示的提示文案',
            docDescription: '数据网格加载失败时展示的文字，加载失败，请重试。',
            if: _ => _.designerMode === 'error',
        })
        errorText: nasl.core.String = '加载失败，请重试';

        @Prop<UGridViewOptions<T, V, P, M, C>, 'error'>({
            group: '状态属性',
            title: '加载失败触发条件',
            description: '加载失败状态的触发条件，未设置则默认为系统定义条件',
            docDescription: '开启后所有数据均不展示，仅展示加载失败文字，常用在数据源不是逻辑的时候，由外部触发组件的加载失败状态，默认关闭',
            bindOpen: true,
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.designerMode === 'error',
        })
        error: nasl.core.Boolean;

        @Prop<UGridViewOptions<T, V, P, M, C>, 'emptyText'>({
            group: '状态属性',
            title: '暂无数据文案',
            description: '暂无数据状态显示的提示文案',
            docDescription: '数据网格数据源返回值为空时展示的文字，默认暂无数据。',
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
            title: '宽度',
            description: '设置数据网格宽度大小',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '正常' }, { title: '自适应' }],
            },
        })
        private width: 'full' | 'huge' | 'large' | 'normal' | 'auto' = 'auto';

        @Prop({
            group: '样式属性',
            title: '高度',
            description: '设置数据网格高度大小',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '占满' }, { title: '巨大' }, { title: '大' }, { title: '正常' }, { title: '自适应' }],
            },
        })
        private height: 'full' | 'huge' | 'large' | 'normal' | 'auto' = 'normal';

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
            description: '选择值改变时触发。单选模式中：',
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
            title: 'undefined',
            description: '插入文本或 HTML',
            emptyBackground: 'drag-entity-here',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: 'undefined',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
