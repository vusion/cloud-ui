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
        if (!debugInstance) debugInstance = this;
    },
    destroyed() {
        debugInstance = undefined;
    },
};
</script>
