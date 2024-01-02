/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '栅格布局',
        icon: 'grid-layout',
        description: '内部元素按照一定的规则布局',
        group: 'Layout'
    })
    export class UGridLayout extends ViewComponent {

        constructor(options?: Partial<UGridLayoutOptions>) { super(); }
    }

    export class UGridLayoutOptions  extends ViewComponentOptions {
        @Prop({
            group: '样式属性',
            title: '行间隔',
            description: '栅格行之间的间隔',
            docDescription: '支持修改栅格行之间的间隔，支持紧凑（-1）、无（0）、小（8）、正常（16）、大（32）共6种间隔模式。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '紧凑（-1）' }, { title: '无（0）' }, { title: '小（8）' }, { title: '正常（16）' }, { title: '大（32）' }],
            },
        })
        gap: 'compact' | 'none' | 'small' | 'normal' | 'large' = 'normal';

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

        @Slot({
            title: 'undefined',
            description: '插入`<u-grid-layout-row>`或`<u-grid-layout-column>`子组件。',
            snippets: [
                {
                    title: '插入一行',
                    code: '<u-grid-layout-row :repeat="24"><u-grid-layout-column :span="8"></u-grid-layout-column><u-grid-layout-column :span="8"></u-grid-layout-column><u-grid-layout-column :span="8"></u-grid-layout-column></u-grid-layout-row>',
                },
            ],
        })
        slotDefault: () => Array<UGridLayoutRow>;
    }

    @Component({
        title: '栅格行',
        description: '内部元素行布局',
    })
    export class UGridLayoutRow extends ViewComponent {

        constructor(options?: Partial<UGridLayoutRowOptions>) { super(); }
    }

    export class UGridLayoutRowOptions  extends ViewComponentOptions {
        @Prop<UGridLayoutRowOptions, 'justify'>({
            group: '主要属性',
            title: '横轴对齐',
            docDescription: '支持左对齐、居中对齐、右对齐、平均分布（两端不留空）、平均分布。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '左对齐', icon: 'horizontal-justify-start', tooltip: '左对齐' }, { title: '居中对齐', icon: 'horizontal-justify-center', tooltip: '居中对齐' }, { title: '右对齐', icon: 'horizontal-justify-end', tooltip: '右对齐' }, { title: '平均分布(两端不留空)', icon: 'horizontal-justify-space-between', tooltip: '平均分布(两端不留空)' }, { title: '水平分布-左右留空', icon: 'horizontal-justify-space-around', tooltip: '平均分布' }],
            },
        })
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop<UGridLayoutRowOptions, 'alignment'>({
            group: '主要属性',
            title: '纵轴对齐',
            docDescription: '支持顶对齐、垂直居中、底对齐、行内文字基线对齐、占满容器高度。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '顶对齐', icon: 'horizontal-alignment-start', tooltip: '顶对齐' }, { title: '垂直居中', icon: 'horizontal-alignment-center', tooltip: '垂直居中' }, { title: '底对齐', icon: 'horizontal-alignment-end', tooltip: '底对齐' }, { title: '行内文字基线对齐', icon: 'horizontal-alignment-baseline', tooltip: '行内文字基线对齐' }, { title: '占满容器高度', icon: 'horizontal-alignment-stretch', tooltip: '占满容器高度' }],
            },
        })
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch' = 'stretch';

        @Prop<UGridLayoutRowOptions, 'repeat'>({
            group: '主要属性',
            title: '栅格数',
            description: '默认24，可设置栅格行大小',
            docDescription: '支持设置栅格行大小，默认为24。',
            setter: {
                concept: 'NumberInputSetter',
                min: 1,
                max: 24,
            },
        })
        repeat: nasl.core.Decimal = 12;

        @Prop({
            group: '样式属性',
            title: '列间隔',
            description: '栅格列之间的间隔',
            docDescription: '栅格列之间的间隔，支持无（0）、迷你（4）、小（8）、正常（16）、巨大（32）共6种间隔模式。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '无（0）' }, { title: '迷你（4）' }, { title: '小（8）' }, { title: '正常（16）' }, { title: '大（24）' }, { title: '巨大（32）' }],
            },
        })
        gap: 'none' | 'mini' | 'small' | 'normal' | 'large' | 'huge' = 'normal';

        @Slot({
            title: 'undefined',
            description: '插入`<u-grid-layout-column>`子组件。',
            snippets: [
                {
                    title: '插入一列',
                    code: '<u-grid-layout-column :span="1"></u-grid-layout-column>',
                },
            ],
        })
        slotDefault: () => Array<UGridLayoutColumn>;
    }

    @Component({
        title: '栅格列',
        description: '内部元素行内列布局',
    })
    export class UGridLayoutColumn extends ViewComponent {

        constructor(options?: Partial<UGridLayoutColumnOptions>) { super(); }
    }

    export class UGridLayoutColumnOptions  extends ViewComponentOptions {
        @Prop({
            title: '响应很大屏',
            description: '响应式布局`<=1440px`的列跨越栅格数',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        private mediaHuge: nasl.core.Decimal;

        @Prop({
            title: '响应大屏',
            description: '响应式布局`<=1200px`的列跨越栅格数',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        private mediaLarge: nasl.core.Decimal;

        @Prop({
            title: '响应中屏',
            description: '响应式布局`<=960px`的列跨越栅格数',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        private mediaMedium: nasl.core.Decimal;

        @Prop({
            title: '响应小屏',
            description: '响应式布局`<=768px`的列跨越栅格数',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        private mediaSmall: nasl.core.Decimal;

        @Prop({
            title: '响应迷你屏',
            description: '响应式布局`<=480px`的列跨越栅格数',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        private mediaMini: nasl.core.Decimal;

        @Prop<UGridLayoutColumnOptions, 'mode'>({
            group: '主要属性',
            title: '布局模式',
            tooltipLink: 'http://help.lcap.163yun.com/1.%E5%BC%80%E5%8F%91%E5%BA%94%E7%94%A8/2.%E9%A1%B5%E9%9D%A2/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/01.%E5%B8%83%E5%B1%80/030.%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80.html',
            docDescription: '内联布局：将当前元素修改为内联布局模式，各个内联布局模式的元素将默认排布在同一行中，若空间不足以排布下一个内联布局元素，则该元素将会换行。弹性布局：在弹性布局模式中，子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免溢出父元素。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '块级', icon: 'layout-inline-block', tooltip: '内联布局' }, { title: '弹性', icon: 'layout-flex', tooltip: '弹性布局' }],
            },
            onChange: [
                { clear: ['justify','alignment','wrap','gap'] }
            ],
        })
        mode: 'inline' | 'flex' = 'inline';

        @Prop<UGridLayoutColumnOptions, 'direction'>({
            group: '主要属性',
            title: '主轴方向',
            docDescription: '横向：内部子元素进行横向排布，建议内部子元素使用行内布局。纵向：内部子元素进行纵向排布，建议内部子元素使用块级布局。',
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

        @Prop<UGridLayoutColumnOptions, '_justify'>({
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
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop<UGridLayoutColumnOptions, 'alignment'>({
            group: '主要属性',
            title: '纵轴对齐',
            docDescription: '主轴方向为横向时：支持顶对齐、垂直居中、底对齐、行内文字基线对齐、占满容器高度。主轴方向为纵向时：支持顶对齐、垂直居中、底对齐、平均分布（两端不留空）、平均分布。',
            bindHide: true,
            setter: {
                concept: 'CapsulesSetter',
                options: [{ title: '顶对齐', icon: 'horizontal-alignment-start', tooltip: '顶对齐' }, { title: '垂直居中', icon: 'horizontal-alignment-center', tooltip: '垂直居中' }, { title: '底对齐', icon: 'horizontal-alignment-end', tooltip: '底对齐' }, { title: '行内文字基线对齐', icon: 'horizontal-alignment-baseline', tooltip: '行内文字基线对齐' }, { title: '占满容器高度', icon: 'horizontal-alignment-stretch', tooltip: '占满容器高度' }],
            },
            if: _ => _.mode === 'flex' && _.direction === 'horizontal',
        })
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch' = 'stretch';

        @Prop<UGridLayoutColumnOptions, '_alignment'>({
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

        @Prop<UGridLayoutColumnOptions, 'justify'>({
            group: '主要属性',
            title: '横轴对齐',
            docDescription: '主轴方向为横向时：支持左对齐、居中对齐、右对齐、平均分布（两端不留空）、平均分布。 主轴方向为纵向时：支持左对齐、居中对齐、右对齐、占满容器宽度。',
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
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop<UGridLayoutColumnOptions, 'span'>({
            group: '主要属性',
            title: '占据栅格数',
            description: '列占据栅格行的栅格数',
            docDescription: '支持设置当前栅格列占据的栅格数，不能超过当前栅格行栅格数。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        span: nasl.core.Decimal = 1;

        @Prop<UGridLayoutColumnOptions, 'offset'>({
            group: '主要属性',
            title: '偏移栅格数',
            description: '列偏移的栅格数',
            docDescription: '支持设置栅格列偏移数，控制当前栅格列与其左侧栅格列的距离，处于当前栅格列右侧的栅格列也会同步偏移。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        offset: nasl.core.Decimal = 0;

        @Prop<UGridLayoutColumnOptions, 'pull'>({
            group: '主要属性',
            title: '左移动栅格数',
            description: '列向左移动的栅格数',
            docDescription: '向左移动的栅格数，支持栅格互相重合。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        pull: nasl.core.Decimal = 0;

        @Prop<UGridLayoutColumnOptions, 'push'>({
            group: '主要属性',
            title: '右移动栅格数',
            description: '列向右移动的栅格数',
            docDescription: '向右移动的栅格数，支持栅格互相重合。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        push: nasl.core.Decimal = 0;

        @Prop<UGridLayoutColumnOptions, 'wrap'>({
            group: '主要属性',
            title: '换行',
            description: '设置弹性布局下子元素总宽度超出父级时子元素是否换行展示',
            docDescription: '支持控制弹性布局模式下，子元素总宽度超过父级时是否换行展示，默认开启。',
            setter: {
                concept: 'SwitchSetter',
            },
            if: _ => _.mode === 'flex',
        })
        wrap: nasl.core.Boolean = true;

        @Prop<UGridLayoutColumnOptions, 'gap'>({
            group: '样式属性',
            title: '内容间隙',
            description: '内容块间隙大小',
            docDescription: '布局内各个组件之间的间隔，通常有收缩、无、小、正常、大，默认为正常。',
            setter: {
                concept: 'EnumSelectSetter',
                options: [{ title: '收缩' }, { title: '无' }, { title: '小' }, { title: '正常' }, { title: '大' }],
            },
            if: _ => _.mode === 'flex' && _.justify !== 'space-between' && _.justify !== 'space-around',
        })
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large' = 'normal';

        @Event({
            title: '响应窗口变化时',
            description: '响应式布局引发栅格变化时触发',
        })
        onResponsive: (event: any) => any;

        @Slot({
            title: 'undefined',
            description: '插入需要布局的元素。',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
