/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '目录',
        icon: 'toc',
        description: '用于展示文档的目录',
        group: 'Navigation'
    })
    export class UToc extends ViewComponent {

        constructor(options?: Partial<UTocOptions>) { super(); }
    }

    export class UTocOptions  extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            sync: true,
            docDescription: '当前选择的值',
        })
        value: nasl.core.String;

        @Event({
            title: '选择前',
            description: '选择某一项前触发',
        })
        onBeforeSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            node: nasl.core.String;
            oldNode: nasl.core.String;
        }) => any;

        @Event({
            title: '选择后',
            description: '选择某一项时触发',
        })
        onSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            node: nasl.core.String;
            oldNode: nasl.core.String;
        }) => any;

        @Slot({
            title: 'undefined',
            description: '插入`<u-toc-item>`子组件。',
            snippets: [
                {
                    title: '子节点',
                    code: '<u-toc-item><template #label>目录节点</template></u-toc-item>',
                },
            ],
        })
        slotDefault: () => Array<UTocItem>;
    }

    @Component({
        title: '目录节点',
    })
    export class UTocItem extends ViewComponent {

        constructor(options?: Partial<UTocItemOptions>) { super(); }
    }

    export class UTocItemOptions  extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '文本',
            description: '集合的元素类型中，用于显示文本的属性名称',
        })
        private label: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '集合的元素类型中，用于标识选中值的属性',
            docDescription: '集合的元素类型中，用于标识选中值的属性',
        })
        value: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '相关对象',
            description: '相关对象。当选择此项时，抛出的事件会传递该对象，便于开发',
        })
        private item: nasl.core.Any;

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

        @Slot({
            title: 'undefined',
            description: '插入`<u-toc-item>`子组件。',
            snippets: [
                {
                    title: '子节点',
                    code: '<u-toc-item><template #label>目录节点</template></u-toc-item>',
                },
            ],
        })
        slotDefault: () => Array<UTocItem>;

        @Slot({
            title: '标签',
            description: '内容自定义',
        })
        slotLabel: () => Array<ViewComponent>;
    }
}
