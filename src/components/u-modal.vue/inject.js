// import Vue from 'vue';
const UModalSource = window.CloudUI.UModal;
const { Vue } = window;
if (UModalSource) {
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

    Vue.component('UModal', {
        name: 'u-modal',
        i18n: UModalSource.i18n,
        components: {
            UModalSource,
        },
        props: UModalSource.props,
        data() {
            return {
                currentVisible: false,
            };
        },
        watch: {
            currentVisible(currentVisible) {
                this.$refs.modal.currentVisible = currentVisible;
            },
        },
        methods: {
            // 双击打开弹出框
            designerDbControl() {
                this.$refs.modal.currentVisible = true;
            },
            closeHandler() {
                this.$refs.modal.currentVisible = false;
            },
            remove() {
                let p = this;
                while (!p.$options._scopeId) {
                    p = p.$parent;
                }
                if (p) {
                    this.send({
                        command: 'removeNode',
                        type: 'component',
                        tag: 'u-modal',
                        scopeId: p.$options._scopeId,
                        nodePath: this.$attrs['vusion-node-path'],
                    });
                }
            },
            send(data) {
                const dataString = JSON.stringify(data);
                console.info('[vusion:designer] Send: ' + dataString); // (dataString.length > 100 ? dataString.slice(0, 100) + '...' : dataString));
                window.parent.postMessage({ protocol: 'vusion', sender: 'designer', data }, '*');
            },
        },
        render(h) {
            const ctrlSlot = h('d-ctrl', {
                on: {
                    close: this.closeHandler,
                    remove: this.remove,
                },
            });
            const slots = normalizeSlots(this.$slots, this.$vnode.context) || [];
            const injectSlot = slots.find((item) => item.data.slot === 'inject');
            if (!injectSlot) {
                slots.push(h('template', {
                    slot: 'inject',
                }, [ctrlSlot]));
            } else {
                console.error('搭建平台不允许使用此 slot');
            }
            return h('div', {
                style: {
                    background: '#FAFAFA',
                    border: '1px dashed #C3C3C3',
                    height: '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                },
            }, [
                h('u-modal-source', {
                    class: this.class,
                    style: this.style,
                    attrs: this.$attrs,
                    props: this.$props,
                    on: this.$listeners,
                    scopedSlots: this.$scopedSlots,
                    ref: 'modal',
                }, slots),
                h('div', {}, ['双击编辑弹窗']),
            ]);
        },
    });
}
