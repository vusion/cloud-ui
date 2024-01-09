import Vue from 'vue';
import { UDateTimePicker } from '../../index.js';
import UTimePicker from '../../../u-time-picker.vue/index.vue';
import { mount } from '@vue/test-utils';

describe('test minUnit props', () => {
    it('should set minUnit in u-time-picker', () => {
        const wrapper = mount(UDateTimePicker, {
            attrs: {
                minUnit: 'minute',
            },
        });

        const timePicker = wrapper.findComponent(UTimePicker);
        expect(timePicker.exists()).toBe(true);
        expect(timePicker.vm.$props.minUnit).toBe('minute');
    });

    it('should set minUnit in u-time-picker of range', () => {
        const wrapper = mount(UDateTimePicker, {
            attrs: {
                minUnit: 'minute',
            },
            propsData: {
                range: true,
            },
        });

        const timePicker = wrapper.findComponent(UTimePicker);
        expect(timePicker.exists()).toBe(true);
        expect(timePicker.vm.$props.minUnit).toBe('minute');
    });
});
