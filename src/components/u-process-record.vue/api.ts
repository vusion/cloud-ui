/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '流程记录',
        icon: 'table-view',
        description: '',
        group: 'Process'
    })
    export class UProcessRecord extends ViewComponent {

        constructor(options?: Partial<UProcessRecordOptions>) { super(); }
    }

    export class UProcessRecordOptions  extends ViewComponentOptions {
       
    }
}

