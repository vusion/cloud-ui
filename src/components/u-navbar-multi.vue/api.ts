/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '导航栏',
        icon: 'navbar-multi',
        description: '通常用于页面顶部的导航菜单，放置 Logo、导航链接、用户信息等。',
        group: 'Navigation'
    })
    export class UNavbarMulti<T, V> extends ViewComponent {

        constructor(options?: Partial<UNavbarMultiOptions<T, V>>) { super(); }
    }

    export class UNavbarMultiOptions<T, V> extends ViewComponentOptions {
        @Prop<UNavbarMultiOptions<T, V>, 'hasDataSource'>({
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

        @Prop<UNavbarMultiOptions<T, V>, 'dataSource'>({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            docDescription: '支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑',
            designerValue: [{}, {}, {}],
            if: _ => _.hasDataSource === true,
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop<UNavbarMultiOptions<T, V>, 'dataSchema'>({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '该属性为只读状态，当数据源动态绑定集合List<T>后，会自动识别T的类型并进行展示',
            if: _ => _.hasDataSource === true,
        })
        dataSchema: T;

        @Prop<UNavbarMultiOptions<T, V>, 'textField'>({
            group: '数据属性',
            title: '文本字段',
            description: '集合的元素类型中，用于显示文本的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        textField: (item: T) => any = ((item: any)  => item.text) as any;

        @Prop<UNavbarMultiOptions<T, V>, 'valueField'>({
            group: '数据属性',
            title: '值字段',
            description: '集合的元素类型中，用于标识选中值的属性',
            docDescription: '集合的元素类型中，用于标识选中值的属性，支持自定义变更',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        valueField: (item: T) => V = ((item: any)  => item.value) as any;

        @Prop<UNavbarMultiOptions<T, V>, 'iconField'>({
            group: '数据属性',
            title: '图标属性字段',
            description: '集合的元素类型中，用于图标的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        iconField: (item: T) => any = ((item: any)  => item.icon) as any;

        @Prop<UNavbarMultiOptions<T, V>, 'toField'>({
            group: '数据属性',
            title: '跳转链接字段',
            description: '集合的元素类型中，用于跳转链接的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        toField: (item: T) => any = ((item: any)  => item.to) as any;

        @Prop<UNavbarMultiOptions<T, V>, 'parentField'>({
            group: '数据属性',
            title: '父级值字段',
            description: '集合的元素类型中，用于标识父节点的属性',
            docDescription: '集合的元素类型中，用于标识父级字段的属性，支持自定义变更',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        parentField: (item: T) => any;

        @Prop<UNavbarMultiOptions<T, V>, 'router'>({
            group: '数据属性',
            title: '使用路由',
            description: '是否根据 vue-router 来控制选择项',
            docDescription: '设置是否根据vue-router来控制选择哪一项，默认开启。开启后当前所在的导航栏项底部会有标识',
            setter: {
                concept: 'SwitchSetter',
            },
            onChange: [
                { clear: ['value'] }
            ],
        })
        router: nasl.core.Boolean = true;

        @Prop<UNavbarMultiOptions<T, V>, 'value'>({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            sync: true,
            docDescription: '当前选择的值',
            if: _ => _.router === false,
        })
        value: V;

        @Prop<UNavbarMultiOptions<T, V>, any>({
            group: '数据属性',
            title: '字段',
            description: '显示文本字段',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        private field: (item: T) => any = ((item: any)  => item.text) as any;

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
        }) => any;

        @Slot({
            title: '默认',
            description: '插入`<u-navbar-multi>`子组件。',
            snippets: [
                {
                    title: '导航栏分组',
                    code: '<u-navbar-group-multi><template #title><u-text text="导航栏分组"></u-text></template><u-navbar-item-multi><u-text text="导航栏项"></u-text></u-navbar-item-multi></u-navbar-group-multi>',
                },
                {
                    title: '导航栏项',
                    code: '<u-navbar-item-multi><u-text text="导航栏项"></u-text></u-navbar-item-multi>',
                },
                {
                    title: '分隔线',
                    code: '<u-navbar-divider-multi></u-navbar-divider-multi>',
                },
            ],
        })
        slotDefault: () => Array<UNavbarGroupMulti | UNavbarItemMulti | UNavbarDividerMulti>;

        @Slot({
            title: '左侧导航',
            description: '内容自定义',
        })
        slotLeft: () => Array<ViewComponent>;

        @Slot({
            title: '右侧导航',
            description: '内容自定义',
        })
        slotRight: () => Array<ViewComponent>;
    }

    @Component({
        title: '导航栏项',
        description: '导航栏的子项目',
    })
    export class UNavbarItemMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarItemMultiOptions>) { super(); }
    }

    export class UNavbarItemMultiOptions  extends ViewComponentOptions {
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
            title: '替换地址',
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
            docDescription: '当前选择的值',
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
            docDescription: '支持页面跳转、下载链接',
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
            docDescription: '链接地址配置',
        })
        hrefAndTo: nasl.core.String;

        @Prop({
            group: '交互属性',
            title: '链接打开方式',
            description: '链接跳转的打开方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。',
            docDescription: '支持新窗口、当前窗口、父级窗口、顶级窗口四种方式，其中父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。',
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
            description: '导航栏项的内容',
        })
        slotDefault: () => Array<ViewComponent>;
    }

    @Component({
        title: '导航栏分割线',
        description: '导航栏的分割线',
    })
    export class UNavbarDividerMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarDividerMultiOptions>) { super(); }
    }

    export class UNavbarDividerMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航栏下拉菜单',
        description: '导航栏下拉菜单',
    })
    export class UNavbarDropdownMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarDropdownMultiOptions>) { super(); }
    }

    export class UNavbarDropdownMultiOptions  extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '弹出方向',
            description: '弹出层的弹出方向',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '上' }, { title: '下' }, { title: '左' }, { title: '右' }, { title: '上左' }, { title: '上右' }, { title: '下左' }, { title: '下右' }, { title: '左上' }, { title: '左下' }, { title: '右上' }, { title: '右下' }],
            },
        })
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end' = 'bottom';

        @Prop({
            group: '交互属性',
            title: '触发方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '点击' }, { title: '悬浮' }, { title: '右击' }, { title: '双击' }, { title: '手动' }],
            },
        })
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual' = 'hover';

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;
    }

    @Component({
        title: '导航菜单',
        description: '导航菜单',
    })
    export class UNavbarMenuMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarMenuMultiOptions>) { super(); }
    }

    export class UNavbarMenuMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航菜单分组',
        description: '导航菜单分组',
    })
    export class UNavbarMenuGroupMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarMenuGroupMultiOptions>) { super(); }
    }

    export class UNavbarMenuGroupMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航菜单项',
        description: '导航菜单项',
    })
    export class UNavbarMenuItemMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarMenuItemMultiOptions>) { super(); }
    }

    export class UNavbarMenuItemMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航菜单分割线',
        description: '导航菜单分割线',
    })
    export class UNavbarMenuDividerMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarMenuDividerMultiOptions>) { super(); }
    }

    export class UNavbarMenuDividerMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航选择',
        description: '导航选择',
    })
    export class UNavbarSelectMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarSelectMultiOptions>) { super(); }
    }

    export class UNavbarSelectMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航选择分组',
        description: '导航选择分组',
    })
    export class UNavbarSelectGroupMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarSelectGroupMultiOptions>) { super(); }
    }

    export class UNavbarSelectGroupMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航选择项',
        description: '导航选择项',
    })
    export class UNavbarSelectItemMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarSelectItemMultiOptions>) { super(); }
    }

    export class UNavbarSelectItemMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航选择分割线',
        description: '导航选择分割线',
    })
    export class UNavbarSelectDividerMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarSelectDividerMultiOptions>) { super(); }
    }

    export class UNavbarSelectDividerMultiOptions  extends ViewComponentOptions {

    }

    @Component({
        title: '导航栏分组',
        description: '导航栏分组',
    })
    export class UNavbarGroupMulti extends ViewComponent {

        constructor(options?: Partial<UNavbarGroupMultiOptions>) { super(); }
    }

    export class UNavbarGroupMultiOptions  extends ViewComponentOptions {
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
            group: '交互属性',
            title: '触发方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '点击' }, { title: '悬浮' }, { title: '右击' }, { title: '双击' }],
            },
        })
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' = 'click';

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
            description: '插入`<u-navbar-multi>`子组件。',
            snippets: [
                {
                    title: '导航栏分组',
                    code: '<u-navbar-group-multi><template #title><u-text text="导航栏分组"></u-text></template><u-navbar-item-multi><u-text text="导航栏项"></u-text></u-navbar-item-multi></u-navbar-group-multi>',
                },
                {
                    title: '导航栏项',
                    code: '<u-navbar-item-multi><u-text text="导航栏项"></u-text></u-navbar-item-multi>',
                },
            ],
        })
        slotDefault: () => Array<UNavbarGroupMulti | UNavbarItemMulti>;

        @Slot({
            title: '标题',
            description: '标题自定义',
        })
        slotTitle: () => Array<ViewComponent>;
    }
}
