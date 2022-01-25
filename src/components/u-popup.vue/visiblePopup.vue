<script>
import UPopupReal from './index.vue';
const normalizeSlots = (slots, context) => Object.keys(slots)
    .reduce((arr, key) => {
        slots[key].forEach((vnode) => {
            if (!vnode.context) {
                slots[key].context = context;
            }
            if (!vnode.data) {
                vnode.data = {};
            }
            vnode.data.slot = key;
        });
        return arr.concat(slots[key]);
    }, []);

export default {
    name: 'u-visible-popup',
    i18n: UPopupReal.i18n,
    components: {
        UPopupReal,
    },
    props: UPopupReal.props,
    data() {
        return {
            currentOpened: true,
        };
    },
    watch: {
        currentOpened(currentOpened) {
            this.$refs.popup.currentOpened = currentOpened;
        },
    },
    methods: {
        // 双击打开弹出框
        designerDbControl() {
            this.$refs.popup.currentOpened = !this.$refs.popup.currentOpened;
        },
        send(data) {
            const dataString = JSON.stringify(data);
            console.info('[vusion:designer] Send: ' + dataString); // (dataString.length > 100 ? dataString.slice(0, 100) + '...' : dataString));
            window.parent.postMessage({ protocol: 'vusion', sender: 'designer', data }, '*');
        },
    },
    render(h) {
        const slots = normalizeSlots(this.$slots, this.$vnode.context) || [];

        return h('div', {
            style: {
                background: '#FAFAFA',
                border: '1px dashed #C3C3C3',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                cursor: 'pointer',
            },
        }, [
            h('u-popup-real', {
                class: this.class,
                style: this.style,
                attrs: this.$attrs,
                props: this.$props,
                scopedSlots: this.$scopedSlots,
                ref: 'popup',
            }, slots),
            h('div', {}, ['双击打开/关闭弹出框']),
        ]);
    },
};

</script>
