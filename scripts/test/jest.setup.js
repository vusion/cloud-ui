import Vue from 'vue'
import * as CloudUI from 'cloud-ui.vusion';

Vue.use(CloudUI);

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
    this.observe = jest.fn();
    this.disconnect = jest.fn();
    // Optionally add a trigger() method to manually trigger a change
    this.trigger = (mockedMutationsList) => {
        callback(mockedMutationsList, this);
    };
});
global.MutationObserver = mutationObserverMock;
