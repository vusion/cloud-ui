/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '幻灯片',
        icon: 'carousel',
        description: '动态播放内部内容',
        group: "Display"
    })
    export class UCarousel<T> extends ViewComponent {


        @Method({
            title: 'undefined',
            description: '清除缓存，重新加载',
        })
        reload(): void {}
        constructor(options?: Partial<UCarouselOptions<T>>) { super(); }
    }

    export class UCarouselOptions<T> extends ViewComponentOptions {
        @Prop({
            title: '循环播放',
            description: '是否循环播放',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        private loop: nasl.core.Boolean = true;

        @Prop({
            title: '播放方向',
            description: '幻灯片播放方向',
        })
        private direction: nasl.core.String = 'right';

        @Prop({
            title: '过度动画',
            description: '幻灯片过渡动画',
        })
        private animation: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。',
            designerValue: [{}],
        })
        dataSource: nasl.collection.List<T> | { list: nasl.collection.List<T>; total: nasl.core.Integer };

        @Prop({
            group: '数据属性',
            title: '数据类型',
            description: '数据源返回的数据结构的类型，自动识别类型进行展示说明',
            docDescription: 'IDE 根据配置的数据源动态计算返回内容的数据结构，用于动态配置项 current.item 的类型说明。',
        })
        dataSchema: T;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '播放位置',
            sync: true,
        })
        private value: nasl.core.Integer;

        @Prop({
            group: '主要属性',
            title: '轮播',
            docDescription: '是否循环播放所有图片',
            setter: {
                concept: 'SwitchSetter',
            },
        })
        autoplay: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '切换间隔时间',
            description: '单位：毫秒，幻灯片切换时间，如果设置值小于动画时长，会在动画完成后切换',
            docDescription: '单位：毫秒，幻灯片切换时间，如果设置值小于动画时长，会在动画完成后切换',
            setter: {
                concept: 'NumberInputSetter',
                precision: 0,
            },
        })
        interval: nasl.core.Integer = 4000;

        @Event({
            title: '选择前',
            description: '选择某一页前触发',
        })
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '选择后',
            description: '选择某一页时触发',
        })
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;

        @Event({
            title: '加载前',
            description: '加载前触发',
        })
        onBeforeLoad: (event: any) => any;

        @Event({
            title: '加载后',
            description: '加载后触发',
        })
        onLoad: (event: any) => any;

        @Slot({
            title: 'undefined',
            description: '插入`<u-carousel-item>`子组件。',
            emptyBackground: 'add-sub-large',
            snippets: [
                {
                    title: '幻灯片子项',
                    code: '<u-carousel-item><u-image style="width: 100%; height: 100%" fit="cover" src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg"></u-carousel-item>',
                },
            ],
        })
        slotDefault: () => Array<UCarouselItem>;

        @Slot({
            title: 'undefined',
            description: '自定义选项的结构和样式',
        })
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }

    @Component({
        title: '幻灯片选项',
        description: '幻灯片选项',
    })
    export class UCarouselItem extends ViewComponent {

        constructor(options?: Partial<UCarouselItemOptions>) { super(); }
    }

    export class UCarouselItemOptions  extends ViewComponentOptions {
        @Prop({
            title: '标题',
            description: '该项的标题',
        })
        private title: nasl.core.String;

        @Prop({
            title: '值',
            description: '该项的值',
        })
        private value: nasl.core.Any;

        @Slot({
            title: 'undefined',
            description: '插入文本或 HTML。',
            emptyBackground: 'image',
        })
        slotDefault: () => Array<ViewComponent>;

        @Slot({
            title: 'undefined',
            description: '自定义标题文本。',
        })
        slotTitle: () => Array<ViewComponent>;
    }
}
