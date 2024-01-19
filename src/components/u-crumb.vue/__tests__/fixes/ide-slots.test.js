import Vue from 'vue';
import { UCrumb } from '../../index.js';
import { mount } from '@vue/test-utils';

describe('Crumb IDE slots test', () => {
    it('IDE 中空值渲染', () => {
        Vue.prototype.$env.VUE_APP_DESIGNER = true;
        const wrapper = mount(UCrumb);
        expect(wrapper).toMatchSnapshot();
        Vue.prototype.$env.VUE_APP_DESIGNER = false;
    });
});
