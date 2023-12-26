/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '子页面容器',
        icon: 'router-view',
        description: '用于嵌入子页面的容器。',
        group: 'Container'
    })
    export class URouterView extends ViewComponent {

        constructor(options?: Partial<URouterViewOptions>) { super(); }
    }

    export class URouterViewOptions  extends ViewComponentOptions {
        @Prop({
            title: '进入已打开页面时刷新',
            description: '重新进入已打开页面时，会刷新页面',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disableKeepAlive: nasl.core.Boolean = true;
    }
}
