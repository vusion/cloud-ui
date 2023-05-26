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
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"],
  coverageReporters: ["html", "text-summary"]
};
