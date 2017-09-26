import Vue from 'vue';

/**
 * @class Toast
 * @extend Base
 * @param {String}                   options.position         => 显示位置
 * @param {boolean=false}            options.single           => 始终只显示一个提示
 * @param {String}                   options.state            => info,success,warnning,error不同类型的提示
 * @param {String}                   options.message          => 提示信息
 *@param {boolean=true}              options.visible          => 显示/隐藏
 */
const Toast = {
    name: 'u-toast',
    props: {
        position: { type: String, default: 'top-center' },
        single: Boolean,
        duration: { type: Number, default: 2000 },
        state: { type: String, default: '' },
        message: String,
        visible: { type: Boolean, default: true },
    },
    data() {
        return {
            list: [],
            showState: this.state,
        };
    },
    methods: {
        show(message, duration, state) {
            if (!this.$el) {
                const ele = document.createElement('div');
                this.$mount(ele);
                document.body.appendChild(this.$el);
            }
            const options = {
                message: message || this.message,
                duration: duration || this.duration,
            };
            this.showState = state || this.showState;
            this.open(options);
        },
        open(options) {
            if (this.single && this.list[0]) {
                Object.assign(this.list[0], options);
                this.list[0].counter++;
            } else {
                this.list.unshift(options);
                this.list[0].counter = 0;
            }

            const item = this.list[0];

            if (item.duration) {
                setTimeout(() => {
                    if (!item.counter)
                        this.close(item);
                    else
                        item.counter--;
                }, item.duration);
            }
        },
        close(item) {
            const index = this.list.indexOf(item);
            if (index < 0)
                return;
            this.list.splice(index, 1);

            this.$emit('close', {
                sender: this,
                item,
            });
        },
        /**
         * @method closeAll() 关闭所有消息
         * @public
         * @return {void}
         */
        closeAll() {
            this.list = [];
        },
    },
    watch: {
        // 此处有坑啊 由于message的内容是放在数组中，msg在父组件更新后，并不会触发数组内msg的更新
        message(newValue, oldValue) {
            this.list.some((item, index) => {
                if (item.message === oldValue) {
                    item.message = newValue;
                    return true;
                }
                return false;
            });
        },
    },
};

/**
 * @method [info|success|warning|error](message[,duration]) 弹出特殊类型的消息。为show方法的简写方式。
 * @public
 * @param  {string=''} message 消息内容
 * @param  {number=toast.duration} duration 该条消息的停留毫秒数。如果为0，则表示消息常驻不消失。如果不填，则使用toast默认的duration。
 * @return {void}
 */

/**
 * @static
 * @private {Toast}
 * @description 直接初始化一个实例
 */
/**
 * @method show(message[,duration][,state]) 弹出一个消息
 * @static
 * @public
 * @param  {string=''} message 消息内容
 * @param  {number=toast.duration} duration 该条消息的停留毫秒数。如果为0，则表示消息常驻不消失。如果不填，则使用toast默认的duration。
 * @param  {string=''} state 消息状态，可选参数：`info`、`success`、`warning`、`error`
 * @return {object} item 返回弹出的消息项
 */
/**
 * @method [info|success|warning|error](message[,duration]) 弹出特殊类型的消息。为show方法的简写方式。
 * @static
 * @public
 * @param  {string=''} message 消息内容
 * @param  {number=toast.duration} duration 该条消息的停留毫秒数。如果为0，则表示消息常驻不消失。如果不填，则使用toast默认的duration。
 * @return {void}
 */
/**
 * @method close(item) 关闭某条消息
 * @static
 * @public
 * @param  {object} item 需要关闭的消息对象
 * @return {void}
 */
/**
 * @method closeAll() 关闭所有消息
 * @static
 * @public
 * @return {void}
 */
Vue.nextTick(() => {
    // 获取构造器函数 （vue-loader 处理生成d额）
    const instance = Toast.instance = new Toast._Ctor[0]();
    const STATES = Toast.STATES = ['success', 'warning', 'info', 'error'];
    const METHODS = Toast.METHODS = ['show', 'close', 'closeAll', 'success', 'warning', 'info', 'error'];
    STATES.forEach((state) => {
        Toast.methods[state] = function (message, duration) {
            this.show(message, duration, state);
        };
    });
    METHODS.forEach((method) => Toast[method] = instance[method].bind(instance));
});
export default Toast;
