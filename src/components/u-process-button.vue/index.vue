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
                <u-form-item :label="$tt('approvalComments')" :required="currentItem.opinionsEnable" :rules="currentItem.opinionsEnable?'required':''" v-if="currentItem.name !== 'reassign'">
                    <u-textarea v-model="model.comment" size="normal full" :placeholder="$tt('placeholder')">
                    </u-textarea>
                </u-form-item>
                <u-form-item :label="$tt('selectTransfer')" required rules="required" v-if="currentItem.name === 'reassign'">
                    <u-select
                        text-field="userName"
                        value-field="userName"
                        :data-source="getUsersForReassign"
                        :value.sync="model.userName"
                        :initial-load="true">
                    </u-select>
                </u-form-item>
            </u-form>
            <template #foot>
                <u-linear-layout justify="end">
                    <u-button @click="close()">{{ $tt('cancel') }}</u-button>
                    <u-button color="primary" @click="onSubmit()">{{ $tt('submit') }}</u-button>
                </u-linear-layout>
            </template>
        </u-modal>
        <u-link ref="link" :destination="destination" :target="target" :link="link"></u-link>
    </u-linear-layout>
</template>

<script>
import i18nMixin from '../../mixins/i18n';
export default {
    name: 'u-process-button',
    mixins: [i18nMixin('u-process-button')],
    props: {
        target: { type: String, default: '_self' },
        destination: String,
        link: [String, Function],
    },
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
            this.getTaskOperationPermissions();
        }
    },
    methods: {
        async getTaskOperationPermissions() {
            if (this.$processV2) {
                const res = await this.$processV2.getTaskOperationPermissions({
                    body: {
                        taskId: this.taskId,
                    },
                });
                this.permissionDetails = (res.data || []).filter((item) => item.operateEnable);
            }
        },
        getColor(item) {
            if (['approve', 'submit'].includes(item.name)) {
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
                this.submit();
                this.$refs.modal.close();
            }
        },
        async submit() {
            if (!this.$processV2) {
                return;
            }
            const { name } = this.currentItem;
            const operate = `${name}Task`;
            const body = {
                taskId: this.taskId,
            };
            const dynamicRenderContainer = document.getElementById('dynamicRenderContainer');
            if (dynamicRenderContainer && dynamicRenderContainer.__vue__) {
                body.data = dynamicRenderContainer.__vue__.processDetailFormData;
            }
            if (name === 'reassign') {
                body.userForReassign = this.model.userName;
            } else {
                body.comment = this.model.comment;
            }
            await this.$processV2.setTaskInstance({
                path: {
                    operate,
                },
                body,
            });
            this.refresh();
        },
        refresh() {
            if (this.destination || this.link) {
                this.$refs.link.$el.click();
            } else {
                window.location.reload();
            }
        },
        async onClickButton(item) {
            if (item.name === 'revert') {
                return this.revertOperator();
            }
            if (item.name === 'withdraw') {
                return this.withdrawOperator();
            }
            // 表单验证后打开弹窗
            const dynamicRenderContainer = document.getElementById('dynamicRenderContainer');
            if (dynamicRenderContainer && dynamicRenderContainer.__vue__) {
                const formRefName = dynamicRenderContainer.getAttribute('ref-name');
                if (formRefName) {
                    const formRef = dynamicRenderContainer.__vue__.$refs[formRefName];
                    if (formRef && formRef.validate) {
                        const validateResult = await formRef.validate();
                        if (validateResult.valid) {
                            this.openModal(item);
                        }
                    }
                } else {
                    this.openModal(item);
                }
            } else {
                this.openModal(item);
            }
        },
        openModal(item) {
            this.currentItem = item;
            Object.assign(this.model, {
                comment: '',
                userName: '',
            });
        },
        /**
         * 回退
         */
        revertOperator() {
            return this.$confirm({
                title: this.$tt('revertTitle'),
                content: this.$tt('revertContent'),
                okButton: this.$tt('revertOK'),
                cancelButton: this.$tt('revertCancel'),
            }).then(async () => {
                if (this.$processV2) {
                    await this.$processV2.revertTask({
                        body: {
                            taskId: this.taskId,
                        },
                    });
                    this.refresh();
                }
            }).catch(() => {
                // do nothing
                console.log('error');
            });
        },
        /**
         * 撤回
         */
        withdrawOperator() {
            return this.$confirm({
                title: this.$tt('withdrawTitle'),
                content: this.$tt('withdrawContent'),
                okButton: this.$tt('withdrawOK'),
                cancelButton: this.$tt('withdrawCancel'),
            }).then(async () => {
                if (this.$processV2) {
                    await this.$processV2.withdrawTask({
                        body: {
                            taskId: this.taskId,
                        },
                    });
                    this.refresh();
                }
            }).catch(() => {
                // do nothing
            });
        },
        async getUsersForReassign() {
            if (this.$processV2) {
                const result = await this.$processV2.getUsersForReassign({
                    body: {
                        taskId: this.taskId,
                    },
                });
                return result.data;
            }
        },
    },
};
</script>
