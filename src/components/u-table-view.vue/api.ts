/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '数据表格',
        icon: 'table-view',
        description: '用于展示大量结构化数据。支持排序、过滤（筛选）、分页、自定义操作等复杂功能。',
        group: 'Table'
    })
    export class UTableView<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponent {
        @Prop({
            title: '数据',
        })
        data: UTableViewOptions<T, V, P, M>['dataSource'];

        @Prop({
            title: '分页大小',
        })
        size: UTableViewOptions<T, V, P, M>['pageSize'];

        @Prop({
            title: '当前页数',
        })
        page: UTableViewOptions<T, V, P, M>['pageNumber'];

        @Prop({
            title: '排序属性',
        })
        sort: UTableViewOptions<T, V, P, M>['sorting']['field'];

        @Prop({
            title: '排序属性',
        })
        order: UTableViewOptions<T, V, P, M>['sorting']['order'];

        @Prop({
            title: '单选选中值',
        })
        value: UTableViewOptions<T, V, P, M>['value'];

        @Prop({
            title: '多选选中值',
        })
        values: UTableViewOptions<T, V, P, M>['values'];

        @Method({
            title: 'undefined',
            description: '清除缓存，重新加载',
        })
        reload(): void {}

        @Method({
            title: 'undefined',
            description: '获取所有表格列的 field',
        })
        getFields(): any {}

        @Method({
            title: 'undefined',
            description: '导出 excel 文件',
        })
        exportExcel(
            @Param({
                title: 'undefined',
                description: '当前页码',
            })
            page: nasl.core.Integer = 1,
            @Param({
                title: 'undefined',
                description: '每页条数',
            })
            size: nasl.core.Integer = 2000,
            @Param({
                title: 'undefined',
                description: '导出文件名',
            })
            filename?: nasl.core.String,
            @Param({
                title: 'undefined',
                description: '排序字段',
            })
            sort?: nasl.core.String,
            @Param({
                title: 'undefined',
                description: '排序顺序',
            })
            order?: 'asc' | 'desc',
            @Param({
                title: 'undefined',
                description: '排除字段',
            })
            excludeColumns: nasl.collection.List<nasl.core.String> = [],
        ): void {}

        @Method({
            title: 'undefined',
            description: '重制编辑列的编辑状态为非编辑态',
        })
        resetEdit(
            @Param({
                title: 'undefined',
                description: '行数据',
            })
            item?: object,
        ): void {}
        constructor(options?: Partial<UTableViewOptions<T, V, P, M>>) { super(); }
    }

    export class UTableViewOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '表格展示的数据。数据源可以绑定变量或者逻辑。变量或逻辑的返回值可以是数组，也可以是对象。对象格式为{list:[], total:10}',
            designerValue: [{}, {}, {}],
        })
        dataSource: { list: nasl.collection.List<T>; total: nasl.core.Integer } | nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '表格每一行的数据类型。该属性为展示属性，由数据源推导得到，无需填写',
        })
        dataSchema: T;

        @Prop({
            group: '数据属性',
            title: '数据源参数',
            description: '数据源除了DataSourceParams外还需要的参数',
            docDescription: '当数据源绑定的是逻辑，逻辑的第一个输入参数无法满足要求时，可绑定该字段值，传入更多的参数值。数据类型为对象{key:value}格式。',
        })
        private extraParams: object;

        @Prop({
            group: '数据属性',
            title: '前端分页',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private pageable: nasl.core.Boolean = false;

        @Prop<UTableViewOptions<T, V, P, M>, any>({
            group: '数据属性',
            title: '后端分页',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.pageable === true,
        })
        private remotePaging: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '分页',
            description: '设置是否分页展示数据',
            docDescription: '是否展示分页组件，数据源调用接口是否加入分页参数。默认开启',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        pagination: nasl.core.Boolean;

        @Prop<UTableViewOptions<T, V, P, M>, 'pageSize'>({
            group: '数据属性',
            title: '默认每页条数',
            docDescription: '每页的数据条数。默认20条。在"分页"属性开启时有效',
            setter: {
                concept: 'NumberInputSetter',
            },
            if: _ => _.pagination === true,
        })
        pageSize: nasl.core.Integer = 20;

        @Prop<UTableViewOptions<T, V, P, M>, 'showSizer'>({
            group: '数据属性',
            title: '显示每页条数',
            description: '显示每页条数切换器',
            docDescription: '分页组件处是否展示数据条数的选择列表。默认开启。在"分页"属性开启时有效',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.pagination === true,
        })
        showSizer: nasl.core.Boolean = true;

        @Prop<UTableViewOptions<T, V, P, M>, 'pageSizeOptions'>({
            group: '数据属性',
            title: '每页条数选项',
            description: '每页条数切换器的选项',
            docDescription: '分页组件处是否展示每页显示数据条数的选择列表，需设置数组，如[10,20,30,40,50]。在"分页"属性开启时有效。',
            if: _ => _.pagination === true && _.showSizer === true,
        })
        pageSizeOptions: Array<nasl.core.Integer> = [10,20,50];

        @Prop<UTableViewOptions<T, V, P, M>, 'pageNumber'>({
            group: '数据属性',
            title: '当前页数',
            description: '当前默认展示在第几页',
            docDescription: '当前加载的表格页。默认1。在"分页"属性开启时有效',
            setter: {
                concept: 'NumberInputSetter',
            },
            if: _ => _.pagination === true,
        })
        pageNumber: nasl.core.Integer = 1;

        @Prop<UTableViewOptions<T, V, P, M>, 'showTotal'>({
            group: '数据属性',
            title: '显示总条数',
            docDescription: '分页组件处是否显示表格总数。默认关闭。在"分页"属性开启时有效',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.pagination === true,
        })
        showTotal: nasl.core.Boolean = false;

        @Prop<UTableViewOptions<T, V, P, M>, 'showJumper'>({
            group: '数据属性',
            title: '显示跳转输入',
            description: '显示页面跳转输入框',
            docDescription: '分页组件处是否展示跳转到某一页的输入框。默认关闭。在"分页"属性开启时有效',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.pagination === true,
        })
        showJumper: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '初始化排序规则',
            description: '设置数据初始化时的排序字段和顺序规则',
            docDescription: '支持选择数据表格数据源中的某一条数据，配置默认排序规则，支持升序和降序',
        })
        sorting: { field: nasl.core.String, order: nasl.core.String, compare?: Function } = { field: undefined, order: 'desc' };

        @Prop({
            group: '数据属性',
            title: '排序',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private remoteSorting: nasl.core.Boolean = false;

        @Prop<UTableViewOptions<T, V, P, M>, any>({
            group: '数据属性',
            title: '排序初始顺序',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '升序' }, { title: '倒序' }],
            },
            if: _ => _.remoteSorting === true,
        })
        private defaultOrder: 'asc' | 'desc' = 'asc';

        @Prop({
            group: '数据属性',
            title: '筛选参数',
            sync: true,
        })
        private filtering: object;

        @Prop({
            group: '数据属性',
            title: '后端筛选',
            description: '是否使用后端筛选',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private remoteFiltering: nasl.core.Boolean = false;

        @Prop<UTableViewOptions<T, V, P, M>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '在单选、多选操作、渲染树形数据中，指定数据唯一值的字段',
            docDescription: '在表格开启了单选、多选操作、渲染树形数据中，指定数据唯一值的字段',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        valueField: (item: T) => V;

        @Prop({
            group: '数据属性',
            title: '单选值',
            description: '用于标识单选选项的值',
            sync: true,
            docDescription: '当表格设置了单选列，或开启了可选行，选中某一行时的值。该取值由值字段名决定。一般会是id等能唯一标识每一行数据的值',
        })
        value: T;

        @Prop({
            group: '数据属性',
            title: '多选值',
            description: '用于标识多选选项的值',
            sync: true,
            docDescription: '当表格设置了多选列，选择多个值后获得了值列表数组。该取值由值字段名决定',
        })
        values: nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '树形模式',
            description: '以树形数据展示表格',
            docDescription: '表格是否以树型方式展示。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        treeDisplay: nasl.core.Boolean = false;

        @Prop<UTableViewOptions<T, V, P, M>, 'parentField'>({
            group: '数据属性',
            title: '父级值字段',
            description: '当数据源为平铺数据时自动生成树形数据的节点字段名，重要：值字段名需要一起配置',
            docDescription: '标识父节点字段名，用于标识表格行取哪个数据作为父级的判断，需同步配置“值字段名”。在"树行模式"属性开启时有效',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.treeDisplay === true,
        })
        parentField: (item: T) => any;

        @Prop<UTableViewOptions<T, V, P, M>, 'childrenField'>({
            group: '数据属性',
            title: '子级值字段',
            description: '树形数据子节点字段名，默认为children',
            docDescription: '标识子节点字段名，用于表格显示时取哪个数据展示子树。在"树行模式"属性开启时有效',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.treeDisplay === true,
        })
        childrenField: (item: T) => nasl.collection.List<any> = ((item: any)  => item.children) as any;

        @Prop<UTableViewOptions<T, V, P, M>, 'hasChildrenField'>({
            group: '数据属性',
            title: '包含子级值字段',
            description: '该字段指定行数据是否包含子节点数据，默认为hasChildren',
            docDescription: '表示当前行是否需要展示子节点的"展开/收起"图标。在"树形模式"属性开启时有效',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.treeDisplay === true,
        })
        hasChildrenField: (item: T) => nasl.core.Boolean = ((item: any)  => item.hasChildren) as any;

        @Prop<UTableViewOptions<T, V, P, M>, 'treeCheckType'>({
            group: '数据属性',
            title: '关联选中类型',
            description: '父子树节点是否关联选中',
            docDescription: '当选中父节点时，子节点是否相应选中等。在"树形模式"属性开启并且表格存在"多选列"时有效',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '父子双向关联选中' }, { title: '单项父关联子' }, { title: '单项子关联父' }, { title: '父子不关联' }],
            },
            if: _ => _.treeDisplay === true,
        })
        treeCheckType: 'up+down' | 'down' | 'up' | 'none' = 'up+down';

        @Prop({
            group: '主要属性',
            title: '表格标题',
            docDescription: '表格上方的标题信息。默认为空',
        })
        title: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '显示表格头部',
            docDescription: '是否显示表格头。默认开启',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showHead: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '表格头部吸顶',
            docDescription: '当页面滚动到顶时，表格头是否固定在头部，不随页面滚动。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        stickHead: nasl.core.Boolean = false;

        @Prop<UTableViewOptions<T, V, P, M>, 'stickHeadOffset'>({
            group: '主要属性',
            title: '表格头部吸顶偏移量',
            docDescription: '与"表格头部吸顶"选项配合使用，表示表格头吸顶时与顶部的距离',
            setter: {
                concept: 'NumberInputSetter',
            },
            if: _ => _.stickHead === true,
        })
        stickHeadOffset: nasl.core.Decimal = 0;

        @Prop({
            group: '主要属性',
            title: '表头文本过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '开启后，该列表头文本过长会省略显示，否则换行显示，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        thEllipsis: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '内容区文本过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '开启后，该列文本过长会省略显示，否则换行显示，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        ellipsis: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '悬浮高亮行',
            description: '表格行在悬浮时是否高亮显示',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private hover: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可选行',
            description: '设置是否可以单选行',
            docDescription: '表格行是否可点击选中，该取值由值字段名决定，一般会是id等能唯一标识每一行数据的值。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        selectable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可取消',
            description: '设置是否可以取消选择',
            docDescription: '与"可选行"属性对应，表示选中的行再点击时是否可以取消选中。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        cancelable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '表格内可拖拽',
            description: '设置是否可以拖拽行排序',
            docDescription: '表格行是否可拖拽放置。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        draggable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '表格间可拖拽',
            description: '设置多个表格间是否可以拖拽放置',
            docDescription: '表格间是否可拖拽放置。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        acrossTableDrag: nasl.core.Boolean = false;

        @Prop<UTableViewOptions<T, V, P, M>, 'canDragableHandler'>({
            group: '交互属性',
            title: '可拖拽节点',
            description: '设置表格行是否可拖拽起来。绑定逻辑',
            bindOpen: true,
            if: _ => _.draggable === true || _.acrossTableDrag === true,
        })
        canDragableHandler: Function;

        @Prop<UTableViewOptions<T, V, P, M>, 'canDropinHandler'>({
            group: '交互属性',
            title: '可放置节点',
            description: '设置表格行是否可拖拽放入。绑定逻辑',
            bindOpen: true,
            if: _ => _.draggable === true || _.acrossTableDrag === true,
        })
        canDropinHandler: Function;

        @Prop({
            group: '交互属性',
            title: '手风琴模式',
            description: '设置是否每次只展开一个',
            docDescription: '表示点击展开行时，其它已经展开的行是否收起。在表格存在"展开列"时有效',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        accordion: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可调整列宽',
            description: '设置是否可以调整列宽',
            docDescription: '表格列之间是否出现调整样式，可以手动调整列宽',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        resizable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '调整列宽效果',
            description: '设置调整列宽时如何处理剩余大小',
            docDescription: '表示调整列宽时其他列宽的处理方式。在"可调整列宽"属性开启时有效',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '保持总宽不变，优先后一列弥补宽度' }, { title: '保持总宽不变，后面所有列平均弥补宽度' }, { title: '不做任何处理，表格宽度变化' }],
            },
        })
        resizeRemaining: 'sequence' | 'average' | 'none' = 'average';

        @Prop({
            group: '交互属性',
            title: '配置展示列',
            description: '设置是否可以配置展示列',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        configurable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '虚拟滚动',
            description: '虚拟滚动表示不展示所有的数据，只展示默认条数的数据，当滚动时再展示剩余的数据。当表格数据量大时，可设置为虚拟滚动，提高性能。默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        virtual: nasl.core.Boolean = false;

        @Prop<UTableViewOptions<T, V, P, M>, 'itemHeight'>({
            group: '交互属性',
            title: '每行高度',
            description: '与虚拟滚动配合使用，表示每一行的高度。请确保行里的数据不要换行',
            setter: {
                concept: 'NumberInputSetter',
            },
            if: _ => _.virtual === true,
        })
        itemHeight: nasl.core.Decimal;

        @Prop<UTableViewOptions<T, V, P, M>, 'virtualCount'>({
            group: '交互属性',
            title: '展示条数',
            description: '与虚拟滚动配合使用，表示每屏展示的最大条数',
            setter: {
                concept: 'NumberInputSetter',
            },
            if: _ => _.virtual === true,
        })
        virtualCount: nasl.core.Decimal = 60;

        @Prop({
            group: '状态属性',
            title: '初始即加载',
            description: '设置初始时是否立即加载',
            docDescription: '- 是否在表格出现时立即加载数据，默认开启。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        initialLoad: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '加载状态设置',
            description: '设置不同加载状态的展示内容',
            docDescription: '可通过切换该选项，设置不同状态时该组件的展示形式，支持配置',
            bindHide: true,
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '加载完成-有数据' }, { title: '加载完成-暂无数据' }, { title: '加载中' }, { title: '加载失败' }],
            },
        })
        designerMode: 'success' | 'empty' | 'loading' | 'error' = 'success';

        @Prop<UTableViewOptions<T, V, P, M>, 'loadingText'>({
            group: '状态属性',
            title: '加载中文案',
            description: '加载中状态显示的提示文案',
            docDescription: '当加载表格数据过程中的提示文字。默认“正在加载中...”。',
            if: _ => _.designerMode === 'loading',
        })
        loadingText: nasl.core.String = '正在加载中...';

        @Prop<UTableViewOptions<T, V, P, M>, 'loading'>({
            group: '状态属性',
            title: '加载中触发条件',
            description: '加载中状态的触发条件，未设置则默认为系统定义条件',
            docDescription: '支持自定义状态的触发条件，未设置则默认为系统定义条件。',
            bindOpen: true,
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.designerMode === 'loading',
        })
        loading: nasl.core.Boolean;

        @Prop<UTableViewOptions<T, V, P, M>, 'errorText'>({
            group: '状态属性',
            title: '加载失败文案',
            description: '加载失败状态显示的提示文案',
            docDescription: '加载失败的提示文字。默认"加载失败，请重试"。',
            if: _ => _.designerMode === 'error',
        })
        errorText: nasl.core.String = '加载失败，请重试';

        @Prop<UTableViewOptions<T, V, P, M>, 'error'>({
            group: '状态属性',
            title: '加载失败触发条件',
            description: '加载失败状态的触发条件，未设置则默认为系统定义条件',
            docDescription: '支持自定义状态的触发条件，未设置则默认为系统定义条件。',
            bindOpen: true,
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.designerMode === 'error',
        })
        error: nasl.core.Boolean;

        @Prop<UTableViewOptions<T, V, P, M>, 'emptyText'>({
            group: '状态属性',
            title: '暂无数据文案',
            description: '暂无数据状态显示的提示文案',
            docDescription: '当表格为空时的提示文字。默认"暂无数据"。',
            if: _ => _.designerMode === 'empty',
        })
        emptyText: nasl.core.String = '暂无数据';

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

        @Prop({
            group: '样式属性',
            title: '标题对齐方式',
            docDescription: '表格上方的标题信息的对齐方式。默认"居中对齐"。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '左对齐' }, { title: '居中对齐' }, { title: '右对齐' }],
            },
        })
        titleAlignment: 'left' | 'center' | 'right' = 'center';

        @Prop({
            group: '样式属性',
            title: '表头加粗',
            docDescription: '表格每一列的表头文字是否加粗。默认开启',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        boldHeader: nasl.core.Boolean = true;

        @Prop({
            group: '样式属性',
            title: '显示边框',
            docDescription: '表格是否展示边框。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private border: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '分隔线条',
            description: '单元格之间是否显示分隔线条',
            docDescription: '表格每列之间是否展示分隔线条。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        line: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '斑马条纹',
            description: '表格行是否按斑马线条纹显示',
            docDescription: '表格行是否按斑马线条纹显示。默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        striped: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '默认列宽度',
            description: '表格的默认列宽度，可设置为数字或百分比',
            docDescription: '表格每列的默认宽度。',
        })
        defaultColumnWidth: nasl.core.String | nasl.core.Decimal;

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

        @Event({
            title: '切换分页前',
            description: '切换分页前触发',
        })
        onBeforePage: (event: {
            size: nasl.core.Integer,
            oldSize: nasl.core.Integer,
            number: nasl.core.Integer,
            oldNumber: nasl.core.Integer,
        }) => any;

        @Event({
            title: '切换分页后',
            description: '切换分页或改变分页大小时触发',
        })
        onPage: (event: {
            size: nasl.core.Integer,
            oldSize: nasl.core.Integer,
            number: nasl.core.Integer,
            oldNumber: nasl.core.Integer,
        }) => any;

        @Event({
            title: '排序前',
            description: '排序前触发',
        })
        onBeforeSort: (event: {
            field: nasl.core.String,
            order: nasl.core.String, 
            compare?: Function
        }) => any;

        @Event({
            title: '排序后',
            description: '排序后触发',
        })
        onSort: (event: {
            field: nasl.core.String,
            order: nasl.core.String, 
            compare?: Function
        }) => any;

        @Event({
            title: '筛选前',
            description: '筛选前触发',
        })
        onBeforeFilter: (event: any) => any;

        @Event({
            title: '筛选后',
            description: '筛选后触发',
        })
        onFilter: (event: any) => any;

        @Event({
            title: '点击行',
            description: '点击某一行时触发',
        })
        onClickRow: (event: {
            item: T, 
            index: nasl.core.Integer,
            rowIndex: nasl.core.Integer,
        }) => any;

        @Event({
            title: '双击行',
            description: '双击某一行时触发',
        })
        onDblclickRow: (event: {
            item: T, 
            index: nasl.core.Integer,
            rowIndex: nasl.core.Integer,
        }) => any;

        @Event({
            title: '选择前',
            description: '选择某一项前触发',
        })
        onBeforeSelect: (event: {
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
        }) => any;

        @Event({
            title: '选择触发',
            description: '选择某一项后触发',
        })
        onInput: (event: V) => any;

        @Event({
            title: '选择后',
            description: '选择某一项后触发',
        })
        onSelect: (event: {
            selectedItem: T;
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
            index: nasl.core.Integer;
        }) => any;

        @Event({
            title: '多选后',
            description: '多选模式中，选中节点后触发',
        })
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
            item: T;
        }) => any;

        @Event({
            title: '改变后',
            description: '单选或多选值改变后触发',
        })
        onChange: (event: {
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>; 
            items: nasl.collection.List<T>;
        }) => any;

        @Event({
            title: '调整列宽后',
            description: '调整列宽后触发',
        })
        onResize: (event: any) => any;

        @Event({
            title: '展开行前',
            description: '点击展开按钮前触发',
        })
        onBeforeToggleExpanded: (event: {
            item: T;
            expanded: nasl.core.Boolean;
            oldExpanded: nasl.core.Boolean;
        }) => any;

        @Event({
            title: '展开行后',
            description: '点击展开按钮后触发',
        })
        onToggleExpanded: (event: {
            item: T;
            expanded: nasl.core.Boolean;
        }) => any;

        @Event({
            title: '拖拽开始时',
            description: '拖拽行时触发',
        })
        onDragstart: (event: {
            source: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            target: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            finalSource: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            position: nasl.core.String;
            updateData: {
                sourceList: nasl.collection.List<T>;
                targetList: nasl.collection.List<T>;
            };
        }) => any;

        @Event({
            title: '拖拽经过时',
            description: '拖拽经过每一行时触发',
        })
        onDragover: (event: {
            source: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            target: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            finalSource: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            position: nasl.core.String;
            updateData: {
                sourceList: nasl.collection.List<T>;
                targetList: nasl.collection.List<T>;
            };
        }) => any;

        @Event({
            title: '拖拽放置时',
            description: '拖拽结束时触发',
        })
        onDrop: (event: {
            source: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            target: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            finalSource: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            position: nasl.core.String;
            updateData: {
                sourceList: nasl.collection.List<T>;
                targetList: nasl.collection.List<T>;
            };
        }) => any;

        @Slot({
            title: '默认',
            description: '在表格中插入`<u-table-view-column>`子组件',
            emptyBackground: 'drag-entity-here',
            snippets: [
                {
                    title: '表格列',
                    code: '<u-table-view-column> <template #cell="current"></template> <template #title><u-text text="表格列"></u-text></template> <template #expander="current"><u-table-view-expander :item="current.item" @toggle="current.toggle"></u-table-view-expander></template> </u-table-view-column>',
                },
                {
                    title: '表格动态列',
                    code: '<u-table-view-column-dynamic><template #cell="current"></template><template #title="current"><u-text text="表格动态列"></u-text></template></u-table-view-column-dynamic>',
                },
                {
                    title: '表格列分组',
                    code: '<u-table-view-column-group> <template #title><u-text text="表格列分组"></u-text></template> <u-table-view-column> <template #cell="current"></template> <template #title><u-text text="表格列"></u-text></template> <template #expander="current"><u-table-view-expander :item="current.item" @toggle="current.toggle"></u-table-view-expander></template> </u-table-view-column> </u-table-view-column-group>',
                },
            ],
        })
        slotDefault: () => Array<UTableViewColumn<T, V, P, M> | UTableViewColumnDynamic<T, V, P, M, unknown> | UTableViewColumnGroup<T, V, P, M>>;

        @Slot({
            title: '加载中内容',
            description: '自定义加载中内容',
        })
        slotLoading: () => Array<ViewComponent>;

        @Slot({
            title: '加载错误内容',
            description: '自定义加载错误内容',
        })
        slotError: () => Array<ViewComponent>;

        @Slot({
            title: '暂无数据内容',
            description: '自定义暂无数据内容',
        })
        slotEmpty: () => Array<ViewComponent>;

        @Slot({
            title: '拖拽缩略图',
            description: '自定义拖拽缩略图',
        })
        slotDragGhost: (current: Current<T>) => Array<ViewComponent>;

        @Slot({
            title: '配置列',
            description: '自定义配置列内容',
        })
        slotConfigColumns: () => Array<ViewComponent>;

    }

    @Component({
        title: '表格列',
        description: '表格列',
    })
    export class UTableViewColumn<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponent {

        constructor(options?: Partial<UTableViewColumnOptions<T, V, P, M>>) { super(); }
    }

    export class UTableViewColumnOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponentOptions {
        @Prop({
            title: '格式器',
            description: '格式器',
        })
        private formatter: nasl.core.String | object = 'placeholder';

        @Prop({
            title: '筛选项',
            description: '筛选项的参数',
        })
        private filters: Array<{ text: nasl.core.String, value: nasl.core.Any }>;

        @Prop({
            group: '数据属性',
            title: '值字段',
            description: 'data 项中的字段',
            docDescription: '数据项中对应的字段名，如createdTime',
        })
        field: (item: T) => any;

        @Prop({
            group: '数据属性',
            title: '排序',
            description: '设置该列是否可以排序',
            docDescription: '开启后该列可排序，可设置默认顺序，升序或倒序',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        sortable: nasl.core.Boolean = false;

        @Prop<UTableViewColumnOptions<T, V, P, M>, 'defaultOrder'>({
            group: '数据属性',
            title: '排序初始顺序',
            description: '该列首次点击时的排序顺序',
            docDescription: '该列首次点击时的排序顺序。与表格属性中的"默认排序顺序"相同',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '升序' }, { title: '倒序' }],
            },
            if: _ => _.sortable === true,
        })
        defaultOrder: 'asc' | 'desc' = 'asc';

        @Prop<UTableViewColumnOptions<T, V, P, M>, 'type'>({
            group: '数据属性',
            title: '列类型',
            description: '支持序号列、单/多选、树形列和编辑列切换，序号列支持按照数字排序。选择编辑列需要先设置列字段。',
            docDescription: '可设置序号列、单选列、多选列、展开列或树型列',
            setter: {
                concept: 'EnumSelectSetter',
                options: [
                    { title: '普通列' }, 
                    { title: '序号列' }, 
                    { title: '单选列' }, 
                    { title: '多选列' }, 
                    { title: '展开列' }, 
                    { title: '树形列' }, 
                    { 
                        title: '编辑列', 
                        tooltip: '与列字段关联，列字段不能为空',
                        disabledIf: _ => _.field === null,
                    }, 
                    { title: '拖拽标识列' }],
            },
        })
        type: 'normal' | 'index' | 'radio' | 'checkbox' | 'expander' | 'tree' | 'editable' | 'dragHandler' = 'normal';

        @Prop<UTableViewColumnOptions<T, V, P, M>, 'autoIndex'>({
            group: '数据属性',
            title: '换页继续编号',
            description: '换页后，继续上一页的列序号进行编号',
            docDescription: '支持换页后，继续上一页的列序号进行编号',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.type === 'index',
        })
        autoIndex: nasl.core.Boolean = false;

        @Prop<UTableViewColumnOptions<T, V, P, M>, 'startIndex'>({
            group: '数据属性',
            title: '起始序号',
            description: '序号列的起始序号',
            docDescription: '当列类型为"序号列"时有效。默认值为1',
            setter: {
                concept: 'NumberInputSetter',
            },
            if: _ => _.type === 'index' && _.autoIndex !== true,
        })
        startIndex: nasl.core.Decimal = 1;

        @Prop({
            group: '数据属性',
            title: '双击处理函数',
            description: '用于可编辑表格，双击表格列时的处理函数',
            docDescription: '用于可编辑表格，双击表格列时的处理函数。在表格是"可编辑"的表格时有效',
        })
        private dblclickHandler: Function;

        @Prop({
            group: '主要属性',
            title: '表格标题',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/05.%E8%A1%A8%E6%A0%BC/100.%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.html',
            docDescription: '表格上方的标题信息。默认为空',
        })
        private title: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '固定列',
            description: '该列是否固定。左侧固定列需要从第一列到当前固定列之间的列都是固定列。右侧固定列需要最后一列到当前固定列之间的列都是固定列。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        fixed: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '表头文本过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '开启后，该列表头文本过长会省略显示，否则换行显示，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        thEllipsis: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '内容区文本过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '开启后，该列文本过长会省略显示，否则换行显示，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        ellipsis: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '隐藏列',
            docDescription: '开启后，当表格横向滚动条滚动时，该列会固定不会跟随滚动条滚动',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        hidden: nasl.core.Boolean = false;

        @Prop<UTableViewColumnOptions<T, V, P, M>, 'expanderPosition'>({
            group: '样式属性',
            title: '展开列图标位置',
            description: '展开列图标的位置',
            docDescription: '展开列图标的位置。默认"左侧"。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '左侧' }, { title: '右侧' }],
            },
            if: _ => _.type === 'expander',
        })
        expanderPosition: 'left' | 'right' = 'left';

        @Prop({
            group: '样式属性',
            title: '列宽度',
            description: '设置列宽度，可设置为数字或百分比',
            docDescription: '指定列宽，可以是数字或百分比，如100，或10%。',
        })
        width: nasl.core.String | nasl.core.Decimal;

        @Prop({
            group: '样式属性',
            title: '合并列数',
            setter: {
                concept: 'NumberInputSetter',
                min: 1,
                precision: 0,
            },
        })
        colSpan: nasl.core.Integer;

        @Prop({
            group: '样式属性',
            title: '自动合并相同数据',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autoRowSpan: nasl.core.Boolean = false;

        @Slot({
            title: '单元格',
            description: '对单元格的数据展示进行自定义',
        })
        slotCell: (current: Current<T>) => Array<ViewComponent>;

        @Slot({
            title: '编辑单元格',
            description: '对单元格的编辑数据展示进行自定义',
        })
        slotEditcell: (current: Current<T>) => Array<ViewComponent>;

        @Slot({
            title: '标题',
            description: '对标题进行自定义',
        })
        slotTitle: () => Array<ViewComponent>;

        @Slot({
            title: '展开列内容',
            description: '展开列的内容',
        })
        slotExpandContent: (current: Current<T>) => Array<ViewComponent>;

        @Slot({
            title: '展开列图标',
            description: '展开列图标',
        })
        slotExpander: (current: Current<T>) => Array<ViewComponent>;
    }

    @Component({
        title: '表格配置列',
    })
    export class UTableViewColumnConfig<T, V> extends ViewComponent {

        constructor(options?: Partial<UTableViewColumnConfigOptions<T, V>>) { super(); }
    }

    export class UTableViewColumnConfigOptions<T, V> extends ViewComponentOptions {
        @Prop<UTableViewColumnConfigOptions<T, V>, any>({
            title: '文本字段',
            description: '配置列的下拉弹窗里，指定数据展示的字段',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        private textField: (item: T) => any;

        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/05.%E8%A1%A8%E6%A0%BC/100.%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.html',
            docDescription: '表格展示的数据。数据源可以绑定变量或者逻辑。变量或逻辑的返回值可以是数组，也可以是对象。对象格式为{list:[], total:10}',
            designerValue: [{}, {}, {}],
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/05.%E8%A1%A8%E6%A0%BC/100.%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.html',
            docDescription: '表格每一行的数据类型。该属性为展示属性，由数据源推导得到，无需填写',
        })
        dataSchema: T;

        @Prop<UTableViewColumnConfigOptions<T, V>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '在单选、多选操作、渲染树形数据中，指定数据唯一值的字段',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/05.%E8%A1%A8%E6%A0%BC/100.%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.html',
            docDescription: '在表格开启了单选、多选操作、渲染树形数据中，指定数据唯一值的字段',
            setter: {
                concept: 'PropertySelectSetter',
            },
            disabledIf: _ => _.dataSource === null,
        })
        valueField: (item: T) => V;

        @Prop({
            group: '数据属性',
            title: '值',
            sync: true,
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/05.%E8%A1%A8%E6%A0%BC/100.%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.html',
        })
        value: V;

        @Prop({
            group: '主要属性',
            title: '确定/取消按钮',
            description: '控制弹出层的确定/取消按钮是否展示',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showFooter: nasl.core.Boolean = true;

        @Event({
            title: '选择后',
        })
        onSelect: (event: {
            selectedItem: T;
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
        }) => any;

        @Slot({
            title: '配置列展示title',
        })
        slotTitle: () => Array<ViewComponent>;

        @Slot({
            title: '配置列展示item',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }

    @Component({
        title: '表格动态列',
    })
    export class UTableViewColumnDynamic<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, T1> extends ViewComponent {
        @Prop({
            title: '数据',
        })
        data: UTableViewColumnDynamicOptions<T, V, P, M, unknown>['dataSource'];
        constructor(options?: Partial<UTableViewColumnDynamicOptions<T, V, P, M, T1>>) { super(); }
    }

    export class UTableViewColumnDynamicOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, T1> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/05.%E8%A1%A8%E6%A0%BC/100.%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.html',
            docDescription: '表格展示的数据。数据源可以绑定变量或者逻辑。变量或逻辑的返回值可以是数组，也可以是对象。对象格式为{list:[], total:10}',
            designerValue: [{}],
        })
        dataSource: { list: nasl.collection.List<T1>; total: nasl.core.Integer } | nasl.collection.List<T1>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/05.%E8%A1%A8%E6%A0%BC/100.%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.html',
            docDescription: '表格每一行的数据类型。该属性为展示属性，由数据源推导得到，无需填写',
        })
        dataSchema: T1;

        @Prop<UTableViewColumnDynamicOptions<T, V, P, M, T1>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '在单选、多选操作、渲染树形数据中，指定数据唯一值的字段',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/05.%E8%A1%A8%E6%A0%BC/100.%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.html',
            docDescription: '在表格开启了单选、多选操作、渲染树形数据中，指定数据唯一值的字段',
            setter: {
                concept: 'PropertySelectSetter',
            },
            disabledIf: _ => _.dataSource === null,
        })
        valueField: (item: T) => V = ((item: any)  => item.value) as any;

        @Prop({
            group: '数据属性',
            title: '排序',
            description: '设置该列是否可以排序',
            docDescription: '开启后该列可排序，可设置默认顺序，升序或倒序',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        sortable: nasl.core.Boolean = false;

        @Prop<UTableViewColumnDynamicOptions<T, V, P, M, T1>, 'defaultOrder'>({
            group: '数据属性',
            title: '排序初始顺序',
            description: '该列首次点击时的排序顺序',
            docDescription: '该列首次点击时的排序顺序。与表格属性中的"默认排序顺序"相同',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '升序' }, { title: '倒序' }],
            },
            if: _ => _.sortable === true,
        })
        defaultOrder: 'asc' | 'desc' = 'asc';

        @Prop({
            group: '主要属性',
            title: '固定列',
            description: '该列是否固定。左侧固定列需要从第一列到当前固定列之间的列都是固定列。右侧固定列需要最后一列到当前固定列之间的列都是固定列。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        fixed: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '表头文本过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '开启后，该列表头文本过长会省略显示，否则换行显示，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        thEllipsis: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '内容区文本过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '开启后，该列文本过长会省略显示，否则换行显示，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        ellipsis: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '隐藏列',
            docDescription: '开启后，当表格横向滚动条滚动时，该列会固定不会跟随滚动条滚动',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        hidden: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '列宽度',
            description: '设置列宽度，可设置为数字或百分比',
            docDescription: '指定列宽，可以是数字或百分比，如100，或10%。',
        })
        width: nasl.core.String | nasl.core.Decimal;

        @Slot({
            title: '配置列展示title',
        })
        slotTitle: (current: {
            columnIndex: nasl.core.Integer, 
            columnItem: T1
        }) => Array<ViewComponent>;

        @Slot({
            title: '配置列展示item',
            description: '自定义选项的结构和样式',
        })
        slotCell: (current: CurrentDynamic<T, T1>) => Array<ViewComponent>;
    }

    @Component({
        title: '表格列分组',
    })
    export class UTableViewColumnGroup<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponent {

        constructor(options?: Partial<UTableViewColumnGroupOptions<T, V, P, M>>) { super(); }
    }

    export class UTableViewColumnGroupOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '表格标题',
        })
        private title: nasl.core.String;

        @Slot({
            title: '默认',
            description: '在表格中插入`<u-table-view-column>`子组件',
            emptyBackground: 'drag-entity-here',
            snippets: [
                {
                    title: '表格列',
                    code: '<u-table-view-column><template #cell="current"></template><template #title><u-text text="表格列"></u-text></template></u-table-view-column>',
                },
                {
                    title: '表格动态列',
                    code: '<u-table-view-column-dynamic><template #cell="current"></template><template #title="current"><u-text text="表格动态列"></u-text></template></u-table-view-column-dynamic>',
                },
            ],
        })
        slotDefault: SlotType<() => Array<UTableViewColumn<T, V, P, M>>>;

        @Slot({
            title: '标题',
            description: '对标题进行自定义',
        })
        slotTitle: () => Array<ViewComponent>;
    }

    @Component({
        title: '展开列图标',
    })
    export class UTableViewExpander extends ViewComponent {

        constructor(options?: Partial<UTableViewExpanderOptions>) { super(); }
    }

    export class UTableViewExpanderOptions  extends ViewComponentOptions {
        @Prop({
            title: '展开时图标',
            description: '展开时图标',
            setter: {
                concept: 'IconSetter',
            },
        })
        expandIcon: nasl.core.String;

        @Prop({
            title: '关闭时图标',
            description: '关闭时图标',
            setter: {
                concept: 'IconSetter',
            },
        })
        collapseIcon: nasl.core.String;
    }
}
