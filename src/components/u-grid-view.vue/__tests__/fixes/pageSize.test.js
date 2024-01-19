import { mount } from '@vue/test-utils';

import PageSizeDemo from './__demos__/pageSize.vue';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('u-grid-view.vue', () => {
    it('pageSizer选择器变化后，刷新数据', async () => {
        const wrapper = mount(PageSizeDemo);
        await sleep(16);

        const items = wrapper.findAll('div[index]');
        expect(items.length).toBe(10);

        // 页面选择器改为50后刷新数据
        wrapper.vm.$refs.gridview.$refs.pagination.onSelectPageSize({ value: 50 });
        const button = wrapper.find('#changelistbutton');
        await button.trigger('click');
        await sleep(16);
        const items1 = wrapper.findAll('div[index]');
        expect(items1.length).toBe(50);
        expect(wrapper.vm.$refs.gridview.currentData.length).toBe(50);
        expect(wrapper).toMatchSnapshot();

        // 将pageSize还原回20
        wrapper.vm.pageSize = 20;
        await sleep(16);
        const items2 = wrapper.findAll('div[index]');
        expect(items2.length).toBe(20);
        expect(wrapper.vm.$refs.gridview.currentData.length).toBe(20);

        expect(wrapper).toMatchSnapshot();
    });
});