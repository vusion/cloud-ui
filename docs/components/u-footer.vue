<template>
    <div :class="$style.root">
        <img src="@/assets/home/footer.png" alt="" style="width: 100%; height: 100px; display: block;" >
        <div style="background: linear-gradient(180deg, #26262A -3%, #0D0C0E 100%); height: 357px; padding-top: 40px;" >
            <img src="@/assets/home/logo-footer.png" alt=""
                style="width: 223px; height: 24px; margin: 0 auto; display: block; " @click="homePage" :class="$style.cursor">
            <div :class="$style.footerTitle">
                <span v-for="(item, index) in footerList" :key="index" @click="item.callback" :class="$style.cursor">{{
                    item.title }}</span>
            </div>
            <div :class="$style.footerGithub">
                <div style="display: flex; justify-content: center; align-items: center;" @click="linkToGithub">
                    <div :class="$style.cursor">
                        <img src="@/assets/home/github.svg" alt="" style="height: 20px; width: 20px; display: block;">
                    </div>
                    <div :class="[$style.footerGithubTitle, $style.cursor]">GitHub</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            footerList: [
                {
                    title: '首页',
                    callback: this.homePage
                },
                {
                    title: 'PC组件库',
                    callback: this.pcComponentLibrary
                },
                {
                    title: '设计原则',
                    callback: this.designPrinciple
                },
                {
                    title: '问题反馈',
                    callback: this.feedback
                }
            ],
        }
    },
    methods: {
        homePage() {
            window.scrollTo(0, 0);
        },
        pcComponentLibrary() {
            this.$router.push('/components/quickstart');
        },
        designPrinciple() {
            this.$router.push('/components/designprinciples');
        },
        feedback() {
            window.location.href = 'https://github.com/vusion/cloud-ui/issues';
        },
        linkToGithub() {
            window.location.href = 'https://github.com/vusion/cloud-ui';
        },
    },
}
</script>


<style module>
.root {
    width: max(1200px, 100%);
}
.cursor {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.footerTitle {
    font-family: PingFang SC;
    font-size: 16px;
    font-weight: normal;
    line-height: 18.72px;
    letter-spacing: 0px;
    color: #AAAAAA;
    margin: 40px auto 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 1200px;
    height: 150px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    ;
}

.footerTitle span:not(:last-child) {
    margin-right: 64px;
}

.footerGithub {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 38.5px;
}

.footerGithubTitle {
    font-family: PingFang SC;
    font-size: 16px;
    font-weight: normal;
    height: 20px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-left: 14px;
}
</style>
