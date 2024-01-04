/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '分栏布局',
        icon: 'multi-layout',
        description: '一定的规则布局',
        group: 'Layout'
    })
    export class UMultiLayout extends ViewComponent {

        constructor(options?: Partial<UMultiLayoutOptions>) { super(); }
    }

    export class UMultiLayoutOptions  extends ViewComponentOptions {
        @Prop<UMultiLayoutOptions, 'direction'>({
            group: '主要属性',
            title: '主轴方向',
            docDescription: '横向：内部子元素进行横向排布。纵向：内部子元素进行纵向排布。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '横向排列', icon: 'flex-horizontal', tooltip: '横向' }, { title: '纵向排列', icon: 'flex-vertical', tooltip: '纵向' }],
            },
        })
        direction: 'horizontal' | 'vertical' = 'horizontal';

        @Prop<UMultiLayoutOptions, 'justify'>({
            group: '主要属性',
            title: '横轴对齐',
            docDescription: '支持左对齐、居中对齐、右对齐、占满容器宽度。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '左对齐', icon: 'horizontal-justify-start', tooltip: '左对齐' }, { title: '居中对齐', icon: 'horizontal-justify-center', tooltip: '居中对齐' }, { title: '右对齐', icon: 'horizontal-justify-end', tooltip: '右对齐' }, { title: '平均分布(两端不留空)', icon: 'horizontal-justify-space-between', tooltip: '平均分布(两端不留空)' }, { title: '平均分布', icon: 'horizontal-justify-space-around', tooltip: '平均分布' }],
            },
            if: _ => _.direction === 'horizontal',
        })
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop<UMultiLayoutOptions, 'alignment'>({
            group: '主要属性',
            title: '纵轴对齐',
            docDescription: '支持顶对齐、垂直居中、底对齐、平均分布（两端不留空）、平均分布。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '顶对齐', icon: 'horizontal-alignment-start', tooltip: '顶对齐' }, { title: '垂直居中', icon: 'horizontal-alignment-center', tooltip: '垂直居中' }, { title: '底对齐', icon: 'horizontal-alignment-end', tooltip: '底对齐' }, { title: '行内文字基线对齐', icon: 'horizontal-alignment-baseline', tooltip: '行内文字基线对齐' }, { title: '占满容器高度', icon: 'horizontal-alignment-stretch', tooltip: '占满容器高度' }],
            },
            if: _ => _.direction === 'horizontal',
        })
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch' = 'stretch';

        @Prop<UMultiLayoutOptions, '_alignment'>({
            group: '主要属性',
            title: '纵轴对齐',
            docDescription: '支持顶对齐、垂直居中、底对齐、平均分布（两端不留空）、平均分布。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '左对齐', icon: 'vertical-alignment-start', tooltip: '左对齐' }, { title: '居中对齐', icon: 'vertical-alignment-center', tooltip: '居中对齐' }, { title: '右对齐', icon: 'vertical-alignment-end', tooltip: '右对齐' }, { title: '拉伸子元素充满整个父元素空间', icon: 'vertical-alignment-stretch', tooltip: '占满容器宽度' }],
            },
            if: _ => _.direction === 'vertical',
        })
        _alignment: 'start' | 'center' | 'end' | 'stretch' = 'stretch';

        @Prop<UMultiLayoutOptions, '_justify'>({
            group: '主要属性',
            title: '横轴对齐',
            docDescription: '支持左对齐、居中对齐、右对齐、占满容器宽度。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '顶对齐', icon: 'vertical-justify-start', tooltip: '顶对齐' }, { title: '垂直居中', icon: 'vertical-justify-center', tooltip: '垂直居中' }, { title: '底对齐', icon: 'vertical-justify-end', tooltip: '底对齐' }, { title: '平均分布(两端不留空)', icon: 'vertical-justify-space-between', tooltip: '平均分布(两端不留空)' }, { title: '平均分布', icon: 'vertical-justify-space-around', tooltip: '平均分布' }],
            },
            if: _ => _.direction === 'vertical',
        })
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop({
            group: '样式属性',
            title: '内容间隙',
            description: '布局中各分栏间的空隙大小',
            docDescription: '分栏布局中各分栏间的空隙大小，缺省为无，支持收缩、无、小、正常、大共5个级别。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '收缩' }, { title: '无' }, { title: '小' }, { title: '正常' }, { title: '大' }],
            },
        })
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large' = 'none';

        @Event({
            title: '滚动时',
            description: '滚动时触发',
        })
        onScroll: (event: {
            scrollTop: nasl.core.Integer;
            scrollLeft: nasl.core.Integer;
            scrollWidth: nasl.core.Integer;
            scrollHeight: nasl.core.Integer;
            clientWidth: nasl.core.Integer;
            clientHeight: nasl.core.Integer;
        }) => any;

        @Event({
            title: '点击',
            description: '在元素上按下并释放任意鼠标按钮时触发。',
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
            title: '双击',
            description: '在元素上双击鼠标按钮时触发。',
        })
        onDblclick: (event: {
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
            title: '右键点击',
            description: '在右键菜单显示前触发。',
        })
        onContextmenu: (event: {
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
            title: '鼠标按下',
            description: '在元素上按下任意鼠标按钮时触发。',
        })
        onMousedown: (event: {
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
            title: '鼠标释放',
            description: '在元素上释放任意鼠标按钮时触发。',
        })
        onMouseup: (event: {
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
            title: '鼠标移入',
            description: '鼠标移入元素时触发。',
        })
        onMouseenter: (event: {
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
            title: '鼠标移出',
            description: '鼠标移出元素时触发。',
        })
        onMouseleave: (event: {
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

        @Slot({
            title: 'undefined',
            description: '插入`<u-multi-layout-item>`子组件。',
            snippets: [
                {
                    title: '布局栏',
                    code: '<u-multi-layout-item></u-multi-layout-item>',
                },
            ],
        })
        slotDefault: () => Array<UMultiLayoutItem>;
    }

    @Component({
        title: '布局栏',
        icon: 'multi-layout-item',
        description: '一定的规则布局',
    })
    export class UMultiLayoutItem extends ViewComponent {

        constructor(options?: Partial<UMultiLayoutItemOptions>) { super(); }
    }

    export class UMultiLayoutItemOptions  extends ViewComponentOptions {
        @Prop({
            title: '固定展示',
            description: '开启后滚动时该项固定显示',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private fixed: nasl.core.Boolean = false;

        @Prop({
            title: '固定位置',
            description: '固定在左侧还是右侧',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '左' }, { title: '右' }],
            },
        })
        private fixdirec: 'left' | 'right' = 'left';

        @Prop({
            title: '展示方式',
            description: '行内展示，或块级换行展示',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '块级' }, { title: '行内' }],
            },
        })
        private display: 'block' | 'inline' = 'block';

        @Prop<UMultiLayoutItemOptions, 'mode'>({
            group: '主要属性',
            title: '布局模式',
            tooltipLink: 'http://help.lcap.163yun.com/1.%E5%BC%80%E5%8F%91%E5%BA%94%E7%94%A8/2.%E9%A1%B5%E9%9D%A2/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/01.%E5%B8%83%E5%B1%80/040.%E5%88%86%E6%A0%8F%E5%B8%83%E5%B1%80.html',
            docDescription: '内联布局：将当前元素修改为内联布局模式，各个内联布局模式的元素将默认排布在同一行中，若空间不足以排布下一个内联布局元素，则该元素将会换行。- 弹性布局：在弹性布局模式中，子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免溢出父元素。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '块级', icon: 'layout-inline-block', tooltip: '内联布局' }, { title: '弹性', icon: 'layout-flex', tooltip: '弹性布局' }],
            },
            onChange: [
                { clear: ['justify','alignment','wrap'] }
            ],
        })
        mode: 'inline' | 'flex' = 'inline';

        @Prop<UMultiLayoutItemOptions, 'direction'>({
            group: '主要属性',
            title: '主轴方向',
            description: '可更改布局的排列方向',
            docDescription: '横向：内部子元素进行横向排布，建议内部子元素使用行内布局。 纵向：内部子元素进行纵向排布，建议内部子元素使用块级布局。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '横向排列', icon: 'flex-horizontal', tooltip: '横向' }, { title: '纵向排列', icon: 'flex-vertical', tooltip: '纵向' }],
            },
            if: _ => _.mode === 'flex',
            onChange: [
                { clear: ['justify','alignment'] }
            ],
        })
        direction: 'horizontal' | 'vertical' = 'horizontal';

        @Prop<UMultiLayoutItemOptions, 'justify'>({
            group: '主要属性',
            title: '横轴对齐',
            docDescription: '主轴方向为横向时：支持左对齐、居中对齐、右对齐、平均分布（两端不留空）、平均分布。主轴方向为纵向时：支持左对齐、居中对齐、右对齐、占满容器宽度。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '左对齐', icon: 'horizontal-justify-start', tooltip: '左对齐' }, { title: '居中对齐', icon: 'horizontal-justify-center', tooltip: '居中对齐' }, { title: '右对齐', icon: 'horizontal-justify-end', tooltip: '右对齐' }, { title: '平均分布(两端不留空)', icon: 'horizontal-justify-space-between', tooltip: '平均分布(两端不留空)' }, { title: '平均分布', icon: 'horizontal-justify-space-around', tooltip: '平均分布' }],
            },
            if: _ => _.mode === 'flex' && _.direction === 'horizontal',
            onChange: [
                { update: {gap:'normal'}, if: _ => _ === 'space-between' },
                { update: {gap:'normal'}, if: _ => _ === 'space-around' },
            ],
        })
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop<UMultiLayoutItemOptions, 'alignment'>({
            group: '主要属性',
            title: '纵轴对齐',
            docDescription: '主轴方向为横向时：支持顶对齐、垂直居中、底对齐、行内文字基线对齐、占满容器高度。 主轴方向为纵向时：支持顶对齐、垂直居中、底对齐、平均分布（两端不留空）、平均分布。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '顶对齐', icon: 'horizontal-alignment-start', tooltip: '顶对齐' }, { title: '垂直居中', icon: 'horizontal-alignment-center', tooltip: '垂直居中' }, { title: '底对齐', icon: 'horizontal-alignment-end', tooltip: '底对齐' }, { title: '行内文字基线对齐', icon: 'horizontal-alignment-baseline', tooltip: '行内文字基线对齐' }, { title: '占满容器高度', icon: 'horizontal-alignment-stretch', tooltip: '占满容器高度' }],
            },
            if: _ => _.mode === 'flex' && _.direction === 'horizontal',
        })
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch' = 'stretch';

        @Prop<UMultiLayoutItemOptions, '_alignment'>({
            group: '主要属性',
            title: '纵轴对齐',
            docDescription: '主轴方向为横向时：支持顶对齐、垂直居中、底对齐、行内文字基线对齐、占满容器高度。主轴方向为纵向时：支持顶对齐、垂直居中、底对齐、平均分布（两端不留空）、平均分布。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '左对齐', icon: 'vertical-alignment-start', tooltip: '左对齐' }, { title: '居中对齐', icon: 'vertical-alignment-center', tooltip: '居中对齐' }, { title: '右对齐', icon: 'vertical-alignment-end', tooltip: '右对齐' }, { title: '拉伸子元素充满整个父元素空间', icon: 'vertical-alignment-stretch', tooltip: '占满容器宽度' }],
            },
            if: _ => _.mode === 'flex' && _.direction === 'vertical',
        })
        _alignment: 'start' | 'center' | 'end' | 'stretch' = 'stretch';

        @Prop<UMultiLayoutItemOptions, '_justify'>({
            group: '主要属性',
            title: '横轴对齐',
            docDescription: '主轴方向为横向时：支持左对齐、居中对齐、右对齐、平均分布（两端不留空）、平均分布。主轴方向为纵向时：支持左对齐、居中对齐、右对齐、占满容器宽度。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '顶对齐', icon: 'vertical-justify-start', tooltip: '顶对齐' }, { title: '垂直居中', icon: 'vertical-justify-center', tooltip: '垂直居中' }, { title: '底对齐', icon: 'vertical-justify-end', tooltip: '底对齐' }, { title: '平均分布(两端不留空)', icon: 'vertical-justify-space-between', tooltip: '平均分布(两端不留空)' }, { title: '平均分布', icon: 'vertical-justify-space-around', tooltip: '平均分布' }],
            },
            if: _ => _.mode === 'flex' && _.direction === 'vertical',
            onChange: [
                { update: {gap:'normal'}, if: _ => _ === 'space-between' },
                { update: {gap:'normal'}, if: _ => _ === 'space-around' },
            ],
        })
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop<UMultiLayoutItemOptions, 'gap'>({
            group: '样式属性',
            title: '内容间隙',
            description: '内容块间隙大小',
            docDescription: '布局内各个组件之间的间隔，通常有收缩、无、小、正常、大，默认为无。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '收缩' }, { title: '无' }, { title: '小' }, { title: '正常' }, { title: '大' }],
            },
            if: _ => _.mode === 'flex' && _.justify !== 'space-between' && _.justify !== 'space-around',
        })
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large' = 'none';

        @Event({
            title: '点击',
            description: '在元素上按下并释放任意鼠标按钮时触发。',
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
            title: '双击',
            description: '在元素上双击鼠标按钮时触发。',
        })
        onDblclick: (event: {
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
            title: '右键点击',
            description: '在右键菜单显示前触发。',
        })
        onContextmenu: (event: {
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
            title: '鼠标按下',
            description: '在元素上按下任意鼠标按钮时触发。',
        })
        onMousedown: (event: {
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
            title: '鼠标释放',
            description: '在元素上释放任意鼠标按钮时触发。',
        })
        onMouseup: (event: {
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
            title: '鼠标移入',
            description: '鼠标移入元素时触发。',
        })
        onMouseenter: (event: {
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
            title: '鼠标移出',
            description: '鼠标移出元素时触发。',
        })
        onMouseleave: (event: {
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

        @Slot({
            title: '默认',
            description: '内容',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
