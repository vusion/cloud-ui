/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '胶囊',
        icon: 'capsules',
        description: '多项中选择一项',
        group: "Form"
    })
    export class UCapsules extends ViewComponent {

        constructor(options?: Partial<UCapsulesOptions>) { super(); }
    }

    export class UCapsulesOptions extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '选中值',
            description: '当前选中的值',
            sync: true,
            docDescription: '当前选择的值',
        })
        value: nasl.core.Any;

        @Prop({
            group: '主要属性',
            title: '自动选择',
            description: '是否自动选择第一个非禁用的项',
            docDescription: '是否自动选择第一个非禁用的项',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autoSelect: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可取消',
            description: '是否可以取消选择',
            docDescription: '是否可以取消选择',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        cancelable: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可多选',
            description: '是否可以多选',
            docDescription: '是否可以多选',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        multiple: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入。',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '选择前',
            description: '选择某一项前触发',
        })
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
        }) => any;

        @Event({
            title: '输入时',
            description: '选择某一项时触发，仅在单选模式中生效',
        })
        onInput: (event: nasl.core.String) => any;

        @Event({
            title: '选择后',
            description: '选择某一项时触发。单选模式中：',
        })
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
        }) => any;

        @Event({
            title: '改变后',
            description: '选择值改变时触发。单选模式中：',
        })
        onChange: (event: {
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
            values: nasl.collection.List<nasl.core.String>;
        }) => any;

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
    export class UCapsule extends ViewComponent {

        constructor(options?: Partial<UCapsuleOptions>) { super(); }
    }

    export class UCapsuleOptions extends ViewComponentOptions {
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
                concept: 'SwitchSetter',
            },
        })
        flag: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '尺寸',
            description: '胶囊大小',
            docDescription: '支持小尺寸和正常尺寸',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '小' }, { title: '正常' }],
            },
        })
        private size: 'small' | 'normal' = 'normal';

        @Event({
            title: '点击',
            description: '点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。',
        })
        onClick: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;

        @Event({
            title: '选择前',
            description: '选择此项前触发',
        })
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
        }) => any;

        @Slot({
            title: 'undefined',
            description: '插入文本或 HTML。',
        })
        slotDefault: () => Array<ViewComponent>;
    }

    @Component({
        title: '子选项组',
        description: '子选项组',
    })
    export class UCapsulesGroup extends ViewComponent {

        constructor(options?: Partial<UCapsulesGroupOptions>) { super(); }
    }

    export class UCapsulesGroupOptions  extends ViewComponentOptions {


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
