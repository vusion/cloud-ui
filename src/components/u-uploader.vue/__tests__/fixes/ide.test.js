
/**
 * 以下测试用例根据 docs/*.md 自动生成，请勿修改和提交！！！
 */
import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Uploader from '../../index.vue';

test('should call listener', () => {
    Vue.prototype.$env.VUE_APP_DESIGNER = true;
    const wrapper = mount(Uploader, {
        propsData: {
            value: '{{varaibles}}',
            converter: 'simple',
        },
    });
    expect(Array.isArray(wrapper.vm.$data.currentValue)).toBe(true);
    expect(wrapper.vm.$data.currentValue.length).toBe(0);
    Vue.prototype.$env.VUE_APP_DESIGNER = false;
});
