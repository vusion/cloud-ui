import Vue from 'vue';

Vue.prototype.$linkpao = async (url, target = '_self') => {
    try {
        let realUrl;
        if (typeof url === 'function') {
            realUrl = await url();
        } else {
            realUrl = url;
        }
        const a = document.createElement('a');
        a.setAttribute('href', realUrl);
        a.setAttribute('target', target);
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
        }, 500);
        return true;
    } catch (error) {
        return true;
    }
};
