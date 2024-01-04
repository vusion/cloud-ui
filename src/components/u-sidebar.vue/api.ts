/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '侧边栏',
        icon: 'sidebar',
        description: '通常用于页面左侧的导航栏。',
        group: 'Navigation'
    })
    export class USidebar<T, V> extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '展开/折叠所有分组',
        })
        toggleAll(
            @Param({
                title: 'undefined',
                description: '展开/折叠',
            })
            expanded: nasl.core.Boolean,
        ): void {}
        constructor(options?: Partial<USidebarOptions<T, V>>) { super(); }
    }

    export class USidebarOptions<T, V> extends ViewComponentOptions {
        @Prop<USidebarOptions<T, V>, 'hasDataSource'>({
            group: '数据属性',
            title: '数据源配置',
            bindHide: true,
            setter: {
                concept: 'SwitchSetter',
            },
            onChange: [
                { clear: ['dataSource','dataSchema','textField','toField','iconField','valueField','parentField','linkTypeField','targetField'] }
            ],
        })
        hasDataSource: nasl.core.Boolean = false;

        @Prop<USidebarOptions<T, V>, 'dataSource'>({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            docDescription: '支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑',
            designerValue: [{}, {}, {}],
            if: _ => _.hasDataSource === true,
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop<USidebarOptions<T, V>, 'dataSchema'>({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '该属性为只读状态，当数据源动态绑定集合List<T>后，会自动识别T的类型并进行展示',
            if: _ => _.hasDataSource === true,
        })
        dataSchema: T;

        @Prop<USidebarOptions<T, V>, 'textField'>({
            group: '数据属性',
            title: '文本字段',
            description: '集合的元素类型中，用于显示文本的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        textField: (item: T) => any = ((item: any)  => item.text) as any;

        @Prop<USidebarOptions<T, V>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '集合的元素类型中，用于标识选中值的属性',
            docDescription: '集合的元素类型中，用于标识选中值的属性，支持自定义变更',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        valueField: (item: T) => any = ((item: any)  => item.value) as any;

        @Prop<USidebarOptions<T, V>, 'iconField'>({
            group: '数据属性',
            title: '图标属性字段',
            description: '集合的元素类型中，用于图标的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        iconField: (item: T) => any = ((item: any)  => item.icon) as any;

        @Prop<USidebarOptions<T, V>, 'toField'>({
            group: '数据属性',
            title: '跳转链接字段',
            description: '集合的元素类型中，用于跳转链接的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        toField: (item: T) => any = ((item: any)  => item.to) as any;

        @Prop<USidebarOptions<T, V>, 'parentField'>({
            group: '数据属性',
            title: '父级值字段',
            description: '集合的元素类型中，用于标识父节点的属性',
            docDescription: '集合的元素类型中，用于标识父级字段的属性，支持自定义变更',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        parentField: (item: T) => V;

        @Prop<USidebarOptions<T, V>, 'router'>({
            group: '数据属性',
            title: '使用路由',
            description: '是否根据 vue-router 来控制选择哪一项',
            docDescription: '设置是否根据vue-router来控制选择哪一项，默认关闭。开启后当前所在的侧边栏项底部会有标识，',
            setter: {
                concept: 'SwitchSetter',
            },
            onChange: [
                { clear: ['value'] }
            ],
        })
        router: nasl.core.Boolean = true;

        @Prop<USidebarOptions<T, V>, 'value'>({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            sync: true,
            docDescription: '当前选择的值，值仅在不适用路由下支持编辑',
            if: _ => _.router === false,
        })
        value: nasl.core.Any;

        @Prop({
            group: '交互属性',
            title: '菜单项可折叠',
            description: '设置菜单项是否可以展开/折叠',
            docDescription: '设置分组是否可折叠。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        collapsible: nasl.core.Boolean = false;

        @Prop<USidebarOptions<T, V>, 'accordion'>({
            group: '交互属性',
            title: '手风琴模式',
            description: '设置是否每次只展开一个',
            docDescription: ' 开启后每次仅会展开一个分组。',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.collapsible === true,
        })
        accordion: nasl.core.Boolean = false;

        @Prop<USidebarOptions<T, V>, 'expandTrigger'>({
            group: '交互属性',
            title: '展开触发方式',
            description: '展开/折叠操作的触发方式',
            docDescription: '支持整行点击均可触发和仅点击小箭头时触发两种方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '整行点击均可触发' }, { title: '仅点击小箭头时触发' }],
            },
            if: _ => _.collapsible === true,
        })
        expandTrigger: 'click' | 'click-expander' = 'click';

        @Prop({
            group: '交互属性',
            title: '侧边栏可折叠',
            description: '设置侧边栏是否可以展开/折叠',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        enableCollapse: nasl.core.Boolean = false;

        @Prop<USidebarOptions<T, V>, 'collapseMode'>({
            group: '交互属性',
            title: '默认状态',
            description: '侧边栏是否折叠',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '收起' }, { title: '展开' }],
            },
            if: _ => _.enableCollapse === true,
        })
        collapseMode: 'fold' | 'expand' = 'expand';

        @Prop<USidebarOptions<T, V>, 'expandIcon'>({
            group: '交互属性',
            title: '展开图标',
            description: '侧边栏展开图标',
            setter: {
                concept: 'IconSetter',
            },
            if: _ => _.enableCollapse === true,
        })
        expandIcon: nasl.core.String = 'expand';

        @Prop<USidebarOptions<T, V>, 'foldIcon'>({
            group: '交互属性',
            title: '折叠图标',
            description: '侧边栏折叠图标',
            setter: {
                concept: 'IconSetter',
            },
            if: _ => _.enableCollapse === true,
        })
        foldIcon: nasl.core.String = 'fold';

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
            title: '选择后',
            description: '选择某一项后触发。',
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

        @Slot({
            title: '默认',
            description: '插入`<u-sidebar-item>`、`<u-sidebar-divider>`或`<u-sidebar-group>`子组件。',
            snippets: [
                {
                    title: '侧边栏分组',
                    code: '<u-sidebar-group><template #title><u-text text="分组"></u-text></template><u-sidebar-item><u-text text="侧边栏项"></u-text></u-sidebar-item></u-sidebar-group>',
                },
                {
                    title: '侧边栏项',
                    code: '<u-sidebar-item><u-text text="侧边栏项"></u-text></u-sidebar-item>',
                },
                {
                    title: '分隔线',
                    code: '<u-sidebar-divider></u-sidebar-divider>',
                },
            ],
        })
        slotDefault: () => Array<USidebarGroup | USidebarItem | USidebarDivider>;
    }

    @Component({
        title: '侧边栏项',
        description: '侧边栏项',
    })
    export class USidebarItem extends ViewComponent {

        constructor(options?: Partial<USidebarItemOptions>) { super(); }
    }

    export class USidebarItemOptions  extends ViewComponentOptions {
        @Prop({
            title: '文本',
            description: '文本内容',
        })
        private text: nasl.core.String;

        @Prop({
            title: '相关对象',
            description: '相关对象。当选择此项时，抛出的事件会传递该对象，便于开发',
        })
        private item: nasl.core.Any;

        @Prop({
            title: '路由链接',
            description: '需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。',
        })
        private to: nasl.core.String;

        @Prop({
            title: '替换',
            description: '需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private replace: nasl.core.Boolean = false;

        @Prop({
            title: '精确匹配',
            description: '需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private exact: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '用于标识此项的值',
            docDescription: '用于标识此项的值',
        })
        value: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '图标',
            docDescription: '支持从图标库选择图标或上传自定义图标',
            setter: {
                concept: 'IconSetter',
            },
        })
        icon: nasl.core.String = '';

        @Prop({
            group: '交互属性',
            title: '链接类型',
            docDescription: '支持页面跳转、普通链接、下载链接',
            bindHide: true,
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '页面跳转' }, { title: '下载链接' }],
            },
        })
        linkType: 'destination' | 'download' = 'destination';

        @Prop({
            group: '交互属性',
            title: '链接地址',
            docDescription: '链接的详细地址',
        })
        hrefAndTo: nasl.core.String;

        @Prop({
            group: '交互属性',
            title: '链接打开方式',
            description: '链接跳转的打开方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。',
            docDescription: '支持新窗口、当前窗口、父级窗口、顶级窗口四种方式，其中父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '新窗口' }, { title: '当前窗口' }, { title: '父级窗口' }, { title: '顶级窗口' }],
            },
        })
        target: '_blank' | '_self' | '_parent' | '_top' = '_self';

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
            title: '点击',
            description: '在元素上按下并释放任意鼠标按钮时触发。',
        })
        onClick: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '双击',
            description: '在元素上双击鼠标按钮时触发。',
        })
        onDblclick: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '右键点击',
            description: '在右键菜单显示前触发。',
        })
        onContextmenu: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '鼠标按下',
            description: '在元素上按下任意鼠标按钮时触发。',
        })
        onMousedown: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '鼠标释放',
            description: '在元素上释放任意鼠标按钮时触发。',
        })
        onMouseup: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '鼠标移入',
            description: '鼠标移入元素时触发。',
        })
        onMouseenter: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '鼠标移出',
            description: '鼠标移出元素时触发。',
        })
        onMouseleave: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
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
            title: '切换路由后',
            description: '使用 router 相关属性切换路由后触发',
        })
        onNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;

        @Slot({
            title: '默认',
            description: '侧边栏项自定义',
        })
        slotDefault: () => Array<ViewComponent>;
    }

    @Component({
        title: '侧边栏分组',
        description: '侧边栏分组',
    })
    export class USidebarGroup extends ViewComponent {

        constructor(options?: Partial<USidebarGroupOptions>) { super(); }
    }

    export class USidebarGroupOptions  extends ViewComponentOptions {
        @Prop({
            title: '标题',
            description: '显示的标题',
        })
        private title: nasl.core.String;

        @Prop({
            group: '交互属性',
            title: '可折叠',
            description: '设置是否可以展开/折叠',
            docDescription: '设置分组是否可折叠',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        collapsible: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '展开状态',
            description: '展开状态分为“True(展开)/False(折叠)”，默认为“展开”',
            sync: true,
            docDescription: '设置分组的展开折叠状态。在某些场景下需要预置分组的展开或者折叠状态',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        expanded: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用展开/折叠',
            description: '置灰显示，且禁止展开/折叠操作',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Slot({
            title: '默认',
            description: '插入`<u-sidebar-item>`或`<u-sidebar-divider>`子组件。',
            snippets: [
                {
                    title: '侧边栏分组',
                    code: '<u-sidebar-group><template #title><u-text text="分组"></u-text></template><u-sidebar-item><u-text text="侧边栏项"></u-text></u-sidebar-item></u-sidebar-group>',
                },
                {
                    title: '侧边栏项',
                    code: '<u-sidebar-item><u-text text="侧边栏项"></u-text></u-sidebar-item>',
                },
                {
                    title: '分隔线',
                    code: '<u-sidebar-divider></u-sidebar-divider>',
                },
            ],
        })
        slotDefault: () => Array<USidebarGroup | USidebarItem | USidebarDivider>;

        @Slot({
            title: 'undefined',
            description: '自定义标题文本。',
        })
        slotTitle: () => Array<ViewComponent>;

        @Slot({
            title: 'undefined',
            description: '在右侧可以附加内容。',
        })
        slotExtra: () => Array<ViewComponent>;
    }

    @Component({
        title: '侧边栏分隔线',
        description: '侧边栏分隔线',
    })
    export class USidebarDivider extends ViewComponent {

        constructor(options?: Partial<USidebarDividerOptions>) { super(); }
    }

    export class USidebarDividerOptions  extends ViewComponentOptions {

    }
}
