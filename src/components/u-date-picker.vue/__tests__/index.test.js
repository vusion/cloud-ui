import { mount } from '@vue/test-utils';
import UDatePicker from '../index.js';

describe('u-date-picker.vue', () => {
    it('date range picker', async () => {
        const onChange = jest.fn();
        const onToggle = jest.fn();
        const onUpdateStartDate = jest.fn();
        const onUpdateEndDate = jest.fn();
        const wrapper = mount(UDatePicker, {
            propsData: {
                range: true,
                picker: 'date',
                startDate: '2023-03-10',
                endDate: '2023-03-20',
                appendTo: 'reference',
            },
            listeners: {
                change: onChange,
                toggle: onToggle,
                'update:startDate': onUpdateStartDate,
                'update:endDate': onUpdateEndDate,
            }
        });
        // 输入框的值
        expect(wrapper.findAll('input').at(0).element.value).toBe('2023-03-10');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2023-03-20');
        // 弹出日历
        await wrapper.find('input').trigger('click');
        expect(onToggle.mock.calls[0][0]).toHaveProperty('opened', true);
        // 选择日期
        await wrapper.findAll('table').at(0).find('tbody tr:nth-child(3) td:nth-child(2)').trigger('click');
        await wrapper.findAll('table').at(1).find('tbody tr:nth-child(5) td:nth-child(5)').trigger('click');
        await wrapper.find('.root').trigger('click');
        // 输入框的值变化
        expect(wrapper.findAll('input').at(0).element.value).toBe('2023-03-06');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2023-04-20');
        // 绑定变量更新事件
        expect(onUpdateStartDate).toHaveBeenCalledWith('2023-03-06');
        expect(onUpdateEndDate).toHaveBeenCalledWith('2023-04-20');
        // 事件触发
        expect(onChange.mock.calls[0][0]).toHaveProperty('startDate', new Date('2023-03-06 00:00:00'));
        expect(onChange.mock.calls[1][0]).toHaveProperty('endDate', new Date('2023-04-20 00:00:00'));
        expect(onToggle.mock.calls[1][0]).toHaveProperty('opened', false);
    })

    it('month range picker', async () => {
        const onChange = jest.fn();
        const onToggle = jest.fn();
        const onUpdateStartDate = jest.fn();
        const onUpdateEndDate = jest.fn();
        const wrapper = mount(UDatePicker, {
            propsData: {
                range: true,
                picker: 'month',
                startDate: '2021-06-10',
                endDate: '2022-03-20',
                appendTo: 'reference',
            },
            listeners: {
                change: onChange,
                toggle: onToggle,
                'update:startDate': onUpdateStartDate,
                'update:endDate': onUpdateEndDate,
            }
        });
        // 输入框的值
        expect(wrapper.findAll('input').at(0).element.value).toBe('2021-06');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2022-03');
        // 弹出日历
        await wrapper.find('input').trigger('click');
        expect(onToggle.mock.calls[0][0]).toHaveProperty('opened', true);
        // 选择日期
        await wrapper.findAll('table').at(0).find('tbody tr:nth-child(2) td:nth-child(2)').trigger('click');
        await wrapper.findAll('table').at(1).find('tbody tr:nth-child(3) td:nth-child(3)').trigger('click');
        await wrapper.find('.root').trigger('click');
        // 输入框的值变化
        expect(wrapper.findAll('input').at(0).element.value).toBe('2021-05');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2022-09');
        // 绑定变量更新事件
        expect(onUpdateStartDate).toHaveBeenCalledWith('2021-05-01');
        expect(onUpdateEndDate).toHaveBeenCalledWith('2022-09-01');
        // 事件触发
        expect(onChange.mock.calls[0][0]).toHaveProperty('startDate', new Date('2021-05-01 00:00:00'));
        expect(onChange.mock.calls[1][0]).toHaveProperty('endDate', new Date('2022-09-01 00:00:00'));
        expect(onToggle.mock.calls[1][0]).toHaveProperty('opened', false);
    })

    it('quarter range picker', async () => {
        const onChange = jest.fn();
        const onToggle = jest.fn();
        const onUpdateStartDate = jest.fn();
        const onUpdateEndDate = jest.fn();
        const wrapper = mount(UDatePicker, {
            propsData: {
                range: true,
                picker: 'quarter',
                startDate: '2021-06-10',
                endDate: '2022-03-20',
                appendTo: 'reference',
            },
            listeners: {
                change: onChange,
                toggle: onToggle,
                'update:startDate': onUpdateStartDate,
                'update:endDate': onUpdateEndDate,
            }
        });
        // 输入框的值
        expect(wrapper.findAll('input').at(0).element.value).toBe('2021-Q2');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2022-Q1');
        // 弹出日历
        await wrapper.find('input').trigger('click');
        expect(onToggle.mock.calls[0][0]).toHaveProperty('opened', true);
        // 选择日期
        await wrapper.findAll('table').at(0).find('tbody tr:nth-child(1) td:nth-child(3)').trigger('click');
        await wrapper.findAll('table').at(1).find('tbody tr:nth-child(1) td:nth-child(2)').trigger('click');
        await wrapper.find('.root').trigger('click');
        // 输入框的值变化
        expect(wrapper.findAll('input').at(0).element.value).toBe('2021-Q3');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2022-Q2');
        // 绑定变量更新事件
        expect(onUpdateStartDate).toHaveBeenCalledWith('2021-07-01');
        expect(onUpdateEndDate).toHaveBeenCalledWith('2022-04-01');
        // 事件触发
        expect(onChange.mock.calls[0][0]).toHaveProperty('startDate', new Date('2021-07-01 00:00:00'));
        expect(onChange.mock.calls[1][0]).toHaveProperty('endDate', new Date('2022-04-01 00:00:00'));
        expect(onToggle.mock.calls[1][0]).toHaveProperty('opened', false);
    })

    it('year range picker', async () => {
        const onChange = jest.fn();
        const onToggle = jest.fn();
        const onUpdateStartDate = jest.fn();
        const onUpdateEndDate = jest.fn();
        const wrapper = mount(UDatePicker, {
            propsData: {
                range: true,
                picker: 'year',
                startDate: '2011-06-10',
                endDate: '2022-03-20',
                appendTo: 'reference',
            },
            listeners: {
                change: onChange,
                toggle: onToggle,
                'update:startDate': onUpdateStartDate,
                'update:endDate': onUpdateEndDate,
            }
        });
        // 输入框的值
        expect(wrapper.findAll('input').at(0).element.value).toBe('2011');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2022');
        // 弹出日历
        await wrapper.find('input').trigger('click');
        expect(onToggle.mock.calls[0][0]).toHaveProperty('opened', true);
        // 选择日期
        await wrapper.findAll('table').at(0).find('tbody tr:nth-child(3) td:nth-child(2)').trigger('click');
        await wrapper.findAll('table').at(1).find('tbody tr:nth-child(3) td:nth-child(1)').trigger('click');
        await wrapper.find('.root').trigger('click');
        // 输入框的值变化
        expect(wrapper.findAll('input').at(0).element.value).toBe('2016');
        expect(wrapper.findAll('input').at(1).element.value).toBe('2025');
        // 绑定变量更新事件
        expect(onUpdateStartDate).toHaveBeenCalledWith('2016-01-01');
        expect(onUpdateEndDate).toHaveBeenCalledWith('2025-01-01');
        // 事件触发
        expect(onChange.mock.calls[0][0]).toHaveProperty('startDate', new Date('2016-01-01 00:00:00'));
        expect(onChange.mock.calls[1][0]).toHaveProperty('endDate', new Date('2025-01-01 00:00:00'));
        expect(onToggle.mock.calls[1][0]).toHaveProperty('opened', false);
    })
})
