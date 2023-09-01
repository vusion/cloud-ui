/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '翻页器',
        icon: 'pagination',
        description: '展示多页列表时使用',
    })
    export class UPagination extends VueComponent {

        constructor(options?: Partial<UPaginationOptions>) { super(); }
    }

    export class UPaginationOptions {
        @Prop({
            group: '主要属性',
            title: '当前页数',
            description: '当前默认展示在第几页',
            syncMode: 'onlySync',
            docDescription: '翻页器的当前页',
        })
        page: nasl.core.Decimal = 1;

        @Prop({
            group: '主要属性',
            title: '总页数',
            docDescription: '翻页器的总页数',
        })
        total: nasl.core.Decimal = 11;

        @Prop({
            group: '主要属性',
            title: '两端页码数量',
            description: '当页数多时，两端恒定显示的页码数量',
            docDescription: '当页数多时，两边恒定显示的数量',
        })
        side: nasl.core.Decimal = 2;

        @Prop({
            group: '主要属性',
            title: '中间页码数量',
            description: '当页数多时，中间恒定显示的页码数量',
            docDescription: '当页数多时，左侧恒定显示的数量，若和两边的显示数量不一致，则取两者之间的最大值',
        })
        around: nasl.core.Decimal = 5;

        @Prop({
            group: '主要属性',
            title: '总条数',
            docDescription: '数据的总条数目',
        })
        totalItems: nasl.core.Decimal;

        @Prop({
            group: '主要属性',
            title: '默认每页条数',
            syncMode: 'onlySync',
            docDescription: '每页展示数据的条目数，默认为[10,20,50]',
        })
        pageSize: nasl.core.Decimal = 20;

        @Prop({
            group: '主要属性',
            title: '每页条数选项',
            description: '每页条数切换器的选项',
            docDescription: '每页条数选项列表',
        })
        pageSizeOptions: Array<nasl.core.Decimal> = [10,20,50];

        @Prop({
            group: '主要属性',
            title: '显示总条数',
        })
        showTotal: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '显示每页条数',
            description: '显示每页条数切换器',
            docDescription: '是否显示切换每页条数选项',
        })
        showSizer: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '显示跳转输入',
            description: '显示页面跳转输入框',
            docDescription: '是否显示页面跳转输入框',
        })
        showJumper: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '选择前',
            description: '选择分页前触发',
        })
        private onBeforeSelect: (event: nasl.ui.PaginationEvent) => void;

        @Event({
            title: '选择后',
            description: '选择分页时触发',
        })
        onSelect: (event: nasl.ui.PaginationEvent) => void;

        @Event({
            title: '改变后',
            description: '页码改变时触发',
        })
        onChange: (event: nasl.ui.PaginationEvent) => void;

        @Event({
            title: '条数改变后',
            description: '每页条数改变时触发',
        })
        onChangePageSize: (event: nasl.ui.PaginationEvent) => void;
    }
}
