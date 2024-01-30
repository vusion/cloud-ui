
import { mount } from '@vue/test-utils';

import { UTableView } from '../../index.js';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


describe('u-table-view.vue events test', () => {
    it('should $emit click-row', async () => {
        const handleDblClickRow = jest.fn();

        const dataSource = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];
        const wrapper = mount(UTableView, {
            propsData: {
                dataSource,
                valueField: 'name',
            },
            slots: {
                default: `
                <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
                <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
                <u-table-view-column title="地址" field="address"></u-table-view-column>
                <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>`,
            },
        });
        wrapper.vm.$on('dblclick-row', handleDblClickRow);

        await sleep(16);

        const index = 2;
        const row = wrapper.findAll('tr').at(index + 1);
        expect(row.exists()).toBe(true);

        row.trigger('dblclick');


        expect(handleDblClickRow).toBeCalled();
        expect(wrapper.emitted('dblclick-row')[0][0].index).toEqual(index);
        expect(wrapper.emitted('dblclick-row')[0][0].item).toEqual(dataSource[index]);
    });
})