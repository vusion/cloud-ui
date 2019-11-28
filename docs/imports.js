// export * from '../packages/x-ace-editor.vue';
export * from '../packages/x-echarts.vue';
export * from 'x-highlight.vue';

import IFontAwesome from 'i-font-awesome.vue';
import ILineAwesome from 'i-line-awesome.vue';

export { IFontAwesome, ILineAwesome };
window.message = {
    route: '',
};
window.addEventListener('message', (event) => {
    if (event.source === window.top) {
        window.message.route = event.data;
    }
});
try {
    if (window.top !== window && window.top.postMessage) {
        window.top.postMessage('loaded', '*');
    }
} catch (error) {
    console.log(error);
}
