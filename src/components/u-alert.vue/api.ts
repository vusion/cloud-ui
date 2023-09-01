/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '公告',
        icon: 'alert',
        description: '公告。',
    })
    export class UAlert extends VueComponent {

        constructor(options?: Partial<UAlertOptions>) { super(); }
    }

    export class UAlertOptions {
        @Prop({
            title: '标题',
            description: '公告标题',
        })
        private title: nasl.core.String = '';

        @Prop({
            title: '辅助文本',
            description: '公告辅助文本',
        })
        private desc: nasl.core.String = '';

        @Prop({
            title: '对其方式',
            description: '选择对齐方式',
            setter: {
                type: 'enumSelect',
                titles: ['左对齐', '居中对齐'],
            },
        })
        private horizontal: 'left' | 'center' = 'left';

        @Prop({
            group: '主要属性',
            title: '公告类型',
            docDescription: '信息、成功、警告、错误',
            setter: {
                type: 'enumSelect',
                titles: ['信息', '成功', '警告', '错误'],
            },
        })
        type: 'info' | 'success' | 'warning' | 'error' = 'info';

        @Prop({
            group: '主要属性',
            title: '显示图标',
            docDescription: '是否展开图标',
        })
        showIcon: nasl.core.Boolean = true;

        @Prop({
            group: '交互属性',
            title: '手动关闭',
            description: '是否可手动关闭公告',
            docDescription: '是否显示关闭按钮',
        })
        closeable: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '显示边框',
            docDescription: '是否显示边框',
        })
        bordered: nasl.core.Boolean = true;

        @Event({
            title: '关闭时',
            description: '关闭时触发',
        })
        onClose: () => void;

        @Slot({
            title: 'undefined',
            description: '辅助文本',
        })
        slotDefault: () => Array<VueComponent>;

        @Slot({
            title: 'undefined',
            description: '标题',
        })
        slotTitle: () => Array<VueComponent>;
    }
}
