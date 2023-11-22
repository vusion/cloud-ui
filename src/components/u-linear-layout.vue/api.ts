/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '线性布局',
        icon: 'linear-layout',
        description: '内部元素按照一定的规则布局',
    })
    export class ULinearLayout extends VueComponent {


        @Method({
            title: '打开加载中',
            description: '打开加载中',
        })
        openLoading(): void {}

        @Method({
            title: '关闭加载中',
            description: '关闭加载中',
        })
        closeLoading(): void {}
        constructor(options?: Partial<ULinearLayoutOptions>) { super(); }
    }

    export class ULinearLayoutOptions {
        @Prop({
            title: '展示方式',
            description: '行内展示，或块级换行展示',
            setter: {
                type: 'enumSelect',
                titles: ['行内', '块级'],
            },
        })
        private display: 'inline' | 'block' = 'block';

        @Prop({
            title: '布局模式',
            description: '布局模式',
            setter: {
                type: 'enumSelect',
                titles: ['flex 布局模式'],
            },
        })
        private type: 'flex';

        @Prop<ULinearLayoutOptions, 'mode'>({
            group: '主要属性',
            title: '布局模式',
            tooltipLink: 'http://help.lcap.163yun.com/1.%E5%BC%80%E5%8F%91%E5%BA%94%E7%94%A8/2.%E9%A1%B5%E9%9D%A2/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/01.%E5%B8%83%E5%B1%80/020.%E7%BA%BF%E6%80%A7%E5%B8%83%E5%B1%80.html',
            docDescription: `内联布局：将当前元素修改为内联布局模式，各个内联布局模式的元素将默认排布在同一行中，若空间不足以排布下一个内联布局元素，则该元素将会换行。
块级布局：将当前元素修改为块级布局模式，各个块级布局模式的元素之前和之后均会换行。
弹性布局：在弹性布局模式中，子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免溢出父元素。`,
            bindHide: true,
            setter: {
                type: 'capsules',
                titles: ['行内', '块级', '弹性'],
                icons: ['layout-inline-block', 'layout-block', 'layout-flex'],
                tooltips: ['内联布局', '块级布局', '弹性布局'],
            },
            onToggle: [
                { clear: ['justify','alignment','wrap','layout'] }
            ],
        })
        mode: 'inline' | 'block' | 'flex' = 'block';

        @Prop<ULinearLayoutOptions, 'direction'>({
            group: '主要属性',
            title: '主轴方向',
            docDescription: `横向：内部子元素进行横向排布，建议内部子元素使用行内布局。
纵向：内部子元素进行纵向排布，建议内部子元素使用块级布局。`,
            bindHide: true,
            setter: {
                type: 'capsules',
                titles: ['横向排列', '纵向排列'],
                icons: ['flex-horizontal', 'flex-vertical'],
                tooltips: ['横向', '纵向'],
            },
            onToggle: [
                { clear: ['justify','alignment'] }
            ],
        })
        direction: 'horizontal' | 'vertical' = 'horizontal';

        @Prop<ULinearLayoutOptions, 'justify'>({
            group: '主要属性',
            title: '横轴对齐',
            docDescription: `主轴方向为横向时：支持左对齐、居中对齐、右对齐、平均分布（两端不留空）、平均分布，其中平均分布仅在弹性布局模式下展示。
主轴方向为纵向时：支持左对齐、居中对齐、右对齐、占满容器宽度，其中占满容器宽度仅在弹性布局模式下展示。`,
            bindHide: true,
            setter: {
                type: 'capsules',
                titles: ['左对齐', '居中对齐', '右对齐', '平均分布(两端不留空)', '平均分布'],
                icons: ['horizontal-justify-start', 'horizontal-justify-center', 'horizontal-justify-end', 'horizontal-justify-space-between', 'horizontal-justify-space-around'],
                tooltips: ['左对齐', '居中对齐', '右对齐', '平均分布(两端不留空)', '平均分布'],
            },
            if: _ => _.direction === 'horizontal' || _.mode === 'inline' && _.direction === 'vertical' || _.mode === 'block' && _.direction === 'vertical',
            onToggle: [
                { update: {gap:'normal'}, if: _ => _ === 'space-between' },
                { update: {gap:'normal'}, if: _ => _ === 'space-around' },
            ],
        })
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop<ULinearLayoutOptions, 'alignment'>({
            group: '主要属性',
            title: '纵轴对齐',
            docDescription: `主轴方向为横向时：支持顶对齐、垂直居中、底对齐、行内文字基线对齐、占满容器高度。
主轴方向为纵向时：支持顶对齐、垂直居中、底对齐、平均分布（两端不留空）、平均分布。`,
            bindHide: true,
            setter: {
                type: 'capsules',
                titles: ['顶对齐', '垂直居中', '底对齐', '行内文字基线对齐', '占满容器高度'],
                icons: ['horizontal-alignment-start', 'horizontal-alignment-center', 'horizontal-alignment-end', 'horizontal-alignment-baseline', 'horizontal-alignment-stretch'],
                tooltips: ['顶对齐', '垂直居中', '底对齐', '行内文字基线对齐', '占满容器高度'],
            },
            if: _ => _.mode === 'flex' && _.direction === 'horizontal',
        })
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch' = 'stretch';

        @Prop<ULinearLayoutOptions, '_alignment'>({
            group: '主要属性',
            title: '纵轴对齐',
            docDescription: `主轴方向为横向时：支持顶对齐、垂直居中、底对齐、行内文字基线对齐、占满容器高度。
主轴方向为纵向时：支持顶对齐、垂直居中、底对齐、平均分布（两端不留空）、平均分布。`,
            bindHide: true,
            setter: {
                type: 'capsules',
                titles: ['左对齐', '居中对齐', '右对齐', '拉伸子元素充满整个父元素空间'],
                icons: ['vertical-alignment-start', 'vertical-alignment-center', 'vertical-alignment-end', 'vertical-alignment-stretch'],
                tooltips: ['左对齐', '居中对齐', '右对齐', '占满容器宽度'],
            },
            if: _ => _.mode === 'flex' && _.direction === 'vertical',
        })
        _alignment: 'start' | 'center' | 'end' | 'stretch' = 'stretch';

        @Prop<ULinearLayoutOptions, '_justify'>({
            group: '主要属性',
            title: '横轴对齐',
            docDescription: `主轴方向为横向时：支持左对齐、居中对齐、右对齐、平均分布（两端不留空）、平均分布，其中平均分布仅在弹性布局模式下展示。
主轴方向为纵向时：支持左对齐、居中对齐、右对齐、占满容器宽度，其中占满容器宽度仅在弹性布局模式下展示。`,
            bindHide: true,
            setter: {
                type: 'capsules',
                titles: ['顶对齐', '垂直居中', '底对齐', '平均分布(两端不留空)', '平均分布'],
                icons: ['vertical-justify-start', 'vertical-justify-center', 'vertical-justify-end', 'vertical-justify-space-between', 'vertical-justify-space-around'],
                tooltips: ['顶对齐', '垂直居中', '底对齐', '平均分布(两端不留空)', '平均分布'],
            },
            if: _ => _.mode === 'flex' && _.direction === 'vertical',
            onToggle: [
                { update: {gap:'normal'}, if: _ => _ === 'space-between' },
                { update: {gap:'normal'}, if: _ => _ === 'space-around' },
            ],
        })
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

        @Prop<ULinearLayoutOptions, 'layout'>({
            group: '主要属性',
            title: '子元素展示方式',
            description: '子元素行内展示或块级换行展示',
            docDescription: '布局内各个组件的布局方式，支持默认、行内和块级三种布局方式。',
            setter: {
                type: 'enumSelect',
                titles: ['子元素默认布局', '子元素行内布局', '子元素块级布局'],
            },
            if: _ => _.mode === 'inline' || _.mode === 'block',
        })
        layout: 'none' | 'inline' | 'block' = 'none';

        @Prop<ULinearLayoutOptions, 'wrap'>({
            group: '主要属性',
            title: '换行',
            description: '设置弹性布局下子元素总宽度超出父级时子元素是否换行展示',
            docDescription: '支持控制弹性布局模式下，子元素总宽度超过父级时是否换行展示，默认开启。',
            setter: {
                type: 'switch',
            },
            if: _ => _.mode === 'flex',
        })
        wrap: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '加载中图标',
            description: '加载中状态显示的图标',
            docDescription: '支持从图标库选择图标或上传自定义图标。',
            setter: {
                type: 'iconSelect',
            },
        })
        loadingIcon: nasl.core.String = 'loading';

        @Prop({
            group: '状态属性',
            title: '加载中图标旋转',
            description: '设置加载中图标是否旋转，默认开启。',
            docDescription: '支持控制加载中图标是否旋转，默认开启。',
            setter: {
                type: 'switch',
            },
        })
        loadingIconRotate: nasl.core.Boolean = true;

        @Prop({
            group: '状态属性',
            title: '加载中文案',
            description: '加载中状态显示的提示文案',
            docDescription: '支持编辑组件加载中情况显示文案。',
        })
        loadingText: nasl.core.String = '';

        @Prop<ULinearLayoutOptions, 'gap'>({
            group: '样式属性',
            title: '内容间隙',
            description: '内容块间隙大小',
            docDescription: '布局内各个组件之间的间隔，通常有收缩、无、小、正常、大，默认为正常。',
            setter: {
                type: 'enumSelect',
                titles: ['收缩', '无', '小', '正常', '大'],
            },
            if: _ => _.justify !== 'space-between' && _.justify !== 'space-around',
        })
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large' = 'normal';

        @Event({
            title: '点击',
            description: '在元素上按下并释放任意鼠标按钮时触发。',
        })
        onClick: () => void;

        @Event({
            title: '双击',
            description: '在元素上双击鼠标按钮时触发。',
        })
        onDblclick: () => void;

        @Event({
            title: '右键点击',
            description: '在右键菜单显示前触发。',
        })
        onContextmenu: () => void;

        @Event({
            title: '鼠标按下',
            description: '在元素上按下任意鼠标按钮时触发。',
        })
        onMousedown: () => void;

        @Event({
            title: '鼠标释放',
            description: '在元素上释放任意鼠标按钮时触发。',
        })
        onMouseup: () => void;

        @Event({
            title: '鼠标移入',
            description: '鼠标移入元素时触发。',
        })
        onMouseenter: () => void;

        @Event({
            title: '鼠标移出',
            description: '鼠标移出元素时触发。',
        })
        onMouseleave: () => void;

        @Event({
            title: '滚动时',
            description: '滚动时触发',
        })
        onScroll: (event: nasl.ui.ScrollEvent) => void;

        @Slot({
            title: 'undefined',
            description: '内容',
        })
        slotDefault: () => Array<VueComponent>;
    }
}
