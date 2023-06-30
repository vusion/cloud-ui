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
window.MutationObserver = mutationObserverMock;

// 将模拟对象赋值给实际的 VisualViewport 属性
Object.defineProperty(window, 'VisualViewport', { value : function() {} });
Object.assign(window.VisualViewport.prototype, {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetLeft: 0,
    offsetTop: 0,
    pageLeft: window.pageXOffset,
    pageTop: window.pageYOffset,
    scale: Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height),
    zoom: Math.log2(Math.max(window.innerWidth / screen.availWidth, window.innerHeight / screen.availHeight)),
});
