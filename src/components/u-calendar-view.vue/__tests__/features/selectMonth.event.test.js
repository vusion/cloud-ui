import { mount } from '@vue/test-utils';

import { UCalendarView } from '../../index.js';
import UButton from '../../../u-button.vue/index.vue';
import USelect from '../../../u-select.vue/index.vue';

describe('u-calendar-view.vue select-month event test', () => {
    it('should single value preMonth emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                value: '2021-10-02',
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const uButtons = wrapper.findAllComponents(UButton);

        const preMonthButton = uButtons.at(0);
        expect(preMonthButton.exists()).toBe(true);
        preMonthButton.trigger('click');
        expect(handleSelectMonth).toBeCalled();
        expect(wrapper.emitted('select-month')[0][0]).toEqual('2021-09-01');
    });

    it('should multiple value preMonth emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                multiple: true,
                value: ['2021-10-02', '2021-10-05'],
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const uButtons = wrapper.findAllComponents(UButton);

        const preMonthButton = uButtons.at(0);
        expect(preMonthButton.exists()).toBe(true);
        preMonthButton.trigger('click');
        expect(handleSelectMonth).toBeCalled();
        expect(wrapper.emitted('select-month')[0][0]).toEqual('2021-09-01');
    });

    it('should value null preMonth emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                value: null,
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const currentDate = wrapper.vm.getCurrentFirstDay();

        const uButtons = wrapper.findAllComponents(UButton);

        const preMonthButton = uButtons.at(0);
        expect(preMonthButton.exists()).toBe(true);
        preMonthButton.trigger('click');
        expect(handleSelectMonth).toBeCalled();

        const finalValue = currentDate.subtract(1, 'month').format('YYYY-MM-DD');
        expect(wrapper.emitted('select-month')[0][0]).toEqual(finalValue);
    });

    it('should single value nextMonth emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                value: '2021-10-02',
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const uButtons = wrapper.findAllComponents(UButton);

        const nextMonthButton = uButtons.at(2);
        expect(nextMonthButton.exists()).toBe(true);
        nextMonthButton.trigger('click');
        expect(handleSelectMonth).toBeCalled();
        expect(wrapper.emitted('select-month')[0][0]).toEqual('2021-11-01');
    });

    it('should multiple value nextMonth emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                multiple: true,
                value: ['2021-10-02', '2021-10-05'],
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const uButtons = wrapper.findAllComponents(UButton);

        const nextMonthButton = uButtons.at(2);
        expect(nextMonthButton.exists()).toBe(true);
        nextMonthButton.trigger('click');
        expect(handleSelectMonth).toBeCalled();
        expect(wrapper.emitted('select-month')[0][0]).toEqual('2021-11-01');
    });

    it('should value null nextMonth emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                value: null,
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const currentDate = wrapper.vm.getCurrentFirstDay();

        const uButtons = wrapper.findAllComponents(UButton);

        const nextMonthButton = uButtons.at(2);
        expect(nextMonthButton.exists()).toBe(true);
        nextMonthButton.trigger('click');

        expect(handleSelectMonth).toBeCalled();
        const finalValue = currentDate.add(1, 'month').format('YYYY-MM-DD');
        expect(wrapper.emitted('select-month')[0][0]).toEqual(finalValue);
    });

    it('should select month emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                multiple: true,
                value: ['2021-10-02', '2021-10-05'],
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(1);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', 10);

        expect(handleSelectMonth).toBeCalled();
        expect(wrapper.emitted('select-month')[0][0]).toEqual('2021-11-01');
    });

    it('should single value select month emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                value: '2021-10-02',
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(1);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', 10);

        expect(handleSelectMonth).toBeCalled();
        expect(wrapper.emitted('select-month')[0][0]).toEqual('2021-11-01');
    });

    it('should multiple value select month emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                multiple: true,
                value: ['2021-10-02', '2021-10-05'],
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(1);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', 10);

        expect(handleSelectMonth).toBeCalled();
        expect(wrapper.emitted('select-month')[0][0]).toEqual('2021-11-01');
    });

    it('should value null select month emit select-month event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-10-05',
                    orange: 8,
                }, {
                    startTime: '2021-10-16',
                    apple: 1,
                }, {
                    startTime: '2021-10-31',
                    apple: 3,
                    orange: 2,
                }],
                value: null,
            },
        });

        const handleSelectMonth = jest.fn();
        wrapper.vm.$on('select-month', handleSelectMonth);

        const currentDate = wrapper.vm.getCurrentFirstDay();

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(1);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', 10);

        expect(handleSelectMonth).toBeCalled();
        const finalValue = currentDate.month(10).format('YYYY-MM-DD');
        expect(wrapper.emitted('select-month')[0][0]).toEqual(finalValue);
    });
})