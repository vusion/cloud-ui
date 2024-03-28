/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '下拉菜单',
        icon: 'dropdown-new',
        description: '下拉菜单',
        group: 'Navigation'
    })
    export class UDropdown<T, V> extends ViewComponent {

        constructor(options?: Partial<UDropdownOptions<T, V>>) { super(); }
    }

    export class UDropdownOptions<T, V> extends ViewComponentOptions {
        @Prop<UDropdownOptions<T, V>, 'hasDataSource'>({
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

        @Prop<UDropdownOptions<T, V>, 'dataSource'>({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            docDescription: '支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑',
            designerValue: [{}, {}, {}],
            if: _ => _.hasDataSource === true,
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop<UDropdownOptions<T, V>, 'dataSchema'>({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '该属性为只读状态，当数据源动态绑定集合List<T>后，会自动识别T的类型并进行展示',
            if: _ => _.hasDataSource === true,
        })
        dataSchema: T;

        @Prop<UDropdownOptions<T, V>, 'textField'>({
            group: '数据属性',
            title: '文本字段',
            description: '集合的元素类型中，用于显示文本的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        textField: (item: T) => any = ((item: any)  => item.text) as any;

        @Prop<UDropdownOptions<T, V>, 'valueField'>({
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

        @Prop<UDropdownOptions<T, V>, 'iconField'>({
            group: '数据属性',
            title: '图标属性字段',
            description: '集合的元素类型中，用于图标的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        iconField: (item: T) => any = ((item: any)  => item.icon) as any;

        @Prop<UDropdownOptions<T, V>, 'toField'>({
            group: '数据属性',
            title: '跳转链接字段',
            description: '集合的元素类型中，用于跳转链接的属性名称',
            setter: {
                concept: 'PropertySelectSetter',
            },
            if: _ => _.hasDataSource === true,
        })
        toField: (item: T) => any = ((item: any)  => item.to) as any;

        @Prop<UDropdownOptions<T, V>, 'parentField'>({
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

        @Prop({
            group: '交互属性',
            title: '触发方式',
            description: '触发方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '点击' }, { title: '悬浮' }, { title: '右击' }, { title: '双击' }, { title: '手动' }],
            },
        })
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual' = 'click';

        @Prop({
            group: '主要属性',
            title: '样式类型',
            docDescription: '支持基础按钮样式、主要按钮样式、次要按钮样式、普通按钮样式共4种样式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '基础按钮样式' }, { title: '主要按钮样式' }, { title: '次要按钮样式' }, { title: '普通按钮样式' }, { title: '更多按钮样式' }],
            },
        })
        type: 'text' | 'primary' | 'primary_secondary' | 'normal' | 'more' = 'text';

        @Prop({
            group: '主要属性',
            title: '弹出方向',
            description: '弹出层的弹出方向',
            docDescription: '设置下拉菜单的弹出位置，支持上、下、左、右、上左、上右、下左、下右、左上、左下、右上、右下共12个方向',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '上' }, { title: '下' }, { title: '左' }, { title: '右' }, { title: '上左' }, { title: '上右' }, { title: '下左' }, { title: '下右' }, { title: '左上' }, { title: '左下' }, { title: '右上' }, { title: '右下' }],
            },
        })
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end' = 'bottom';

        @Prop({
            group: '主要属性',
            title: '弹出层位置依据',
            description: `设置弹出层依据哪个元素定位位置，可选值：'body'表示添加到 document.body，'reference'表示添加到参考元素中。`,
            docDescription: '设置弹出层在html里的位置，支持引用元素下、全局body设置。当把下拉菜单放入某个组件，而组件overflow是hidden的时候，需要设置为全局body',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '引用元素下' }, { title: '全局body' }],
            },
        })
        appendTo: 'reference' | 'body' = 'reference';

        @Prop({
            group: '数据属性',
            title: '使用路由',
            description: '是否使用 vue-router',
            docDescription: '设置使用vue-router。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        router: nasl.core.Boolean = true;

        @Prop<UDropdownOptions<T, V>, 'value'>({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            sync: true,
            docDescription: '当前选择的值，值仅在不适用路由下支持编辑',
            if: _ => _.router === false,
        })
        value: V;

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
            title: '显示状态',
            docDescription: '开启时进入页面即展示下拉菜单，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        opened: nasl.core.Boolean = false;

        @Slot({
            title: 'undefined',
            description: '插入`<u-dropdown>`子组件。',
            snippets: [
                {
                    title: '下拉菜单分组',
                    code: '<u-dropdown-group><template #title><u-text text="菜单分组"></u-text></template><u-dropdown-item><u-text text="菜单项"></u-text></u-dropdown-item></u-dropdown-group>',
                },
                {
                    title: '菜单项',
                    code: '<u-dropdown-item><u-text text="菜单项"></u-text></u-dropdown-item>',
                },
            ],
        })
        slotDefault: () => Array<UDropdownGroup | UDropdownItem>;

        @Slot({
            title: '标题',
            description: '内容自定义',
        })
        slotTitle: () => Array<ViewComponent>;
    }

    @Component({
        title: '下拉菜单项',
        icon: 'dropdown-new-item',
        description: '下拉菜单项',
    })
    export class UDropdownItem extends ViewComponent {

        constructor(options?: Partial<UDropdownItemOptions>) { super(); }
    }

    export class UDropdownItemOptions  extends ViewComponentOptions {
        @Prop({
            title: '文本',
            description: '显示文本内容',
        })
        private text: nasl.core.String;

        @Prop({
            title: '路由链接',
            description: '需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。',
        })
        private to: nasl.core.String | Location;

        @Prop({
            group: '主要属性',
            title: '图标',
            docDescription: '菜单项前增加自定义图标显示',
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
            description: '点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。',
        })
        onClick: (event: any) => any;

        @Slot({
            title: '默认',
            description: '插入文本或 HTML。',
        })
        slotDefault: () => Array<ViewComponent>;
    }

    @Component({
        title: '下拉菜单分组',
        description: '侧边栏分组',
    })
    export class UDropdownGroup extends ViewComponent {

        constructor(options?: Partial<UDropdownGroupOptions>) { super(); }
    }

    export class UDropdownGroupOptions  extends ViewComponentOptions {
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
        collapsible: nasl.core.Boolean = true;

        @Prop({
            group: '交互属性',
            title: '触发方式',
            description: '触发方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '点击' }, { title: '悬浮' }, { title: '右击' }, { title: '双击' }, { title: '与父级同步' }],
            },
        })
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'none' = 'none';

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
            title: 'undefined',
            description: '插入`<u-dropdown>`子组件。',
            snippets: [
                {
                    title: '下拉菜单分组',
                    code: '<u-dropdown-group><template #title><u-text text="菜单分组"></u-text></template><u-dropdown-item><u-text text="菜单项"></u-text></u-dropdown-item></u-dropdown-group>',
                },
                {
                    title: '菜单项',
                    code: '<u-dropdown-item><u-text text="菜单项"></u-text></u-dropdown-item>',
                },
            ],
        })
        slotDefault: () => Array<UDropdownGroup | UDropdownItem>;

        @Slot({
            title: '标题',
            description: '内容自定义',
        })
        slotTitle: () => Array<ViewComponent>;
    }
}
