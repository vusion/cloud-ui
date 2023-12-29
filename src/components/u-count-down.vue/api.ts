/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '计时器',
        icon: 'countdown',
        description: '用于计时',
        group: "Display"
    })
    export class UCountDown extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '开始计时器',
        })
        start(): void {}

        @Method({
            title: 'undefined',
            description: '暂停计时器',
        })
        pause(): void {}

        @Method({
            title: 'undefined',
            description: '继续计时器',
        })
        continue(): void {}

        @Method({
            title: 'undefined',
            description: '停止计时器',
        })
        stop(): void {}
        constructor(options?: Partial<UCountDownOptions>) { super(); }
    }

    export class UCountDownOptions extends ViewComponentOptions {
        @Prop({
            group: '主要属性',
            title: '定时时长（秒）',
            description: '设置定时时间',
            docDescription: '计时器的总时长，单位为秒。支持手动输入或是动态绑定。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        timer: nasl.core.Decimal = 60;

        @Prop({
            group: '主要属性',
            title: '计时方式',
            description: '设置计时器计时方式',
            docDescription: '可选择正计时和倒计时',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '正计时' }, { title: '倒计时' }],
            },
        })
        reverse: 'positive' | 'negative' = 'positive';

        @Prop({
            group: '主要属性',
            title: '自动计时',
            description: '设置是否自动开始计时',
            docDescription: '默认自动开始计时，支持动态绑定布尔类型（Boolean）的变量',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autostart: nasl.core.Boolean = true;

        @Event({
            title: '计时器开始',
            description: '计时器开始时触发',
        })
        onStart: (event: any) => any;

        @Event({
            title: '计时器暂停',
            description: '计时器暂停时触发',
        })
        onPause: (event: any) => any;

        @Event({
            title: '计时器继续',
            description: '计时器继续时触发',
        })
        onContinue: (event: any) => any;

        @Event({
            title: '计时器结束',
            description: '计时器结束时触发',
        })
        onStop: (event: any) => any;
    }
}
