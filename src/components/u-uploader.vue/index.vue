<template>
<div :class="$style.root">
    <div v-if="draggable && (!readonly || $env.VUE_APP_DESIGNER)" :class="$style.draggable" :dragover="dragover" @click="select()"
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
    <div v-else-if="listType !== 'card' && (!readonly || $env.VUE_APP_DESIGNER)" :class="$style.select" @click="select()"
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
                <div :class="$style.textContainer" v-if="listType === 'text' && $slots['file-list']">
                        <span v-for="flag in fileListFlags" :key="flag" :class="$style[flag]">
                            <component v-if="flag !== 'download-icon' && isShowFileListItem(flag)" :style="fileListStyleInfos[flag]" :is="fileListComponentFlagMap[flag].is" v-bind="fileListComponentFlagMap[flag].getProps(item)" />
                            <a  v-else-if="downloadIconSwitcher && isShowFileListItem(flag)" :style="fileListStyleInfos['download-icon']" :href="encodeUrl(item.url)" target="_blank" download role="download">
                                <i-ico :name="downloadIcon" icotype="only"></i-ico>
                            </a> 
                        </span>
                    <i-ico name="remove" :class="$style.remove" v-if="!readonly && !disabled && !$env.VUE_APP_DESIGNER" @click="remove(index)"></i-ico>
                    <u-linear-progress v-if="item.showProgress && !$env.VUE_APP_DESIGNER" :class="$style.progress" :percent="item.percent"></u-linear-progress>
                </div>
                <div v-else>
                    <div :class="$style.thumb"><img :class="$style.img" v-if="listType === 'image'" :src="getUrl(item)"></div>
                    <a :class="$style.link" :href="encodeUrl(item.url)" target="_blank" download role="download">{{ item.name || item.url }}</a>
                    <i-ico name="remove" v-if="!readonly && !disabled" :class="$style.remove" @click="remove(index)"></i-ico>
                    <u-linear-progress v-if="item.showProgress" :class="$style.progress" :percent="item.percent"></u-linear-progress>
                </div>
            </div>
        </template>
        <template v-else>
            <div :class="$style.card" v-for="(item, index) in currentValue" :key="index" @click="!multiple && !readonly && select()">
                <div :class="$style.thumb"><img :class="$style.img" :src="getUrl(item)"></div>
                <div :class="$style.mask" :multiple="multiple || readonly" :show-progress="item.showProgress">
                    <u-linear-progress v-if="item.showProgress" :class="$style.progress" :percent="item.percent"></u-linear-progress>
                    <div :class="$style.buttons">
                        <span v-if="!readonly && !disabled" :class="$style.button" role="remove" @click.stop="remove(index)"></span>
                        <span :class="$style.button" role="preview" @click.stop="onPreview(item, index)"></span>
                        <a v-if="downLoadFilename" :class="$style.button" @click.stop :href="encodeUrl(item.url)" target="_blank" role="download" :download="downLoadFilename"></a>
                        <a v-else :class="$style.button" :href="encodeUrl(item.url)" @click.stop target="_blank" download role="download"></a>
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
        <span v-show="$env.VUE_APP_DESIGNER && listType === 'text'"  vusion-slot-name="file-list">   
            <slot name="file-list" ref="file-list"></slot>
        </span>
    </div>
    <u-lightbox :visible.sync="lightboxVisible" :value="currentIndex" animation="fade">
        <u-lightbox-item v-for="(item, index) in currentValue" :key="index" :value="index" :title="item.name"><img :src="encodeUrl(item.url || item)"></u-lightbox-item>
    </u-lightbox>
    <cropper
        v-if="openCropper"
        :crop-file-name="cropFileName"
        :crop-img="cropImg"
        :crop-config="cropConfig"
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
    components: { cropper },
    mixins: [MField],
    i18n,
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
        viaOriginURL: { type: Boolean, default: false },
        lcapIsCompress: { type: Boolean, default: false },
        fileType: { type: String, default: 'default' },
        iconMap: { type: Object, default: () => ({'doc|docx': 'file-doc', 'jpg|jpeg|png|bmp|gif|tiff|tif|webp|svg|psd|raw': 'file-jpg', 'pdf': 'file-pdf', 'xlsx': 'file-xlxs', 'txt': 'file-txt', 'ppt|pptx': 'file-ppt', 'zip': 'file-zip', 'csv': 'file-csv'}) },
        downloadIcon: { type: String, default: 'download' },
        fileIconSwitcher: { type: Boolean, default: true },
        downloadIconSwitcher: { type: Boolean, default: true },
        fileSize: { type: Boolean, default: true },
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
            fileListStyleInfos: {'file-icon': {}, 'file-name': {}, 'download-icon': {}, 'file-size': {}},
            fileListFlags: [],
        };
    },
    mounted() {
        if(!this.$env.VUE_APP_DESIGNER && this.$slots['file-list'] && this.listType === 'text') {
            const fileListVms = this.$slots['file-list'].filter(item => item.data && item.data.attrs && item.data.attrs.flag);
            fileListVms.forEach(vm => {
                this.$set(this.fileListStyleInfos, [vm.data.attrs.flag], vm.data.staticStyle);
             })
            this.fileListFlags = fileListVms.map(item => item.data.attrs.flag);
        }
    },
    computed: {
        uploadEnable() {
            return this.multiple ? this.currentValue.length < this.limit : this.currentValue.length === 0;
        },
        fileListComponentFlagMap() {
            return {
                'file-icon': {
                    is: 'i-ico', 
                    getProps: (item) => {
                        return {
                            name: this.fileTypeIcon(item),
                            icotype: "only"
                        }
                    }
                }, 
                'file-name': {
                    is: 'u-text', 
                    getProps: (item) => {
                        return {
                            text: item.name || item.url,
                            title: item.name || item.url,
                        }
                    }
                }, 
                'file-size': {
                    is: 'u-text', 
                    getProps: (item) => {
                        return {
                            text: item.size ? this.displayFileSize(item.size) : ''
                        }
                    }
                }, 
                'download-icon': {
                    is: 'i-ico', 
                    getProps: (item) => {
                        return {
                            name: this.fileTypeIcon(item),
                            icotype: "only"
                        }
                    }
                }
            }
        }
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
        fileIconSwitcher: {
            handler(switcher) {
                this.$nextTick(() => {
                    if(this.$env.VUE_APP_DESIGNER && this.$children.some(vm => vm.$attrs.flag === 'file-icon')) {
                        this.$children.find(vm => vm.$attrs.flag === 'file-icon').$el.style.display = switcher ? 'inline-block' : 'none';
                    }
                })
            },
            immediate: true,
        },
        downloadIconSwitcher: {
            handler(switcher) {
                this.$nextTick(() => {
                    if(this.$env.VUE_APP_DESIGNER && this.$children.some(vm => vm.$attrs.flag === 'download-icon')) {
                        this.$children.find(vm => vm.$attrs.flag === 'download-icon').$el.style.display = switcher ? 'inline-block' : 'none';
                   
                    }
                })
            },
            immediate: true,
        },
        fileSize: {
            handler(switcher) {
                this.$nextTick(() => {
                    if(this.$env.VUE_APP_DESIGNER && this.$children.some(vm => vm.$attrs.flag === 'file-size')) {
                        this.$children.find(vm => vm.$attrs.flag === 'file-size').$el.style.display = switcher ? 'inline-block' : 'none';
                    }
                })
            },
            immediate: true,
        }
    },
    methods: {
        displayFileSize(fileSizeInBytes) {
            const ONE_MB = 1024 * 1024;
            if (fileSizeInBytes < ONE_MB) {
                // 文件大小小于1MB，展示为KB
                const fileSizeInKB = Math.round(fileSizeInBytes / 1024);
                return `${fileSizeInKB} KB`;
            } else {
                // 文件大小大于等于1MB，展示为MB
                const fileSizeInMB = (fileSizeInBytes / ONE_MB).toFixed(2);
                return `${fileSizeInMB} MB`;
            }
        },
        isShowFileListItem(flag) {
            if(flag !== 'file-name') {
                const map = {
                    'file-icon': 'fileIconSwitcher',
                    'file-size': 'fileSize',
                    'download-icon': 'downloadIconSwitcher',
                }
                return this[map[flag]];
            }
            return true
        },
        fileTypeIcon(item) {
            const iconInfo = Object.entries(this.iconMap).find(([type]) => type.includes((item.name || item.url).split('.').pop()));
            return !!iconInfo ? (iconInfo[1] || 'file-default') : 'file-default'
        },
        isURLEncoded(url) {
            const decodedUrl = decodeURI(url); // 对 URL 进行解码
            if (decodedUrl === url) {
                return false; // URL 未被编码
            } else {
                return true; // URL 已被编码
            }
        },
        encodeUrl(url) {
            return this.isURLEncoded(url) ? url : encodeURI(url);
        },
        fromValue(value) {
            if (this.converter === 'json')
                try {
                    const parsedValue = JSON.parse(value || '[]');
                    return Array.isArray(parsedValue) ? parsedValue : [];
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
                    const currentValue = this.currentValue ? [...this.currentValue] : [];
                    values.forEach((item, index) => {
                        currentValue[index] = currentValue[index] || {};
                        currentValue[index].url = values[index];
                        currentValue[index].name = this.handleFileName(values[index]);
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
                return Array.isArray(value) && value.length === 0 ? null : this.simpleConvert(value);
            else
                return value;
        },
        simpleConvert(value) {
            return value.map((x) => (x.url || '')).join(',');
        },
        getUrl(item) {
            return this.encodeUrl(item.thumb || item.url || item);
        },
        select() {
            if (this.readonly || this.disabled || this.sending)
                return;

            this.$refs.file.value = '';
            this.$refs.file.click();
        },
        onChange(e) {
            this.modalVisible = false;
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
            // 处理开启图片编辑器
            if (this.openCropper) {
                this.$nextTick(() => {
                    this.modalVisible = true;
                });
                const cropFile = fileEl.files[0];
                this.cropFileName = cropFile.name;
                const reader = new FileReader();
                reader.readAsArrayBuffer(cropFile);
                reader.onload = (e) => {
                    let data;
                    if (typeof e.target.result === 'object') {
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
            // 可能出现传入为空字符串的情况
            if (this.maxSize === Infinity || this.maxSize === '')
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
            const file = new window.File([obj.blob], obj.name, { type: 'image/jpeg' });
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
            if (window.appInfo && window.appInfo.domainName)
                headers.DomainName = window.appInfo.domainName;
            const url = this.$formatMicroFrontUrl ? this.$formatMicroFrontUrl(this.url) : this.url;
            const formData = {
                ...this.data,
                lcapIsCompress: this.lcapIsCompress,
                viaOriginURL: this.viaOriginURL,
            };
            const requestData = {
                url,
                headers,
                withCredentials: this.withCredentials,
                file: Array.isArray(file) ? file.map(item => (new File([item], item.name.replace(/[#\+]/g, ""), {type: item.type}))) : new File([file], file.name.replace(/[#\+]/g, ""), {type: file.type}),
                data: formData,
                name: this.name,
            };
            const xhr = ajax({
                ...requestData,
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
                    if (item.url) {
                        item.name = this.handleFileName(item.url);
                    }
                    // 一次上传多个文件，返回数据是数组，需要处理
                    if (res[this.urlField]) {
                        const url = res[this.urlField];
                        if (Array.isArray(url)) {
                            this.currentValue.splice(this.currentValue.length - 1, 1);
                            url.forEach((urlTemp, urlIndex) => {
                                const urlItem = {
                                    status: 'success',
                                    name: urlTemp ? this.handleFileName(urlTemp) : file[urlIndex].name,
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
        // 展示时使用接口返回路径对应的文件名
        handleFileName(url) {
            const match = url.match(/\/([^/]+)$/);
            console.log('match', match)
            return match ? match[1] : null;
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

.list[list-type="text"]  .item{
    /* width: fit-content; */
}

.list[list-type="image"] .item {
    border: 1px solid var(--uploader-border-color);
    margin-top: var(--uploader-list-image-margin-top);
}

.list[list-type="image"] .thumb {
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
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
.file-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
}
.textContainer {
    /* width: fit-content; */
    display: flex;
    align-items: center;
    max-width: 100%;
}
.textContainer .remove{
    margin-top: 0px;
}

.file-name {
    overflow: hidden;
    max-width: 100%;
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

.card .thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
