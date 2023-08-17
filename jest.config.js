process.env.TZ = 'Asia/Shanghai';

module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    // i-ico.vue/icon.js 要求文档必须有一个 script 标签
    html: '<!DOCTYPE html><html><head><meta charset="UTF-8" /><script></script></head><body></body></html>'
  },
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "@vue/vue2-jest",
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@vusion|swiper|ssr-window|dom7|dayjs)/)',
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/scripts/test/__mocks__/styleMock.js",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/test/__mocks__/fileMock.js',
    "themeCSS": "<rootDir>/scripts/test/__mocks__/styleMock.js",
    "swiper/swiper-bundle.esm.js": "<rootDir>/node_modules/swiper/swiper-bundle.esm.js",
  },
  snapshotSerializers: ["jest-serializer-vue-tjw"],
  setupFiles: ['<rootDir>/scripts/test/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/__tests__/**",
    "!**/docs/**",
  ],
  coverageReporters: ["html", "text-summary"]
};
