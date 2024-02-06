/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '日历',
        icon: 'calendar',
        description: '用于展示大量结构化数据。支持日历结构展示。',
        group: "Table"
    })
    export class UCalendarView<T> extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '重新加载',
        })
        reload(): void {}
        constructor(options?: Partial<UCalendarViewOptions<T>>) { super(); }
    }

    export class UCalendarViewOptions<T> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '组件的数据源，配置内容为数据集对象或者返回数据集的逻辑。',
            designerValue: [{}],
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: 'IDE 根据配置的数据源动态计算返回内容的数据结构，用于动态配置项 current.item 的类型说明。',
        })
        dataSchema: T;

        @Prop<UCalendarViewOptions<T>, 'startKey'>({
            group: '数据属性',
            title: '开始时间字段',
            description: '数据内表示开始时间的字段',
            docDescription: '数据内表示开始时间的字段，要求对应数据必须包含日期（日期/日期时间格式），**单独使用表示当天**；跟结束时间字段配合使用表示日期区间，组件根据日期区间判断展示在哪些日期内。',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        startKey: (item: T) => any = ((item: any)  => item.startTime) as any;

        @Prop<UCalendarViewOptions<T>, 'endKey'>({
            group: '数据属性',
            title: '结束时间字段',
            description: '数据内表示结束时间的字段',
            docDescription: '数据内表示结束时间的字段，要求对应数据必须包含日期（日期/日期时间格式），跟开始时间字段配合使用表示日期区间，组件根据时间区间判断展示在哪些日期内。',
            setter: {
                concept: 'PropertySelectSetter',
            },
        })
        endKey: (item: T) => any = ((item: any)  => item.endTime) as any;

        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的日期',
            sync: true,
            docDescription: '当前选择的日期。',
        })
        value: nasl.core.Date = 'TODAY' as any;

        @Prop({
            group: '数据属性',
            title: '最小日期值',
            description: '最小可选的日期值，默认为10年前，日期填写格式为“yyyy-mm-dd”',
            docDescription: '控制日历展示的日期范围，默认 10 年前。',
        })
        minDate: nasl.core.Date;

        @Prop({
            group: '数据属性',
            title: '最大日期值',
            description: '最大可选的日期值，默认为9年后，日期填写格式为“yyyy-mm-dd”',
            docDescription: '控制日历展示的日期范围，默认 9 年后。',
        })
        maxDate: nasl.core.Date;

        @Prop({
            group: '主要属性',
            title: '展示周天',
            docDescription: '控制头部示例星期几信息展示，默认开启',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showWeekDays: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '展示周数',
            docDescription: '控制当前周为第几周信息展示，默认关闭。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showWeeks: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '展示基础配置',
            description: '是否展示顶部左侧的 "<" "今天" ">" 等基础配置功能',
            docDescription: '控制顶部左侧 上个月、当天、下个月 的快捷操作入口展示，默认开启。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showBasic: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '展示高级配置',
            description: '是否展示顶部右侧的年份、月份选项高级配置',
            docDescription: '控制顶部右侧 年份、月份 快捷切换操作入口展示，默认开启。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        showAdvance: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '首列星期',
            description: '填写数字1~7，分别表示周一~周日',
            docDescription: '0～7 (周一～周日) 数字配置，自定义每行从周几开始展示，默认 1，**当开启展示周数时固定周一开始**。',
            setter: {
                concept: 'NumberInputSetter',
                precision: 0,
            },
        })
        firstDayOfWeek: nasl.core.Integer = 1;

        @Prop({
            group: '交互属性',
            title: '可多选',
            description: '开启可多选后，可通过ctrl/command+鼠标多选',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        multiple: nasl.core.Boolean = false;

        @Event({
            title: '选择后',
            description: '选择某一个日期时触发',
        })
        onSelect: (event: {
            date: nasl.core.Integer;
            timestamp: nasl.core.Integer;
            value: nasl.core.String | nasl.core.Date;
            oldValue: nasl.core.String | nasl.core.Date;
            week: nasl.core.Integer;
        }) => any;

        @Event({
            title: '改变后',
            description: '日期改变时触发',
        })
        onChange: (event: {
            date: nasl.core.Integer;
            timestamp: nasl.core.Integer;
            week: nasl.core.Integer;
        }) => any;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        onBeforeLoad: (event: any) => any;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: (event: any) => any;

        @Event({
            title: '年改变后',
            description: '年份改变后触发',
        })
        onChangeYear: (event: nasl.core.String) => any;

        @Event({
            title: '月改变后',
            description: '月份改变后触发',
        })
        onChangeMonth: (event: nasl.core.String) => any;

        @Slot({
            title: 'undefined',
            description: '插入文本或 HTML 至日期组件底部',
        })
        slotDefault: (current: Current<T>) => Array<ViewComponent>;
    }
}
