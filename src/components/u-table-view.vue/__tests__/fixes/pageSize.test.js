import { mount } from '@vue/test-utils';

import PageSizeDemo from './__demos__/pageSize.vue';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('u-table-view.vue', () => {
    it('pageSizer选择器变化后，刷新数据', async () => {
        const wrapper = mount(PageSizeDemo);
        await sleep(16);

        const rows = wrapper.findAll('tr');
        expect(rows.length).toBe(11); // 1个表头，10个数据

        // 页面选择器改为50后刷新数据
        wrapper.vm.$refs.tableview.$refs.pagination.onSelectPageSize({ value: 50 });
        const button = wrapper.find('#changelistbutton');
        await button.trigger('click');
        await sleep(16);
        const rows1 = wrapper.findAll('tr');
        expect(rows1.length).toBe(51); // 1个表头，50个数据
        expect(wrapper.vm.$refs.tableview.currentData.length).toBe(50);
        expect(wrapper).toMatchSnapshot();

        // 将pageSize还原回20
        wrapper.vm.pageSize = 20;
        await sleep(16);
        const rows2 = wrapper.findAll('tr');
        expect(rows2.length).toBe(21); // 1个表头，50个数据
        expect(wrapper.vm.$refs.tableview.currentData.length).toBe(20);

        expect(wrapper).toMatchSnapshot();
    });
});