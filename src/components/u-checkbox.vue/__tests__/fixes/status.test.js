import Vue from 'vue';
import { UCheckbox } from '../../index.js';
import { mount } from '@vue/test-utils';

describe('u-checkbox.vue', () => {
    it('value 设置文本值渲染', () => {
        const wrapper = mount(UCheckbox, {
            propsData: {
                value: '23333',
            },
        });
        expect(wrapper).toMatchSnapshot();
    });
});
