<template>
    <div :class="$style.root">
        <section>
            <div :class="$style.container" style="height: 388px;">
                <div :class="$style.content">
                    <div :class="$style.headerTitleBlock">
                        <div>CodeWave. Design</div>
                        <div>企业级UI组件库</div>
                        <div>帮助设计者与开发者快速构建中大型应用</div>
                        <u-button color="primary" @click="routeJump" text="开始使用 >_"></u-button>
                    </div>
                </div>
                <img src="@/assets/home/header.png" :class="$style.backgroundImage" />
            </div>
        </section>
        <section style="width: max(1940px, 100%);">
            <div :class="$style.carouselContainer" style="overflow: hidden;">
                <div :class="$style.title">完善的组件资源</div>
                <div :class="$style.subtitle">海量组件，高灵活性满足企业定制化需求</div>
                <div style="position: relative;">
                    <!-- 第一组轮播图 -->
                    <div :class="$style.rotationCharts">
                        <div v-for="(item, index) in rotationCharts" :key="index" :class="$style.rotationChartsItem"
                            :index="index">
                            <div :class="$style.rotationChartsItemTitle">{{ item.title }}</div>
                            <img :src="item.img" :alt="item.title">
                        </div>
                    </div>
                    <!-- 第二组轮播图 ，紧挨着第一组的右侧 ,两组图片实现无限循环轮播图 -->
                    <div style="position: absolute; top: -40px; left: 3980px;">
                        <div :class="$style.rotationCharts">
                            <div v-for="(item, index) in rotationCharts" :key="index" :class="$style.rotationChartsItem"
                                :index="index">
                                <div :class="$style.rotationChartsItemTitle">{{ item.title }}</div>
                                <img :src="item.img" :alt="item.title">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div :class="$style.container" style="height: 764px;">
                <div style="position: relative; z-index: 2;  padding-top: 80px;">
                    <div :class="$style.title">丰富的使用场景</div>
                    <div :class="$style.subtitle">轻松搭建高复杂应用</div>
                    <u-carousel :interval="2500">
                        <u-carousel-item v-for="(item, index) in carouselItems" :key="index">
                            <img :src="item" style="width: 100%;">
                        </u-carousel-item>
                    </u-carousel>
                </div>
                <img src="@/assets/home/background.png" :class="$style.backgroundImage">
            </div>
        </section>
        <section>
            <div :class="$style.container">
                <div :class="$style.title">设计原则</div>
                <div :class="$style.designPrinciple">
                    <template v-for="item in designPrinciples">
                        <div :class="$style.designPrincipleItem">
                            <img :src="item.icon" style="width: 120px; height: 120px; position: relative; z-index: 4;">
                            <div :class="$style.designPrincipleItemTitle">
                                <span style="margin-right: 8px;">{{ item.title }}</span>
                                <span style="color: #0027FE;">{{ item.subtitle.slice(0, 1) }}</span>
                                <span>{{ item.subtitle.slice(1) }}</span>
                            </div>
                            <div :class="$style.designPrincipleItemSubTitle">
                                {{ item.description }}
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>

        <u-footer></u-footer>
    </div>
</template>

<script>
import uFooter from '../components/u-footer.vue';

export default {
    components: {
        uFooter
    },
    data() {
        return {
            rotationCharts: [
                {
                    title: '弹出消息',
                    img: require("@/assets/home/resource-1.png")
                },
                {
                    title: '日期选择器',
                    img: require("@/assets/home/resource-2.png")
                },
                {
                    title: '卡片',
                    img: require("@/assets/home/resource-3.png")
                },
                {
                    title: '文件上传',
                    img: require("@/assets/home/resource-4.png")
                },
                {
                    title: '级联选择',
                    img: require("@/assets/home/resource-5.png")
                },
                {
                    title: '公告',
                    img: require("@/assets/home/resource-6.png")
                },
                {
                    title: '图标',
                    img: require("@/assets/home/resource-7.png")
                },
                {
                    title: '目录',
                    img: require("@/assets/home/resource-8.png")
                },
                {
                    title: '画廊',
                    img: require("@/assets/home/resource-9.png")
                },
                {
                    title: '评分',
                    img: require("@/assets/home/resource-10.png")
                }
            ],
            carouselItems: [
                require("@/assets/home/slide-1.png"),
                require("@/assets/home/slide-2.png"),
                require("@/assets/home/slide-3.png")
            ],
            designPrinciples: {
                first: {
                    icon: require("@/assets/home/design-principles-1.png"),
                    title: '效率',
                    subtitle: 'Efficiency',
                    description: '模块化研发，让效率突飞猛进',
                },
                second: {
                    icon: require("@/assets/home/design-principles-2.png"),
                    title: '简洁',
                    subtitle: 'Concise',
                    description: '强化重要信息，避免不必要干扰',
                },
                third: {
                    icon: require("@/assets/home/design-principles-3.png"),
                    title: '灵活',
                    subtitle: 'Flexible',
                    description: '适应不同模式的企业使用',
                },
                four: {
                    icon: require("@/assets/home/design-principles-4.png"),
                    title: '一致',
                    subtitle: 'Agreement',
                    description: '一致的设计语言及交互体验松',
                },
            },
            footerClassValid: false,
        }
    },
    mounted() {
        // 鼠标移入/移出轮播图时，停止/开始动画
        const rotationCharts = document.querySelectorAll('[class^="home_rotationCharts__"]');
        for (let i = 0; i < rotationCharts.length; i++) {
            rotationCharts[i].addEventListener('mouseenter', () => {
                for (let j = 0; j < rotationCharts.length; j++) {
                    setTimeout(() => {
                        rotationCharts[j].style.animationPlayState = 'paused';
                    }, 200);

                }
            })
            rotationCharts[i].addEventListener('mouseleave', () => {
                for (let j = 0; j < rotationCharts.length; j++) {
                    setTimeout(() => {
                        rotationCharts[j].style.animationPlayState = 'running';
                    }, 200);
                }
            })
        }

        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        routeJump() {
            this.$router.push('/components/quickstart');
        },
        handleResize() {
            const windowWidth = window.innerWidth;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (windowWidth < 1940) {
                this.footerClassValid = true;
                if (windowWidth > 1220) {
                    window.scrollTo((1940 - windowWidth) / 2, scrollTop);
                } else if (windowWidth < 1220) {
                    window.scrollTo(360, scrollTop);
                }
            } else {
                this.footerClassValid = false;
            }
        }
    }
}

</script>


<style module>
.root {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0 auto;
}

.container {
    box-sizing: border-box;
    width: 1940px;
    margin: 0 auto;
    margin-bottom: 80px;
    padding: 0 10px;
    position: relative;
    z-index: 1;
}

.carouselContainer {
    box-sizing: border-box;
    max-width: 3980px;
    margin: 0 auto;
    margin-bottom: 80px;
    padding: 0 10px;
    position: relative;
    z-index: 1;
}

.content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}


.root section:nth-child(1),
.root section:nth-child(3) {
    background: #F5F8FF;
}
.root footer {
    background: linear-gradient(180deg, #26262A -3%, #0D0C0E 100%);
}

.root section {
    margin-bottom: 80px;
}


.headerTitleBlock {
    position: absolute;
    top: 85px;
    font-family: FZLanTingHeiS-R-GB;
    font-size: 22px;
    font-weight: normal;
    line-height: 36px;
    letter-spacing: 0px;
    color: #111111;
}

.headerTitleBlock div:nth-child(1) {
    font-family: FZLanTingHeiS-EB-GB;
    font-size: 36px;
    font-weight: normal;
    line-height: 56px;
    margin-bottom: 24px;
}

[class^='home_headerTitleBlock__'] [class^='u-button__'] {
    padding: 9.5px 12px;
    height: 43px;
    margin-top: 24px;
    background-color: #0027FE;
    font-family: PingFang SC;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0px;
    color: #FFFFFF;
}

[class^='u-carousel_button__'] {
    cursor: pointer;
}



.backgroundImage {
    position: absolute;
    top: 0;
    left: 10px;
    width: 1920px;
    height: 100%;
    z-index: 1;
}

.title {
    font-family: FZLanTingHeiS-EB-GB;
    font-size: 36px;
    font-weight: normal;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0px;
    color: #111111;
    margin-bottom: 8px;
}

.subtitle {
    font-family: FZLanTingHeiS-R-GB;
    font-size: 22px;
    font-weight: normal;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0px;
    color: #555555;
    margin-bottom: 40px;
}


[class^="u-carousel__"] {
    margin: 0 auto;
    width: 1202px;
    height: 480px;
}

[class^="u-carousel_item__"] {
    left: 88px;
    width: 1026px;
    height: 438px;
}

[class^="u-carousel_nav__"] [class^="u-carousel_nav-item__"] {
    width: 10px;
    height: 2px;
    border-radius: 1px;
    opacity: 0.2;
    background: #000000;
}

[class^="u-carousel_nav__"] [class^="u-carousel_nav-item__"][selected] {
    width: 20px;
    height: 2px;
    border-radius: 1px;
    opacity: 1;
    background: #0027FE;
}

[class^="u-carousel_button__"] {
    display: block;
}

.designPrinciple {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
}

.designPrincipleItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.designPrincipleItem:not(:last-child) {
    margin-right: 84px;
}

.designPrincipleItemTitle {
    font-family: PingFang SC;
    font-size: 22px;
    font-weight: 600;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0px;
    color: #111111;
    margin: 22px 0 8px;
}

.designPrincipleItemSubTitle {
    font-family: PingFang SC;
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0em;
    color: #555555;
}

.rotationCharts {
    position: relative;
    width: 3980px;
    margin: 40px 0;
    height: 438px;
    animation: move 40s linear 0s infinite;
    z-index: 2;

}

@keyframes move {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

.rotationChartsItem {
    position: absolute;
    top: 0;
    margin-right: 24px;
    height: 438px;
    border-radius: 8px;
    opacity: 1;
    background: rgba(246, 248, 255, 0.6);
    backdrop-filter: blur(10px);
    box-sizing: border-box;
    z-index: 3;
    transition: transform 0.3s ease-in-out;
}

.rotationChartsItem:hover {
    transform: scale(1.05);
    /* border: 1px solid #0027FE; */
    box-shadow: 0px 2px 4px 0px rgba(41, 48, 61, 0.1);
    z-index: 4;
}

.rotationChartsItem:hover .rotationChartsItemTitle {
    font-size: 24px;
}

.rotationChartsItem[index='0'] {
    left: 0;
}

.rotationChartsItem[index='1'] {
    left: 352px;
}

.rotationChartsItem[index='2'] {
    left: 740px;
}

.rotationChartsItem[index='3'] {
    left: 1188px;
}

.rotationChartsItem[index='4'] {
    left: 1676px;
}

.rotationChartsItem[index='5'] {
    left: 2124px;
}

.rotationChartsItem[index='6'] {
    left: 2572px;
}

.rotationChartsItem[index='7'] {
    left: 3020px;
}

.rotationChartsItem[index='8'] {
    left: 3284px;
}

.rotationChartsItem[index='9'] {
    left: 3772px;
}

.rotationChartsItem[index='0'] img {
    width: 238px;
    height: 296px;
    margin: 0 45px;
}

.rotationChartsItem[index='1'] img {
    width: 300px;
    height: 302px;
    margin: 0 32px;
}

.rotationChartsItem[index='2'] img {
    width: 360px;
    height: 284px;
    margin: 0 32px;
}

.rotationChartsItem[index='3'] img {
    width: 400px;
    height: 272px;
    margin: 0 32px;
}

.rotationChartsItem[index='4'] img {
    width: 360px;
    height: 248px;
    margin: 0 32px;
}

.rotationChartsItem[index='5'] img {
    width: 376px;
    height: 232px;
    margin: 10px 24px;
}

.rotationChartsItem[index='6'] img {
    width: 392px;
    height: 262px;
    margin: 0 16px;
}

.rotationChartsItem[index='7'] img {
    width: 140px;
    height: 292px;
    margin: 0 50px;
}

.rotationChartsItem[index='8'] img {
    width: 400px;
    height: 302px;
    margin: 0 32px;
}

.rotationChartsItem[index='9'] img {
    width: 50%;
    height: 50%;
    margin: 30px 46px;
}

.rotationChartsItemTitle {
    font-family: PingFang SC;
    font-size: 22px;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0px;
    color: #111111;
    margin: 24px 0 24px 24px;
}

.cursor {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

</style>




