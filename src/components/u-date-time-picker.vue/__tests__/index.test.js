import { mount } from '@vue/test-utils';
import UDateTimePicker from '../index.js';
import { on } from 'commander';

describe('u-date-time-picker.vue', () => {
    it('date time range picker', async () => {
        const onChange = jest.fn();
        const onUpdateStartDate = jest.fn();
        const onUpdateEndDate = jest.fn();
        const wrapper = mount(UDateTimePicker, {
            propsData: {
                range: true,
                picker: 'date',
                startDate: '2023-03-10',
                endDate: '2023-03-20',
                appendTo: 'reference',
                converter: 'format',
            },
            listeners: {
                change: onChange,
                'update:startDate': onUpdateStartDate,
                'update:endDate': onUpdateEndDate,
            }
        });
        // 输入框的值
        expect(wrapper.findAll('input').at(0).element.value).toBe('2023-03-10 00:00:00');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2023-03-20 00:00:00');
        // 弹出左边日历
        await wrapper.findAll('input').at(0).trigger('click');
        // 选择左边日期
        await wrapper.findAll('[sindex="3"].daywrap').at(2).trigger('click');
        await wrapper.findAll('a[color="primary"]').at(1).trigger('click');
        expect(wrapper.findAll('input').at(0).element.value).toBe('2023-03-15 00:00:00');
        // 校验事件参数
        expect(onUpdateStartDate).toHaveBeenLastCalledWith('2023-03-15 00:00:00');
        expect(onChange.mock.calls[0][0]).toHaveProperty('startDate', 1678809600000);
        // 弹出右边日历
        await wrapper.findAll('input').at(1).trigger('click');
        // 选择右边日期
        await wrapper.findAll('[sindex="6"].daywrap').at(3).trigger('click');
        await wrapper.findAll('a[color="primary"]').at(1).trigger('click');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2023-03-25 00:00:00');
        // 校验事件参数
        expect(onUpdateEndDate).toHaveBeenLastCalledWith('2023-03-25 00:00:00');
        expect(onChange.mock.calls[1][0]).toHaveProperty('endDate', 1679673600000);
    })
})
