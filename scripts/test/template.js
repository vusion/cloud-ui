module.exports.demoFile = function processDemoCode(node, title) {
    const code = node.value
    const comment = `<!-- ${title} -->\n`
    if (code.trim().startsWith('<template>')) {
        return comment + code
    } else {
        return `${comment}
<template>
    <div>
        ${code}
    </div>
</template>
`
    }
}

module.exports.testFile = function (compName, cases) {
    if (!cases.length) return '';
    // 由于代码中存在 import Vue from 'vue'，这里不能使用 createLocalVue，
    // 否则 Vue.component('u-tooltip') 这种会找不到组件
    return `
/**
 * 以下测试用例根据 docs/*.md 自动生成，请勿修改和提交！！！
 */

import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'

${cases.map(item => `import Demo${item.order} from './__demos__/demo${item.order}.vue';`).join('\n')}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('${compName}', () => {
${cases.map(item => `
    it('Demo-${item.title}', async () => {
        const wrapper = mount(Demo${item.order},  { localVue, router });
        await sleep(16);
        expect(wrapper).toMatchSnapshot();
    });
`).join('\n')}
})
`
}

