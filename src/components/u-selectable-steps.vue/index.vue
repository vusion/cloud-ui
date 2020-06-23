<script>
import { USteps } from '../u-steps.vue';

export default {
    name: 'u-selectable-steps',
    childName: 'u-selectable-step',
    extends: USteps,
    props: {
        readonly: { type: Boolean, default: false },
        counter: { type: Boolean, default: false },
        layout: { type: String, default: 'inline' },
    },
};
</script>

<style module>
@import '../u-steps.vue/module.css';

.radio {
    background: white;
    border: 1px solid var(--border-color-base);
    vertical-align: middle;
}

.item {
    display: inline-block;
    width: auto;
    white-space: nowrap;
}

.item:first-child {
    width: auto !important;
}

.item::before {
    position: static;
    display: inline-block;
    vertical-align: middle;
    width: 140px;
}

.root[size="auto"] .item::before {
    width: 60%;
}

.item-body {
    background: white;
}

.item[passed] .radio {
    border-color: var(--brand-primary);
}

.item[passed] .radio::before {
    font-family: 'Devanagari MT', 'Gujarati MT', monospace;
    content: '✓';
    color: white;
}

.item[selected] .radio {
    background: white;
    border: 1px solid var(--border-color-base);
}

.item[selected] .radio::before {
    display: inline-block;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background: var(--brand-primary);
}
</style>
