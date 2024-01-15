/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '选项卡',
        icon: 'tabs',
        description: '选项卡切换组件，常用于平级区域大块内容的收纳和展现。',
        group: 'Selector'
    })
    export class UTabs<T, V> extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '重新加载数据',
        })
        reload(): void {}
        constructor(options?: Partial<UTabsOptions<T, V>>) { super(); }
    }

    export class UTabsOptions<T, V> extends ViewComponentOptions {
        @Prop({
            title: '显示滚动按钮',
            description: '是否显示标签滚动左右箭头按钮',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '有滚动的情况下显示' }, { title: '始终显示' }, { title: '始终不显示' }],
            },
        })
        private showScrollButtons: 'auto' | 'always' | 'never' = 'auto';

        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            docDescription: '集合类型变量或者输出参数为集合类型的逻辑',
            designerValue: [{}, {}, {}],
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '集合类型每一元素的数据类型',
        })
        dataSchema: T;

        @Prop({
            group: '数据属性',
            title: '标签项标题',
            description: '数据源集合的元素，用于显示标签标题的属性',
            docDescription: '数据源集合的元素，用于显示标签标题的属性',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        titleField: (item: T) => any = ((item: any)  => item.title) as any;

        @Prop<UTabsOptions<T, V>, 'valueField'>({
            group: '数据属性',
            title: '标签项标题值字段',
            description: '数据源集合的元素，用于标识标签值的属性',
            docDescription: '数据源集合的元素，用于标识标签值的属性',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        valueField: (item: T) => V = ((item: any)  => item.value) as any;

        @Prop<UTabsOptions<T, V>, 'urlField'>({
            group: '数据属性',
            title: '标签项内容值字段',
            description: '数据源集合的元素，用于标识当前打开的标签项',
            docDescription: '数据源集合的元素，用于标识当前打开的标签项',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        urlField: (item: T) => any = ((item: any)  => item.url) as any;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '指当前打开标签的标签项',
            sync: true,
            docDescription: '指当前打开标签的标签项',
        })
        value: V;

        @Prop({
            group: '数据属性',
            title: '使用路由',
            description: '开启后，选项卡可设置跳转页面',
            docDescription: '开启后，选项卡可设置跳转页面',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        router: nasl.core.Boolean = false;

        @Prop<UTabsOptions<T, V>, 'closableField'>({
            group: '交互属性',
            title: '标签项可关闭',
            description: '设置标签项是否可关闭',
            docDescription: '数据源集合的元素，用于标识标签是否可关闭的属性',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        closableField: nasl.core.String = 'closable';

        @Prop({
            group: '交互属性',
            title: '可关闭',
            description: '设置标签是否可关闭',
            docDescription: '是否可以关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        closable: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '展示外观',
            docDescription: '标签展示的外观',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '方形卡片' }, { title: '圆角卡片' }, { title: '线条' }, { title: '文本' }, { title: '胶囊' }, { title: '竖线分隔' }],
            },
        })
        appear: 'square' | 'round' | 'line' | 'text' | 'capsule' | 'split' = 'square';

        @Prop({
            group: '样式属性',
            title: '标签尺寸',
            docDescription: '标签展示的尺寸',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '正常' }, { title: '小' }, { title: '迷你' }],
            },
        })
        size: 'normal' | 'small' | 'mini' = 'normal';

        @Event({
            title: '点击后',
            description: '点击某一项后触发',
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
            title: '选择前',
            description: '选择某一页前触发',
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
            title: '选择后',
            description: '选择某一项后触发',
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
            title: '关闭前',
            description: '关闭某一页前触发',
        })
        onBeforeClose: (event: {
            value: V;
            oldValue: V;
        }) => any;

        @Event({
            title: '关闭后',
            description: '关闭某一页后触发',
        })
        onClose: (event: {
            value: V;
            oldValue: V;
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
            title: '默认',
            description: '插入`<u-tab>`子组件。',
            emptyBackground: 'add-sub',
            snippets: [
                {
                    title: '子选项',
                    code: '<u-tab><template #title><u-text text="标签页"></u-text></template>内容</u-tab>',
                },
            ],
        })
        slotDefault: () => Array<UTab<V>>;

        @Slot({
            title: '右侧附加',
            description: '在标签右侧可以附加的组件。',
        })
        slotExtra: () => Array<ViewComponent>;

        @Slot({
            title: '头部标题',
        })
        slotTitle: (current: Current<T>) => Array<ViewComponent>;

        @Slot({
            title: '内容区',
        })
        slotContent: (current: Current<T>) => Array<ViewComponent>;
    }

    @Component({
        title: '标签页',
        description: '标签页',
    })
    export class UTab<V> extends ViewComponent {

        constructor(options?: Partial<UTabOptions<V>>) { super(); }
    }

    export class UTabOptions<V> extends ViewComponentOptions {
        @Prop({
            title: '标题',
            description: '标签页标题。',
        })
        private title: nasl.core.String;

        @Prop({
            title: '链接',
            description: '链接地址',
        })
        private href: nasl.core.String;

        @Prop({
            title: '打开方式',
            description: '打开方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '新窗口' }, { title: '当前窗口' }, { title: '父级窗口' }, { title: '顶级窗口' }],
            },
        })
        private target: '_blank' | '_self' | '_parent' | '_top' = '_self';

        @Prop({
            title: '路由链接',
            description: '需要 router 为 true，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。',
        })
        private to: nasl.core.String | Location;

        @Prop({
            title: '替换',
            description: '需要 router 为 true，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private replace: nasl.core.Boolean = false;

        @Prop({
            title: '追加路径',
            description: '需要 router 为 true，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private append: nasl.core.Boolean = false;

        @Prop({
            title: '精确匹配',
            description: '需要 router 为 true，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private exact: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '值',
            docDescription: '标签页的值。',
        })
        value: V;

        @Prop({
            group: '交互属性',
            title: '链接类型',
            bindHide: true,
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '页面跳转' }],
            },
        })
        linkType: 'destination' = 'destination';

        @Prop({
            group: '交互属性',
            title: '链接地址',
        })
        hrefAndTo: nasl.core.String;

        @Prop({
            group: '交互属性',
            title: '可关闭',
            description: '设置标签是否可关闭',
            docDescription: '控制标签页是否可关闭，开启效果如下',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        closable: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '显示状态',
            description: '显示状态分为“True(显示)/False(隐藏)”，默认为“显示”',
            docDescription: '控制标签页是否默认显示',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showTabItem: nasl.core.Boolean = true;

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

        @Slot({
            title: '默认',
            description: '该 tab 下的内容',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: '标题',
            description: '自定义标题',
        })
        slotTitle: () => Array<ViewComponent>;
    }
}
