import { mount } from '@vue/test-utils';

import { UCalendarView } from '../../index.js';
import USelect from '../../../u-select.vue/index.vue';

describe('u-calendar-view.vue change-year event test', () => {
    it('should single value change year emit change-year event', async () => {
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

        const handleChangeYear = jest.fn();
        wrapper.vm.$on('change-year', handleChangeYear);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(0);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', '2022');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeYear).toBeCalled();
            expect(wrapper.emitted('change-year')[0][0]).toEqual('2022-10-01');
        });
    });
    it('should multiple value change year emit change-year event', async () => {
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

        const handleChangeYear = jest.fn();
        wrapper.vm.$on('change-year', handleChangeYear);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(0);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', '2022');
        
        wrapper.vm.$nextTick(() => {
            expect(handleChangeYear).toBeCalled();
            expect(wrapper.emitted('change-year')[0][0]).toEqual('2022-10-01');
        });
    });
    it('should value null change year emit change-year event', async () => {
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

        const handleChangeYear = jest.fn();
        wrapper.vm.$on('change-year', handleChangeYear);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(0);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', '2022');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeYear).toBeCalled();
            expect(wrapper.emitted('change-year')[0][0]).toEqual('2022-10-01');
        });
    });

    it('should select last year day emit change-year event', async () => {
        const wrapper = mount(UCalendarView, {
            propsData: {
                data: [{
                    startTime: '2021-1-05',
                    orange: 8,
                }, {
                    startTime: '2021-1-16',
                    apple: 1,
                }, {
                    startTime: '2021-1-31',
                    apple: 3,
                    orange: 2,
                }],
                value: '2021-1-02',
            },
        });

        const handleChangeYear = jest.fn();
        wrapper.vm.$on('change-month', handleChangeYear);

        const currentDate = wrapper.vm.getCurrentFirstDay();

        const preEl = wrapper.findAll('td[type="prev"]').at(0);
        expect(preEl.exists()).toBe(true);
        preEl.trigger('click');

        wrapper.vm.$nextTick(() => {
            expect(handleChangeYear).toBeCalled();
            const finalValue = currentDate.year(2020).month(12).format('YYYY-MM-DD');
            expect(wrapper.emitted('change-year')[0][0]).toEqual(finalValue);
        });
    });
})