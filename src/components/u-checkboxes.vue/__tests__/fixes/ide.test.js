
/**
 * 以下测试用例根据 docs/*.md 自动生成，请勿修改和提交！！！
 */
import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Checkboxs from '../../index.vue';

test('should call listener', () => {
    Vue.prototype.$env.VUE_APP_DESIGNER = true;
    const wrapper = mount(Checkboxs, {
        propsData: {
            value: '{{varaibles1}}',
        },
    });
    expect(Array.isArray(wrapper.vm.$data.currentValue)).toBe(true);
    expect(wrapper.vm.$data.currentValue.length).toBe(0);
    Vue.prototype.$env.VUE_APP_DESIGNER = false;
});
