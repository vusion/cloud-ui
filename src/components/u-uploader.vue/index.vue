<template>
<div :class="$style.root">
    <input :class="$style.file" ref="file" type="file" :name="name" :accept="accept" :multiple="multiple" @change="onChange">
    <div v-if="draggable" :class="$style.draggable" :dragover="dragover" @click="select()"
        @drop.prevent="onDrop"
        @paste="onPaste"
        @dragover.prevent="dragover = true"
        @dragleave.prevent="dragover = false">
        <div><slot>点击或者拖动文件到虚线框内上传</slot></div>
    </div>
    <div v-else-if="listType !== 'card'" :class="$style.select" @click="select()">
        <slot></slot>
    </div>
    <div :class="$style.list" v-if="showFileList" :list-type="listType">
        <template v-if="listType !== 'card'">
            <div :class="$style.item" v-for="(item, index) in currentValue" :key="index">
                <div :class="$style.thumb"><img :class="$style.img" v-if="listType === 'image'" :src="item.thumb || item.url"></div>
                <a :class="$style.link" :href="item.url" target="_blank">{{ item.name }}</a>
                <span :class="$style.remove" @click="remove(index)"></span>
                <u-linear-progress v-if="item.showProgress" :class="$style.progress" :percent="item.percent"></u-linear-progress>
            </div>
        </template>
        <template v-else>
            <div :class="$style.card" v-for="(item, index) in currentValue" :key="index" @click="!multiple && select()">
                <div :class="$style.thumb"><img :class="$style.img" :src="item.thumb || item.url"></div>
                <div :class="$style.mask" :multiple="multiple" :show-progress="item.showProgress">
                    <u-linear-progress v-if="item.showProgress" :class="$style.progress" :percent="item.percent"></u-linear-progress>
                    <div v-show="multiple" :class="$style.buttons">
                        <span :class="$style.button" role="preview" @click="onPreview(item)"></span>
                        <a :class="$style.button" :href="item.url" target="_blank" role="download"></a>
                        <span :class="$style.button" role="remove" @click="remove(index)"></span>
                    </div>
                </div>
            </div>
            <div v-if="multiple || currentValue.length === 0" :class="$style.card" role="select" @click="select()"></div>
        </template>
    </div>
</div>
</template>

<script>
import { MEmitter } from '../m-emitter.vue';

import i18n from './i18n';
import ajax from './ajax';

const SIZE_UNITS = {
    kB: 1024,
    MB: Math.pow(1024, 2),
    GB: Math.pow(1024, 3),
    TB: Math.pow(1024, 4),
};

export default {
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
        limit: { type: Number, default: Infinity },
        maxSize: { type: [String, Number], default: Infinity },
        listType: { type: String, default: 'text' },
        autoUpload: { type: Boolean, default: true },
        draggable: { type: Boolean, default: false },
        paste: { type: Boolean, default: false },
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
            dragover: false,
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
        onDrop(e) {
            this.dragover = false;
            if (this.disabled)
                return;

            this.uploadFiles(e.dataTransfer.files);
        },
        onPaste(e) {
            if (this.disabled)
                return;
            if (this.paste)
                this.uploadFiles(e.clipboardData.files);
        },
    },
};
</script>

<style module>
.root {
    display: block;
}

.select {
    display: inline-block;
}

.iframe, .form {
    display: none;
}

/* For IE9 */
/* stylelint-disable no-duplicate-selectors */
.root {
    position: relative\0;
    overflow: hidden\0;
}

.form {
    display: block\0;
}

.file {
    position: absolute;
    top: 0;
    right: -5px;
    font-size: 100px;
    opacity: 0;
    cursor: var(--cursor-pointer);
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

.list[list-type="text"] .thumb::before {
    icon-font: url('./assets/attachment.svg');
    float: left;
    margin-right: 3px;
    color: var(--uploader-item-icon-color);
}

.list[list-type="image"] .item {
    border: 1px solid var(--border-color-base);
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
    font-size: 16px;
    margin-top: 4px;
    cursor: var(--cursor-pointer);
    opacity: 0.5;
}

.item:hover .remove {
    display: block;
}

.remove:hover {
    opacity: 1;
}

.remove::before {
    icon-font: url('../i-icon.vue/assets/close.svg');
}

.list[list-type="image"] .remove {
    margin-top: 2px;
}

.list[list-type="card"] {
    margin: calc(var(--uploader-card-space) / (-2));
}

.card {
    position: relative;
    display: inline-block;
    width: 128px;
    height: 128px;
    border: 1px solid var(--border-color-base);
    border-radius: var(--uploader-card-border-radius);
    margin: calc(var(--uploader-card-space) / 2);
    vertical-align: top;
    overflow: hidden;
}

.card[role="select"] {
    cursor: var(--cursor-pointer);
    text-align: center;
    line-height: 128px;
    border-style: dashed;
    transition: all var(--transition-duration-base);
    background: var(--background-color-lighter);
    vertical-align: bottom;
}

.card[role="select"]::before {
    color: var(--border-color-base);
    icon-font: url('./assets/add.svg');
    font-size: 42px;
}

.card[role="select"]:hover {
    border-color: var(--brand-primary);
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

.mask:not([multiple]) {
    cursor: var(--cursor-pointer);
    text-align: center;
    line-height: 128px;
}

.mask:not([multiple])::before {
    color: rgba(255, 255, 255, 0.6);
    icon-font: url('./assets/add.svg');
    font-size: 42px;
}

.card .progress {
    position: absolute;
    top: 65%;
    width: 72%;
    left: 14%;
}

.card .progress > div {
    background: rgba(0, 0, 0, 0.5);
    height: 6px;
    border-radius: 100px;
}

.buttons {
    position: absolute;
    font-size: 20px;
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
    cursor: var(--cursor-pointer);
    text-align: center;
    background: var(--uploader-draggable-background);
    border: var(--uploader-draggable-border-width) dashed var(--uploader-draggable-border-color);
    border-radius: var(--uploader-draggable-border-radius);
    padding: var(--uploader-draggable-padding);
    transition: all var(--transition-duration-base);
}

.draggable:hover, .draggable[dragover] {
    border-color: var(--uploader-draggable-border-color-hover);
}

.draggable::before {
    font-size: 32px;
    icon-font: url('./assets/upload.svg');
}
</style>
