<template>
    <div :class="$style.root">
        <div :class="$style.side">
            <u-sidebar style="padding: 20px 0;">
                <u-sidebar-item to="/guide/introduce">介绍</u-sidebar-item>
                <u-sidebar-item to="/guide/quickstart">快速开始</u-sidebar-item>
                <u-sidebar-item href="https://github.com/vusion/cloud-ui/releases" target="_blank">更新日志</u-sidebar-item>
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
    position: fixed;
    width: 200px;
    top: 64px;
    bottom: 0;
    overflow: hidden;
}

.main {
    margin-left: 220px;
    padding: 40px;
}
</style>
