/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '流程信息',
        icon: 'processinfo',
        description: '',
        group: 'Process'
    })
    export class UProcessInfo extends ViewComponent {

        constructor(options?: Partial<UProcessInfoOptions>) { super(); }
    }

    export class UProcessInfoOptions  extends ViewComponentOptions {
       
    }
}

