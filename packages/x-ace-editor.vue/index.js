import XAceEditor from 'x-ace-editor.vue';

export default {
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
