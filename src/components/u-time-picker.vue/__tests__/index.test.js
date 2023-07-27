import { mount } from '@vue/test-utils';
import UTimePicker from '../index';

describe('u-time-picker.vue', () => {
    it('time picker with second unit', async () => {
        const onChange = jest.fn();
        const onUpdate = jest.fn();
        const onInput = jest.fn();
        const onUpdateTime = jest.fn();
        const wrapper = mount(UTimePicker, {
            propsData: {
                time: '12:18:13',
            },
            listeners: {
                change: onChange,
                update: onUpdate,
                input: onInput,
                'update:time': onUpdateTime,
            },
        });

        // 输入框的值
        expect(wrapper.find('input').element.value).toBe('12:18:13');
        expect(onUpdate.mock.calls[0][0]).toBe('12:18:13');
        // 弹出选择框
        await wrapper.find('input').trigger('click');
        // 选择时间
        await wrapper.find('.spinner:nth-child(1) .item[value="18"]').trigger('click');
        await wrapper.find('.spinner:nth-child(2) .item[value="18"]').trigger('click');
        await wrapper.find('.spinner:nth-child(3) .item[value="59"]').trigger('click');
        await wrapper.find('a[color="primary"]').trigger('click');
        expect(wrapper.find('input').element.value).toBe('18:18:59');
        // 校验事件参数
        expect(onChange.mock.calls[0][0]).toHaveProperty('value', '18:18:59');
        expect(onUpdateTime.mock.calls[0][0]).toBe('18:18:59');
        expect(onInput.mock.calls[0][0]).toBe('18:18:59');
    });

    it('time picker with minute unit', async () => {
        const onChange = jest.fn();
        const onUpdate = jest.fn();
        const onInput = jest.fn();
        const onUpdateTime = jest.fn();
        const wrapper = mount(UTimePicker, {
            propsData: {
                time: '12:18',
                minUnit: 'minute',
            },
            listeners: {
                change: onChange,
                update: onUpdate,
                input: onInput,
                'update:time': onUpdateTime,
            },
        });

        // 输入框的值
        expect(wrapper.find('input').element.value).toBe('12:18');
        expect(onUpdate.mock.calls[0][0]).toBe('12:18');
        // 弹出选择框
        await wrapper.find('input').trigger('click');
        // 选择时间
        await wrapper.find('.spinner:nth-child(1) .item[value="18"]').trigger('click');
        await wrapper.find('.spinner:nth-child(2) .item[value="18"]').trigger('click');
        await wrapper.find('a[color="primary"]').trigger('click');
        expect(wrapper.find('input').element.value).toBe('18:18');
        // 校验事件参数
        expect(onChange.mock.calls[0][0]).toHaveProperty('value', '18:18');
        expect(onUpdateTime.mock.calls[0][0]).toBe('18:18');
        expect(onInput.mock.calls[0][0]).toBe('18:18');
    });

    it('time picker with second unit', async () => {
        const onChange = jest.fn();
        const onUpdate = jest.fn();
        const onInput = jest.fn();
        const onUpdateStartTime = jest.fn();
        const onUpdateEndTime = jest.fn();
        const wrapper = mount(UTimePicker, {
            propsData: {
                startTime: '12:18:13',
                endTime: '18:18:18',
                range: true,
            },
            listeners: {
                change: onChange,
                update: onUpdate,
                input: onInput,
                'update:startTime': onUpdateStartTime,
                'update:endTime': onUpdateEndTime,
            },
        });

        // 输入框的值
        expect(wrapper.findAll('input').at(0).element.value).toBe('12:18:13');
        expect(wrapper.findAll('input').at(1).element.value).toBe('18:18:18');
        expect(onUpdate.mock.calls[0][0]).toEqual(['12:18:13', '18:18:18']);
        // 弹出左边选择框
        await wrapper.findAll('input').at(0).trigger('click');
        // 选择时间
        await wrapper.find('.spinner:nth-child(1) .item[value="13"]').trigger('click');
        await wrapper.find('.spinner:nth-child(2) .item[value="14"]').trigger('click');
        await wrapper.find('.spinner:nth-child(3) .item[value="15"]').trigger('click');
        await wrapper.find('a[color="primary"]').trigger('click');
        expect(wrapper.findAll('input').at(0).element.value).toBe('13:14:15');
        // 校验事件参数
        expect(onChange.mock.calls[0][0]).toHaveProperty('startTime', '13:14:15');
        expect(onUpdateStartTime.mock.calls[0][0]).toBe('13:14:15');
        expect(onInput.mock.calls[0][0]).toEqual(['13:14:15', '18:18:18'])

        // 弹出右边选择框
        await wrapper.findAll('input').at(1).trigger('click');
        // 选择时间
        await wrapper.findAll('.spinner:nth-child(1) .item[value="16"]').at(1).trigger('click');
        await wrapper.findAll('.spinner:nth-child(2) .item[value="17"]').at(1).trigger('click');
        await wrapper.findAll('.spinner:nth-child(3) .item[value="18"]').at(1).trigger('click');
        await wrapper.findAll('a[color="primary"]').at(1).trigger('click');
        expect(wrapper.findAll('input').at(1).element.value).toBe('16:17:18');
        // 校验事件参数
        expect(onChange.mock.calls[1][0]).toHaveProperty('endTime', '16:17:18');
        expect(onUpdateEndTime.mock.calls[0][0]).toBe('16:17:18');
        expect(onInput.mock.calls[1][0]).toEqual(['13:14:15', '16:17:18']);
    });

    it('time picker with minute unit', async () => {
        const onChange = jest.fn();
        const onUpdate = jest.fn();
        const onInput = jest.fn();
        const onUpdateStartTime = jest.fn();
        const onUpdateEndTime = jest.fn();
        const wrapper = mount(UTimePicker, {
            propsData: {
                startTime: '12:18',
                endTime: '18:18',
                range: true,
                minUnit: 'minute',
            },
            listeners: {
                change: onChange,
                update: onUpdate,
                input: onInput,
                'update:startTime': onUpdateStartTime,
                'update:endTime': onUpdateEndTime,
            },
        });

        // 输入框的值
        expect(wrapper.findAll('input').at(0).element.value).toBe('12:18');
        expect(wrapper.findAll('input').at(1).element.value).toBe('18:18');
        expect(onUpdate.mock.calls[0][0]).toEqual(['12:18', '18:18']);
        // 弹出左边选择框
        await wrapper.findAll('input').at(0).trigger('click');
        // 选择时间
        await wrapper.find('.spinner:nth-child(1) .item[value="13"]').trigger('click');
        await wrapper.find('.spinner:nth-child(2) .item[value="14"]').trigger('click');
        await wrapper.find('a[color="primary"]').trigger('click');
        expect(wrapper.findAll('input').at(0).element.value).toBe('13:14');
        // 校验事件参数
        expect(onChange.mock.calls[0][0]).toHaveProperty('startTime', '13:14');
        expect(onUpdateStartTime.mock.calls[0][0]).toBe('13:14');
        expect(onInput.mock.calls[0][0]).toEqual(['13:14', '18:18'])

        // 弹出右边选择框
        await wrapper.findAll('input').at(1).trigger('click');
        // 选择时间
        await wrapper.findAll('.spinner:nth-child(1) .item[value="16"]').at(1).trigger('click');
        await wrapper.findAll('.spinner:nth-child(2) .item[value="17"]').at(1).trigger('click');
        await wrapper.findAll('a[color="primary"]').at(1).trigger('click');
        expect(wrapper.findAll('input').at(1).element.value).toBe('16:17');
        // 校验事件参数
        expect(onChange.mock.calls[1][0]).toHaveProperty('endTime', '16:17');
        expect(onUpdateEndTime.mock.calls[0][0]).toBe('16:17');
        expect(onInput.mock.calls[1][0]).toEqual(['13:14', '16:17']);
    });
});
