<template>
    <div :class="$style.root">
        <article>
            <h1>介绍</h1>
            <section>
                <h3>什么是 Cloud-UI ?</h3>
                <p>Cloud-UI 是网易云计算前端团队推出的一款基于 Vue.js 2.0 的桌面端 UI 组件库，主要服务于网易云官网及其相关的后台产品。</p>
                <p>在做某个项目的时候，我们通常会把项目中的通用组件放在一个地方进行统一管理，这便是组件库的由来。Cloud-UI 就是我们团队（网易云计算技术部）经过大量的项目实践和总结，逐步形成的一套通用组件库。通过模块化的解决方案，可以降低开发成本，为用户提供更好的用户体验。</p>
            </section>
           <section>
               <h3>安装</h3>
               <p>以下为 npm 的安装方式:</p>
               <pre :class="$style.pre"><code v-pre>npm  install  --save  cloud-ui.vusion  vusion-utils</code></pre>
           </section>
           <section>
               <h3>快速开始</h3>
                <pre :class="$style.pre">import Vue from 'vue';<br>import * as CloudUI from 'cloud-ui.vusion';<br>import { installComponents } from 'vusion-utils';<br>installComponents(CloudUI, Vue);</pre>
           </section>
        </article>
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

}
.root h1 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    margin-bottom: 50px;
}
.root h3 {
    font-size: 16px;
    border-top: 1px solid #f4f4f4;
    margin-top: 40px;
    margin-bottom: 30px;
    padding-top: 30px;
}
.pre {
    font-size: 12px;
    background-color: #fafafa;
    border: 1px solid #eee;
    padding: 6px 12px;
    font-family: "Monaco,Menlo,Consolas,monospace";
}
.root code {
     font-family: "Monaco,Menlo,Consolas,monospace";
     font-size: 12px;
}
</style>
