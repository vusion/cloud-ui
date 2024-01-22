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
            group: '交互属性',
            title: '操作成功响应方式',
            docDescription: '支持页面跳转、刷新当前页',
            bindHide: true,
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '页面跳转' }],
            },
        })
        linkType: 'destination' = 'destination';

        @Prop({
            group: '交互属性',
            title: '链接地址',
            docDescription: '链接的详细地址',
        })
        hrefAndTo: nasl.core.String;

        @Prop({
            group: '交互属性',
            title: '链接打开方式',
            description: '链接跳转的打开方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。',
            docDescription: '可选新窗口、父级窗口、当前窗口和顶级窗口，其中父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '新窗口' }, { title: '当前窗口' }, { title: '父级窗口' }, { title: '顶级窗口' }],
            },
        })
        target: '_blank' | '_self' | '_parent' | '_top' = '_self';
    }
}

