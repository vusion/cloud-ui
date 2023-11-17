<template>
  <div :class="$style.root">
    <header :class="$style.anchorParent">
      <u-anchor label="designPrinciples" :class="$style.anchorItem"></u-anchor>
      <div :class="$style.title">设计原则</div>
      <div :class="$style.thirdTitle" style="margin-bottom: 0;">设计原则与低代码产品的特征、未来发展方向紧密贴合，相当于整个组件体系的修辞手法，将引导组件库的设计方向，贯穿整个设计系统。</div>
      <div style="height: 40px; box-sizing: border-box; border-bottom: 1px solid #EDEDED;"></div>
    </header>

    <section :class="$style.anchorParent" >
      <u-anchor label="designPrinciples#efficiency" :class="$style.anchorItem"></u-anchor>
      <div :class="$style.subTitle" style="margin-top: 40px;">效率 Efficiency</div>
      <div :class="$style.thirdTitle">模块化研发，让效率突飞猛进，提供大量封装好的组件，开发者可以轻松引入并复用</div>
      <img src="@/assets/design/Efficiency.png" alt="" :class="$style.image">

    </section>

    <section :class="$style.anchorParent">
      <u-anchor label="designPrinciples#concise" :class="$style.anchorItem"></u-anchor>
      <div :class="$style.subTitle">简洁 Concise</div>
      <div :class="$style.thirdTitle">强化重要信息，避免不必要干扰，确保用户能够轻松找到重要信息</div>
      <img src="@/assets/design/Concise.png" alt="" :class="$style.image">

    </section>

    <section :class="$style.anchorParent">
      <u-anchor label="designPrinciples#flexible" :class="$style.anchorItem"></u-anchor>

      <div :class="$style.subTitle">灵活 Flexible</div>
      <div :class="$style.thirdTitle">适应不同模式的企业使用，根据企业设计规范，灵活切换主题配色等，自由配置组件内部模块，以满足特定的设计和功能要求</div>
      <img src="@/assets/design/Flexible.png" alt="" :class="$style.image">
    </section>

    <section :class="$style.anchorParent">
      <u-anchor label="designPrinciples#agreement" :class="$style.anchorItem"></u-anchor>

      <div :class="$style.subTitle">一致 Agreement</div>
      <div :class="$style.thirdTitle">一致的设计语言及交互体验，可以确保项目中的UI和交互操作在整个应用中保持一致</div>
      <img src="@/assets/design/Agreement.png" alt="" :class="$style.image">
    </section>

    <u-toc :class="$style.toc">
      <u-toc-item label="设计原则" anchorLinked="designPrinciples" to="designPrinciples">
        <u-toc-item label="效率" anchorLinked="designPrinciples#efficiency" :to="{ path: 'designPrinciples', hash: '#efficiency' }"></u-toc-item>
        <u-toc-item label="简洁" anchorLinked="designPrinciples#concise" :to="{ path: 'designPrinciples', hash: '#concise' }"></u-toc-item>
        <u-toc-item label="灵活" anchorLinked="designPrinciples#flexible" :to="{ path: 'designPrinciples', hash: '#flexible' }"></u-toc-item>
        <u-toc-item label="一致" anchorLinked="designPrinciples#agreement" :to="{ path: 'designPrinciples', hash: '#agreement' }"></u-toc-item>
    </u-toc-item>
    </u-toc>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    props: {},

    data() {
      return {}
    },

    methods: {}
  }
</script>

<style module>

  .root {
    max-width: 980px;
    margin: 0 auto;
  }

  .title {
    font-size: 32px;
    line-height: 48px;
  }

  .subTitle {
    font-size: 24px;
    line-height: 36px;
    margin-top: 64px;
  }

  .subTitle, .title {
    margin-bottom: 16px;
    color: #111111;
    letter-spacing: 0;
    font-weight: 600;
    font-family: PingFang SC;
  }

  .thirdTitle {
    font-family: PingFang SC;
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #555555;
    /* white-space: nowrap; */
    margin-bottom: 16px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .toc {
    position: fixed;
    top: 120px;
    right: 40px;
  }

  .anchorParent {
    position: relative;
  }

  .anchorItem {
    position: absolute;
    top: -90px;
    left: 0;
  }
</style>
