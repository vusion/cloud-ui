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
        headers: Object,
        withCredentials: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        directory: { type: Boolean, default: false },
        data: Object,
        extensions: { type: [String, Array], default: '' },
        limit: { type: Number, default: Infinity },
        maxSize: { type: [String, Number], default: Infinity },
        listType: { type: String, default: 'text' },
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
        checkSize(file) {
            if (this.maxSize === Infinity)
                return true;

            let maxSize;
            if (!isNaN(this.maxSize))
                maxSize = +this.maxSize;
            else {
                const unit = this.maxSize.slice(-2);
                if (!SIZE_UNITS[unit])
                    throw new Error(`Unknown unit ${unit} in maxSize ${this.maxSize}!`);

                maxSize = this.maxSize.slice(0, -2) * SIZE_UNITS[unit];
            }

            return (file.size || 0) <= maxSize;
        },
        uploadFiles(files) {
            files = Array.from(files);
            if (!this.multiple)
                files = files.slice(0, 1);
            if (files.length === 0)
                return;

            const count = this.currentValue.length + files.length;
            if (count > this.limit) {
                this.$emit('count-exceed', {
                    files,
                    value: this.currentValue,
                    count,
                    limit: this.limit,
                    message: `文件数量${count}超出限制 ${this.limit}！`,
                }, this);
                return;
            }

            files.forEach((file) => {
                this.upload(file);
            });
        },
        upload(file) {
            if (this.$emitPrevent('before-upload', {
                file,
            }, this))
                return;

            if (!this.checkSize(file)) {
                this.$emit('size-exceed', {
                    maxSize: this.maxSize,
                    size: file.size,
                    message: `文件${file.name} ${file.size}超出大小${this.maxSize}！`,
                });
                return;
            }
            // check format
            // if (this.format.length) {
            //     const _file_format = file.name.split('.').pop().toLocaleLowerCase();
            //     const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);
            //     if (!checked) {
            //         this.onFormatError(file, this.fileList);
            //         return false;
            //     }
            // }

            const item = {
                uid: file.uid !== undefined ? file.uid : Date.now() + this.currentValue.length,
                status: 'uploading',
                name: file.name,
                size: file.size,
                percent: 0,
                showProgress: true,
            };

            if (this.listType === 'image' || this.listType === 'card')
                item.url = URL.createObjectURL(file);

            if (!this.multiple)
                this.currentValue.splice(0, this.currentValue.length);
            this.currentValue.push(item);

            if (this.autoUpload)
                this.post(file, item);
        },
        post(file, item) {
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
                    item.status = 'error';
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
        onPreview(item) {
            this.$emit('preview', {
                item,
            }, this);
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
            if (this.$emitPrevent('before-clear', { oldValue: this.currentValue }, this))
                return;

            this.currentValue.splice(0, this.currentValue.length);

            this.$emit('clear', { value: this.currentValue }, this);
        },
    },
};

export default UUploader;
