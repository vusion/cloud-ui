<template>
    <div>
        <div :class="$style.side">
            <u-sidebar size="small">
                <u-sidebar-group>
                    <u-sidebar-item to="/guide/introduce">介绍</u-sidebar-item>
                    <!-- <u-sidebar-item to="/guide/design">设计原则</u-sidebar-item> -->
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style module>
.side {
    padding: 20px 0;
    position: fixed;
    width: 220px;
    top: 64px;
    bottom: 0;
    /* height: calc(100vh - 134px); */
    background: #f0f6fa;
    overflow: auto;
}

.main {
    margin-left: 220px;
    padding: 40px;
}
</style>
