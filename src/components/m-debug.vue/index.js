let debugInstance;

export const MDebug = {
    name: 'm-debug',
    computed: {
        isDebugInstance() {
            return this === debugInstance;
        },
    },
    beforeCreate() {
        if (!debugInstance)
            debugInstance = this;
    },
    destroyed() {
        debugInstance = undefined;
    },
};

export default MDebug;
