/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '组件列表',
        icon: 'forcom',
        description: '组件列表',
        group: 'Table'
    })
    export class UListComponents<T> extends ViewComponent {
        @Prop({
            title: '数据',
        })
        data: UListComponentsOptions<T>['dataSource'];

        constructor(options?: Partial<UListComponentsOptions<T>>) { super(); }
    }

    export class UListComponentsOptions<T> extends ViewComponentOptions {
        @Prop({
            group: '数据属性',
            title: '数据源',
            description: '展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑',
            docDescription: '组件的数据源，配置内容为数据集对象或者返回数据集的逻辑。',
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
            group: '主要属性',
            title: '每行排列项数',
            description: '为空时默认为5',
            docDescription: '支持定义每一行排列的项数，为空时会自适应宽度并自动换行。',
            setter: {
                concept: 'NumberInputSetter',
            },
        })
        colnum: nasl.core.Decimal = 5;

        @Prop({
            group: '样式属性',
            title: '均分宽度',
            description: '设置是否均分宽度',
            docDescription: `支持根据组件列表所占宽度自动均匀排布各项。
- 开启：默认根据组件列表宽度自动计算每一项内容宽度，宽度为 100% / 每行项数。
- 关闭：每一项内容自适应宽度。`,
            setter: {
                concept: 'SwitchSetter',
            },
        })
        equalWidth: nasl.core.Boolean = true;

        @Slot({
            title: '默认',
            description: '内容自定义',
        })
        slotDefault: (current: Current<T>) => Array<ViewComponent>;
    }
}
