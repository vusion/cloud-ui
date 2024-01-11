/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '流程按钮',
        icon: 'processbutton',
        description: '',
        group: 'Process'
    })
    export class UProcessButton extends ViewComponent {

        constructor(options?: Partial<UProcessButtonOptions>) { super(); }
    }

    export class UProcessButtonOptions  extends ViewComponentOptions {
        @Prop({
            title: '流程Id',
            description: '流程Id',
        })
        taskId: nasl.core.String;
    }
}

