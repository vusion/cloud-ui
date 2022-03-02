<template>
   <div>
        <u-modal :visible.sync="exampleModalvisible" title="标题">
            <div style="position:relative;width:100%;height:85px;background:#F2F3F5;text-align:center;">
                <u-text style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);">对话框内容</u-text>
            </div>
        </u-modal>
        <u-linear-layout>
            <u-button @click="onOpen">Modal</u-button>
        </u-linear-layout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exampleModalvisible: false,
        };
    },
    methods: {
        onOpen() {
            this.exampleModalvisible = true;
        },
    },
};
</script>

