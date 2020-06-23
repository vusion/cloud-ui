<template>
<span :class="$style.root"><slot></slot></span>
</template>

<script>
export default {
    name: 'e-ripple',
    props: { reference: { type: [String], default: 'parent' } },
    data() {
        return { referenceEl: undefined };
    },
    mounted() {
        this.referenceEl = this.$el.parentElement;
        const computedStyle = window.getComputedStyle(this.referenceEl);
        if (computedStyle.overflow !== 'hidden')
            this.referenceEl.style.overflow = 'hidden';
        if (computedStyle.position === 'static')
            this.referenceEl.style.position = 'relative';
        this.referenceEl.addEventListener('click', this.onClick);
    },
    destroyed() {
        this.referenceEl.removeEventListener('click', this.onClick);
    },
    methods: {
        onClick(e) {
            this.$el.removeAttribute('animated');
            const pos = this.referenceEl.getBoundingClientRect();
            this.$el.style.left = e.clientX - pos.left + 'px';
            this.$el.style.top = e.clientY - pos.top + 'px';
            this.$el.setAttribute('animated', 'animated');
        },
    },
};
</script>

<style module>
.root {
    display: block;
    position: absolute;
    z-index: 9000;
    background-color: var(--ripple-background);
    border-radius: 100%;
    width: var(--ripple-size);
    height: var(--ripple-size);
    margin-left: calc(var(--ripple-size) / -2);
    margin-top: calc(var(--ripple-size) / -2);
    transform: scale(0);
    cursor: var(--cursor-pointer);
    pointer-events: none;
}

.root[color="light"] {
    background-color: var(--ripple-background-light);
}

.root[animated] {
    transition: var(--ripple-transition);
    transform: scale(12);
    background-color: transparent;
}

.reference {
    position: relative !important;
    overflow: hidden !important;
}
</style>
