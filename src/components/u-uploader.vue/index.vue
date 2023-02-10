<template>
<div :class="$style.root">
    <div v-if="draggable && !readonly" :class="$style.draggable" :dragover="dragover" @click="select()"
        :tabindex="readonly || disabled ? '' : 0"
        @drop.prevent="onDrop"
        @paste="onPaste"
        @dragover.prevent="dragover = true"
        @dragleave.prevent="dragover = false">
        <input :class="$style.file" ref="file" type="file" :name="name" :accept="accept" :multiple="multiple" :readonly="readonly" :disabled="disabled" @click.stop @change="onChange">
        <div>
            <div v-if="dragDescription" vusion-slot-name="dragDescription" :class="$style.dragDescription"><slot name="dragDescription">{{ dragDescription }}</slot></div>
            <slot></slot>
        </div>
    </div>
    <div v-else-if="listType !== 'card' && !readonly" :class="$style.select" @click="select()"
        vusion-slot-name="default"
        :vusion-empty-background="$env.VUE_APP_DESIGNER && !$slots.default ? 'add-any' : false">
        <input :class="$style.file" ref="file" type="file" :name="name" :accept="accept" :multiple="multiple" :readonly="readonly" :disabled="disabled" @click.stop @change="onChange">
        <slot></slot>
    </div>
    <template v-if="listType !== 'card'">
        <div v-if="description" :class="$style.description">{{ description }}</div>
        <f-scroll-view trigger="hover" v-if="showErrorMessage && errorMessage.length">
            <div :class="$style.errwrap">
                <div v-for="errItem in errorMessage" :key="errItem" :class="$style.errmessage">{{ errItem }}</div>
            </div>
        </f-scroll-view>
    </template>
    <div :class="$style.list" v-if="showFileList" :list-type="listType">
        <template v-if="listType !== 'card'">
            <div :class="$style.item" v-for="(item, index) in currentValue" :key="index">
                <div :class="$style.thumb"><img :class="$style.img" v-if="listType === 'image'" :src="getUrl(item)"></div>
                <a :class="$style.link" :href="item.url" target="_blank">{{ item.name }}</a>
                <!-- <span v-if="!readonly && !disabled" :class="$style.remove" @click="remove(index)"></span> -->
                <i-ico name="remove" v-if="!readonly && !disabled" :class="$style.remove" @click="remove(index)"></i-ico>
                <u-linear-progress v-if="item.showProgress" :class="$style.progress" :percent="item.percent"></u-linear-progress>
            </div>
        </template>
        <template v-else>
            <div :class="$style.card" v-for="(item, index) in currentValue" :key="index" @click="!multiple && !readonly && select()">
                <div :class="$style.thumb"><img :class="$style.img" :src="getUrl(item)"></div>
                <div :class="$style.mask" :multiple="multiple || readonly" :show-progress="item.showProgress">
                    <u-linear-progress v-if="item.showProgress" :class="$style.progress" :percent="item.percent"></u-linear-progress>
                    <div :class="$style.buttons">
                        <span v-if="!readonly && !disabled" :class="$style.button" role="remove" @click.stop="remove(index)"></span>
                        <span :class="$style.button" role="preview" @click="onPreview(item, index)"></span>
                        <a v-if="downLoadFilename" :class="$style.button" :href="item.url" target="_blank" role="download" :download="downLoadFilename"></a>
                        <a v-else :class="$style.button" :href="item.url" target="_blank" role="download"></a>
                    </div>
                </div>
            </div>
            <div :class="$style.cardwrap" v-if="uploadEnable && !draggable && (!readonly || $env.VUE_APP_DESIGNER)">
                <div :class="$style.card" role="select" @click="select()">
                    <input :class="$style.file" ref="file" type="file" :name="name" :accept="accept" :multiple="multiple" :readonly="readonly" :disabled="disabled" @click.stop @change="onChange">
                </div>
                <div v-if="description" :class="$style.description">{{ description }}</div>
                <f-scroll-view trigger="hover" v-if="showErrorMessage && errorMessage.length">
                    <div :class="$style.errwrap">
                        <div v-for="errItem in errorMessage" :key="errItem" :class="$style.errmessage">{{ errItem }}</div>
                    </div>
                </f-scroll-view>
            </div>
        </template>
    </div>
    <u-lightbox :visible.sync="lightboxVisible" :value="currentIndex" animation="fade">
        <u-lightbox-item v-for="(item, index) in currentValue" :key="index" :value="index" :title="item.name"><img :src="item.url || item"></u-lightbox-item>
    </u-lightbox>
    <cropper
        v-if="openCropper"
        :cropFileName="cropFileName"
        :cropImg="cropImg"
        :cropConfig="cropConfig"
        :modal-visible="modalVisible"
        @uploadFiles="uploadCropperImg"
    >
    </cropper>
</div>
</template>

<script>
import MField from '../m-field.vue';
import i18n from './i18n';
import ajax from './ajax';
import cropper from './cropper';

const SIZE_UNITS = {
    kB: 1024,
    KB: 1024, // 兼容KB单位
    MB: Math.pow(1024, 2),
    GB: Math.pow(1024, 3),
    TB: Math.pow(1024, 4),
};

export default {
    name: 'u-uploader',
    mixins: [MField],
    i18n,
    components: { cropper },
    props: {
        value: [Array, String],
        url: { type: String, required: true },
        name: { type: String, default: 'file' },
        accept: String,
        headers: Object,
        withCredentials: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        multipleOnce: { type: Boolean, default: false },
        directory: { type: Boolean, default: false },
        data: Object,
        limit: { type: Number, default: Infinity },
        maxSize: { type: [String, Number], default: Infinity },
        listType: { type: String, default: 'text' },
        urlField: { type: String, default: 'url' },
        autoUpload: { type: Boolean, default: true },
        draggable: { type: Boolean, default: false },
        pastable: { type: Boolean, default: false },
        showFileList: { type: Boolean, default: true },
        converter: String,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        dragDescription: {
            type: String,
            default() {
                return '点击/拖动/粘贴文件到这里';
            },
        },
        description: String, // 上传限制描述等
        showErrorMessage: { type: Boolean, default: true },
        checkFile: [Function],
        downLoadFilename: String,
        authorization: { type: Boolean, default: true },
        access: { type: String, default: null },
        ttl: { type: Boolean, default: null },
        ttlValue: { type: Number, default: null },
        openCropper: { type: Boolean, default: false },
        fixedCropper: { type: Boolean, default: false },
        cropperBoxWidth: { type: Number, default: 200 },
        cropperBoxHeight: { type: Number, default: 200 },
        cropperTitle: { type: String, default: '图片裁剪' },
        cropperPreviewShape: { type: String, default: 'circle' },
    },
    data() {
        return {
            currentValue: this.fromValue(this.value),
            contentType: 'multipart/form-data',
            sending: false,
            file: {},
            iframeName: 'iframe-' + new Date().getTime(),
            dragover: false,
            lightboxVisible: false,
            currentIndex: 0,
            errorMessage: [],
            cropImg: undefined,
            modalVisible: false,
            cropFileName: undefined,
            cropConfig: {
                fixed: this.fixedCropper,
                boxWidth: this.cropperBoxWidth,
                boxHeight: this.cropperBoxHeight,
                title: this.cropperTitle,
                previewShape: this.cropperPreviewShape,
            },
        };
    },
    computed: {
        uploadEnable() {
            return this.multiple ? this.currentValue.length < this.limit : this.currentValue.length === 0;
        },
    },
    watch: {
        value(value) {
            this.currentValue = this.fromValue(value);
        },
        currentValue: {
            handler(currentValue, oldValue) {
                const value = this.toValue(currentValue);
                this.$emit('input', value);
                this.$emit('update:value', value);
                this.$emit('change', {
                    value,
                    oldValue: this.toValue(oldValue),
                }, this);
            },
        },
    },
    methods: {
        fromValue(value) {
            if (this.converter === 'json')
                try {
                    return JSON.parse(value || '[]');
                } catch (err) {
                    return [];
                }
            else if (this.converter === 'simple')
                try {
                    if (!value) {
                        const noFinished = (this.currentValue || []).some((item) => item.status === 'uploading');
                        return noFinished && this.currentValue || [];
                    }
                    const values = value.split(',');
                    const currentValue = this.currentValue || [];
                    currentValue.forEach((item, index) => {
                        item.url = values[index];
                    });
                    return currentValue;
                } catch (err) {
                    return [];
                }
            else
                return value || [];
        },
        toValue(value) {
            if (this.converter === 'json')
                // fix for u-validator rules="required"
                return Array.isArray(value) && value.length === 0 ? null : JSON.stringify(value);
            if (this.converter === 'simple')
                return Array.isArray(value) && value.length === 0 ? null : (this.simpleConvert(value));
            else
                return value;
        },
        simpleConvert(value) {
            return value.map((x) => (x.url || '')).join(',');
        },
        getUrl(item) {
            return item.thumb || item.url || item;
        },
        select() {
            if (this.readonly || this.disabled || this.sending)
                return;

            this.$refs.file.value = '';
            this.$refs.file.click();
        },
        onChange(e) {
            this.modalVisible = false
            const fileEl = e.target;

            let files = fileEl.files;
            // console.log(files);
            if (!files && fileEl.value) { // 老版浏览器不支持 files
                const arr = fileEl.value.split(/[\\/]/g);
                files = [{
                    name: arr[arr.length - 1],
                    size: 0,
                }];
            }

            if (!files)
                return;
            // 处理开启图片编辑器
            if (this.openCropper) {
                this.$nextTick(()=>{
                    this.modalVisible = true;
                })
                const cropFile = fileEl.files[0];
                this.cropFileName = cropFile.name;
                let reader = new FileReader();
                reader.readAsArrayBuffer(cropFile);
                reader.onload = e => {
                    let data;
                    if (typeof e.target.result === "object") {
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]));
                    } else {
                        data = e.target.result;
                    }
                    this.cropImg = data;
                    // this.currentValue = []
                };
                return;
            }
            this.uploadFiles(files);
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
        async uploadFiles(files) {
            files = Array.from(files);
            if (!this.multiple)
                files = files.slice(0, 1);
            if (files.length === 0)
                return;

            this.errorMessage = [];

            const count = this.currentValue.length + files.length;
            if (count > this.limit) {
                this.errorMessage[0] = `文件数量${count}超出限制 ${this.limit}！`;
                this.$emit('count-exceed', {
                    files,
                    value: this.currentValue,
                    count,
                    limit: this.limit,
                    message: this.errorMessage[0],
                }, this);
                return;
            }
            files = await this.checkFiles(files);

            if (!this.multipleOnce) {
                files.map((file) => this.upload(file));
            } else {
                this.uploadOnce(files);
            }
        },
        uploadCropperImg(obj) {
            this.currentValue.push({
                name: obj.name,
                url: obj.data,
                status: 'uploading',
                progress: 100,
            });
            const file = new window.File([obj.blob], obj.name, {type: 'image/jpeg'} );
            this.uploadFiles([file]);
        },
        /**
         * 单文件上传
         */
        upload(file) {
            if (this.$emitPrevent('before-upload', {
                file,
            }, this))
                return null;

            // if (!this.checkSize(file)) {
            //     this.errorMessage = `文件${file.name} ${file.size}超出大小${this.maxSize}！`;
            //     this.$emit('size-exceed', {
            //         maxSize: this.maxSize,
            //         size: file.size,
            //         message: this.errorMessage,
            //     });
            //     return null;
            // } else {
            //     this.errorMessage = '';
            // }
            // check format
            // if (this.format.length) {
            //     const _file_format = file.name.split('.').pop().toLocaleLowerCase();
            //     const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);
            //     if (!checked) {
            //         this.onFormatError(file, this.fileList);
            //         return null;
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
                this.post(file, item, this.currentValue.length - 1);

            return item;
        },
        /**
         * multipleOnce 的场景
         */
        uploadOnce(files) {
            if (this.$emitPrevent('before-upload', {
                files,
            }, this))
                return null;

            // if (!this.checkSize(file)) {
            //     this.$emit('size-exceed', {
            //         maxSize: this.maxSize,
            //         size: file.size,
            //         message: `文件${file.name} ${file.size}超出大小${this.maxSize}！`,
            //     });
            //     return null;
            // }
            // check format
            // if (this.format.length) {
            //     const _file_format = file.name.split('.').pop().toLocaleLowerCase();
            //     const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);
            //     if (!checked) {
            //         this.onFormatError(file, this.fileList);
            //         return null;
            //     }
            // }

            if (!files || !files.length)
                return;

            const file = files[0];
            const item = {
                uid: file.uid !== undefined ? file.uid : Date.now() + this.currentValue.length,
                status: 'uploading',
                name: files.map((file) => file.name).join(','),
                size: files.reduce((acc, file) => acc + file.size, 0),
                percent: 0,
                showProgress: true,
            };

            if (this.listType === 'image' || this.listType === 'card')
                item.url = URL.createObjectURL(file);

            if (!this.multiple)
                this.currentValue.splice(0, this.currentValue.length);
            this.currentValue.push(item);

            if (this.autoUpload)
                this.post(files, item, this.currentValue.length - 1);

            return item;
        },
        post(file, item, index) {
            let Authorization = null;
            if (this.authorization) {
                Authorization = this.getCookie('authorization') || null;
            }
            const headers = {
                ...this.headers,
                Authorization,
            };
            if (this.access !== null) {
                headers['lcap-access'] = this.access;
            }
            if (this.ttlValue !== null) {
                if (this.ttl !== null) {
                    headers['lcap-ttl'] = this.ttl ? this.ttlValue : -1;
                } else {
                    headers['lcap-ttl'] = this.ttlValue;
                }
            }

            const xhr = ajax({
                url: this.url,
                headers,
                withCredentials: this.withCredentials,
                file,
                data: this.data,
                name: this.name,
                onProgress: (e) => {
                    const item = this.currentValue[index];
                    item.percent = e.percent;

                    this.$emit('progress', {
                        e, file, item, xhr,
                    }, this);
                },
                onSuccess: (res) => {
                    const item = this.currentValue[index];
                    item.status = 'success';
                    if (res[this.urlField]) {
                        const url = res[this.urlField];
                        item.url = url;
                        if (Array.isArray(url)) {
                            item.url = url.join(',');
                        }
                    }
                    item.response = res;
                    item.showProgress = false;

                    // 一次上传多个文件，返回数据是数组，需要处理
                    if (res[this.urlField]) {
                        const url = res[this.urlField];
                        if (Array.isArray(url)) {
                            this.currentValue.splice(this.currentValue.length - 1, 1);
                            url.forEach((urlTemp, urlIndex) => {
                                const urlItem = {
                                    status: 'success',
                                    name: file[urlIndex].name,
                                    size: file[urlIndex].size,
                                    showProgress: false,
                                    url: urlTemp,
                                };
                                this.currentValue.push(urlItem);
                            });
                        }
                    }

                    const value = this.toValue(this.currentValue);
                    this.$emit('input', value);
                    this.$emit('update:value', value);

                    this.$emit('success', {
                        res,
                        file,
                        item,
                        xhr,
                    }, this);
                },
                onError: (e, res) => {
                    const item = this.currentValue[index];
                    item.status = 'error';

                    const value = this.toValue(this.currentValue);
                    this.$emit('input', value);
                    this.$emit('update:value', value);
                    const errorMessage = `文件${item.name}上传接口调用失败`;
                    this.errorMessage.push(errorMessage);

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
        onPreview(item, index) {
            if (this.$emitPrevent('before-preview', {
                item,
                index,
            }, this))
                return;

            this.lightboxVisible = true;
            this.currentIndex = index;

            this.$emit('preview', {
                item,
                index,
            }, this);
        },
        remove(index) {
            const item = this.currentValue[index];
            if (!item)
                return;
            this.modalVisible = false;

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
        onDrop(e) {
            this.dragover = false;
            if (this.readonly || this.disabled)
                return;

            this.uploadFiles(e.dataTransfer.files);
        },
        onPaste(e) {
            if (this.readonly || this.disabled)
                return;
            if (this.pastable)
                this.uploadFiles(e.clipboardData.files);
        },
        /**
         * 验证文件：包括文件大小，用户自定义验证函数调用
         */
        async checkFiles(files) {
            const validFiles = [];
            const tasks = files.map(async (file) => {
                if (!this.checkSize(file)) {
                    const errorMessage = `文件${file.name} ${file.size}超出大小${this.maxSize}！`;
                    this.$emit('size-exceed', {
                        maxSize: this.maxSize,
                        size: file.size,
                        message: errorMessage,
                        name: file.name,
                        file,
                    });
                    this.errorMessage.push(errorMessage);
                    return null;
                }
                if (this.accept) {
                    const extension = (file.name.indexOf('.') > -1 ? `.${file.name.split('.').pop()}` : '').toLowerCase();
                    const type = file.type.toLowerCase();
                    const baseType = type.replace(/\/.*$/, '').toLowerCase();
                    const accept = this.accept.split(',')
                        .map((type) => type.trim())
                        .filter((type) => type)
                        .some((acceptedType) => {
                            acceptedType = acceptedType.toLowerCase();
                            if (/^\..+$/.test(acceptedType)) {
                                return extension.toLowerCase() === acceptedType;
                            }
                            if (/\/\*$/.test(acceptedType)) {
                                return baseType === acceptedType.replace(/\/\*$/, '');
                            }
                            if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
                                return type === acceptedType;
                            }
                            return false;
                        });
                    if (!accept) {
                        this.errorMessage.push('文件类型不匹配，请上传' + this.accept + '的文件类型');
                        return null;
                    }
                }
                if (this.checkFile && (this.checkFile instanceof Promise || typeof this.checkFile === 'function')) {
                    const message = await this.checkFile(file);
                    if (message) {
                        this.$emit('check-file', {
                            file,
                            message,
                            name: file.name,
                        });
                        this.errorMessage.push(message);
                        return null;
                    }
                }
                validFiles.push(file);
            });
            await Promise.all(tasks);
            return validFiles;
        },
        getCookie(cname) {
            const name = `${cname}=`;
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                const c = ca[i].trim();
                if (c.indexOf(name) === 0)
                    return c.substring(name.length, c.length);
            }
            return '';
        },
    },
};
</script>

<style module>
.root {
    display: block;
    position: relative;
}

.root[display="inline"] {
    display: inline-block;
    max-width: var(--uploader-root-inline-max-width);
}

.select {
    display: inline-block;
    position: relative;
    overflow: hidden\0;
}

.full {
    width: 100%;
}

.file {
    display: none;
    display: block\0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: var(--cursor-pointer);
    z-index: -1\0;
}

.file[readonly], .file[disabled] {
    display: none;
}

.item {
    cursor: default;
    margin-top: var(--uploader-list-margin-top);
    padding: var(--uploader-item-padding);
    background: var(--uploader-item-background);
    border-radius: var(--uploader-item-border-radius);
    transition: all var(--transition-duration-base);
}

.thumb {
    display: inline-block;
    vertical-align: middle;
}
.img {
    max-width: 100%;
    max-height: 100%;
}

.list {
    /* min-width: 400px; */
}

.list[list-type="text"] .thumb::before {
    icon-font: url('./assets/attachment.svg');
    float: left;
    margin-right: 8px;
    color: var(--uploader-item-icon-color);
}

.list[list-type="image"] .item {
    border: 1px solid var(--uploader-border-color);
    margin-top: var(--uploader-list-image-margin-top);
}

.list[list-type="image"] .thumb {
    display: inline-block;
    width: 48px;
    height: 48px;
    overflow: hidden;
    margin-right: 4px;
}

.item + .item {
    margin-top: var(--uploader-item-space);
}

.item:hover {
    background: var(--uploader-item-background-hover);
}

.link {
    color: var(--uploader-link-color);
    cursor: var(--cursor-pointer);
    width: calc(100% - 50px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
}

.list[list-type="image"] .link {
    width: calc(100% - 75px);
}

.item:hover .link {
    color: var(--uploader-link-color-hover);
}

.link:hover {
    text-decoration: underline;
}

.remove {
    display: none;
    float: right;
    line-height: 1;
    font-size: 14px;
    margin-top: 4px;
    cursor: var(--cursor-pointer);
    opacity: 0.5;
    margin-right: 5px;
}

.item:hover .remove {
    display: block;
}

.remove:hover {
    opacity: 1;
}

/* .remove::before {
    icon-font: url('../i-icon.vue/assets/close.svg');
} */

.list[list-type="image"] .remove {
    margin-top: 18px;
}

.list[list-type="card"] {
    margin: calc(var(--uploader-card-space) / (-2));
}

.cardwrap{
    position: relative;
    display: inline-block;
}

.card {
    position: relative;
    display: inline-block;
    width: var(--uploader-card-width);
    height: var(--uploader-card-height);
    border: 1px solid var(--border-color-base);
    border-radius: var(--uploader-card-border-radius);
    margin: calc(var(--uploader-card-space) / 2);
    vertical-align: top;
    overflow: hidden;
}

.card[role="select"] {
    cursor: var(--cursor-pointer);
    text-align: center;
    line-height: var(--uploader-card-width);
    border-style: dashed;
    transition: all var(--transition-duration-base);
    background: var(--uploader-card-background);
    vertical-align: bottom;
}

.card[role="select"]::before {
    color: var(--uploader-border-color);
    icon-font: url('./assets/add.svg');
    font-size: var(--uploader-card-icon-font-size);
}

.card[role="select"]:hover {
    border-color: var(--brand-primary);
}
.card[role="select"]:hover::before{
    color: var(--brand-primary);
}

.card:not(:last-child) {
    margin-right: var(--uploader-card-space);
}

.mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--uploader-mask-background);
    opacity: 0;
    transition: opacity var(--transition-duration-slow);
}

.mask:hover, .mask[show-progress] {
    opacity: 1;
}

.card .progress {
    position: absolute;
    top: 65%;
    width: 72%;
    left: 14%;
}

.card .progress > div[class^="u-linear-progress_track__"] {
    background: rgba(0, 0, 0, 0.5);
    height: 6px;
    border-radius: 100px;
}

.buttons {
    position: absolute;
    font-size: var(--uploader-card-button-font-size);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.button {
    cursor: var(--cursor-pointer);
    color: rgba(255, 255, 255, 0.6);
}

.button + .button {
    margin-left: 8px;
}

.button:hover {
    color: white;
}

.button[role="preview"]::before {
    icon-font: url('./assets/eye.svg');
}

.button[role="download"]::before {
    icon-font: url('./assets/download.svg');
}

.button[role="remove"]::before {
    icon-font: url('./assets/trashcan.svg');
}

.draggable {
    overflow: hidden;
    cursor: var(--cursor-pointer);
    text-align: center;
    background: var(--uploader-draggable-background);
    border: var(--uploader-draggable-border-width) dashed var(--uploader-draggable-border-color);
    border-radius: var(--uploader-draggable-border-radius);
    padding: var(--uploader-draggable-padding);
    transition: all var(--transition-duration-base);
}

.draggable:focus,
.draggable:hover,
.draggable[dragover] {
    outline: none;
    border-color: var(--uploader-draggable-border-color-hover);
}

.draggable::before {
    font-size: 24px;
    icon-font: url('./assets/upload.svg');
    color: var(--uploader-draggable-icon-color);
}
.draggable:focus::before,
.draggable[dragover]::before{
    color: var(--uploader-draggable-color-hover);
}

.dragDescription{
    margin-bottom: 10px;
    color: var(--uploader-draggable-color);
}
.errwrap {
    max-height: var(--uploader-error-box-height);
    padding: 0 5px 5px 0;
}

.errmessage {
    display: block;
    white-space: var(--validator-message-white-space);
    color: #F24957;
    border-radius: var(--validator-message-border-radius);
    min-width: var(--validator-message-min-width);
    margin: 4px 0;
    font-size: 12px;
}
.errmessage::before {
    icon-font: url('../i-icon.vue/assets/warning.svg');
    font-size: 12px;
    margin-left: 1px;
    margin-right: 4px;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0) 48%);
}

.description {
    color: var(--uploader-color);
    margin: 4px 0;
    font-size: 12px;
}
.cardwrap .description,
.cardwrap .errmessage {
    margin-left: var(--uploader-card-space);
}
.cardwrap .errwrap {
    max-width: var(--uploader-error-box-max-width);
}

</style>
