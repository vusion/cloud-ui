/// <reference types="nasl" />

namespace nasl.ui {
    @Component({
        title: '文件上传',
        icon: 'uploader',
        description: '通过点击或者拖拽上传文件。',
    })
    export class UUploader extends VueComponent {


        @Method({
            title: '选择',
            description: '选择文件上传',
        })
        select(): void {}
        constructor(options?: Partial<UUploaderOptions>) { super(); }
    }

    export class UUploaderOptions {
        @Prop({
            title: '接收数据类型',
            description: '接收数据类型。可选值：`text`、`xml`、`json`',
        })
        private dataType: nasl.core.String = 'json';

        @Prop({
            title: '是否可以粘贴',
        })
        private pastable: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '值',
            description: '当前文件列表',
            syncMode: 'both',
            docDescription: '当前的文件列表',
        })
        value: Array = '[]';

        @Prop({
            group: '数据属性',
            title: '上传地址',
            description: '上传的 URL 地址',
            docDescription: '文件上传的URL地址，如/upload',
        })
        url: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '上传的文件字段',
            description: '上传的文件字段名，后端需要这个字段获取',
            docDescription: '默认file，支持自定义，后端通过该字段获取文件',
        })
        name: nasl.core.String = 'file';

        @Prop({
            group: '数据属性',
            title: '支持上传的文件类型',
            description: '若要限制上传文件类型，请输入类型名称，格式为“.后缀名”，多个文件类型时使用英文逗号隔开。例如“.jpeg,.png,.gif”',
            tooltipLink: 'http://help.lcap.163yun.com/1.%E5%BC%80%E5%8F%91%E5%BA%94%E7%94%A8/2.%E9%A1%B5%E9%9D%A2/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/06.%E8%A1%A8%E5%8D%95/150.%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html#%E7%BB%84%E4%BB%B6%E8%AF%B4%E6%98%8E',
            docDescription: '支持对上传的文件类型进行限制，格式为“.后缀名”，如“.jpeg”表示仅支持上传jpeg格式的文件。多个文件类型时需使用英文逗号隔开，如“.jpeg,.png,.gif”表示仅支持上传jpeg、png、gif格式的文件。若为空值，则支持上传所有类型的文件',
            setter: {
                type: 'input',
                placeholder: '所有类型',
            },
        })
        accept: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: 'cookie值',
            description: '通过设置 withCredentials 为 true 获得的第三方 cookies，将会依旧享受同源策略',
            docDescription: '通过设置 withCredentials 为 true 获得的第三方 cookies，将会依旧享受同源策略',
        })
        withCredentials: nasl.core.Boolean = false;

        @Prop({
            group: '数据属性',
            title: '附加数据',
            docDescription: '补充描述',
        })
        data: object;

        @Prop({
            group: '数据属性',
            title: '列表数量上限',
            docDescription: '列表数量上限，默认为999',
        })
        limit: nasl.core.Decimal;

        @Prop({
            group: '数据属性',
            title: '最大文件大小',
            description: '可上传的最大文件大小。默认为空，表示可上传任意大小的文件；如果为数字，则表示单位为字节；如果为字符串，可以添加以下单位：`KB`、`MB`、`GB`',
            docDescription: '可上传的最大文件大小。默认50MB；如果为数字，则表示单位为字节；如果为字符串，可以添加以下单位kB、MB、GB',
        })
        maxSize: nasl.core.String;

        @Prop({
            group: '数据属性',
            title: '列表类型',
            docDescription: '列表的展示类型，支持使用文本、图片和卡片',
            setter: {
                type: 'enumSelect',
                titles: ['文本', '图片', '卡片'],
            },
        })
        listType: 'text' | 'image' | 'card' = 'text';

        @Prop({
            group: '数据属性',
            title: 'URL 字段',
            description: '请求返回的 URL 字段名',
            docDescription: '请求返回的URL字段名',
        })
        urlField: nasl.core.String = 'url';

        @Prop({
            group: '主要属性',
            title: '请求 headers',
            docDescription: '请求头',
        })
        headers: Object;

        @Prop({
            group: '主要属性',
            title: '多文件上传',
            docDescription: '开启后可上传多个文件，默认关闭，多文件可设置数量上限',
        })
        multiple: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '一次性上传多文件',
            description: '利用原生 multipart/form-data 传输多个文件的能力，一次性上传多个文件',
            docDescription: '开启后支持一次性上传多个文件',
        })
        multipleOnce: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '启用图片裁剪',
            description: '设置是否启用图片裁剪功能，只对单文件上传有效',
            docDescription: '开启后支持对选择的图片进行裁剪后上传',
        })
        openCropper: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '固定图片裁剪框大小',
        })
        fixedCropper: nasl.core.Boolean = false;

        @Prop({
            group: '主要属性',
            title: '图片裁剪框宽度',
        })
        cropperBoxWidth: nasl.core.Decimal = 200;

        @Prop({
            group: '主要属性',
            title: '图片裁剪框高度',
        })
        cropperBoxHeight: nasl.core.Decimal = 200;

        @Prop({
            group: '主要属性',
            title: '图片裁剪框预览形状',
            setter: {
                type: 'enumSelect',
                titles: ['正方形', '圆形'],
            },
        })
        cropperPreviewShape: 'square' | 'circle' = 'circle';

        @Prop({
            group: '主要属性',
            title: '图片裁剪框标题',
        })
        cropperTitle: nasl.core.String = '图片裁剪';

        @Prop({
            group: '主要属性',
            title: '自动上传',
            docDescription: '开启后选择文件后会自动上传，默认开启',
        })
        autoUpload: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '显示文件列表',
            docDescription: '开启后上传多个文件时，会显示文件列表，默认开启',
        })
        showFileList: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '转换器',
            docDescription: '支持使用JSON或URL字符串',
            setter: {
                type: 'enumSelect',
                titles: ['JSON', 'URL字符串'],
            },
        })
        converter: 'json' | 'simple' = 'json';

        @Prop({
            group: '主要属性',
            title: '展示方式',
            description: '行内展示，或块级换行展示',
            docDescription: '支持行内展示或块级换行展示',
            setter: {
                type: 'enumSelect',
                titles: ['行内展示', '块级展示，宽度会充满父元素'],
            },
        })
        display: 'inline' | 'block' = 'block';

        @Prop({
            group: '主要属性',
            title: '辅助文本',
            description: '辅助说明的文本信息，如上传的数量、大小等，在上传组件下方展示。',
            docDescription: '在上传组件下方展示一些提示信息，如上传的数量、大小等，默认为null',
        })
        description: nasl.core.String;

        @Prop({
            group: '主要属性',
            title: '报错信息',
            description: '设置是否展示上传时的出错信息，如超出数量、大小',
            docDescription: '是否展示上传时的出错信息，如超出数量、大小',
        })
        showErrorMessage: nasl.core.Boolean = true;

        @Prop({
            group: '主要属性',
            title: '辅助文本',
            description: '辅助说明的文本信息',
            docDescription: '拖拽位置的文字指引',
        })
        dragDescription: nasl.core.String = '点击/拖动/粘贴文件到这里';

        @Prop({
            group: '主要属性',
            title: '文件校验',
            description: '文件校验函数，可自定义校验规则，入文件名称包含特殊字符等，返回string类型的出错信息',
            docDescription: '文件校验函数，可自定义校验规则，入文件名称包含特殊字符等，返回string类型的出错信息',
        })
        checkFile: Function;

        @Prop({
            group: '主要属性',
            title: '文件访问策略',
            docDescription: '支持任何人可访问和用户登录后可访问两种方式',
            setter: {
                type: 'enumSelect',
                titles: ['任何人可访问', '用户登录后可访问'],
            },
        })
        access: 'public' | 'private';

        @Prop({
            group: '主要属性',
            title: '文件有效期',
            description: '是否开启文件有效期控制',
            docDescription: '支持配置文件自动清理，开启后可自定义上传后有效天数',
        })
        ttl: nasl.core.Boolean;

        @Prop<UUploaderOptions, 'ttlValue'>({
            group: '主要属性',
            title: '上传后有效天数',
            description: '文件上传后的有效期天数',
            docDescription: '开启文件有效期开关后显示，可配置文件自动清理的时间',
            if: _ => _.ttl === true,
        })
        ttlValue: nasl.core.Decimal;

        @Prop({
            group: '交互属性',
            title: '可拖拽',
            docDescription: '开启后支持拖拽上传文件，默认关闭',
        })
        draggable: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '只读',
            description: '正常显示，但禁止选择/输入',
            docDescription: '正常显示，但禁止选择或输入',
        })
        readonly: nasl.core.Boolean = false;

        @Prop({
            group: '状态属性',
            title: '禁用',
            description: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
            docDescription: '置灰显示，且禁止任何交互（焦点、点击、选择、输入等）',
        })
        disabled: nasl.core.Boolean = false;

        @Event({
            title: '上传前',
            description: '上传前触发',
        })
        onBeforeUpload: (event: nasl.ui.UploadEvent) => void;

        @Event({
            title: '进度改变时',
            description: '发送进度改变时触发，在上传进度条时使用',
        })
        onProgress: (event: nasl.ui.UploadEvent) => void;

        @Event({
            title: '文件数量超额',
            description: '文件数量超额时触发',
        })
        onCountExceed: (event: nasl.ui.UploadErrorEvent) => void;

        @Event({
            title: '文件大小超额',
            description: '文件大小超额时触发',
        })
        onSizeExceed: (event: nasl.ui.UploadErrorEvent) => void;

        @Event({
            title: '上传成功时',
            description: '上传成功时触发',
        })
        onSuccess: (event: nasl.ui.UploadEvent) => void;

        @Event({
            title: '上传错误时',
            description: '上传报错时触发',
        })
        onError: (event: nasl.ui.UploadErrorEvent) => void;

        @Event({
            title: '删除时',
            description: '点击删除按钮时触发',
        })
        onRemove: (event: nasl.ui.OperatorItemEvent) => void;

        @Slot({
            title: 'undefined',
            description: '插入文本 或 HTML。',
        })
        slotDefault: () => Array<VueComponent>;
    }
}
