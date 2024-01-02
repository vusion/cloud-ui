/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '折叠面板',
        icon: 'collapse',
        description: '可以折叠/展开的内容区域。',
        group: "Container"
    })
    export class UCollapse extends ViewComponent {

        constructor(options?: Partial<UCollapseOptions>) { super(); }
    }

    export class UCollapseOptions extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '显示效果',
            docDescription: '支持默认模式和简洁模式，默认模式面板有边框，简洁模式面板无左右边框',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '默认模式' }, { title: '简洁模式' }],
            },
        })
        appear: 'default' | 'simple' = 'default';

        @Prop({
            group: '主要属性',
            title: '填充位置',
            docDescription: '可选背景色填充位置，支持头部填充、内容填充和无填充',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '头部填充' }, { title: '内容填充' }, { title: '无填充' }],
            },
        })
        fill: 'head' | 'content' | 'none' = 'head';

        @Prop({
            group: '交互属性',
            title: '手风琴模式',
            description: '设置是否每次只展开一个',
            docDescription: `控制手风琴模式的开关，默认关闭。
- 开启：展开一个面板项时，其他面板项全部折叠。
- 关闭：可同时展开多个面板项。`,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        accordion: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '展开触发方式',
            description: '展开/折叠操作的触发方式',
            docDescription: '可选择点击整行均可触发或仅点击小箭头时触发',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '整行点击均可触发' }, { title: '仅点击小箭头时触发' }],
            },
        })
        expandTrigger: 'click' | 'click-expander' = 'click';

        @Prop({
            group: '状态属性',
            title: '禁用展开/折叠',
            description: '置灰显示，且禁止展开/折叠操作',
            docDescription: '开启后当前面板所有项均无法展开或折叠，默认关闭',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '展开时',
            description: '展开此面板时触发',
        })
        onExpand: (event: any) => any;

        @Event({
            title: '折叠时',
            description: '折叠某面板时触发',
        })
        onCollapse: (event: any) => any;

        @Slot({
            title: 'undefined',
            description: '插入`<u-collapse-item>`子组件。',
            snippets: [
                {
                    title: '多选项',
                    code: '<u-collapse-item><template #title><u-text text="面板"></u-text></template><template #extra></template>内容</u-collapse-item>',
                },
            ],
        })
        slotDefault: () => Array<UCollapseItem>;
    }

    @Component({
        title: '折叠面板项',
        description: '折叠面板项',
    })
    export class UCollapseItem extends ViewComponent {

        constructor(options?: Partial<UCollapseItemOptions>) { super(); }
    }

    export class UCollapseItemOptions extends ViewComponentOptions {
        @Prop({
            title: '标题',
            description: '显示的标题',
        })
        private title: nasl.core.String;

        @Prop({
            group: '状态属性',
            title: '展开状态',
            description: '展开状态分为“True(展开)/False(折叠)”，默认为“展开”',
            sync: true,
            docDescription: '控制折叠面板项的默认状态，若开启当前面板项默认展开，若关闭当前面板项默认关闭',
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

        @Event({
            title: '展开时',
            description: '展开此面板时触发',
        })
        onExpand: (event: any) => any;

        @Event({
            title: '折叠时',
            description: '折叠某面板时触发',
        })
        onCollapse: (event: any) => any;

        @Slot({
            title: 'undefined',
            description: '插入文本或 HTML。',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: 'undefined',
            description: '自定义标题文本。',
        })
        slotTitle: () => Array<ViewComponent>;

        @Slot({
            title: 'undefined',
            description: '在右侧可以附加内容。',
        })
        slotExtra: () => Array<ViewComponent>;
    }
}
