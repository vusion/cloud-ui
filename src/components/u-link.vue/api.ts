/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '链接',
        icon: 'link',
        description: '文字超链接',
    })
    export class ULink extends ViewComponent {

        constructor(options?: Partial<ULinkOptions>) { super(); }
    }

    export class ULinkOptions {
        @Prop({
            title: '路由链接',
            description: '需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。',
        })
        private to: nasl.core.String | Location;

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
            title: '下划线',
            description: '是否显示下划线',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private decoration: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '文本',
            description: '显示文本内容',
            docDescription: '显示的文本内容',
        })
        text: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '主题颜色',
            description: '设置主题颜色样式',
            docDescription: '设置文本的颜色，支持默认、浅色、成功色、警告色、危险色',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '默认' }, { title: '浅色' }, { title: '成功色' }, { title: '警告色' }, { title: '危险色' }],
            },
        })
        color: 'default' | 'light' | 'success' | 'warning' | 'danger' = 'default';

        @Prop({
            group: '主要属性',
            title: '展示方式',
            docDescription: '行内展示、块级展示（占据整行）',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '行内展示' }, { title: '块级展示，宽度会充满父元素' }],
            },
        })
        display: 'inline' | 'block' = 'inline';

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
            docDescription: '可选新窗口、父级窗口、当前窗口和顶级窗口，其中父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '新窗口' }, { title: '当前窗口' }, { title: '父级窗口' }, { title: '顶级窗口' }],
            },
        })
        target: '_blank' | '_self' | '_parent' | '_top' = '_self';

        @Prop<ULinkOptions, 'hoverType'>({
            group: '交互属性',
            title: '鼠标悬停效果',
            description: '鼠标悬停时的样式变化方式',
            docDescription: '支持鼠标悬停时样式变化，支持颜色变化和下划线两种方式',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '下划线' }, { title: '颜色变化' }],
            },
            onChange: [
                { clear: ['decoration'] }
            ],
        })
        hoverType: 'underline' | 'color' = 'underline';

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
            title: '切换路由前',
            description: '使用 router 相关属性切换路由前触发',
        })
        private onBeforeNavigate: (event: nasl.ui.NavigateEvent) => void;

        @Event({
            title: '切换路由后',
            description: '使用 router 相关属性切换路由后触发',
        })
        private onNavigate: (event: nasl.ui.NavigateEvent) => void;
    }
}