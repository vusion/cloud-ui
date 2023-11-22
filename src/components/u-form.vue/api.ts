/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '表单',
        icon: 'form',
        description: '具有数据收集、校验和提交功能的表单，包含输入框、选择框、复选框、单选框等元素。',
    })
    export class UForm extends VueComponent {


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
        ): void {}

        @Method({
            title: 'undefined',
            description: '验证表单中的某一项，已废弃。表单中的项是嵌套的，用 name 层级较深，而且可能有重名。',
        })
        validateItem(
            @Param({
                title: 'undefined',
                description: '表单项的 name',
            })
            name: nasl.core.String,
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
        ): void {}
        constructor(options?: Partial<UFormOptions>) { super(); }
    }

    export class UFormOptions {
        @Prop({
            title: '数据模型',
            description: '表单数据模型',
        })
        private model: object;

        @Prop({
            title: '表单尺寸',
            setter: {
                type: 'enumSelect',
                titles: ['小', '正常'],
            },
        })
        private size: 'small' | 'normal' = 'normal';

        @Prop({
            group: '主要属性',
            title: '验证规则',
            description: '验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/06.%E8%A1%A8%E5%8D%95/121.%E8%A1%A8%E5%8D%95.html',
            docDescription: '验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型，详见[验证规则](#验证规则)。',
            bindHide: true,
        })
        private rules: object;

        @Prop<UFormOptions, 'layout'>({
            group: '主要属性',
            title: '表单布局',
            docDescription: '更改表单的布局方式。行内展示，标签与表单项在一行展示。块级展示，宽度会充满父元素。栅格展示，可设置列数。',
            setter: {
                type: 'enumSelect',
                titles: ['行内展示', '块级展示，宽度会充满父元素', '栅格展示，可设置列数'],
            },
            onToggle: [
                { clear: ['repeat'] }
            ],
        })
        layout: 'inline' | 'block' | 'inline-flex' = 'block';

        @Prop<UFormOptions, 'repeat'>({
            group: '主要属性',
            title: '列数',
            description: '整个表单的划分列数',
            docDescription: '整个表单的划分列数，此项需要设置表单布局为“栅格展示”。',
            setter: {
                type: 'numberInput',
                min: 1,
            },
            if: _ => _.layout === 'inline-flex' || _.repeat !== 1,
        })
        repeat: nasl.core.Decimal = 1;

        @Prop({
            group: '主要属性',
            title: '标签布局',
            docDescription: '设置标签布局方式。行内展示；块级展示，标签与单项分行展示- ',
            setter: {
                type: 'enumSelect',
                titles: ['行内展示', '块级展示，标签与表单项分行展示'],
            },
        })
        labelLayout: 'inline' | 'block' = 'inline';

        @Prop({
            group: '主要属性',
            title: '标签过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '文字过长是否省略显示，默认文字超出时会换行。',
            setter: {
                type: 'switch',
            },
        })
        labelEllipsis: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可折叠',
            description: '设置是否可以展开/折叠',
            docDescription: '分组是否可以折叠。',
            setter: {
                type: 'switch',
            },
        })
        collapsible: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '手风琴模式',
            description: '设置是否每次只展开一个',
            docDescription: '是否每次只会展开一个分组。',
            setter: {
                type: 'switch',
            },
        })
        accordion: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '展开触发方式',
            description: '展开/折叠操作的触发方式',
            docDescription: `展开/折叠的触发方式。
- 整行点击均可触发。
- 仅点击小箭头时触发。`,
            setter: {
                type: 'enumSelect',
                titles: ['整行点击均可触发', '仅点击小箭头时触发'],
            },
        })
        expandTrigger: 'click' | 'click-expander' = 'click';

        @Prop<UFormOptions, 'gapWidth'>({
            group: '样式属性',
            title: '列间隔',
            description: '设置表单列间隔大小',
            docDescription: '设置表单项间隔大小。支持无、小、正常、大四个级别，此项需要设置表单布局为“行内展示”。',
            setter: {
                type: 'enumSelect',
                titles: ['无', '小', '正常', '大'],
            },
            if: _ => _.layout === 'inline',
        })
        gapWidth: 'none' | 'small' | 'normal' | 'large' = 'normal';

        @Prop({
            group: '样式属性',
            title: '行间隔',
            description: '设置表单行间隔大小',
            docDescription: '设置表单行间隔大小。支持无、小、正常、大四个级别。',
            setter: {
                type: 'enumSelect',
                titles: ['无', '小', '正常', '大'],
            },
        })
        gapHeight: 'none' | 'small' | 'normal' | 'large' = 'normal';

        @Prop<UFormOptions, 'labelSize'>({
            group: '样式属性',
            title: '标签宽度',
            docDescription: '设置标签宽度。支持迷你、小、正常、大四个级别。',
            setter: {
                type: 'enumSelect',
                titles: ['迷你', '小', '正常', '大'],
            },
            if: _ => _.labelLayout === 'inline',
        })
        labelSize: 'mini' | 'small' | 'normal' | 'large' = 'normal';

        @Event({
            title: '验证后',
            description: '验证时触发',
        })
        onValidate: (event: nasl.ui.ValidateEvent) => void;

        @Slot({
            title: 'undefined',
            description: '插入`<u-form-item>`子组件。',
            emptyBackground: 'add-sub-large',
            snippets: [
                {
                    title: '表单分组',
                    code: '<u-form-group><template #title><u-text text="分组"></u-text></template><u-form-item><template #label><u-text text="表单项"></u-text></template></u-form-item></u-form-group>',
                },
                {
                    title: '表单项',
                    code: '<u-form-item><template #label><u-text text="表单项"></u-text></template></u-form-item>',
                },
            ],
        })
        slotDefault: () => Array<UFormGroup | UFormItem>;
    }

    @Component({
        title: '表单项',
        description: '表单项',
    })
    export class UFormItem extends VueComponent {


        @Method({
            title: 'undefined',
            description: '验证此表单项。',
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
        ): void {}
        constructor(options?: Partial<UFormItemOptions>) { super(); }
    }

    export class UFormItemOptions {
        @Prop({
            title: '字段名称',
            description: '表单项名称。已废弃',
        })
        private name: nasl.core.String;

        @Prop({
            title: '标签名',
            description: '用于左侧显示，同时用于提示消息的合成',
        })
        private label: nasl.core.String;

        @Prop({
            title: '验证是否静默',
            description: '验证是否静默',
            setter: {
                type: 'enumSelect',
                titles: ['只静默消息提示', '同时静默消息提示和红框提示', '不作处理'],
            },
        })
        private muted: 'message' | 'all' | 'none' = 'none';

        @Prop({
            title: '提示信息位置',
            description: '改变提示信息显示位置',
            setter: {
                type: 'enumSelect',
                titles: ['提示信息在右侧显示', '提示信息在底部显示'],
            },
        })
        private placement: 'right' | 'bottom' = 'right';

        @Prop({
            title: '忽略验证规则',
            description: '忽略验证规则。已废弃，同`ignore-validation`',
            setter: {
                type: 'switch',
            },
        })
        private ignoreRules: nasl.core.Boolean = false;

        @Prop({
            title: '验证辅助对象',
            description: '验证辅助对象。在 Rule 的 `validate` 方法中使用',
        })
        private validatingOptions: object;

        @Prop({
            title: '修改验证值',
            description: '临时修改验证值',
        })
        private validatingValue: nasl.core.Any;

        @Prop({
            title: '验证前预处理',
            description: '验证前对值进行预处理',
        })
        private validatingProcess: Function;

        @Prop({
            group: '主要属性',
            title: '占据数',
            description: '列跨越的格数',
            docDescription: '列跨越的格数。',
            setter: {
                type: 'numberInput',
            },
        })
        span: nasl.core.Decimal = 1;

        @Prop({
            group: '主要属性',
            title: '标签布局',
            docDescription: '设置标签布局方式，行内展示、块级展示，标签与表单项分行展示',
            setter: {
                type: 'enumSelect',
                titles: ['行内展示', '块级展示，标签与表单项分行展示'],
            },
        })
        labelLayout: 'inline' | 'block' = 'inline';

        @Prop({
            group: '主要属性',
            title: '标签过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '文字过长是否省略显示，默认文字超出时会换行。',
            setter: {
                type: 'switch',
            },
        })
        labelEllipsis: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '必填标记',
            description: '是否必填。仅显示样式，如果要验证必填项，需要在`rules`中添加必填规则。',
            docDescription: '是否必填。仅显示样式，如果要验证必填项，需要在rules中添加必填规则。',
            setter: {
                type: 'switch',
            },
        })
        required: nasl.core.Boolean = false;

        @Prop<UFormItemOptions, 'requiredPosition'>({
            group: '主要属性',
            title: '必填标记位置',
            setter: {
                type: 'enumSelect',
                titles: ['文本左侧', '文本右侧'],
            },
            if: _ => _.required === true,
        })
        requiredPosition: 'left' | 'right' = 'right';

        @Prop({
            group: '主要属性',
            title: '释义提示',
            description: '鼠标悬浮标签后的图标显示释义提示信息',
            docDescription: '默认提示消息。',
        })
        message: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '辅助文本',
            description: '辅助说明的文本信息',
            docDescription: '添加描述内容。',
        })
        description: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '标签纵轴对齐',
            description: '标签与表单元素的纵轴对齐方式，默认为顶对齐',
            docDescription: '标签与表单元素的纵轴对齐方式，默认为顶对齐。',
            setter: {
                type: 'enumSelect',
                titles: ['顶对齐', '居中对齐', '尾对齐'],
            },
        })
        layout: 'block' | 'center' | 'end' = 'center';

        @Prop({
            group: '主要属性',
            title: '验证规则',
            description: '验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型',
            docDescription: '验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型，详见[验证规则](#验证规则)。',
            bindHide: true,
        })
        rules: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '忽略验证',
            docDescription: '设置是否忽略验证。',
            setter: {
                type: 'switch',
            },
        })
        ignoreValidation: nasl.core.Boolean = false;

        @Prop({
            group: '样式属性',
            title: '字段大小',
            description: '单独设置表单项的内容大小',
            docDescription: '单独设置表单项的内容大小。',
            setter: {
                type: 'enumSelect',
                titles: ['迷你', '小', '正常', '大'],
            },
        })
        fieldSize: 'mini' | 'small' | 'normal' | 'large' = 'normal';

        @Prop({
            group: '样式属性',
            title: '表单项标题宽度',
            docDescription: '单独设置表单项的标签宽度大小。支持迷你、小、正常、大四个级别。',
            setter: {
                type: 'enumSelect',
                titles: ['迷你', '小', '正常', '大'],
            },
        })
        labelSize: 'mini' | 'small' | 'normal' | 'large' = 'normal';

        @Event({
            title: '验证后',
            description: '对于第一个 Field 或者所有子 UValidator：',
        })
        onValidate: () => void;

        @Slot({
            title: '默认',
            description: '插入文本或 HTML。',
        })
        slotDefault: () => Array<VueComponent>;

        @Slot({
            title: '标签自定义',
            description: '插入自定义标签，代替`label`属性。',
        })
        private slotLabel: () => Array<VueComponent>;

        @Slot({
            title: '描述自定义',
            description: '插入自定义描述内容，代替`description`属性。',
        })
        private slotDescription: () => Array<VueComponent>;

        @Slot({
            title: '附加内容',
            description: '自定义标签右侧额外内容。',
        })
        private slotExtra: () => Array<VueComponent>;
    }

    @Component({
        title: '表单分组',
        description: '展开折叠前',
    })
    export class UFormGroup extends VueComponent {

        constructor(options?: Partial<UFormGroupOptions>) { super(); }
    }

    export class UFormGroupOptions {
        @Prop({
            group: '主要属性',
            title: '标题',
            docDescription: '显示的标题。',
        })
        title: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '列数',
            description: '整个表单的划分列数',
            docDescription: '整个表单的划分列数。',
            setter: {
                type: 'numberInput',
            },
        })
        repeat: nasl.core.Decimal = 1;

        @Prop({
            group: '主要属性',
            title: '标签布局',
            docDescription: '设置标签布局方式。行内展示、块级展示，标签与表单项分行展示。',
            setter: {
                type: 'enumSelect',
                titles: ['行内展示', '块级展示，标签与表单项分行展示'],
            },
        })
        labelLayout: 'inline' | 'block' = 'inline';

        @Prop({
            group: '主要属性',
            title: '标签过长省略',
            description: '文字过长是否省略显示。默认文字超出时会换行。',
            docDescription: '文字过长是否省略显示。默认文字超出时会换行。',
            setter: {
                type: 'switch',
            },
        })
        labelEllipsis: nasl.core.Boolean = false;

        @Prop({
            group: '交互属性',
            title: '可折叠',
            description: '设置是否可以展开/折叠',
            docDescription: '分组是否可以折叠。',
            setter: {
                type: 'switch',
            },
        })
        collapsible: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '展开状态',
            description: '展开状态分为“True(展开)/False(折叠)”，默认为“展开”',
            syncMode: 'onlySync',
            docDescription: '绑定展开/折叠状态的值',
            setter: {
                type: 'switch',
            },
        })
        expanded: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止展开/折叠操作',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            setter: {
                type: 'switch',
            },
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '展开折叠前',
            description: '展开/折叠此分组前触发',
        })
        private onBeforeToggle: (event: nasl.ui.CollapseEvent) => void;

        @Event({
            title: '展开折叠后',
            description: '展开/折叠某分组时触发',
        })
        onToggle: (event: nasl.ui.CollapseEvent) => void;

        @Slot({
            title: 'undefined',
            description: '插入`<u-form-item>`或`<u-form-divider>`子组件。',
            snippets: [
                {
                    title: '表单项',
                    code: '<u-form-item><template #label><u-text text="表单项"></u-text></template></u-form-item>',
                },
            ],
        })
        slotDefault: () => Array<UFormItem>;

        @Slot({
            title: 'undefined',
            description: '自定义标题文本。',
        })
        slotTitle: () => Array<VueComponent>;

        @Slot({
            title: 'undefined',
            description: '在右侧可以附加内容。',
        })
        slotExtra: () => Array<VueComponent>;
    }
}
