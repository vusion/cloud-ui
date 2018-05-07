<template>
    <div :class="$style.root">
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
.root {
    width: 1180px;
    margin: 0 auto;
}
.side {
    padding: 20px 0;
    position: fixed;
    width: 200px;
    top: 64px;
    bottom: 0;
    background: #2b333f;
    overflow: hidden;
}

.main {
    margin-left: 220px;
    padding: 40px;
}
</style>
