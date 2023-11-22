/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '任务箱',
        icon: 'taskbox',
        description: '用于展示流程任务箱',
    })
    export class UTaskbox extends VueComponent {

        constructor(options?: Partial<UTaskboxOptions>) { super(); }
    }

    export class UTaskboxOptions {
        @Prop({
            group: '主要属性',
            title: '图标',
            docDescription: '图标',
        })
        icon: nasl.core.String = '通知';

        @Prop({
            group: '主要属性',
            title: '每页条数',
            description: '每页展示的任务数量',
            docDescription: ' 每页展示的任务数量',
            setter: {
                type: 'numberInput',
            },
        })
        size: nasl.core.Decimal = 5;

        @Prop({
            group: '主要属性',
            title: '时间间隔（秒）',
            description: '任务刷新时间间隔，单位：秒',
            tooltipLink: 'https://help.lcap.163yun.com/99.%E5%8F%82%E8%80%83/40.%E9%A1%B5%E9%9D%A2IDE/30.%E9%A1%B5%E9%9D%A2%E7%BB%84%E4%BB%B6/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/20.%E6%B5%81%E7%A8%8B/110.%E4%BB%BB%E5%8A%A1%E7%AE%B1.html',
            docDescription: '任务刷新时间间隔',
            setter: {
                type: 'numberInput',
            },
        })
        interval: nasl.core.Decimal = 30;

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
            title: '获得焦点',
            description: '获得焦点时触发。',
        })
        onFocus: () => void;

        @Event({
            title: '失去焦点',
            description: '失去焦点时触发。',
        })
        onBlur: () => void;
    }
}
