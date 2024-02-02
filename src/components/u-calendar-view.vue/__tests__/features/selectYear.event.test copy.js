import { mount } from '@vue/test-utils';

import { UCalendarView } from '../../index.js';
import USelect from '../../../u-select.vue/index.vue';

describe('u-calendar-view.vue select-year event test', () => {
    it('should single value select year emit select-year event', async () => {
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

        const handleSelectYear = jest.fn();
        wrapper.vm.$on('select-year', handleSelectYear);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(0);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', '2022');

        expect(handleSelectYear).toBeCalled();
        expect(wrapper.emitted('select-year')[0][0]).toEqual('2022-10-01');
    });
    it('should multiple value select year emit select-year event', async () => {
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

        const handleSelectYear = jest.fn();
        wrapper.vm.$on('select-year', handleSelectYear);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(0);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', '2022');

        expect(handleSelectYear).toBeCalled();
        expect(wrapper.emitted('select-year')[0][0]).toEqual('2022-10-01');
    });
    it('should value null select year emit select-year event', async () => {
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

        const handleSelectYear = jest.fn();
        wrapper.vm.$on('select-year', handleSelectYear);

        const uSelects = wrapper.findAllComponents(USelect);

        const uSelect = uSelects.at(0);
        expect(uSelect.exists()).toBe(true);
        uSelect.vm.$emit('input', '2022');

        expect(handleSelectYear).toBeCalled();
        expect(wrapper.emitted('select-year')[0][0]).toEqual('2022-10-01');
    });
})