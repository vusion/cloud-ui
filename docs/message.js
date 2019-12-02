import Vue from 'vue';
const urlSearchParams = new URLSearchParams(location.search);
const message = {
    route: '',
    singleton: urlSearchParams.get('singleton'),
};
window.addEventListener('message', (event) => {
    if (window.top !== window && event.source === window.top) {
        let data = event.data;
        if (!Array.isArray(data)) {
            data = [data];
        }
        data.forEach((item) => {
            if (item && item.type) {
                Vue.set(message, item.type, item.value);
            }
        });
    }
});
try {
    if (window.top !== window && window.top.postMessage) {
        window.top.postMessage('loaded', '*');
    }
} catch (error) {
    console.error(error);
}
export default message;
