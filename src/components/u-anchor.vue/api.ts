/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '锚点',
        icon: 'anchor',
        description: '锚点',
    })
    export class UAnchor extends VueComponent {

        constructor(options?: Partial<UAnchorOptions>) { super(); }
    }

    export class UAnchorOptions {
        @Prop({
            group: '数据属性',
            title: '标识',
            description: '锚点的唯一标识，用于跳转链接，如“/page#linkname”',
            docDescription: '锚点的唯一标识，用于跳转链接，标识为空时，默认将组件名作为标识',
        })
        label: nasl.core.String;
    }
}
