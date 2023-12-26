/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '详情列表',
        icon: 'info-list',
        description: '详情列表',
        group: 'Display'
    })
    export class UInfoList extends ViewComponent {

        constructor(options?: Partial<UInfoListOptions>) { super(); }
    }

    export class UInfoListOptions  extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '列数',
            description: '整个详情列表的划分列数',
            docDescription: '- 设置列表信息展示的划分列数',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        repeat: nasl.core.Decimal = 3;

        @Prop({
            group: '主要属性',
            title: '显示表格头部',
            description: '是否显示表格头部',
            docDescription: '开启时会显示表格头部',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showHead: nasl.core.Boolean = true;

        @Prop({
            group: '样式属性',
            title: '列表项标题宽度',
            description: '设置详情列表所有列表项的标题宽度。',
            docDescription: '列表中所有列表项的标签大小',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '自适应' }, { title: '小' }, { title: '正常' }, { title: '大' }],
            },
        })
        labelSize: 'auto' | 'small' | 'normal' | 'large' = 'auto';

        @Slot({
            title: '默认',
            description: '插入`<u-info-list-item>`或`<u-info-list-group>`子组件。',
            snippets: [
                {
                    title: '详情列表组',
                    code: '<u-info-list-group><template #title><u-text text="基本信息"></u-text></template><u-info-list-item label="名称"><u-text text="张三"></u-text></u-info-list-item></u-info-list-group>',
                },
                {
                    title: '详情列表项',
                    code: '<u-info-list-item><template #label><u-text text="基本信息"></u-text></template><u-text text="张三"></u-text></u-info-list-item>',
                },
            ],
        })
        slotDefault: () => Array<UInfoListGroup | UInfoListItem>;
    }

    @Component({
        title: '详情列表项',
        description: '详情列表项',
    })
    export class UInfoListItem extends ViewComponent {

        constructor(options?: Partial<UInfoListItemOptions>) { super(); }
    }

    export class UInfoListItemOptions  extends ViewComponentOptions {
        @Prop({
            title: '标签名',
        })
        private label: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '占据数',
            description: '列跨越的格数',
            docDescription: '当前列表项占的列数，为空默认取列表组的列数值，优先取列表项的值',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        span: nasl.core.Decimal;

        @Prop({
            group: '主要属性',
            title: '文本过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '开启时该项文本过长会省略显示，默认不开启为换行显示',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        ellipsis: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '列表项标题宽度',
            docDescription: '当前列表项的标签大小，优先取列表项的值',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '自适应' }, { title: '小' }, { title: '正常' }, { title: '大' }],
            },
        })
        labelSize: 'auto' | 'small' | 'normal' | 'large' = 'auto';

        @Slot({
            title: '默认',
            description: '插入文本或HTML。',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: '自定义标签内容',
            description: '用于自定义 label 内容。',
        })
        slotLabel: () => Array<ViewComponent>;
    }

    @Component({
        title: '详情列表组',
        description: '详情列表组',
    })
    export class UInfoListGroup extends ViewComponent {

        constructor(options?: Partial<UInfoListGroupOptions>) { super(); }
    }

    export class UInfoListGroupOptions  extends ViewComponentOptions {
        @Prop({
            title: '标签',
        })
        private title: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '列数',
            description: '当前组范围内的划分列数',
            docDescription: '当前组信息展示划分的列数，为空默认取详情列表的值，若和列表列数不一致，优先取列表组的值。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        repeat: nasl.core.Decimal;

        @Prop({
            group: '样式属性',
            title: '列表项标题宽度',
            description: '设置详情列表组所有列表项的标题宽度。',
            docDescription: '当前组列表项的标签大小，若和列表列数不一致，优先取列表组的值。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '自适应' }, { title: '小' }, { title: '正常' }, { title: '大' }],
            },
        })
        labelSize: 'auto' | 'small' | 'normal' | 'large' = 'auto';

        @Slot({
            title: '默认',
            description: '插入`<u-info-list-item>`子组件',
            snippets: [
                {
                    title: '详情列表项',
                    code: '<u-info-list-item><template #label><u-text text="基本信息"></u-text></template><u-text text="张三"></u-text></u-info-list-item>',
                },
            ],
        })
        slotDefault: () => Array<UInfoListItem>;

        @Slot({
            title: '自定义标题',
            description: '自定义标题。',
        })
        slotTitle: () => Array<ViewComponent>;

        @Slot({
            title: '自定义额外操作项',
            description: '自定义额外操作项。',
        })
        slotExtra: () => Array<ViewComponent>;
    }
}
