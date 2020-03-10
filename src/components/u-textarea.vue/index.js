import UInput from '../u-input.vue';
import { getSize } from '../../utils/style';

export const UTextarea = {
    name: 'u-textarea',
    extends: UInput,
    props: {
        resize: { type: String, default: 'vertical', validator: (value) => ['none', 'horizontal', 'vertical', 'both'].includes(value) },
    },
    data() {
        return {
            startWidth: 0,
            startHeight: 0,
            width: '',
            height: '',
        };
    },
    methods: {
        onDragStart() {
            const size = getSize(this.$el);
            this.startWidth = size.width;
            this.startHeight = size.height;
        },
        onDrag($event) {
            if (this.resize === 'horizontal' || this.resize === 'both')
                this.width = this.startWidth + $event.dragX + 'px';
            if (this.resize === 'vertical' || this.resize === 'both')
                this.height = this.startHeight + $event.dragY + 'px';
            this.$refs.handle.style.left = 'auto';
            this.$refs.handle.style.top = 'auto';
        },
        autoResize() {
            const inputEl = this.$refs.input;
            if (this.autoSize === 'both' || this.autoSize === 'horizontal') {
                inputEl.style.width = '3px';
                this.width = inputEl.scrollWidth + (this.$el.offsetWidth - this.$el.clientWidth) + 'px';
                inputEl.style.width = '';
            }
            if (this.autoSize === 'both' || this.autoSize === 'vertical') {
                inputEl.style.height = '3px';
                this.height = inputEl.scrollHeight + (this.$el.offsetHeight - this.$el.clientHeight) + 'px';
                inputEl.style.height = '';
            }
        },
    },
};

export default UTextarea;
