/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '我的流程',
        icon: 'processmyprocess',
        description: '',
        group: 'Process'
    })
    export class UProcessMyprocess extends ViewComponent {

        constructor(options?: Partial<UProcessMyprocessOptions>) { super(); }
    }

    export class UProcessMyprocessOptions  extends ViewComponentOptions {
    }
}

