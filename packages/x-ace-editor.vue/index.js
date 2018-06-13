import XAceEditor from 'x-ace-editor.vue';

export default {
    name: 'x-ace-editor',
    props: {
        options: {
            type: Object,
            default() {
                return {
                    showPrintMargin: false,
                };
            },
        },
    },
    mixins: [XAceEditor],
};
