import { mount } from '@vue/test-utils';
import { UPagination } from '../../index.js';

test('修复中文输入 change 事件不能正常触发问题', () => {
    const wrapper = mount(UPagination, {
        propsData: {
            pageSize: 0,
        },
    });

    expect(wrapper.vm.$data.currentPageSize).toBe(20);
});
