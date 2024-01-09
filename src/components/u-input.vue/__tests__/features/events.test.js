import Vue from 'vue';
import { UInput } from '../../index.js';
import { mount, TransitionStub } from '@vue/test-utils';

describe('u-input.vue events test', () => {
    it('should $emit input', () => {
        const handleInput = jest.fn();
        const wrapper = mount(UInput, {
        });

        wrapper.vm.$on('input', handleInput);
        wrapper.vm.$on('update:value', handleInput);

        const inputText = '123';

        const input = wrapper.find('input');
        input.element.value = inputText;
        input.trigger('input');

        expect(wrapper.emitted('input')[0][0]).toEqual(inputText);
        expect(wrapper.emitted('update:value')[0][0]).toEqual(inputText);
        expect(handleInput).toBeCalledTimes(2);
    });
});
