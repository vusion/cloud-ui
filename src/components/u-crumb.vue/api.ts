/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '面包屑',
        icon: 'crumb',
        description: '导航指引',
        group: "Navigation"
    })
    export class UCrumb extends ViewComponent {

        constructor(options?: Partial<UCrumbOptions>) { super(); }
    }

    export class UCrumbOptions extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '自动生成',
            description: '是否自动根据子页面配置的面包屑属性自动生成',
            docDescription: '支持控制面包屑生成方式。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        auto: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '样式类型',
            description: '设置面包屑分隔样式类型，基础样式为箭头，分隔符样式为斜杠',
            docDescription: '支持控制面包屑样式，包含基础样式和分隔符样式。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '基础样式' }, { title: '分隔符样式' }],
            },
        })
        separator: 'arrow' | 'slash' = 'arrow';

        @Prop({
            group: '主要属性',
            title: '显示面包屑图标',
            docDescription: '支持控制面包屑选项图标显隐，开启后显示面包屑选项图标。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        icon: nasl.core.Boolean = false;

        @Slot({
            title: 'undefined',
            description: '插入`<u-crumb-item>`子组件。',
            snippets: [
                {
                    title: '面包屑选项',
                    code: '<u-crumb-item><u-text text="面包屑"></u-text></u-crumb-item>',
                },
            ],
        })
        slotDefault: () => Array<UCrumbItem>;
    }

    @Component({
        title: '面包屑选项',
        description: '面包屑选项',
    })
    export class UCrumbItem extends ViewComponent {

        constructor(options?: Partial<UCrumbItemOptions>) { super(); }
    }

    export class UCrumbItemOptions extends ViewComponentOptions {
        @Prop({
            title: '文本',
            description: '文本内容',
        })
        private text: nasl.core.String;

        @Prop({
            title: '替换',
            description: '需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private replace: nasl.core.Boolean = false;

        @Prop({
            title: '追加路径',
            description: '需要 vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private append: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '图标',
            docDescription: '支持从图标库选择或上传自定义图标。',
            setter: {
                concept: 'IconSetter',
            },
        })
        icon: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '类型',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '链接' }, { title: '显示为默认颜色文本，不可点' }],
            },
        })
        private type: 'link' | 'text' = 'link';

        @Prop({
            group: '交互属性',
            title: '链接类型',
            docDescription: '支持页面跳转、下载链接。',
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
            docDescription: '设置链接路径。',
        })
        hrefAndTo: nasl.core.String;

        @Prop({
            group: '交互属性',
            title: '链接打开方式',
            description: '链接打开后的展示方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。',
            docDescription: '可选新窗口、当前窗口、父级窗口或顶级窗口，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。',
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
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）。',
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
            title: '导航前',
            description: '使用 router 相关属性切换路由前触发',
        })
        onBeforeNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;

        @Event({
            title: '导航',
            description: '使用router相关属性切换路由时触发',
        })
        onNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;

        @Slot({
            title: '默认',
            description: '插入文本或 HTML。',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
