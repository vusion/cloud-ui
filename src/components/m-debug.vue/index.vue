<script>
let debugInstance;

export default {
    name: 'm-debug',
    computed: {
        isDebugInstance() {
            return this === debugInstance;
        },
    },
    beforeCreate() {
        /* eslint-disable consistent-this */
        if (!debugInstance)
            debugInstance = this;
    },
    destroyed() {
        debugInstance = undefined;
    },
};
</script>
