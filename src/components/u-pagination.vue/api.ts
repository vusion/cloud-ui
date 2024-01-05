/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '翻页器',
        icon: 'pagination',
        description: '展示多页列表时使用',
        group: 'Selector'
    })
    export class UPagination extends ViewComponent {

        constructor(options?: Partial<UPaginationOptions>) { super(); }
    }

    export class UPaginationOptions  extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '当前页数',
            description: '当前默认展示在第几页',
            sync: true,
            docDescription: '翻页器的当前页',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        page: nasl.core.Integer = 1;

        @Prop({
            group: '主要属性',
            title: '总页数',
            docDescription: '翻页器的总页数',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        total: nasl.core.Integer = 11;

        @Prop({
            group: '主要属性',
            title: '两端页码数量',
            description: '当页数多时，两端恒定显示的页码数量',
            docDescription: '当页数多时，两边恒定显示的数量',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        side: nasl.core.Integer = 2;

        @Prop({
            group: '主要属性',
            title: '中间页码数量',
            description: '当页数多时，中间恒定显示的页码数量',
            docDescription: '当页数多时，左侧恒定显示的数量，若和两边的显示数量不一致，则取两者之间的最大值',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        around: nasl.core.Integer = 5;

        @Prop({
            group: '主要属性',
            title: '总条数',
            docDescription: '数据的总条数目',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        totalItems: nasl.core.Integer;

        @Prop({
            group: '主要属性',
            title: '默认每页条数',
            sync: true,
            docDescription: '每页展示数据的条目数，默认为[10,20,50]',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        pageSize: nasl.core.Integer = 20;

        @Prop({
            group: '主要属性',
            title: '每页条数选项',
            description: '每页条数切换器的选项',
            docDescription: '每页条数选项列表',
        })
        pageSizeOptions: Array<nasl.core.Integer> = [10,20,50];

        @Prop({
            group: '主要属性',
            title: '显示总条数',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showTotal: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '显示每页条数',
            description: '显示每页条数切换器',
            docDescription: '是否显示切换每页条数选项',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showSizer: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '显示跳转输入',
            description: '显示页面跳转输入框',
            docDescription: '是否显示页面跳转输入框',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showJumper: nasl.core.Boolean = false;

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

        @Event({
            title: '选择前',
            description: '选择分页前触发',
        })
        onBeforeSelect: (event: {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
        }) => any;

        @Event({
            title: '选择后',
            description: '选择分页时触发',
        })
        onSelect: (event:  {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
        }) => any;

        @Event({
            title: '改变后',
            description: '页码改变时触发',
        })
        onChange: (event:  {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
        }) => any;

        @Event({
            title: '条数改变后',
            description: '每页条数改变时触发',
        })
        onChangePageSize: (event:  {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
            pageSizeOptions: Array<nasl.core.Integer>;
        }) => any;

        @Slot({
            title: '总数',
            description: '总数自定义',
        })
        slotTotal: () => Array<ViewComponent>;

        @Slot({
            title: '上一页',
            description: '上一页自定义',
        })
        slotPrev: () => Array<ViewComponent>;

        @Slot({
            title: '下一页',
            description: '下一页自定义',
        })
        slotNext: () => Array<ViewComponent>;
    }
}
