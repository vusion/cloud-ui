import Vue from 'vue';
import { UInput } from '../../index.js';
import { mount, TransitionStub } from '@vue/test-utils';

test('修复中文输入 change 事件不能正常触发问题', () => {
    const handleInput = jest.fn();
    const handleChange = jest.fn();
    const defaultTestValue = '444';
    const wrapper = mount(UInput, {
        propsData: {
            value: defaultTestValue,
        },
    });

    const input = wrapper.find('input');
    input.trigger('compositionstart');
    expect(wrapper.vm.compositionInputing).toBe(true);

    wrapper.vm.$on('input', handleInput);
    wrapper.vm.$on('update:value', handleInput);
    wrapper.vm.$on('change', handleChange);

    input.trigger('input');
    expect(handleInput).toBeCalledTimes(0);

    const testInputValue = '哈哈哈';
    input.element.value = testInputValue;
    input.trigger('compositionend');
    expect(handleInput).toBeCalled();
    expect(wrapper.emitted('input')[0][0]).toEqual(testInputValue);
    expect(handleChange).toBeCalled();
    expect(wrapper.emitted('change')[0][0].value).toEqual(testInputValue);
    expect(wrapper.emitted('change')[0][0].oldValue).toEqual(defaultTestValue);
});
