module.exports.ignoredFiles = [
    // 虚拟列表每次计算有差异，导致快照不稳定
    'src/components/f-virtual-list.vue',
    // scope 变量不存在
    'src/components/u-for.vue/docs/blocks.md',
    // WebWorker 不支持
    'src/components/u-count-down.vue',
    // Swiper 生成的 swiper-wrapper ID 一直在变化
    'src/components/u-gallery.vue',
    // TypeError: Cannot read property 'includes' of undefined
    'src/components/u-tooltip.vue/docs/cases.md',
    // TypeError: Cannot read property 'paging' of undefined
    'src/components/u-table-view.vue/docs/blocks.md',
    'src/components/u-table-view.vue/docs/cases.md',
    // TypeError: Cannot read property 'userInfo' of undefined
    'src/components/u-navbar-multi.vue/docs/blocks.md',
]
