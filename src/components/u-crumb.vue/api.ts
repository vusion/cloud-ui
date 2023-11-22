/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '面包屑',
        icon: 'crumb',
        description: '导航指引',
    })
    export class UCrumb extends VueComponent {

        constructor(options?: Partial<UCrumbOptions>) { super(); }
    }

    export class UCrumbOptions {
        @Prop({
            group: '主要属性',
            title: '自动生成',
            description: '是否自动根据子页面配置的面包屑属性自动生成',
            docDescription: '支持控制面包屑生成方式。',
            setter: {
                type: 'switch',
            },
        })
        auto: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '样式类型',
            description: '设置面包屑分隔样式类型，基础样式为箭头，分隔符样式为斜杠',
            docDescription: '支持控制面包屑样式，包含基础样式和分隔符样式。',
            setter: {
                type: 'enumSelect',
                titles: ['基础样式', '分隔符样式'],
            },
        })
        separator: 'arrow' | 'slash' = 'arrow';

        @Prop({
            group: '主要属性',
            title: '显示面包屑图标',
            docDescription: '支持控制面包屑选项图标显隐，开启后显示面包屑选项图标。',
            setter: {
                type: 'switch',
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
    export class UCrumbItem extends VueComponent {

        constructor(options?: Partial<UCrumbItemOptions>) { super(); }
    }

    export class UCrumbItemOptions {
        @Prop({
            title: '文本',
            description: '文本内容',
        })
        private text: nasl.core.String;

        @Prop({
            title: '替换',
            description: '需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。',
            setter: {
                type: 'switch',
            },
        })
        private replace: nasl.core.Boolean = false;

        @Prop({
            title: '追加路径',
            description: '需要 vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。',
            setter: {
                type: 'switch',
            },
        })
        private append: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '图标',
            docDescription: '支持从图标库选择或上传自定义图标。',
            setter: {
                type: 'iconSelect',
            },
        })
        icon: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '类型',
            setter: {
                type: 'enumSelect',
                titles: ['链接', '显示为默认颜色文本，不可点'],
            },
        })
        private type: 'link' | 'text' = 'link';

        @Prop({
            group: '交互属性',
            title: '链接类型',
            docDescription: '支持页面跳转、下载链接。',
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
            docDescription: '设置链接路径。',
        })
        hrefAndTo: nasl.core.String;

        @Prop({
            group: '交互属性',
            title: '链接打开方式',
            description: '链接打开后的展示方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。',
            docDescription: '可选新窗口、当前窗口、父级窗口或顶级窗口，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。',
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
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）。',
            setter: {
                type: 'switch',
            },
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
            title: '导航前',
            description: '使用 router 相关属性切换路由前触发',
        })
        private onBeforeNavigate: (event: nasl.ui.NavigateEvent) => void;

        @Event({
            title: '导航',
            description: '使用router相关属性切换路由时触发',
        })
        private onNavigate: (event: nasl.ui.NavigateEvent) => void;
    }
}
