/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '时间线',
        icon: 'timeline',
        group: 'Display'
    })
    export class UTimeline<T> extends ViewComponent {

        constructor(options?: Partial<UTimelineOptions<T>>) { super(); }
    }

    export class UTimelineOptions<T> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '时间线的数据源。',
        })
        dataSource: nasl.collection.List<T>;

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: '时间线数据类型。该属性为展示属性，由数据源推倒得到，无需填写。',
        })
        dataSchema: T;

        @Prop({
            group: '主要属性',
            title: '排布方式',
            description: '时间线节点与内容的排布方式',
            docDescription: '默认、时间线居中',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '默认' }, { title: '时间线居中' }],
            },
        })
        mode: 'default' | 'label' = 'default';

        @Prop({
            group: '主要属性',
            title: '待定节点',
            description: '待定节点连接线为虚线展示，用于表示即将发生或者正在进行的节点',
            docDescription: '待定节点连接线为虚线展示，用于表示即将发生或者正在进行的节点',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        pending: nasl.core.Boolean = false;

        @Slot({
            title: 'undefined',
            description: '插入 `<u-timeline-item>` 子组件',
            snippets: [
                {
                    title: '时间线子选项',
                    code: '<u-timeline-item></u-timeline-item>',
                },
            ],
        })
        slotDefault: () => Array<UTimelineItem>;

        @Slot({
            title: 'undefined',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }

    @Component({
        title: '时间线项',
    })
    export class UTimelineItem extends ViewComponent {

        constructor(options?: Partial<UTimelineItemOptions>) { super(); }
    }

    export class UTimelineItemOptions  extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '标签',
            description: '指定展示在另一侧的 `label`，只在 `label` 模式下生效',
            docDescription: '指定展示在另一侧的 `label`，只在 `label` 模式下生效。',
        })
        label: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '位置',
            description: '指定交替展示时的位置，只在 `alternate` 或 `label` 模式下生效',
            docDescription: '指定交替展示时的位置，只在 `alternate` 或 `label` 模式下生效。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '左' }, { title: '右' }],
            },
        })
        position: 'left' | 'right' = 'right';

        @Prop({
            group: '样式属性',
            title: '节点颜色',
            description: '指定圆圈颜色 `primary`, `success`, `warning`, `error`，或自定义的色值',
            docDescription: '指定圆圈颜色 `primary`, `success`, `warning`, `error`，或自定义的色值。',
        })
        color: nasl.core.String = 'blue';

        @Slot({
            title: 'undefined',
            description: '插入文本或 HTML',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: 'undefined',
            description: '自定义图标',
        })
        slotDot: () => Array<ViewComponent>;

        @Slot({
            title: 'undefined',
            description: '自定义 `label` ，只在 `label` 模式下生效',
        })
        slotLabel: () => Array<ViewComponent>;
    }
}
