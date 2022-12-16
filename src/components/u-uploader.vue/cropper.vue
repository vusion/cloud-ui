<template>
<div :class="$style.root">
    <u-modal title="图片裁剪" :visible="visible" size="huge" :maskClose="false" :class="$style.cropperModal">
        <div :class="$style.cropperWrapper">
            <div :class="$style.cropper" style="text-align:center">
                <vueCropper
                    ref="cropper"
                    :img="option.img"
                    :outputSize="option.size"
                    :outputType="option.outputType"
                    :info="true"
                    :full="option.full"
                    :canMove="option.canMove"
                    :canMoveBox="option.canMoveBox"
                    :original="option.original"
                    :autoCrop="option.autoCrop"
                    :fixed="option.fixed"
                    :fixedNumber="option.fixedNumber"
                    :centerBox="option.centerBox"
                    :infoTrue="option.infoTrue"
                    :fixedBox="option.fixedBox"
                    :autoCropWidth="option.autoCropWidth"
                    :autoCropHeight="option.autoCropHeight"
                    @cropMoving="cropMoving"
                    @realTime="realTime"
                />
            </div>
            <div :class="$style.previewWrapper">
                <div>裁剪预览</div>
                <div :style="previewStyle1" :class="$style.previewBoxCircle">
                    <div :style="previews.div">
                        <img :src="previews.url" :style="previews.img">
                    </div>
                </div>
            </div>
        </div>
        <div class="action-box">
            <u-linear-layout justify="center" style="width: 600px; margin-top: 5px">
<!--                <i-ico name="remove" @click="clearImgHandle" :class="$style.cropperIcon"></i-ico>-->
                <i-ico name="rotate-left" @click="rotateLeftHandle" :class="$style.cropperIcon"></i-ico>
                <i-ico name="rotate-right" @click="rotateRightHandle" :class="$style.cropperIcon"></i-ico>
<!--                <i-ico name="zoomin" @click="changeScaleHandle(2)" :class="$style.cropperIcon"></i-ico>-->
<!--                <i-ico name="zoomout" @click="changeScaleHandle(-2)" :class="$style.cropperIcon"></i-ico>-->
<!--                <i-ico name="download" @click="downloadHandle('blob')" :class="$style.cropperIcon"></i-ico>-->
            </u-linear-layout>
        </div>
        <div slot="foot">
            <u-linear-layout justify="space-between">
                <u-linear-layout>
                    <input ref="fileUpload" type="file" @change="handleChangeUpload" accept="image/*"  @click.stop style="display: none">
                    <u-button @click="uploadFile">重新上传</u-button>
                </u-linear-layout>
                <u-linear-layout>
                    <u-button @click="cancelCropper">取消</u-button>
                    <u-button color="primary" @click="finish">保存</u-button>
                </u-linear-layout>
            </u-linear-layout>
        </div>
    </u-modal>
</div>
</template>

<script>
import  { VueCropper } from 'vue-cropper';
import Vue from 'vue';
Vue.use(VueCropper);
export default {
    name: 'cropper',
    components: {
        VueCropper
    },
    data() {
        return {
            isPreview: false,
            previewImg: '', // 预览图片地址
            visible: this.modalVisible,
            // 裁剪组件的基础配置option
            option: {
                img: this.cropImg,
                info: true, // 裁剪框的大小信息
                outputSize: 1, // 裁剪生成图片的质量
                outputType: 'png', // 裁剪生成图片的格式
                canScale: true, // 图片是否允许滚轮缩放
                canMove: false, // 图片是否允许拖动
                autoCrop: true, // 是否默认生成截图框
                canMoveBox: true, // 截图框能否拖动
                autoCropWidth: 200, // 默认生成截图框宽度
                autoCropHeight: 200, // 默认生成截图框高度
                fixedBox: false, // 固定截图框大小 不允许改变
                fixed: true, // 是否开启截图框宽高固定比例
                fixedNumber: [1, 1], // 截图框的宽高比例
                full: true, // 是否输出原图比例的截图
                original: false, // 上传图片按照原始比例渲染
                centerBox: false, // 截图框是否被限制在图片里面
                infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
            },
            // 防止重复提交
            previewStyle1: {},
            previews: {},
        }
    },
    props: {
        modalVisible: {
            type: Boolean,
            default: false
        },
        cropImg: undefined,
        cropFileName: undefined,
    },
    mounted() {
        this.option.img = this.cropImg;
    },
    computed: {
    },
    watch: {
        modalVisible: {
            handler(val) {
                this.visible = val;
            },
            immediate: true
        },
        cropImg: {
            handler(val) {
                this.option.img = val;
            },
            immediate: true
        }
    },
    methods: {
        // 上传按钮 限制图片大小和类型
        handleChangeUpload(e) {
            const cropFile = e.target.files[0];
            let reader = new FileReader();
            reader.readAsArrayBuffer(cropFile);
            reader.onload = e => {
                let data;
                if (typeof e.target.result === "object") {
                    data = window.URL.createObjectURL(new Blob([e.target.result]));
                } else {
                    data = e.target.result;
                }
                this.option.img = data;
            };
        },
        // 放大/缩小
        changeScaleHandle(num) {
            num = num || 1;
            this.$refs.cropper.changeScale(num);
        },
        // 左旋转
        rotateLeftHandle() {
            this.$refs.cropper.rotateLeft();
        },
        // 右旋转
        rotateRightHandle() {
            this.$refs.cropper.rotateRight();
        },
        // 下载
        downloadHandle(type) {
            let aLink = document.createElement('a')
            aLink.download = 'author-img'
            if (type === 'blob') {
                this.$refs.cropper.getCropBlob((data) => {
                    let downImg = window.URL.createObjectURL(data)
                    aLink.href = window.URL.createObjectURL(data)
                    aLink.click()
                })
            } else {
                this.$refs.cropper.getCropData((data) => {
                    let downImg = data;
                    aLink.href = data;
                    aLink.click()
                })
            }
        },
        // 清理图片
        clearImgHandle() {
            this.option.img = ''
        },
        // 截图框移动回调函数
        cropMoving(data) {
            // 截图框的左上角 x，y和右下角坐标x，y
            // let cropAxis = [data.axis.x1, data.axis.y1, data.axis.x2, data.axis.y2]
            // console.log(cropAxis)
        },
        cancelCropper() {
            this.visible = false;
            this.option.img = '';
        },
        finish() {
            // 获取截图的 blob 数据
            this.$refs.cropper.getCropBlob((blob) => {
                this.previewImg = URL.createObjectURL(new Blob([blob]))
                this.$emit('uploadFiles', {
                    data: this.previewImg,
                    name: this.cropFileName,
                    blob: blob
                });
                this.isPreview = true
            })
            this.option.img = '';
            this.visible = false;
        },
        realTime(data) {
            const previews = data;
            const h = 0.5;

            this.previewStyle1 = {
                width: previews.w + "px",
                height: previews.h + "px",
                overflow: "hidden",
                margin: "20",
                zoom: h
            };
            this.previews = data;
        },
        uploadFile() {
            this.$refs.fileUpload.click();
        },
    },
};
</script>

<style module>
.cropper {
    display: inline-block;
    width: 600px;
    height: 350px;
}
.cropperWrapper {
    display: flex;
}
.previewWrapper {
    margin: 10px;
    display: inline-block;
}
.previewBoxCircle {
    margin: 20px 0 50px 20px;
    box-shadow: 0 0 15px gray;
    border-radius: 50%;
}
.previewBox {
    margin: 10px 0 50px 20px;
    box-shadow: 0 0 15px gray;
}
.cropperIcon {
    font-size: 18px;
}
.cropperIcon:hover {
    cursor: pointer;
}
.cropperModal [class^="u-modal_body__"] {
    margin-bottom: 2px;
}
</style>
