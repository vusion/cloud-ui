import { mount } from '@vue/test-utils';

import { UCalendarView } from '../../index.js';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('u-calendar-view.vue select value test', () => {
    it('should change multiple value', async () => {
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
                value: ['2021-10-01', '2021-10-05'],
            },
        });

        const selected1 = wrapper.findAll('td[selected]');

        const selected11 = wrapper.findAll('td[selected]').at(0);
        const selected12 = wrapper.findAll('td[selected]').at(1);
        expect(selected1.length).toBe(2);

        expect(selected11.exists()).toBe(true);
        expect(selected11.text()).toBe('1');
        expect(selected12.text()).toBe('5');

        await wrapper.setProps({ value: ['2021-10-09', '2021-10-12'] });

        const selected2 = wrapper.findAll('td[selected]');

        const selected21 = wrapper.findAll('td[selected]').at(0);
        const selected22 = wrapper.findAll('td[selected]').at(1);
        expect(selected2.length).toBe(2);

        expect(selected21.exists()).toBe(true);
        expect(selected21.text()).toBe('9');
        expect(selected22.text()).toBe('12');

    });

    it('should empty multiple value', async () => {
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
                value: ['2021-10-01', '2021-10-05'],
            },
        });

        await wrapper.setProps({ value: [] });

        const selected = wrapper.findAll('td[selected]');

        expect(selected.exists()).toBe(false);
    });

    it('initial multiple value []', () => {
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
                value: [],
            },
        });

        const selected = wrapper.findAll('td[selected]');
        expect(selected.exists()).toBe(false);
    });

    it('should change single value', async () => {
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
                value: '2021-10-01',
            },
        });

        const selected1 = wrapper.findAll('td[selected]');

        const selected11 = wrapper.findAll('td[selected]').at(0);
        expect(selected1.length).toBe(1);

        expect(selected11.exists()).toBe(true);
        expect(selected11.text()).toBe('1');

        await wrapper.setProps({ value: '2021-10-09' });

        const selected2 = wrapper.findAll('td[selected]');

        const selected21 = wrapper.findAll('td[selected]').at(0);
        expect(selected2.length).toBe(1);

        expect(selected21.exists()).toBe(true);
        expect(selected21.text()).toBe('9');
    });

    it('should empty single value', async () => {
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
                value: '2021-10-01',
            },
        });

        await wrapper.setProps({ value: '' });
        const selected = wrapper.findAll('td[selected]');
        expect(selected.exists()).toBe(false);

        await wrapper.setProps({ value: null });
        const selected1 = wrapper.findAll('td[selected]');
        expect(selected1.exists()).toBe(false);
    });

    it('initial signle value is empty', () => {
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
                value: '',
            },
        });

        const selected = wrapper.findAll('td[selected]');
        expect(selected.exists()).toBe(false);
    });

    it('initial signle value is null', () => {
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

        const selected = wrapper.findAll('td[selected]');
        expect(selected.exists()).toBe(false);
    });
})