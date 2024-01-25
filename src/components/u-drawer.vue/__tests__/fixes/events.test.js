import { UDrawer } from '../../index.js';
import { mount } from '@vue/test-utils';

describe('u-drawer.vue events test', () => {
    it('should $emit once open', async () => {
        const handleOpen = jest.fn();
        const wrapper = mount(UDrawer, {
          listeners: {
            'open': handleOpen,
          }
        });
        
        wrapper.vm.open();
        expect(handleOpen).toBeCalledTimes(1);
    });
});
