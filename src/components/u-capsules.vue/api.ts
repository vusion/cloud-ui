/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '胶囊',
        icon: 'capsules',
        description: '多项中选择一项',
    })
    export class UCapsules extends VueComponent {

        constructor(options?: Partial<UCapsulesOptions>) { super(); }
    }

    export class UCapsulesOptions {
        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            syncMode: 'both',
            docDescription: '当前选择的值',
        })
        value: nasl.core.Any;

        @Prop({
            group: '主要属性',
            title: '自动选择',
            description: '是否自动选择第一个非禁用的项',
            docDescription: '是否自动选择第一个非禁用的项',
            setter: {
                type: 'switch',
            },
        })
        autoSelect: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可取消',
            description: '是否可以取消选择',
            docDescription: '是否可以取消选择',
            setter: {
                type: 'switch',
            },
        })
        cancelable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可多选',
            description: '是否可以多选',
            docDescription: '是否可以多选',
            setter: {
                type: 'switch',
            },
        })
        multiple: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入。',
            setter: {
                type: 'switch',
            },
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                type: 'switch',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '选择前',
            description: '选择某一项前触发',
        })
        private onBeforeSelect: (event: nasl.ui.ChangeItemEvent) => void;

        @Event({
            title: '输入时',
            description: '选择某一项时触发，仅在单选模式中生效',
        })
        onInput: (event: String) => void;

        @Event({
            title: '选择后',
            description: '选择某一项时触发。单选模式中：',
        })
        onSelect: (event: nasl.ui.ChangeItemEvent) => void;

        @Event({
            title: '改变后',
            description: '选择值改变时触发。单选模式中：',
        })
        onChange: (event: nasl.ui.ChangeItemEvent) => void;

        @Slot({
            title: 'undefined',
            description: '插入`<u-capsule>`或`<u-capsules-group>`子组件。',
            snippets: [
                {
                    title: '胶囊选项',
                    code: '<u-capsule>选项</u-capsule>',
                },
            ],
        })
        slotDefault: () => Array<UCapsule>;
    }

    @Component({
        title: '子选项',
        description: '子选项',
    })
    export class UCapsule extends VueComponent {

        constructor(options?: Partial<UCapsuleOptions>) { super(); }
    }

    export class UCapsuleOptions {
        @Prop({
            title: '相关对象',
            description: '相关对象。当选择此项时，抛出的事件会传递该对象，便于开发',
        })
        private item: object;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '此项的值',
            docDescription: '此项的值',
        })
        value: nasl.core.Any;

        @Prop({
            group: '主要属性',
            title: '标签',
            description: '顶部自定义提示文本',
            docDescription: '顶部自定义提示文本',
        })
        label: nasl.core.String = '';

        @Prop({
            group: '主要属性',
            title: 'flag标志',
            description: '是否右上角有flag标志',
            docDescription: '是否右上角有flag标志',
            setter: {
                type: 'switch',
            },
        })
        flag: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                type: 'switch',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '尺寸',
            description: '胶囊大小',
            docDescription: '支持小尺寸和正常尺寸',
            setter: {
                type: 'enumSelect',
                titles: ['小', '正常'],
            },
        })
        size: 'small' | 'normal' = 'normal';

        @Event({
            title: '点击',
            description: '点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。',
        })
        onClick: (event: nasl.ui.MouseEvent) => void;

        @Event({
            title: '选择前',
            description: '选择此项前触发',
        })
        private onBeforeSelect: (event: nasl.ui.ChangeItemEvent) => void;

        @Slot({
            title: 'undefined',
            description: '插入文本或 HTML。',
        })
        slotDefault: () => Array<VueComponent>;
    }

    @Component({
        title: '子选项组',
        description: '子选项组',
    })
    export class UCapsulesGroup extends VueComponent {

        constructor(options?: Partial<UCapsulesGroupOptions>) { super(); }
    }

    export class UCapsulesGroupOptions {


        @Slot({
            title: 'undefined',
            description: '插入`<u-capsule>`或`<u-capsules-group>`子组件。',
            snippets: [
                {
                    title: '子选项',
                    code: '<u-capsule>选项</u-capsule>',
                },
            ],
        })
        slotDefault: () => Array<UCapsule>;
    }
}
