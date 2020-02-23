import { MEmitter } from '../m-emitter.vue';

import i18n from './i18n';
import ajax from './ajax';

const SIZE_UNITS = {
    kB: 1024,
    MB: Math.pow(1024, 2),
    GB: Math.pow(1024, 3),
    TB: Math.pow(1024, 4),
};

export const UUploader = {
    name: 'u-uploader',
    mixins: [MEmitter],
    i18n,
    props: {
        value: { type: Array, default: () => [] },
        url: { type: String, required: true },
        name: { type: String, default: 'file' },
        accept: String,
        headers: { type: Object, default: () => ({}) },
        multiple: { type: Boolean, default: false },
        directory: { type: Boolean, default: false },
        dataType: { type: String, default: 'json' },
        data: { type: Object, default: () => ({}) },
        extensions: { type: [String, Array], default: '' },
        maxSize: { type: [String, Number], default: Infinity },
        autoUpload: { type: Boolean, default: true },
        showFileList: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
            contentType: 'multipart/form-data',
            sending: false,
            file: {},
            iframeName: 'iframe-' + new Date().getTime(),
        };
    },
    watch: {
        value(value) {
            this.currentValue = this.value;
        },
        currentValue: {
            immediate: true,
            handler(currentValue, oldValue) {
                this.$emit('change', {
                    value: currentValue,
                    oldValue,
                }, this);
            },
        },
    },
    methods: {
        select() {
            if (this.disabled || this.sending)
                return;

            this.$refs.file.value = '';
            this.$refs.file.click();
        },
        onChange(e) {
            const fileEl = e.target;

            let files = fileEl.files;
            if (!files && fileEl.value) { // 老版浏览器不支持 files
                const arr = fileEl.value.split(/[\\/]/g);
                files = [{
                    name: arr[arr.length - 1],
                    size: 0,
                }];
            }

            if (!files)
                return;

            this.uploadFiles(files);
        },
        uploadFiles(files) {
            files = Array.from(files);
            if (!this.multiple)
                files = files.slice(0, 1);
            if (files.length === 0)
                return;

            files.forEach((file) => {
                this.upload(file);
            });
        },
        upload(file) {
            if (this.$emitPrevent('before-upload', {
                file,
            }, this))
                return;

            // check format
            // if (this.format.length) {
            //     const _file_format = file.name.split('.').pop().toLocaleLowerCase();
            //     const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);
            //     if (!checked) {
            //         this.onFormatError(file, this.fileList);
            //         return false;
            //     }
            // }

            // check maxSize
            // if (this.maxSize) {
            //     if (file.size > this.maxSize * 1024) {
            //         this.onExceededSize(file, this.fileList);
            //         return false;
            //     }
            // }

            if (this.autoUpload) {
                this.post(file);
            }
        },
        post(file) {
            const item = {
                uid: file.uid !== undefined ? file.uid : Date.now() + this.currentValue.length,
                status: 'uploading',
                name: file.name,
                size: file.size,
                percent: 0,
                showProgress: true,
            };
            if (!this.multiple)
                this.currentValue.splice(0, this.currentValue.length);
            this.currentValue.push(item);

            const xhr = ajax({
                url: this.url,
                headers: this.headers,
                withCredentials: this.withCredentials,
                file,
                data: this.data,
                filename: this.name,
                onProgress: (e) => {
                    item.percent = e.percent;

                    this.$emit('progress', {
                        e, file, item, xhr,
                    }, this);
                },
                onSuccess: (res) => {
                    item.status = 'success';
                    item.response = res;

                    this.$emit('success', {
                        res,
                        file,
                        item,
                        xhr,
                    }, this);
                    setTimeout(() => {
                        item.showProgress = false;
                    }, 1000);
                },
                onError: (e, res) => {
                    // const fileList = this.fileList;
                    item.status = 'error';
                    // fileList.splice(fileList.indexOf(_file), 1);
                    this.$emit('error', {
                        e,
                        res,
                        file,
                        item,
                        xhr,
                    }, this);
                },
            });
        },
        /**
         * @method checkExtensions(file) 检查扩展名
         * @private
         * @param  {File} file 文件对象
         * @return {boolean} 返回是否通过验证
         */
        checkExtensions(file) {
            if (!this.extensions)
                return true;

            const fileName = file.name;
            const extName = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();

            let extensions = this.extensions;
            if (typeof extensions === 'string')
                extensions = extensions.split(',');

            if (extensions.includes(extName))
                return true;

            /**
             * @event error 上传错误时触发
             * @property {object} name ExtensionError
             * @property {object} message 错误信息
             * @property {object} extensions 可上传的扩展名
             */
            this.$emit('error', {
                name: 'ExtensionError',
                message: this.$t('extensionError', { extensions: extensions.join(', ') }),
                extensions,
            }, this);

            return false;
        },
        /**
         * @method checkSize(file) 检查文件大小
         * @private
         * @param  {File} file 文件对象
         * @return {boolean} 返回是否通过验证
         */
        checkSize(file) {
            if (this.maxSize === Infinity)
                return true;

            let maxSize;
            if (!isNaN(this.maxSize))
                maxSize = +this.maxSize;
            else {
                const unit = this.maxSize.slice(-2);
                if (!SIZE_UNITS[unit])
                    throw new Error('Unknown unit!');

                maxSize = this.maxSize.slice(0, -2) * SIZE_UNITS[unit];
            }

            if (file.size <= maxSize)
                return true;

            /**
             * @event error 上传错误时触发
             * @property {object} name SizeError
             * @property {object} message 错误信息
             * @property {object} maxSize 可上传的最大文件大小
             * @property {object} size 当前文件大小
             */
            this.$emit('error', {
                name: 'SizeError',
                message: '文件大小超出限制！',
                maxSize: this.maxSize,
                size: file.size,
            }, this);

            return false;
        },
        // submit() {
        //     // if (!file || !file.name || !this.checkExtensions(file) || !this.checkSize(file))
        //     //     return;

        //     const fileName = file.name;
        //     this.file = {
        //         name: fileName,
        //         extName: fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase() : undefined,
        //         size: file.size,
        //     };

        //     if (typeof FormData === 'undefined') { // IE9 不支持 XHR2 相关功能
        //         let cancel = false;
        //         this.$emit('before-send', {
        //             data: this.data,
        //             file,
        //             files,
        //             preventDefault: () => cancel = true,
        //         }, this);
        //         if (cancel)
        //             return;

        //         this.sending = true;
        //         this.$refs.form.submit();
        //     } else {
        //         const formData = new FormData(this.$refs.form);

        //         xhr.onreadystatechange = () => {
        //             if (xhr.readyState === 4) {
        //                 if (xhr.status === 200)
        //                     this.onLoad(xhr.responseText, xhr.responseXML);
        //                 else {
        //                     if (!this.sending)
        //                         return;
        //                     this.sending = false;
        //                     this.file = null;
        //                     this.$emit('error', {
        //                         name: 'ResponseError',
        //                         message: 'No responseText!',
        //                         xhr,
        //                     }, this);
        //                 }
        //             }
        //         };

        //         /**
        //          * @event sending 发送前触发
        //          * @property {object} data 待发送的数据
        //          */
        //         let cancel = false;
        //         this.$emit('before-send', {
        //             data: this.data,
        //             file,
        //             files: this.$refs.file.files,
        //             xhr,
        //             formData,
        //             preventDefault: () => cancel = true,
        //         }, this);
        //         if (cancel)
        //             return;

        //         this.sending = true;
        //         xhr.send(formData);
        //     }

        //     this.$emit('send', {
        //         data: this.data,
        //         file,
        //         files: this.$refs.file.files,
        //     }, this);
        // },
        /**
         * @method onLoad() 接收数据回调
         * @private
         * @return {void}
         */
        onLoad(responseText, responseXML) {
            const $iframe = this.$refs.iframe;
            const file = this.file;

            if (!this.sending)
                return;
            this.sending = false;
            this.file = null;

            const xml = {};

            if (!!responseText || !!responseXML) {
                // ajax上传时数据处理
                xml.responseText = responseText;
                xml.responseXML = responseXML;
            } else {
                if ($iframe.contentWindow) {
                    xml.responseText = $iframe.contentWindow.document.body ? $iframe.contentWindow.document.body.innerText : null;
                    xml.responseXML = $iframe.contentWindow.document.XMLDocument ? $iframe.contentWindow.document.XMLDocument : $iframe.contentWindow.document;
                } else if ($iframe.contentDocument) {
                    xml.responseText = $iframe.contentDocument.document.body ? $iframe.contentDocument.document.body.innerText : null;
                    xml.responseXML = $iframe.contentDocument.document.XMLDocument ? $iframe.contentDocument.document.XMLDocument : $iframe.contentDocument.document;
                }
            }

            if (!xml.responseText) {
                /**
                 * @event error 上传错误时触发
                 * @property {object} name ResponseError
                 * @property {object} message 错误信息
                 */
                return this.$emit('error', {
                    name: 'ResponseError',
                    message: 'No responseText!',
                    xml,
                }, this);
            }

            /**
             * @event complete 上传完成时触发
             * @property {object} xml 返回的xml
             */
            this.$emit('complete', {
                xml,
            }, this);

            /**
             * @event success 上传成功时触发
             * @property {object} data 返回的数据
             */
            this.$emit('success', {
                data: this.parseData(xml, this.dataType),
                file,
                xml,
            }, this);
        },
        /**
         * @method parseData(xml, type) 解析接收的数据
         * @private
         * @param  {object} xml 接收的xml
         * @param  {object} type 数据类型
         * @return {object|string} 解析后的数据
         */
        parseData(xml, type) {
            if (type === 'text')
                return xml.responseText;
            else if (type === 'xml')
                return xml.responseXML;
            else if (type === 'json') {
                let data = xml.responseText;
                try {
                    data = JSON.parse(data);
                } catch (e) { }

                return data;
                // danger，暂时不开启
                // } else if (type === 'script')
                //     return eval(xml.responseText);
            } else
                return xml.responseText;
        },
        remove(index) {
            const item = this.currentValue[index];
            if (!item)
                return;

            if (this.$emitPrevent('before-remove', {
                oldValue: this.currentValue,
                item,
                index,
            }, this))
                return;

            this.currentValue.splice(index, 1);

            this.$emit('remove', {
                value: this.currentValue,
                item,
                index,
            }, this);
        },
        clear() {
            const oldValue = this.currentValue;
            const value = [];

            if (this.$emitPrevent('before-clear', { oldValue, value }, this))
                return;

            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);

            this.$emit('clear', { oldValue, value }, this);
        },
    },
};

export default UUploader;
