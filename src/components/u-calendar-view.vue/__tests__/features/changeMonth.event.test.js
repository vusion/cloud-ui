import { mount } from '@vue/test-utils';

import { UCalendarView } from '../../index.js';
import UButton from '../../../u-button.vue/index.vue';
import USelect from '../../../u-select.vue/index.vue';

describe('u-calendar-view.vue change-month event test', () => {
    it('should single value preMonth emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const uButtons = wrapper.findAllComponents(UButton);

        const preMonthButton = uButtons.at(0);
        expect(preMonthButton.exists()).toBe(true);
        preMonthButton.trigger('click');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            expect(wrapper.emitted('change-month')[0][0]).toEqual('2021-09-01');
        });
    });

    it('should multiple value preMonth emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const uButtons = wrapper.findAllComponents(UButton);

        const preMonthButton = uButtons.at(0);
        expect(preMonthButton.exists()).toBe(true);
        preMonthButton.trigger('click');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            expect(wrapper.emitted('change-month')[0][0]).toEqual('2021-09-01');
        });
    });

    it('should value null preMonth emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const currentDate = wrapper.vm.getCurrentFirstDay();

        const uButtons = wrapper.findAllComponents(UButton);

        const preMonthButton = uButtons.at(0);
        expect(preMonthButton.exists()).toBe(true);
        preMonthButton.trigger('click');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            const finalValue = currentDate.subtract(1, 'month').format('YYYY-MM-DD');
            expect(wrapper.emitted('change-month')[0][0]).toEqual(finalValue);
        });
    });

    it('should single value nextMonth emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const uButtons = wrapper.findAllComponents(UButton);

        const nextMonthButton = uButtons.at(2);
        expect(nextMonthButton.exists()).toBe(true);
        nextMonthButton.trigger('click');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            expect(wrapper.emitted('change-month')[0][0]).toEqual('2021-11-01');
        });
    });

    it('should multiple value nextMonth emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const uButtons = wrapper.findAllComponents(UButton);

        const nextMonthButton = uButtons.at(2);
        expect(nextMonthButton.exists()).toBe(true);
        nextMonthButton.trigger('click');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            expect(wrapper.emitted('change-month')[0][0]).toEqual('2021-11-01');
        });
    });

    it('should value null nextMonth emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const currentDate = wrapper.vm.getCurrentFirstDay();

        const uButtons = wrapper.findAllComponents(UButton);

        const nextMonthButton = uButtons.at(2);
        expect(nextMonthButton.exists()).toBe(true);
        nextMonthButton.trigger('click');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            const finalValue = currentDate.add(1, 'month').format('YYYY-MM-DD');
            expect(wrapper.emitted('change-month')[0][0]).toEqual(finalValue);
        });
    });

    it('should change month emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(1);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', 10);

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            expect(wrapper.emitted('change-month')[0][0]).toEqual('2021-11-01');
        });
    });

    it('should single value change month emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(1);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', 10);

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            expect(wrapper.emitted('change-month')[0][0]).toEqual('2021-11-01');
        });
    });

    it('should multiple value change month emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(1);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', 10);

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            expect(wrapper.emitted('change-month')[0][0]).toEqual('2021-11-01');
        });
    });

    it('should value null change month emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const currentDate = wrapper.vm.getCurrentFirstDay();

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(1);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', 10);

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            const finalValue = currentDate.month(10).format('YYYY-MM-DD');
            expect(wrapper.emitted('change-month')[0][0]).toEqual(finalValue);
        });
    });

    it('should select last manth day emit change-month event', async () => {
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

        const handleChangeMonth = jest.fn();
        wrapper.vm.$on('change-month', handleChangeMonth);

        const currentDate = wrapper.vm.getCurrentFirstDay();

        const preEl = wrapper.findAll('td[type="prev"]').at(0);
        expect(preEl.exists()).toBe(true);
        preEl.trigger('click');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeMonth).toBeCalled();
            const finalValue = currentDate.month(9).format('YYYY-MM-DD');
            expect(wrapper.emitted('change-month')[0][0]).toEqual(finalValue);
        });
    });
})