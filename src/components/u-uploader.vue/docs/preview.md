<template>
<div>
     <div style="margin-bottom:40px;">
        <div class="componentClassTitle">单文件按钮</div>
        <u-uploader
            url="http://localhost:7000/api/library/upload" mutiple>
            <u-button color="primary">Upload</u-button>
        </u-uploader>
    </div>
    <div style="margin-bottom:40px;">
        <div class="componentClassTitle">单文件卡片</div>
        <u-uploader accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            url="http://localhost:7000/api/library/upload"
            list-type="card"
            mutiple>
        </u-uploader>
    </div>
    <div style="margin-bottom:40px;">
        <div class="componentClassTitle">多图片按钮</div>
        <u-uploader accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            url="http://localhost:7000/api/library/upload"
            list-type="image"
            mutiple>
            <u-button color="primary">Upload</u-button>
        </u-uploader>
    </div>
</div>
</template>