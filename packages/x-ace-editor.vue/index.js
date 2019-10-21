import OAceEditor from 'x-ace-editor.vue';

export const XAceEditor = {
    name: 'x-ace-editor',
    extends: OAceEditor,
    props: {
        options: {
            type: Object,
            default() {
                return {
                    showPrintMargin: false,
                };
            },
        },
        themeMode: {
            type: String,
            default: 'no-follow',
        },
    },
};

export default XAceEditor;
