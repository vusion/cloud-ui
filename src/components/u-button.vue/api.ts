/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '按钮',
        icon: 'button',
        description: '用于触发一个即时操作。',
    })
    export class UButton extends VueComponent {

        constructor(options?: Partial<UButtonOptions>) { super(); }
    }

    export class UButtonOptions {
        @Prop({
            title: '路由链接',
            description: '需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。',
        })
        private to: nasl.core.String | Location;

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
            title: '文本',
            description: '显示文本内容',
            docDescription: '显示的文本内容',
        })
        text: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '样式类型',
            description: '设置主题颜色和按钮样式类型',
            docDescription: '- 支持定义按钮样式，包括主要按钮、次要按钮、普通按钮、危险操作按钮和次要危险操作按钮。',
            setter: {
                type: 'enumSelect',
                titles: ['主要按钮', '次要按钮', '普通按钮', '危险操作按钮', '次要危险操作按钮'],
            },
        })
        color: 'primary' | 'primary_secondary' | 'default' | 'danger' | 'danger_secondary' = 'default';

        @Prop({
            group: '主要属性',
            title: '展示方式',
            description: '行内展示，或块级换行展示',
            docDescription: '控制展示方式，支持行内展示、块级展示（宽度会充满父元素）两种方式。',
            setter: {
                type: 'enumSelect',
                titles: ['行内展示', '块级展示，宽度会充满父元素'],
            },
        })
        display: 'inline' | 'block' = 'inline';

        @Prop({
            group: '主要属性',
            title: '图标',
            docDescription: '支持从图标库选择图标或上传自定义图标。',
            setter: {
                type: 'iconSelect',
            },
        })
        icon: nasl.core.String = '';

        @Prop({
            title: '图标位置',
            description: '设置图标居左或居右显示',
            setter: {
                type: 'enumSelect',
                titles: ['左', '右'],
            },
        })
        iconPosition: 'left' | 'right' = 'left';

        @Prop({
            group: '交互属性',
            title: '链接类型',
            docDescription: '支持页面跳转、普通链接、下载链接。',
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
            docDescription: '链接的详细地址。',
        })
        hrefAndTo: nasl.core.String;

        @Prop({
            group: '交互属性',
            title: '链接打开方式',
            description: '链接跳转的打开方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。',
            docDescription: '可选新窗口、父级窗口、当前窗口和顶级窗口，其中父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。',
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

        @Prop({
            group: '状态属性',
            title: '加载中触发条件',
            description: '设置加载中状态的触发条件',
            setter: {
                type: 'switch',
            },
        })
        private loading: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '显示虚线边框',
            description: '设置是否显示虚线边框',
            docDescription: '启用后，按钮边框变为虚线，默认关闭。',
            setter: {
                type: 'switch',
            },
        })
        dashed: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '尺寸',
            description: '设置按钮大小',
            docDescription: '按钮尺寸，支持设置巨大、大、中型、正常、小、迷你。',
            setter: {
                type: 'enumSelect',
                titles: ['巨大', '大', '中型', '正常', '小', '迷你'],
            },
        })
        size: 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini' = 'normal';

        @Prop({
            group: '样式属性',
            title: '形状',
            description: '设置按钮形状',
            docDescription: '支持定义按钮形状，包括默认、方形、圆角、圆形四种。',
            setter: {
                type: 'enumSelect',
                titles: ['默认', '方形', '圆角', '圆形'],
            },
        })
        shape: 'default' | 'square' | 'round' | 'circle' = 'default';

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
