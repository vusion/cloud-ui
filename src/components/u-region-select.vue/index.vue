<script>
import { result } from 'lodash';
import UCascader from '../u-cascader.vue';
import i18n from './i18n';
import RegionData from './region';
import i18nMixin from '../../mixins/i18n';

export default {
    name: 'u-region-select',
    extends: UCascader,
    // i18n,
    mixins: [i18nMixin('u-region-select')],
    props: {
        field: { type: String, default: 'value' },
        converter: String,
        // categories: {
        //     type: Array,
        //     default() {
        //         return [
        //             { label: this.$tt('province'), placeholder: this.$tt('placeholder') + this.$tt('province') },
        //             { label: this.$tt('city'), placeholder: this.$tt('placeholder') + this.$tt('city') },
        //             { label: this.$tt('district'), placeholder: this.$tt('placeholder') + this.$tt('district') },
        //         ];
        //     },
        // },
    },
    data() {
        return {
            regionDate: [],
        };
    },
    watch: {
        currentValue(value) {
            if (this.converter) {
                const newValue = this.convertValue(value);
                this.$emit('update:value', newValue);
                this.$emit('change', { sender: this, value: newValue });
                this.$emit('input', newValue, this);
            }
        },
        value(value) {
            this.syncValue(value);
        },
        regionDate() {
            this.syncValue(this.value);
        },
        async 'currentDataSource.data'(value, oldValue) {
            if (this.data.length)
                return;
            const currentData = RegionData;
            await new Promise((resolve) => setTimeout(resolve, 0));
            this.currentData = currentData.default;
            this.allMergeText = this.getMergeText(this.currentData);
            this.getSubComponents();
        },
    },
    async created() {
        if (!this.data.length) {
            const currentData = RegionData;
            // 这里加个异步，模拟之前的逻辑
            await new Promise((resolve) => setTimeout(resolve, 0));
            this.currentData = currentData.default;
            // 保存一份给 converter 用
            this.regionDate = currentData.default;
            // this.$set(this, 'regionDate', currentData.default)
            await UCascader.created.call(this);
            // 这里created是异步的，会先执行mounted。如果opened是true，下拉框会是空的。这里需要再执行下
            if (!this.$env.VUE_APP_DESIGNER && this.opened) {
                this.currentOpened = this.opened;
                this.toggle(this.opened);
            }
        }
    },
    methods: {
        // 从 converter 恢复数据后，同步到组件内部
        syncValue(value) {
            if (this.converter) {
                const rawValue = this.recoverValue(value);
                this.currentValue = rawValue;
                this.lastValueString = rawValue;
                this.lastValueArray = rawValue.split('/');
            }
        },
        // 转换为新值
        convertValue(rawValue) {
            if (!rawValue)
                return rawValue;

            switch (this.converter) {
                case 'name':
                    return rawValue.split('/').map((item) => item.trim()).join('/');

                case 'code':
                    if (this.regionDate.length) {
                        const valueArr = rawValue.split('/').map((item) => item.trim());
                        let result = null;

                        function search(children, index) {
                            for (let i = 0; i < children.length; i++) {
                                const child = children[i];
                                if (child.value === valueArr[index]) {
                                    if (index === valueArr.length - 1) {
                                        // 已经匹配到最后一级区域了
                                        result = child.code;
                                    } else {
                                        // 还需要继续往下查找子区域
                                        search(child.children, index + 1);
                                    }
                                    break;
                                }
                            }
                        }
                        search(this.regionDate, 0);
                        return result;
                    } else {
                        return rawValue;
                    }

                default:
                    return rawValue;
            }
        },
        // 恢复为原值
        recoverValue(newValue) {
            if (!newValue)
                return newValue;

            if (this.converter === 'code' && this.regionDate.length) {
                const result = [];

                function search(children, level) {
                    for (let i = 0; i < children.length; i++) {
                        const child = children[i];
                        const prefixLength = level * 2;

                        if (child.code.startsWith(newValue.substring(0, prefixLength))) {
                            // 找到了对应的区域前缀
                            result.push(child.value); // 将当前区域名称添加到结果数组

                            if (prefixLength >= newValue.length) {
                                // 已经匹配完整个code，则结束查找
                                break;
                            } else if (child.children && child.children.length > 0) {
                                // 还需要继续往下查找子区域
                                search(child.children, level + 1);
                            }
                        }
                    }
                }

                search(this.regionDate, 1);

                return result.join(' / ');
            }
            if (this.converter == 'name') {
                return newValue.replace(/\//g, ' / ');
            }
            return newValue;
        },
    },
};
</script>
