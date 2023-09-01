/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '导航栏',
        icon: 'navbar-multi',
        description: '通常用于页面顶部的导航菜单，放置 Logo、导航链接、用户信息等。',
    })
    export class UNavbarMulti extends VueComponent {

        constructor(options?: Partial<UNavbarMultiOptions>) { super(); }
    }

    export class UNavbarMultiOptions {
        @Prop({
            group: '数据属性',
            title: '使用路由',
            description: '是否根据 vue-router 来控制选择项',
            docDescription: '设置是否根据vue-router来控制选择哪一项，默认开启。开启后当前所在的导航栏项底部会有标识',
        })
        router: nasl.core.Boolean = true;

        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            syncMode: 'both',
            docDescription: '当前选择的值',
        })
        value: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '字段',
            description: '显示文本字段',
        })
        private field: nasl.core.String = 'text';

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '选择后',
            description: '选择某一项后触发。',
        })
        onSelect: (event: nasl.ui.ChangeItemEvent) => void;
    }

    @Component({
        title: '导航栏项',
        description: '导航栏的子项目',
    })
    export class UNavbarItemMulti extends VueComponent {

        constructor(options?: Partial<UNavbarItemMultiOptions>) { super(); }
    }

    export class UNavbarItemMultiOptions {
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
        })
        private replace: nasl.core.Boolean = false;

        @Prop({
            title: '精确匹配',
            description: '需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。',
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
                type: 'iconSelect',
            },
        })
        icon: nasl.core.String = '';

        @Prop({
            group: '交互属性',
            title: '链接类型',
            docDescription: '支持页面跳转、下载链接',
            bindHide: true,
            setter: {
                type: 'enumSelect',
                titles: ['页面跳转', '下载链接'],
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
                type: 'enumSelect',
                titles: ['新窗口', '当前窗口', '父级窗口', '顶级窗口'],
            },
        })
        target: '_blank' | '_self' | '_parent' | '_top' = '_self';

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '点击',
            description: '在元素上按下并释放任意鼠标按钮时触发。',
        })
        onClick: () => void;

        @Event({
            title: '双击',
            description: '在元素上双击鼠标按钮时触发。',
        })
        onDblclick: () => void;

        @Event({
            title: '右键点击',
            description: '在右键菜单显示前触发。',
        })
        onContextmenu: () => void;

        @Event({
            title: '鼠标按下',
            description: '在元素上按下任意鼠标按钮时触发。',
        })
        onMousedown: () => void;

        @Event({
            title: '鼠标释放',
            description: '在元素上释放任意鼠标按钮时触发。',
        })
        onMouseup: () => void;

        @Event({
            title: '鼠标移入',
            description: '鼠标移入元素时触发。',
        })
        onMouseenter: () => void;

        @Event({
            title: '鼠标移出',
            description: '鼠标移出元素时触发。',
        })
        onMouseleave: () => void;

        @Event({
            title: '获得焦点',
            description: '获得焦点时触发。',
        })
        onFocus: () => void;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: () => void;

        @Event({
            title: '切换路由后',
            description: '使用 router 相关属性切换路由后触发',
        })
        private onNavigate: (event: nasl.ui.NavigateEvent) => void;
    }

    @Component({
        title: '导航栏分割线',
        description: '导航栏的分割线',
    })
    export class UNavbarDividerMulti extends VueComponent {

        constructor(options?: Partial<UNavbarDividerMultiOptions>) { super(); }
    }

    export class UNavbarDividerMultiOptions {

    }

    @Component({
        title: '导航栏下拉菜单',
        description: '导航栏下拉菜单',
    })
    export class UNavbarDropdownMulti extends VueComponent {

        constructor(options?: Partial<UNavbarDropdownMultiOptions>) { super(); }
    }

    export class UNavbarDropdownMultiOptions {
        @Prop({
            group: '主要属性',
            title: '弹出方向',
            description: '弹出层的弹出方向',
            setter: {
                type: 'enumSelect',
                titles: ['上', '下', '左', '右', '上左', '上右', '下左', '下右', '左上', '左下', '右上', '右下'],
            },
        })
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end' = 'bottom';

        @Prop({
            group: '交互属性',
            title: '触发方式',
            setter: {
                type: 'enumSelect',
                titles: ['点击', '悬浮', '右击', '双击', '手动'],
            },
        })
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual' = 'hover';

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;
    }

    @Component({
        title: '导航菜单',
        description: '导航菜单',
    })
    export class UNavbarMenuMulti extends VueComponent {

        constructor(options?: Partial<UNavbarMenuMultiOptions>) { super(); }
    }

    export class UNavbarMenuMultiOptions {

    }

    @Component({
        title: '导航菜单分组',
        description: '导航菜单分组',
    })
    export class UNavbarMenuGroupMulti extends VueComponent {

        constructor(options?: Partial<UNavbarMenuGroupMultiOptions>) { super(); }
    }

    export class UNavbarMenuGroupMultiOptions {

    }

    @Component({
        title: '导航菜单项',
        description: '导航菜单项',
    })
    export class UNavbarMenuItemMulti extends VueComponent {

        constructor(options?: Partial<UNavbarMenuItemMultiOptions>) { super(); }
    }

    export class UNavbarMenuItemMultiOptions {

    }

    @Component({
        title: '导航菜单分割线',
        description: '导航菜单分割线',
    })
    export class UNavbarMenuDividerMulti extends VueComponent {

        constructor(options?: Partial<UNavbarMenuDividerMultiOptions>) { super(); }
    }

    export class UNavbarMenuDividerMultiOptions {

    }

    @Component({
        title: '导航选择',
        description: '导航选择',
    })
    export class UNavbarSelectMulti extends VueComponent {

        constructor(options?: Partial<UNavbarSelectMultiOptions>) { super(); }
    }

    export class UNavbarSelectMultiOptions {

    }

    @Component({
        title: '导航选择分组',
        description: '导航选择分组',
    })
    export class UNavbarSelectGroupMulti extends VueComponent {

        constructor(options?: Partial<UNavbarSelectGroupMultiOptions>) { super(); }
    }

    export class UNavbarSelectGroupMultiOptions {

    }

    @Component({
        title: '导航选择项',
        description: '导航选择项',
    })
    export class UNavbarSelectItemMulti extends VueComponent {

        constructor(options?: Partial<UNavbarSelectItemMultiOptions>) { super(); }
    }

    export class UNavbarSelectItemMultiOptions {

    }

    @Component({
        title: '导航选择分割线',
        description: '导航选择分割线',
    })
    export class UNavbarSelectDividerMulti extends VueComponent {

        constructor(options?: Partial<UNavbarSelectDividerMultiOptions>) { super(); }
    }

    export class UNavbarSelectDividerMultiOptions {

    }
}
