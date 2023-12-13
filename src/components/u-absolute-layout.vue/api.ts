/// <reference types="@nasl/types" />

namespace nasl.ui {
    @Component({
        title: '自由布局',
        icon: 'absolute-layout',
        description: '拖拽内部元素到任意位置',
    })
    export class UAbsoluteLayout extends ViewComponent {

        constructor(options?: Partial<UAbsoluteLayoutOptions>) { super(); }
    }

    export class UAbsoluteLayoutOptions {


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

        @Slot({
            title: 'undefined',
            description: '内容',
        })
        slotDefault: () => Array<ViewComponent>;
    }
}
