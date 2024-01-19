/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '验证器',
        icon: 'validator',
        description: '实现了基础的嵌套验证功能和原子化验证功能，包含提示样式。常用于嵌套验证时使用，或用于派生一些较复杂的组件。',
        group: 'Form'
    })
    export class UValidator extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '手动验证。',
        })
        validate(
            @Param({
                title: 'undefined',
                description: '触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。',
            })
            trigger: nasl.core.String = 'submit',
            @Param({
                title: 'undefined',
                description: '是否验证后无提示',
            })
            muted: nasl.core.Boolean = false,
        ): any {}
        constructor(options?: Partial<UValidatorOptions>) { super(); }
    }

    export class UValidatorOptions  extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '验证值',
            description: '临时修改验证值',
            docDescription: '临时修改验证值',
        })
        validatingValue: nasl.core.Any;

        @Prop({
            group: '数据属性',
            title: '值预处理',
            description: '验证前对值进行预处理',
            docDescription: '验证前对值进行预处理',
        })
        validatingProcess: Function;

        // 产品要求去掉
        @Prop({
            group: '主要属性',
            title: '表单项名称。已废弃',
        })
        private name: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '标签',
            description: '在 UValidator 用于提示消息的合成，在 UFormItem 等其他组件用于显示标签',
            docDescription: '用于提示消息的合成',
        })
        label: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '规则',
            description: '简写格式为字符串类型，完整格式或混合格式为数组类型',
            docDescription: '验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型，详见[验证规则](#验证规则)',
            bindHide: true,
        })
        rules: nasl.core.String | Array<nasl.core.Any>;

        @Prop({
            group: '主要属性',
            title: '提示信息',
            description: '鼠标悬浮时显示的提示信息',
            docDescription: '默认提示消息',
        })
        message: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '静默',
            description: `验证时是否静默。可选值：'message'表示只静默消息提示，'all'同时静默消息提示和红框提示`,
            docDescription: `验证时是否静默。可选值：'message'表示只静默消息提示，'all'同时静默消息提示和红框提示`,
        })
        muted: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '忽略验证',
            docDescription: '忽略验证',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        ignoreValidation: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '忽略验证规则',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        ignoreRules: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '验证辅助对象',
            description: '在 Rule 的 `validate` 方法中使用',
            docDescription: '验证辅助对象',
        })
        validatingOptions: object;

        @Prop({
            group: '主要属性',
            title: '手动验证',
            description: `是否采取手动验证。如果为'true'，则 UValidator 将不会在监听到子组件的'input'、'change'和'blur'事件后进行相应的验证。`,
            docDescription: `是否采取手动验证。如果为'true'，则验证器。
    将不会在监听到子组件的'input'、'change'和'blur'事件后进行相应的验证`,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        manual: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '报错位置依据',
            description: `设置报错信息依据哪个元素定位位置。可选值：'body'表示添加到 document.body，'reference'表示添加到参考元素中。当父级有overflow:hidden而又想展示出错信息，可以设置为body`,
            docDescription: `设置添加到哪个元素。可选值：'body'表示添加到 document.body，'reference'表示添加到参考元素中。当父级有overflow:hidden而又想展示出错信息，可以设置为body`,
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '引用元素下' }, { title: '全局body' }],
            },
        })
        appendTo: 'reference' | 'body' = 'reference';

        @Prop<UValidatorOptions, 'placement'>({
            group: '主要属性',
            title: '报错位置方向',
            description: '设置报错信息展示的位置方向',
            docDescription: '提示信息显示位置',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '提示信息在右侧显示' }, { title: '提示信息在底部显示' }],
            },
            if: _ => _.appendTo !== 'body',
        })
        placement: 'right' | 'bottom' = 'right';

        @Event({
            title: '验证后',
            description: '对于第一个 Field 或者所有子 UValidator：',
        })
        onValidate: (event: { 
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '失焦验证通过后',
            description: '对于第一个 Field 或者所有子 UValidator：',
        })
        onBlurValid: (event: { 
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '失焦验证不通过后',
            description: '对于第一个 Field 或者所有子 UValidator：',
        })
        onBlurInvalid: (event: { 
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Slot({
            title: '默认',
            description: '插入继承了 MField 的组件，或子 UValidator，或其他 HTML 和文本。',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
