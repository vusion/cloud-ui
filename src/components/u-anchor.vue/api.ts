/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '锚点',
        icon: 'anchor',
        description: '锚点',
        group: "Navigation"
    })
    export class UAnchor extends ViewComponent {

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

        @Slot({
            title: '默认',
            description: '插入文本或 HTML。',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
