/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '徽章',
        icon: 'badge',
        description: '用于显示消息条数和提醒用户处理的角标。',
        group: "Display"
    })
    export class UBadge extends ViewComponent {

        constructor(options?: Partial<UBadgeOptions>) { super(); }
    }

    export class UBadgeOptions extends ViewComponentOptions {
        @Prop({
            title: '显示小圆点',
            description: '是否显示为小圆点',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private dot: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '用于标识的值',
            docDescription: '当前提醒消息的条数。',
        })
        value: nasl.core.Integer;

        @Prop({
            group: '数据属性',
            title: '最大值',
            description: '最大值，超过最大值会显示为“最大值+”的形式，当最大值是数字类型时生效',
            docDescription: '提醒消息的最大值，超过最大值将不再显示准确的数字，用最大值+代替，如99+。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        max: nasl.core.Decimal = 99;

        @Prop({
            group: '主要属性',
            title: '角标在右上角',
            description: '开启时提醒角标位置显示在右上角，关闭时提醒角标显示在组件右侧。',
            docDescription: '开启时提醒角标位置显示在右上角，关闭时提醒角标显示在组件右侧。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        corner: nasl.core.Boolean = false;

        @Slot({
            title: 'undefined',
            description: '插入需要附加徽章的元素。',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
