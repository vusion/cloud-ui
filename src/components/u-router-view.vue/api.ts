/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '子页面容器',
        icon: 'router-view',
        description: '用于嵌入子页面的容器。',
    })
    export class URouterView extends VueComponent {

        constructor(options?: Partial<URouterViewOptions>) { super(); }
    }

    export class URouterViewOptions {

    }
}
