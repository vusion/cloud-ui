/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '开关',
        icon: 'switch',
        description: '开关',
    })
    export class USwitch extends VueComponent {

        constructor(options?: Partial<USwitchOptions>) { super(); }
    }

    export class USwitchOptions {
        @Prop({
            group: '数据属性',
            title: '值',
            description: '标识开关状态的值',
            syncMode: 'both',
            docDescription: '开关状态，返还true或者false。',
        })
        value: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '显示开关文字',
            description: '是否显示开关`ON`和`OFF`文字',
            docDescription: '设置开关是否显示开关`ON`和`OFF`文字。',
        })
        withText: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入。',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '切换状态前',
            description: '切换开关状态前触发',
        })
        private onBeforeToggle: (event: nasl.ui.ChangeEvent) => void;

        @Event({
            title: '输入时',
            description: '切换开关状态时触发',
        })
        onInput: (event: Boolean) => void;

        @Event({
            title: '打开时',
            description: '开关打开时触发',
        })
        onOn: (event: Boolean) => void;

        @Event({
            title: '关闭时',
            description: '开关关闭时触发',
        })
        onOff: (event: Boolean) => void;

        @Event({
            title: '切换状态后',
            description: '切换开关状态时触发',
        })
        onToggle: (event: nasl.ui.CollapseEvent) => void;

        @Event({
            title: '改变后',
            description: '开关状态改变时触发',
        })
        onChange: (event: nasl.ui.CollapseEvent) => void;
    }
}
