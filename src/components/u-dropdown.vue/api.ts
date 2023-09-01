/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '下拉菜单',
        icon: 'dropdown-new',
        description: '下拉菜单',
    })
    export class UDropdown extends VueComponent {

        constructor(options?: Partial<UDropdownOptions>) { super(); }
    }

    export class UDropdownOptions {
        @Prop({
            title: '触发方式',
            description: '触发方式',
            setter: {
                type: 'enumSelect',
                titles: ['点击', '悬浮', '右击', '双击', '手动'],
            },
        })
        private trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual' = 'hover';

        @Prop({
            group: '主要属性',
            title: '样式类型',
            docDescription: '支持基础按钮样式、主要按钮样式、次要按钮样式、普通按钮样式共4种样式',
            setter: {
                type: 'enumSelect',
                titles: ['基础按钮样式', '主要按钮样式', '次要按钮样式', '普通按钮样式', '更多按钮样式'],
            },
        })
        type: 'text' | 'primary' | 'primary_secondary' | 'normal' | 'more' = 'text';

        @Prop({
            group: '主要属性',
            title: '弹出方向',
            description: '弹出层的弹出方向',
            docDescription: '设置下拉菜单的弹出位置，支持上、下、左、右、上左、上右、下左、下右、左上、左下、右上、右下共12个方向',
            setter: {
                type: 'enumSelect',
                titles: ['上', '下', '左', '右', '上左', '上右', '下左', '下右', '左上', '左下', '右上', '右下'],
            },
        })
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end' = 'bottom';

        @Prop({
            group: '主要属性',
            title: '弹出层位置依据',
            description: `设置弹出层依据哪个元素定位位置，可选值：'body'表示添加到 document.body，'reference'表示添加到参考元素中。`,
            docDescription: '设置弹出层在html里的位置，支持引用元素下、全局body设置。当把下拉菜单放入某个组件，而组件overflow是hidden的时候，需要设置为全局body',
            setter: {
                type: 'enumSelect',
                titles: ['引用元素下', '全局body'],
            },
        })
        appendTo: 'reference' | 'body' = 'reference';

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Slot({
            title: 'undefined',
            description: '插入`<u-dropdown-item>`子组件。',
            snippets: [
                {
                    title: '菜单项',
                    code: '<u-dropdown-item><u-text text="选项一"></u-text></u-dropdown-item>',
                },
            ],
        })
        slotDefault: () => Array<UDropdownItem>;
    }

    @Component({
        title: '下拉菜单项',
        icon: 'dropdown-new-item',
        description: '下拉菜单项',
    })
    export class UDropdownItem extends VueComponent {

        constructor(options?: Partial<UDropdownItemOptions>) { super(); }
    }

    export class UDropdownItemOptions {
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
            docDescription: '支持新窗口、当前窗口、父级窗口、顶级窗口四种方式，其中父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口',
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
            description: '点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。',
        })
        onClick: () => void;
    }
}
