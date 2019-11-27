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
    console.error(error);
}
