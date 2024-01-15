<template>
    <u-linear-layout mode="inline">
        <u-button v-for="item in permissionDetails" :key="item.name" :color="getColor(item)" @click="onClickButton(item)">
            {{ item.showText }}
        </u-button>
        <u-modal v-if="currentItem"
            :title="currentItem.showText"
            :visible="!!currentItem"
            ref="modal"
            @close="currentItem = undefined">
            <u-form label-layout="block" ref="form">
                <u-form-item label="审批意见" :required="currentItem.opinionsEnable" :rules="currentItem.opinionsEnable?'required':''" v-if="currentItem.name !== 'transfer'">
                    <u-textarea v-model="model.comment" size="normal full" placeholder="请输入">
                    </u-textarea>
                </u-form-item>
                <u-form-item label="请选择转交人" required rules="required" v-if="currentItem.name === 'transfer'">
                    <u-input v-model="model.userName" size="normal full" placeholder="请输入">
                    </u-input>
                </u-form-item>
            </u-form>
            <template #foot>
                <u-linear-layout justify="end">
                    <u-button @click="close()">取 消</u-button>
                    <u-button color="primary" @click="onSubmit()">提 交</u-button>
                </u-linear-layout>
            </template>
        </u-modal>
    </u-linear-layout>
</template>

<script>
export default {
    name: 'u-process-button',
    data() {
        return {
            model: {
                comment: '',
                userName: '',
            },
            currentItem: undefined,
            taskId: undefined,
            permissionDetails: [],
        };
    },
    created() {
        location.search.replace('?', '').split('&').forEach((item) => {
            const [key, value] = item.split('=');
            if (key === 'taskId') {
                this.taskId = value;
            }
        });
        if (this.taskId) {
            this.getOperationPermissionDetail();
        }
    },
    methods: {
        async getOperationPermissionDetail() {
            if (this.$processV2) {
                const res = await this.$processV2.operationPermissionDetail({
                    body: {
                        taskId: this.taskId,
                    },
                });
                this.permissionDetails = res.data;
            }
        },
        getColor(item) {
            if (['consent', 'submit'].includes(item.name)) {
                return 'primary';
            }
            return undefined;
        },
        close() {
            this.currentItem = undefined;
            this.$refs.modal.close();
        },
        async onSubmit() {
            const validateResult = await this.$refs.form.validate();
            if (validateResult.valid) {
                const dynamicRenderContainer = document.getElementById('dynamicRenderContainer');
                if (dynamicRenderContainer && dynamicRenderContainer.__vue__ && dynamicRenderContainer.__vue__.validate) {
                    const validateResult = await dynamicRenderContainer.__vue__.validate();
                    if (validateResult.valid) {
                        this.submit();
                    }
                } else {
                    this.submit();
                }
                this.$refs.modal.close();
            }
        },
        async submit() {
            if (!this.$processV2) {
                return;
            }
            const { name } = this.currentItem;
            const operate = `${name}TaskInstance`;
            const body = {
                taskId: this.taskId,
            };
            const dynamicRenderContainer = document.getElementById('dynamicRenderContainer');
            if (dynamicRenderContainer && dynamicRenderContainer.__vue__) {
                body.formData = dynamicRenderContainer.__vue__.processDetailFormData;
            }
            if (name === 'transfer') {
                body.userName = this.model.userName;
            } else {
                body.comment = this.model.comment;
            }
            await this.$processV2.setTaskInstance({
                path: {
                    operate,
                },
                body,
            });
        },
        onClickButton(item) {
            this.currentItem = item;
            Object.assign(this.model, {
                comment: '',
                userName: '',
            });
        },
    },
};
</script>
