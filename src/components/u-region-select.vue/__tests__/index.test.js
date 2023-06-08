import { mount } from '@vue/test-utils';
import URegionSelect from '../index.vue';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('u-region-select', () => {
    it('should render popper basic', async () => {
        const wrapper = mount(URegionSelect, {
            propsData: {
                value: '浙江省 / 杭州市 / 滨江区',
            },
        });
        await sleep(60);
        const input = wrapper.findComponent('input');
        await input.trigger('click');
        const popper = wrapper.findComponent({ ref: 'popper' });
        expect(popper.element).toMatchSnapshot();
    });

    it('should covert to name', async () => {
        const onInput = jest.fn();
        const onUpdateVaule = jest.fn();
        const wrapper = mount(URegionSelect, {
            propsData: {
                converter: 'name',
                value: '浙江省/杭州市/滨江区',
            },
            listeners: {
                input: (value) => onInput(value),
                'update:value': (value) => onUpdateVaule(value),
            },
        });
        await sleep(60);
        const input = wrapper.findComponent('input');
        const inputEl = input.element;
        expect(inputEl.value).toBe('浙江省 / 杭州市 / 滨江区');
        await wrapper.setProps({
            value: '浙江省/杭州市/西湖区',
        });
        expect(inputEl.value).toBe('浙江省 / 杭州市 / 西湖区');
        expect(onInput).toHaveBeenLastCalledWith('浙江省/杭州市/西湖区');
        expect(onUpdateVaule).toHaveBeenLastCalledWith('浙江省/杭州市/西湖区');
        // 测试点击操作
        await input.trigger('click');
        const popper = wrapper.findComponent({ ref: 'popper' });
        const firstItem = popper.findComponent('nav a:first-child');
        await firstItem.trigger('click');
        const secondItem = popper.findAllComponents('nav a:first-child').at(1);
        await secondItem.trigger('click');
        const thirdItem = popper.findAllComponents('nav a:first-child').at(2);
        await thirdItem.trigger('click');
        expect(onInput).toHaveBeenLastCalledWith('北京市/北京市/东城区');
        expect(onUpdateVaule).toHaveBeenLastCalledWith('北京市/北京市/东城区');
    });

    it('should covert to code', async () => {
        const onInput = jest.fn();
        const onUpdateVaule = jest.fn();
        const wrapper = mount(URegionSelect, {
            propsData: {
                converter: 'code',
                value: '330108',
            },
            listeners: {
                input: (e) => onInput(e),
                'update:value': (value) => onUpdateVaule(value),
            },
        });
        await sleep(60);
        const input = wrapper.findComponent('input');
        const inputEl = input.element;
        expect(inputEl.value).toBe('浙江省 / 杭州市 / 滨江区');
        await wrapper.setProps({
            value: '330106',
        });
        expect(inputEl.value).toBe('浙江省 / 杭州市 / 西湖区');
        expect(onInput).toHaveBeenLastCalledWith('330106');
        expect(onUpdateVaule).toHaveBeenLastCalledWith('330106');
        // 测试点击操作
        await input.trigger('click');
        const popper = wrapper.findComponent({ ref: 'popper' });
        const firstItem = popper.findComponent('nav a:first-child');
        await firstItem.trigger('click');
        const secondItem = popper.findAllComponents('nav a:first-child').at(1);
        await secondItem.trigger('click');
        const thirdItem = popper.findAllComponents('nav a:first-child').at(2);
        await thirdItem.trigger('click');
        expect(onInput).toHaveBeenLastCalledWith('110101');
        expect(onUpdateVaule).toHaveBeenLastCalledWith('110101');
    });
});
