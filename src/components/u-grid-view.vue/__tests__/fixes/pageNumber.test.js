import { mount } from '@vue/test-utils';

import PageNumberDemo from './__demos__/pageNumber.vue';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('u-grid-view.vue', () => {
    it('pageNumber 变化', async () => {
        const wrapper = mount(PageNumberDemo);
        await sleep(16);

        // 点击到第二页
        wrapper.vm.$refs.gridview.$refs.pagination.select(2);
        await sleep(16);
        const selectedPage = wrapper.find('a[selected="selected"]');
        expect(selectedPage.text()).toBe('2');
        expect(wrapper).toMatchSnapshot();

        // 数据源变化时还原到第一页
        const button = wrapper.find('#changelistbutton');
        await button.trigger('click');
        await sleep(16);
        const selectedPage1 = wrapper.find('a[selected="selected"]');
        expect(selectedPage1.text()).toBe('1');
        expect(wrapper).toMatchSnapshot();

        // 改变pageNumber
        wrapper.vm.pageNumber = 3;
        await sleep(16);
        const selectedPage2 = wrapper.find('a[selected="selected"]');
        expect(selectedPage2.text()).toBe('3');
        expect(wrapper).toMatchSnapshot();
    });
});