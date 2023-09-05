// 参考 https://juejin.cn/post/6844903843860316167
export default class KeyMap {
    constructor() {
        this.map = new WeakMap();
        this.count = 0
    }

    getKey(obj) {
        if (!this.map.has(obj)) {
            this.map.set(obj, this.count++);
        }
        return this.map.get(obj);
    }
}
